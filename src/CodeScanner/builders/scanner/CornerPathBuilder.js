import { SCANNER } from '../../configs/scanner.config';
import { corners } from '../../svg/corners';

export class CornerPathBuilder {
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
        const { top, right, bottom, left } = this.#data.scnr;

        const d = corners(radius, top, right, bottom, left).join(' ');

        this.#pathData = d;
    };

    #createPath = () => {
        this.#pathElement.setAttribute('d', this.#pathData);
        this.#pathElement.setAttribute('fill', 'none');
        this.#pathElement.setAttribute('stroke', 'currentColor');
        this.#pathElement.setAttribute('stroke-linecap', 'round');
        this.#pathElement.setAttribute('stroke-width', '4');

        this.#path = this.#pathElement;
    };

    get = () => {
        return this.#path;
    };
}
