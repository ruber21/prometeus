import {QUERY_ACCESORS} from './constants'
export default class DOM {
    constructor(){};

    get(query: string): Element | HTMLCollection | null{
        const accesor = query[0];
        let queryResult: Element | HTMLCollection | null = null;
        switch (accesor) {
            case QUERY_ACCESORS.CLASS: 
                queryResult = document.getElementsByClassName(query.slice(1));
                break;
            case QUERY_ACCESORS.ID:
                queryResult = document.getElementById(query.slice(1));
                break;
            default:
                queryResult = document.querySelector(query.slice(0));

        }
        return queryResult;
    }
}

