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
                LazyLoader.showImage(images[i]);
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
            if (entry.isIntersecting) {
                if (entry.intersectionRatio > 0) {
                    // noinspection JSCheckFunctionSignatures
                    LazyLoader.showImage(entry.target);
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
            this.observer = new IntersectionObserver(this.observerCallback);
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
