export default class MenuToggle {
    static INACTIVE_CLASS = 'hidden';

    menu;
    hamburger;

    constructor(menu, burger) {
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
        this.menu.classList.remove(MenuToggle.INACTIVE_CLASS);
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

        this.menu.classList.remove(MenuToggle.INACTIVE_CLASS);
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
}
