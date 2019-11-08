export default {
    init() {
        reminderOnDesktop();
    },

    finalize() {},
}

const reminder = async () => {

    const i = async () =>
        (await import(/* webpackChunkName: "dist/scripts/project/reminder" */ './Project/TabReminder')).default;

    new (await i());
}

const reminderOnDesktop = () => {
    if (false && window.screen.width > 1024) {
        reminder();
    }
}
