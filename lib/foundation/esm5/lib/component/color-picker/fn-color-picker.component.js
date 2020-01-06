/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ViewEncapsulation, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FnInputValueAccessor } from '../../core/model/fn-input.value.accessor';
var FnColorPickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FnColorPickerComponent, _super);
    function FnColorPickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDisable = false;
        _this.isDisableInput = true;
        _this.showOkBtn = true;
        _this.showCancelBtn = true;
        _this.okButtonClass = "btn btn-primary btn-xs";
        _this.cancelButtonClass = "btn btn-danger btn-xs";
        _this.isSaveClkOutside = false;
        _this.outputFormat = "hex";
        _this.onChangeColor = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FnColorPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.okButtonClass = this.okButtonClass + " ok-button";
        this.cancelButtonClass = this.cancelButtonClass + " cancel-button";
    };
    /**
     * @param {?} colorCode
     * @return {?}
     */
    FnColorPickerComponent.prototype.changeColor = /**
     * @param {?} colorCode
     * @return {?}
     */
    function (colorCode) {
        this.value = colorCode;
        this.onChangeColor.emit(colorCode);
    };
    FnColorPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-color-picker',
                    template: " <input class=\"fn-color-picker-border\" [colorPicker]=\"value\" [cpDisabled]=\"isDisable\" [style.background]=\"value\"\r\n   [cpOKButton]=\"showOkBtn\" [cpCancelButton]=\"showCancelBtn\" (colorPickerSelect)=\"changeColor($event)\"\r\n   [cpOutputFormat]=\"outputFormat\" [cpSaveClickOutside]=\"isSaveClkOutside\" [cpDisableInput]=\"isDisableInput\"\r\n   [cpOKButtonClass]=\"okButtonClass\" [cpCancelButtonClass]=\"cancelButtonClass\" />\r\n {{value}}\r\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return FnColorPickerComponent; })),
                            multi: true
                        }
                    ],
                    encapsulation: ViewEncapsulation.None,
                    styles: [".fn-color-picker-border{border:1px dotted #000;height:19px;width:19px;cursor:pointer}:host ::ng-deep .cancel-button{float:left;border-radius:5px}:host ::ng-deep .ok-button{float:right;border-radius:5px}"]
                }] }
    ];
    FnColorPickerComponent.propDecorators = {
        isDisable: [{ type: Input }],
        isDisableInput: [{ type: Input }],
        showOkBtn: [{ type: Input }],
        showCancelBtn: [{ type: Input }],
        okButtonClass: [{ type: Input }],
        cancelButtonClass: [{ type: Input }],
        isSaveClkOutside: [{ type: Input }],
        outputFormat: [{ type: Input }],
        onChangeColor: [{ type: Output }]
    };
    return FnColorPickerComponent;
}(FnInputValueAccessor));
export { FnColorPickerComponent };
if (false) {
    /** @type {?} */
    FnColorPickerComponent.prototype.isDisable;
    /** @type {?} */
    FnColorPickerComponent.prototype.isDisableInput;
    /** @type {?} */
    FnColorPickerComponent.prototype.showOkBtn;
    /** @type {?} */
    FnColorPickerComponent.prototype.showCancelBtn;
    /** @type {?} */
    FnColorPickerComponent.prototype.okButtonClass;
    /** @type {?} */
    FnColorPickerComponent.prototype.cancelButtonClass;
    /** @type {?} */
    FnColorPickerComponent.prototype.isSaveClkOutside;
    /** @type {?} */
    FnColorPickerComponent.prototype.outputFormat;
    /** @type {?} */
    FnColorPickerComponent.prototype.onChangeColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2NvbG9yLXBpY2tlci9mbi1jb2xvci1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFaEY7SUFhNEMsa0RBQXlCO0lBYnJFO1FBQUEscUVBbUNDO1FBbkJVLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixtQkFBYSxHQUFHLHdCQUF3QixDQUFDO1FBQ3pDLHVCQUFpQixHQUFHLHVCQUF1QixDQUFDO1FBQzVDLHNCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixrQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQixtQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDOztJQVdyRSxDQUFDOzs7O0lBVEMseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUN2RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO0lBQ3JFLENBQUM7Ozs7O0lBRUQsNENBQVc7Ozs7SUFBWCxVQUFZLFNBQWlCO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IscWRBQTZDO29CQUU3QyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsc0JBQXNCLEVBQXRCLENBQXNCLEVBQUM7NEJBQ3JELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs0QkFJRSxLQUFLO2lDQUNMLEtBQUs7NEJBQ0wsS0FBSztnQ0FDTCxLQUFLO2dDQUNMLEtBQUs7b0NBQ0wsS0FBSzttQ0FDTCxLQUFLOytCQUNMLEtBQUs7Z0NBQ0wsTUFBTTs7SUFXVCw2QkFBQztDQUFBLEFBbkNELENBYTRDLG9CQUFvQixHQXNCL0Q7U0F0Qlksc0JBQXNCOzs7SUFHakMsMkNBQTJCOztJQUMzQixnREFBK0I7O0lBQy9CLDJDQUEwQjs7SUFDMUIsK0NBQThCOztJQUM5QiwrQ0FBa0Q7O0lBQ2xELG1EQUFxRDs7SUFDckQsa0RBQWtDOztJQUNsQyw4Q0FBOEI7O0lBQzlCLCtDQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZuSW5wdXRWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vY29yZS9tb2RlbC9mbi1pbnB1dC52YWx1ZS5hY2Nlc3Nvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZuLWNvbG9yLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnZm4tY29sb3ItcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZuLWNvbG9yLXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZuQ29sb3JQaWNrZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRm5Db2xvclBpY2tlckNvbXBvbmVudCBleHRlbmRzIEZuSW5wdXRWYWx1ZUFjY2Vzc29yPGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgQElucHV0KCkgaXNEaXNhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzRGlzYWJsZUlucHV0ID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd09rQnRuID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd0NhbmNlbEJ0biA9IHRydWU7XG4gIEBJbnB1dCgpIG9rQnV0dG9uQ2xhc3MgPSBcImJ0biBidG4tcHJpbWFyeSBidG4teHNcIjtcbiAgQElucHV0KCkgY2FuY2VsQnV0dG9uQ2xhc3MgPSBcImJ0biBidG4tZGFuZ2VyIGJ0bi14c1wiO1xuICBASW5wdXQoKSBpc1NhdmVDbGtPdXRzaWRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG91dHB1dEZvcm1hdCA9IFwiaGV4XCI7XG4gIEBPdXRwdXQoKSBvbkNoYW5nZUNvbG9yOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9rQnV0dG9uQ2xhc3MgPSB0aGlzLm9rQnV0dG9uQ2xhc3MgKyBcIiBvay1idXR0b25cIjtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbkNsYXNzID0gdGhpcy5jYW5jZWxCdXR0b25DbGFzcyArIFwiIGNhbmNlbC1idXR0b25cIjtcbiAgfVxuXG4gIGNoYW5nZUNvbG9yKGNvbG9yQ29kZTogc3RyaW5nKSB7XG4gICAgdGhpcy52YWx1ZSA9IGNvbG9yQ29kZTtcbiAgICB0aGlzLm9uQ2hhbmdlQ29sb3IuZW1pdChjb2xvckNvZGUpO1xuICB9XG59XG4iXX0=