export class StateHandler {
    #lang;
    #scnr;
    #ui;
    #states;

    constructor(lang, scnr, ui) {
        this.#lang = lang;
        this.#scnr = scnr;
        this.#ui = ui;
        this.#states = {};

        this.#init();
    }

    #init = () => {
        const corners = this.#scnr.querySelector('path:last-of-type');
        const alert = this.#ui.bottom.querySelector('p');

        this.#set(corners, alert);
    };

    #set = (corners, alert) => {
        this.#states = {
            default: () => this.#default(corners, alert),
            success: () => this.#success(corners, alert),
            error: () => this.#error(corners, alert),
        };
    };

    #default = (corners, alert) => {
        corners.classList.add('idle');
        corners.classList.remove('success', 'error');

        alert.style.visibility = 'hidden';
    };

    #success = (corners, alert) => {
        corners.classList.add('success');
        corners.classList.remove('idle', 'error');

        alert.style.visibility = 'visible';
        alert.innerHTML = this.#lang.translate('alert.detected');
    };

    #error = (corners, alert) => {
        corners.classList.add('error');
        corners.classList.remove('idle', 'success');

        alert.style.visibility = 'visible';
        alert.innerHTML = this.#lang.translate('alert.undetected');
    };

    default = () => {
        return this.#states.default();
    };

    success = () => {
        return this.#states.success();
    };

    error = () => {
        return this.#states.error();
    };
}
