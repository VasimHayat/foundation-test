/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, ElementRef, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
var FnTableSearchComponent = /** @class */ (function () {
    function FnTableSearchComponent(el) {
        var _this = this;
        this.el = el;
        this.debouncer = new Subject();
        this.search = new EventEmitter();
        this.debouncer.pipe(debounceTime(200)).subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.search.emit(val);
        }));
    }
    /**
     * @return {?}
     */
    FnTableSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.config.actionClear.subscribe((/**
         * @return {?}
         */
        function () {
            _this.el.nativeElement.lastChild.value = '';
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FnTableSearchComponent.prototype.debounce = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.debouncer.next(value);
    };
    FnTableSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-table-search',
                    template: "<!-- <input type=\"text\" class=\"form-control input-lg\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"searchOnRows()\" placeholder=\"Search\" /> -->\r\n<input type=\"text\" (input)=\"debounce($event.target.value)\" placeholder=\"Search...\">",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    FnTableSearchComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FnTableSearchComponent.propDecorators = {
        search: [{ type: Output }],
        config: [{ type: Input }]
    };
    return FnTableSearchComponent;
}());
export { FnTableSearchComponent };
if (false) {
    /** @type {?} */
    FnTableSearchComponent.prototype.debouncer;
    /** @type {?} */
    FnTableSearchComponent.prototype.search;
    /** @type {?} */
    FnTableSearchComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    FnTableSearchComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdGFibGUuc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L3RhYmxlL3NlYXJjaC9mbi10YWJsZS5zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sVUFBVSxFQUNWLEtBQUssRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRTdCO0lBWUUsZ0NBQW9CLEVBQWM7UUFBbEMsaUJBS0M7UUFMbUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUozQixjQUFTLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDeEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFJNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRztZQUNsRCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQztJQUVMLENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVM7OztRQUFDO1lBQ2hDLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzdDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCx5Q0FBUTs7OztJQUFSLFVBQVMsS0FBSztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsOFBBQTZDO29CQUM3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQWRDLFVBQVU7Ozt5QkFrQlQsTUFBTTt5QkFDTixLQUFLOztJQWtCUiw2QkFBQztDQUFBLEFBNUJELElBNEJDO1NBdEJZLHNCQUFzQjs7O0lBRWpDLDJDQUFrRDs7SUFDbEQsd0NBQThDOztJQUM5Qyx3Q0FBK0M7Ozs7O0lBRW5DLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPdXRwdXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtkZWJvdW5jZVRpbWV9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm4tdGFibGUtc2VhcmNoJyxcclxuICB0ZW1wbGF0ZVVybDogJ2ZuLXRhYmxlLnNlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5UYWJsZVNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHB1YmxpYyBkZWJvdW5jZXI6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgQE91dHB1dCgpIHNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogeyBhY3Rpb25DbGVhcjogU3ViamVjdDxhbnk+IH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuZGVib3VuY2VyLnBpcGUoZGVib3VuY2VUaW1lKDIwMCkpLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICB0aGlzLnNlYXJjaC5lbWl0KHZhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29uZmlnLmFjdGlvbkNsZWFyLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5sYXN0Q2hpbGQudmFsdWUgPSAnJztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVib3VuY2UodmFsdWUpIHtcclxuICAgIHRoaXMuZGVib3VuY2VyLm5leHQodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=