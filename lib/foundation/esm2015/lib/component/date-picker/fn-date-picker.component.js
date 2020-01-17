/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FnDateFormatter } from '../../util/date';
export class FnDatePickerComponent {
    constructor() {
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
        (date) => {
            if (this.globalConfig.maxDate !== null) {
                return;
            }
            if (this.globalConfig.isAutoHandler && this.globalConfig.isFutureDisable) {
                return new Date(date.toString()) < this.globalConfig.disabledDate;
            }
            /** @type {?} */
            let returnVal = true;
            this.dateDisabled.emit({
                date: new Date(date.toString()), callback: (/**
                 * @param {?} val
                 * @return {?}
                 */
                (val) => {
                    returnVal = val;
                })
            });
            return returnVal;
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.globalConfig = this.globalConfig === undefined ? new FnDateConfig() : this.initGlbConfig(this.globalConfig);
        this.setDateModel(this.selectedDate || this.currentDate);
        this.customClass = this.customClass === undefined ? this.globalConfig.isMonthView ? 'fn-date-month-picker' : '' : this.customClass;
        this.startView = this.globalConfig.isMonthView ? 'year' : 'month';
    }
    /**
     * @return {?}
     */
    getFormattedDate() {
        return new FnDateFormatter().format(this.getDateObj(), this.format);
    }
    /**
     * @return {?}
     */
    getDateObj() {
        return new Date(this.selectedDate);
    }
    /**
     * @return {?}
     */
    setDate() {
        this.callback.emit(this.getDateObj());
    }
    /**
     * @param {?} isNext
     * @return {?}
     */
    nextPrevHandler(isNext) {
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
        this.nextPrevCallback.emit({ date: this.getDateObj(), isNext });
    }
    /**
     * @return {?}
     */
    nextDisable() {
        if (this.globalConfig.isAutoHandler && this.globalConfig.isFutureDisable) {
            if (this.selectedDate !== undefined) {
                return new Date(this.getNextDate(this.globalConfig.noOfNavDay)) >= this.globalConfig.disabledDate;
            }
        }
        else if (this.globalConfig.isFutureDisable) {
            /** @type {?} */
            let isDisable = false;
            this.nextDisabledCallback.emit({
                date: this.getDateObj(),
                callback: (/**
                 * @param {?} value
                 * @return {?}
                 */
                (value) => {
                    isDisable = value;
                })
            });
            return isDisable;
        }
        return false;
    }
    /**
     * @return {?}
     */
    prevDisable() {
        /** @type {?} */
        let isDisable = false;
        this.prevDisabledCallback.emit({
            date: this.getDateObj(),
            callback: (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                isDisable = value;
            })
        });
        return isDisable;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    setDateModel(date) {
        this.selectedDate = date;
    }
    /**
     * @param {?} noOfNavDay
     * @return {?}
     */
    getNextDate(noOfNavDay) {
        /** @type {?} */
        const date = this.getDateObj();
        return new Date(date.setDate(date.getDate() + noOfNavDay));
    }
    /**
     * @param {?} noOfNavDay
     * @return {?}
     */
    getPrevDate(noOfNavDay) {
        /** @type {?} */
        const date = this.getDateObj();
        return new Date(date.setDate(date.getDate() - noOfNavDay));
    }
    /**
     * @return {?}
     */
    getNextMonth() {
        /** @type {?} */
        const date = this.getDateObj();
        return new Date(date.getFullYear(), date.getMonth() + 1, 1);
    }
    /**
     * @return {?}
     */
    getPrevMonth() {
        /** @type {?} */
        const date = this.getDateObj();
        return new Date(date.getFullYear(), date.getMonth() - 1, 1);
    }
    /**
     * @param {?} event
     * @param {?} datePicker
     * @return {?}
     */
    _monthSelectedHandler(event, datePicker) {
        if (this.globalConfig.isMonthView) {
            this.setDateModel(new Date(event));
            this.setDate();
            datePicker.close();
        }
    }
    /**
     * @param {?} configHash
     * @return {?}
     */
    initGlbConfig(configHash) {
        /** @type {?} */
        const returnGlbHash = Object.assign(configHash, {});
        /** @type {?} */
        const defaultCnfHash = new FnDateConfig();
        Object.keys(defaultCnfHash).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
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
    }
}
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
export class FnDateConfig {
    constructor() {
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvZGF0ZS1waWNrZXIvZm4tZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQVFoRCxNQUFNLE9BQU8scUJBQXFCO0lBTGxDO1FBTVcsZ0JBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRXpCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUdoQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5Qix5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFDLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUMsY0FBUyxHQUFHLE9BQU8sQ0FBQztRQXFFcEIscUJBQWdCOzs7O1FBQUcsQ0FBQyxJQUFVLEVBQUUsRUFBRTtZQUNoQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDdEMsT0FBTzthQUNSO1lBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRTtnQkFDeEUsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQzthQUNuRTs7Z0JBQ0cs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QUssQ0FBQyxDQUFDLDZDQUE2Qzs7UUFDdEUsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGlCQUFZLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixTQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUFBOzs7SUFYQywrQkFBcUM7O0lBQ3JDLCtCQUFxQjs7SUFDckIsa0NBQXNCOztJQUN0QixtQ0FBZ0I7O0lBQ2hCLHFDQUFrQjs7SUFDbEIscUNBQXNCOztJQUN0Qix1Q0FBd0I7O0lBQ3hCLGtDQUFlOztJQUNmLG9DQUFnQzs7SUFDaEMsbUNBQW9COztJQUNwQiw0QkFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZuRGF0ZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vdXRpbC9kYXRlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmbi1kYXRlLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnZm4tZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm4tZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGbkRhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIEBJbnB1dCgpIGdsb2JhbENvbmZpZzogRm5EYXRlQ29uZmlnO1xuICBASW5wdXQoKSBpc0Rpc2FibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgZm9ybWF0ID0gJ2QvTS9ZJztcbiAgQElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuICBAT3V0cHV0KCkgY2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBuZXh0RGlzYWJsZWRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHByZXZEaXNhYmxlZENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbmV4dFByZXZDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRhdGVEaXNhYmxlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgc3RhcnRWaWV3ID0gJ21vbnRoJztcblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuZ2xvYmFsQ29uZmlnID0gdGhpcy5nbG9iYWxDb25maWcgPT09IHVuZGVmaW5lZCA/IG5ldyBGbkRhdGVDb25maWcoKSA6IHRoaXMuaW5pdEdsYkNvbmZpZyh0aGlzLmdsb2JhbENvbmZpZyk7XG4gICAgdGhpcy5zZXREYXRlTW9kZWwodGhpcy5zZWxlY3RlZERhdGUgfHwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgdGhpcy5jdXN0b21DbGFzcyA9IHRoaXMuY3VzdG9tQ2xhc3MgPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2xvYmFsQ29uZmlnLmlzTW9udGhWaWV3ID8gJ2ZuLWRhdGUtbW9udGgtcGlja2VyJyA6ICcnIDogdGhpcy5jdXN0b21DbGFzcztcbiAgICB0aGlzLnN0YXJ0VmlldyA9IHRoaXMuZ2xvYmFsQ29uZmlnLmlzTW9udGhWaWV3ID8gJ3llYXInIDogJ21vbnRoJztcbiAgfVxuXG5cbiAgZ2V0Rm9ybWF0dGVkRGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IEZuRGF0ZUZvcm1hdHRlcigpLmZvcm1hdCh0aGlzLmdldERhdGVPYmooKSwgdGhpcy5mb3JtYXQpO1xuICB9XG5cbiAgZ2V0RGF0ZU9iaigpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5zZWxlY3RlZERhdGUpO1xuICB9XG5cbiAgc2V0RGF0ZSgpIHtcbiAgICB0aGlzLmNhbGxiYWNrLmVtaXQodGhpcy5nZXREYXRlT2JqKCkpO1xuICB9XG5cbiAgbmV4dFByZXZIYW5kbGVyKGlzTmV4dDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmdsb2JhbENvbmZpZy5pc0F1dG9IYW5kbGVyKSB7XG4gICAgICB0aGlzLnNldERhdGVNb2RlbChpc05leHQgPyB0aGlzLmdldE5leHREYXRlKHRoaXMuZ2xvYmFsQ29uZmlnLm5vT2ZOYXZEYXkpIDogdGhpcy5nZXRQcmV2RGF0ZSh0aGlzLmdsb2JhbENvbmZpZy5ub09mTmF2RGF5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmdsb2JhbENvbmZpZy5pc01vbnRoVmlldykge1xuICAgICAgICB0aGlzLnNldERhdGVNb2RlbChpc05leHQgPyB0aGlzLmdldE5leHRNb250aCgpIDogdGhpcy5nZXRQcmV2TW9udGgoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldERhdGVNb2RlbChpc05leHQgPyB0aGlzLmdldE5leHREYXRlKDEpIDogdGhpcy5nZXRQcmV2RGF0ZSgxKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubmV4dFByZXZDYWxsYmFjay5lbWl0KHtkYXRlOiB0aGlzLmdldERhdGVPYmooKSwgaXNOZXh0fSk7XG4gIH1cblxuICBuZXh0RGlzYWJsZSgpIHtcbiAgICBpZiAodGhpcy5nbG9iYWxDb25maWcuaXNBdXRvSGFuZGxlciAmJiB0aGlzLmdsb2JhbENvbmZpZy5pc0Z1dHVyZURpc2FibGUpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldE5leHREYXRlKHRoaXMuZ2xvYmFsQ29uZmlnLm5vT2ZOYXZEYXkpKSA+PSB0aGlzLmdsb2JhbENvbmZpZy5kaXNhYmxlZERhdGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmdsb2JhbENvbmZpZy5pc0Z1dHVyZURpc2FibGUpIHtcbiAgICAgIGxldCBpc0Rpc2FibGUgPSBmYWxzZTtcbiAgICAgIHRoaXMubmV4dERpc2FibGVkQ2FsbGJhY2suZW1pdCh7XG4gICAgICAgIGRhdGU6IHRoaXMuZ2V0RGF0ZU9iaigpLFxuICAgICAgICBjYWxsYmFjazogKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaXNEaXNhYmxlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGlzRGlzYWJsZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJldkRpc2FibGUoKSB7XG4gICAgbGV0IGlzRGlzYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMucHJldkRpc2FibGVkQ2FsbGJhY2suZW1pdCh7XG4gICAgICBkYXRlOiB0aGlzLmdldERhdGVPYmooKSxcbiAgICAgIGNhbGxiYWNrOiAodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaXNEaXNhYmxlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGlzRGlzYWJsZTtcbiAgfVxuXG4gIHNldERhdGVNb2RlbChkYXRlOiBEYXRlKSB7XG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuICB9XG5cbiAgZGF0ZVBpY2tlckZpbHRlciA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgaWYgKHRoaXMuZ2xvYmFsQ29uZmlnLm1heERhdGUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2xvYmFsQ29uZmlnLmlzQXV0b0hhbmRsZXIgJiYgdGhpcy5nbG9iYWxDb25maWcuaXNGdXR1cmVEaXNhYmxlKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS50b1N0cmluZygpKSA8IHRoaXMuZ2xvYmFsQ29uZmlnLmRpc2FibGVkRGF0ZTtcbiAgICB9XG4gICAgbGV0IHJldHVyblZhbCA9IHRydWU7XG4gICAgdGhpcy5kYXRlRGlzYWJsZWQuZW1pdCh7XG4gICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlLnRvU3RyaW5nKCkpLCBjYWxsYmFjazogKHZhbDogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm5WYWwgPSB2YWw7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVyblZhbDtcbiAgfVxuXG4gIGdldE5leHREYXRlKG5vT2ZOYXZEYXk6IG51bWJlcikge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmdldERhdGVPYmooKTtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgbm9PZk5hdkRheSkpO1xuICB9XG5cbiAgZ2V0UHJldkRhdGUobm9PZk5hdkRheTogbnVtYmVyKSB7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuZ2V0RGF0ZU9iaigpO1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBub09mTmF2RGF5KSk7XG4gIH1cblxuICBnZXROZXh0TW9udGgoKSB7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuZ2V0RGF0ZU9iaigpO1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDEpO1xuICB9XG5cbiAgZ2V0UHJldk1vbnRoKCkge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmdldERhdGVPYmooKTtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgLSAxLCAxKTtcbiAgfVxuXG4gIF9tb250aFNlbGVjdGVkSGFuZGxlcihldmVudCwgZGF0ZVBpY2tlcikge1xuICAgIGlmICh0aGlzLmdsb2JhbENvbmZpZy5pc01vbnRoVmlldykge1xuICAgICAgdGhpcy5zZXREYXRlTW9kZWwobmV3IERhdGUoZXZlbnQpKTtcbiAgICAgIHRoaXMuc2V0RGF0ZSgpO1xuICAgICAgZGF0ZVBpY2tlci5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRHbGJDb25maWcoY29uZmlnSGFzaDogRm5EYXRlQ29uZmlnKSB7XG4gICAgY29uc3QgcmV0dXJuR2xiSGFzaCA9IE9iamVjdC5hc3NpZ24oY29uZmlnSGFzaCwge30pO1xuICAgIGNvbnN0IGRlZmF1bHRDbmZIYXNoID0gbmV3IEZuRGF0ZUNvbmZpZygpO1xuICAgIE9iamVjdC5rZXlzKGRlZmF1bHRDbmZIYXNoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICghcmV0dXJuR2xiSGFzaC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHJldHVybkdsYkhhc2hba2V5XSA9IGRlZmF1bHRDbmZIYXNoW2tleV07XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3R5cGUnKSB7XG4gICAgICAgIGlmIChyZXR1cm5HbGJIYXNoW2tleV0gPT09ICdtb250aCcpIHtcbiAgICAgICAgICByZXR1cm5HbGJIYXNoLmlzTW9udGhWaWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVybkdsYkhhc2g7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuRGF0ZUNvbmZpZyB7XG4gIG1pbkRhdGU6IERhdGUgPSBuZXcgRGF0ZSgnMS0xLTE5OTAnKTtcbiAgbWF4RGF0ZTogRGF0ZSA9IG51bGw7XG4gIG5hdmlnYXRpb24gPSAnc2VsZWN0JztcbiAgc3RhcnRpbmdEYXkgPSAyO1xuICBkaXNwbGF5TW9udGhzID0gMTtcbiAgaXNBdXRvSGFuZGxlciA9IGZhbHNlOyAvLyBoYW5kbGUgbmV4dCBwcmV2IGZ1bmN0aW9uYWxpdHlcbiAgaXNGdXR1cmVEaXNhYmxlID0gZmFsc2U7IC8vIHVzZSB0aGlzIGlmIHlvdSBhcmUgdXNpbmcgdGhlIGF1dG9IYW5kbGVyLlxuICBub09mTmF2RGF5ID0gNztcbiAgZGlzYWJsZWREYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgaXNNb250aFZpZXcgPSBmYWxzZTtcbiAgdHlwZSA9IG51bGw7XG59XG5cbiJdfQ==