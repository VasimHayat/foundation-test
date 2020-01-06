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
        this.isErrorBox = true;
        this.optionList = [];
        this.isRequired = false;
        this.tabIndex = 0;
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
                template: "<ng-container *ngIf=\"labelKey\">\r\n  <ng-container *ngIf=\"!groupBy\">\r\n    <ng-select [items]=\"optionList\" [bindLabel]=\"labelKey\" [bindValue]=\"inputKey\" [(ngModel)]=\"value\"\r\n      [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\" (change)=\"changeEvent.emit($event)\">\r\n    </ng-select>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"groupBy\">\r\n\r\n    <ng-select [items]=\"optionList\" [bindLabel]=\"labelKey\" [bindValue]=\"inputKey\" [groupBy]=\"groupBy\"\r\n      [(ngModel)]=\"value\" [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\" (change)=\"changeEvent.emit($event)\">\r\n      <ng-template ng-optgroup-tmp let-item=\"item\">\r\n        {{item[groupBy] || 'Unnamed group'}}\r\n      </ng-template>\r\n    </ng-select>\r\n  </ng-container>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"!labelKey\">\r\n  <ng-select [items]=\"optionList\" [(ngModel)]=\"value\" [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\"\r\n    (change)=\"changeEvent.emit($event)\">\r\n  </ng-select>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"parentForm\">\r\n  <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\"\r\n    [tabIndex]=\"tabIndex\">\r\n  </fn-input-error>\r\n</ng-container>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L3NlbGVjdC9zaWdubGUvZm4tc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDOUcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZXJELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxvQkFBNEI7SUFFL0Q7UUFBZ0IsS0FBSyxFQUFFLENBQUM7UUFLZixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGVBQVUsR0FBZSxFQUFFLENBQUM7UUFJNUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBR1osZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFoQnBDLENBQUM7Ozs7SUFrQjFCLFFBQVE7UUFDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFNBQVM7UUFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyRCxDQUFDOzs7WUF2Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixveENBQXVDO2dCQUV2QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFFO29CQUNQO3dCQUNJLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUM7d0JBQ2hELEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUNKOzthQUNKOzs7OzttQkFLSSxLQUFLO2lCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzswQkFFTCxNQUFNO3lCQUNOLE1BQU07Ozs7SUFkUCxpQ0FBc0I7O0lBQ3RCLCtCQUFvQjs7SUFDcEIsdUNBQTZCOztJQUM3Qix1Q0FBMkI7O0lBQzNCLHVDQUFxQzs7SUFDckMscUNBQTBCOztJQUMxQixxQ0FBMEI7O0lBQzFCLHdDQUE2Qjs7SUFDN0IsdUNBQTRCOztJQUM1Qix1Q0FBeUI7O0lBQ3pCLHFDQUFzQjs7SUFDdEIsb0NBQXlCOztJQUV6Qix3Q0FBOEQ7O0lBQzlELHVDQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGbklucHV0VmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZuLXNlbGVjdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2ZuLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnZm4tc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm5TZWxlY3RDb21wb25lbnQpLFxyXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZuU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgRm5JbnB1dFZhbHVlQWNjZXNzb3I8c3RyaW5nPiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cclxuXHJcbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIGlzRXJyb3JCb3ggPSB0cnVlO1xyXG4gICAgQElucHV0KCkgb3B0aW9uTGlzdDogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgQElucHV0KCkgbGFiZWxLZXk6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGlucHV0S2V5OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgaXNSZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcGFyZW50Rm9ybTogYW55O1xyXG4gICAgQElucHV0KCkgdGFiSW5kZXggPSAwO1xyXG4gICAgQElucHV0KCkgZ3JvdXBCeTogc3RyaW5nO1xyXG5cclxuICAgIEBPdXRwdXQoKSBjaGFuZ2VFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgY2xvc2VFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRPcHRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPcHRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXIgfHwgdGhpcy5uYW1lO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==