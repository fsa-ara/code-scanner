import { SCANNER } from '../configs/scanner.config';

export class AreaResolver {
    #ctnr;
    #data;

    constructor(ctnr) {
        this.#ctnr = ctnr;
        this.#data = {};

        this.#exec();
    }

    #exec = () => {
        this.#data = this.#compute();
    };

    #compute = () => {
        const ctnrW = this.#ctnr.clientWidth;
        const ctnrH = this.#ctnr.clientHeight;

        const scnrW = ctnrW - SCANNER.paddingX * 2;
        const scnrH = scnrW / SCANNER.aspectRatio;
        const scnrT = (ctnrH - scnrH) * SCANNER.positionY;
        const scnrR = ctnrW - SCANNER.paddingX;
        const scnrB = scnrT + scnrH;
        const scnrL = SCANNER.paddingX;

        return {
            ctnr: {
                width: ctnrW,
                height: ctnrH,
            },
            scnr: {
                width: scnrW,
                height: scnrH,
                top: scnrT,
                right: scnrR,
                bottom: scnrB,
                left: scnrL,
            },
        };
    };

    get = () => {
        return this.#data;
    };
}
