/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef, ViewEncapsulation } from '@angular/core';
import { FnUiFieldMetaDataService } from './service/fn-ui-field-metadata.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FnInputValueAccessor } from '../../core/model/fn-input.value.accessor';
import { FN_INPUT_TYPES } from '../../core/model/fn-form.constant';
export class FnInputComponent extends FnInputValueAccessor {
    /**
     * @param {?} fieldMetaDataSvcs
     */
    constructor(fieldMetaDataSvcs) {
        super();
        this.fieldMetaDataSvcs = fieldMetaDataSvcs;
        // @ts-ignore
        this.inputTypeMap = FN_INPUT_TYPES;
        this.autocomplete = 'off';
        this.tabindex = 0;
        this.textAlign = 'left';
        this.placeholder = ' ';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.config = this.fieldMetaDataSvcs.getFieldForId(this.dataKey);
        this.type = this.config.typeID.iid;
    }
}
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
                        () => FnInputComponent)),
                        multi: true
                    }
                ],
                styles: [""]
            }] }
];
/** @nocollapse */
FnInputComponent.ctorParameters = () => [
    { type: FnUiFieldMetaDataService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvaW5wdXQvZm4taW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBZW5FLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxvQkFBeUI7Ozs7SUFTM0QsWUFBb0IsaUJBQTJDO1FBQzNELEtBQUssRUFBRSxDQUFDO1FBRFEsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjs7UUFOL0QsaUJBQVksR0FBRyxjQUFjLENBQUM7UUFZckIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGNBQVMsR0FBNEMsTUFBTSxDQUFDO1FBQzVELGdCQUFXLEdBQUcsR0FBRyxDQUFDO0lBUDNCLENBQUM7Ozs7SUFZRCxRQUFRO1FBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUN2QyxDQUFDOzs7WUF2Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixxM0ZBQXNDO2dCQUV0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFFO29CQUNQO3dCQUNJLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLEVBQUM7d0JBQy9DLEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUNKOzthQUNKOzs7O1lBbEJRLHdCQUF3Qjs7O21CQWdDNUIsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSztzQkFFTCxLQUFLOzs7O0lBbEJOLHdDQUE4Qjs7SUFFOUIsZ0NBQWE7O0lBQ2Isa0NBQXFCOztJQUNyQixtQ0FBYzs7SUFNZCxnQ0FBc0I7O0lBQ3RCLHNDQUE2Qjs7SUFDN0Isd0NBQThCOztJQUM5QixvQ0FBc0I7O0lBQ3RCLHFDQUFxRTs7SUFDckUsdUNBQTJCOztJQUMzQixzQ0FBeUI7O0lBRXpCLG1DQUF5Qjs7Ozs7SUFaYiw2Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZuVWlGaWVsZE1ldGFEYXRhU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9mbi11aS1maWVsZC1tZXRhZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZuSW5wdXRWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vY29yZS9tb2RlbC9mbi1pbnB1dC52YWx1ZS5hY2Nlc3Nvcic7XHJcbmltcG9ydCB7IEZuSW5wdXRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvbW9kZWwvZm4taW5wdXQubW9kZWwnO1xyXG5pbXBvcnQgeyBGTl9JTlBVVF9UWVBFUyB9IGZyb20gJy4uLy4uL2NvcmUvbW9kZWwvZm4tZm9ybS5jb25zdGFudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZm4taW5wdXQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdmbi1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnZm4taW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGbklucHV0Q29tcG9uZW50KSxcclxuICAgICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbklucHV0Q29tcG9uZW50IGV4dGVuZHMgRm5JbnB1dFZhbHVlQWNjZXNzb3I8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaW5wdXRUeXBlTWFwID0gRk5fSU5QVVRfVFlQRVM7XHJcblxyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgY29uZmlnOiBGbklucHV0TW9kZWw7XHJcbiAgICBwYXR0ZXJuPzogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmllbGRNZXRhRGF0YVN2Y3M6IEZuVWlGaWVsZE1ldGFEYXRhU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIGF1dG9jb21wbGV0ZSA9ICdvZmYnO1xyXG4gICAgQElucHV0KCkgdGFiaW5kZXggPSAwO1xyXG4gICAgQElucHV0KCkgdGV4dEFsaWduOiAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcicgfCAnanVzdGlmeScgPSAnbGVmdCc7XHJcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcgJztcclxuICAgIEBJbnB1dCgpIHBhcmVudEZvcm06IGFueTtcclxuXHJcbiAgICBASW5wdXQoKSBkYXRhS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmZpZWxkTWV0YURhdGFTdmNzLmdldEZpZWxkRm9ySWQodGhpcy5kYXRhS2V5KTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLmNvbmZpZy50eXBlSUQuaWlkO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4iXX0=