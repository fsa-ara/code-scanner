import { TRANSLATES } from '../langs/translate';

export class LangHandler {
    #lang;

    constructor() {
        this.#lang = null;

        this.#init();
    }

    #init = () => {
        const html = document.documentElement.lang;
        const nav = navigator.language;
        const lang = (html || nav).split('-')[0];

        this.#set(lang);
    };

    #set = (lang) => {
        this.#lang = TRANSLATES[lang] ? lang : 'en';
    };

    translate(key) {
        const keys = key.split('.');

        return keys.reduce((prev, curr) => prev[curr], TRANSLATES[this.#lang]);
    }
}
