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
        _this.isErrorBox = true;
        _this.optionList = [];
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
                    template: "<ng-container>\r\n  <ng-container *ngIf=\"!groupBy\">\r\n    <ng-select [items]=\"optionList\" [multiple]=\"true\" [maxSelectedItems]=\"\" [bindLabel]=\"labelKey\" [(ngModel)]=\"value\"\r\n      [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\" (change)=\"changeEvent.emit($event)\">\r\n    </ng-select>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"groupBy\">\r\n\r\n    <ng-select [items]=\"optionList\" [multiple]=\"true\" [groupBy]=\"groupBy\" [maxSelectedItems]=\"\" [bindLabel]=\"labelKey\"\r\n      [(ngModel)]=\"value\" [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\" (change)=\"changeEvent.emit($event)\">\r\n\r\n      <ng-template ng-optgroup-tmp let-item=\"item\">\r\n        {{item[groupBy] || 'Unnamed group'}}\r\n      </ng-template>\r\n    </ng-select>\r\n  </ng-container>\r\n</ng-container>\r\n\r\n\r\n<ng-container *ngIf=\"parentForm\">\r\n  <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\"\r\n    [tabIndex]=\"tabIndex\">\r\n  </fn-input-error>\r\n</ng-container>\r\n",
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
                    styles: [""]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L3NlbGVjdC9tdWx0aS9mbi1tdWx0aS1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDOUcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJEO0lBYTRDLGtEQUE0QjtJQUVwRTtRQUFBLFlBQWdCLGlCQUFPLFNBQUc7UUFLakIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZ0JBQVUsR0FBZSxFQUFFLENBQUM7UUFHNUIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUViLHNCQUFnQixHQUFHLENBQUMsQ0FBQztRQUVwQixpQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BELGdCQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7O0lBaEJwQyxDQUFDOzs7O0lBa0IxQix5Q0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELDBDQUFTOzs7SUFBVDtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JELENBQUM7O2dCQXZDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsK2pDQUE2QztvQkFFN0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFNBQVMsRUFBRTt3QkFDUDs0QkFDSSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsRUFBQzs0QkFDckQsS0FBSyxFQUFFLElBQUk7eUJBQ2Q7cUJBQ0o7O2lCQUNKOzs7Ozt1QkFLSSxLQUFLO3FCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUNBQ0wsS0FBSzs4QkFFTCxNQUFNOzZCQUNOLE1BQU07O0lBU1gsNkJBQUM7Q0FBQSxBQXhDRCxDQWE0QyxvQkFBb0IsR0EyQi9EO1NBM0JZLHNCQUFzQjs7O0lBSS9CLHNDQUFzQjs7SUFDdEIsb0NBQW9COztJQUNwQiw0Q0FBNkI7O0lBQzdCLDRDQUEyQjs7SUFDM0IsNENBQXFDOztJQUNyQywwQ0FBMEI7O0lBQzFCLDZDQUE2Qjs7SUFDN0IsNENBQTRCOztJQUM1Qiw0Q0FBeUI7O0lBQ3pCLDBDQUFzQjs7SUFDdEIseUNBQXlCOztJQUN6QixrREFBOEI7O0lBRTlCLDZDQUE4RDs7SUFDOUQsNENBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZuSW5wdXRWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZm4tbXVsdGktc2VsZWN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnZm4tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydmbi1tdWx0aS1zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGbk11bHRpU2VsZWN0Q29tcG9uZW50KSxcclxuICAgICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbk11bHRpU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgRm5JbnB1dFZhbHVlQWNjZXNzb3I8c3RyaW5nPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIGlzRXJyb3JCb3ggPSB0cnVlO1xyXG4gICAgQElucHV0KCkgb3B0aW9uTGlzdDogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgQElucHV0KCkgbGFiZWxLZXk6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBpc1JlcXVpcmVkID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBwYXJlbnRGb3JtOiBhbnk7XHJcbiAgICBASW5wdXQoKSB0YWJJbmRleCA9IDA7XHJcbiAgICBASW5wdXQoKSBncm91cEJ5OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBtYXhTZWxlY3RlZEl0ZW1zID0gMDtcclxuXHJcbiAgICBAT3V0cHV0KCkgY2hhbmdlRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGNsb3NlRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3B0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyIHx8IHRoaXMubmFtZTtcclxuICAgIH1cclxufVxyXG4iXX0=