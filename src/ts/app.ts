import Datepicker from './components/datepicker';
import Dropdown from './components/dropdown';
import Menu from './layout/menu';
import Range from './components/range';
export default class App{
    
    constructor(
        private menu: Menu,
        private datepicker: Datepicker,
        private dorpdown: Dropdown,
        private range: Range,
    ){}

    public boot(){
        this.menu.setup();
        this.datepicker.setup();
        this.dorpdown.setup();
        this.range.setup();
    }


} 