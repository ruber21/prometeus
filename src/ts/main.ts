import App from './app';
import Datepicker from './components/datepicker';
import Menu from './layout/menu';

let app = new App(
    new Menu(),
    new Datepicker()
);

app.boot();
