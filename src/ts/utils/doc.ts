import {QUERY_ACCESORS, DOM_ELEMENT, EVENT} from './constants'

export default class Doc {
    constructor(){};

    public static get(query: string): Element | HTMLCollection | null{
        const accesor = query[0];
        let element: Element | HTMLCollection | null = null;
        switch (accesor) {
            case QUERY_ACCESORS.CLASS: 
                element = Doc.getByClass(query.slice(1));
                break;
            case QUERY_ACCESORS.ID:
                element = Doc.getById(query.slice(1));
                break;
            default:
                element = Doc.query(query);
                break;
        }
        return element;
    }

    public static getByClass(className: string): HTMLCollection{
        return document.getElementsByClassName(className);
    }

    public static getById(id: string): Element | null{
        return document.getElementById(id);
    }

    public static query(query: string): Element | null{
        return document.querySelector(query);
    }

    public static addClick(element: Element | Document, fn: any): void{
        element.addEventListener(EVENT.CLICK, fn);
    }

    public static createDiv(): HTMLElement{
        return document.createElement(DOM_ELEMENT.DIV);
    }
}

