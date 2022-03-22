import Datepicker from './components/datepicker';
import Menu from './layout/menu'
export default class App{
    
    //private menu: Menu;

    constructor(
        private menu: Menu,
        private datepicker: Datepicker
    ){}

    public boot(){
        this.menu.setup();
        this.datepicker.setup();
    }


} 