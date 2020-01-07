/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FnInputValueAccessor } from '../../../core/model/fn-input.value.accessor';
import { FN_INPUT_TYPES } from '../../../core/index';
export class FnBaseInputComponent extends FnInputValueAccessor {
    constructor() {
        super(...arguments);
        // @ts-ignore
        this.inputTypeMap = FN_INPUT_TYPES;
        this.textAlign = 'left';
        this.isErrorBox = true;
        this.minLength = 0;
        this.isRequired = false;
        this.maxLength = 255;
        this.readonly = null;
        this.autocomplete = 'off';
        this.tabindex = 0;
        this.focusEvent = new EventEmitter();
        this.blueEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setOption();
    }
    /**
     * @return {?}
     */
    setOption() {
        this.placeholder = this.placeholder || this.name;
    }
}
FnBaseInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-base-input',
                template: "<div class=\"fn-input-box\">\r\n  <ng-container [ngSwitch]=\"type\">\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.PASSWORD\">\r\n      <ng-container *ngTemplateOutlet=\"PASSWORD\"> </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.TEXT || inputTypeMap.STRING\">\r\n      <ng-container *ngTemplateOutlet=\" TEXT\"> </ng-container>\r\n    </ng-container>\r\n    <!-- <ng-container *ngSwitchCase=\"inputTypeMap.STRING\">\r\n    <ng-container *ngTemplateOutlet=\"TEXT\"> </ng-container>\r\n  </ng-container> -->\r\n\r\n\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.NUMBER\">\r\n      <ng-container *ngTemplateOutlet=\"NUMBER\"> </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.DOUBLE || inputTypeMap.FLOAT\">\r\n      <ng-container *ngTemplateOutlet=\"FLOAT\"> </ng-container>\r\n    </ng-container>\r\n    <!-- <ng-container *ngSwitchCase=\"inputTypeMap.FLOAT\">\r\n      <ng-container *ngTemplateOutlet=\"FLOAT\"> </ng-container>\r\n    </ng-container> -->\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.CURRENCY\">\r\n      <ng-container *ngTemplateOutlet=\"CURRENCY\"> </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.EMAIL\">\r\n      <ng-container *ngTemplateOutlet=\"EMAIL\"> </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.BOOL\">\r\n      <ng-container *ngTemplateOutlet=\"BOOL\"> </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.TEXTAREA\">\r\n      <ng-container *ngTemplateOutlet=\"TEXTAREA\"> </ng-container>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container *ngSwitchDefault>\r\n      <ng-container *ngTemplateOutlet=\"TEXT\"> </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  <ng-template #TEXT>\r\n\r\n    <input [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n      [(ngModel)]=\"value\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\" [tabindex]=\"tabindex\" />\r\n\r\n  </ng-template>\r\n\r\n  <ng-template #PASSWORD>\r\n    <input [id]=\"id\" type=\"password\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n      [(ngModel)]=\"value\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\" [tabindex]=\"tabindex\" />\r\n  </ng-template>\r\n\r\n  <ng-template #NUMBER>\r\n    <input [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n      [(ngModel)]=\"value\" fnNumberDirective [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\"\r\n      [tabindex]=\"tabindex\" />\r\n  </ng-template>\r\n  <ng-template #FLOAT>\r\n    <input [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n      [(ngModel)]=\"value\" fnNumberDirective [isDecimal]=\"'true'\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\"\r\n      [tabindex]=\"tabindex\" />\r\n  </ng-template>\r\n\r\n  <ng-template #CURRENCY>\r\n    <!-- Todo for currency  -->\r\n  </ng-template>\r\n  <ng-template #EMAIL>\r\n    <input [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n      [(ngModel)]=\"value\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\" [tabindex]=\"tabindex\" />\r\n  </ng-template>\r\n\r\n  <ng-template #TEXTAREA>\r\n    <textarea [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n      [(ngModel)]=\"value\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\"></textarea>\r\n  </ng-template>\r\n\r\n  <ng-template #BOOL>\r\n    <!--  Need to be design -->\r\n    <input [id]=\"id\" type=\"checkbox\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n      [(ngModel)]=\"value\" fnNumberDirective [isDecimal]=\"'true'\" [disabled]=\"isDisabled\" />\r\n  </ng-template>\r\n\r\n  <!-- <ng-template #PHONENUMBER></ng-template>\r\n  <ng-template #LOOKUP></ng-template>\r\n  <ng-template #MULTILOOKUP></ng-template> -->\r\n\r\n  <ng-container *ngIf=\"isErrorBox && parentForm\">\r\n    <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\"\r\n      [control]=\"parentForm.form.controls[name]\">\r\n    </fn-input-error>\r\n  </ng-container>\r\n\r\n</div>\r\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => FnBaseInputComponent)),
                        multi: true
                    }
                ],
                styles: [".fn-input-box{position:relative}.fn-input{box-sizing:border-box;font-variant:tabular-nums;-webkit-font-feature-settings:\"tnum\";font-feature-settings:\"tnum\";width:100%}.fn-input[disabled]{color:rgba(0,0,0,.25);background-color:#f5f5f5;cursor:not-allowed;opacity:1}.fn-input:placeholder-shown{text-overflow:ellipsis;color:#999}textarea.fn-input{max-width:100%;height:auto;min-height:32px;line-height:1.5;vertical-align:bottom;transition:.3s,height}"]
            }] }
];
FnBaseInputComponent.propDecorators = {
    name: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    isDisabled: [{ type: Input }],
    textAlign: [{ type: Input }],
    isErrorBox: [{ type: Input }],
    minLength: [{ type: Input }],
    isRequired: [{ type: Input }],
    maxLength: [{ type: Input }],
    type: [{ type: Input }],
    parentForm: [{ type: Input }],
    readonly: [{ type: Input }],
    autocomplete: [{ type: Input }],
    tabindex: [{ type: Input }],
    pattern: [{ type: Input }],
    focusEvent: [{ type: Output }],
    blueEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FnBaseInputComponent.prototype.inputTypeMap;
    /** @type {?} */
    FnBaseInputComponent.prototype.name;
    /** @type {?} */
    FnBaseInputComponent.prototype.id;
    /** @type {?} */
    FnBaseInputComponent.prototype.placeholder;
    /** @type {?} */
    FnBaseInputComponent.prototype.isDisabled;
    /** @type {?} */
    FnBaseInputComponent.prototype.textAlign;
    /** @type {?} */
    FnBaseInputComponent.prototype.isErrorBox;
    /** @type {?} */
    FnBaseInputComponent.prototype.minLength;
    /** @type {?} */
    FnBaseInputComponent.prototype.isRequired;
    /** @type {?} */
    FnBaseInputComponent.prototype.maxLength;
    /** @type {?} */
    FnBaseInputComponent.prototype.type;
    /** @type {?} */
    FnBaseInputComponent.prototype.parentForm;
    /** @type {?} */
    FnBaseInputComponent.prototype.readonly;
    /** @type {?} */
    FnBaseInputComponent.prototype.autocomplete;
    /** @type {?} */
    FnBaseInputComponent.prototype.tabindex;
    /** @type {?} */
    FnBaseInputComponent.prototype.pattern;
    /** @type {?} */
    FnBaseInputComponent.prototype.focusEvent;
    /** @type {?} */
    FnBaseInputComponent.prototype.blueEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tYmFzZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9pbnB1dC9iYXNlL2ZuLWJhc2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFlckQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLG9CQUF5QjtJQWJuRTs7O1FBZ0JFLGlCQUFZLEdBQUcsY0FBYyxDQUFDO1FBTXJCLGNBQVMsR0FBNEMsTUFBTSxDQUFDO1FBQzVELGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUdoQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFHWixlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBVzlELENBQUM7Ozs7SUFUQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkQsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsMnpJQUEyQztnQkFFM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixFQUFDO3dCQUNuRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7YUFDRjs7O21CQU1FLEtBQUs7aUJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO3lCQUVMLE1BQU07d0JBQ04sTUFBTTs7OztJQW5CUCw0Q0FBOEI7O0lBRTlCLG9DQUFzQjs7SUFDdEIsa0NBQW9COztJQUNwQiwyQ0FBNkI7O0lBQzdCLDBDQUE2Qjs7SUFDN0IseUNBQXFFOztJQUNyRSwwQ0FBMkI7O0lBQzNCLHlDQUF1Qjs7SUFDdkIsMENBQTRCOztJQUM1Qix5Q0FBeUI7O0lBQ3pCLG9DQUFzQjs7SUFDdEIsMENBQXlCOztJQUN6Qix3Q0FBa0M7O0lBQ2xDLDRDQUE4Qjs7SUFDOUIsd0NBQXNCOztJQUN0Qix1Q0FBdUI7O0lBRXZCLDBDQUE2RDs7SUFDN0QseUNBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZuSW5wdXRWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbC9mbi1pbnB1dC52YWx1ZS5hY2Nlc3Nvcic7XHJcbmltcG9ydCB7IEZOX0lOUFVUX1RZUEVTIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZuLWJhc2UtaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZm4tYmFzZS1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2ZuLWJhc2UtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm5CYXNlSW5wdXRDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZuQmFzZUlucHV0Q29tcG9uZW50IGV4dGVuZHMgRm5JbnB1dFZhbHVlQWNjZXNzb3I8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBpbnB1dFR5cGVNYXAgPSBGTl9JTlBVVF9UWVBFUztcclxuXHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRleHRBbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInIHwgJ2p1c3RpZnknID0gJ2xlZnQnO1xyXG4gIEBJbnB1dCgpIGlzRXJyb3JCb3ggPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG1pbkxlbmd0aCA9IDA7XHJcbiAgQElucHV0KCkgaXNSZXF1aXJlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG1heExlbmd0aCA9IDI1NTtcclxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGFyZW50Rm9ybTogYW55O1xyXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuID0gbnVsbDtcclxuICBASW5wdXQoKSBhdXRvY29tcGxldGUgPSAnb2ZmJztcclxuICBASW5wdXQoKSB0YWJpbmRleCA9IDA7XHJcbiAgQElucHV0KCkgcGF0dGVybj86IGFueTtcclxuXHJcbiAgQE91dHB1dCgpIGZvY3VzRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBibHVlRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0T3B0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb24oKSB7XHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlciB8fCB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19