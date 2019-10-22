export default {
    init() {
        // Javascript that fires on all pages.
    },

    finalize() {
        // Javascript that fires on all pages. after page specific JS is fires.
        menuToggler();
    }
}

const menuToggler = () => {
    const hamburger = document.querySelector('.js-toggle-menu');
    const menu = document.querySelector('.navbar');

    hamburger.addEventListener('click', function () {
        menu.classList.remove('hidden');
    })

    document.body.addEventListener('click', function(ev) {
        if (ev.target === menu ||
            menu.contains(ev.target) ||
            ev.target === hamburger ||
            hamburger.contains(ev.target)) {
            return;
        }

        menu.classList.add('hidden');
    });
}
