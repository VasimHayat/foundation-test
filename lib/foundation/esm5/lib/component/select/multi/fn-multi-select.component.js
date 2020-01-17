/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FnInputValueAccessor } from '../../../core';
var FnMultiSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FnMultiSelectComponent, _super);
    function FnMultiSelectComponent() {
        var _this = _super.call(this) || this;
        _this.name = '';
        _this.id = '';
        _this.isDisabled = false;
        _this.isErrorBox = true;
        _this.optionList = [];
        _this.labelKey = '';
        _this.placeholder = '';
        _this.isRequired = false;
        _this.tabIndex = 0;
        _this.maxSelectedItems = 0;
        _this.changeEvent = new EventEmitter();
        _this.closeEvent = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FnMultiSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setOption();
    };
    /**
     * @return {?}
     */
    FnMultiSelectComponent.prototype.setOption = /**
     * @return {?}
     */
    function () {
        this.placeholder = this.placeholder || this.name;
    };
    FnMultiSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-multi-select',
                    template: "<ng-container>\r\n  <ng-container *ngIf=\"!groupBy\">\r\n    <ng-select [items]=\"optionList\" [multiple]=\"true\" [maxSelectedItems]=\"\" [bindLabel]=\"labelKey\" [(ngModel)]=\"value\"\r\n               [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\" (change)=\"changeEvent.emit($event)\">\r\n    </ng-select>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"groupBy\">\r\n\r\n    <ng-select [items]=\"optionList\" [multiple]=\"true\" [groupBy]=\"groupBy\" [maxSelectedItems]=\"\" [bindLabel]=\"labelKey\"\r\n               [(ngModel)]=\"value\" [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\"\r\n               (change)=\"changeEvent.emit($event)\">\r\n\r\n      <ng-template ng-optgroup-tmp let-item=\"item\">\r\n        {{item[groupBy] || 'Unnamed group'}}\r\n      </ng-template>\r\n    </ng-select>\r\n  </ng-container>\r\n</ng-container>\r\n\r\n\r\n<ng-container *ngIf=\"parentForm\">\r\n  <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\"\r\n                  [tabIndex]=\"tabIndex\">\r\n  </fn-input-error>\r\n</ng-container>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return FnMultiSelectComponent; })),
                            multi: true
                        }
                    ],
                    styles: [":root{--list-item-hover-bg:$list-item-hover-bg}fn-select ng-select.ng-select-opened .ng-select-container .ng-arrow-wrapper .ng-arrow{top:-5px!important}fn-select ng-select .ng-select-container .ng-value-container .ng-input{top:inherit!important;padding-left:12px!important}fn-select ng-select .ng-select-container .ng-value-container .ng-input input{font-size:1rem;line-height:30px}fn-select ng-select .ng-select-container .ng-clear-wrapper{line-height:32px}fn-select ng-select .ng-select-container .ng-arrow-wrapper .ng-arrow{height:9px}fn-select ng-select ng-dropdown-panel.ng-dropdown-panel .ng-dropdown-panel-items div.ng-option{padding:5px 10px 5px 22px!important;transition:.3s ease-in}fn-select ng-select ng-dropdown-panel.ng-dropdown-panel .ng-dropdown-panel-items div.ng-option.ng-option-marked{background-color:var(--list-item-hover-bg);color:#fff}fn-select ng-select ng-dropdown-panel.ng-dropdown-panel .ng-dropdown-panel-items div.ng-option,fn-select ng-select ng-dropdown-panel.ng-dropdown-panel .ng-dropdown-panel-items div.ng-option-disabled{line-height:20px!important;font-size:14px}fn-select ng-select ng-dropdown-panel.ng-dropdown-panel .ng-dropdown-panel-items div.ng-option span,fn-select ng-select ng-dropdown-panel.ng-dropdown-panel .ng-dropdown-panel-items div.ng-option-disabled span{font-size:14px}"]
                }] }
    ];
    /** @nocollapse */
    FnMultiSelectComponent.ctorParameters = function () { return []; };
    FnMultiSelectComponent.propDecorators = {
        name: [{ type: Input }],
        id: [{ type: Input }],
        isDisabled: [{ type: Input }],
        isErrorBox: [{ type: Input }],
        optionList: [{ type: Input }],
        labelKey: [{ type: Input }],
        placeholder: [{ type: Input }],
        isRequired: [{ type: Input }],
        parentForm: [{ type: Input }],
        tabIndex: [{ type: Input }],
        groupBy: [{ type: Input }],
        maxSelectedItems: [{ type: Input }],
        changeEvent: [{ type: Output }],
        closeEvent: [{ type: Output }]
    };
    return FnMultiSelectComponent;
}(FnInputValueAccessor));
export { FnMultiSelectComponent };
if (false) {
    /** @type {?} */
    FnMultiSelectComponent.prototype.name;
    /** @type {?} */
    FnMultiSelectComponent.prototype.id;
    /** @type {?} */
    FnMultiSelectComponent.prototype.isDisabled;
    /** @type {?} */
    FnMultiSelectComponent.prototype.isErrorBox;
    /** @type {?} */
    FnMultiSelectComponent.prototype.optionList;
    /** @type {?} */
    FnMultiSelectComponent.prototype.labelKey;
    /** @type {?} */
    FnMultiSelectComponent.prototype.placeholder;
    /** @type {?} */
    FnMultiSelectComponent.prototype.isRequired;
    /** @type {?} */
    FnMultiSelectComponent.prototype.parentForm;
    /** @type {?} */
    FnMultiSelectComponent.prototype.tabIndex;
    /** @type {?} */
    FnMultiSelectComponent.prototype.groupBy;
    /** @type {?} */
    FnMultiSelectComponent.prototype.maxSelectedItems;
    /** @type {?} */
    FnMultiSelectComponent.prototype.changeEvent;
    /** @type {?} */
    FnMultiSelectComponent.prototype.closeEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L3NlbGVjdC9tdWx0aS9mbi1tdWx0aS1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRW5EO0lBYTRDLGtEQUE0QjtJQUV0RTtRQUFBLFlBQ0UsaUJBQU8sU0FDUjtRQUVRLFVBQUksR0FBRyxFQUFFLENBQUM7UUFDVixRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZ0JBQVUsR0FBZSxFQUFFLENBQUM7UUFDNUIsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixzQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFFcEIsaUJBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRCxnQkFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztJQWhCN0QsQ0FBQzs7OztJQWtCRCx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELDBDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25ELENBQUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsaW5DQUE2QztvQkFFN0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsRUFBQzs0QkFDckQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7O2lCQUNGOzs7Ozt1QkFPRSxLQUFLO3FCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUNBQ0wsS0FBSzs4QkFFTCxNQUFNOzZCQUNOLE1BQU07O0lBU1QsNkJBQUM7Q0FBQSxBQTFDRCxDQWE0QyxvQkFBb0IsR0E2Qi9EO1NBN0JZLHNCQUFzQjs7O0lBTWpDLHNDQUFtQjs7SUFDbkIsb0NBQWlCOztJQUNqQiw0Q0FBNEI7O0lBQzVCLDRDQUEyQjs7SUFDM0IsNENBQXFDOztJQUNyQywwQ0FBdUI7O0lBQ3ZCLDZDQUEwQjs7SUFDMUIsNENBQTRCOztJQUM1Qiw0Q0FBeUI7O0lBQ3pCLDBDQUFzQjs7SUFDdEIseUNBQXlCOztJQUN6QixrREFBOEI7O0lBRTlCLDZDQUE4RDs7SUFDOUQsNENBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtGbklucHV0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi4vLi4vLi4vY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZuLW11bHRpLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdmbi1tdWx0aS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydmbi1tdWx0aS1zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm5NdWx0aVNlbGVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5NdWx0aVNlbGVjdENvbXBvbmVudCBleHRlbmRzIEZuSW5wdXRWYWx1ZUFjY2Vzc29yPHN0cmluZz4gaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBuYW1lID0gJyc7XHJcbiAgQElucHV0KCkgaWQgPSAnJztcclxuICBASW5wdXQoKSBpc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXNFcnJvckJveCA9IHRydWU7XHJcbiAgQElucHV0KCkgb3B0aW9uTGlzdDogQXJyYXk8YW55PiA9IFtdO1xyXG4gIEBJbnB1dCgpIGxhYmVsS2V5ID0gJyc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcclxuICBASW5wdXQoKSBpc1JlcXVpcmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcGFyZW50Rm9ybTogYW55O1xyXG4gIEBJbnB1dCgpIHRhYkluZGV4ID0gMDtcclxuICBASW5wdXQoKSBncm91cEJ5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWF4U2VsZWN0ZWRJdGVtcyA9IDA7XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFuZ2VFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNsb3NlRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0T3B0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb24oKSB7XHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlciB8fCB0aGlzLm5hbWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==