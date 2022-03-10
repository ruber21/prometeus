import {DOM_ELEMENT, QUERY_ACCESORS} from '../utils/constants';
import Doc from '../utils/doc';

export default class Menu{
    public constructor(){}

    private mainMenuOptionOnClick(element: Element){
        let parent = element.parentElement as Element;
        const expanded = DOM_ELEMENT.CLASS.EXPANDED;
        let submenu = parent.querySelector(
            `${QUERY_ACCESORS.CLASS}${DOM_ELEMENT.CLASS.SUBMENU}`
            ) as HTMLElement;
        if(parent.classList.contains(expanded)){
            parent.classList.remove(expanded);
            submenu.style.height = '0';
        } else{
            parent.classList.add(expanded);
            let height = (<HTMLElement>submenu.children.item(0)).clientHeight;
            submenu.style.height = `${height}px`;
        }
    }

    private setExpandClick(){
        let menuItems = Doc.getByClass(
            `${DOM_ELEMENT.CLASS.MAIN_MENU_OPTION}`
        );
        for(let i = 0; i < menuItems.length; i++){
            let option = menuItems.item(i);
            option?.addEventListener('click', (el) => {
                this.mainMenuOptionOnClick(option as Element);
            });
        }
    }

    public setup(){
        this.setExpandClick();
    }


    
}