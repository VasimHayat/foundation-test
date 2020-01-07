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
        _this.autocomplete = 'off';
        _this.tabindex = 0;
        _this.textAlign = 'left';
        _this.placeholder = ' ';
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
                    template: "<ng-container [ngSwitch]=\"type\">\r\n\r\n  <!-- default for PASSWORD TEXT STRING NUMBER DOUBLE EMAIL BOOL TEXTAREA -->\r\n  <ng-container *ngSwitchDefault>\r\n    <fn-base-input [(ngModel)]=\"value\" [id]=\"config.id\" [name]=\"name\" [isDisabled]=\"isDisabled\" [isErrorBox]=\"'false'\"\r\n      [type]=\"type\">\r\n    </fn-base-input>\r\n\r\n    <!-- @Input() name: string;\r\n      @Input() id: string;\r\n      @Input() placeholder: string;\r\n      @Input() isDisabled: boolean;\r\n      @Input() textAlign: 'left' | 'right' | 'center' | 'justify' = 'left';\r\n      @Input() isErrorBox = true;\r\n      @Input() minLength = 0;\r\n      @Input() isRequired = false;\r\n      @Input() maxLength = 255;\r\n      @Input() type: string;\r\n      @Input() parentForm: any;\r\n      @Input() readonly: boolean = null;\r\n      @Input() autocomplete = 'off';\r\n      @Input() tabindex = 0;\r\n      @Input() pattern?: any;\r\n\r\n\r\n      isRequired: true,\r\n      isEnableOnUI: true,\r\n      labelIDArray: [\r\n      'Entity_EOEmpMain_Field_email_LBL',\r\n      'Entity_EOEmpMain_Field_email_HVR'\r\n      ],\r\n      minLength: 5,\r\n      isInitialized: true,\r\n      isShowInfo: false,\r\n      labelPosition: 'left',\r\n      recalAccess: false,\r\n      typeID: {\r\n      iid: 'EMAIL',\r\n      isNumber: false,\r\n      defaultTableWidth: 50,\r\n      defaultEditWidth: 20\r\n      },\r\n      applicablePK: 0,\r\n      id: 'Entity_EOEmpMain_Field_email',\r\n      isDisabled: false,\r\n      key: 'email',\r\n      maxLength: 255,\r\n      isDynDetailKey: false,\r\n      hideLabel: false -->\r\n\r\n\r\n  </ng-container>\r\n\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.PHONENUMBER\">\r\n    <!-- TODO for phone number -->\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.CURRENCY\">\r\n    <!-- Currency -->\r\n  </ng-container>\r\n\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.LOOKUP\">\r\n    <!-- Single Lookp -->\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.MULTILOOKUP\">\r\n    <!-- Multi Lookup Lookp -->\r\n  </ng-container>\r\n\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.COLOR\">\r\n    <!-- Color -->\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"parentForm\">\r\n    <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\">\r\n    </fn-input-error>\r\n  </ng-container>\r\n\r\n</ng-container>\r\n\r\n\r\n<!-- <fn-base-input-component-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\">\r\n</fn-base-input-component-error> -->\r\n\r\n<!-- <ng-container *ngSwitchCase=\"inputTypeMap.DATE\">\r\n\r\n    </ng-container> -->\r\n\r\n<!-- <ng-container *ngSwitchCase=\"inputTypeMap.DURATION\">\r\n\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.TIME\">\r\n\r\n    </ng-container> -->\r\n",
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
                    styles: [""]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvaW5wdXQvZm4taW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRWhGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVuRTtJQWFzQyw0Q0FBeUI7SUFTM0QsMEJBQW9CLGlCQUEyQztRQUEvRCxZQUNJLGlCQUFPLFNBQ1Y7UUFGbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjs7UUFOL0Qsa0JBQVksR0FBRyxjQUFjLENBQUM7UUFZckIsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGVBQVMsR0FBNEMsTUFBTSxDQUFDO1FBQzVELGlCQUFXLEdBQUcsR0FBRyxDQUFDOztJQVAzQixDQUFDOzs7O0lBWUQsbUNBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUN2QyxDQUFDOztnQkF2Q0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixxM0ZBQXNDO29CQUV0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsU0FBUyxFQUFFO3dCQUNQOzRCQUNJLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLGdCQUFnQixFQUFoQixDQUFnQixFQUFDOzRCQUMvQyxLQUFLLEVBQUUsSUFBSTt5QkFDZDtxQkFDSjs7aUJBQ0o7Ozs7Z0JBbEJRLHdCQUF3Qjs7O3VCQWdDNUIsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFFTCxLQUFLOztJQVFWLHVCQUFDO0NBQUEsQUExQ0QsQ0Fhc0Msb0JBQW9CLEdBNkJ6RDtTQTdCWSxnQkFBZ0I7OztJQUd6Qix3Q0FBOEI7O0lBRTlCLGdDQUFhOztJQUNiLGtDQUFxQjs7SUFDckIsbUNBQWM7O0lBTWQsZ0NBQXNCOztJQUN0QixzQ0FBNkI7O0lBQzdCLHdDQUE4Qjs7SUFDOUIsb0NBQXNCOztJQUN0QixxQ0FBcUU7O0lBQ3JFLHVDQUEyQjs7SUFDM0Isc0NBQXlCOztJQUV6QixtQ0FBeUI7Ozs7O0lBWmIsNkNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGblVpRmllbGRNZXRhRGF0YVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvZm4tdWktZmllbGQtbWV0YWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGbklucHV0VmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2NvcmUvbW9kZWwvZm4taW5wdXQudmFsdWUuYWNjZXNzb3InO1xyXG5pbXBvcnQgeyBGbklucHV0TW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL21vZGVsL2ZuLWlucHV0Lm1vZGVsJztcclxuaW1wb3J0IHsgRk5fSU5QVVRfVFlQRVMgfSBmcm9tICcuLi8uLi9jb3JlL21vZGVsL2ZuLWZvcm0uY29uc3RhbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZuLWlucHV0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnZm4taW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2ZuLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm5JbnB1dENvbXBvbmVudCksXHJcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5JbnB1dENvbXBvbmVudCBleHRlbmRzIEZuSW5wdXRWYWx1ZUFjY2Vzc29yPGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlucHV0VHlwZU1hcCA9IEZOX0lOUFVUX1RZUEVTO1xyXG5cclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGNvbmZpZzogRm5JbnB1dE1vZGVsO1xyXG4gICAgcGF0dGVybj86IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpZWxkTWV0YURhdGFTdmNzOiBGblVpRmllbGRNZXRhRGF0YVNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBhdXRvY29tcGxldGUgPSAnb2ZmJztcclxuICAgIEBJbnB1dCgpIHRhYmluZGV4ID0gMDtcclxuICAgIEBJbnB1dCgpIHRleHRBbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInIHwgJ2p1c3RpZnknID0gJ2xlZnQnO1xyXG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnICc7XHJcbiAgICBASW5wdXQoKSBwYXJlbnRGb3JtOiBhbnk7XHJcblxyXG4gICAgQElucHV0KCkgZGF0YUtleTogc3RyaW5nO1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5maWVsZE1ldGFEYXRhU3Zjcy5nZXRGaWVsZEZvcklkKHRoaXMuZGF0YUtleSk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5jb25maWcudHlwZUlELmlpZDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuIl19