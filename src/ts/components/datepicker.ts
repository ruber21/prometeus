import {DOM_ELEMENT, QUERY_ACCESORS} from '../utils/constants';
import Doc from '../utils/doc';
// import * as jQuery from 'jquery';
// import 'jquery-ui';

import * as jQuery from 'jquery';
import 'jqueryui';
import { each } from 'jquery';

export default class Datepicker{
    public constructor(){}

    public setup(){
        
        // jQuery( ".datepicker" ).datepicker({
        //     dateFormat: "dd/mm/yy",
        //     //duration: "fast"
        // });

        jQuery( ".jq-datepicker" ).each( function(){
            jQuery(this).datepicker({
                dateFormat: "dd/mm/yy",
                changeMonth: true,
                changeYear: true
            })
        });
    }


    
}