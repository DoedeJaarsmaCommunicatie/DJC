export default class TabReminder {

    separator = '-';
    pageTitle;
    reminderText = `Heb je onze andere projecten al gezien? ${this.separator} `;

    constructor() {
        this.pageTitle = this.title;

        this.addBlurEvent();
        this.addFocusEvent();
    }

    addBlurEvent() {
        window.addEventListener('blur', ev => this.blurEvent(ev));
    }

    /**
     * @param {Event} ev
     */
    blurEvent(ev) {
        this.title = this.reminderText + this.pageTitle;
    }

    addFocusEvent() {
        window.addEventListener('focus', ev => this.focusEvent(ev));
    }

    /**
     * @param {Event} ev
     */
    focusEvent(ev) {
        this.title = this.pageTitle;
    }

    /**
     * @returns {string}
     */
    get title() {
        const title = document.head.querySelector('title') ||
            throw new Error('Title not found');

        return title.innerText;
    }


    /**
     * @param {string} val
     */
    set title(val) {
        document.head.querySelector('title').innerText = val;
    }

    /**
     * @param {string} val
     */
    set reminder(val) {
        this.reminderText = val;
    }
}
