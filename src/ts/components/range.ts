import { CLASS, QUALIFIED_NAMES, TAG, EVENT } from '../utils/constants';
import Doc from '../utils/doc';

export default class Range {
    public constructor() { }

    private rangeIntpus: HTMLCollection = Doc.getByClass(CLASS.RANGE);
    
    public setup() {
        for(let i = 0; i < this.rangeIntpus.length; i++){
            const rangeWrapepr = this.rangeIntpus[i];
            const rangeInput = rangeWrapepr.getElementsByTagName(TAG.INPUT)[0];
            const rangeSpan = rangeWrapepr.getElementsByTagName(TAG.SPAN)[0];
            rangeSpan.innerHTML = (rangeInput as HTMLInputElement).value;
            rangeInput.addEventListener(EVENT.CHANGE, (event) => {
                rangeSpan.innerHTML = (event.target as HTMLInputElement).value;
            });
        }
    }


}