import { ScannerController } from './controllers/ScannerControllers';

export class CodeScanner {
    #ctnr;
    #ctrl;
    #events;

    constructor(id) {
        this.#ctnr = document.getElementById(id);
        this.#ctrl = new ScannerController(this.#ctnr, this.#onScan);

        this.#events = new EventTarget();

        this.#bindCancel();
    }

    #onScan = (code) => {
        this.#events.dispatchEvent(
            new CustomEvent('onScan', {
                detail: {
                    code: code,
                },
            }),
        );
    };

    #onReturn = () => {
        this.#events.dispatchEvent(new CustomEvent('onReturn'));
    };

    listener = (arg, callback) => {
        if (Array.isArray(arg)) {
            arg.forEach((e) => {
                this.#events.addEventListener(e, callback);
            });

            return;
        }

        this.#events.addEventListener(arg, callback);
    };

    start = () => this.#ctrl.start();

    stop = () => this.#ctrl.stop();

    #bindCancel = () => this.#ctrl.cancel(this.#onReturn);
}
