/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
export class FnInputErrorComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FnInputErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-input-error',
                template: "<span class=\"fn-msg-err\" [ngClass]=\"position\"\r\n  *ngIf=\"submitted && control.invalid\">{{control.errors.message ||'Invalid '}}</span>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".fn-msg-err{color:#fff;position:absolute;z-index:1;background:#e74c3c;padding:6px 10px;margin:0;width:-webkit-max-content;width:-moz-max-content;width:max-content;border-radius:4px;box-shadow:0 1px 4px 0 rgba(0,0,0,.35);font-size:11px}.fn-msg-err::before{content:\"\";display:block;position:absolute;border-style:solid}.fn-msg-err.bottom::before{bottom:100%;left:10px;border-width:0 8px 8px;border-color:transparent transparent #e74c3c}.fn-msg-err.top{bottom:calc(100% + 7px);left:0}.fn-msg-err.top::before{top:100%;left:10px;border-width:8px 8px 0;border-color:#e74c3c transparent transparent}.fn-msg-err.left{top:0;right:calc(100% + 7px)}.fn-msg-err.left::before{top:5px;right:-7px;border-width:8px 0 8px 8px;border-color:transparent #e74c3c}.fn-msg-err.right{top:0;left:calc(100% + 7px)}.fn-msg-err.right::before{top:5px;left:-7px;border-width:8px 8px 8px 0;border-color:transparent #e74c3c}.fn-input-error{background:#e74c3c;padding:10px;width:150px;margin-top:2;color:#fff}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taW5wdXQtZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvaW5wdXQvZXJyb3ItYm94L2ZuLWlucHV0LWVycm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRNUUsTUFBTSxPQUFPLHFCQUFxQjtJQUloQyxnQkFBZ0IsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDRKQUE0QztnQkFFNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7Ozt3QkFFRSxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7OztJQUZOLDBDQUE0Qjs7SUFDNUIsd0NBQXNCOztJQUN0Qix5Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZuLWlucHV0LWVycm9yJyxcclxuICB0ZW1wbGF0ZVVybDogJ2ZuLWlucHV0LWVycm9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnZm4taW5wdXQtZXJyb3IuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbklucHV0RXJyb3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHN1Ym1pdHRlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjb250cm9sOiBhbnk7XHJcbiAgQElucHV0KCkgcG9zaXRpb247XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=