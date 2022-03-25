import Datepicker from './components/datepicker';
import Dropdown from './components/dropdown';
import Menu from './layout/menu'
export default class App{
    
    //private menu: Menu;

    constructor(
        private menu: Menu,
        private datepicker: Datepicker,
        private dorpdown: Dropdown,
    ){}

    public boot(){
        this.menu.setup();
        this.datepicker.setup();
        this.dorpdown.setup();
    }


} 