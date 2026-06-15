import { ScannerController } from './controllers/ScannerControllers';

export class CodeScanner {
    #ctnr;
    #ctrl;
    #events;

    constructor(id) {
        this.#ctnr = document.getElementById(id);
        this.#ctrl = new ScannerController(this.#ctnr, this.#onScan);

        this.#events = new EventTarget();
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

    listener = (...arg) => {
        this.#events.addEventListener(...arg);
    };

    start = () => this.#ctrl.start();

    stop = () => this.#ctrl.stop();
}
