/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
var FnInputErrorComponent = /** @class */ (function () {
    function FnInputErrorComponent() {
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
                    template: "<span class=\"fn-msg-err\" [ngClass]=\"position\"\r\n  *ngIf=\"submitted && control.invalid\">{{control.errors.message ||'Invalid '}}</span>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".fn-msg-err{color:#fff;position:absolute;z-index:1;background:#e74c3c;padding:6px 10px;margin:0;width:-webkit-max-content;width:-moz-max-content;width:max-content;border-radius:4px;box-shadow:0 1px 4px 0 rgba(0,0,0,.35);font-size:11px}.fn-msg-err::before{content:\"\";display:block;position:absolute;border-style:solid}.fn-msg-err.bottom::before{bottom:100%;left:10px;border-width:0 8px 8px;border-color:transparent transparent #e74c3c}.fn-msg-err.top{bottom:calc(100% + 7px);left:0}.fn-msg-err.top::before{top:100%;left:10px;border-width:8px 8px 0;border-color:#e74c3c transparent transparent}.fn-msg-err.left{top:0;right:calc(100% + 7px)}.fn-msg-err.left::before{top:5px;right:-7px;border-width:8px 0 8px 8px;border-color:transparent #e74c3c}.fn-msg-err.right{top:0;left:calc(100% + 7px)}.fn-msg-err.right::before{top:5px;left:-7px;border-width:8px 8px 8px 0;border-color:transparent #e74c3c}.fn-input-error{background:#e74c3c;padding:10px;width:150px;margin-top:2;color:#fff}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taW5wdXQtZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvaW5wdXQvZXJyb3ItYm94L2ZuLWlucHV0LWVycm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUU7SUFVRTtJQUFnQixDQUFDOzs7O0lBRWpCLHdDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiw0SkFBNEM7b0JBRTVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7OzRCQUVFLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQU1SLDRCQUFDO0NBQUEsQUFmRCxJQWVDO1NBVFkscUJBQXFCOzs7SUFDaEMsMENBQTRCOztJQUM1Qix3Q0FBc0I7O0lBQ3RCLHlDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm4taW5wdXQtZXJyb3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnZm4taW5wdXQtZXJyb3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydmbi1pbnB1dC1lcnJvci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEZuSW5wdXRFcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgc3VibWl0dGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNvbnRyb2w6IGFueTtcclxuICBASW5wdXQoKSBwb3NpdGlvbjtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==