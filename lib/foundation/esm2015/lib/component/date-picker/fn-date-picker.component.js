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
        this.customClass = this.customClass === undefined ? this.globalConfig.isMonthView ? "fn-date-month-picker" : '' : this.customClass;
        this.startView = this.globalConfig.isMonthView ? "year" : "month";
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
        this.nextPrevCallback.emit({ date: this.getDateObj(), isNext: isNext });
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
            let isDisable;
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
        let isDisable;
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
        let date = this.getDateObj();
        return new Date(date.setDate(date.getDate() + noOfNavDay));
    }
    /**
     * @param {?} noOfNavDay
     * @return {?}
     */
    getPrevDate(noOfNavDay) {
        /** @type {?} */
        let date = this.getDateObj();
        return new Date(date.setDate(date.getDate() - noOfNavDay));
    }
    /**
     * @return {?}
     */
    getNextMonth() {
        /** @type {?} */
        let date = this.getDateObj();
        return new Date(date.getFullYear(), date.getMonth() + 1, 1);
    }
    /**
     * @return {?}
     */
    getPrevMonth() {
        /** @type {?} */
        let date = this.getDateObj();
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
        let returnGlbHash = Object.assign(configHash, {});
        /** @type {?} */
        let defaultCnfHash = new FnDateConfig();
        Object.keys(defaultCnfHash).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvZGF0ZS1waWNrZXIvZm4tZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVNsRCxNQUFNLE9BQU8scUJBQXFCO0lBTGxDO1FBTVcsZ0JBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRXpCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUdoQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5Qix5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFDLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUMsY0FBUyxHQUFHLE9BQU8sQ0FBQztRQWlFcEIscUJBQWdCOzs7O1FBQUcsQ0FBQyxJQUFVLEVBQUUsRUFBRTtZQUNoQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDdEMsT0FBTzthQUNSO1lBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRTtnQkFDeEUsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQzthQUNuRTs7Z0JBQ0cs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Q0FBQyw2Q0FBNkM7O1FBQ3RFLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixpQkFBWSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDaEMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsU0FBSSxHQUFHLElBQUksQ0FBQztJQUNkLENBQUM7Q0FBQTs7O0lBWEMsK0JBQXFDOztJQUNyQywrQkFBcUI7O0lBQ3JCLGtDQUFzQjs7SUFDdEIsbUNBQXdCOztJQUN4QixxQ0FBa0I7O0lBQ2xCLHFDQUFzQjs7SUFDdEIsdUNBQXdCOztJQUN4QixrQ0FBZTs7SUFDZixvQ0FBZ0M7O0lBQ2hDLG1DQUFvQjs7SUFDcEIsNEJBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGbkRhdGVGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi91dGlsL2RhdGUnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm4tZGF0ZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJ2ZuLWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZuLWRhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm5EYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICBASW5wdXQoKSBnbG9iYWxDb25maWc6IEZuRGF0ZUNvbmZpZztcbiAgQElucHV0KCkgaXNEaXNhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZvcm1hdCA9IFwiZC9NL1lcIjtcbiAgQElucHV0KCkgc2VsZWN0ZWREYXRlOiBEYXRlO1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuICBAT3V0cHV0KCkgY2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBuZXh0RGlzYWJsZWRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHByZXZEaXNhYmxlZENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbmV4dFByZXZDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRhdGVEaXNhYmxlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgc3RhcnRWaWV3ID0gXCJtb250aFwiO1xuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5nbG9iYWxDb25maWcgPSB0aGlzLmdsb2JhbENvbmZpZyA9PT0gdW5kZWZpbmVkID8gbmV3IEZuRGF0ZUNvbmZpZygpIDogdGhpcy5pbml0R2xiQ29uZmlnKHRoaXMuZ2xvYmFsQ29uZmlnKTtcbiAgICB0aGlzLnNldERhdGVNb2RlbCh0aGlzLnNlbGVjdGVkRGF0ZSB8fCB0aGlzLmN1cnJlbnREYXRlKTtcbiAgICB0aGlzLmN1c3RvbUNsYXNzID0gdGhpcy5jdXN0b21DbGFzcyA9PT0gdW5kZWZpbmVkID8gdGhpcy5nbG9iYWxDb25maWcuaXNNb250aFZpZXcgPyBcImZuLWRhdGUtbW9udGgtcGlja2VyXCIgOiAnJyA6IHRoaXMuY3VzdG9tQ2xhc3M7XG4gICAgdGhpcy5zdGFydFZpZXcgPSB0aGlzLmdsb2JhbENvbmZpZy5pc01vbnRoVmlldyA/IFwieWVhclwiIDogXCJtb250aFwiO1xuICB9XG5cblxuICBnZXRGb3JtYXR0ZWREYXRlKCkge1xuICAgIHJldHVybiBuZXcgRm5EYXRlRm9ybWF0dGVyKCkuZm9ybWF0KHRoaXMuZ2V0RGF0ZU9iaigpLCB0aGlzLmZvcm1hdCk7XG4gIH1cbiAgZ2V0RGF0ZU9iaigpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5zZWxlY3RlZERhdGUpO1xuICB9XG4gIHNldERhdGUoKSB7XG4gICAgdGhpcy5jYWxsYmFjay5lbWl0KHRoaXMuZ2V0RGF0ZU9iaigpKTtcbiAgfVxuXG4gIG5leHRQcmV2SGFuZGxlcihpc05leHQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5nbG9iYWxDb25maWcuaXNBdXRvSGFuZGxlcikge1xuICAgICAgdGhpcy5zZXREYXRlTW9kZWwoaXNOZXh0ID8gdGhpcy5nZXROZXh0RGF0ZSh0aGlzLmdsb2JhbENvbmZpZy5ub09mTmF2RGF5KSA6IHRoaXMuZ2V0UHJldkRhdGUodGhpcy5nbG9iYWxDb25maWcubm9PZk5hdkRheSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5nbG9iYWxDb25maWcuaXNNb250aFZpZXcpIHtcbiAgICAgICAgdGhpcy5zZXREYXRlTW9kZWwoaXNOZXh0ID8gdGhpcy5nZXROZXh0TW9udGgoKSA6IHRoaXMuZ2V0UHJldk1vbnRoKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXREYXRlTW9kZWwoaXNOZXh0ID8gdGhpcy5nZXROZXh0RGF0ZSgxKSA6IHRoaXMuZ2V0UHJldkRhdGUoMSkpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm5leHRQcmV2Q2FsbGJhY2suZW1pdCh7IGRhdGU6IHRoaXMuZ2V0RGF0ZU9iaigpLCBpc05leHQ6IGlzTmV4dCB9KTtcbiAgfVxuXG4gIG5leHREaXNhYmxlKCkge1xuICAgIGlmICh0aGlzLmdsb2JhbENvbmZpZy5pc0F1dG9IYW5kbGVyICYmIHRoaXMuZ2xvYmFsQ29uZmlnLmlzRnV0dXJlRGlzYWJsZSkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0TmV4dERhdGUodGhpcy5nbG9iYWxDb25maWcubm9PZk5hdkRheSkpID49IHRoaXMuZ2xvYmFsQ29uZmlnLmRpc2FibGVkRGF0ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2xvYmFsQ29uZmlnLmlzRnV0dXJlRGlzYWJsZSkge1xuICAgICAgbGV0IGlzRGlzYWJsZTogYm9vbGVhbjtcbiAgICAgIHRoaXMubmV4dERpc2FibGVkQ2FsbGJhY2suZW1pdCh7XG4gICAgICAgIGRhdGU6IHRoaXMuZ2V0RGF0ZU9iaigpLFxuICAgICAgICBjYWxsYmFjazogKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaXNEaXNhYmxlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGlzRGlzYWJsZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByZXZEaXNhYmxlKCkge1xuICAgIGxldCBpc0Rpc2FibGU6IGJvb2xlYW47XG4gICAgdGhpcy5wcmV2RGlzYWJsZWRDYWxsYmFjay5lbWl0KHtcbiAgICAgIGRhdGU6IHRoaXMuZ2V0RGF0ZU9iaigpLFxuICAgICAgY2FsbGJhY2s6ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgICBpc0Rpc2FibGUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBpc0Rpc2FibGU7XG4gIH1cbiAgc2V0RGF0ZU1vZGVsKGRhdGU6IERhdGUpIHtcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGRhdGU7XG4gIH1cblxuICBkYXRlUGlja2VyRmlsdGVyID0gKGRhdGU6IERhdGUpID0+IHtcbiAgICBpZiAodGhpcy5nbG9iYWxDb25maWcubWF4RGF0ZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5nbG9iYWxDb25maWcuaXNBdXRvSGFuZGxlciAmJiB0aGlzLmdsb2JhbENvbmZpZy5pc0Z1dHVyZURpc2FibGUpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnRvU3RyaW5nKCkpIDwgdGhpcy5nbG9iYWxDb25maWcuZGlzYWJsZWREYXRlO1xuICAgIH1cbiAgICBsZXQgcmV0dXJuVmFsID0gdHJ1ZTtcbiAgICB0aGlzLmRhdGVEaXNhYmxlZC5lbWl0KHtcbiAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGUudG9TdHJpbmcoKSksIGNhbGxiYWNrOiAodmFsOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVyblZhbCA9IHZhbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmV0dXJuVmFsO1xuICB9XG5cbiAgZ2V0TmV4dERhdGUobm9PZk5hdkRheTogbnVtYmVyKSB7XG4gICAgbGV0IGRhdGUgPSB0aGlzLmdldERhdGVPYmooKTtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgbm9PZk5hdkRheSkpO1xuICB9XG4gIGdldFByZXZEYXRlKG5vT2ZOYXZEYXk6IG51bWJlcikge1xuICAgIGxldCBkYXRlID0gdGhpcy5nZXREYXRlT2JqKCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIG5vT2ZOYXZEYXkpKTtcbiAgfVxuICBnZXROZXh0TW9udGgoKSB7XG4gICAgbGV0IGRhdGUgPSB0aGlzLmdldERhdGVPYmooKTtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAxKTtcbiAgfVxuICBnZXRQcmV2TW9udGgoKSB7XG4gICAgbGV0IGRhdGUgPSB0aGlzLmdldERhdGVPYmooKTtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgLSAxLCAxKTtcbiAgfVxuICBfbW9udGhTZWxlY3RlZEhhbmRsZXIoZXZlbnQsIGRhdGVQaWNrZXIpIHtcbiAgICBpZiAodGhpcy5nbG9iYWxDb25maWcuaXNNb250aFZpZXcpIHtcbiAgICAgIHRoaXMuc2V0RGF0ZU1vZGVsKG5ldyBEYXRlKGV2ZW50KSk7XG4gICAgICB0aGlzLnNldERhdGUoKTtcbiAgICAgIGRhdGVQaWNrZXIuY2xvc2UoKTtcbiAgICB9XG4gIH1cbiAgaW5pdEdsYkNvbmZpZyhjb25maWdIYXNoOiBGbkRhdGVDb25maWcpIHtcbiAgICBsZXQgcmV0dXJuR2xiSGFzaCA9IE9iamVjdC5hc3NpZ24oY29uZmlnSGFzaCwge30pO1xuICAgIGxldCBkZWZhdWx0Q25mSGFzaCA9IG5ldyBGbkRhdGVDb25maWcoKTtcbiAgICBPYmplY3Qua2V5cyhkZWZhdWx0Q25mSGFzaCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIXJldHVybkdsYkhhc2guaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICByZXR1cm5HbGJIYXNoW2tleV0gPSBkZWZhdWx0Q25mSGFzaFtrZXldO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT0gXCJ0eXBlXCIpIHtcbiAgICAgICAgaWYgKHJldHVybkdsYkhhc2hba2V5XSA9PSBcIm1vbnRoXCIpIHtcbiAgICAgICAgICByZXR1cm5HbGJIYXNoLmlzTW9udGhWaWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVybkdsYkhhc2g7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBGbkRhdGVDb25maWcge1xuICBtaW5EYXRlOiBEYXRlID0gbmV3IERhdGUoXCIxLTEtMTk5MFwiKTtcbiAgbWF4RGF0ZTogRGF0ZSA9IG51bGw7XG4gIG5hdmlnYXRpb24gPSBcInNlbGVjdFwiO1xuICBzdGFydGluZ0RheTogbnVtYmVyID0gMjtcbiAgZGlzcGxheU1vbnRocyA9IDE7XG4gIGlzQXV0b0hhbmRsZXIgPSBmYWxzZTsgLy8gaGFuZGxlIG5leHQgcHJldiBmdW5jdGlvbmFsaXR5XG4gIGlzRnV0dXJlRGlzYWJsZSA9IGZhbHNlOyAvLyB1c2UgdGhpcyBpZiB5b3UgYXJlIHVzaW5nIHRoZSBhdXRvSGFuZGxlci5cbiAgbm9PZk5hdkRheSA9IDc7XG4gIGRpc2FibGVkRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGlzTW9udGhWaWV3ID0gZmFsc2U7XG4gIHR5cGUgPSBudWxsO1xufVxuXG4iXX0=