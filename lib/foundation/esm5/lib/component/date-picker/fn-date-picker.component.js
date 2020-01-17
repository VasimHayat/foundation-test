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
        this.format = 'd/M/Y';
        this.callback = new EventEmitter();
        this.nextDisabledCallback = new EventEmitter();
        this.prevDisabledCallback = new EventEmitter();
        this.nextPrevCallback = new EventEmitter();
        this.dateDisabled = new EventEmitter();
        this.startView = 'month';
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
        this.customClass = this.customClass === undefined ? this.globalConfig.isMonthView ? 'fn-date-month-picker' : '' : this.customClass;
        this.startView = this.globalConfig.isMonthView ? 'year' : 'month';
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
            var isDisable_1 = false;
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
        var isDisable = false;
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
            else if (key === 'type') {
                if (returnGlbHash[key] === 'month') {
                    returnGlbHash.isMonthView = true;
                }
            }
        }));
        return returnGlbHash;
    };
    FnDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-date-picker',
                    template: "<div class=\"single-date-picker\">\n  <div class=\"invisible\">\n    <input matInput [matDatepicker]=\"picker\" (dateChange)=\"setDate()\" [matDatepickerFilter]=\"datePickerFilter\"\n           placeholder=\"Choose a date\" [(ngModel)]=\"selectedDate\">\n    <mat-datepicker #picker [startView]=\"startView\" [panelClass]=\"customClass\"\n                    (monthSelected)=\"_monthSelectedHandler($event,picker)\"></mat-datepicker>\n  </div>\n  <div class=\"btn-group\">\n  <button class=\"btn btn-sm btn-outline-secondary\" mat-raised-button [disabled]=\"prevDisable()\" (click)=\"nextPrevHandler(false)\"><i class=\"fa fa-angle-left fa-fw\"></i></button>\n  <button class=\"btn btn-sm btn-outline-secondary\" mat-raised-button (click)=\"picker.open()\"><img class=\"svg\" src=\"assets/images/common/svg/calender-date-range.svg\"> {{getFormattedDate()}}</button>\n  <button class=\"btn btn-sm btn-outline-secondary\" mat-raised-button [disabled]=\"nextDisable()\" (click)=\"nextPrevHandler(true)\"><i class=\"fa fa-angle-right fa-fw\"></i></button>\n  </div>\n</div>\n",
                    styles: [".single-date-picker{width:225px}.single-date-picker .invisible{height:0}.single-date-picker .btn-group button.btn-outline-secondary{border-color:#dddfe0;padding:5px 10px;letter-spacing:.04em;color:#6c757d;line-height:23px;background-color:transparent;height:34px}.single-date-picker .btn-group button.btn-outline-secondary:hover{color:#000;background-color:transparent}.single-date-picker .btn-group button.btn-outline-secondary i.fa{font-size:16px;line-height:23px}.single-date-picker .btn-group button.btn-outline-secondary img.svg{height:17px;width:17px;margin-top:-4px;margin-right:4px}.single-date-picker .btn-group button.btn-outline-secondary:first-child{border-radius:30px 0 0 30px}.single-date-picker .btn-group button.btn-outline-secondary:last-child{border-radius:0 30px 30px 0}::ng-deep .fn-date-month-picker .mat-calendar-period-button{pointer-events:none}::ng-deep .fn-date-month-picker .mat-calendar-arrow{display:none}mat-datepicker-content.mat-datepicker-content{min-height:330px;height:330px;margin-top:5px}mat-datepicker-content.mat-datepicker-content mat-calendar.mat-calendar mat-calendar-header .mat-calendar-header .mat-calendar-controls{margin:0 calc(33% / 7 - 16px) 2%}mat-datepicker-content.mat-datepicker-content mat-calendar.mat-calendar .mat-calendar-content{min-height:326px;height:326px}mat-datepicker-content.mat-datepicker-content mat-calendar.mat-calendar .mat-calendar-content mat-month-view table.mat-calendar-table{width:100%}mat-datepicker-content.mat-datepicker-content mat-calendar.mat-calendar .mat-calendar-content mat-month-view table.mat-calendar-table .mat-calendar-table-header tr th.mat-calendar-table-header-divider{visibility:inherit}"]
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
        this.minDate = new Date('1-1-1990');
        this.maxDate = null;
        this.navigation = 'select';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvZGF0ZS1waWNrZXIvZm4tZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUdoRDtJQUFBO1FBQUEsaUJBaUpDO1FBM0lVLGdCQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUV6QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxPQUFPLENBQUM7UUFHaEIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVDLGNBQVMsR0FBRyxPQUFPLENBQUM7UUFxRXBCLHFCQUFnQjs7OztRQUFHLFVBQUMsSUFBVTtZQUM1QixJQUFJLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDdEMsT0FBTzthQUNSO1lBQ0QsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRTtnQkFDeEUsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQzthQUNuRTs7Z0JBQ0csU0FBUyxHQUFHLElBQUk7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QUcsQ0FBQyxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsaUNBQWlDOztRQUN4RCxvQkFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDLDZDQUE2Qzs7UUFDdEUsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGlCQUFZLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixTQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7Ozs7SUFYQywrQkFBcUM7O0lBQ3JDLCtCQUFxQjs7SUFDckIsa0NBQXNCOztJQUN0QixtQ0FBZ0I7O0lBQ2hCLHFDQUFrQjs7SUFDbEIscUNBQXNCOztJQUN0Qix1Q0FBd0I7O0lBQ3hCLGtDQUFlOztJQUNmLG9DQUFnQzs7SUFDaEMsbUNBQW9COztJQUNwQiw0QkFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZuRGF0ZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vdXRpbC9kYXRlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmbi1kYXRlLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnZm4tZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm4tZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGbkRhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIEBJbnB1dCgpIGdsb2JhbENvbmZpZzogRm5EYXRlQ29uZmlnO1xuICBASW5wdXQoKSBpc0Rpc2FibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgZm9ybWF0ID0gJ2QvTS9ZJztcbiAgQElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuICBAT3V0cHV0KCkgY2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBuZXh0RGlzYWJsZWRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHByZXZEaXNhYmxlZENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbmV4dFByZXZDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRhdGVEaXNhYmxlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgc3RhcnRWaWV3ID0gJ21vbnRoJztcblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuZ2xvYmFsQ29uZmlnID0gdGhpcy5nbG9iYWxDb25maWcgPT09IHVuZGVmaW5lZCA/IG5ldyBGbkRhdGVDb25maWcoKSA6IHRoaXMuaW5pdEdsYkNvbmZpZyh0aGlzLmdsb2JhbENvbmZpZyk7XG4gICAgdGhpcy5zZXREYXRlTW9kZWwodGhpcy5zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgdGhpcy5jdXN0b21DbGFzcyA9IHRoaXMuY3VzdG9tQ2xhc3MgPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2xvYmFsQ29uZmlnLmlzTW9udGhWaWV3ID8gJ2ZuLWRhdGUtbW9udGgtcGlja2VyJyA6ICcnIDogdGhpcy5jdXN0b21DbGFzcztcbiAgICB0aGlzLnN0YXJ0VmlldyA9IHRoaXMuZ2xvYmFsQ29uZmlnLmlzTW9udGhWaWV3ID8gJ3llYXInIDogJ21vbnRoJztcbiAgfVxuXG5cbiAgZ2V0Rm9ybWF0dGVkRGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IEZuRGF0ZUZvcm1hdHRlcigpLmZvcm1hdCh0aGlzLmdldERhdGVPYmooKSwgdGhpcy5mb3JtYXQpO1xuICB9XG5cbiAgZ2V0RGF0ZU9iaigpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5zZWxlY3RlZERhdGUpO1xuICB9XG5cbiAgc2V0RGF0ZSgpIHtcbiAgICB0aGlzLmNhbGxiYWNrLmVtaXQodGhpcy5nZXREYXRlT2JqKCkpO1xuICB9XG5cbiAgbmV4dFByZXZIYW5kbGVyKGlzTmV4dDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmdsb2JhbENvbmZpZy5pc0F1dG9IYW5kbGVyKSB7XG4gICAgICB0aGlzLnNldERhdGVNb2RlbChpc05leHQgPyB0aGlzLmdldE5leHREYXRlKHRoaXMuZ2xvYmFsQ29uZmlnLm5vT2ZOYXZEYXkpIDogdGhpcy5nZXRQcmV2RGF0ZSh0aGlzLmdsb2JhbENvbmZpZy5ub09mTmF2RGF5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmdsb2JhbENvbmZpZy5pc01vbnRoVmlldykge1xuICAgICAgICB0aGlzLnNldERhdGVNb2RlbChpc05leHQgPyB0aGlzLmdldE5leHRNb250aCgpIDogdGhpcy5nZXRQcmV2TW9udGgoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldERhdGVNb2RlbChpc05leHQgPyB0aGlzLmdldE5leHREYXRlKDEpIDogdGhpcy5nZXRQcmV2RGF0ZSgxKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubmV4dFByZXZDYWxsYmFjay5lbWl0KHtkYXRlOiB0aGlzLmdldERhdGVPYmooKSwgaXNOZXh0fSk7XG4gIH1cblxuICBuZXh0RGlzYWJsZSgpIHtcbiAgICBpZiAodGhpcy5nbG9iYWxDb25maWcuaXNBdXRvSGFuZGxlciAmJiB0aGlzLmdsb2JhbENvbmZpZy5pc0Z1dHVyZURpc2FibGUpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldE5leHREYXRlKHRoaXMuZ2xvYmFsQ29uZmlnLm5vT2ZOYXZEYXkpKSA+PSB0aGlzLmdsb2JhbENvbmZpZy5kaXNhYmxlZERhdGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmdsb2JhbENvbmZpZy5pc0Z1dHVyZURpc2FibGUpIHtcbiAgICAgIGxldCBpc0Rpc2FibGUgPSBmYWxzZTtcbiAgICAgIHRoaXMubmV4dERpc2FibGVkQ2FsbGJhY2suZW1pdCh7XG4gICAgICAgIGRhdGU6IHRoaXMuZ2V0RGF0ZU9iaigpLFxuICAgICAgICBjYWxsYmFjazogKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaXNEaXNhYmxlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGlzRGlzYWJsZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJldkRpc2FibGUoKSB7XG4gICAgbGV0IGlzRGlzYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMucHJldkRpc2FibGVkQ2FsbGJhY2suZW1pdCh7XG4gICAgICBkYXRlOiB0aGlzLmdldERhdGVPYmooKSxcbiAgICAgIGNhbGxiYWNrOiAodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaXNEaXNhYmxlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGlzRGlzYWJsZTtcbiAgfVxuXG4gIHNldERhdGVNb2RlbChkYXRlOiBEYXRlKSB7XG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuICB9XG5cbiAgZGF0ZVBpY2tlckZpbHRlciA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgaWYgKHRoaXMuZ2xvYmFsQ29uZmlnLm1heERhdGUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2xvYmFsQ29uZmlnLmlzQXV0b0hhbmRsZXIgJiYgdGhpcy5nbG9iYWxDb25maWcuaXNGdXR1cmVEaXNhYmxlKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS50b1N0cmluZygpKSA8IHRoaXMuZ2xvYmFsQ29uZmlnLmRpc2FibGVkRGF0ZTtcbiAgICB9XG4gICAgbGV0IHJldHVyblZhbCA9IHRydWU7XG4gICAgdGhpcy5kYXRlRGlzYWJsZWQuZW1pdCh7XG4gICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlLnRvU3RyaW5nKCkpLCBjYWxsYmFjazogKHZhbDogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm5WYWwgPSB2YWw7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVyblZhbDtcbiAgfVxuXG4gIGdldE5leHREYXRlKG5vT2ZOYXZEYXk6IG51bWJlcikge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmdldERhdGVPYmooKTtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgbm9PZk5hdkRheSkpO1xuICB9XG5cbiAgZ2V0UHJldkRhdGUobm9PZk5hdkRheTogbnVtYmVyKSB7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuZ2V0RGF0ZU9iaigpO1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBub09mTmF2RGF5KSk7XG4gIH1cblxuICBnZXROZXh0TW9udGgoKSB7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuZ2V0RGF0ZU9iaigpO1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDEpO1xuICB9XG5cbiAgZ2V0UHJldk1vbnRoKCkge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmdldERhdGVPYmooKTtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgLSAxLCAxKTtcbiAgfVxuXG4gIF9tb250aFNlbGVjdGVkSGFuZGxlcihldmVudCwgZGF0ZVBpY2tlcikge1xuICAgIGlmICh0aGlzLmdsb2JhbENvbmZpZy5pc01vbnRoVmlldykge1xuICAgICAgdGhpcy5zZXREYXRlTW9kZWwobmV3IERhdGUoZXZlbnQpKTtcbiAgICAgIHRoaXMuc2V0RGF0ZSgpO1xuICAgICAgZGF0ZVBpY2tlci5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRHbGJDb25maWcoY29uZmlnSGFzaDogRm5EYXRlQ29uZmlnKSB7XG4gICAgY29uc3QgcmV0dXJuR2xiSGFzaCA9IE9iamVjdC5hc3NpZ24oY29uZmlnSGFzaCwge30pO1xuICAgIGNvbnN0IGRlZmF1bHRDbmZIYXNoID0gbmV3IEZuRGF0ZUNvbmZpZygpO1xuICAgIE9iamVjdC5rZXlzKGRlZmF1bHRDbmZIYXNoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICghcmV0dXJuR2xiSGFzaC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHJldHVybkdsYkhhc2hba2V5XSA9IGRlZmF1bHRDbmZIYXNoW2tleV07XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3R5cGUnKSB7XG4gICAgICAgIGlmIChyZXR1cm5HbGJIYXNoW2tleV0gPT09ICdtb250aCcpIHtcbiAgICAgICAgICByZXR1cm5HbGJIYXNoLmlzTW9udGhWaWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVybkdsYkhhc2g7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuRGF0ZUNvbmZpZyB7XG4gIG1pbkRhdGU6IERhdGUgPSBuZXcgRGF0ZSgnMS0xLTE5OTAnKTtcbiAgbWF4RGF0ZTogRGF0ZSA9IG51bGw7XG4gIG5hdmlnYXRpb24gPSAnc2VsZWN0JztcbiAgc3RhcnRpbmdEYXkgPSAyO1xuICBkaXNwbGF5TW9udGhzID0gMTtcbiAgaXNBdXRvSGFuZGxlciA9IGZhbHNlOyAvLyBoYW5kbGUgbmV4dCBwcmV2IGZ1bmN0aW9uYWxpdHlcbiAgaXNGdXR1cmVEaXNhYmxlID0gZmFsc2U7IC8vIHVzZSB0aGlzIGlmIHlvdSBhcmUgdXNpbmcgdGhlIGF1dG9IYW5kbGVyLlxuICBub09mTmF2RGF5ID0gNztcbiAgZGlzYWJsZWREYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgaXNNb250aFZpZXcgPSBmYWxzZTtcbiAgdHlwZSA9IG51bGw7XG59XG5cbiJdfQ==