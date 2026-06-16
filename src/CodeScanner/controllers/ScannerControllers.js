import { BrowserMultiFormatReader } from '@zxing/browser';
import { ScannerBuilder } from '../builders/ScannerBuilder';
import { UIBuilder } from '../builders/UIBuilder';
import { LangHandler } from '../handlers/LangHandler';
import { StateHandler } from '../handlers/StateHandler';
import { AreaResolver } from '../resolvers/AreaResolver';

export class ScannerController {
    #ctnr;
    #onScan;
    #reader;
    #media;
    #ctrl;
    #data;
    #scnr;
    #ui;
    #state;
    #scope;

    constructor(ctnr, callback) {
        this.#ctnr = ctnr;
        this.#onScan = callback;

        this.#reader = null;
        this.#media = null;
        this.#ctrl = null;

        this.#data = null;
        this.#scnr = null;
        this.#ui = null;
        this.#state = null;
        this.#scope = null;

        this.#init();
    }

    #init = () => {
        const lang = new LangHandler();

        this.#reader = new BrowserMultiFormatReader();

        this.#data = new AreaResolver(this.#ctnr);
        this.#scnr = new ScannerBuilder(this.#data.get());
        this.#ui = new UIBuilder(lang, this.#data.get());
        this.#state = new StateHandler(lang, this.#scnr.get(), this.#ui.get());

        this.#build(this.#scnr.get(), this.#ui.get());

        this.#setScope(this.#data.get());

        this.#state.default();
    };

    #build = (scnr, ui) => {
        this.#ctnr.append(scnr, ...Object.values(ui));
    };

    #setScope = (data) => {
        const tL = { x: data.scnr.left, y: data.scnr.top };
        const bR = { x: data.scnr.right, y: data.scnr.bottom };
        const cY = (bR.y - tL.y) / 2;

        this.#scope = {
            xL: tL.x,
            xR: bR.x,
            yT: tL.y + cY * (2 / 3),
            yB: bR.y - cY * (2 / 3),
        };
    };

    #setMedia = async (mode) => {
        this.#media = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: mode,
            },
        });
    };

    #getMediaId = async () => {
        return this.#media.getVideoTracks()[0].getSettings().deviceId;
    };

    #isDetected = (resPts) => {
        return resPts.every((v, i, a) => {
            return (
                a[0].x >= this.#scope.xL &&
                a[0].y >= this.#scope.yT &&
                a[1].x <= this.#scope.xR &&
                a[1].y <= this.#scope.yB
            );
        });
    };

    start = async () => {
        let timer = null;
        let code = null;

        await this.#setMedia('environment');

        this.#ctrl = await this.#reader.decodeFromVideoDevice(
            await this.#getMediaId(),
            this.#ctnr.querySelector('video'),
            (result, error, controls) => {
                try {
                    if (result) {
                        if (result.text === code) return;

                        if (this.#isDetected(result.resultPoints)) {
                            code = result.text;

                            clearTimeout(timer);

                            timer = setTimeout(() => {
                                this.#onScan(result.text);
                            }, 1250);

                            this.#state.success();
                        } else {
                            clearTimeout(timer);

                            this.#state.error();
                        }
                    } else {
                        clearTimeout(timer);

                        if (code) this.#state.error();

                        code = null;
                    }
                } catch (e) {
                    console.error(error);
                }
            },
        );
    };

    stop = () => {
        this.#ctrl.stop();
        this.#state.default();

        this.#media.getTracks().forEach((media) => {
            media.stop();
        });
    };

    cancel = (callback) => {
        this.#ctnr.querySelector('button').addEventListener('click', () => {
            callback();
        });
    };
}
