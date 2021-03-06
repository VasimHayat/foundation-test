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
        _this.okButtonClass = 'btn btn-primary btn-xs';
        _this.cancelButtonClass = 'btn btn-danger btn-xs';
        _this.isSaveClkOutside = false;
        _this.outputFormat = 'hex';
        _this.changeColorCb = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FnColorPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.okButtonClass = this.okButtonClass + ' ok-button pull-right btn-round';
        this.cancelButtonClass = this.cancelButtonClass + ' cancel-button pull-left btn-round';
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
        this.changeColorCb.emit(colorCode);
    };
    FnColorPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-color-picker',
                    template: "<input class=\"fn-color-picker-border\" [colorPicker]=\"value\" [cpDisabled]=\"isDisable\" [style.background]=\"value\"\r\n  [cpOKButton]=\"showOkBtn\" [cpCancelButton]=\"showCancelBtn\" (colorPickerSelect)=\"changeColor($event)\"\r\n  [cpOutputFormat]=\"outputFormat\" [cpSaveClickOutside]=\"isSaveClkOutside\" [cpDisableInput]=\"isDisableInput\"\r\n  [cpOKButtonClass]=\"okButtonClass\" [cpCancelButtonClass]=\"cancelButtonClass\" />\r\n<span [style.color]=\"value\">{{value}}</span>\r\n",
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
                    styles: ["fn-color-picker input.fn-color-picker-border{height:19px;width:19px;cursor:pointer;border:none}fn-color-picker color-picker .color-picker{box-shadow:5px 5px 10px rgba(0,0,0,.1);border:none!important;border-radius:5px;z-index:1;padding:2px}fn-color-picker color-picker .color-picker .arrow.arrow-right-top{bottom:4px;border-width:6px 10px;border-color:transparent #fff transparent transparent}fn-color-picker color-picker .color-picker .arrow.arrow-right-bottom{top:4px;border-width:6px 10px;border-color:transparent #fff transparent transparent}fn-color-picker color-picker .color-picker .arrow.arrow-left-top{bottom:4px;right:-20px;border-width:6px 10px;border-color:transparent transparent transparent #fff}fn-color-picker color-picker .color-picker .arrow.arrow-left-bottom{top:4px;right:-20px;border-width:6px 10px;border-color:transparent transparent transparent #fff}fn-color-picker color-picker .color-picker .hue-alpha .left{padding:0}fn-color-picker color-picker .color-picker .hue-alpha .left .selected-color{top:0;left:0}fn-color-picker color-picker .color-picker .hue-alpha .right{padding:0 0 0 10px}fn-color-picker color-picker .color-picker .button-area{padding:0 9px 9px;text-align:inherit;float:left;width:100%}fn-color-picker color-picker .color-picker .button-area button{min-width:80px;padding:5px 10px}"]
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
        changeColorCb: [{ type: Output }]
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
    FnColorPickerComponent.prototype.changeColorCb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2NvbG9yLXBpY2tlci9mbi1jb2xvci1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFFOUU7SUFhNEMsa0RBQXlCO0lBYnJFO1FBQUEscUVBbUNDO1FBbkJVLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixtQkFBYSxHQUFHLHdCQUF3QixDQUFDO1FBQ3pDLHVCQUFpQixHQUFHLHVCQUF1QixDQUFDO1FBQzVDLHNCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixrQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQixtQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDOztJQVdyRSxDQUFDOzs7O0lBVEMseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLGlDQUFpQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsb0NBQW9DLENBQUM7SUFDekYsQ0FBQzs7Ozs7SUFFRCw0Q0FBVzs7OztJQUFYLFVBQVksU0FBaUI7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Z0JBbENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixxZkFBNkM7b0JBRTdDLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsRUFBQzs0QkFDckQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OzRCQUlFLEtBQUs7aUNBQ0wsS0FBSzs0QkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSztvQ0FDTCxLQUFLO21DQUNMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxNQUFNOztJQVdULDZCQUFDO0NBQUEsQUFuQ0QsQ0FhNEMsb0JBQW9CLEdBc0IvRDtTQXRCWSxzQkFBc0I7OztJQUdqQywyQ0FBMkI7O0lBQzNCLGdEQUErQjs7SUFDL0IsMkNBQTBCOztJQUMxQiwrQ0FBOEI7O0lBQzlCLCtDQUFrRDs7SUFDbEQsbURBQXFEOztJQUNyRCxrREFBa0M7O0lBQ2xDLDhDQUE4Qjs7SUFDOUIsK0NBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0ZuSW5wdXRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi8uLi9jb3JlL21vZGVsL2ZuLWlucHV0LnZhbHVlLmFjY2Vzc29yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm4tY29sb3ItcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICdmbi1jb2xvci1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm4tY29sb3ItcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm5Db2xvclBpY2tlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGbkNvbG9yUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRm5JbnB1dFZhbHVlQWNjZXNzb3I8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBASW5wdXQoKSBpc0Rpc2FibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgaXNEaXNhYmxlSW5wdXQgPSB0cnVlO1xuICBASW5wdXQoKSBzaG93T2tCdG4gPSB0cnVlO1xuICBASW5wdXQoKSBzaG93Q2FuY2VsQnRuID0gdHJ1ZTtcbiAgQElucHV0KCkgb2tCdXR0b25DbGFzcyA9ICdidG4gYnRuLXByaW1hcnkgYnRuLXhzJztcbiAgQElucHV0KCkgY2FuY2VsQnV0dG9uQ2xhc3MgPSAnYnRuIGJ0bi1kYW5nZXIgYnRuLXhzJztcbiAgQElucHV0KCkgaXNTYXZlQ2xrT3V0c2lkZSA9IGZhbHNlO1xuICBASW5wdXQoKSBvdXRwdXRGb3JtYXQgPSAnaGV4JztcbiAgQE91dHB1dCgpIGNoYW5nZUNvbG9yQ2I6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub2tCdXR0b25DbGFzcyA9IHRoaXMub2tCdXR0b25DbGFzcyArICcgb2stYnV0dG9uIHB1bGwtcmlnaHQgYnRuLXJvdW5kJztcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbkNsYXNzID0gdGhpcy5jYW5jZWxCdXR0b25DbGFzcyArICcgY2FuY2VsLWJ1dHRvbiBwdWxsLWxlZnQgYnRuLXJvdW5kJztcbiAgfVxuXG4gIGNoYW5nZUNvbG9yKGNvbG9yQ29kZTogc3RyaW5nKSB7XG4gICAgdGhpcy52YWx1ZSA9IGNvbG9yQ29kZTtcbiAgICB0aGlzLmNoYW5nZUNvbG9yQ2IuZW1pdChjb2xvckNvZGUpO1xuICB9XG59XG4iXX0=