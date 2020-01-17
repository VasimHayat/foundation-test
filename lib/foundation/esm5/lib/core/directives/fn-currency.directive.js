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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY3VycmVuY3kuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2RpcmVjdGl2ZXMvZm4tY3VycmVuY3kuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFHeEQ7SUFJeUMsK0NBQWlCO0lBeUJ4RCx5QkFBeUI7SUFDekIsa0VBQWtFO0lBQ2xFLElBQUk7SUFFSiw2QkFBWSxLQUFjLEVBQUUsVUFBc0I7UUFBbEQsWUFDRSxrQkFBTSxLQUFLLEVBQUUsVUFBVSxDQUFDLFNBQ3pCO1FBN0JRLFlBQU0sR0FBRyxHQUFHLENBQUM7UUFDZCxnQkFBVSxHQUFHLEdBQUcsQ0FBQzs7SUE0QnpCLENBQUM7Ozs7O0lBeEJELGlEQUFtQjs7OztJQURuQixVQUNvQixLQUFVO1FBQzVCLG9GQUFvRjtJQUN0RixDQUFDOzs7OztJQUU4QyxvQ0FBTTs7OztJQUFyRCxVQUFzRCxLQUFVO1FBQzlELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVCO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNHO0lBQ0gsQ0FBQzs7Ozs7SUFFK0MscUNBQU87Ozs7SUFBdkQsVUFBd0QsS0FBVTtRQUNoRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RIO0lBQ0gsQ0FBQzs7Z0JBM0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7aUJBQ3JCOzs7O2dCQVJPLE9BQU87Z0JBQ3lCLFVBQVU7Ozt5QkFVL0MsS0FBSztzQ0FJTCxZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQUtuQyxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMscUJBQXFCLENBQUM7MEJBUTVDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzs7SUFjaEQsMEJBQUM7Q0FBQSxBQXJDRCxDQUl5QyxpQkFBaUIsR0FpQ3pEO1NBakNZLG1CQUFtQjs7O0lBRTlCLHFDQUFzQjs7Ozs7SUFDdEIseUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZGVsfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGbk51bWJlckRpcmVjdGl2ZX0gZnJvbSAnLi9mbi1udW1iZXIuZGlyZWN0aXZlJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tmbkN1cnJlbmN5RGlyZWN0aXZlXScsXHJcbiAgcHJvdmlkZXJzOiBbTmdNb2RlbF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZuQ3VycmVuY3lEaXJlY3RpdmUgZXh0ZW5kcyBGbk51bWJlckRpcmVjdGl2ZSB7XHJcblxyXG4gIEBJbnB1dCgpIGZvcm1hdCA9ICckJztcclxuICBwcml2YXRlIHdoaXRlU3BhY2UgPSAnICc7XHJcblxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlwcmVzcycsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlS2V5Ym9hcmRFdmVudChldmVudDogYW55KSB7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5pc0RpZ2l0KGV2ZW50LmtleSkgfHwgdGhpcy5pc1ZhbGlkRG90KGV2ZW50LmtleSwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSkgb25CbHVyKHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEgJiYgdmFsdWUudG9TdHJpbmcoKS5pbmRleE9mKCcuJykgPT09IDApIHtcclxuICAgICAgdGhpcy5tb2RlbC51cGRhdGUuZW1pdCgnJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZWwudmFsaWQgJiYgdmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIHRoaXMubW9kZWwudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlKHRoaXMuZm9ybWF0ICsgdGhpcy53aGl0ZVNwYWNlICsgU3RyaW5nKHBhcnNlRmxvYXQodmFsdWUpLnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQudGFyZ2V0LnZhbHVlJ10pIG9uRm9jdXModmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMubW9kZWwudmFsaWQgJiYgdmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIHRoaXMubW9kZWwudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlKFN0cmluZyhwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UodGhpcy5mb3JtYXQsICcnKS5yZXBsYWNlKHRoaXMud2hpdGVTcGFjZSwgJycpKSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gaXNWYWxpZERvdChrZXksIHZhbCkge1xyXG4gIC8vICAgICByZXR1cm4gKChrZXkgPT0gJy4nKSAmJiB2YWwudG9TdHJpbmcoKS5pbmRleE9mKCcuJykgPT09IC0xKVxyXG4gIC8vIH1cclxuXHJcbiAgY29uc3RydWN0b3IobW9kZWw6IE5nTW9kZWwsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHN1cGVyKG1vZGVsLCBlbGVtZW50UmVmKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==