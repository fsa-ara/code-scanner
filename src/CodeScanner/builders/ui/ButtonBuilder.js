import undo from '../../../assets/undo_24dp_000000_FILL1_wght400_GRAD0_opsz24.svg?raw';

export class ButtonBuilder {
    #lang;
    #buttonElement;
    #button;

    constructor(lang) {
        this.#lang = lang;
        this.#buttonElement = null;
        this.#button = null;

        this.#exec();
    }

    #exec = () => {
        this.#createButtonElement();
        this.#createButton();
    };

    #createButtonElement = () => {
        this.#buttonElement = document.createElement('button');
    };

    #createButton = () => {
        this.#buttonElement.innerHTML = undo + this.#lang.translate('button');

        this.#button = this.#buttonElement;
    };

    get = () => {
        return this.#button;
    };
}
