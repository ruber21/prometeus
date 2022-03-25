import { CLASS, QUALIFIED_NAMES, TAG, EVENT } from '../utils/constants';
import Doc from '../utils/doc';

const customSelect = CLASS.CUSTOM_SELECT;

export default class Dropdown {
    public constructor() { }

    private dropdowns: HTMLCollection = Doc.getByClass(customSelect);
    private dropdownHeight: number = 0;

    public setup() {
        this.initializeDropDowns();
        Doc.addClick(document, () => {
            this.closeAllSelect(null);
        });
    }

    private createSelectedDiv(select: HTMLSelectElement): HTMLElement {
        let div = Doc.createDiv();
        div.setAttribute(QUALIFIED_NAMES.CLASS, CLASS.SELECT_SELECTED);
        div.innerHTML = select.options[select.selectedIndex].innerHTML;
        return div;
    }

    private createOptionsListDiv(): HTMLElement {
        let div = Doc.createDiv();
        div.setAttribute(QUALIFIED_NAMES.CLASS, `${CLASS.SELECT_ITEMS} ${CLASS.SELECT_HIDE}`);
        return div;
    }

    private createOptionDiv(select: HTMLSelectElement, index: number): HTMLElement {
        let div = Doc.createDiv();
        div.innerHTML = select.options[index].innerHTML;
        div.addEventListener(EVENT.CLICK, () => {
            let h = (div.parentNode as ParentNode).previousSibling as HTMLElement;
            for (let i = 0; i < select.length; i++) {
                if (select.options[i].innerHTML == div.innerHTML) {
                    select.selectedIndex = i;
                    h.innerHTML = div.innerHTML;
                    let y = (div.parentNode as HTMLElement)
                        .getElementsByClassName(CLASS.SAME_AS_SELECTED);
                    let yl = y.length;
                    for (let k = 0; k < yl; k++) {
                        y[k].removeAttribute(QUALIFIED_NAMES.CLASS);
                    }
                    div.setAttribute(QUALIFIED_NAMES.CLASS, CLASS.SAME_AS_SELECTED);
                    break;
                }
            }
            h.click();
        });
        return div;
    }

    private openSelect(select: HTMLElement, height: string){
        const dropdown = select.nextElementSibling as HTMLElement;
        select.addEventListener(EVENT.CLICK, (e: Event) => {
            e.stopPropagation();
            this.closeAllSelect(select);
            dropdown.classList.toggle(CLASS.SELECT_HIDE);
            if(!dropdown.classList.contains(CLASS.SELECT_HIDE)){
                dropdown.style.opacity = '1';
            } else {
                dropdown.style.opacity = '0';
            }
            if(window.innerHeight - select.getBoundingClientRect().bottom - select.offsetHeight < 400){
                dropdown.style.top = '-400px';
            } else {
                dropdown.style.top = '0px';
            }

            select.classList.toggle(CLASS.SELECT_ARROW_ACTIVE);
        
        });
    }

    private initializeDropDowns() {
        for (let i = 0; i < this.dropdowns.length; i++) {
            let currentSelect = this.dropdowns[i].getElementsByTagName(TAG.SELECT)[0] as HTMLSelectElement;
            let createdDiv = this.createSelectedDiv(currentSelect);
            this.dropdowns[i].appendChild(createdDiv);
            let optionsList = this.createOptionsListDiv();
            for (let j = 1; j < currentSelect.length; j++) {
                let option = this.createOptionDiv(currentSelect, j);
                optionsList.appendChild(option);
            }
            this.dropdowns[i].appendChild(optionsList);
            this.openSelect(createdDiv, (currentSelect.length - 1) * 100 + '%');
        }
    }

    private closeAllSelect(elmnt: HTMLElement | null) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        let x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }



}