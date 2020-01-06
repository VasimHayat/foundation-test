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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdGFibGUuc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L3RhYmxlL3NlYXJjaC9mbi10YWJsZS5zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2SSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQVlFLGdDQUFvQixFQUFjO1FBQWxDLGlCQUtDO1FBTG1CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFKM0IsY0FBUyxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3hDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBSTVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDbEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7UUFBQztZQUNoQyxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUM3QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQseUNBQVE7Ozs7SUFBUixVQUFTLEtBQUs7UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDhQQUE2QztvQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7OztnQkFUeUMsVUFBVTs7O3lCQWFqRCxNQUFNO3lCQUNOLEtBQUs7O0lBa0JSLDZCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F0Qlksc0JBQXNCOzs7SUFFakMsMkNBQWtEOztJQUNsRCx3Q0FBOEM7O0lBQzlDLHdDQUErQzs7Ozs7SUFFbkMsb0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmbi10YWJsZS1zZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZm4tdGFibGUuc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGblRhYmxlU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHVibGljIGRlYm91bmNlcjogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcclxuICBAT3V0cHV0KCkgc2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQElucHV0KCkgY29uZmlnOiB7IGFjdGlvbkNsZWFyOiBTdWJqZWN0PGFueT4gfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5kZWJvdW5jZXIucGlwZShkZWJvdW5jZVRpbWUoMjAwKSkuc3Vic2NyaWJlKHZhbCA9PiB7XHJcbiAgICAgIHRoaXMuc2VhcmNoLmVtaXQodmFsKTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWcuYWN0aW9uQ2xlYXIuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50Lmxhc3RDaGlsZC52YWx1ZSA9ICcnO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWJvdW5jZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5kZWJvdW5jZXIubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==