export class AlertBuilder {
    #lang;
    #pElement;
    #p;

    constructor(lang) {
        this.#lang = lang;
        this.#pElement = null;
        this.#p = null;

        this.#exec();
    }

    #exec = () => {
        this.#createPElement();
        this.#createP();
    };

    #createPElement = () => {
        this.#pElement = document.createElement('p');
    };

    #createP = () => {
        this.#pElement.innerHTML = this.#lang.translate('alert.undetected');

        this.#p = this.#pElement;
    };

    get = () => {
        return this.#p;
    };
}
