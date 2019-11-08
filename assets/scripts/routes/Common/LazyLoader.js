export default class LazyLoader {
    selector;
    observer;

    /**
     * Create the loader.
     *
     * @param {string} selector the image selector
     * @constructs
     */
    constructor(selector) {
        this.selector = selector;
        this.setup();
    }

    /**
     * Sets up the observer
     * @return {void}
     */
    setup() {
        this._CreateObserver();
    }

    /**
     * Runs the loader.
     */
    run() {
        const images = this.findAllImages();
        if (!this.observer) {
            for ( let i = 0; i < images.length; i++ ) {
                new ImageElement(images[i])
                    .run();
            }
            return;
        }

        images.forEach(element => this.Observer.observe(element));
    }

    /**
     * Gets all images
     *
     * @returns {NodeListOf<HTMLElementTagNameMap[*]> | *}
     */
    findAllImages() {
        return document.querySelectorAll(this.selector) ||
            throw new Error('No Images found');
    }

    /**
     * Loads the image if on screen.
     *
     * @param {Array<IntersectionObserverEntry>} entries
     * @param {IntersectionObserver} observer
     */
    observerCallback(entries, observer) {
        entries.forEach(entry => {
            const Img = new ImageElement(entry.target);
            if (entry.isIntersecting) {
                if (entry.intersectionRatio > 0) {
                    Img.run();
                    observer.unobserve(entry.target);
                }
            }
        });
    }

    /**
     * Sets the correct URL
     *
     * @param {HTMLElement} el
     * @static
     * @deprecated
     */
    static showImage(el) {
        el.src = el.dataset.src;
        const srcset = el.dataset.srcset;
        if (srcset) {
            el.setAttribute('srcset', srcset);
        }
        el.removeAttribute('data-src');
    }

    /**
     * Creates the Observer if it exists
     * @private
     */
    _CreateObserver() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(this.observerCallback, {
                rootMargin: '250px 0px'
            });
        } else {
            this.observer = false;
        }
    }

    /**
     * @returns {IntersectionObserver}
     */
    get Observer() {
        return this.observer;
    }
}

export class ImageElement {
    static PLACEHOLDER = '//via.placeholder.com/1200x600';

    image;

    constructor(image) {
        this.imageElement(image);
    }

    /**
     * @param {string|HTMLElement}image
     */
    imageElement(image) {
        if (!(image instanceof Element)) {
            image = document.querySelector(image);
        }

        if (!image) {
            throw new Error('Image not found');
        }

        this.image = image;
    }

    run() {
        this.image.onload = () => this.removeDataSrc();
        this.downloadSource();
    }

    loadSource() {
        this.src = this.dataSrc;
    }

    downloadSource() {
        const img = new Image();
        img.addEventListener('load', ev => {
            this.src = ev.target.src;
        });

        img.src = this.dataSrc;
    }

    insertSource() {}

    removeDataSrc() {
        this.image.removeAttribute('data-src');
    }

    get src () {
        return this.image.src;
    }

    get dataSrc() {
        return this.image.dataset.src;
    }

    set src(val) {
        this.image.src = val;
    }
}
