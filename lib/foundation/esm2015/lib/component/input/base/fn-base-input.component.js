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
        this.name = '';
        this.id = '';
        this.placeholder = '';
        this.isDisabled = false;
        this.textAlign = 'left';
        this.isErrorBox = true;
        this.minLength = 0;
        this.isRequired = false;
        this.maxLength = 255;
        this.type = 'TEXT';
        this.parentForm = null;
        this.readonly = false;
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
                template: "<div class=\"fn-input-box\">\r\n  <ng-container [ngSwitch]=\"type\">\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.PASSWORD\">\r\n      <ng-container *ngTemplateOutlet=\"PASSWORD\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.TEXT || inputTypeMap.STRING\">\r\n      <ng-container *ngTemplateOutlet=\" TEXT\"></ng-container>\r\n    </ng-container>\r\n    <!-- <ng-container *ngSwitchCase=\"inputTypeMap.STRING\">\r\n    <ng-container *ngTemplateOutlet=\"TEXT\"> </ng-container>\r\n  </ng-container> -->\r\n\r\n\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.NUMBER\">\r\n      <ng-container *ngTemplateOutlet=\"NUMBER\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.DOUBLE || inputTypeMap.FLOAT\">\r\n      <ng-container *ngTemplateOutlet=\"FLOAT\"></ng-container>\r\n    </ng-container>\r\n    <!-- <ng-container *ngSwitchCase=\"inputTypeMap.FLOAT\">\r\n      <ng-container *ngTemplateOutlet=\"FLOAT\"> </ng-container>\r\n    </ng-container> -->\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.CURRENCY\">\r\n      <ng-container *ngTemplateOutlet=\"CURRENCY\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.EMAIL\">\r\n      <ng-container *ngTemplateOutlet=\"EMAIL\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.BOOL\">\r\n      <ng-container *ngTemplateOutlet=\"BOOL\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.TEXTAREA\">\r\n      <ng-container *ngTemplateOutlet=\"TEXTAREA\"></ng-container>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container *ngSwitchDefault>\r\n      <ng-container *ngTemplateOutlet=\"TEXT\"></ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  <ng-template #TEXT>\r\n\r\n    <input [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n           [(ngModel)]=\"value\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\" [tabindex]=\"tabindex\"/>\r\n\r\n  </ng-template>\r\n\r\n  <ng-template #PASSWORD>\r\n    <input [id]=\"id\" type=\"password\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n           [(ngModel)]=\"value\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\" [tabindex]=\"tabindex\"/>\r\n  </ng-template>\r\n\r\n  <ng-template #NUMBER>\r\n    <input [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n           [(ngModel)]=\"value\" fnNumberDirective [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\"\r\n           [tabindex]=\"tabindex\"/>\r\n  </ng-template>\r\n  <ng-template #FLOAT>\r\n    <input [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n           [(ngModel)]=\"value\" fnNumberDirective [isDecimal]=\"'true'\" [disabled]=\"isDisabled\"\r\n           [style.text-align]=\"textAlign\"\r\n           [tabindex]=\"tabindex\"/>\r\n  </ng-template>\r\n\r\n  <ng-template #CURRENCY>\r\n    <!-- Todo for currency  -->\r\n  </ng-template>\r\n  <ng-template #EMAIL>\r\n    <input [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n           [(ngModel)]=\"value\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\" [tabindex]=\"tabindex\"/>\r\n  </ng-template>\r\n\r\n  <ng-template #TEXTAREA>\r\n    <textarea [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n              [(ngModel)]=\"value\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\"></textarea>\r\n  </ng-template>\r\n\r\n  <ng-template #BOOL>\r\n    <!--  Need to be design -->\r\n    <input [id]=\"id\" type=\"checkbox\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n           [(ngModel)]=\"value\" fnNumberDirective [isDecimal]=\"'true'\" [disabled]=\"isDisabled\"/>\r\n  </ng-template>\r\n\r\n  <!-- <ng-template #PHONENUMBER></ng-template>\r\n  <ng-template #LOOKUP></ng-template>\r\n  <ng-template #MULTILOOKUP></ng-template> -->\r\n\r\n  <ng-container *ngIf=\"isErrorBox && parentForm\">\r\n    <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\"\r\n                    [control]=\"parentForm.form.controls[name]\">\r\n    </fn-input-error>\r\n  </ng-container>\r\n\r\n</div>\r\n",
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
                styles: ["fn-input{position:relative;width:100%;float:left}fn-input fn-base-input .fn-input-box{position:relative}fn-input fn-base-input .fn-input-box input.fn-input,fn-input fn-base-input .fn-input-box input.form-control{box-sizing:border-box;width:100%;height:34px;border:1px solid #ced4da;box-shadow:none!important;background-color:#fff;color:#555;outline:0;padding:6px 12px;font-size:14px;line-height:1.42857143;background-image:none;transition:.2s linear;border-radius:4px;display:inline-block;position:relative}fn-input fn-base-input .fn-input-box input.fn-input:active,fn-input fn-base-input .fn-input-box input.fn-input:focus,fn-input fn-base-input .fn-input-box input.fn-input:visited,fn-input fn-base-input .fn-input-box input.form-control:active,fn-input fn-base-input .fn-input-box input.form-control:focus,fn-input fn-base-input .fn-input-box input.form-control:visited{border-color:#80bdff}fn-input fn-base-input .fn-input-box input.fn-input[disabled],fn-input fn-base-input .fn-input-box input.form-control[disabled]{color:rgba(0,0,0,.25);background-color:#f5f5f5;cursor:not-allowed;opacity:1}fn-input fn-base-input .fn-input-box input.fn-input:placeholder-shown,fn-input fn-base-input .fn-input-box input.form-control:placeholder-shown{text-overflow:ellipsis;color:#999}fn-input fn-base-input .fn-input-box input.fn-input::-webkit-input-placeholder,fn-input fn-base-input .fn-input-box input.form-control::-webkit-input-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input::-moz-placeholder,fn-input fn-base-input .fn-input-box input.form-control::-moz-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input:-ms-input-placeholder,fn-input fn-base-input .fn-input-box input.form-control:-ms-input-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input::-ms-input-placeholder,fn-input fn-base-input .fn-input-box input.form-control::-ms-input-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input::placeholder,fn-input fn-base-input .fn-input-box input.form-control::placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input.input-rounded,fn-input fn-base-input .fn-input-box input.form-control.input-rounded{border-radius:25px}fn-input fn-base-input .fn-input-box textarea.fn-input{max-width:100%;height:auto;min-height:32px;line-height:1.5;vertical-align:bottom;transition:.3s,height}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tYmFzZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9pbnB1dC9iYXNlL2ZuLWJhc2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFlbkQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLG9CQUF5QjtJQWJuRTs7O1FBZ0JFLGlCQUFZLEdBQUcsY0FBYyxDQUFDO1FBRXJCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixPQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQTRDLE1BQU0sQ0FBQztRQUM1RCxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxHQUFHLENBQUM7UUFDaEIsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBR1osZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVc5RCxDQUFDOzs7O0lBVEMsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25ELENBQUM7OztZQTNDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHczSUFBMkM7Z0JBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQzt3QkFDbkQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O2FBQ0Y7OzttQkFNRSxLQUFLO2lCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzttQkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzt5QkFFTCxNQUFNO3dCQUNOLE1BQU07Ozs7SUFuQlAsNENBQThCOztJQUU5QixvQ0FBbUI7O0lBQ25CLGtDQUFpQjs7SUFDakIsMkNBQTBCOztJQUMxQiwwQ0FBNEI7O0lBQzVCLHlDQUFxRTs7SUFDckUsMENBQTJCOztJQUMzQix5Q0FBdUI7O0lBQ3ZCLDBDQUE0Qjs7SUFDNUIseUNBQXlCOztJQUN6QixvQ0FBdUI7O0lBQ3ZCLDBDQUEyQjs7SUFDM0Isd0NBQTBCOztJQUMxQiw0Q0FBOEI7O0lBQzlCLHdDQUFzQjs7SUFDdEIsdUNBQXVCOztJQUV2QiwwQ0FBNkQ7O0lBQzdELHlDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7Rm5JbnB1dFZhbHVlQWNjZXNzb3J9IGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWwvZm4taW5wdXQudmFsdWUuYWNjZXNzb3InO1xyXG5pbXBvcnQge0ZOX0lOUFVUX1RZUEVTfSBmcm9tICcuLi8uLi8uLi9jb3JlL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm4tYmFzZS1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdmbi1iYXNlLWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnZm4tYmFzZS1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGbkJhc2VJbnB1dENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5CYXNlSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBGbklucHV0VmFsdWVBY2Nlc3Nvcjxhbnk+IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGlucHV0VHlwZU1hcCA9IEZOX0lOUFVUX1RZUEVTO1xyXG5cclxuICBASW5wdXQoKSBuYW1lID0gJyc7XHJcbiAgQElucHV0KCkgaWQgPSAnJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB0ZXh0QWxpZ246ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJyB8ICdqdXN0aWZ5JyA9ICdsZWZ0JztcclxuICBASW5wdXQoKSBpc0Vycm9yQm94ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBtaW5MZW5ndGggPSAwO1xyXG4gIEBJbnB1dCgpIGlzUmVxdWlyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBtYXhMZW5ndGggPSAyNTU7XHJcbiAgQElucHV0KCkgdHlwZSA9ICdURVhUJztcclxuICBASW5wdXQoKSBwYXJlbnRGb3JtID0gbnVsbDtcclxuICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZSA9ICdvZmYnO1xyXG4gIEBJbnB1dCgpIHRhYmluZGV4ID0gMDtcclxuICBASW5wdXQoKSBwYXR0ZXJuPzogYW55O1xyXG5cclxuICBAT3V0cHV0KCkgZm9jdXNFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGJsdWVFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZXRPcHRpb24oKTtcclxuICB9XHJcblxyXG4gIHNldE9wdGlvbigpIHtcclxuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyIHx8IHRoaXMubmFtZTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=