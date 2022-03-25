import {CLASS, QUERY_ACCESORS} from '../utils/constants';
import * as jQuery from 'jquery';
import 'jqueryui';

export default class Datepicker{
    public constructor(){}

    public setup(){
        jQuery(`${QUERY_ACCESORS.CLASS}${CLASS.DATEPICKER}`).each( function(){
            jQuery(this).datepicker({
                dateFormat: "dd/mm/yy",
                changeMonth: true,
                changeYear: true
            })
        });
    }


    
}