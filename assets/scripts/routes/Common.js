export default {
    init() {
        // Javascript that fires on all pages.
    },

    finalize() {
        // Javascript that fires on all pages. after page specific JS is fires.
        menuToggleBelowTablet();
        LazyLoader();
        headerShader();
    }
}

const menuToggler = async () => {
    const i = async () =>
        (await import(/* webpackChunkName: "dist/scripts/common/menu" */'./Common/Menu')).default;
    const I = await i();
    new I('.js-navbar-wrapper', '.navbar', '.js-toggle-menu')
        .enableBodyBlockFlag()
        .init();
}

const menuToggleBelowTablet = () => {
    if (window.screen.width < 1025) {
        menuToggler();
    }
}

const LazyLoader = async () => {
    if (!document.querySelector('[data-src]')) {
        return;
    }

    const i = async () =>
        (await import(/* webpackChunkName: "dist/scripts/common/lazy-loader" */ './Common/LazyLoader')).default;

    const I = await i();
    const Loader = new I('[data-src]');

    Loader.run();
}

const headerShader = async () => {
    const i = async () =>
        (await import(/* webpackChunkName: "dist/scripts/common/header-float" */ './Common/FloatingHeader')).default;

    const I = await i();
    const shader = new I();
    shader.init();
}
