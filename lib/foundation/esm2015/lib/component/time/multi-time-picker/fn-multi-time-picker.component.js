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
        this.searchTerm = "";
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
        if (typeof (this.searchTerm) !== "undefined") {
            this.checkEmpty = false;
            this.splitTimeVal = this.searchTerm.split('-');
            if (this.splitTimeVal[1]) {
                /** @type {?} */
                let inputVal = this.splitTimeVal[1];
                if (this.selectIndex) {
                    /** @type {?} */
                    var splitFromTime = this.splitTimeVal[0].split(':');
                    if (this.isMilitryTime) {
                        if (this.militryHourArray.includes(splitFromTime[0]) && this.militryMinuteArray.includes(splitFromTime[1])) {
                            this.uiItemArray = this.service.Hour24NextFormat.filter((/**
                             * @param {?} items
                             * @return {?}
                             */
                            items => items.toString().startsWith(inputVal) && this.service.Hour24NextFormat.indexOf(items) > this.selectIndex));
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
                            var timeStringSplit = inputVal.split('a');
                            if (this.nonMilitryHourArray.includes(splitFromTime[0]) && this.nonMilitryMinuteArray.includes(splitFromTime[1])) {
                                this.uiItemArray = this.service.Hour12NextFormat.filter((/**
                                 * @param {?} items
                                 * @return {?}
                                 */
                                items => (items.toString().startsWith(timeStringSplit[0]) && items.includes('a')) && this.service.Hour12NextFormat.indexOf(items) > this.selectIndex));
                            }
                            else {
                                this.activeIndex = 0;
                                this.uiItemArray = [];
                            }
                        }
                        else if (this.service.regex12p.test(inputVal)) {
                            /** @type {?} */
                            var timeStringSplit = inputVal.split('p');
                            if (this.nonMilitryHourArray.includes(splitFromTime[0]) && this.nonMilitryMinuteArray.includes(splitFromTime[1])) {
                                this.uiItemArray = this.service.Hour12NextFormat.filter((/**
                                 * @param {?} items
                                 * @return {?}
                                 */
                                items => (items.toString().startsWith(timeStringSplit[0]) && items.includes('p')) && this.service.Hour12NextFormat.indexOf(items) > this.selectIndex));
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
                                items => items.toString().startsWith(inputVal) && this.service.Hour12NextFormat.indexOf(items) > this.selectIndex));
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
                    let timeStringSplit = this.searchTerm.split('a');
                    this.uiItemArray = this.timeStoredArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    items => items.includes(timeStringSplit[0]) && items.includes('a')));
                }
                else if (this.service.regex12p.test(this.searchTerm)) {
                    /** @type {?} */
                    let timeStringSplit = this.searchTerm.split('p');
                    this.uiItemArray = this.timeStoredArray.filter((/**
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
            if (event.keyCode == this.KEY_CODES.BACKSPACE) {
                this.activeIndex = 0;
                if (this.uiItemArray.length > 0) {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => document.getElementsByClassName("fn-time-picker-ul")[0].scrollTop = 0));
                }
            }
            if (event.keyCode == this.KEY_CODES.ENTER && this.uiItemArray.length > 0) {
                /** @type {?} */
                var liVal = document.querySelector("li.active").textContent;
                this.onItemClick(liVal);
                this.activeIndex = 0;
                this.uiItemArray = [];
                document.getElementsByClassName("fn-time-picker-ul")[0].scrollTop = 0;
                this.checkEmpty == false;
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
            var newToTimeString = this.searchTerm.split('-')[0];
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
        if (event.code == this.KEY_CODES.ARROW_UP && this.activeIndex > 0) {
            this.activeIndex--;
            document.getElementsByClassName("fn-time-picker-ul")[0].scrollTop -= 35;
        }
        if (event.code == this.KEY_CODES.ARROW_DOWN && this.activeIndex < this.uiItemArray.length - 1) {
            this.activeIndex++;
            document.getElementsByClassName("fn-time-picker-ul")[0].scrollTop += 35;
        }
    }
}
FnMultiTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-multi-time-picker',
                template: "<div>\n  <input [(ngModel)]=\"searchTerm\" (click)=\"openDropDown($event)\" (keydown)=\"keyDownChange($event)\" maxlength=\"17\"\n    (keyup)=\"filterValue($event)\" />\n  <div (click)=\"closeDropDown()\">\n    <ul *ngIf=\"uiItemArray.length > 0 && showDropDown\" class=\"fn-time-picker-ul\">\n      <li *ngFor=\"let item of uiItemArray; let i = index\" tabindex=\"{{i}}\" [ngClass]=\"{'active': activeIndex === i  }\"\n        (click)=\"onItemClick(item)\">{{item}}</li>\n    </ul>\n  </div>\n</div>\n",
                styles: [".fn-time-picker-ul{list-style:none;border:1px solid #ccc;max-height:160px;overflow-x:hidden;scroll-behavior:smooth;padding:0;margin:0;top:0;width:182px;max-height:160px;overflow-y:scroll}.fn-time-picker-ul li{margin-bottom:3px;cursor:pointer;padding:5px;background-color:#f3f3f3}.fn-time-picker-ul li:last-child{margin-bottom:0}.fn-time-picker-ul li.active,.fn-time-picker-ul li:hover{background-color:#77b0f1;color:#fff}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbXVsdGktdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvdGltZS9tdWx0aS10aW1lLXBpY2tlci9mbi1tdWx0aS10aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBT3JFLE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFxQnJDLFlBQW9CLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBZGhELG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHdCQUFtQixHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RiwwQkFBcUIsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRixxQkFBZ0IsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xHLHVCQUFrQixHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENB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O1NBRXpFO1FBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtZQUNsQixRQUFRLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1NBQ3pFO0lBRUgsQ0FBQzs7O1lBbkxGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxrZ0JBQWtEOzthQUVuRDs7OztZQU5RLG1CQUFtQjs7O3lCQVN6QixLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzs7O0lBSE4sZ0RBQTRCOztJQUM1QiwrQ0FBMkI7O0lBQzNCLGlEQUE2Qjs7SUFDN0IsbURBQWdDOztJQUVoQyxxREFBcUI7O0lBQ3JCLGlEQUFpQjs7SUFDakIseURBQXNGOztJQUN0RiwyREFBaUY7O0lBQ2pGLHNEQUFrRzs7SUFDbEcsd0RBQThDOztJQUM5QyxrREFBNkI7O0lBQzdCLGdEQUE0Qjs7SUFDNUIsaURBQXlCOztJQUV6QixnREFBd0I7O0lBQ3hCLGtEQUE0Qjs7SUFDNUIsaURBQW9COzs7OztJQUNwQiwrQ0FBa0I7Ozs7O0lBQ04sNkNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGblRpbWVwaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdGltZXBpY2tlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm4tbXVsdGktdGltZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJ2ZuLW11bHRpLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZuLW11bHRpLXRpbWUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm5NdWx0aVRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHN0YXJ0SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgbGFzdEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzTWlsaXRyeVRpbWU6IGJvb2xlYW47XG5cbiAgdGltZVN0b3JlZEFycmF5ID0gW107XG4gIHVpSXRlbUFycmF5ID0gW107XG4gIG5vbk1pbGl0cnlIb3VyQXJyYXkgPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJywgJzEyJ107XG4gIG5vbk1pbGl0cnlNaW51dGVBcnJheSA9IFsnMDBhJywgJzAwcCcsICcxNWEnLCAnMTVwJywgJzMwYScsICczMHAnLCAnNDVhJywgJzQ1cCddO1xuICBtaWxpdHJ5SG91ckFycmF5ID0gWycwMCcsICcwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMiddO1xuICBtaWxpdHJ5TWludXRlQXJyYXkgPSBbJzAwJywgJzE1JywgJzMwJywgJzQ1J107XG4gIHNob3dEcm9wRG93bjogYm9vbGVhbiA9IHRydWU7XG4gIGNoZWNrRW1wdHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgYWN0aXZlSW5kZXg6IG51bWJlciA9IC0xO1xuXG4gIHNlYXJjaFRlcm06IHN0cmluZyA9IFwiXCI7XG4gIHNwbGl0VGltZVZhbDogQXJyYXk8c3RyaW5nPjtcbiAgc2VsZWN0SW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBLRVlfQ09ERVM7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogRm5UaW1lcGlja2VyU2VydmljZSkge1xuICAgIHRoaXMuS0VZX0NPREVTID0gc2VydmljZS5LRVlfQ09ERVM7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGlmICh0aGlzLmlzTWlsaXRyeVRpbWUpIHtcbiAgICAgIHRoaXMudGltZVN0b3JlZEFycmF5ID0gdGhpcy5zZXJ2aWNlLkhvdXIyNEZvcm1hdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aW1lU3RvcmVkQXJyYXkgPSB0aGlzLnNlcnZpY2UuSG91cjEyRm9ybWF0O1xuICAgIH1cblxuICAgIHRoaXMuc2VhcmNoVGVybSA9IHRoaXMudGltZVN0b3JlZEFycmF5W3RoaXMuc3RhcnRJbmRleF0gKyAnLScgKyB0aGlzLnRpbWVTdG9yZWRBcnJheVt0aGlzLmxhc3RJbmRleF07XG4gICAgdGhpcy5zZWxlY3RJbmRleCA9IHRoaXMuc3RhcnRJbmRleDtcblxuICB9XG5cbiAgZmlsdGVyVmFsdWUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcblxuICAgIHRoaXMuc2hvd0Ryb3BEb3duID0gdHJ1ZTtcbiAgICBpZiAodHlwZW9mICh0aGlzLnNlYXJjaFRlcm0pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLmNoZWNrRW1wdHkgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3BsaXRUaW1lVmFsID0gdGhpcy5zZWFyY2hUZXJtLnNwbGl0KCctJyk7XG5cbiAgICAgIGlmICh0aGlzLnNwbGl0VGltZVZhbFsxXSkge1xuICAgICAgICBsZXQgaW5wdXRWYWwgPSB0aGlzLnNwbGl0VGltZVZhbFsxXTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0SW5kZXgpIHtcbiAgICAgICAgICB2YXIgc3BsaXRGcm9tVGltZSA9IHRoaXMuc3BsaXRUaW1lVmFsWzBdLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgaWYgKHRoaXMuaXNNaWxpdHJ5VGltZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubWlsaXRyeUhvdXJBcnJheS5pbmNsdWRlcyhzcGxpdEZyb21UaW1lWzBdKSAmJiB0aGlzLm1pbGl0cnlNaW51dGVBcnJheS5pbmNsdWRlcyhzcGxpdEZyb21UaW1lWzFdKSkge1xuICAgICAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gdGhpcy5zZXJ2aWNlLkhvdXIyNE5leHRGb3JtYXQuZmlsdGVyKGl0ZW1zID0+IGl0ZW1zLnRvU3RyaW5nKCkuc3RhcnRzV2l0aChpbnB1dFZhbCkgJiYgdGhpcy5zZXJ2aWNlLkhvdXIyNE5leHRGb3JtYXQuaW5kZXhPZihpdGVtcykgPiB0aGlzLnNlbGVjdEluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMgY29kZSB3cml0dGVuIGZvciBtYXRjaGluZyByZWdleCBmb3IgVG8gdGltZVxuICAgICAgICAgICAgaWYgKHRoaXMuc2VydmljZS5yZWdleDEyYS50ZXN0KGlucHV0VmFsKSkge1xuICAgICAgICAgICAgICB2YXIgdGltZVN0cmluZ1NwbGl0ID0gaW5wdXRWYWwuc3BsaXQoJ2EnKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMubm9uTWlsaXRyeUhvdXJBcnJheS5pbmNsdWRlcyhzcGxpdEZyb21UaW1lWzBdKSAmJiB0aGlzLm5vbk1pbGl0cnlNaW51dGVBcnJheS5pbmNsdWRlcyhzcGxpdEZyb21UaW1lWzFdKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSB0aGlzLnNlcnZpY2UuSG91cjEyTmV4dEZvcm1hdC5maWx0ZXIoaXRlbXMgPT4gKGl0ZW1zLnRvU3RyaW5nKCkuc3RhcnRzV2l0aCh0aW1lU3RyaW5nU3BsaXRbMF0pICYmIGl0ZW1zLmluY2x1ZGVzKCdhJykpICYmIHRoaXMuc2VydmljZS5Ib3VyMTJOZXh0Rm9ybWF0LmluZGV4T2YoaXRlbXMpID4gdGhpcy5zZWxlY3RJbmRleCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IFtdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZXJ2aWNlLnJlZ2V4MTJwLnRlc3QoaW5wdXRWYWwpKSB7XG4gICAgICAgICAgICAgIHZhciB0aW1lU3RyaW5nU3BsaXQgPSBpbnB1dFZhbC5zcGxpdCgncCcpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5ub25NaWxpdHJ5SG91ckFycmF5LmluY2x1ZGVzKHNwbGl0RnJvbVRpbWVbMF0pICYmIHRoaXMubm9uTWlsaXRyeU1pbnV0ZUFycmF5LmluY2x1ZGVzKHNwbGl0RnJvbVRpbWVbMV0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IHRoaXMuc2VydmljZS5Ib3VyMTJOZXh0Rm9ybWF0LmZpbHRlcihpdGVtcyA9PiAoaXRlbXMudG9TdHJpbmcoKS5zdGFydHNXaXRoKHRpbWVTdHJpbmdTcGxpdFswXSkgJiYgaXRlbXMuaW5jbHVkZXMoJ3AnKSkgJiYgdGhpcy5zZXJ2aWNlLkhvdXIxMk5leHRGb3JtYXQuaW5kZXhPZihpdGVtcykgPiB0aGlzLnNlbGVjdEluZGV4KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMubm9uTWlsaXRyeUhvdXJBcnJheS5pbmNsdWRlcyhzcGxpdEZyb21UaW1lWzBdKSAmJiB0aGlzLm5vbk1pbGl0cnlNaW51dGVBcnJheS5pbmNsdWRlcyhzcGxpdEZyb21UaW1lWzFdKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSB0aGlzLnNlcnZpY2UuSG91cjEyTmV4dEZvcm1hdC5maWx0ZXIoaXRlbXMgPT4gaXRlbXMudG9TdHJpbmcoKS5zdGFydHNXaXRoKGlucHV0VmFsKSAmJiB0aGlzLnNlcnZpY2UuSG91cjEyTmV4dEZvcm1hdC5pbmRleE9mKGl0ZW1zKSA+IHRoaXMuc2VsZWN0SW5kZXgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5yZWdleDEyYS50ZXN0KHRoaXMuc2VhcmNoVGVybSkpIHtcblxuICAgICAgICAgIGxldCB0aW1lU3RyaW5nU3BsaXQgPSB0aGlzLnNlYXJjaFRlcm0uc3BsaXQoJ2EnKTtcbiAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gdGhpcy50aW1lU3RvcmVkQXJyYXkuZmlsdGVyKGl0ZW1zID0+IGl0ZW1zLmluY2x1ZGVzKHRpbWVTdHJpbmdTcGxpdFswXSkgJiYgaXRlbXMuaW5jbHVkZXMoJ2EnKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlcnZpY2UucmVnZXgxMnAudGVzdCh0aGlzLnNlYXJjaFRlcm0pKSB7XG5cbiAgICAgICAgICBsZXQgdGltZVN0cmluZ1NwbGl0ID0gdGhpcy5zZWFyY2hUZXJtLnNwbGl0KCdwJyk7XG4gICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IHRoaXMudGltZVN0b3JlZEFycmF5LmZpbHRlcihpdGVtcyA9PiBpdGVtcy5pbmNsdWRlcyh0aW1lU3RyaW5nU3BsaXRbMF0pICYmIGl0ZW1zLmluY2x1ZGVzKCdwJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmlzTWlsaXRyeVRpbWUpIHtcbiAgICAgICAgICAgIGxldCB0ZXJtID0gdGhpcy5zZWFyY2hUZXJtLnRvU3RyaW5nKCkuc3BsaXQoXCI6XCIpO1xuICAgICAgICAgICAgbGV0IG1vZGlmaWVkVGVybSA9IHBhcnNlSW50KHRlcm1bMF0pIDwgMTAgJiYgIXRlcm1bMF0udG9TdHJpbmcoKS5zdGFydHNXaXRoKFwiMFwiKSA/ICcwJyArIHRlcm1bMF0gKyAodGVybS5sZW5ndGggPiAxID8gXCI6XCIgKyB0ZXJtWzFdIDogJycpIDogdGhpcy5zZWFyY2hUZXJtO1xuICAgICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IHRoaXMudGltZVN0b3JlZEFycmF5LmZpbHRlcihpdGVtcyA9PiBpdGVtcy50b1N0cmluZygpLnN0YXJ0c1dpdGgobW9kaWZpZWRUZXJtKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSB0aGlzLnRpbWVTdG9yZWRBcnJheS5maWx0ZXIoaXRlbXMgPT4gaXRlbXMudG9TdHJpbmcoKS5zdGFydHNXaXRoKHRoaXMuc2VhcmNoVGVybSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSB0aGlzLktFWV9DT0RFUy5CQUNLU1BBQ0UpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IDA7XG4gICAgICAgIGlmICh0aGlzLnVpSXRlbUFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmbi10aW1lLXBpY2tlci11bFwiKVswXS5zY3JvbGxUb3AgPSAwKTtcblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09IHRoaXMuS0VZX0NPREVTLkVOVEVSICYmIHRoaXMudWlJdGVtQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgbGlWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGkuYWN0aXZlXCIpLnRleHRDb250ZW50O1xuICAgICAgICB0aGlzLm9uSXRlbUNsaWNrKGxpVmFsKTtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSBbXTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZuLXRpbWUtcGlja2VyLXVsXCIpWzBdLnNjcm9sbFRvcCA9IDA7XG5cbiAgICAgICAgdGhpcy5jaGVja0VtcHR5ID09IGZhbHNlO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgdGhpcy5jaGVja0VtcHR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSBbXTtcbiAgICB9XG5cbiAgfVxuICBvbkl0ZW1DbGljayhwYXJhbTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuc3BsaXRUaW1lVmFsWzFdKSB7XG4gICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgIHZhciBuZXdUb1RpbWVTdHJpbmcgPSB0aGlzLnNlYXJjaFRlcm0uc3BsaXQoJy0nKVswXTtcbiAgICAgIHRoaXMuc2VhcmNoVGVybSA9IG5ld1RvVGltZVN0cmluZyArICctJyArIHBhcmFtO1xuICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IFtdO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgdGhpcy5zZWFyY2hUZXJtID0gcGFyYW0gKyAnLSc7XG4gICAgICB0aGlzLnNlbGVjdEluZGV4ID0gdGhpcy50aW1lU3RvcmVkQXJyYXkuaW5kZXhPZihwYXJhbSk7XG4gICAgICB0aGlzLnVpSXRlbUFycmF5ID0gW107XG4gICAgfVxuXG4gIH1cblxuICBjbG9zZURyb3BEb3duKCkge1xuICAgIHRoaXMuc2hvd0Ryb3BEb3duID0gZmFsc2U7XG4gIH1cblxuICBvcGVuRHJvcERvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLnNob3dEcm9wRG93biA9IHRydWU7XG4gICAgaWYgKHRoaXMuY2hlY2tFbXB0eSkge1xuICAgICAgdGhpcy5maWx0ZXJWYWx1ZShldmVudCk7XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkNoYW5nZShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuXG4gICAgaWYgKGV2ZW50LmNvZGUgPT0gdGhpcy5LRVlfQ09ERVMuQVJST1dfVVAgJiYgdGhpcy5hY3RpdmVJbmRleCA+IDApIHtcbiAgICAgIHRoaXMuYWN0aXZlSW5kZXgtLTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmbi10aW1lLXBpY2tlci11bFwiKVswXS5zY3JvbGxUb3AgLT0gMzU7XG5cbiAgICB9XG4gICAgaWYgKGV2ZW50LmNvZGUgPT0gdGhpcy5LRVlfQ09ERVMuQVJST1dfRE9XTiAmJiB0aGlzLmFjdGl2ZUluZGV4IDwgdGhpcy51aUl0ZW1BcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmFjdGl2ZUluZGV4KytcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmbi10aW1lLXBpY2tlci11bFwiKVswXS5zY3JvbGxUb3AgKz0gMzU7XG4gICAgfVxuXG4gIH1cblxufVxuIl19