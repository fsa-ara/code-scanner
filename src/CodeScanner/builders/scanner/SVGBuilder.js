import { viewBox } from '../../svg/viewbox';

export class SVGBuilder {
    #data;
    #svgElement;
    #svgViewBox;
    #svg;

    constructor(data) {
        this.#data = data;
        this.#svgElement = null;
        this.#svgViewBox = null;
        this.#svg = null;

        this.#exec();
    }

    #exec = () => {
        this.#createSVGElement();
        this.#createSVGViewBox();
        this.#createSVG();
    };

    #createSVGElement = () => {
        const nsUri = 'http://www.w3.org/2000/svg';

        this.#svgElement = document.createElementNS(nsUri, 'svg');
    };

    #createSVGViewBox = () => {
        const { width, height } = this.#data.ctnr;

        this.#svgViewBox = viewBox(width, height);
    };

    #createSVG = () => {
        this.#svgElement.setAttribute('preserveAspectRatio', 'none');
        this.#svgElement.setAttribute('viewBox', this.#svgViewBox);

        this.#svg = this.#svgElement;
    };

    get = () => {
        return this.#svg;
    };
}
