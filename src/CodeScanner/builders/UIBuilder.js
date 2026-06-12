import { AlertBuilder } from './ui/AlertBuilder';
import { ButtonBuilder } from './ui/ButtonBuilder';
import { DescriptionBuilder } from './ui/DescriptionBuilder';

export class UIBuilder {
    #lang;
    #data;
    #divElements;
    #divs;

    constructor(lang, data) {
        this.#lang = lang;
        this.#data = data;
        this.#divElements = {};
        this.#divs = {};

        this.#exec();
    }

    #exec = () => {
        const desc = new DescriptionBuilder(this.#lang);
        const alert = new AlertBuilder(this.#lang);
        const btn = new ButtonBuilder(this.#lang);

        this.#createDivElements();
        this.#createDivs();

        this.#addToTop(desc.get());
        this.#addToBottom(alert.get(), btn.get());
    };

    #createDivElements = () => {
        this.#divElements = {
            top: document.createElement('div'),
            bottom: document.createElement('div'),
        };
    };

    #createDivs = () => {
        this.#divElements.top.setAttribute('data-cs', 'ui');
        this.#divElements.bottom.setAttribute('data-cs', 'ui');

        this.#divElements.top.style.height = this.#data.scnr.top + 'px';
        this.#divElements.bottom.style.top = this.#data.scnr.bottom + 'px';

        this.#divs = {
            top: this.#divElements.top,
            bottom: this.#divElements.bottom,
        };
    };

    #addToTop = (desc) => {
        this.#divs.top.append(desc);
    };

    #addToBottom = (alert, btn) => {
        this.#divs.bottom.append(alert, btn);
    };

    get = () => {
        return this.#divs;
    };
}
