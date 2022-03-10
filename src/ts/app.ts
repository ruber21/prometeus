import Menu from './layout/menu'
export default class App{
    
    //private menu: Menu;

    constructor(
        private menu: Menu
    ){}

    public boot(){
        this.menu.setup();
    }


} 