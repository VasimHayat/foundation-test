/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
var FnInputErrorComponent = /** @class */ (function () {
    function FnInputErrorComponent() {
        this.submitted = false;
        this.position = 'bottom';
    }
    /**
     * @return {?}
     */
    FnInputErrorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FnInputErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-input-error',
                    template: "<span class=\"fn-msg-err\" [ngClass]=\"position\"\r\n      *ngIf=\"submitted && control.invalid\">{{control.errors.message || 'Invalid '}}</span>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".fn-msg-err{color:#fff;position:absolute;z-index:1;background:#e74c3c;padding:6px 10px;margin:0!important;width:-webkit-max-content;width:-moz-max-content;width:max-content;border-radius:4px;box-shadow:0 1px 4px 0 rgba(0,0,0,.35);font-size:11px}.fn-msg-err:before{content:\"\";display:block;position:absolute;border-style:solid}.fn-msg-err.top{bottom:calc(100% + 7px);left:0}.fn-msg-err.top:before{top:100%;left:10px;border-width:8px 8px 0;border-color:#e74c3c transparent transparent}.fn-msg-err.bottom{top:calc(100% + 7px);left:0}.fn-msg-err.bottom:before{bottom:100%;left:10px;border-width:0 8px 8px;border-color:transparent transparent #e74c3c}.fn-msg-err.left{top:0;right:calc(100% + 7px)}.fn-msg-err.left:before{top:5px;right:-7px;border-width:8px 0 8px 8px;border-color:transparent #e74c3c}.fn-msg-err.right{top:0;left:calc(100% + 7px)}.fn-msg-err.right:before{top:5px;left:-7px;border-width:8px 8px 8px 0;border-color:transparent #e74c3c}"]
                }] }
    ];
    /** @nocollapse */
    FnInputErrorComponent.ctorParameters = function () { return []; };
    FnInputErrorComponent.propDecorators = {
        submitted: [{ type: Input }],
        control: [{ type: Input }],
        position: [{ type: Input }]
    };
    return FnInputErrorComponent;
}());
export { FnInputErrorComponent };
if (false) {
    /** @type {?} */
    FnInputErrorComponent.prototype.submitted;
    /** @type {?} */
    FnInputErrorComponent.prototype.control;
    /** @type {?} */
    FnInputErrorComponent.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taW5wdXQtZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvaW5wdXQvZXJyb3ItYm94L2ZuLWlucHV0LWVycm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUU7SUFXRTtRQUpTLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsYUFBUSxHQUFHLFFBQVEsQ0FBQztJQUc3QixDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGlLQUE0QztvQkFFNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7Ozs7NEJBRUUsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBUVIsNEJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVhZLHFCQUFxQjs7O0lBQ2hDLDBDQUEyQjs7SUFDM0Isd0NBQXNCOztJQUN0Qix5Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmbi1pbnB1dC1lcnJvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdmbi1pbnB1dC1lcnJvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2ZuLWlucHV0LWVycm9yLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5JbnB1dEVycm9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBjb250cm9sOiBhbnk7XHJcbiAgQElucHV0KCkgcG9zaXRpb24gPSAnYm90dG9tJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==