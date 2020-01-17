/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
export class FnInputErrorComponent {
    constructor() {
        this.submitted = false;
        this.position = 'bottom';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FnInputErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-input-error',
                template: "<span class=\"fn-msg-err\" [ngClass]=\"position\"\r\n      *ngIf=\"submitted && control.invalid\">{{control.errors.message || 'Invalid '}}</span>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".fn-msg-err{color:#fff;position:absolute;z-index:1;background:#e74c3c;padding:6px 10px;margin:0!important;width:-webkit-max-content;width:-moz-max-content;width:max-content;border-radius:4px;box-shadow:0 1px 4px 0 rgba(0,0,0,.35);font-size:11px}.fn-msg-err:before{content:\"\";display:block;position:absolute;border-style:solid}.fn-msg-err.top{bottom:calc(100% + 7px);left:0}.fn-msg-err.top:before{top:100%;left:10px;border-width:8px 8px 0;border-color:#e74c3c transparent transparent}.fn-msg-err.bottom{top:calc(100% + 7px);left:0}.fn-msg-err.bottom:before{bottom:100%;left:10px;border-width:0 8px 8px;border-color:transparent transparent #e74c3c}.fn-msg-err.left{top:0;right:calc(100% + 7px)}.fn-msg-err.left:before{top:5px;right:-7px;border-width:8px 0 8px 8px;border-color:transparent #e74c3c}.fn-msg-err.right{top:0;left:calc(100% + 7px)}.fn-msg-err.right:before{top:5px;left:-7px;border-width:8px 8px 8px 0;border-color:transparent #e74c3c}"]
            }] }
];
/** @nocollapse */
FnInputErrorComponent.ctorParameters = () => [];
FnInputErrorComponent.propDecorators = {
    submitted: [{ type: Input }],
    control: [{ type: Input }],
    position: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FnInputErrorComponent.prototype.submitted;
    /** @type {?} */
    FnInputErrorComponent.prototype.control;
    /** @type {?} */
    FnInputErrorComponent.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taW5wdXQtZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvaW5wdXQvZXJyb3ItYm94L2ZuLWlucHV0LWVycm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFRMUUsTUFBTSxPQUFPLHFCQUFxQjtJQUtoQztRQUpTLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsYUFBUSxHQUFHLFFBQVEsQ0FBQztJQUc3QixDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQWZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixpS0FBNEM7Z0JBRTVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7Ozs7d0JBRUUsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFGTiwwQ0FBMkI7O0lBQzNCLHdDQUFzQjs7SUFDdEIseUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm4taW5wdXQtZXJyb3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnZm4taW5wdXQtZXJyb3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydmbi1pbnB1dC1lcnJvci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEZuSW5wdXRFcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY29udHJvbDogYW55O1xyXG4gIEBJbnB1dCgpIHBvc2l0aW9uID0gJ2JvdHRvbSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=