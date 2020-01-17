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
        this.type = '';
        this.name = '';
        this.isDisabled = false;
        this.autocomplete = 'off';
        this.tabindex = 0;
        this.textAlign = 'left';
        this.placeholder = '';
        this.dataKey = '';
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
                template: "<ng-container [ngSwitch]=\"type\">\r\n\r\n  <!-- default for PASSWORD TEXT STRING NUMBER DOUBLE EMAIL BOOL TEXTAREA -->\r\n  <ng-container *ngSwitchDefault>\r\n    <fn-base-input [(ngModel)]=\"value\" [id]=\"config.id\" [name]=\"name\" [isDisabled]=\"isDisabled\" [isErrorBox]=\"'false'\"\r\n                   [type]=\"type\">\r\n    </fn-base-input>\r\n\r\n    <!-- @Input() name: string;\r\n      @Input() id: string;\r\n      @Input() placeholder: string;\r\n      @Input() isDisabled: boolean;\r\n      @Input() textAlign: 'left' | 'right' | 'center' | 'justify' = 'left';\r\n      @Input() isErrorBox = true;\r\n      @Input() minLength = 0;\r\n      @Input() isRequired = false;\r\n      @Input() maxLength = 255;\r\n      @Input() type: string;\r\n      @Input() parentForm: any;\r\n      @Input() readonly: boolean = null;\r\n      @Input() autocomplete = 'off';\r\n      @Input() tabindex = 0;\r\n      @Input() pattern?: any;\r\n\r\n\r\n      isRequired: true,\r\n      isEnableOnUI: true,\r\n      labelIDArray: [\r\n      'Entity_EOEmpMain_Field_email_LBL',\r\n      'Entity_EOEmpMain_Field_email_HVR'\r\n      ],\r\n      minLength: 5,\r\n      isInitialized: true,\r\n      isShowInfo: false,\r\n      labelPosition: 'left',\r\n      recalAccess: false,\r\n      typeID: {\r\n      iid: 'EMAIL',\r\n      isNumber: false,\r\n      defaultTableWidth: 50,\r\n      defaultEditWidth: 20\r\n      },\r\n      applicablePK: 0,\r\n      id: 'Entity_EOEmpMain_Field_email',\r\n      isDisabled: false,\r\n      key: 'email',\r\n      maxLength: 255,\r\n      isDynDetailKey: false,\r\n      hideLabel: false -->\r\n\r\n\r\n  </ng-container>\r\n\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.PHONENUMBER\">\r\n    <!-- TODO for phone number -->\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.CURRENCY\">\r\n    <!-- Currency -->\r\n  </ng-container>\r\n\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.LOOKUP\">\r\n    <!-- Single Lookp -->\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.MULTILOOKUP\">\r\n    <!-- Multi Lookup Lookp -->\r\n  </ng-container>\r\n\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.COLOR\">\r\n    <!-- Color -->\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"parentForm\">\r\n    <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\">\r\n    </fn-input-error>\r\n  </ng-container>\r\n\r\n</ng-container>\r\n\r\n\r\n<!-- <fn-base-input-component-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\">\r\n</fn-base-input-component-error> -->\r\n\r\n<!-- <ng-container *ngSwitchCase=\"inputTypeMap.DATE\">\r\n\r\n    </ng-container> -->\r\n\r\n<!-- <ng-container *ngSwitchCase=\"inputTypeMap.DURATION\">\r\n\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.TIME\">\r\n\r\n    </ng-container> -->\r\n",
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
                styles: ["fn-input{position:relative;width:100%;float:left}fn-input fn-base-input .fn-input-box{position:relative}fn-input fn-base-input .fn-input-box input.fn-input,fn-input fn-base-input .fn-input-box input.form-control{box-sizing:border-box;width:100%;height:34px;border:1px solid #ced4da;box-shadow:none!important;background-color:#fff;color:#555;outline:0;padding:6px 12px;font-size:14px;line-height:1.42857143;background-image:none;transition:.2s linear;border-radius:4px;display:inline-block;position:relative}fn-input fn-base-input .fn-input-box input.fn-input:active,fn-input fn-base-input .fn-input-box input.fn-input:focus,fn-input fn-base-input .fn-input-box input.fn-input:visited,fn-input fn-base-input .fn-input-box input.form-control:active,fn-input fn-base-input .fn-input-box input.form-control:focus,fn-input fn-base-input .fn-input-box input.form-control:visited{border-color:#80bdff}fn-input fn-base-input .fn-input-box input.fn-input[disabled],fn-input fn-base-input .fn-input-box input.form-control[disabled]{color:rgba(0,0,0,.25);background-color:#f5f5f5;cursor:not-allowed;opacity:1}fn-input fn-base-input .fn-input-box input.fn-input:placeholder-shown,fn-input fn-base-input .fn-input-box input.form-control:placeholder-shown{text-overflow:ellipsis;color:#999}fn-input fn-base-input .fn-input-box input.fn-input::-webkit-input-placeholder,fn-input fn-base-input .fn-input-box input.form-control::-webkit-input-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input::-moz-placeholder,fn-input fn-base-input .fn-input-box input.form-control::-moz-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input:-ms-input-placeholder,fn-input fn-base-input .fn-input-box input.form-control:-ms-input-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input::-ms-input-placeholder,fn-input fn-base-input .fn-input-box input.form-control::-ms-input-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input::placeholder,fn-input fn-base-input .fn-input-box input.form-control::placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input.input-rounded,fn-input fn-base-input .fn-input-box input.form-control.input-rounded{border-radius:25px}fn-input fn-base-input .fn-input-box textarea.fn-input{max-width:100%;height:auto;min-height:32px;line-height:1.5;vertical-align:bottom;transition:.3s,height}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvaW5wdXQvZm4taW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBZW5FLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxvQkFBeUI7Ozs7SUFTN0QsWUFBb0IsaUJBQTJDO1FBQzdELEtBQUssRUFBRSxDQUFDO1FBRFUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjs7UUFOL0QsaUJBQVksR0FBRyxjQUFjLENBQUM7UUFFOUIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQVFELFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixjQUFTLEdBQTRDLE1BQU0sQ0FBQztRQUM1RCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUVqQixZQUFPLEdBQUcsRUFBRSxDQUFDO0lBVHRCLENBQUM7Ozs7SUFXRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNyQyxDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixrNEZBQXNDO2dCQUV0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLEVBQUM7d0JBQy9DLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOzthQUNGOzs7O1lBbEJRLHdCQUF3Qjs7O21CQWdDOUIsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLOzs7O0lBakJOLHdDQUE4Qjs7SUFFOUIsZ0NBQVU7O0lBQ1Ysa0NBQXFCOztJQUNyQixtQ0FBYzs7SUFNZCxnQ0FBbUI7O0lBQ25CLHNDQUE0Qjs7SUFDNUIsd0NBQThCOztJQUM5QixvQ0FBc0I7O0lBQ3RCLHFDQUFxRTs7SUFDckUsdUNBQTBCOztJQUMxQixzQ0FBeUI7O0lBQ3pCLG1DQUFzQjs7Ozs7SUFYViw2Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZuVWlGaWVsZE1ldGFEYXRhU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9mbi11aS1maWVsZC1tZXRhZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZuSW5wdXRWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vY29yZS9tb2RlbC9mbi1pbnB1dC52YWx1ZS5hY2Nlc3Nvcic7XHJcbmltcG9ydCB7IEZuSW5wdXRNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvbW9kZWwvZm4taW5wdXQubW9kZWwnO1xyXG5pbXBvcnQgeyBGTl9JTlBVVF9UWVBFUyB9IGZyb20gJy4uLy4uL2NvcmUvbW9kZWwvZm4tZm9ybS5jb25zdGFudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZuLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJ2ZuLWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnZm4taW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm5JbnB1dENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5JbnB1dENvbXBvbmVudCBleHRlbmRzIEZuSW5wdXRWYWx1ZUFjY2Vzc29yPGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgaW5wdXRUeXBlTWFwID0gRk5fSU5QVVRfVFlQRVM7XHJcblxyXG4gIHR5cGUgPSAnJztcclxuICBjb25maWc6IEZuSW5wdXRNb2RlbDtcclxuICBwYXR0ZXJuPzogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpZWxkTWV0YURhdGFTdmNzOiBGblVpRmllbGRNZXRhRGF0YVNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBuYW1lID0gJyc7XHJcbiAgQElucHV0KCkgaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZSA9ICdvZmYnO1xyXG4gIEBJbnB1dCgpIHRhYmluZGV4ID0gMDtcclxuICBASW5wdXQoKSB0ZXh0QWxpZ246ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJyB8ICdqdXN0aWZ5JyA9ICdsZWZ0JztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIHBhcmVudEZvcm06IGFueTtcclxuICBASW5wdXQoKSBkYXRhS2V5ID0gJyc7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmZpZWxkTWV0YURhdGFTdmNzLmdldEZpZWxkRm9ySWQodGhpcy5kYXRhS2V5KTtcclxuICAgIHRoaXMudHlwZSA9IHRoaXMuY29uZmlnLnR5cGVJRC5paWQ7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4iXX0=