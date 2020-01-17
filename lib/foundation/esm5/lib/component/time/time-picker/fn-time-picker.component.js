/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FnTimepickerService } from './../services/timepicker.service';
var FnTimePickerComponent = /** @class */ (function () {
    function FnTimePickerComponent(timePickerSvcs) {
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
    FnTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isMilitryTime) {
            this.mainItemArray = this.timePickerSvcs.Hour24Format;
        }
        else {
            this.mainItemArray = this.timePickerSvcs.Hour12Format;
        }
        this.searchTerm = this.mainItemArray[this.index];
    };
    /*
    * this filter function call on keypress on input box for filter data in array
    *   @Param event: Keyboard Event
    * */
    /*
      * this filter function call on keypress on input box for filter data in array
      *   @Param event: Keyboard Event
      * */
    /**
     * @param {?} event
     * @return {?}
     */
    FnTimePickerComponent.prototype.filterValue = /*
      * this filter function call on keypress on input box for filter data in array
      *   @Param event: Keyboard Event
      * */
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.showDropDown = true;
        if (typeof (this.searchTerm) !== 'undefined') {
            // this code is written for matching From time
            if (this.timePickerSvcs.regex12a.test(this.searchTerm)) {
                /** @type {?} */
                var timeStringSplit_1 = this.searchTerm.split('a');
                this.uiItemArray = this.mainItemArray.filter((/**
                 * @param {?} items
                 * @return {?}
                 */
                function (items) { return items.includes(timeStringSplit_1[0]) && items.includes('a'); }));
            }
            else if (this.timePickerSvcs.regex12p.test(this.searchTerm)) {
                /** @type {?} */
                var timeStringSplit_2 = this.searchTerm.split('p');
                this.uiItemArray = this.mainItemArray.filter((/**
                 * @param {?} items
                 * @return {?}
                 */
                function (items) { return items.includes(timeStringSplit_2[0]) && items.includes('p'); }));
            }
            else {
                if (this.isMilitryTime) {
                    /** @type {?} */
                    var term = this.searchTerm.toString().split(':');
                    // tslint:disable-next-line:max-line-length radix
                    /** @type {?} */
                    var modifiedTerm_1 = parseInt(term[0]) < 10 && !term[0].toString().startsWith('0') ? '0' + term[0] + (term.length > 1 ? ':' + term[1] : '') : this.searchTerm;
                    this.uiItemArray = this.mainItemArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    function (items) { return items.toString().startsWith(modifiedTerm_1); }));
                }
                else {
                    this.uiItemArray = this.mainItemArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    function (items) { return items.toString().startsWith(_this.searchTerm); }));
                }
            }
            // this function call on backspce
            if (event.keyCode === this.timePickerSvcs.KEY_CODES.BACKSPACE) {
                this.activeItem = 0;
                if (this.uiItemArray.length > 0) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return document.getElementsByClassName('.fn-time-picker-ul')[0].scrollTop = 0; }));
                }
            }
            // this function call on enter after select value in dropdown list
            if (event.keyCode === this.timePickerSvcs.KEY_CODES.ENTER && this.uiItemArray.length > 0) {
                /** @type {?} */
                var liVal = document.querySelector('li.active').textContent;
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
    };
    // onSelectEvent is call after click on li option in ul after apply filter
    // onSelectEvent is call after click on li option in ul after apply filter
    /**
     * @param {?} indexVal
     * @return {?}
     */
    FnTimePickerComponent.prototype.onItemClick = 
    // onSelectEvent is call after click on li option in ul after apply filter
    /**
     * @param {?} indexVal
     * @return {?}
     */
    function (indexVal) {
        this.activeItem = 0;
        this.searchTerm = indexVal;
        this.index = this.mainItemArray.indexOf(indexVal);
        this.uiItemArray = [];
        console.log(this.index);
    };
    /**
     * @return {?}
     */
    FnTimePickerComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        this.showDropDown = false;
    };
    // Open Dropdown by default value
    // Open Dropdown by default value
    /**
     * @param {?} event
     * @return {?}
     */
    FnTimePickerComponent.prototype.clickEvent = 
    // Open Dropdown by default value
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.showDropDown = true;
        if (this.activeItem < 1) {
            this.filterValue(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FnTimePickerComponent.prototype.keydownEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.code === 'ArrowUp' && this.activeItem > 0) {
            this.activeItem--;
            document.getElementById('.fn-time-picker-ul').scrollTop -= 35;
        }
        if (event.code === 'ArrowDown' && this.activeItem < this.uiItemArray.length - 1) {
            this.activeItem++;
            document.getElementById('.fn-time-picker-ul').scrollTop += 35;
        }
    };
    FnTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-time-picker',
                    template: "<div class=\"fn-time-picker-search\">\n  <input class=\"form-control\" [(ngModel)]=\"searchTerm\" (click)=\"clickEvent($event)\" (keydown)=\"keydownEvent($event)\"\n         maxlength=\"17\"\n         (keyup)=\"filterValue($event)\"/>\n\n  <div (click)=\"closeDropDown()\">\n    <ul *ngIf=\"(uiItemArray && uiItemArray.length > 0) && showDropDown\" class=\"fn-time-picker-ul\">\n      <li *ngFor=\"let item of uiItemArray; let i = index\" tabindex=\"{{i}}\" [ngClass]=\"{'active': activeItem === i  }\"\n          (click)=\"onItemClick(item)\">{{item}}</li>\n    </ul>\n  </div>\n</div>\n",
                    styles: [":root{--time-list-hover-bg:$time-list-hover-bg}.fn-time-picker-search{width:100%;float:left;position:relative}.fn-time-picker-search input{width:100%;float:left;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem}.fn-time-picker-search input:focus{border:1px solid #80bdff}.fn-time-picker-search .fn-time-picker-ul{list-style:none;border:1px solid #ced4da;width:100%;max-height:160px;overflow-x:hidden;overflow-y:scroll;scroll-behavior:smooth;padding:1px;margin:0;box-shadow:5px 5px 10px rgba(0,0,0,.05);position:absolute;top:100%;z-index:1;background-image:linear-gradient(to top,#f2f2f2 0,#eceeef 100%)}.fn-time-picker-search .fn-time-picker-ul li{cursor:pointer;padding:4px 12px;background-color:transparent;font-size:13px;letter-spacing:.03em;font-weight:400;transition:.3s ease-in;border-radius:4px;border:none!important}.fn-time-picker-search .fn-time-picker-ul li:last-child{border-bottom:none}.fn-time-picker-search .fn-time-picker-ul li:hover{background-color:var(--time-list-hover-bg);color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    FnTimePickerComponent.ctorParameters = function () { return [
        { type: FnTimepickerService }
    ]; };
    FnTimePickerComponent.propDecorators = {
        index: [{ type: Input }],
        placeHolder: [{ type: Input }],
        isMilitryTime: [{ type: Input }]
    };
    return FnTimePickerComponent;
}());
export { FnTimePickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvdGltZS90aW1lLXBpY2tlci9mbi10aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUVyRTtJQW1CRSwrQkFBb0IsY0FBbUM7UUFBbkMsbUJBQWMsR0FBZCxjQUFjLENBQXFCO1FBUHZELGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxHQUFHLENBQUM7UUFFakIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDYixlQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFHdkIsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtRQUVFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO1NBQ3ZEO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO1NBQ3ZEO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVuRCxDQUFDO0lBR0Q7OztRQUdJOzs7Ozs7Ozs7SUFDSiwyQ0FBVzs7Ozs7Ozs7SUFBWCxVQUFZLEtBQVU7UUFBdEIsaUJBaURDO1FBL0NDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFF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LFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7O0lBRUQsNENBQVk7Ozs7SUFBWixVQUFhLEtBQW9CO1FBQy9CLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1NBQy9EO1FBRUQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7U0FDL0Q7SUFDSCxDQUFDOztnQkEzSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLHdsQkFBNEM7O2lCQUU3Qzs7OztnQkFOTyxtQkFBbUI7Ozt3QkFVeEIsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7O0lBbUhSLDRCQUFDO0NBQUEsQUE3SEQsSUE2SEM7U0F4SFkscUJBQXFCOzs7SUFHaEMsc0NBQXVCOztJQUN2Qiw0Q0FBNkI7O0lBQzdCLDhDQUFnQzs7SUFFaEMsOENBQW1COztJQUNuQiw0Q0FBaUI7O0lBQ2pCLDJDQUFpQjs7SUFFakIsNkNBQW9COztJQUNwQiwyQ0FBdUI7Ozs7O0lBRVgsK0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZuVGltZXBpY2tlclNlcnZpY2V9IGZyb20gJy4vLi4vc2VydmljZXMvdGltZXBpY2tlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm4tdGltZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJ2ZuLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZuLXRpbWUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm5UaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzTWlsaXRyeVRpbWU6IGJvb2xlYW47XG5cbiAgbWFpbkl0ZW1BcnJheSA9IFtdO1xuICB1aUl0ZW1BcnJheSA9IFtdO1xuICBzZWFyY2hUZXJtID0gJzEnO1xuXG4gIHNob3dEcm9wRG93biA9IHRydWU7XG4gIHB1YmxpYyBhY3RpdmVJdGVtID0gLTE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0aW1lUGlja2VyU3ZjczogRm5UaW1lcGlja2VyU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZiAodGhpcy5pc01pbGl0cnlUaW1lKSB7XG4gICAgICB0aGlzLm1haW5JdGVtQXJyYXkgPSB0aGlzLnRpbWVQaWNrZXJTdmNzLkhvdXIyNEZvcm1hdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYWluSXRlbUFycmF5ID0gdGhpcy50aW1lUGlja2VyU3Zjcy5Ib3VyMTJGb3JtYXQ7XG4gICAgfVxuXG4gICAgdGhpcy5zZWFyY2hUZXJtID0gdGhpcy5tYWluSXRlbUFycmF5W3RoaXMuaW5kZXhdO1xuXG4gIH1cblxuXG4gIC8qXG4gICogdGhpcyBmaWx0ZXIgZnVuY3Rpb24gY2FsbCBvbiBrZXlwcmVzcyBvbiBpbnB1dCBib3ggZm9yIGZpbHRlciBkYXRhIGluIGFycmF5XG4gICogICBAUGFyYW0gZXZlbnQ6IEtleWJvYXJkIEV2ZW50XG4gICogKi9cbiAgZmlsdGVyVmFsdWUoZXZlbnQ6IGFueSkge1xuXG4gICAgdGhpcy5zaG93RHJvcERvd24gPSB0cnVlO1xuICAgIGlmICh0eXBlb2YgKHRoaXMuc2VhcmNoVGVybSkgIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgIC8vIHRoaXMgY29kZSBpcyB3cml0dGVuIGZvciBtYXRjaGluZyBGcm9tIHRpbWVcbiAgICAgIGlmICh0aGlzLnRpbWVQaWNrZXJTdmNzLnJlZ2V4MTJhLnRlc3QodGhpcy5zZWFyY2hUZXJtKSkge1xuXG4gICAgICAgIGNvbnN0IHRpbWVTdHJpbmdTcGxpdCA9IHRoaXMuc2VhcmNoVGVybS5zcGxpdCgnYScpO1xuICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gdGhpcy5tYWluSXRlbUFycmF5LmZpbHRlcihpdGVtcyA9PiBpdGVtcy5pbmNsdWRlcyh0aW1lU3RyaW5nU3BsaXRbMF0pICYmIGl0ZW1zLmluY2x1ZGVzKCdhJykpO1xuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGltZVBpY2tlclN2Y3MucmVnZXgxMnAudGVzdCh0aGlzLnNlYXJjaFRlcm0pKSB7XG4gICAgICAgIGNvbnN0IHRpbWVTdHJpbmdTcGxpdCA9IHRoaXMuc2VhcmNoVGVybS5zcGxpdCgncCcpO1xuICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gdGhpcy5tYWluSXRlbUFycmF5LmZpbHRlcihpdGVtcyA9PiBpdGVtcy5pbmNsdWRlcyh0aW1lU3RyaW5nU3BsaXRbMF0pICYmIGl0ZW1zLmluY2x1ZGVzKCdwJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNaWxpdHJ5VGltZSkge1xuICAgICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLnNlYXJjaFRlcm0udG9TdHJpbmcoKS5zcGxpdCgnOicpO1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGggcmFkaXhcbiAgICAgICAgICBjb25zdCBtb2RpZmllZFRlcm0gPSBwYXJzZUludCh0ZXJtWzBdKSA8IDEwICYmICF0ZXJtWzBdLnRvU3RyaW5nKCkuc3RhcnRzV2l0aCgnMCcpID8gJzAnICsgdGVybVswXSArICh0ZXJtLmxlbmd0aCA+IDEgPyAnOicgKyB0ZXJtWzFdIDogJycpIDogdGhpcy5zZWFyY2hUZXJtO1xuICAgICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSB0aGlzLm1haW5JdGVtQXJyYXkuZmlsdGVyKGl0ZW1zID0+IGl0ZW1zLnRvU3RyaW5nKCkuc3RhcnRzV2l0aChtb2RpZmllZFRlcm0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVpSXRlbUFycmF5ID0gdGhpcy5tYWluSXRlbUFycmF5LmZpbHRlcihpdGVtcyA9PiBpdGVtcy50b1N0cmluZygpLnN0YXJ0c1dpdGgodGhpcy5zZWFyY2hUZXJtKSk7XG4gICAgICAgIH1cblxuXG4gICAgICB9XG5cbiAgICAgIC8vIHRoaXMgZnVuY3Rpb24gY2FsbCBvbiBiYWNrc3BjZVxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IHRoaXMudGltZVBpY2tlclN2Y3MuS0VZX0NPREVTLkJBQ0tTUEFDRSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAwO1xuICAgICAgICBpZiAodGhpcy51aUl0ZW1BcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCcuZm4tdGltZS1waWNrZXItdWwnKVswXS5zY3JvbGxUb3AgPSAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIGZ1bmN0aW9uIGNhbGwgb24gZW50ZXIgYWZ0ZXIgc2VsZWN0IHZhbHVlIGluIGRyb3Bkb3duIGxpc3RcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSB0aGlzLnRpbWVQaWNrZXJTdmNzLktFWV9DT0RFUy5FTlRFUiAmJiB0aGlzLnVpSXRlbUFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbGlWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaS5hY3RpdmUnKS50ZXh0Q29udGVudDtcbiAgICAgICAgdGhpcy5vbkl0ZW1DbGljayhsaVZhbCk7XG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IDA7XG4gICAgICAgIHRoaXMudWlJdGVtQXJyYXkgPSBbXTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnLmZuLXRpbWUtcGlja2VyLXVsJylbMF0uc2Nyb2xsVG9wID0gMDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAwO1xuICAgICAgdGhpcy51aUl0ZW1BcnJheSA9IFtdO1xuICAgIH1cblxuICB9XG5cbiAgLy8gb25TZWxlY3RFdmVudCBpcyBjYWxsIGFmdGVyIGNsaWNrIG9uIGxpIG9wdGlvbiBpbiB1bCBhZnRlciBhcHBseSBmaWx0ZXJcbiAgb25JdGVtQ2xpY2soaW5kZXhWYWw6IHN0cmluZykge1xuXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gMDtcbiAgICB0aGlzLnNlYXJjaFRlcm0gPSBpbmRleFZhbDtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5tYWluSXRlbUFycmF5LmluZGV4T2YoaW5kZXhWYWwpO1xuICAgIHRoaXMudWlJdGVtQXJyYXkgPSBbXTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmluZGV4KTtcblxuICB9XG5cbiAgY2xvc2VEcm9wRG93bigpIHtcbiAgICB0aGlzLnNob3dEcm9wRG93biA9IGZhbHNlO1xuICB9XG5cbiAgLy8gT3BlbiBEcm9wZG93biBieSBkZWZhdWx0IHZhbHVlXG4gIGNsaWNrRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLnNob3dEcm9wRG93biA9IHRydWU7XG4gICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA8IDEpIHtcbiAgICAgIHRoaXMuZmlsdGVyVmFsdWUoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGtleWRvd25FdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dVcCcgJiYgdGhpcy5hY3RpdmVJdGVtID4gMCkge1xuICAgICAgdGhpcy5hY3RpdmVJdGVtLS07XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnLmZuLXRpbWUtcGlja2VyLXVsJykuc2Nyb2xsVG9wIC09IDM1O1xuICAgIH1cblxuICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dEb3duJyAmJiB0aGlzLmFjdGl2ZUl0ZW0gPCB0aGlzLnVpSXRlbUFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbSsrO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJy5mbi10aW1lLXBpY2tlci11bCcpLnNjcm9sbFRvcCArPSAzNTtcbiAgICB9XG4gIH1cblxufVxuIl19