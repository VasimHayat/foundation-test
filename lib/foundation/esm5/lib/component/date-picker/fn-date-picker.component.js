/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FnDateFormatter } from '../../util/date';
var FnDatePickerComponent = /** @class */ (function () {
    function FnDatePickerComponent() {
        var _this = this;
        this.currentDate = new Date();
        this.isDisable = false;
        this.format = "d/M/Y";
        this.callback = new EventEmitter();
        this.nextDisabledCallback = new EventEmitter();
        this.prevDisabledCallback = new EventEmitter();
        this.nextPrevCallback = new EventEmitter();
        this.dateDisabled = new EventEmitter();
        this.startView = "month";
        this.datePickerFilter = (/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            if (_this.globalConfig.maxDate !== null) {
                return;
            }
            if (_this.globalConfig.isAutoHandler && _this.globalConfig.isFutureDisable) {
                return new Date(date.toString()) < _this.globalConfig.disabledDate;
            }
            /** @type {?} */
            var returnVal = true;
            _this.dateDisabled.emit({
                date: new Date(date.toString()), callback: (/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    returnVal = val;
                })
            });
            return returnVal;
        });
    }
    /**
     * @return {?}
     */
    FnDatePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.globalConfig = this.globalConfig === undefined ? new FnDateConfig() : this.initGlbConfig(this.globalConfig);
        this.setDateModel(this.selectedDate || this.currentDate);
        this.customClass = this.customClass === undefined ? this.globalConfig.isMonthView ? "fn-date-month-picker" : '' : this.customClass;
        this.startView = this.globalConfig.isMonthView ? "year" : "month";
    };
    /**
     * @return {?}
     */
    FnDatePickerComponent.prototype.getFormattedDate = /**
     * @return {?}
     */
    function () {
        return new FnDateFormatter().format(this.getDateObj(), this.format);
    };
    /**
     * @return {?}
     */
    FnDatePickerComponent.prototype.getDateObj = /**
     * @return {?}
     */
    function () {
        return new Date(this.selectedDate);
    };
    /**
     * @return {?}
     */
    FnDatePickerComponent.prototype.setDate = /**
     * @return {?}
     */
    function () {
        this.callback.emit(this.getDateObj());
    };
    /**
     * @param {?} isNext
     * @return {?}
     */
    FnDatePickerComponent.prototype.nextPrevHandler = /**
     * @param {?} isNext
     * @return {?}
     */
    function (isNext) {
        if (this.globalConfig.isAutoHandler) {
            this.setDateModel(isNext ? this.getNextDate(this.globalConfig.noOfNavDay) : this.getPrevDate(this.globalConfig.noOfNavDay));
        }
        else {
            if (this.globalConfig.isMonthView) {
                this.setDateModel(isNext ? this.getNextMonth() : this.getPrevMonth());
            }
            else {
                this.setDateModel(isNext ? this.getNextDate(1) : this.getPrevDate(1));
            }
        }
        this.nextPrevCallback.emit({ date: this.getDateObj(), isNext: isNext });
    };
    /**
     * @return {?}
     */
    FnDatePickerComponent.prototype.nextDisable = /**
     * @return {?}
     */
    function () {
        if (this.globalConfig.isAutoHandler && this.globalConfig.isFutureDisable) {
            if (this.selectedDate !== undefined) {
                return new Date(this.getNextDate(this.globalConfig.noOfNavDay)) >= this.globalConfig.disabledDate;
            }
        }
        else if (this.globalConfig.isFutureDisable) {
            /** @type {?} */
            var isDisable_1;
            this.nextDisabledCallback.emit({
                date: this.getDateObj(),
                callback: (/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    isDisable_1 = value;
                })
            });
            return isDisable_1;
        }
        return false;
    };
    /**
     * @return {?}
     */
    FnDatePickerComponent.prototype.prevDisable = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isDisable;
        this.prevDisabledCallback.emit({
            date: this.getDateObj(),
            callback: (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                isDisable = value;
            })
        });
        return isDisable;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    FnDatePickerComponent.prototype.setDateModel = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.selectedDate = date;
    };
    /**
     * @param {?} noOfNavDay
     * @return {?}
     */
    FnDatePickerComponent.prototype.getNextDate = /**
     * @param {?} noOfNavDay
     * @return {?}
     */
    function (noOfNavDay) {
        /** @type {?} */
        var date = this.getDateObj();
        return new Date(date.setDate(date.getDate() + noOfNavDay));
    };
    /**
     * @param {?} noOfNavDay
     * @return {?}
     */
    FnDatePickerComponent.prototype.getPrevDate = /**
     * @param {?} noOfNavDay
     * @return {?}
     */
    function (noOfNavDay) {
        /** @type {?} */
        var date = this.getDateObj();
        return new Date(date.setDate(date.getDate() - noOfNavDay));
    };
    /**
     * @return {?}
     */
    FnDatePickerComponent.prototype.getNextMonth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var date = this.getDateObj();
        return new Date(date.getFullYear(), date.getMonth() + 1, 1);
    };
    /**
     * @return {?}
     */
    FnDatePickerComponent.prototype.getPrevMonth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var date = this.getDateObj();
        return new Date(date.getFullYear(), date.getMonth() - 1, 1);
    };
    /**
     * @param {?} event
     * @param {?} datePicker
     * @return {?}
     */
    FnDatePickerComponent.prototype._monthSelectedHandler = /**
     * @param {?} event
     * @param {?} datePicker
     * @return {?}
     */
    function (event, datePicker) {
        if (this.globalConfig.isMonthView) {
            this.setDateModel(new Date(event));
            this.setDate();
            datePicker.close();
        }
    };
    /**
     * @param {?} configHash
     * @return {?}
     */
    FnDatePickerComponent.prototype.initGlbConfig = /**
     * @param {?} configHash
     * @return {?}
     */
    function (configHash) {
        /** @type {?} */
        var returnGlbHash = Object.assign(configHash, {});
        /** @type {?} */
        var defaultCnfHash = new FnDateConfig();
        Object.keys(defaultCnfHash).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (!returnGlbHash.hasOwnProperty(key)) {
                returnGlbHash[key] = defaultCnfHash[key];
            }
            else if (key == "type") {
                if (returnGlbHash[key] == "month") {
                    returnGlbHash.isMonthView = true;
                }
            }
        }));
        return returnGlbHash;
    };
    FnDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-date-picker',
                    template: "<div style=\"padding-top: 40px;\">\n  <div style=\"visibility: hidden;\">\n    <input matInput [matDatepicker]=\"picker\" (dateChange)=\"setDate()\" [matDatepickerFilter]=\"datePickerFilter\"\n      placeholder=\"Choose a date\" [(ngModel)]=\"selectedDate\">\n    <mat-datepicker #picker [startView]=\"startView\" [panelClass]=\"customClass\"\n      (monthSelected)=\"_monthSelectedHandler($event,picker)\"></mat-datepicker>\n  </div>\n  <button mat-raised-button [disabled]=\"prevDisable()\" (click)=\"nextPrevHandler(false)\">Prev</button>\n  <button mat-raised-button (click)=\"picker.open()\">{{getFormattedDate()}}</button>\n  <button mat-raised-button [disabled]=\"nextDisable()\" (click)=\"nextPrevHandler(true)\">Next</button>\n</div>\n",
                    styles: ["::ng-deep .fn-date-month-picker .mat-calendar-period-button{pointer-events:none}::ng-deep .fn-date-month-picker .mat-calendar-arrow{display:none}"]
                }] }
    ];
    FnDatePickerComponent.propDecorators = {
        currentDate: [{ type: Input }],
        globalConfig: [{ type: Input }],
        isDisable: [{ type: Input }],
        format: [{ type: Input }],
        selectedDate: [{ type: Input }],
        customClass: [{ type: Input }],
        callback: [{ type: Output }],
        nextDisabledCallback: [{ type: Output }],
        prevDisabledCallback: [{ type: Output }],
        nextPrevCallback: [{ type: Output }],
        dateDisabled: [{ type: Output }]
    };
    return FnDatePickerComponent;
}());
export { FnDatePickerComponent };
if (false) {
    /** @type {?} */
    FnDatePickerComponent.prototype.currentDate;
    /** @type {?} */
    FnDatePickerComponent.prototype.globalConfig;
    /** @type {?} */
    FnDatePickerComponent.prototype.isDisable;
    /** @type {?} */
    FnDatePickerComponent.prototype.format;
    /** @type {?} */
    FnDatePickerComponent.prototype.selectedDate;
    /** @type {?} */
    FnDatePickerComponent.prototype.customClass;
    /** @type {?} */
    FnDatePickerComponent.prototype.callback;
    /** @type {?} */
    FnDatePickerComponent.prototype.nextDisabledCallback;
    /** @type {?} */
    FnDatePickerComponent.prototype.prevDisabledCallback;
    /** @type {?} */
    FnDatePickerComponent.prototype.nextPrevCallback;
    /** @type {?} */
    FnDatePickerComponent.prototype.dateDisabled;
    /** @type {?} */
    FnDatePickerComponent.prototype.startView;
    /** @type {?} */
    FnDatePickerComponent.prototype.datePickerFilter;
}
var FnDateConfig = /** @class */ (function () {
    function FnDateConfig() {
        this.minDate = new Date("1-1-1990");
        this.maxDate = null;
        this.navigation = "select";
        this.startingDay = 2;
        this.displayMonths = 1;
        this.isAutoHandler = false; // handle next prev functionality
        // handle next prev functionality
        this.isFutureDisable = false; // use this if you are using the autoHandler.
        // use this if you are using the autoHandler.
        this.noOfNavDay = 7;
        this.disabledDate = new Date();
        this.isMonthView = false;
        this.type = null;
    }
    return FnDateConfig;
}());
export { FnDateConfig };
if (false) {
    /** @type {?} */
    FnDateConfig.prototype.minDate;
    /** @type {?} */
    FnDateConfig.prototype.maxDate;
    /** @type {?} */
    FnDateConfig.prototype.navigation;
    /** @type {?} */
    FnDateConfig.prototype.startingDay;
    /** @type {?} */
    FnDateConfig.prototype.displayMonths;
    /** @type {?} */
    FnDateConfig.prototype.isAutoHandler;
    /** @type {?} */
    FnDateConfig.prototype.isFutureDisable;
    /** @type {?} */
    FnDateConfig.prototype.noOfNavDay;
    /** @type {?} */
    FnDateConfig.prototype.disabledDate;
    /** @type {?} */
    FnDateConfig.prototype.isMonthView;
    /** @type {?} */
    FnDateConfig.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvZGF0ZS1waWNrZXIvZm4tZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUlsRDtJQUFBO1FBQUEsaUJBd0lDO1FBbElVLGdCQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUV6QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFdBQU0sR0FBRyxPQUFPLENBQUM7UUFHaEIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVDLGNBQVMsR0FBRyxPQUFPLENBQUM7UUFpRXBCLHFCQUFnQjs7OztRQUFHLFVBQUMsSUFBVTtZQUM1QixJQUFJLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDdEMsT0FBTzthQUNSO1lBQ0QsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRTtnQkFDeEUsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQzthQUNuRTs7Z0JBQ0csU0FBUyxHQUFHLElBQUk7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UUFDeEIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxpQ0FBaUM7O1FBQ3hELG9CQUFlLEdBQUcsS0FBSyxDQUFDLENBQUMsNkNBQTZDOztRQUN0RSxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsaUJBQVksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFNBQUksR0FBRyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQzs7OztJQVhDLCtCQUFxQzs7SUFDckMsK0JBQXFCOztJQUNyQixrQ0FBc0I7O0lBQ3RCLG1DQUF3Qjs7SUFDeEIscUNBQWtCOztJQUNsQixxQ0FBc0I7O0lBQ3RCLHVDQUF3Qjs7SUFDeEIsa0NBQWU7O0lBQ2Ysb0NBQWdDOztJQUNoQyxtQ0FBb0I7O0lBQ3BCLDRCQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm5EYXRlRm9ybWF0dGVyIH0gZnJvbSAnLi4vLi4vdXRpbC9kYXRlJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZuLWRhdGUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICdmbi1kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmbi1kYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZuRGF0ZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgQElucHV0KCkgZ2xvYmFsQ29uZmlnOiBGbkRhdGVDb25maWc7XG4gIEBJbnB1dCgpIGlzRGlzYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBmb3JtYXQgPSBcImQvTS9ZXCI7XG4gIEBJbnB1dCgpIHNlbGVjdGVkRGF0ZTogRGF0ZTtcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHN0cmluZztcbiAgQE91dHB1dCgpIGNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbmV4dERpc2FibGVkQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwcmV2RGlzYWJsZWRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG5leHRQcmV2Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkYXRlRGlzYWJsZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHN0YXJ0VmlldyA9IFwibW9udGhcIjtcblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuZ2xvYmFsQ29uZmlnID0gdGhpcy5nbG9iYWxDb25maWcgPT09IHVuZGVmaW5lZCA/IG5ldyBGbkRhdGVDb25maWcoKSA6IHRoaXMuaW5pdEdsYkNvbmZpZyh0aGlzLmdsb2JhbENvbmZpZyk7XG4gICAgdGhpcy5zZXREYXRlTW9kZWwodGhpcy5zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgdGhpcy5jdXN0b21DbGFzcyA9IHRoaXMuY3VzdG9tQ2xhc3MgPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2xvYmFsQ29uZmlnLmlzTW9udGhWaWV3ID8gXCJmbi1kYXRlLW1vbnRoLXBpY2tlclwiIDogJycgOiB0aGlzLmN1c3RvbUNsYXNzO1xuICAgIHRoaXMuc3RhcnRWaWV3ID0gdGhpcy5nbG9iYWxDb25maWcuaXNNb250aFZpZXcgPyBcInllYXJcIiA6IFwibW9udGhcIjtcbiAgfVxuXG5cbiAgZ2V0Rm9ybWF0dGVkRGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IEZuRGF0ZUZvcm1hdHRlcigpLmZvcm1hdCh0aGlzLmdldERhdGVPYmooKSwgdGhpcy5mb3JtYXQpO1xuICB9XG4gIGdldERhdGVPYmooKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuc2VsZWN0ZWREYXRlKTtcbiAgfVxuICBzZXREYXRlKCkge1xuICAgIHRoaXMuY2FsbGJhY2suZW1pdCh0aGlzLmdldERhdGVPYmooKSk7XG4gIH1cblxuICBuZXh0UHJldkhhbmRsZXIoaXNOZXh0OiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuZ2xvYmFsQ29uZmlnLmlzQXV0b0hhbmRsZXIpIHtcbiAgICAgIHRoaXMuc2V0RGF0ZU1vZGVsKGlzTmV4dCA/IHRoaXMuZ2V0TmV4dERhdGUodGhpcy5nbG9iYWxDb25maWcubm9PZk5hdkRheSkgOiB0aGlzLmdldFByZXZEYXRlKHRoaXMuZ2xvYmFsQ29uZmlnLm5vT2ZOYXZEYXkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZ2xvYmFsQ29uZmlnLmlzTW9udGhWaWV3KSB7XG4gICAgICAgIHRoaXMuc2V0RGF0ZU1vZGVsKGlzTmV4dCA/IHRoaXMuZ2V0TmV4dE1vbnRoKCkgOiB0aGlzLmdldFByZXZNb250aCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0RGF0ZU1vZGVsKGlzTmV4dCA/IHRoaXMuZ2V0TmV4dERhdGUoMSkgOiB0aGlzLmdldFByZXZEYXRlKDEpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5uZXh0UHJldkNhbGxiYWNrLmVtaXQoeyBkYXRlOiB0aGlzLmdldERhdGVPYmooKSwgaXNOZXh0OiBpc05leHQgfSk7XG4gIH1cblxuICBuZXh0RGlzYWJsZSgpIHtcbiAgICBpZiAodGhpcy5nbG9iYWxDb25maWcuaXNBdXRvSGFuZGxlciAmJiB0aGlzLmdsb2JhbENvbmZpZy5pc0Z1dHVyZURpc2FibGUpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldE5leHREYXRlKHRoaXMuZ2xvYmFsQ29uZmlnLm5vT2ZOYXZEYXkpKSA+PSB0aGlzLmdsb2JhbENvbmZpZy5kaXNhYmxlZERhdGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmdsb2JhbENvbmZpZy5pc0Z1dHVyZURpc2FibGUpIHtcbiAgICAgIGxldCBpc0Rpc2FibGU6IGJvb2xlYW47XG4gICAgICB0aGlzLm5leHREaXNhYmxlZENhbGxiYWNrLmVtaXQoe1xuICAgICAgICBkYXRlOiB0aGlzLmdldERhdGVPYmooKSxcbiAgICAgICAgY2FsbGJhY2s6ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlzRGlzYWJsZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpc0Rpc2FibGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcmV2RGlzYWJsZSgpIHtcbiAgICBsZXQgaXNEaXNhYmxlOiBib29sZWFuO1xuICAgIHRoaXMucHJldkRpc2FibGVkQ2FsbGJhY2suZW1pdCh7XG4gICAgICBkYXRlOiB0aGlzLmdldERhdGVPYmooKSxcbiAgICAgIGNhbGxiYWNrOiAodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaXNEaXNhYmxlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaXNEaXNhYmxlO1xuICB9XG4gIHNldERhdGVNb2RlbChkYXRlOiBEYXRlKSB7XG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuICB9XG5cbiAgZGF0ZVBpY2tlckZpbHRlciA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgaWYgKHRoaXMuZ2xvYmFsQ29uZmlnLm1heERhdGUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2xvYmFsQ29uZmlnLmlzQXV0b0hhbmRsZXIgJiYgdGhpcy5nbG9iYWxDb25maWcuaXNGdXR1cmVEaXNhYmxlKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS50b1N0cmluZygpKSA8IHRoaXMuZ2xvYmFsQ29uZmlnLmRpc2FibGVkRGF0ZTtcbiAgICB9XG4gICAgbGV0IHJldHVyblZhbCA9IHRydWU7XG4gICAgdGhpcy5kYXRlRGlzYWJsZWQuZW1pdCh7XG4gICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlLnRvU3RyaW5nKCkpLCBjYWxsYmFjazogKHZhbDogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm5WYWwgPSB2YWw7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVyblZhbDtcbiAgfVxuXG4gIGdldE5leHREYXRlKG5vT2ZOYXZEYXk6IG51bWJlcikge1xuICAgIGxldCBkYXRlID0gdGhpcy5nZXREYXRlT2JqKCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIG5vT2ZOYXZEYXkpKTtcbiAgfVxuICBnZXRQcmV2RGF0ZShub09mTmF2RGF5OiBudW1iZXIpIHtcbiAgICBsZXQgZGF0ZSA9IHRoaXMuZ2V0RGF0ZU9iaigpO1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBub09mTmF2RGF5KSk7XG4gIH1cbiAgZ2V0TmV4dE1vbnRoKCkge1xuICAgIGxldCBkYXRlID0gdGhpcy5nZXREYXRlT2JqKCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgMSk7XG4gIH1cbiAgZ2V0UHJldk1vbnRoKCkge1xuICAgIGxldCBkYXRlID0gdGhpcy5nZXREYXRlT2JqKCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpIC0gMSwgMSk7XG4gIH1cbiAgX21vbnRoU2VsZWN0ZWRIYW5kbGVyKGV2ZW50LCBkYXRlUGlja2VyKSB7XG4gICAgaWYgKHRoaXMuZ2xvYmFsQ29uZmlnLmlzTW9udGhWaWV3KSB7XG4gICAgICB0aGlzLnNldERhdGVNb2RlbChuZXcgRGF0ZShldmVudCkpO1xuICAgICAgdGhpcy5zZXREYXRlKCk7XG4gICAgICBkYXRlUGlja2VyLmNsb3NlKCk7XG4gICAgfVxuICB9XG4gIGluaXRHbGJDb25maWcoY29uZmlnSGFzaDogRm5EYXRlQ29uZmlnKSB7XG4gICAgbGV0IHJldHVybkdsYkhhc2ggPSBPYmplY3QuYXNzaWduKGNvbmZpZ0hhc2gsIHt9KTtcbiAgICBsZXQgZGVmYXVsdENuZkhhc2ggPSBuZXcgRm5EYXRlQ29uZmlnKCk7XG4gICAgT2JqZWN0LmtleXMoZGVmYXVsdENuZkhhc2gpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFyZXR1cm5HbGJIYXNoLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcmV0dXJuR2xiSGFzaFtrZXldID0gZGVmYXVsdENuZkhhc2hba2V5XTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09IFwidHlwZVwiKSB7XG4gICAgICAgIGlmIChyZXR1cm5HbGJIYXNoW2tleV0gPT0gXCJtb250aFwiKSB7XG4gICAgICAgICAgcmV0dXJuR2xiSGFzaC5pc01vbnRoVmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xuICAgIHJldHVybiByZXR1cm5HbGJIYXNoO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRm5EYXRlQ29uZmlnIHtcbiAgbWluRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKFwiMS0xLTE5OTBcIik7XG4gIG1heERhdGU6IERhdGUgPSBudWxsO1xuICBuYXZpZ2F0aW9uID0gXCJzZWxlY3RcIjtcbiAgc3RhcnRpbmdEYXk6IG51bWJlciA9IDI7XG4gIGRpc3BsYXlNb250aHMgPSAxO1xuICBpc0F1dG9IYW5kbGVyID0gZmFsc2U7IC8vIGhhbmRsZSBuZXh0IHByZXYgZnVuY3Rpb25hbGl0eVxuICBpc0Z1dHVyZURpc2FibGUgPSBmYWxzZTsgLy8gdXNlIHRoaXMgaWYgeW91IGFyZSB1c2luZyB0aGUgYXV0b0hhbmRsZXIuXG4gIG5vT2ZOYXZEYXkgPSA3O1xuICBkaXNhYmxlZERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBpc01vbnRoVmlldyA9IGZhbHNlO1xuICB0eXBlID0gbnVsbDtcbn1cblxuIl19