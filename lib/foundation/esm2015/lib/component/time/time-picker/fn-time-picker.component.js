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
        this.searchTerm = "1";
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
    // this filter function call on keypress on input box for filter data in array
    /**
     * @param {?} event
     * @return {?}
     */
    filterValue(event) {
        this.showDropDown = true;
        if (typeof (this.searchTerm) !== "undefined") {
            // this code is written for matching From time
            if (this.timePickerSvcs.regex12a.test(this.searchTerm)) {
                /** @type {?} */
                let timeStringSplit = this.searchTerm.split('a');
                this.uiItemArray = this.mainItemArray.filter((/**
                 * @param {?} items
                 * @return {?}
                 */
                items => items.includes(timeStringSplit[0]) && items.includes('a')));
            }
            else if (this.timePickerSvcs.regex12p.test(this.searchTerm)) {
                /** @type {?} */
                let timeStringSplit = this.searchTerm.split('p');
                this.uiItemArray = this.mainItemArray.filter((/**
                 * @param {?} items
                 * @return {?}
                 */
                items => items.includes(timeStringSplit[0]) && items.includes('p')));
            }
            else {
                if (this.isMilitryTime) {
                    /** @type {?} */
                    let term = this.searchTerm.toString().split(":");
                    /** @type {?} */
                    let modifiedTerm = parseInt(term[0]) < 10 && !term[0].toString().startsWith("0") ? '0' + term[0] + (term.length > 1 ? ":" + term[1] : '') : this.searchTerm;
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
            if (event.keyCode == this.timePickerSvcs.KEY_CODES.BACKSPACE) {
                this.activeItem = 0;
                if (this.uiItemArray.length > 0) {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => document.getElementsByClassName('.fn-time-picker-ul')[0].scrollTop = 0));
                }
            }
            // this function call on enter after select value in dropdown list
            if (event.keyCode == this.timePickerSvcs.KEY_CODES.ENTER && this.uiItemArray.length > 0) {
                /** @type {?} */
                const liVal = document.querySelector("li.active").textContent;
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
        if (event.code == "ArrowUp" && this.activeItem > 0) {
            this.activeItem--;
            document.getElementById('.fn-time-picker-ul').scrollTop -= 35;
        }
        if (event.code == "ArrowDown" && this.activeItem < this.uiItemArray.length - 1) {
            this.activeItem++;
            document.getElementById('.fn-time-picker-ul').scrollTop += 35;
        }
    }
}
FnTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-time-picker',
                template: " <div class=\"fn-time-picker-search\">\n   <input [(ngModel)]=\"searchTerm\" (click)=\"clickEvent($event)\" (keydown)=\"keydownEvent($event)\" maxlength=\"17\"\n     (keyup)=\"filterValue($event)\" />\n\n   <div (click)=\"closeDropDown()\">\n     <ul *ngIf=\"(uiItemArray && uiItemArray.length > 0) && showDropDown\" class=\"fn-time-picker-ul\">\n       <li *ngFor=\"let item of uiItemArray; let i = index\" tabindex=\"{{i}}\" [ngClass]=\"{'active': activeItem === i  }\"\n         (click)=\"onItemClick(item)\">{{item}}</li>\n     </ul>\n   </div>\n </div>\n",
                styles: [".fn-time-picker-ul{list-style:none;border:1px solid #ccc;max-height:160px;overflow-x:hidden;scroll-behavior:smooth;padding:0;margin:0;top:0;width:182px;max-height:160px;overflow-y:scroll}.fn-time-picker-ul li{margin-bottom:3px;cursor:pointer;padding:5px;background-color:#f3f3f3}.fn-time-picker-ul li:last-child{margin-bottom:0}.fn-time-picker-ul li:hover{background-color:#77b0f1;color:#fff}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvdGltZS90aW1lLXBpY2tlci9mbi10aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU92RSxNQUFNLE9BQU8scUJBQXFCOzs7O0lBY2hDLFlBQW9CLGNBQW1DO1FBQW5DLG1CQUFjLEdBQWQsY0FBYyxDQUFxQjtRQVB2RCxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQUcsR0FBRyxDQUFDO1FBRWpCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVvQyxDQUFDOzs7O0lBRTVELFFBQVE7UUFFTixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztTQUN2RDthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztTQUN2RDtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbkQsQ0FBQzs7Ozs7O0lBR0QsV0FBVyxDQUFDLEtBQW9CO1FBRTlCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFFNUMsOENBQThDO1lBQzlDLElBQUksSUFBSSxD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LElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixRQUFRLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztTQUMvRDtRQUVELElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1lBQ2pCLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1NBQy9EO0lBQ0gsQ0FBQzs7O1lBckhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiwyakJBQTRDOzthQUU3Qzs7OztZQU5RLG1CQUFtQjs7O29CQVV6QixLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzs7OztJQUZOLHNDQUF1Qjs7SUFDdkIsNENBQTZCOztJQUM3Qiw4Q0FBZ0M7O0lBRWhDLDhDQUFtQjs7SUFDbkIsNENBQWlCOztJQUNqQiwyQ0FBaUI7O0lBRWpCLDZDQUE2Qjs7SUFDN0IsMkNBQXVCOzs7OztJQUVYLCtDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGblRpbWVwaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy90aW1lcGlja2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmbi10aW1lLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnZm4tdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm4tdGltZS1waWNrZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGblRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaXNNaWxpdHJ5VGltZTogYm9vbGVhbjtcblxuICBtYWluSXRlbUFycmF5ID0gW107XG4gIHVpSXRlbUFycmF5ID0gW107XG4gIHNlYXJjaFRlcm0gPSBcIjFcIjtcblxuICBzaG93RHJvcERvd246IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgYWN0aXZlSXRlbSA9IC0xO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGltZVBpY2tlclN2Y3M6IEZuVGltZXBpY2tlclNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYgKHRoaXMuaXNNaWxpdHJ5VGltZSkge1xuICAgICAgdGhpcy5tYWluSXRlbUFycmF5ID0gdGhpcy50aW1lUGlja2VyU3Zjcy5Ib3VyMjRGb3JtYXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFpbkl0ZW1BcnJheSA9IHRoaXMudGltZVBpY2tlclN2Y3MuSG91cjEyRm9ybWF0O1xuICAgIH1cblxuICAgIHRoaXMuc2VhcmNoVGVybSA9IHRoaXMubWFpbkl0ZW1BcnJheVt0aGlzLmluZGV4XTtcblxuICB9XG5cbiAgLy8gdGhpcyBmaWx0ZXIgZnVuY3Rpb24gY2FsbCBvbiBrZXlwcmVzcyBvbiBpbnB1dCBib3ggZm9yIGZpbHRlciBkYXRhIGluIGFycmF5XG4gIGZpbHRlclZhbHVlKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG5cbiAgICB0aGlzLnNob3dEcm9wRG93biA9IHRydWU7XG4gICAgaWYgKHR5cGVvZiAodGhpcy5zZWFyY2hUZXJtKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuXG4gICAgICAvLyB0aGlzIGNvZGUgaXMgd3JpdHRlbiBmb3IgbWF0Y2hpbmcgRnJvbSB0aW1lXG4gICAgICBpZiAodGhpcy50aW1lUGlja2VyU3Zjcy5yZWdleDEyYS50ZXN0KHRoaXMuc2VhcmNoVGVybSkpIHtcblxuICAgICAgICBsZXQgdGltZVN0cmluZ1NwbGl0ID0gdGhpcy5zZWFyY2hUZXJtLnNwbGl0KCdhJyk7XG4gICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSB0aGlzLm1haW5JdGVtQXJyYXkuZmlsdGVyKGl0ZW1zID0+IGl0ZW1zLmluY2x1ZGVzKHRpbWVTdHJpbmdTcGxpdFswXSkgJiYgaXRlbXMuaW5jbHVkZXMoJ2EnKSk7XG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy50aW1lUGlja2VyU3Zjcy5yZWdleDEycC50ZXN0KHRoaXMuc2VhcmNoVGVybSkpIHtcbiAgICAgICAgbGV0IHRpbWVTdHJpbmdTcGxpdCA9IHRoaXMuc2VhcmNoVGVybS5zcGxpdCgncCcpO1xuICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gdGhpcy5tYWluSXRlbUFycmF5LmZpbHRlcihpdGVtcyA9PiBpdGVtcy5pbmNsdWRlcyh0aW1lU3RyaW5nU3BsaXRbMF0pICYmIGl0ZW1zLmluY2x1ZGVzKCdwJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNaWxpdHJ5VGltZSkge1xuICAgICAgICAgIGxldCB0ZXJtID0gdGhpcy5zZWFyY2hUZXJtLnRvU3RyaW5nKCkuc3BsaXQoXCI6XCIpO1xuICAgICAgICAgIGxldCBtb2RpZmllZFRlcm0gPSBwYXJzZUludCh0ZXJtWzBdKSA8IDEwICYmICF0ZXJtWzBdLnRvU3RyaW5nKCkuc3RhcnRzV2l0aChcIjBcIikgPyAnMCcgKyB0ZXJtWzBdICsgKHRlcm0ubGVuZ3RoID4gMSA/IFwiOlwiICsgdGVybVsxXSA6ICcnKSA6IHRoaXMuc2VhcmNoVGVybTtcbiAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gdGhpcy5tYWluSXRlbUFycmF5LmZpbHRlcihpdGVtcyA9PiBpdGVtcy50b1N0cmluZygpLnN0YXJ0c1dpdGgobW9kaWZpZWRUZXJtKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IHRoaXMubWFpbkl0ZW1BcnJheS5maWx0ZXIoaXRlbXMgPT4gaXRlbXMudG9TdHJpbmcoKS5zdGFydHNXaXRoKHRoaXMuc2VhcmNoVGVybSkpO1xuICAgICAgICB9XG5cblxuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIGZ1bmN0aW9uIGNhbGwgb24gYmFja3NwY2VcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09IHRoaXMudGltZVBpY2tlclN2Y3MuS0VZX0NPREVTLkJBQ0tTUEFDRSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAwO1xuICAgICAgICBpZiAodGhpcy51aUl0ZW1BcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCcuZm4tdGltZS1waWNrZXItdWwnKVswXS5zY3JvbGxUb3AgPSAwKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHRoaXMgZnVuY3Rpb24gY2FsbCBvbiBlbnRlciBhZnRlciBzZWxlY3QgdmFsdWUgaW4gZHJvcGRvd24gbGlzdFxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gdGhpcy50aW1lUGlja2VyU3Zjcy5LRVlfQ09ERVMuRU5URVIgJiYgdGhpcy51aUl0ZW1BcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGxpVmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpLmFjdGl2ZVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgdGhpcy5vbkl0ZW1DbGljayhsaVZhbCk7XG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IDA7XG4gICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSBbXTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnLmZuLXRpbWUtcGlja2VyLXVsJylbMF0uc2Nyb2xsVG9wID0gMDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAwO1xuICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IFtdO1xuICAgIH1cblxuICB9XG5cbiAgLy8gb25TZWxlY3RFdmVudCBpcyBjYWxsIGFmdGVyIGNsaWNrIG9uIGxpIG9wdGlvbiBpbiB1bCBhZnRlciBhcHBseSBmaWx0ZXJcbiAgb25JdGVtQ2xpY2soaW5kZXhWYWw6IHN0cmluZykge1xuXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gMDtcbiAgICB0aGlzLnNlYXJjaFRlcm0gPSBpbmRleFZhbDtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5tYWluSXRlbUFycmF5LmluZGV4T2YoaW5kZXhWYWwpO1xuICAgIHRoaXMudWlJdGVtQXJyYXkgPSBbXTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmluZGV4KVxuXG4gIH1cblxuICBjbG9zZURyb3BEb3duKCkge1xuICAgIHRoaXMuc2hvd0Ryb3BEb3duID0gZmFsc2U7XG4gIH1cblxuICAvLyBPcGVuIERyb3Bkb3duIGJ5IGRlZmF1bHQgdmFsdWVcbiAgY2xpY2tFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMuc2hvd0Ryb3BEb3duID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5hY3RpdmVJdGVtIDwgMSkge1xuICAgICAgdGhpcy5maWx0ZXJWYWx1ZShldmVudCk7XG4gICAgfVxuICB9XG5cbiAga2V5ZG93bkV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNvZGUgPT0gXCJBcnJvd1VwXCIgJiYgdGhpcy5hY3RpdmVJdGVtID4gMCkge1xuICAgICAgdGhpcy5hY3RpdmVJdGVtLS07XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnLmZuLXRpbWUtcGlja2VyLXVsJykuc2Nyb2xsVG9wIC09IDM1O1xuICAgIH1cblxuICAgIGlmIChldmVudC5jb2RlID09IFwiQXJyb3dEb3duXCIgJiYgdGhpcy5hY3RpdmVJdGVtIDwgdGhpcy51aUl0ZW1BcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmFjdGl2ZUl0ZW0rK1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJy5mbi10aW1lLXBpY2tlci11bCcpLnNjcm9sbFRvcCArPSAzNTtcbiAgICB9XG4gIH1cblxufVxuIl19