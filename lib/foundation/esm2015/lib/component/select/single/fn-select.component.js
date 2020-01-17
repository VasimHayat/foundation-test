/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FnInputValueAccessor } from '../../../core';
export class FnSelectComponent extends FnInputValueAccessor {
    constructor() {
        super();
        this.name = '';
        this.id = '';
        this.isDisabled = false;
        this.isErrorBox = true;
        this.optionList = [];
        this.labelKey = '';
        this.inputKey = '';
        this.placeholder = '';
        this.isRequired = false;
        this.tabIndex = 0;
        this.groupBy = '';
        this.changeEvent = new EventEmitter();
        this.closeEvent = new EventEmitter();
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
                        () => FnSelectComponent)),
                        multi: true
                    }
                ],
                styles: [""]
            }] }
];
/** @nocollapse */
FnSelectComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L3NlbGVjdC9zaW5nbGUvZm4tc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBZW5ELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxvQkFBNEI7SUFFakU7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUdELFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixPQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGVBQVUsR0FBZSxFQUFFLENBQUM7UUFDNUIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBRVosZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFoQjdELENBQUM7Ozs7SUFrQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25ELENBQUM7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLCswQ0FBdUM7Z0JBRXZDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBQzt3QkFDaEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O2FBQ0Y7Ozs7O21CQU9FLEtBQUs7aUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUVMLE1BQU07eUJBQ04sTUFBTTs7OztJQWRQLGlDQUFtQjs7SUFDbkIsK0JBQWlCOztJQUNqQix1Q0FBNEI7O0lBQzVCLHVDQUEyQjs7SUFDM0IsdUNBQXFDOztJQUNyQyxxQ0FBdUI7O0lBQ3ZCLHFDQUF1Qjs7SUFDdkIsd0NBQTBCOztJQUMxQix1Q0FBNEI7O0lBQzVCLHVDQUF5Qjs7SUFDekIscUNBQXNCOztJQUN0QixvQ0FBc0I7O0lBRXRCLHdDQUE4RDs7SUFDOUQsdUNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtGbklucHV0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi4vLi4vLi4vY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZuLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdmbi1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydmbi1zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm5TZWxlY3RDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZuU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgRm5JbnB1dFZhbHVlQWNjZXNzb3I8c3RyaW5nPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIG5hbWUgPSAnJztcclxuICBASW5wdXQoKSBpZCA9ICcnO1xyXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBpc0Vycm9yQm94ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBvcHRpb25MaXN0OiBBcnJheTxhbnk+ID0gW107XHJcbiAgQElucHV0KCkgbGFiZWxLZXkgPSAnJztcclxuICBASW5wdXQoKSBpbnB1dEtleSA9ICcnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XHJcbiAgQElucHV0KCkgaXNSZXF1aXJlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHBhcmVudEZvcm06IGFueTtcclxuICBASW5wdXQoKSB0YWJJbmRleCA9IDA7XHJcbiAgQElucHV0KCkgZ3JvdXBCeSA9ICcnO1xyXG5cclxuICBAT3V0cHV0KCkgY2hhbmdlRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBjbG9zZUV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldE9wdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9uKCkge1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXIgfHwgdGhpcy5uYW1lO1xyXG4gIH1cclxufVxyXG4iXX0=