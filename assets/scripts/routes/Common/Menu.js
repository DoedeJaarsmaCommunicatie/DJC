export default class MenuToggle {
    static INACTIVE_CLASS = 'hidden';

    options = {
        blockBodyScroll: false,
    };

    menu;
    hamburger;

    constructor(wrapper, menu, burger) {
        this.setWrapper(wrapper);
        this.setMenu(menu);
        this.setBurger(burger);
    }

    init() {
        this.addBurgerListener();
        this.addBodyListener();
    }

    addBurgerListener() {
        this.hamburger.addEventListener('click', ev => this.burgerEventListener(ev))
    }

    addBodyListener() {
        document.body.addEventListener('click', ev => this.bodyEventListener(ev));
    }

    /**
     * The burger event listener
     * @param {event|MouseEvent} ev
     */
    burgerEventListener(ev) {
        this.wrapper.classList.remove(MenuToggle.INACTIVE_CLASS);
        if (this.options.blockBodyScroll)
            this.disableBodyScroll();
    }

    /**
     *
     * @param {event|MouseEvent} ev
     */
    bodyEventListener(ev) {
        if (ev.target === this.menu ||
            this.menu.contains(ev.target) ||
            ev.target === this.hamburger ||
            this.hamburger.contains(ev.target)) {
            return;
        }

        this.wrapper.classList.add(MenuToggle.INACTIVE_CLASS);
        if (this.options.blockBodyScroll)
            this.enableBodyScroll();
    }

    setMenu(menu) {
        if (!(menu instanceof HTMLElement)) {
            menu = document.querySelector(menu) ||
                throw new Error('Menu not found');
        }

        this.menu = menu;
    }

    setBurger(burger) {
        if (!(burger instanceof HTMLElement)) {
            burger = document.querySelector(burger) ||
                throw new Error('Hamburger not found');
        }

        this.hamburger = burger;
    }

    setWrapper(wrapper) {
        if (!(wrapper instanceof HTMLElement)) {
            wrapper = document.querySelector(wrapper) ||
                throw new Error('Wrapper not found');
        }

        this.wrapper = wrapper;
    }

    enableBodyBlockFlag() {
        this.options.blockBodyScroll = true;
        return this;
    }

    /**
     * @private
     */
    disableBodyScroll() {
        document.body.style.overflow = 'hidden';
    }

    /**
     * @private
     */
    enableBodyScroll() {
        document.body.style.overflow = null;
    }
}
