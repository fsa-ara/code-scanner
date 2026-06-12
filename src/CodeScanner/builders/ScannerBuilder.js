import { CornerPathBuilder } from './scanner/CornerPathBuilder';
import { MaskPathBuilder } from './scanner/MaskPathBuilder';
import { SVGBuilder } from './scanner/SVGBuilder';
import { VideoBuilder } from './scanner/VideoBuilder';

export class ScannerBuilder {
    #data;
    #divElement;
    #div;

    constructor(data) {
        this.#data = data;
        this.#divElement = null;
        this.#div = null;

        this.#exec();
    }

    #exec = () => {
        const video = new VideoBuilder();
        const svg = new SVGBuilder(this.#data);
        const mask = new MaskPathBuilder(this.#data);
        const corners = new CornerPathBuilder(this.#data);

        this.#createDivElement();
        this.#createDiv();

        this.#addToDiv(video.get(), svg.get());
        this.#addToSVG(svg.get(), mask.get(), corners.get());
    };

    #createDivElement = () => {
        this.#divElement = document.createElement('div');
    };

    #createDiv = () => {
        this.#divElement.setAttribute('data-cs', 'scanner');

        this.#div = this.#divElement;
    };

    #addToDiv = (video, svg) => {
        this.#div.append(video, svg);
    };

    #addToSVG = (svg, mask, corners) => {
        svg.append(mask, corners);
    };

    get = () => {
        return this.#div;
    };
}
