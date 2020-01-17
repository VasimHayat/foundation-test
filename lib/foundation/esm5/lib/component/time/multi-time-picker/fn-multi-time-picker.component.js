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
        this.searchTerm = '';
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
        if (typeof (this.searchTerm) !== 'undefined') {
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
                            function (items) { return items.toString().startsWith(inputVal_1)
                                && _this.service.Hour24NextFormat.indexOf(items) > _this.selectIndex; }));
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
                            var timeStringSplit_1 = inputVal_1.split('a');
                            if (this.nonMilitryHourArray.includes(splitFromTime[0]) && this.nonMilitryMinuteArray.includes(splitFromTime[1])) {
                                this.uiItemArray = this.service.Hour12NextFormat.filter((/**
                                 * @param {?} items
                                 * @return {?}
                                 */
                                function (items) { return (items.toString().startsWith(timeStringSplit_1[0])
                                    && items.includes('a')) && _this.service.Hour12NextFormat.indexOf(items) > _this.selectIndex; }));
                            }
                            else {
                                this.activeIndex = 0;
                                this.uiItemArray = [];
                            }
                        }
                        else if (this.service.regex12p.test(inputVal_1)) {
                            /** @type {?} */
                            var timeStringSplit_2 = inputVal_1.split('p');
                            if (this.nonMilitryHourArray.includes(splitFromTime[0]) && this.nonMilitryMinuteArray.includes(splitFromTime[1])) {
                                this.uiItemArray = this.service.Hour12NextFormat.filter((/**
                                 * @param {?} items
                                 * @return {?}
                                 */
                                function (items) { return (items.toString().startsWith(timeStringSplit_2[0])
                                    && items.includes('p')) && _this.service.Hour12NextFormat.indexOf(items) > _this.selectIndex; }));
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
                                function (items) { return items.toString().startsWith(inputVal_1)
                                    && _this.service.Hour12NextFormat.indexOf(items) > _this.selectIndex; }));
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
                    var timeStringSplit_3 = this.searchTerm.split('a');
                    this.uiItemArray = this.timeStoredArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    function (items) { return items.includes(timeStringSplit_3[0]) && items.includes('a'); }));
                }
                else if (this.service.regex12p.test(this.searchTerm)) {
                    /** @type {?} */
                    var timeStringSplit_4 = this.searchTerm.split('p');
                    this.uiItemArray = this.timeStoredArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    function (items) { return items.includes(timeStringSplit_4[0]) && items.includes('p'); }));
                }
                else {
                    if (this.isMilitryTime) {
                        /** @type {?} */
                        var term = this.searchTerm.toString().split(':');
                        // tslint:disable-next-line:radix max-line-length
                        /** @type {?} */
                        var modifiedTerm_1 = parseInt(term[0]) < 10 && !term[0].toString().startsWith('0') ? '0' + term[0] + (term.length > 1 ? ':' + term[1] : '') : this.searchTerm;
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
            if (event.keyCode === this.KEY_CODES.BACKSPACE) {
                this.activeIndex = 0;
                if (this.uiItemArray.length > 0) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return document.getElementsByClassName('fn-time-picker-ul')[0].scrollTop = 0; }));
                }
            }
            if (event.keyCode === this.KEY_CODES.ENTER && this.uiItemArray.length > 0) {
                /** @type {?} */
                var liVal = document.querySelector('li.active').textContent;
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
        if (event.code === this.KEY_CODES.ARROW_UP && this.activeIndex > 0) {
            this.activeIndex--;
            document.getElementsByClassName('fn-time-picker-ul')[0].scrollTop -= 35;
        }
        if (event.code === this.KEY_CODES.ARROW_DOWN && this.activeIndex < this.uiItemArray.length - 1) {
            this.activeIndex++;
            document.getElementsByClassName('fn-time-picker-ul')[0].scrollTop += 35;
        }
    };
    FnMultiTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-multi-time-picker',
                    template: "<div>\n  <input [(ngModel)]=\"searchTerm\" (click)=\"openDropDown($event)\" (keydown)=\"keyDownChange($event)\" maxlength=\"17\"\n         (keyup)=\"filterValue($event)\"/>\n  <div (click)=\"closeDropDown()\">\n    <ul *ngIf=\"uiItemArray.length > 0 && showDropDown\" class=\"fn-time-picker-ul\">\n      <li *ngFor=\"let item of uiItemArray; let i = index\" tabindex=\"{{i}}\" [ngClass]=\"{'active': activeIndex === i  }\"\n          (click)=\"onItemClick(item)\">{{item}}</li>\n    </ul>\n  </div>\n</div>\n",
                    styles: [":root{--time-list-hover-bg:$time-list-hover-bg}.fn-time-picker-search{width:100%;float:left;position:relative}.fn-time-picker-search input{width:100%;float:left;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem}.fn-time-picker-search .fn-time-picker-ul{list-style:none;border:1px solid #ced4da;width:100%;max-height:160px;overflow-x:hidden;overflow-y:scroll;scroll-behavior:smooth;padding:0;margin:0;box-shadow:5px 5px 10px rgba(0,0,0,.05);position:absolute;top:100%;z-index:1}.fn-time-picker-search .fn-time-picker-ul li{border-bottom:1px solid #ced4da;cursor:pointer;padding:4px 12px;background-color:#fff;font-size:13px;letter-spacing:.03em;font-weight:400;transition:.3s ease-in}.fn-time-picker-search .fn-time-picker-ul li:last-child{border-bottom:none}.fn-time-picker-search .fn-time-picker-ul li:hover{background-color:var(--time-list-hover-bg);color:#fff}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbXVsdGktdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvdGltZS9tdWx0aS10aW1lLXBpY2tlci9mbi1tdWx0aS10aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBRW5FO0lBMkJFLG9DQUFvQixPQUE0QjtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQWZoRCxvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQix3QkFBbUIsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEYsMEJBQXFCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakYscUJBQWdCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRyx1QkFBa0IsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLGlCQUFZLEdBQUcs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YW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm5UaW1lcGlja2VyU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvdGltZXBpY2tlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm4tbXVsdGktdGltZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJ2ZuLW11bHRpLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZuLW11bHRpLXRpbWUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm5NdWx0aVRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHN0YXJ0SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgbGFzdEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzTWlsaXRyeVRpbWU6IGJvb2xlYW47XG5cbiAgdGltZVN0b3JlZEFycmF5ID0gW107XG4gIHVpSXRlbUFycmF5ID0gW107XG4gIG5vbk1pbGl0cnlIb3VyQXJyYXkgPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJywgJzEyJ107XG4gIG5vbk1pbGl0cnlNaW51dGVBcnJheSA9IFsnMDBhJywgJzAwcCcsICcxNWEnLCAnMTVwJywgJzMwYScsICczMHAnLCAnNDVhJywgJzQ1cCddO1xuICBtaWxpdHJ5SG91ckFycmF5ID0gWycwMCcsICcwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMiddO1xuICBtaWxpdHJ5TWludXRlQXJyYXkgPSBbJzAwJywgJzE1JywgJzMwJywgJzQ1J107XG4gIHNob3dEcm9wRG93biA9IHRydWU7XG4gIGNoZWNrRW1wdHkgPSBmYWxzZTtcbiAgYWN0aXZlSW5kZXggPSAtMTtcblxuICBzZWFyY2hUZXJtID0gJyc7XG4gIHNwbGl0VGltZVZhbDogQXJyYXk8c3RyaW5nPjtcbiAgc2VsZWN0SW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBLRVlfQ09ERVM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBGblRpbWVwaWNrZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5LRVlfQ09ERVMgPSBzZXJ2aWNlLktFWV9DT0RFUztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYgKHRoaXMuaXNNaWxpdHJ5VGltZSkge1xuICAgICAgdGhpcy50aW1lU3RvcmVkQXJyYXkgPSB0aGlzLnNlcnZpY2UuSG91cjI0Rm9ybWF0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbWVTdG9yZWRBcnJheSA9IHRoaXMuc2VydmljZS5Ib3VyMTJGb3JtYXQ7XG4gICAgfVxuXG4gICAgdGhpcy5zZWFyY2hUZXJtID0gdGhpcy50aW1lU3RvcmVkQXJyYXlbdGhpcy5zdGFydEluZGV4XSArICctJyArIHRoaXMudGltZVN0b3JlZEFycmF5W3RoaXMubGFzdEluZGV4XTtcbiAgICB0aGlzLnNlbGVjdEluZGV4ID0gdGhpcy5zdGFydEluZGV4O1xuXG4gIH1cblxuICBmaWx0ZXJWYWx1ZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuXG4gICAgdGhpcy5zaG93RHJvcERvd24gPSB0cnVlO1xuICAgIGlmICh0eXBlb2YgKHRoaXMuc2VhcmNoVGVybSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmNoZWNrRW1wdHkgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3BsaXRUaW1lVmFsID0gdGhpcy5zZWFyY2hUZXJtLnNwbGl0KCctJyk7XG5cbiAgICAgIGlmICh0aGlzLnNwbGl0VGltZVZhbFsxXSkge1xuICAgICAgICBjb25zdCBpbnB1dFZhbCA9IHRoaXMuc3BsaXRUaW1lVmFsWzFdO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RJbmRleCkge1xuICAgICAgICAgIGNvbnN0IHNwbGl0RnJvbVRpbWUgPSB0aGlzLnNwbGl0VGltZVZhbFswXS5zcGxpdCgnOicpO1xuICAgICAgICAgIGlmICh0aGlzLmlzTWlsaXRyeVRpbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pbGl0cnlIb3VyQXJyYXkuaW5jbHVkZXMoc3BsaXRGcm9tVGltZVswXSkgJiYgdGhpcy5taWxpdHJ5TWludXRlQXJyYXkuaW5jbHVkZXMoc3BsaXRGcm9tVGltZVsxXSkpIHtcbiAgICAgICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IHRoaXMuc2VydmljZS5Ib3VyMjROZXh0Rm9ybWF0LmZpbHRlcihpdGVtcyA9PiBpdGVtcy50b1N0cmluZygpLnN0YXJ0c1dpdGgoaW5wdXRWYWwpXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5zZXJ2aWNlLkhvdXIyNE5leHRGb3JtYXQuaW5kZXhPZihpdGVtcykgPiB0aGlzLnNlbGVjdEluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMgY29kZSB3cml0dGVuIGZvciBtYXRjaGluZyByZWdleCBmb3IgVG8gdGltZVxuICAgICAgICAgICAgaWYgKHRoaXMuc2VydmljZS5yZWdleDEyYS50ZXN0KGlucHV0VmFsKSkge1xuICAgICAgICAgICAgICBjb25zdCB0aW1lU3RyaW5nU3BsaXQgPSBpbnB1dFZhbC5zcGxpdCgnYScpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5ub25NaWxpdHJ5SG91ckFycmF5LmluY2x1ZGVzKHNwbGl0RnJvbVRpbWVbMF0pICYmIHRoaXMubm9uTWlsaXRyeU1pbnV0ZUFycmF5LmluY2x1ZGVzKHNwbGl0RnJvbVRpbWVbMV0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IHRoaXMuc2VydmljZS5Ib3VyMTJOZXh0Rm9ybWF0LmZpbHRlcihpdGVtcyA9PiAoaXRlbXMudG9TdHJpbmcoKS5zdGFydHNXaXRoKHRpbWVTdHJpbmdTcGxpdFswXSlcbiAgICAgICAgICAgICAgICAgICYmIGl0ZW1zLmluY2x1ZGVzKCdhJykpICYmIHRoaXMuc2VydmljZS5Ib3VyMTJOZXh0Rm9ybWF0LmluZGV4T2YoaXRlbXMpID4gdGhpcy5zZWxlY3RJbmRleCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IFtdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZXJ2aWNlLnJlZ2V4MTJwLnRlc3QoaW5wdXRWYWwpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpbWVTdHJpbmdTcGxpdCA9IGlucHV0VmFsLnNwbGl0KCdwJyk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm5vbk1pbGl0cnlIb3VyQXJyYXkuaW5jbHVkZXMoc3BsaXRGcm9tVGltZVswXSkgJiYgdGhpcy5ub25NaWxpdHJ5TWludXRlQXJyYXkuaW5jbHVkZXMoc3BsaXRGcm9tVGltZVsxXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gdGhpcy5zZXJ2aWNlLkhvdXIxMk5leHRGb3JtYXQuZmlsdGVyKGl0ZW1zID0+IChpdGVtcy50b1N0cmluZygpLnN0YXJ0c1dpdGgodGltZVN0cmluZ1NwbGl0WzBdKVxuICAgICAgICAgICAgICAgICAgJiYgaXRlbXMuaW5jbHVkZXMoJ3AnKSkgJiYgdGhpcy5zZXJ2aWNlLkhvdXIxMk5leHRGb3JtYXQuaW5kZXhPZihpdGVtcykgPiB0aGlzLnNlbGVjdEluZGV4KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMubm9uTWlsaXRyeUhvdXJBcnJheS5pbmNsdWRlcyhzcGxpdEZyb21UaW1lWzBdKSAmJiB0aGlzLm5vbk1pbGl0cnlNaW51dGVBcnJheS5pbmNsdWRlcyhzcGxpdEZyb21UaW1lWzFdKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSB0aGlzLnNlcnZpY2UuSG91cjEyTmV4dEZvcm1hdC5maWx0ZXIoaXRlbXMgPT4gaXRlbXMudG9TdHJpbmcoKS5zdGFydHNXaXRoKGlucHV0VmFsKVxuICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zZXJ2aWNlLkhvdXIxMk5leHRGb3JtYXQuaW5kZXhPZihpdGVtcykgPiB0aGlzLnNlbGVjdEluZGV4KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gW107XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UucmVnZXgxMmEudGVzdCh0aGlzLnNlYXJjaFRlcm0pKSB7XG5cbiAgICAgICAgICBjb25zdCB0aW1lU3RyaW5nU3BsaXQgPSB0aGlzLnNlYXJjaFRlcm0uc3BsaXQoJ2EnKTtcbiAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gdGhpcy50aW1lU3RvcmVkQXJyYXkuZmlsdGVyKGl0ZW1zID0+IGl0ZW1zLmluY2x1ZGVzKHRpbWVTdHJpbmdTcGxpdFswXSkgJiYgaXRlbXMuaW5jbHVkZXMoJ2EnKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlcnZpY2UucmVnZXgxMnAudGVzdCh0aGlzLnNlYXJjaFRlcm0pKSB7XG5cbiAgICAgICAgICBjb25zdCB0aW1lU3RyaW5nU3BsaXQgPSB0aGlzLnNlYXJjaFRlcm0uc3BsaXQoJ3AnKTtcbiAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gdGhpcy50aW1lU3RvcmVkQXJyYXkuZmlsdGVyKGl0ZW1zID0+IGl0ZW1zLmluY2x1ZGVzKHRpbWVTdHJpbmdTcGxpdFswXSkgJiYgaXRlbXMuaW5jbHVkZXMoJ3AnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNNaWxpdHJ5VGltZSkge1xuICAgICAgICAgICAgY29uc3QgdGVybSA9IHRoaXMuc2VhcmNoVGVybS50b1N0cmluZygpLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmFkaXggbWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICBjb25zdCBtb2RpZmllZFRlcm0gPSBwYXJzZUludCh0ZXJtWzBdKSA8IDEwICYmICF0ZXJtWzBdLnRvU3RyaW5nKCkuc3RhcnRzV2l0aCgnMCcpID8gJzAnICsgdGVybVswXSArICh0ZXJtLmxlbmd0aCA+IDEgPyAnOicgKyB0ZXJtWzFdIDogJycpIDogdGhpcy5zZWFyY2hUZXJtO1xuICAgICAgICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IHRoaXMudGltZVN0b3JlZEFycmF5LmZpbHRlcihpdGVtcyA9PiBpdGVtcy50b1N0cmluZygpLnN0YXJ0c1dpdGgobW9kaWZpZWRUZXJtKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSB0aGlzLnRpbWVTdG9yZWRBcnJheS5maWx0ZXIoaXRlbXMgPT4gaXRlbXMudG9TdHJpbmcoKS5zdGFydHNXaXRoKHRoaXMuc2VhcmNoVGVybSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gdGhpcy5LRVlfQ09ERVMuQkFDS1NQQUNFKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgICBpZiAodGhpcy51aUl0ZW1BcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmbi10aW1lLXBpY2tlci11bCcpWzBdLnNjcm9sbFRvcCA9IDApO1xuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IHRoaXMuS0VZX0NPREVTLkVOVEVSICYmIHRoaXMudWlJdGVtQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsaVZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpLmFjdGl2ZScpLnRleHRDb250ZW50O1xuICAgICAgICB0aGlzLm9uSXRlbUNsaWNrKGxpVmFsKTtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSBbXTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm4tdGltZS1waWNrZXItdWwnKVswXS5zY3JvbGxUb3AgPSAwO1xuXG4gICAgICAgIHRoaXMuY2hlY2tFbXB0eSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgdGhpcy5jaGVja0VtcHR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSBbXTtcbiAgICB9XG5cbiAgfVxuXG4gIG9uSXRlbUNsaWNrKHBhcmFtOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5zcGxpdFRpbWVWYWxbMV0pIHtcbiAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgY29uc3QgbmV3VG9UaW1lU3RyaW5nID0gdGhpcy5zZWFyY2hUZXJtLnNwbGl0KCctJylbMF07XG4gICAgICB0aGlzLnNlYXJjaFRlcm0gPSBuZXdUb1RpbWVTdHJpbmcgKyAnLScgKyBwYXJhbTtcbiAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSBbXTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgIHRoaXMuc2VhcmNoVGVybSA9IHBhcmFtICsgJy0nO1xuICAgICAgdGhpcy5zZWxlY3RJbmRleCA9IHRoaXMudGltZVN0b3JlZEFycmF5LmluZGV4T2YocGFyYW0pO1xuICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IFtdO1xuICAgIH1cblxuICB9XG5cbiAgY2xvc2VEcm9wRG93bigpIHtcbiAgICB0aGlzLnNob3dEcm9wRG93biA9IGZhbHNlO1xuICB9XG5cbiAgb3BlbkRyb3BEb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNob3dEcm9wRG93biA9IHRydWU7XG4gICAgaWYgKHRoaXMuY2hlY2tFbXB0eSkge1xuICAgICAgdGhpcy5maWx0ZXJWYWx1ZShldmVudCk7XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkNoYW5nZShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuXG4gICAgaWYgKGV2ZW50LmNvZGUgPT09IHRoaXMuS0VZX0NPREVTLkFSUk9XX1VQICYmIHRoaXMuYWN0aXZlSW5kZXggPiAwKSB7XG4gICAgICB0aGlzLmFjdGl2ZUluZGV4LS07XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmbi10aW1lLXBpY2tlci11bCcpWzBdLnNjcm9sbFRvcCAtPSAzNTtcblxuICAgIH1cbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gdGhpcy5LRVlfQ09ERVMuQVJST1dfRE9XTiAmJiB0aGlzLmFjdGl2ZUluZGV4IDwgdGhpcy51aUl0ZW1BcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmFjdGl2ZUluZGV4Kys7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmbi10aW1lLXBpY2tlci11bCcpWzBdLnNjcm9sbFRvcCArPSAzNTtcbiAgICB9XG5cbiAgfVxuXG59XG4iXX0=