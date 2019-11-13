export default class FloatingHeader {
    header;
    last_known_scroll_position;
    ticking;
    has_class;

    constructor() {
        this.last_known_scroll_position = 0;
        [this.ticking, this.has_class] = [false, false];
        this.header = document.querySelector('header.header');
    }

    init () {
        window.addEventListener('scroll', () => {
            this.last_known_scroll_position = window.scrollY;

            if (!this.ticking) {
                window.requestAnimationFrame(() => {
                    this.shadowScrollObserver();
                    this.ticking = false;
                });

                this.ticking = true;
            }
        })
    }

    shadowScrollObserver() {
        if (this.last_known_scroll_position > 0) {
            this.addShadow();
        } else {
            this.removeShadow();
        }
    }

    addShadow() {
        if (!this.has_class) {
            this.header.classList.add('shadow');
            this.has_class = true;
        }
    }

    removeShadow() {
        if (this.has_class) {
            this.header.classList.remove('shadow');
            this.has_class = false;
        }
    }
}
