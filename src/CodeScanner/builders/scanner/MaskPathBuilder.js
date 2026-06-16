import { SCANNER } from '../../configs/scanner.config';
import { maskCutout, maskShape } from '../../svg/mask';

export class MaskPathBuilder {
    #data;
    #pathElement;
    #pathData;
    #path;

    constructor(data) {
        this.#data = data;
        this.#pathElement = null;
        this.#pathData = null;
        this.#path = null;

        this.#exec();
    }

    #exec = () => {
        this.#createPathElement();
        this.#createPathData();
        this.#createPath();
    };

    #createPathElement = () => {
        const nsUri = 'http://www.w3.org/2000/svg';

        this.#pathElement = document.createElementNS(nsUri, 'path');
    };

    #createPathData = () => {
        const radius = SCANNER.borderRadius;
        const { width, height } = this.#data.ctnr;
        const { top, right, bottom, left } = this.#data.scnr;

        const shape = maskShape(width, height);
        const cutout = maskCutout(radius, top, right, bottom, left);
        const d = shape.concat(cutout).join(' ');

        this.#pathData = d;
    };

    #createPath = () => {
        this.#pathElement.setAttribute('d', this.#pathData);
        this.#pathElement.setAttribute('fill', 'currentColor');
        this.#pathElement.setAttribute('fill-rule', 'evenodd');

        this.#path = this.#pathElement;
    };

    get = () => {
        return this.#path;
    };
}
