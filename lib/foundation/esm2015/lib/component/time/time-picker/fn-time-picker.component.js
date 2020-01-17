/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FnTimepickerService } from './../services/timepicker.service';
export class FnTimePickerComponent {
    /**
     * @param {?} timePickerSvcs
     */
    constructor(timePickerSvcs) {
        this.timePickerSvcs = timePickerSvcs;
        this.mainItemArray = [];
        this.uiItemArray = [];
        this.searchTerm = '1';
        this.showDropDown = true;
        this.activeItem = -1;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isMilitryTime) {
            this.mainItemArray = this.timePickerSvcs.Hour24Format;
        }
        else {
            this.mainItemArray = this.timePickerSvcs.Hour12Format;
        }
        this.searchTerm = this.mainItemArray[this.index];
    }
    /*
      * this filter function call on keypress on input box for filter data in array
      *   @Param event: Keyboard Event
      * */
    /**
     * @param {?} event
     * @return {?}
     */
    filterValue(event) {
        this.showDropDown = true;
        if (typeof (this.searchTerm) !== 'undefined') {
            // this code is written for matching From time
            if (this.timePickerSvcs.regex12a.test(this.searchTerm)) {
                /** @type {?} */
                const timeStringSplit = this.searchTerm.split('a');
                this.uiItemArray = this.mainItemArray.filter((/**
                 * @param {?} items
                 * @return {?}
                 */
                items => items.includes(timeStringSplit[0]) && items.includes('a')));
            }
            else if (this.timePickerSvcs.regex12p.test(this.searchTerm)) {
                /** @type {?} */
                const timeStringSplit = this.searchTerm.split('p');
                this.uiItemArray = this.mainItemArray.filter((/**
                 * @param {?} items
                 * @return {?}
                 */
                items => items.includes(timeStringSplit[0]) && items.includes('p')));
            }
            else {
                if (this.isMilitryTime) {
                    /** @type {?} */
                    const term = this.searchTerm.toString().split(':');
                    // tslint:disable-next-line:max-line-length radix
                    /** @type {?} */
                    const modifiedTerm = parseInt(term[0]) < 10 && !term[0].toString().startsWith('0') ? '0' + term[0] + (term.length > 1 ? ':' + term[1] : '') : this.searchTerm;
                    this.uiItemArray = this.mainItemArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    items => items.toString().startsWith(modifiedTerm)));
                }
                else {
                    this.uiItemArray = this.mainItemArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    items => items.toString().startsWith(this.searchTerm)));
                }
            }
            // this function call on backspce
            if (event.keyCode === this.timePickerSvcs.KEY_CODES.BACKSPACE) {
                this.activeItem = 0;
                if (this.uiItemArray.length > 0) {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => document.getElementsByClassName('.fn-time-picker-ul')[0].scrollTop = 0));
                }
            }
            // this function call on enter after select value in dropdown list
            if (event.keyCode === this.timePickerSvcs.KEY_CODES.ENTER && this.uiItemArray.length > 0) {
                /** @type {?} */
                const liVal = document.querySelector('li.active').textContent;
                this.onItemClick(liVal);
                this.activeItem = 0;
                this.uiItemArray = [];
                document.getElementsByClassName('.fn-time-picker-ul')[0].scrollTop = 0;
            }
        }
        else {
            this.activeItem = 0;
            this.uiItemArray = [];
        }
    }
    // onSelectEvent is call after click on li option in ul after apply filter
    /**
     * @param {?} indexVal
     * @return {?}
     */
    onItemClick(indexVal) {
        this.activeItem = 0;
        this.searchTerm = indexVal;
        this.index = this.mainItemArray.indexOf(indexVal);
        this.uiItemArray = [];
        console.log(this.index);
    }
    /**
     * @return {?}
     */
    closeDropDown() {
        this.showDropDown = false;
    }
    // Open Dropdown by default value
    /**
     * @param {?} event
     * @return {?}
     */
    clickEvent(event) {
        this.showDropDown = true;
        if (this.activeItem < 1) {
            this.filterValue(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keydownEvent(event) {
        if (event.code === 'ArrowUp' && this.activeItem > 0) {
            this.activeItem--;
            document.getElementById('.fn-time-picker-ul').scrollTop -= 35;
        }
        if (event.code === 'ArrowDown' && this.activeItem < this.uiItemArray.length - 1) {
            this.activeItem++;
            document.getElementById('.fn-time-picker-ul').scrollTop += 35;
        }
    }
}
FnTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-time-picker',
                template: "<div class=\"fn-time-picker-search\">\n  <input class=\"form-control\" [(ngModel)]=\"searchTerm\" (click)=\"clickEvent($event)\" (keydown)=\"keydownEvent($event)\"\n         maxlength=\"17\"\n         (keyup)=\"filterValue($event)\"/>\n\n  <div (click)=\"closeDropDown()\">\n    <ul *ngIf=\"(uiItemArray && uiItemArray.length > 0) && showDropDown\" class=\"fn-time-picker-ul\">\n      <li *ngFor=\"let item of uiItemArray; let i = index\" tabindex=\"{{i}}\" [ngClass]=\"{'active': activeItem === i  }\"\n          (click)=\"onItemClick(item)\">{{item}}</li>\n    </ul>\n  </div>\n</div>\n",
                styles: [":root{--time-list-hover-bg:$time-list-hover-bg}.fn-time-picker-search{width:100%;float:left;position:relative}.fn-time-picker-search input{width:100%;float:left;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem}.fn-time-picker-search input:focus{border:1px solid #80bdff}.fn-time-picker-search .fn-time-picker-ul{list-style:none;border:1px solid #ced4da;width:100%;max-height:160px;overflow-x:hidden;overflow-y:scroll;scroll-behavior:smooth;padding:1px;margin:0;box-shadow:5px 5px 10px rgba(0,0,0,.05);position:absolute;top:100%;z-index:1;background-image:linear-gradient(to top,#f2f2f2 0,#eceeef 100%)}.fn-time-picker-search .fn-time-picker-ul li{cursor:pointer;padding:4px 12px;background-color:transparent;font-size:13px;letter-spacing:.03em;font-weight:400;transition:.3s ease-in;border-radius:4px;border:none!important}.fn-time-picker-search .fn-time-picker-ul li:last-child{border-bottom:none}.fn-time-picker-search .fn-time-picker-ul li:hover{background-color:var(--time-list-hover-bg);color:#fff}"]
            }] }
];
/** @nocollapse */
FnTimePickerComponent.ctorParameters = () => [
    { type: FnTimepickerService }
];
FnTimePickerComponent.propDecorators = {
    index: [{ type: Input }],
    placeHolder: [{ type: Input }],
    isMilitryTime: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FnTimePickerComponent.prototype.index;
    /** @type {?} */
    FnTimePickerComponent.prototype.placeHolder;
    /** @type {?} */
    FnTimePickerComponent.prototype.isMilitryTime;
    /** @type {?} */
    FnTimePickerComponent.prototype.mainItemArray;
    /** @type {?} */
    FnTimePickerComponent.prototype.uiItemArray;
    /** @type {?} */
    FnTimePickerComponent.prototype.searchTerm;
    /** @type {?} */
    FnTimePickerComponent.prototype.showDropDown;
    /** @type {?} */
    FnTimePickerComponent.prototype.activeItem;
    /**
     * @type {?}
     * @private
     */
    FnTimePickerComponent.prototype.timePickerSvcs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvdGltZS90aW1lLXBpY2tlci9mbi10aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQU9yRSxNQUFNLE9BQU8scUJBQXFCOzs7O0lBY2hDLFlBQW9CLGNBQW1DO1FBQW5DLG1CQUFjLEdBQWQsY0FBYyxDQUFxQjtRQVB2RCxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQUcsR0FBRyxDQUFDO1FBRWpCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2IsZUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBR3ZCLENBQUM7Ozs7SUFFRCxRQUFRO1FBRU4sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7U0FDdkQ7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7U0FDdkQ7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRW5ELENBQUM7Ozs7Ozs7OztJQU9ELFdBQVcsQ0FBQyxLQUFVO1FBRXBCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFFNUMsOENBQThDO1lBQzlDLElBQUksSUFBSSxD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RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7U0FDL0Q7UUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssV0FBVyxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9FLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixRQUFRLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztTQUMvRDtJQUNILENBQUM7OztZQTNIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsd2xCQUE0Qzs7YUFFN0M7Ozs7WUFOTyxtQkFBbUI7OztvQkFVeEIsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7Ozs7SUFGTixzQ0FBdUI7O0lBQ3ZCLDRDQUE2Qjs7SUFDN0IsOENBQWdDOztJQUVoQyw4Q0FBbUI7O0lBQ25CLDRDQUFpQjs7SUFDakIsMkNBQWlCOztJQUVqQiw2Q0FBb0I7O0lBQ3BCLDJDQUF1Qjs7Ozs7SUFFWCwrQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm5UaW1lcGlja2VyU2VydmljZX0gZnJvbSAnLi8uLi9zZXJ2aWNlcy90aW1lcGlja2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmbi10aW1lLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnZm4tdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm4tdGltZS1waWNrZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGblRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaXNNaWxpdHJ5VGltZTogYm9vbGVhbjtcblxuICBtYWluSXRlbUFycmF5ID0gW107XG4gIHVpSXRlbUFycmF5ID0gW107XG4gIHNlYXJjaFRlcm0gPSAnMSc7XG5cbiAgc2hvd0Ryb3BEb3duID0gdHJ1ZTtcbiAgcHVibGljIGFjdGl2ZUl0ZW0gPSAtMTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpbWVQaWNrZXJTdmNzOiBGblRpbWVwaWNrZXJTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGlmICh0aGlzLmlzTWlsaXRyeVRpbWUpIHtcbiAgICAgIHRoaXMubWFpbkl0ZW1BcnJheSA9IHRoaXMudGltZVBpY2tlclN2Y3MuSG91cjI0Rm9ybWF0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1haW5JdGVtQXJyYXkgPSB0aGlzLnRpbWVQaWNrZXJTdmNzLkhvdXIxMkZvcm1hdDtcbiAgICB9XG5cbiAgICB0aGlzLnNlYXJjaFRlcm0gPSB0aGlzLm1haW5JdGVtQXJyYXlbdGhpcy5pbmRleF07XG5cbiAgfVxuXG5cbiAgLypcbiAgKiB0aGlzIGZpbHRlciBmdW5jdGlvbiBjYWxsIG9uIGtleXByZXNzIG9uIGlucHV0IGJveCBmb3IgZmlsdGVyIGRhdGEgaW4gYXJyYXlcbiAgKiAgIEBQYXJhbSBldmVudDogS2V5Ym9hcmQgRXZlbnRcbiAgKiAqL1xuICBmaWx0ZXJWYWx1ZShldmVudDogYW55KSB7XG5cbiAgICB0aGlzLnNob3dEcm9wRG93biA9IHRydWU7XG4gICAgaWYgKHR5cGVvZiAodGhpcy5zZWFyY2hUZXJtKSAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgLy8gdGhpcyBjb2RlIGlzIHdyaXR0ZW4gZm9yIG1hdGNoaW5nIEZyb20gdGltZVxuICAgICAgaWYgKHRoaXMudGltZVBpY2tlclN2Y3MucmVnZXgxMmEudGVzdCh0aGlzLnNlYXJjaFRlcm0pKSB7XG5cbiAgICAgICAgY29uc3QgdGltZVN0cmluZ1NwbGl0ID0gdGhpcy5zZWFyY2hUZXJtLnNwbGl0KCdhJyk7XG4gICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSB0aGlzLm1haW5JdGVtQXJyYXkuZmlsdGVyKGl0ZW1zID0+IGl0ZW1zLmluY2x1ZGVzKHRpbWVTdHJpbmdTcGxpdFswXSkgJiYgaXRlbXMuaW5jbHVkZXMoJ2EnKSk7XG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy50aW1lUGlja2VyU3Zjcy5yZWdleDEycC50ZXN0KHRoaXMuc2VhcmNoVGVybSkpIHtcbiAgICAgICAgY29uc3QgdGltZVN0cmluZ1NwbGl0ID0gdGhpcy5zZWFyY2hUZXJtLnNwbGl0KCdwJyk7XG4gICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSB0aGlzLm1haW5JdGVtQXJyYXkuZmlsdGVyKGl0ZW1zID0+IGl0ZW1zLmluY2x1ZGVzKHRpbWVTdHJpbmdTcGxpdFswXSkgJiYgaXRlbXMuaW5jbHVkZXMoJ3AnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5pc01pbGl0cnlUaW1lKSB7XG4gICAgICAgICAgY29uc3QgdGVybSA9IHRoaXMuc2VhcmNoVGVybS50b1N0cmluZygpLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aCByYWRpeFxuICAgICAgICAgIGNvbnN0IG1vZGlmaWVkVGVybSA9IHBhcnNlSW50KHRlcm1bMF0pIDwgMTAgJiYgIXRlcm1bMF0udG9TdHJpbmcoKS5zdGFydHNXaXRoKCcwJykgPyAnMCcgKyB0ZXJtWzBdICsgKHRlcm0ubGVuZ3RoID4gMSA/ICc6JyArIHRlcm1bMV0gOiAnJykgOiB0aGlzLnNlYXJjaFRlcm07XG4gICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IHRoaXMubWFpbkl0ZW1BcnJheS5maWx0ZXIoaXRlbXMgPT4gaXRlbXMudG9TdHJpbmcoKS5zdGFydHNXaXRoKG1vZGlmaWVkVGVybSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSB0aGlzLm1haW5JdGVtQXJyYXkuZmlsdGVyKGl0ZW1zID0+IGl0ZW1zLnRvU3RyaW5nKCkuc3RhcnRzV2l0aCh0aGlzLnNlYXJjaFRlcm0pKTtcbiAgICAgICAgfVxuXG5cbiAgICAgIH1cblxuICAgICAgLy8gdGhpcyBmdW5jdGlvbiBjYWxsIG9uIGJhY2tzcGNlXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gdGhpcy50aW1lUGlja2VyU3Zjcy5LRVlfQ09ERVMuQkFDS1NQQUNFKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IDA7XG4gICAgICAgIGlmICh0aGlzLnVpSXRlbUFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJy5mbi10aW1lLXBpY2tlci11bCcpWzBdLnNjcm9sbFRvcCA9IDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHRoaXMgZnVuY3Rpb24gY2FsbCBvbiBlbnRlciBhZnRlciBzZWxlY3QgdmFsdWUgaW4gZHJvcGRvd24gbGlzdFxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IHRoaXMudGltZVBpY2tlclN2Y3MuS0VZX0NPREVTLkVOVEVSICYmIHRoaXMudWlJdGVtQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsaVZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpLmFjdGl2ZScpLnRleHRDb250ZW50O1xuICAgICAgICB0aGlzLm9uSXRlbUNsaWNrKGxpVmFsKTtcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gMDtcbiAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IFtdO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCcuZm4tdGltZS1waWNrZXItdWwnKVswXS5zY3JvbGxUb3AgPSAwO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IDA7XG4gICAgICB0aGlzLnVpSXRlbUFycmF5ID0gW107XG4gICAgfVxuXG4gIH1cblxuICAvLyBvblNlbGVjdEV2ZW50IGlzIGNhbGwgYWZ0ZXIgY2xpY2sgb24gbGkgb3B0aW9uIGluIHVsIGFmdGVyIGFwcGx5IGZpbHRlclxuICBvbkl0ZW1DbGljayhpbmRleFZhbDogc3RyaW5nKSB7XG5cbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAwO1xuICAgIHRoaXMuc2VhcmNoVGVybSA9IGluZGV4VmFsO1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLm1haW5JdGVtQXJyYXkuaW5kZXhPZihpbmRleFZhbCk7XG4gICAgdGhpcy51aUl0ZW1BcnJheSA9IFtdO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuaW5kZXgpO1xuXG4gIH1cblxuICBjbG9zZURyb3BEb3duKCkge1xuICAgIHRoaXMuc2hvd0Ryb3BEb3duID0gZmFsc2U7XG4gIH1cblxuICAvLyBPcGVuIERyb3Bkb3duIGJ5IGRlZmF1bHQgdmFsdWVcbiAgY2xpY2tFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMuc2hvd0Ryb3BEb3duID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgMSkge1xuICAgICAgdGhpcy5maWx0ZXJWYWx1ZShldmVudCk7XG4gICAgfVxuICB9XG5cbiAga2V5ZG93bkV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1VwJyAmJiB0aGlzLmFjdGl2ZUl0ZW0gPiAwKSB7XG4gICAgICB0aGlzLmFjdGl2ZUl0ZW0tLTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcuZm4tdGltZS1waWNrZXItdWwnKS5zY3JvbGxUb3AgLT0gMzU7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd0Rvd24nICYmIHRoaXMuYWN0aXZlSXRlbSA8IHRoaXMudWlJdGVtQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5hY3RpdmVJdGVtKys7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnLmZuLXRpbWUtcGlja2VyLXVsJykuc2Nyb2xsVG9wICs9IDM1O1xuICAgIH1cbiAgfVxuXG59XG4iXX0=