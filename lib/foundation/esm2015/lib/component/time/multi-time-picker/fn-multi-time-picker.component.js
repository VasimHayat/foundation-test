/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FnTimepickerService } from '../services/timepicker.service';
export class FnMultiTimePickerComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.timeStoredArray = [];
        this.uiItemArray = [];
        this.nonMilitryHourArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        this.nonMilitryMinuteArray = ['00a', '00p', '15a', '15p', '30a', '30p', '45a', '45p'];
        this.militryHourArray = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.militryMinuteArray = ['00', '15', '30', '45'];
        this.showDropDown = true;
        this.checkEmpty = false;
        this.activeIndex = -1;
        this.searchTerm = '';
        this.KEY_CODES = service.KEY_CODES;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isMilitryTime) {
            this.timeStoredArray = this.service.Hour24Format;
        }
        else {
            this.timeStoredArray = this.service.Hour12Format;
        }
        this.searchTerm = this.timeStoredArray[this.startIndex] + '-' + this.timeStoredArray[this.lastIndex];
        this.selectIndex = this.startIndex;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    filterValue(event) {
        this.showDropDown = true;
        if (typeof (this.searchTerm) !== 'undefined') {
            this.checkEmpty = false;
            this.splitTimeVal = this.searchTerm.split('-');
            if (this.splitTimeVal[1]) {
                /** @type {?} */
                const inputVal = this.splitTimeVal[1];
                if (this.selectIndex) {
                    /** @type {?} */
                    const splitFromTime = this.splitTimeVal[0].split(':');
                    if (this.isMilitryTime) {
                        if (this.militryHourArray.includes(splitFromTime[0]) && this.militryMinuteArray.includes(splitFromTime[1])) {
                            this.uiItemArray = this.service.Hour24NextFormat.filter((/**
                             * @param {?} items
                             * @return {?}
                             */
                            items => items.toString().startsWith(inputVal)
                                && this.service.Hour24NextFormat.indexOf(items) > this.selectIndex));
                        }
                        else {
                            this.activeIndex = 0;
                            this.uiItemArray = [];
                        }
                    }
                    else {
                        // this code written for matching regex for To time
                        if (this.service.regex12a.test(inputVal)) {
                            /** @type {?} */
                            const timeStringSplit = inputVal.split('a');
                            if (this.nonMilitryHourArray.includes(splitFromTime[0]) && this.nonMilitryMinuteArray.includes(splitFromTime[1])) {
                                this.uiItemArray = this.service.Hour12NextFormat.filter((/**
                                 * @param {?} items
                                 * @return {?}
                                 */
                                items => (items.toString().startsWith(timeStringSplit[0])
                                    && items.includes('a')) && this.service.Hour12NextFormat.indexOf(items) > this.selectIndex));
                            }
                            else {
                                this.activeIndex = 0;
                                this.uiItemArray = [];
                            }
                        }
                        else if (this.service.regex12p.test(inputVal)) {
                            /** @type {?} */
                            const timeStringSplit = inputVal.split('p');
                            if (this.nonMilitryHourArray.includes(splitFromTime[0]) && this.nonMilitryMinuteArray.includes(splitFromTime[1])) {
                                this.uiItemArray = this.service.Hour12NextFormat.filter((/**
                                 * @param {?} items
                                 * @return {?}
                                 */
                                items => (items.toString().startsWith(timeStringSplit[0])
                                    && items.includes('p')) && this.service.Hour12NextFormat.indexOf(items) > this.selectIndex));
                            }
                            else {
                                this.activeIndex = 0;
                                this.uiItemArray = [];
                            }
                        }
                        else {
                            if (this.nonMilitryHourArray.includes(splitFromTime[0]) && this.nonMilitryMinuteArray.includes(splitFromTime[1])) {
                                this.uiItemArray = this.service.Hour12NextFormat.filter((/**
                                 * @param {?} items
                                 * @return {?}
                                 */
                                items => items.toString().startsWith(inputVal)
                                    && this.service.Hour12NextFormat.indexOf(items) > this.selectIndex));
                            }
                            else {
                                this.activeIndex = 0;
                                this.uiItemArray = [];
                            }
                        }
                    }
                }
            }
            else {
                if (this.service.regex12a.test(this.searchTerm)) {
                    /** @type {?} */
                    const timeStringSplit = this.searchTerm.split('a');
                    this.uiItemArray = this.timeStoredArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    items => items.includes(timeStringSplit[0]) && items.includes('a')));
                }
                else if (this.service.regex12p.test(this.searchTerm)) {
                    /** @type {?} */
                    const timeStringSplit = this.searchTerm.split('p');
                    this.uiItemArray = this.timeStoredArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    items => items.includes(timeStringSplit[0]) && items.includes('p')));
                }
                else {
                    if (this.isMilitryTime) {
                        /** @type {?} */
                        const term = this.searchTerm.toString().split(':');
                        // tslint:disable-next-line:radix max-line-length
                        /** @type {?} */
                        const modifiedTerm = parseInt(term[0]) < 10 && !term[0].toString().startsWith('0') ? '0' + term[0] + (term.length > 1 ? ':' + term[1] : '') : this.searchTerm;
                        this.uiItemArray = this.timeStoredArray.filter((/**
                         * @param {?} items
                         * @return {?}
                         */
                        items => items.toString().startsWith(modifiedTerm)));
                    }
                    else {
                        this.uiItemArray = this.timeStoredArray.filter((/**
                         * @param {?} items
                         * @return {?}
                         */
                        items => items.toString().startsWith(this.searchTerm)));
                    }
                }
            }
            if (event.keyCode === this.KEY_CODES.BACKSPACE) {
                this.activeIndex = 0;
                if (this.uiItemArray.length > 0) {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => document.getElementsByClassName('fn-time-picker-ul')[0].scrollTop = 0));
                }
            }
            if (event.keyCode === this.KEY_CODES.ENTER && this.uiItemArray.length > 0) {
                /** @type {?} */
                const liVal = document.querySelector('li.active').textContent;
                this.onItemClick(liVal);
                this.activeIndex = 0;
                this.uiItemArray = [];
                document.getElementsByClassName('fn-time-picker-ul')[0].scrollTop = 0;
                this.checkEmpty = false;
            }
        }
        else {
            this.activeIndex = 0;
            this.checkEmpty = true;
            this.uiItemArray = [];
        }
    }
    /**
     * @param {?} param
     * @return {?}
     */
    onItemClick(param) {
        if (this.splitTimeVal[1]) {
            this.activeIndex = 0;
            /** @type {?} */
            const newToTimeString = this.searchTerm.split('-')[0];
            this.searchTerm = newToTimeString + '-' + param;
            this.uiItemArray = [];
        }
        else {
            this.activeIndex = 0;
            this.searchTerm = param + '-';
            this.selectIndex = this.timeStoredArray.indexOf(param);
            this.uiItemArray = [];
        }
    }
    /**
     * @return {?}
     */
    closeDropDown() {
        this.showDropDown = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    openDropDown(event) {
        this.showDropDown = true;
        if (this.checkEmpty) {
            this.filterValue(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyDownChange(event) {
        if (event.code === this.KEY_CODES.ARROW_UP && this.activeIndex > 0) {
            this.activeIndex--;
            document.getElementsByClassName('fn-time-picker-ul')[0].scrollTop -= 35;
        }
        if (event.code === this.KEY_CODES.ARROW_DOWN && this.activeIndex < this.uiItemArray.length - 1) {
            this.activeIndex++;
            document.getElementsByClassName('fn-time-picker-ul')[0].scrollTop += 35;
        }
    }
}
FnMultiTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-multi-time-picker',
                template: "<div>\n  <input [(ngModel)]=\"searchTerm\" (click)=\"openDropDown($event)\" (keydown)=\"keyDownChange($event)\" maxlength=\"17\"\n         (keyup)=\"filterValue($event)\"/>\n  <div (click)=\"closeDropDown()\">\n    <ul *ngIf=\"uiItemArray.length > 0 && showDropDown\" class=\"fn-time-picker-ul\">\n      <li *ngFor=\"let item of uiItemArray; let i = index\" tabindex=\"{{i}}\" [ngClass]=\"{'active': activeIndex === i  }\"\n          (click)=\"onItemClick(item)\">{{item}}</li>\n    </ul>\n  </div>\n</div>\n",
                styles: [":root{--time-list-hover-bg:$time-list-hover-bg}.fn-time-picker-search{width:100%;float:left;position:relative}.fn-time-picker-search input{width:100%;float:left;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem}.fn-time-picker-search .fn-time-picker-ul{list-style:none;border:1px solid #ced4da;width:100%;max-height:160px;overflow-x:hidden;overflow-y:scroll;scroll-behavior:smooth;padding:0;margin:0;box-shadow:5px 5px 10px rgba(0,0,0,.05);position:absolute;top:100%;z-index:1}.fn-time-picker-search .fn-time-picker-ul li{border-bottom:1px solid #ced4da;cursor:pointer;padding:4px 12px;background-color:#fff;font-size:13px;letter-spacing:.03em;font-weight:400;transition:.3s ease-in}.fn-time-picker-search .fn-time-picker-ul li:last-child{border-bottom:none}.fn-time-picker-search .fn-time-picker-ul li:hover{background-color:var(--time-list-hover-bg);color:#fff}"]
            }] }
];
/** @nocollapse */
FnMultiTimePickerComponent.ctorParameters = () => [
    { type: FnTimepickerService }
];
FnMultiTimePickerComponent.propDecorators = {
    startIndex: [{ type: Input }],
    lastIndex: [{ type: Input }],
    placeHolder: [{ type: Input }],
    isMilitryTime: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.startIndex;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.lastIndex;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.placeHolder;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.isMilitryTime;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.timeStoredArray;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.uiItemArray;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.nonMilitryHourArray;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.nonMilitryMinuteArray;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.militryHourArray;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.militryMinuteArray;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.showDropDown;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.checkEmpty;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.activeIndex;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.searchTerm;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.splitTimeVal;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.selectIndex;
    /**
     * @type {?}
     * @private
     */
    FnMultiTimePickerComponent.prototype.KEY_CODES;
    /**
     * @type {?}
     * @private
     */
    FnMultiTimePickerComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbXVsdGktdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvdGltZS9tdWx0aS10aW1lLXBpY2tlci9mbi1tdWx0aS10aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBT25FLE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFzQnJDLFlBQW9CLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBZmhELG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHdCQUFtQixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RiwwQkFBcUIsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRixxQkFBZ0IsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xHLHVCQUFrQixHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENB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LENBQUM7U0FFekU7UUFDRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7U0FDekU7SUFFSCxDQUFDOzs7WUExTEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLHdnQkFBa0Q7O2FBRW5EOzs7O1lBTk8sbUJBQW1COzs7eUJBU3hCLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7Ozs7SUFITixnREFBNEI7O0lBQzVCLCtDQUEyQjs7SUFDM0IsaURBQTZCOztJQUM3QixtREFBZ0M7O0lBRWhDLHFEQUFxQjs7SUFDckIsaURBQWlCOztJQUNqQix5REFBc0Y7O0lBQ3RGLDJEQUFpRjs7SUFDakYsc0RBQWtHOztJQUNsRyx3REFBOEM7O0lBQzlDLGtEQUFvQjs7SUFDcEIsZ0RBQW1COztJQUNuQixpREFBaUI7O0lBRWpCLGdEQUFnQjs7SUFDaEIsa0RBQTRCOztJQUM1QixpREFBb0I7Ozs7O0lBQ3BCLCtDQUFrQjs7Ozs7SUFFTiw2Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZuVGltZXBpY2tlclNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL3RpbWVwaWNrZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZuLW11bHRpLXRpbWUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICdmbi1tdWx0aS10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmbi1tdWx0aS10aW1lLXBpY2tlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZuTXVsdGlUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBzdGFydEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGxhc3RJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBwbGFjZUhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBpc01pbGl0cnlUaW1lOiBib29sZWFuO1xuXG4gIHRpbWVTdG9yZWRBcnJheSA9IFtdO1xuICB1aUl0ZW1BcnJheSA9IFtdO1xuICBub25NaWxpdHJ5SG91ckFycmF5ID0gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMiddO1xuICBub25NaWxpdHJ5TWludXRlQXJyYXkgPSBbJzAwYScsICcwMHAnLCAnMTVhJywgJzE1cCcsICczMGEnLCAnMzBwJywgJzQ1YScsICc0NXAnXTtcbiAgbWlsaXRyeUhvdXJBcnJheSA9IFsnMDAnLCAnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInXTtcbiAgbWlsaXRyeU1pbnV0ZUFycmF5ID0gWycwMCcsICcxNScsICczMCcsICc0NSddO1xuICBzaG93RHJvcERvd24gPSB0cnVlO1xuICBjaGVja0VtcHR5ID0gZmFsc2U7XG4gIGFjdGl2ZUluZGV4ID0gLTE7XG5cbiAgc2VhcmNoVGVybSA9ICcnO1xuICBzcGxpdFRpbWVWYWw6IEFycmF5PHN0cmluZz47XG4gIHNlbGVjdEluZGV4OiBudW1iZXI7XG4gIHByaXZhdGUgS0VZX0NPREVTO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogRm5UaW1lcGlja2VyU2VydmljZSkge1xuICAgIHRoaXMuS0VZX0NPREVTID0gc2VydmljZS5LRVlfQ09ERVM7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGlmICh0aGlzLmlzTWlsaXRyeVRpbWUpIHtcbiAgICAgIHRoaXMudGltZVN0b3JlZEFycmF5ID0gdGhpcy5zZXJ2aWNlLkhvdXIyNEZvcm1hdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aW1lU3RvcmVkQXJyYXkgPSB0aGlzLnNlcnZpY2UuSG91cjEyRm9ybWF0O1xuICAgIH1cblxuICAgIHRoaXMuc2VhcmNoVGVybSA9IHRoaXMudGltZVN0b3JlZEFycmF5W3RoaXMuc3RhcnRJbmRleF0gKyAnLScgKyB0aGlzLnRpbWVTdG9yZWRBcnJheVt0aGlzLmxhc3RJbmRleF07XG4gICAgdGhpcy5zZWxlY3RJbmRleCA9IHRoaXMuc3RhcnRJbmRleDtcblxuICB9XG5cbiAgZmlsdGVyVmFsdWUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcblxuICAgIHRoaXMuc2hvd0Ryb3BEb3duID0gdHJ1ZTtcbiAgICBpZiAodHlwZW9mICh0aGlzLnNlYXJjaFRlcm0pICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jaGVja0VtcHR5ID0gZmFsc2U7XG4gICAgICB0aGlzLnNwbGl0VGltZVZhbCA9IHRoaXMuc2VhcmNoVGVybS5zcGxpdCgnLScpO1xuXG4gICAgICBpZiAodGhpcy5zcGxpdFRpbWVWYWxbMV0pIHtcbiAgICAgICAgY29uc3QgaW5wdXRWYWwgPSB0aGlzLnNwbGl0VGltZVZhbFsxXTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0SW5kZXgpIHtcbiAgICAgICAgICBjb25zdCBzcGxpdEZyb21UaW1lID0gdGhpcy5zcGxpdFRpbWVWYWxbMF0uc3BsaXQoJzonKTtcbiAgICAgICAgICBpZiAodGhpcy5pc01pbGl0cnlUaW1lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5taWxpdHJ5SG91ckFycmF5LmluY2x1ZGVzKHNwbGl0RnJvbVRpbWVbMF0pICYmIHRoaXMubWlsaXRyeU1pbnV0ZUFycmF5LmluY2x1ZGVzKHNwbGl0RnJvbVRpbWVbMV0pKSB7XG4gICAgICAgICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSB0aGlzLnNlcnZpY2UuSG91cjI0TmV4dEZvcm1hdC5maWx0ZXIoaXRlbXMgPT4gaXRlbXMudG9TdHJpbmcoKS5zdGFydHNXaXRoKGlucHV0VmFsKVxuICAgICAgICAgICAgICAgICYmIHRoaXMuc2VydmljZS5Ib3VyMjROZXh0Rm9ybWF0LmluZGV4T2YoaXRlbXMpID4gdGhpcy5zZWxlY3RJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGlzIGNvZGUgd3JpdHRlbiBmb3IgbWF0Y2hpbmcgcmVnZXggZm9yIFRvIHRpbWVcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcnZpY2UucmVnZXgxMmEudGVzdChpbnB1dFZhbCkpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGltZVN0cmluZ1NwbGl0ID0gaW5wdXRWYWwuc3BsaXQoJ2EnKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMubm9uTWlsaXRyeUhvdXJBcnJheS5pbmNsdWRlcyhzcGxpdEZyb21UaW1lWzBdKSAmJiB0aGlzLm5vbk1pbGl0cnlNaW51dGVBcnJheS5pbmNsdWRlcyhzcGxpdEZyb21UaW1lWzFdKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSB0aGlzLnNlcnZpY2UuSG91cjEyTmV4dEZvcm1hdC5maWx0ZXIoaXRlbXMgPT4gKGl0ZW1zLnRvU3RyaW5nKCkuc3RhcnRzV2l0aCh0aW1lU3RyaW5nU3BsaXRbMF0pXG4gICAgICAgICAgICAgICAgICAmJiBpdGVtcy5pbmNsdWRlcygnYScpKSAmJiB0aGlzLnNlcnZpY2UuSG91cjEyTmV4dEZvcm1hdC5pbmRleE9mKGl0ZW1zKSA+IHRoaXMuc2VsZWN0SW5kZXgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VydmljZS5yZWdleDEycC50ZXN0KGlucHV0VmFsKSkge1xuICAgICAgICAgICAgICBjb25zdCB0aW1lU3RyaW5nU3BsaXQgPSBpbnB1dFZhbC5zcGxpdCgncCcpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5ub25NaWxpdHJ5SG91ckFycmF5LmluY2x1ZGVzKHNwbGl0RnJvbVRpbWVbMF0pICYmIHRoaXMubm9uTWlsaXRyeU1pbnV0ZUFycmF5LmluY2x1ZGVzKHNwbGl0RnJvbVRpbWVbMV0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IHRoaXMuc2VydmljZS5Ib3VyMTJOZXh0Rm9ybWF0LmZpbHRlcihpdGVtcyA9PiAoaXRlbXMudG9TdHJpbmcoKS5zdGFydHNXaXRoKHRpbWVTdHJpbmdTcGxpdFswXSlcbiAgICAgICAgICAgICAgICAgICYmIGl0ZW1zLmluY2x1ZGVzKCdwJykpICYmIHRoaXMuc2VydmljZS5Ib3VyMTJOZXh0Rm9ybWF0LmluZGV4T2YoaXRlbXMpID4gdGhpcy5zZWxlY3RJbmRleCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IFtdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLm5vbk1pbGl0cnlIb3VyQXJyYXkuaW5jbHVkZXMoc3BsaXRGcm9tVGltZVswXSkgJiYgdGhpcy5ub25NaWxpdHJ5TWludXRlQXJyYXkuaW5jbHVkZXMoc3BsaXRGcm9tVGltZVsxXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gdGhpcy5zZXJ2aWNlLkhvdXIxMk5leHRGb3JtYXQuZmlsdGVyKGl0ZW1zID0+IGl0ZW1zLnRvU3RyaW5nKCkuc3RhcnRzV2l0aChpbnB1dFZhbClcbiAgICAgICAgICAgICAgICAgICYmIHRoaXMuc2VydmljZS5Ib3VyMTJOZXh0Rm9ybWF0LmluZGV4T2YoaXRlbXMpID4gdGhpcy5zZWxlY3RJbmRleCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IFtdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLnJlZ2V4MTJhLnRlc3QodGhpcy5zZWFyY2hUZXJtKSkge1xuXG4gICAgICAgICAgY29uc3QgdGltZVN0cmluZ1NwbGl0ID0gdGhpcy5zZWFyY2hUZXJtLnNwbGl0KCdhJyk7XG4gICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IHRoaXMudGltZVN0b3JlZEFycmF5LmZpbHRlcihpdGVtcyA9PiBpdGVtcy5pbmNsdWRlcyh0aW1lU3RyaW5nU3BsaXRbMF0pICYmIGl0ZW1zLmluY2x1ZGVzKCdhJykpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZXJ2aWNlLnJlZ2V4MTJwLnRlc3QodGhpcy5zZWFyY2hUZXJtKSkge1xuXG4gICAgICAgICAgY29uc3QgdGltZVN0cmluZ1NwbGl0ID0gdGhpcy5zZWFyY2hUZXJtLnNwbGl0KCdwJyk7XG4gICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IHRoaXMudGltZVN0b3JlZEFycmF5LmZpbHRlcihpdGVtcyA9PiBpdGVtcy5pbmNsdWRlcyh0aW1lU3RyaW5nU3BsaXRbMF0pICYmIGl0ZW1zLmluY2x1ZGVzKCdwJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmlzTWlsaXRyeVRpbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLnNlYXJjaFRlcm0udG9TdHJpbmcoKS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJhZGl4IG1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgY29uc3QgbW9kaWZpZWRUZXJtID0gcGFyc2VJbnQodGVybVswXSkgPCAxMCAmJiAhdGVybVswXS50b1N0cmluZygpLnN0YXJ0c1dpdGgoJzAnKSA/ICcwJyArIHRlcm1bMF0gKyAodGVybS5sZW5ndGggPiAxID8gJzonICsgdGVybVsxXSA6ICcnKSA6IHRoaXMuc2VhcmNoVGVybTtcbiAgICAgICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSB0aGlzLnRpbWVTdG9yZWRBcnJheS5maWx0ZXIoaXRlbXMgPT4gaXRlbXMudG9TdHJpbmcoKS5zdGFydHNXaXRoKG1vZGlmaWVkVGVybSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gdGhpcy50aW1lU3RvcmVkQXJyYXkuZmlsdGVyKGl0ZW1zID0+IGl0ZW1zLnRvU3RyaW5nKCkuc3RhcnRzV2l0aCh0aGlzLnNlYXJjaFRlcm0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IHRoaXMuS0VZX0NPREVTLkJBQ0tTUEFDRSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgaWYgKHRoaXMudWlJdGVtQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm4tdGltZS1waWNrZXItdWwnKVswXS5zY3JvbGxUb3AgPSAwKTtcblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSB0aGlzLktFWV9DT0RFUy5FTlRFUiAmJiB0aGlzLnVpSXRlbUFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbGlWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaS5hY3RpdmUnKS50ZXh0Q29udGVudDtcbiAgICAgICAgdGhpcy5vbkl0ZW1DbGljayhsaVZhbCk7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gW107XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZuLXRpbWUtcGlja2VyLXVsJylbMF0uc2Nyb2xsVG9wID0gMDtcblxuICAgICAgICB0aGlzLmNoZWNrRW1wdHkgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgIHRoaXMuY2hlY2tFbXB0eSA9IHRydWU7XG4gICAgICB0aGlzLnVpSXRlbUFycmF5ID0gW107XG4gICAgfVxuXG4gIH1cblxuICBvbkl0ZW1DbGljayhwYXJhbTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuc3BsaXRUaW1lVmFsWzFdKSB7XG4gICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgIGNvbnN0IG5ld1RvVGltZVN0cmluZyA9IHRoaXMuc2VhcmNoVGVybS5zcGxpdCgnLScpWzBdO1xuICAgICAgdGhpcy5zZWFyY2hUZXJtID0gbmV3VG9UaW1lU3RyaW5nICsgJy0nICsgcGFyYW07XG4gICAgICB0aGlzLnVpSXRlbUFycmF5ID0gW107XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IDA7XG4gICAgICB0aGlzLnNlYXJjaFRlcm0gPSBwYXJhbSArICctJztcbiAgICAgIHRoaXMuc2VsZWN0SW5kZXggPSB0aGlzLnRpbWVTdG9yZWRBcnJheS5pbmRleE9mKHBhcmFtKTtcbiAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSBbXTtcbiAgICB9XG5cbiAgfVxuXG4gIGNsb3NlRHJvcERvd24oKSB7XG4gICAgdGhpcy5zaG93RHJvcERvd24gPSBmYWxzZTtcbiAgfVxuXG4gIG9wZW5Ecm9wRG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5zaG93RHJvcERvd24gPSB0cnVlO1xuICAgIGlmICh0aGlzLmNoZWNrRW1wdHkpIHtcbiAgICAgIHRoaXMuZmlsdGVyVmFsdWUoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25DaGFuZ2UoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcblxuICAgIGlmIChldmVudC5jb2RlID09PSB0aGlzLktFWV9DT0RFUy5BUlJPV19VUCAmJiB0aGlzLmFjdGl2ZUluZGV4ID4gMCkge1xuICAgICAgdGhpcy5hY3RpdmVJbmRleC0tO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm4tdGltZS1waWNrZXItdWwnKVswXS5zY3JvbGxUb3AgLT0gMzU7XG5cbiAgICB9XG4gICAgaWYgKGV2ZW50LmNvZGUgPT09IHRoaXMuS0VZX0NPREVTLkFSUk9XX0RPV04gJiYgdGhpcy5hY3RpdmVJbmRleCA8IHRoaXMudWlJdGVtQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5hY3RpdmVJbmRleCsrO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm4tdGltZS1waWNrZXItdWwnKVswXS5zY3JvbGxUb3AgKz0gMzU7XG4gICAgfVxuXG4gIH1cblxufVxuIl19