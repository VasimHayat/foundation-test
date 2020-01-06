/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FnTimepickerService } from '../services/timepicker.service';
var FnMultiTimePickerComponent = /** @class */ (function () {
    function FnMultiTimePickerComponent(service) {
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
    FnMultiTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isMilitryTime) {
            this.timeStoredArray = this.service.Hour24Format;
        }
        else {
            this.timeStoredArray = this.service.Hour12Format;
        }
        this.searchTerm = this.timeStoredArray[this.startIndex] + '-' + this.timeStoredArray[this.lastIndex];
        this.selectIndex = this.startIndex;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FnMultiTimePickerComponent.prototype.filterValue = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.showDropDown = true;
        if (typeof (this.searchTerm) !== "undefined") {
            this.checkEmpty = false;
            this.splitTimeVal = this.searchTerm.split('-');
            if (this.splitTimeVal[1]) {
                /** @type {?} */
                var inputVal_1 = this.splitTimeVal[1];
                if (this.selectIndex) {
                    /** @type {?} */
                    var splitFromTime = this.splitTimeVal[0].split(':');
                    if (this.isMilitryTime) {
                        if (this.militryHourArray.includes(splitFromTime[0]) && this.militryMinuteArray.includes(splitFromTime[1])) {
                            this.uiItemArray = this.service.Hour24NextFormat.filter((/**
                             * @param {?} items
                             * @return {?}
                             */
                            function (items) { return items.toString().startsWith(inputVal_1) && _this.service.Hour24NextFormat.indexOf(items) > _this.selectIndex; }));
                        }
                        else {
                            this.activeIndex = 0;
                            this.uiItemArray = [];
                        }
                    }
                    else {
                        // this code written for matching regex for To time
                        if (this.service.regex12a.test(inputVal_1)) {
                            /** @type {?} */
                            var timeStringSplit = inputVal_1.split('a');
                            if (this.nonMilitryHourArray.includes(splitFromTime[0]) && this.nonMilitryMinuteArray.includes(splitFromTime[1])) {
                                this.uiItemArray = this.service.Hour12NextFormat.filter((/**
                                 * @param {?} items
                                 * @return {?}
                                 */
                                function (items) { return (items.toString().startsWith(timeStringSplit[0]) && items.includes('a')) && _this.service.Hour12NextFormat.indexOf(items) > _this.selectIndex; }));
                            }
                            else {
                                this.activeIndex = 0;
                                this.uiItemArray = [];
                            }
                        }
                        else if (this.service.regex12p.test(inputVal_1)) {
                            /** @type {?} */
                            var timeStringSplit = inputVal_1.split('p');
                            if (this.nonMilitryHourArray.includes(splitFromTime[0]) && this.nonMilitryMinuteArray.includes(splitFromTime[1])) {
                                this.uiItemArray = this.service.Hour12NextFormat.filter((/**
                                 * @param {?} items
                                 * @return {?}
                                 */
                                function (items) { return (items.toString().startsWith(timeStringSplit[0]) && items.includes('p')) && _this.service.Hour12NextFormat.indexOf(items) > _this.selectIndex; }));
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
                                function (items) { return items.toString().startsWith(inputVal_1) && _this.service.Hour12NextFormat.indexOf(items) > _this.selectIndex; }));
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
                    var timeStringSplit_1 = this.searchTerm.split('a');
                    this.uiItemArray = this.timeStoredArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    function (items) { return items.includes(timeStringSplit_1[0]) && items.includes('a'); }));
                }
                else if (this.service.regex12p.test(this.searchTerm)) {
                    /** @type {?} */
                    var timeStringSplit_2 = this.searchTerm.split('p');
                    this.uiItemArray = this.timeStoredArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    function (items) { return items.includes(timeStringSplit_2[0]) && items.includes('p'); }));
                }
                else {
                    if (this.isMilitryTime) {
                        /** @type {?} */
                        var term = this.searchTerm.toString().split(":");
                        /** @type {?} */
                        var modifiedTerm_1 = parseInt(term[0]) < 10 && !term[0].toString().startsWith("0") ? '0' + term[0] + (term.length > 1 ? ":" + term[1] : '') : this.searchTerm;
                        this.uiItemArray = this.timeStoredArray.filter((/**
                         * @param {?} items
                         * @return {?}
                         */
                        function (items) { return items.toString().startsWith(modifiedTerm_1); }));
                    }
                    else {
                        this.uiItemArray = this.timeStoredArray.filter((/**
                         * @param {?} items
                         * @return {?}
                         */
                        function (items) { return items.toString().startsWith(_this.searchTerm); }));
                    }
                }
            }
            if (event.keyCode == this.KEY_CODES.BACKSPACE) {
                this.activeIndex = 0;
                if (this.uiItemArray.length > 0) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return document.getElementsByClassName("fn-time-picker-ul")[0].scrollTop = 0; }));
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
    };
    /**
     * @param {?} param
     * @return {?}
     */
    FnMultiTimePickerComponent.prototype.onItemClick = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
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
    };
    /**
     * @return {?}
     */
    FnMultiTimePickerComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        this.showDropDown = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FnMultiTimePickerComponent.prototype.openDropDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.showDropDown = true;
        if (this.checkEmpty) {
            this.filterValue(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FnMultiTimePickerComponent.prototype.keyDownChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.code == this.KEY_CODES.ARROW_UP && this.activeIndex > 0) {
            this.activeIndex--;
            document.getElementsByClassName("fn-time-picker-ul")[0].scrollTop -= 35;
        }
        if (event.code == this.KEY_CODES.ARROW_DOWN && this.activeIndex < this.uiItemArray.length - 1) {
            this.activeIndex++;
            document.getElementsByClassName("fn-time-picker-ul")[0].scrollTop += 35;
        }
    };
    FnMultiTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-multi-time-picker',
                    template: "<div>\n  <input [(ngModel)]=\"searchTerm\" (click)=\"openDropDown($event)\" (keydown)=\"keyDownChange($event)\" maxlength=\"17\"\n    (keyup)=\"filterValue($event)\" />\n  <div (click)=\"closeDropDown()\">\n    <ul *ngIf=\"uiItemArray.length > 0 && showDropDown\" class=\"fn-time-picker-ul\">\n      <li *ngFor=\"let item of uiItemArray; let i = index\" tabindex=\"{{i}}\" [ngClass]=\"{'active': activeIndex === i  }\"\n        (click)=\"onItemClick(item)\">{{item}}</li>\n    </ul>\n  </div>\n</div>\n",
                    styles: [".fn-time-picker-ul{list-style:none;border:1px solid #ccc;max-height:160px;overflow-x:hidden;scroll-behavior:smooth;padding:0;margin:0;top:0;width:182px;max-height:160px;overflow-y:scroll}.fn-time-picker-ul li{margin-bottom:3px;cursor:pointer;padding:5px;background-color:#f3f3f3}.fn-time-picker-ul li:last-child{margin-bottom:0}.fn-time-picker-ul li.active,.fn-time-picker-ul li:hover{background-color:#77b0f1;color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    FnMultiTimePickerComponent.ctorParameters = function () { return [
        { type: FnTimepickerService }
    ]; };
    FnMultiTimePickerComponent.propDecorators = {
        startIndex: [{ type: Input }],
        lastIndex: [{ type: Input }],
        placeHolder: [{ type: Input }],
        isMilitryTime: [{ type: Input }]
    };
    return FnMultiTimePickerComponent;
}());
export { FnMultiTimePickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbXVsdGktdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvdGltZS9tdWx0aS10aW1lLXBpY2tlci9mbi1tdWx0aS10aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXJFO0lBMEJFLG9DQUFvQixPQUE0QjtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQWRoRCxvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQix3QkFBbUIsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEYsMEJBQXFCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakYscUJBQWdCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRyx1QkFBa0IsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLGlCQUFZLEdBQVks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dWxhci9jb3JlJztcbmltcG9ydCB7IEZuVGltZXBpY2tlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90aW1lcGlja2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmbi1tdWx0aS10aW1lLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnZm4tbXVsdGktdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm4tbXVsdGktdGltZS1waWNrZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGbk11bHRpVGltZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgc3RhcnRJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBsYXN0SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaXNNaWxpdHJ5VGltZTogYm9vbGVhbjtcblxuICB0aW1lU3RvcmVkQXJyYXkgPSBbXTtcbiAgdWlJdGVtQXJyYXkgPSBbXTtcbiAgbm9uTWlsaXRyeUhvdXJBcnJheSA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInXTtcbiAgbm9uTWlsaXRyeU1pbnV0ZUFycmF5ID0gWycwMGEnLCAnMDBwJywgJzE1YScsICcxNXAnLCAnMzBhJywgJzMwcCcsICc0NWEnLCAnNDVwJ107XG4gIG1pbGl0cnlIb3VyQXJyYXkgPSBbJzAwJywgJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1JywgJzA2JywgJzA3JywgJzA4JywgJzA5JywgJzEwJywgJzExJywgJzEyJ107XG4gIG1pbGl0cnlNaW51dGVBcnJheSA9IFsnMDAnLCAnMTUnLCAnMzAnLCAnNDUnXTtcbiAgc2hvd0Ryb3BEb3duOiBib29sZWFuID0gdHJ1ZTtcbiAgY2hlY2tFbXB0eTogYm9vbGVhbiA9IGZhbHNlO1xuICBhY3RpdmVJbmRleDogbnVtYmVyID0gLTE7XG5cbiAgc2VhcmNoVGVybTogc3RyaW5nID0gXCJcIjtcbiAgc3BsaXRUaW1lVmFsOiBBcnJheTxzdHJpbmc+O1xuICBzZWxlY3RJbmRleDogbnVtYmVyO1xuICBwcml2YXRlIEtFWV9DT0RFUztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBGblRpbWVwaWNrZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5LRVlfQ09ERVMgPSBzZXJ2aWNlLktFWV9DT0RFUztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYgKHRoaXMuaXNNaWxpdHJ5VGltZSkge1xuICAgICAgdGhpcy50aW1lU3RvcmVkQXJyYXkgPSB0aGlzLnNlcnZpY2UuSG91cjI0Rm9ybWF0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbWVTdG9yZWRBcnJheSA9IHRoaXMuc2VydmljZS5Ib3VyMTJGb3JtYXQ7XG4gICAgfVxuXG4gICAgdGhpcy5zZWFyY2hUZXJtID0gdGhpcy50aW1lU3RvcmVkQXJyYXlbdGhpcy5zdGFydEluZGV4XSArICctJyArIHRoaXMudGltZVN0b3JlZEFycmF5W3RoaXMubGFzdEluZGV4XTtcbiAgICB0aGlzLnNlbGVjdEluZGV4ID0gdGhpcy5zdGFydEluZGV4O1xuXG4gIH1cblxuICBmaWx0ZXJWYWx1ZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuXG4gICAgdGhpcy5zaG93RHJvcERvd24gPSB0cnVlO1xuICAgIGlmICh0eXBlb2YgKHRoaXMuc2VhcmNoVGVybSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRoaXMuY2hlY2tFbXB0eSA9IGZhbHNlO1xuICAgICAgdGhpcy5zcGxpdFRpbWVWYWwgPSB0aGlzLnNlYXJjaFRlcm0uc3BsaXQoJy0nKTtcblxuICAgICAgaWYgKHRoaXMuc3BsaXRUaW1lVmFsWzFdKSB7XG4gICAgICAgIGxldCBpbnB1dFZhbCA9IHRoaXMuc3BsaXRUaW1lVmFsWzFdO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RJbmRleCkge1xuICAgICAgICAgIHZhciBzcGxpdEZyb21UaW1lID0gdGhpcy5zcGxpdFRpbWVWYWxbMF0uc3BsaXQoJzonKTtcbiAgICAgICAgICBpZiAodGhpcy5pc01pbGl0cnlUaW1lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5taWxpdHJ5SG91ckFycmF5LmluY2x1ZGVzKHNwbGl0RnJvbVRpbWVbMF0pICYmIHRoaXMubWlsaXRyeU1pbnV0ZUFycmF5LmluY2x1ZGVzKHNwbGl0RnJvbVRpbWVbMV0pKSB7XG4gICAgICAgICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSB0aGlzLnNlcnZpY2UuSG91cjI0TmV4dEZvcm1hdC5maWx0ZXIoaXRlbXMgPT4gaXRlbXMudG9TdHJpbmcoKS5zdGFydHNXaXRoKGlucHV0VmFsKSAmJiB0aGlzLnNlcnZpY2UuSG91cjI0TmV4dEZvcm1hdC5pbmRleE9mKGl0ZW1zKSA+IHRoaXMuc2VsZWN0SW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IDA7XG4gICAgICAgICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHdyaXR0ZW4gZm9yIG1hdGNoaW5nIHJlZ2V4IGZvciBUbyB0aW1lXG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLnJlZ2V4MTJhLnRlc3QoaW5wdXRWYWwpKSB7XG4gICAgICAgICAgICAgIHZhciB0aW1lU3RyaW5nU3BsaXQgPSBpbnB1dFZhbC5zcGxpdCgnYScpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5ub25NaWxpdHJ5SG91ckFycmF5LmluY2x1ZGVzKHNwbGl0RnJvbVRpbWVbMF0pICYmIHRoaXMubm9uTWlsaXRyeU1pbnV0ZUFycmF5LmluY2x1ZGVzKHNwbGl0RnJvbVRpbWVbMV0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IHRoaXMuc2VydmljZS5Ib3VyMTJOZXh0Rm9ybWF0LmZpbHRlcihpdGVtcyA9PiAoaXRlbXMudG9TdHJpbmcoKS5zdGFydHNXaXRoKHRpbWVTdHJpbmdTcGxpdFswXSkgJiYgaXRlbXMuaW5jbHVkZXMoJ2EnKSkgJiYgdGhpcy5zZXJ2aWNlLkhvdXIxMk5leHRGb3JtYXQuaW5kZXhPZihpdGVtcykgPiB0aGlzLnNlbGVjdEluZGV4KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gW107XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlcnZpY2UucmVnZXgxMnAudGVzdChpbnB1dFZhbCkpIHtcbiAgICAgICAgICAgICAgdmFyIHRpbWVTdHJpbmdTcGxpdCA9IGlucHV0VmFsLnNwbGl0KCdwJyk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm5vbk1pbGl0cnlIb3VyQXJyYXkuaW5jbHVkZXMoc3BsaXRGcm9tVGltZVswXSkgJiYgdGhpcy5ub25NaWxpdHJ5TWludXRlQXJyYXkuaW5jbHVkZXMoc3BsaXRGcm9tVGltZVsxXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gdGhpcy5zZXJ2aWNlLkhvdXIxMk5leHRGb3JtYXQuZmlsdGVyKGl0ZW1zID0+IChpdGVtcy50b1N0cmluZygpLnN0YXJ0c1dpdGgodGltZVN0cmluZ1NwbGl0WzBdKSAmJiBpdGVtcy5pbmNsdWRlcygncCcpKSAmJiB0aGlzLnNlcnZpY2UuSG91cjEyTmV4dEZvcm1hdC5pbmRleE9mKGl0ZW1zKSA+IHRoaXMuc2VsZWN0SW5kZXgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICBpZiAodGhpcy5ub25NaWxpdHJ5SG91ckFycmF5LmluY2x1ZGVzKHNwbGl0RnJvbVRpbWVbMF0pICYmIHRoaXMubm9uTWlsaXRyeU1pbnV0ZUFycmF5LmluY2x1ZGVzKHNwbGl0RnJvbVRpbWVbMV0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IHRoaXMuc2VydmljZS5Ib3VyMTJOZXh0Rm9ybWF0LmZpbHRlcihpdGVtcyA9PiBpdGVtcy50b1N0cmluZygpLnN0YXJ0c1dpdGgoaW5wdXRWYWwpICYmIHRoaXMuc2VydmljZS5Ib3VyMTJOZXh0Rm9ybWF0LmluZGV4T2YoaXRlbXMpID4gdGhpcy5zZWxlY3RJbmRleCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IFtdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLnJlZ2V4MTJhLnRlc3QodGhpcy5zZWFyY2hUZXJtKSkge1xuXG4gICAgICAgICAgbGV0IHRpbWVTdHJpbmdTcGxpdCA9IHRoaXMuc2VhcmNoVGVybS5zcGxpdCgnYScpO1xuICAgICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSB0aGlzLnRpbWVTdG9yZWRBcnJheS5maWx0ZXIoaXRlbXMgPT4gaXRlbXMuaW5jbHVkZXModGltZVN0cmluZ1NwbGl0WzBdKSAmJiBpdGVtcy5pbmNsdWRlcygnYScpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VydmljZS5yZWdleDEycC50ZXN0KHRoaXMuc2VhcmNoVGVybSkpIHtcblxuICAgICAgICAgIGxldCB0aW1lU3RyaW5nU3BsaXQgPSB0aGlzLnNlYXJjaFRlcm0uc3BsaXQoJ3AnKTtcbiAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gdGhpcy50aW1lU3RvcmVkQXJyYXkuZmlsdGVyKGl0ZW1zID0+IGl0ZW1zLmluY2x1ZGVzKHRpbWVTdHJpbmdTcGxpdFswXSkgJiYgaXRlbXMuaW5jbHVkZXMoJ3AnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNNaWxpdHJ5VGltZSkge1xuICAgICAgICAgICAgbGV0IHRlcm0gPSB0aGlzLnNlYXJjaFRlcm0udG9TdHJpbmcoKS5zcGxpdChcIjpcIik7XG4gICAgICAgICAgICBsZXQgbW9kaWZpZWRUZXJtID0gcGFyc2VJbnQodGVybVswXSkgPCAxMCAmJiAhdGVybVswXS50b1N0cmluZygpLnN0YXJ0c1dpdGgoXCIwXCIpID8gJzAnICsgdGVybVswXSArICh0ZXJtLmxlbmd0aCA+IDEgPyBcIjpcIiArIHRlcm1bMV0gOiAnJykgOiB0aGlzLnNlYXJjaFRlcm07XG4gICAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gdGhpcy50aW1lU3RvcmVkQXJyYXkuZmlsdGVyKGl0ZW1zID0+IGl0ZW1zLnRvU3RyaW5nKCkuc3RhcnRzV2l0aChtb2RpZmllZFRlcm0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IHRoaXMudGltZVN0b3JlZEFycmF5LmZpbHRlcihpdGVtcyA9PiBpdGVtcy50b1N0cmluZygpLnN0YXJ0c1dpdGgodGhpcy5zZWFyY2hUZXJtKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09IHRoaXMuS0VZX0NPREVTLkJBQ0tTUEFDRSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgaWYgKHRoaXMudWlJdGVtQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZuLXRpbWUtcGlja2VyLXVsXCIpWzBdLnNjcm9sbFRvcCA9IDApO1xuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gdGhpcy5LRVlfQ09ERVMuRU5URVIgJiYgdGhpcy51aUl0ZW1BcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBsaVZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaS5hY3RpdmVcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIHRoaXMub25JdGVtQ2xpY2sobGlWYWwpO1xuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IFtdO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm4tdGltZS1waWNrZXItdWxcIilbMF0uc2Nyb2xsVG9wID0gMDtcblxuICAgICAgICB0aGlzLmNoZWNrRW1wdHkgPT0gZmFsc2U7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IDA7XG4gICAgICB0aGlzLmNoZWNrRW1wdHkgPSB0cnVlO1xuICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IFtdO1xuICAgIH1cblxuICB9XG4gIG9uSXRlbUNsaWNrKHBhcmFtOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5zcGxpdFRpbWVWYWxbMV0pIHtcbiAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgdmFyIG5ld1RvVGltZVN0cmluZyA9IHRoaXMuc2VhcmNoVGVybS5zcGxpdCgnLScpWzBdO1xuICAgICAgdGhpcy5zZWFyY2hUZXJtID0gbmV3VG9UaW1lU3RyaW5nICsgJy0nICsgcGFyYW07XG4gICAgICB0aGlzLnVpSXRlbUFycmF5ID0gW107XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IDA7XG4gICAgICB0aGlzLnNlYXJjaFRlcm0gPSBwYXJhbSArICctJztcbiAgICAgIHRoaXMuc2VsZWN0SW5kZXggPSB0aGlzLnRpbWVTdG9yZWRBcnJheS5pbmRleE9mKHBhcmFtKTtcbiAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSBbXTtcbiAgICB9XG5cbiAgfVxuXG4gIGNsb3NlRHJvcERvd24oKSB7XG4gICAgdGhpcy5zaG93RHJvcERvd24gPSBmYWxzZTtcbiAgfVxuXG4gIG9wZW5Ecm9wRG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMuc2hvd0Ryb3BEb3duID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5jaGVja0VtcHR5KSB7XG4gICAgICB0aGlzLmZpbHRlclZhbHVlKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBrZXlEb3duQ2hhbmdlKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG5cbiAgICBpZiAoZXZlbnQuY29kZSA9PSB0aGlzLktFWV9DT0RFUy5BUlJPV19VUCAmJiB0aGlzLmFjdGl2ZUluZGV4ID4gMCkge1xuICAgICAgdGhpcy5hY3RpdmVJbmRleC0tO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZuLXRpbWUtcGlja2VyLXVsXCIpWzBdLnNjcm9sbFRvcCAtPSAzNTtcblxuICAgIH1cbiAgICBpZiAoZXZlbnQuY29kZSA9PSB0aGlzLktFWV9DT0RFUy5BUlJPV19ET1dOICYmIHRoaXMuYWN0aXZlSW5kZXggPCB0aGlzLnVpSXRlbUFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuYWN0aXZlSW5kZXgrK1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZuLXRpbWUtcGlja2VyLXVsXCIpWzBdLnNjcm9sbFRvcCArPSAzNTtcbiAgICB9XG5cbiAgfVxuXG59XG4iXX0=