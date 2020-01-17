/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FnInputValueAccessor } from '../../../core';
var FnSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FnSelectComponent, _super);
    function FnSelectComponent() {
        var _this = _super.call(this) || this;
        _this.name = '';
        _this.id = '';
        _this.isDisabled = false;
        _this.isErrorBox = true;
        _this.optionList = [];
        _this.labelKey = '';
        _this.inputKey = '';
        _this.placeholder = '';
        _this.isRequired = false;
        _this.tabIndex = 0;
        _this.groupBy = '';
        _this.changeEvent = new EventEmitter();
        _this.closeEvent = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FnSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setOption();
    };
    /**
     * @return {?}
     */
    FnSelectComponent.prototype.setOption = /**
     * @return {?}
     */
    function () {
        this.placeholder = this.placeholder || this.name;
    };
    FnSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-select',
                    template: "<ng-container *ngIf=\"labelKey\">\r\n  <ng-container *ngIf=\"!groupBy\">\r\n    <ng-select [items]=\"optionList\" [bindLabel]=\"labelKey\" [bindValue]=\"inputKey\" [(ngModel)]=\"value\"\r\n               [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\" (change)=\"changeEvent.emit($event)\">\r\n    </ng-select>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"groupBy\">\r\n\r\n    <ng-select [items]=\"optionList\" [bindLabel]=\"labelKey\" [bindValue]=\"inputKey\" [groupBy]=\"groupBy\"\r\n               [(ngModel)]=\"value\" [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\"\r\n               (change)=\"changeEvent.emit($event)\">\r\n      <ng-template ng-optgroup-tmp let-item=\"item\">\r\n        {{item[groupBy] || 'Unnamed group'}}\r\n      </ng-template>\r\n    </ng-select>\r\n  </ng-container>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"!labelKey\">\r\n  <ng-select [items]=\"optionList\" [(ngModel)]=\"value\" [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\"\r\n             (change)=\"changeEvent.emit($event)\">\r\n  </ng-select>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"parentForm\">\r\n  <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\"\r\n                  [tabIndex]=\"tabIndex\">\r\n  </fn-input-error>\r\n</ng-container>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return FnSelectComponent; })),
                            multi: true
                        }
                    ],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FnSelectComponent.ctorParameters = function () { return []; };
    FnSelectComponent.propDecorators = {
        name: [{ type: Input }],
        id: [{ type: Input }],
        isDisabled: [{ type: Input }],
        isErrorBox: [{ type: Input }],
        optionList: [{ type: Input }],
        labelKey: [{ type: Input }],
        inputKey: [{ type: Input }],
        placeholder: [{ type: Input }],
        isRequired: [{ type: Input }],
        parentForm: [{ type: Input }],
        tabIndex: [{ type: Input }],
        groupBy: [{ type: Input }],
        changeEvent: [{ type: Output }],
        closeEvent: [{ type: Output }]
    };
    return FnSelectComponent;
}(FnInputValueAccessor));
export { FnSelectComponent };
if (false) {
    /** @type {?} */
    FnSelectComponent.prototype.name;
    /** @type {?} */
    FnSelectComponent.prototype.id;
    /** @type {?} */
    FnSelectComponent.prototype.isDisabled;
    /** @type {?} */
    FnSelectComponent.prototype.isErrorBox;
    /** @type {?} */
    FnSelectComponent.prototype.optionList;
    /** @type {?} */
    FnSelectComponent.prototype.labelKey;
    /** @type {?} */
    FnSelectComponent.prototype.inputKey;
    /** @type {?} */
    FnSelectComponent.prototype.placeholder;
    /** @type {?} */
    FnSelectComponent.prototype.isRequired;
    /** @type {?} */
    FnSelectComponent.prototype.parentForm;
    /** @type {?} */
    FnSelectComponent.prototype.tabIndex;
    /** @type {?} */
    FnSelectComponent.prototype.groupBy;
    /** @type {?} */
    FnSelectComponent.prototype.changeEvent;
    /** @type {?} */
    FnSelectComponent.prototype.closeEvent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L3NlbGVjdC9zaW5nbGUvZm4tc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVuRDtJQWF1Qyw2Q0FBNEI7SUFFakU7UUFBQSxZQUNFLGlCQUFPLFNBQ1I7UUFFUSxVQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsUUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGdCQUFVLEdBQWUsRUFBRSxDQUFDO1FBQzVCLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxjQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFFWixpQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BELGdCQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7O0lBaEI3RCxDQUFDOzs7O0lBa0JELG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQscUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkQsQ0FBQzs7Z0JBekNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsKzBDQUF1QztvQkFFdkMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsRUFBQzs0QkFDaEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7O2lCQUNGOzs7Ozt1QkFPRSxLQUFLO3FCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFFTCxNQUFNOzZCQUNOLE1BQU07O0lBU1Qsd0JBQUM7Q0FBQSxBQTFDRCxDQWF1QyxvQkFBb0IsR0E2QjFEO1NBN0JZLGlCQUFpQjs7O0lBTTVCLGlDQUFtQjs7SUFDbkIsK0JBQWlCOztJQUNqQix1Q0FBNEI7O0lBQzVCLHVDQUEyQjs7SUFDM0IsdUNBQXFDOztJQUNyQyxxQ0FBdUI7O0lBQ3ZCLHFDQUF1Qjs7SUFDdkIsd0NBQTBCOztJQUMxQix1Q0FBNEI7O0lBQzVCLHVDQUF5Qjs7SUFDekIscUNBQXNCOztJQUN0QixvQ0FBc0I7O0lBRXRCLHdDQUE4RDs7SUFDOUQsdUNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtGbklucHV0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi4vLi4vLi4vY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZuLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdmbi1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydmbi1zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm5TZWxlY3RDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZuU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgRm5JbnB1dFZhbHVlQWNjZXNzb3I8c3RyaW5nPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG5hbWUgPSAnJztcclxuICBASW5wdXQoKSBpZCA9ICcnO1xyXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBpc0Vycm9yQm94ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBvcHRpb25MaXN0OiBBcnJheTxhbnk+ID0gW107XHJcbiAgQElucHV0KCkgbGFiZWxLZXkgPSAnJztcclxuICBASW5wdXQoKSBpbnB1dEtleSA9ICcnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XHJcbiAgQElucHV0KCkgaXNSZXF1aXJlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHBhcmVudEZvcm06IGFueTtcclxuICBASW5wdXQoKSB0YWJJbmRleCA9IDA7XHJcbiAgQElucHV0KCkgZ3JvdXBCeSA9ICcnO1xyXG5cclxuICBAT3V0cHV0KCkgY2hhbmdlRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBjbG9zZUV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldE9wdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9uKCkge1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXIgfHwgdGhpcy5uYW1lO1xyXG4gIH1cclxufVxyXG4iXX0=