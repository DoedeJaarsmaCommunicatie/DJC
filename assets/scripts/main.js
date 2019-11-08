import Ready from './tools/Ready';
import './bootstrap';
import Router from './tools/Router';

const common = async () =>
    (await import(/* webpackChunkName: "dist/scripts/routes/common" */'./routes/Common')).default;
const home = async () =>
    (await import(/* webpackChunkName: "dist/scripts/routes/home" */ './routes/Home')).default;
const project = async () =>
    (await import(/* webpackChunkName: "dist/scripts/routes/project" */ './routes/Project')).default


const routes = new Router({
    common: common(),
    home: home(),
    singleProject: project()
});

Ready(() => routes.loadEvents());
