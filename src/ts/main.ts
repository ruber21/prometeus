import App from './app';
import Datepicker from './components/datepicker';
import Dropdown from './components/dropdown';
import Menu from './layout/menu';
import Range from './components/range'

let app = new App(
    new Menu(),
    new Datepicker(),
    new Dropdown,
    new Range()
);

app.boot();
