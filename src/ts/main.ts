import App from './app';
import Menu from './layout/menu';

let app = new App(
    new Menu()
);

app.boot();
