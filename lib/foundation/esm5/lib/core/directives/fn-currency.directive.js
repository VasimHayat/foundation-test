/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModel } from '@angular/forms';
import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { FnNumberDirective } from './fn-number.directive';
var FnCurrencyDirective = /** @class */ (function (_super) {
    tslib_1.__extends(FnCurrencyDirective, _super);
    // isValidDot(key, val) {
    //     return ((key == '.') && val.toString().indexOf('.') === -1)
    // }
    function FnCurrencyDirective(model, elementRef) {
        var _this = _super.call(this, model, elementRef) || this;
        _this.format = '$';
        _this.whiteSpace = ' ';
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    FnCurrencyDirective.prototype.handleKeyboardEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // return this.isDigit(event.key) || this.isValidDot(event.key, event.target.value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FnCurrencyDirective.prototype.onBlur = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value.length === 1 && value.toString().indexOf('.') === 0) {
            this.model.update.emit('');
        }
        else if (this.model.valid && value !== '') {
            this.model.valueAccessor.writeValue(this.format + this.whiteSpace + String(parseFloat(value).toFixed(2)));
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FnCurrencyDirective.prototype.onFocus = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.model.valid && value !== '') {
            this.model.valueAccessor.writeValue(String(parseFloat(value.replace(this.format, '').replace(this.whiteSpace, ''))));
        }
    };
    FnCurrencyDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[fnCurrencyDirective]',
                    providers: [NgModel]
                },] }
    ];
    /** @nocollapse */
    FnCurrencyDirective.ctorParameters = function () { return [
        { type: NgModel },
        { type: ElementRef }
    ]; };
    FnCurrencyDirective.propDecorators = {
        format: [{ type: Input }],
        handleKeyboardEvent: [{ type: HostListener, args: ['keypress', ['$event'],] }],
        onBlur: [{ type: HostListener, args: ['blur', ['$event.target.value'],] }],
        onFocus: [{ type: HostListener, args: ['focus', ['$event.target.value'],] }]
    };
    return FnCurrencyDirective;
}(FnNumberDirective));
export { FnCurrencyDirective };
if (false) {
    /** @type {?} */
    FnCurrencyDirective.prototype.format;
    /**
     * @type {?}
     * @private
     */
    FnCurrencyDirective.prototype.whiteSpace;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY3VycmVuY3kuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2RpcmVjdGl2ZXMvZm4tY3VycmVuY3kuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHMUQ7SUFJeUMsK0NBQWlCO0lBdUJ0RCx5QkFBeUI7SUFDekIsa0VBQWtFO0lBQ2xFLElBQUk7SUFFSiw2QkFBWSxLQUFjLEVBQUUsVUFBc0I7UUFBbEQsWUFDSSxrQkFBTSxLQUFLLEVBQUUsVUFBVSxDQUFDLFNBQzNCO1FBM0JRLFlBQU0sR0FBRyxHQUFHLENBQUM7UUFDZCxnQkFBVSxHQUFHLEdBQUcsQ0FBQzs7SUEwQnpCLENBQUM7Ozs7O0lBdEJELGlEQUFtQjs7OztJQURuQixVQUNvQixLQUFVO1FBQzFCLG9GQUFvRjtJQUN4RixDQUFDOzs7OztJQUU4QyxvQ0FBTTs7OztJQUFyRCxVQUFzRCxLQUFVO1FBQzVELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlCO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdHO0lBQ0wsQ0FBQzs7Ozs7SUFDK0MscUNBQU87Ozs7SUFBdkQsVUFBd0QsS0FBVTtRQUM5RCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hIO0lBQ0wsQ0FBQzs7Z0JBMUJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7aUJBQ3ZCOzs7O2dCQVJRLE9BQU87Z0JBQ3lCLFVBQVU7Ozt5QkFVOUMsS0FBSztzQ0FJTCxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQUtuQyxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMscUJBQXFCLENBQUM7MEJBTzVDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzs7SUFhbEQsMEJBQUM7Q0FBQSxBQW5DRCxDQUl5QyxpQkFBaUIsR0ErQnpEO1NBL0JZLG1CQUFtQjs7O0lBRTVCLHFDQUFzQjs7Ozs7SUFDdEIseUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZuTnVtYmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9mbi1udW1iZXIuZGlyZWN0aXZlJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2ZuQ3VycmVuY3lEaXJlY3RpdmVdJyxcclxuICAgIHByb3ZpZGVyczogW05nTW9kZWxdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbkN1cnJlbmN5RGlyZWN0aXZlIGV4dGVuZHMgRm5OdW1iZXJEaXJlY3RpdmUge1xyXG5cclxuICAgIEBJbnB1dCgpIGZvcm1hdCA9ICckJztcclxuICAgIHByaXZhdGUgd2hpdGVTcGFjZSA9ICcgJztcclxuXHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5cHJlc3MnLCBbJyRldmVudCddKVxyXG4gICAgaGFuZGxlS2V5Ym9hcmRFdmVudChldmVudDogYW55KSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuaXNEaWdpdChldmVudC5rZXkpIHx8IHRoaXMuaXNWYWxpZERvdChldmVudC5rZXksIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50LnRhcmdldC52YWx1ZSddKSBvbkJsdXIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEgJiYgdmFsdWUudG9TdHJpbmcoKS5pbmRleE9mKCcuJykgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC51cGRhdGUuZW1pdCgnJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGVsLnZhbGlkICYmIHZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSh0aGlzLmZvcm1hdCArIHRoaXMud2hpdGVTcGFjZSArIFN0cmluZyhwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSkgb25Gb2N1cyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwudmFsaWQgJiYgdmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlKFN0cmluZyhwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UodGhpcy5mb3JtYXQsICcnKS5yZXBsYWNlKHRoaXMud2hpdGVTcGFjZSwgJycpKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGlzVmFsaWREb3Qoa2V5LCB2YWwpIHtcclxuICAgIC8vICAgICByZXR1cm4gKChrZXkgPT0gJy4nKSAmJiB2YWwudG9TdHJpbmcoKS5pbmRleE9mKCcuJykgPT09IC0xKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vZGVsOiBOZ01vZGVsLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICAgICAgc3VwZXIobW9kZWwsIGVsZW1lbnRSZWYpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=