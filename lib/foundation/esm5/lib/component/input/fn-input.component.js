/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, forwardRef, ViewEncapsulation } from '@angular/core';
import { FnUiFieldMetaDataService } from './service/fn-ui-field-metadata.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FnInputValueAccessor } from '../../core/model/fn-input.value.accessor';
import { FN_INPUT_TYPES } from '../../core/model/fn-form.constant';
var FnInputComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FnInputComponent, _super);
    function FnInputComponent(fieldMetaDataSvcs) {
        var _this = _super.call(this) || this;
        _this.fieldMetaDataSvcs = fieldMetaDataSvcs;
        // @ts-ignore
        _this.inputTypeMap = FN_INPUT_TYPES;
        _this.type = '';
        _this.name = '';
        _this.isDisabled = false;
        _this.autocomplete = 'off';
        _this.tabindex = 0;
        _this.textAlign = 'left';
        _this.placeholder = '';
        _this.dataKey = '';
        return _this;
    }
    /**
     * @return {?}
     */
    FnInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.config = this.fieldMetaDataSvcs.getFieldForId(this.dataKey);
        this.type = this.config.typeID.iid;
    };
    FnInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-input',
                    template: "<ng-container [ngSwitch]=\"type\">\r\n\r\n  <!-- default for PASSWORD TEXT STRING NUMBER DOUBLE EMAIL BOOL TEXTAREA -->\r\n  <ng-container *ngSwitchDefault>\r\n    <fn-base-input [(ngModel)]=\"value\" [id]=\"config.id\" [name]=\"name\" [isDisabled]=\"isDisabled\" [isErrorBox]=\"'false'\"\r\n                   [type]=\"type\">\r\n    </fn-base-input>\r\n\r\n    <!-- @Input() name: string;\r\n      @Input() id: string;\r\n      @Input() placeholder: string;\r\n      @Input() isDisabled: boolean;\r\n      @Input() textAlign: 'left' | 'right' | 'center' | 'justify' = 'left';\r\n      @Input() isErrorBox = true;\r\n      @Input() minLength = 0;\r\n      @Input() isRequired = false;\r\n      @Input() maxLength = 255;\r\n      @Input() type: string;\r\n      @Input() parentForm: any;\r\n      @Input() readonly: boolean = null;\r\n      @Input() autocomplete = 'off';\r\n      @Input() tabindex = 0;\r\n      @Input() pattern?: any;\r\n\r\n\r\n      isRequired: true,\r\n      isEnableOnUI: true,\r\n      labelIDArray: [\r\n      'Entity_EOEmpMain_Field_email_LBL',\r\n      'Entity_EOEmpMain_Field_email_HVR'\r\n      ],\r\n      minLength: 5,\r\n      isInitialized: true,\r\n      isShowInfo: false,\r\n      labelPosition: 'left',\r\n      recalAccess: false,\r\n      typeID: {\r\n      iid: 'EMAIL',\r\n      isNumber: false,\r\n      defaultTableWidth: 50,\r\n      defaultEditWidth: 20\r\n      },\r\n      applicablePK: 0,\r\n      id: 'Entity_EOEmpMain_Field_email',\r\n      isDisabled: false,\r\n      key: 'email',\r\n      maxLength: 255,\r\n      isDynDetailKey: false,\r\n      hideLabel: false -->\r\n\r\n\r\n  </ng-container>\r\n\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.PHONENUMBER\">\r\n    <!-- TODO for phone number -->\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.CURRENCY\">\r\n    <!-- Currency -->\r\n  </ng-container>\r\n\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.LOOKUP\">\r\n    <!-- Single Lookp -->\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.MULTILOOKUP\">\r\n    <!-- Multi Lookup Lookp -->\r\n  </ng-container>\r\n\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.COLOR\">\r\n    <!-- Color -->\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"parentForm\">\r\n    <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\">\r\n    </fn-input-error>\r\n  </ng-container>\r\n\r\n</ng-container>\r\n\r\n\r\n<!-- <fn-base-input-component-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\">\r\n</fn-base-input-component-error> -->\r\n\r\n<!-- <ng-container *ngSwitchCase=\"inputTypeMap.DATE\">\r\n\r\n    </ng-container> -->\r\n\r\n<!-- <ng-container *ngSwitchCase=\"inputTypeMap.DURATION\">\r\n\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.TIME\">\r\n\r\n    </ng-container> -->\r\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return FnInputComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["fn-input{position:relative;width:100%;float:left}fn-input fn-base-input .fn-input-box{position:relative}fn-input fn-base-input .fn-input-box input.fn-input,fn-input fn-base-input .fn-input-box input.form-control{box-sizing:border-box;width:100%;height:34px;border:1px solid #ced4da;box-shadow:none!important;background-color:#fff;color:#555;outline:0;padding:6px 12px;font-size:14px;line-height:1.42857143;background-image:none;transition:.2s linear;border-radius:4px;display:inline-block;position:relative}fn-input fn-base-input .fn-input-box input.fn-input:active,fn-input fn-base-input .fn-input-box input.fn-input:focus,fn-input fn-base-input .fn-input-box input.fn-input:visited,fn-input fn-base-input .fn-input-box input.form-control:active,fn-input fn-base-input .fn-input-box input.form-control:focus,fn-input fn-base-input .fn-input-box input.form-control:visited{border-color:#80bdff}fn-input fn-base-input .fn-input-box input.fn-input[disabled],fn-input fn-base-input .fn-input-box input.form-control[disabled]{color:rgba(0,0,0,.25);background-color:#f5f5f5;cursor:not-allowed;opacity:1}fn-input fn-base-input .fn-input-box input.fn-input:placeholder-shown,fn-input fn-base-input .fn-input-box input.form-control:placeholder-shown{text-overflow:ellipsis;color:#999}fn-input fn-base-input .fn-input-box input.fn-input::-webkit-input-placeholder,fn-input fn-base-input .fn-input-box input.form-control::-webkit-input-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input::-moz-placeholder,fn-input fn-base-input .fn-input-box input.form-control::-moz-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input:-ms-input-placeholder,fn-input fn-base-input .fn-input-box input.form-control:-ms-input-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input::-ms-input-placeholder,fn-input fn-base-input .fn-input-box input.form-control::-ms-input-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input::placeholder,fn-input fn-base-input .fn-input-box input.form-control::placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input.input-rounded,fn-input fn-base-input .fn-input-box input.form-control.input-rounded{border-radius:25px}fn-input fn-base-input .fn-input-box textarea.fn-input{max-width:100%;height:auto;min-height:32px;line-height:1.5;vertical-align:bottom;transition:.3s,height}"]
                }] }
    ];
    /** @nocollapse */
    FnInputComponent.ctorParameters = function () { return [
        { type: FnUiFieldMetaDataService }
    ]; };
    FnInputComponent.propDecorators = {
        name: [{ type: Input }],
        isDisabled: [{ type: Input }],
        autocomplete: [{ type: Input }],
        tabindex: [{ type: Input }],
        textAlign: [{ type: Input }],
        placeholder: [{ type: Input }],
        parentForm: [{ type: Input }],
        dataKey: [{ type: Input }]
    };
    return FnInputComponent;
}(FnInputValueAccessor));
export { FnInputComponent };
if (false) {
    /** @type {?} */
    FnInputComponent.prototype.inputTypeMap;
    /** @type {?} */
    FnInputComponent.prototype.type;
    /** @type {?} */
    FnInputComponent.prototype.config;
    /** @type {?} */
    FnInputComponent.prototype.pattern;
    /** @type {?} */
    FnInputComponent.prototype.name;
    /** @type {?} */
    FnInputComponent.prototype.isDisabled;
    /** @type {?} */
    FnInputComponent.prototype.autocomplete;
    /** @type {?} */
    FnInputComponent.prototype.tabindex;
    /** @type {?} */
    FnInputComponent.prototype.textAlign;
    /** @type {?} */
    FnInputComponent.prototype.placeholder;
    /** @type {?} */
    FnInputComponent.prototype.parentForm;
    /** @type {?} */
    FnInputComponent.prototype.dataKey;
    /**
     * @type {?}
     * @private
     */
    FnInputComponent.prototype.fieldMetaDataSvcs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvaW5wdXQvZm4taW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRWhGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVuRTtJQWFzQyw0Q0FBeUI7SUFTN0QsMEJBQW9CLGlCQUEyQztRQUEvRCxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjs7UUFOL0Qsa0JBQVksR0FBRyxjQUFjLENBQUM7UUFFOUIsVUFBSSxHQUFHLEVBQUUsQ0FBQztRQVFELFVBQUksR0FBRyxFQUFFLENBQUM7UUFDVixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixrQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZUFBUyxHQUE0QyxNQUFNLENBQUM7UUFDNUQsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsYUFBTyxHQUFHLEVBQUUsQ0FBQzs7SUFUdEIsQ0FBQzs7OztJQVdELG1DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDckMsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsazRGQUFzQztvQkFFdEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxnQkFBZ0IsRUFBaEIsQ0FBZ0IsRUFBQzs0QkFDL0MsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7O2lCQUNGOzs7O2dCQWxCUSx3QkFBd0I7Ozt1QkFnQzlCLEtBQUs7NkJBQ0wsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7SUFRUix1QkFBQztDQUFBLEFBekNELENBYXNDLG9CQUFvQixHQTRCekQ7U0E1QlksZ0JBQWdCOzs7SUFHM0Isd0NBQThCOztJQUU5QixnQ0FBVTs7SUFDVixrQ0FBcUI7O0lBQ3JCLG1DQUFjOztJQU1kLGdDQUFtQjs7SUFDbkIsc0NBQTRCOztJQUM1Qix3Q0FBOEI7O0lBQzlCLG9DQUFzQjs7SUFDdEIscUNBQXFFOztJQUNyRSx1Q0FBMEI7O0lBQzFCLHNDQUF5Qjs7SUFDekIsbUNBQXNCOzs7OztJQVhWLDZDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgZm9yd2FyZFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm5VaUZpZWxkTWV0YURhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2ZuLXVpLWZpZWxkLW1ldGFkYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm5JbnB1dFZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9jb3JlL21vZGVsL2ZuLWlucHV0LnZhbHVlLmFjY2Vzc29yJztcclxuaW1wb3J0IHsgRm5JbnB1dE1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9tb2RlbC9mbi1pbnB1dC5tb2RlbCc7XHJcbmltcG9ydCB7IEZOX0lOUFVUX1RZUEVTIH0gZnJvbSAnLi4vLi4vY29yZS9tb2RlbC9mbi1mb3JtLmNvbnN0YW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm4taW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZm4taW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydmbi1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGbklucHV0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbklucHV0Q29tcG9uZW50IGV4dGVuZHMgRm5JbnB1dFZhbHVlQWNjZXNzb3I8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBpbnB1dFR5cGVNYXAgPSBGTl9JTlBVVF9UWVBFUztcclxuXHJcbiAgdHlwZSA9ICcnO1xyXG4gIGNvbmZpZzogRm5JbnB1dE1vZGVsO1xyXG4gIHBhdHRlcm4/OiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmllbGRNZXRhRGF0YVN2Y3M6IEZuVWlGaWVsZE1ldGFEYXRhU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG5hbWUgPSAnJztcclxuICBASW5wdXQoKSBpc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlID0gJ29mZic7XHJcbiAgQElucHV0KCkgdGFiaW5kZXggPSAwO1xyXG4gIEBJbnB1dCgpIHRleHRBbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInIHwgJ2p1c3RpZnknID0gJ2xlZnQnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XHJcbiAgQElucHV0KCkgcGFyZW50Rm9ybTogYW55O1xyXG4gIEBJbnB1dCgpIGRhdGFLZXkgPSAnJztcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZmllbGRNZXRhRGF0YVN2Y3MuZ2V0RmllbGRGb3JJZCh0aGlzLmRhdGFLZXkpO1xyXG4gICAgdGhpcy50eXBlID0gdGhpcy5jb25maWcudHlwZUlELmlpZDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ==