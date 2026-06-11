export class VideoBuilder {
    #videoElement;
    #video;

    constructor() {
        this.#videoElement = null;
        this.#video = null;

        this.#exec();
    }

    #exec = () => {
        this.#createVideoElement();
        this.#createVideo();
    };

    #createVideoElement = () => {
        this.#videoElement = document.createElement('video');
    };

    #createVideo = () => {
        this.#video = this.#videoElement;
    };

    get = () => {
        return this.#video;
    };
}
