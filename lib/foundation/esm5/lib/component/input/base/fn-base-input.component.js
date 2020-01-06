/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FnInputValueAccessor } from '../../../core/model/fn-input.value.accessor';
import { FN_INPUT_TYPES } from '../../../core/index';
var FnBaseInputComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FnBaseInputComponent, _super);
    function FnBaseInputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @ts-ignore
        _this.inputTypeMap = FN_INPUT_TYPES;
        _this.textAlign = 'left';
        _this.isErrorBox = true;
        _this.minLength = 0;
        _this.isRequired = false;
        _this.maxLength = 255;
        _this.readonly = null;
        _this.autocomplete = 'off';
        _this.tabindex = 0;
        _this.focusEvent = new EventEmitter();
        _this.blueEvent = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FnBaseInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setOption();
    };
    /**
     * @return {?}
     */
    FnBaseInputComponent.prototype.setOption = /**
     * @return {?}
     */
    function () {
        this.placeholder = this.placeholder || this.name;
    };
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
                            function () { return FnBaseInputComponent; })),
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
    return FnBaseInputComponent;
}(FnInputValueAccessor));
export { FnBaseInputComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tYmFzZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9pbnB1dC9iYXNlL2ZuLWJhc2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXJEO0lBYTBDLGdEQUF5QjtJQWJuRTtRQUFBLHFFQThDQzs7UUE5QkMsa0JBQVksR0FBRyxjQUFjLENBQUM7UUFNckIsZUFBUyxHQUE0QyxNQUFNLENBQUM7UUFDNUQsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGVBQVMsR0FBRyxHQUFHLENBQUM7UUFHaEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixrQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBR1osZ0JBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxlQUFTLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7O0lBVzlELENBQUM7Ozs7SUFUQyx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELHdDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25ELENBQUM7O2dCQTNDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLDJ6SUFBMkM7b0JBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLEVBQUM7NEJBQ25ELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOztpQkFDRjs7O3VCQU1FLEtBQUs7cUJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzZCQUVMLE1BQU07NEJBQ04sTUFBTTs7SUFXVCwyQkFBQztDQUFBLEFBOUNELENBYTBDLG9CQUFvQixHQWlDN0Q7U0FqQ1ksb0JBQW9COzs7SUFHL0IsNENBQThCOztJQUU5QixvQ0FBc0I7O0lBQ3RCLGtDQUFvQjs7SUFDcEIsMkNBQTZCOztJQUM3QiwwQ0FBNkI7O0lBQzdCLHlDQUFxRTs7SUFDckUsMENBQTJCOztJQUMzQix5Q0FBdUI7O0lBQ3ZCLDBDQUE0Qjs7SUFDNUIseUNBQXlCOztJQUN6QixvQ0FBc0I7O0lBQ3RCLDBDQUF5Qjs7SUFDekIsd0NBQWtDOztJQUNsQyw0Q0FBOEI7O0lBQzlCLHdDQUFzQjs7SUFDdEIsdUNBQXVCOztJQUV2QiwwQ0FBNkQ7O0lBQzdELHlDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGbklucHV0VmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWwvZm4taW5wdXQudmFsdWUuYWNjZXNzb3InO1xyXG5pbXBvcnQgeyBGTl9JTlBVVF9UWVBFUyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmbi1iYXNlLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJ2ZuLWJhc2UtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydmbi1iYXNlLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZuQmFzZUlucHV0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbkJhc2VJbnB1dENvbXBvbmVudCBleHRlbmRzIEZuSW5wdXRWYWx1ZUFjY2Vzc29yPGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgaW5wdXRUeXBlTWFwID0gRk5fSU5QVVRfVFlQRVM7XHJcblxyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0ZXh0QWxpZ246ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJyB8ICdqdXN0aWZ5JyA9ICdsZWZ0JztcclxuICBASW5wdXQoKSBpc0Vycm9yQm94ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBtaW5MZW5ndGggPSAwO1xyXG4gIEBJbnB1dCgpIGlzUmVxdWlyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBtYXhMZW5ndGggPSAyNTU7XHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBhcmVudEZvcm06IGFueTtcclxuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbiA9IG51bGw7XHJcbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlID0gJ29mZic7XHJcbiAgQElucHV0KCkgdGFiaW5kZXggPSAwO1xyXG4gIEBJbnB1dCgpIHBhdHRlcm4/OiBhbnk7XHJcblxyXG4gIEBPdXRwdXQoKSBmb2N1c0V2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYmx1ZUV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldE9wdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9uKCkge1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXIgfHwgdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==