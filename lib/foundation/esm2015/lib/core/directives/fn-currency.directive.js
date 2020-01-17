/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModel } from '@angular/forms';
import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { FnNumberDirective } from './fn-number.directive';
export class FnCurrencyDirective extends FnNumberDirective {
    // isValidDot(key, val) {
    //     return ((key == '.') && val.toString().indexOf('.') === -1)
    // }
    /**
     * @param {?} model
     * @param {?} elementRef
     */
    constructor(model, elementRef) {
        super(model, elementRef);
        this.format = '$';
        this.whiteSpace = ' ';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleKeyboardEvent(event) {
        // return this.isDigit(event.key) || this.isValidDot(event.key, event.target.value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onBlur(value) {
        if (value.length === 1 && value.toString().indexOf('.') === 0) {
            this.model.update.emit('');
        }
        else if (this.model.valid && value !== '') {
            this.model.valueAccessor.writeValue(this.format + this.whiteSpace + String(parseFloat(value).toFixed(2)));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onFocus(value) {
        if (this.model.valid && value !== '') {
            this.model.valueAccessor.writeValue(String(parseFloat(value.replace(this.format, '').replace(this.whiteSpace, ''))));
        }
    }
}
FnCurrencyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fnCurrencyDirective]',
                providers: [NgModel]
            },] }
];
/** @nocollapse */
FnCurrencyDirective.ctorParameters = () => [
    { type: NgModel },
    { type: ElementRef }
];
FnCurrencyDirective.propDecorators = {
    format: [{ type: Input }],
    handleKeyboardEvent: [{ type: HostListener, args: ['keypress', ['$event'],] }],
    onBlur: [{ type: HostListener, args: ['blur', ['$event.target.value'],] }],
    onFocus: [{ type: HostListener, args: ['focus', ['$event.target.value'],] }]
};
if (false) {
    /** @type {?} */
    FnCurrencyDirective.prototype.format;
    /**
     * @type {?}
     * @private
     */
    FnCurrencyDirective.prototype.whiteSpace;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY3VycmVuY3kuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2RpcmVjdGl2ZXMvZm4tY3VycmVuY3kuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQU94RCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsaUJBQWlCOzs7Ozs7OztJQTZCeEQsWUFBWSxLQUFjLEVBQUUsVUFBc0I7UUFDaEQsS0FBSyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQTVCbEIsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNkLGVBQVUsR0FBRyxHQUFHLENBQUM7SUE0QnpCLENBQUM7Ozs7O0lBeEJELG1CQUFtQixDQUFDLEtBQVU7UUFDNUIsb0ZBQW9GO0lBQ3RGLENBQUM7Ozs7O0lBRThDLE1BQU0sQ0FBQyxLQUFVO1FBQzlELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVCO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNHO0lBQ0gsQ0FBQzs7Ozs7SUFFK0MsT0FBTyxDQUFDLEtBQVU7UUFDaEUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0SDtJQUNILENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO2FBQ3JCOzs7O1lBUk8sT0FBTztZQUN5QixVQUFVOzs7cUJBVS9DLEtBQUs7a0NBSUwsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQztxQkFLbkMsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLHFCQUFxQixDQUFDO3NCQVE1QyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7Ozs7SUFqQjlDLHFDQUFzQjs7Ozs7SUFDdEIseUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZGVsfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGbk51bWJlckRpcmVjdGl2ZX0gZnJvbSAnLi9mbi1udW1iZXIuZGlyZWN0aXZlJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tmbkN1cnJlbmN5RGlyZWN0aXZlXScsXHJcbiAgcHJvdmlkZXJzOiBbTmdNb2RlbF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZuQ3VycmVuY3lEaXJlY3RpdmUgZXh0ZW5kcyBGbk51bWJlckRpcmVjdGl2ZSB7XHJcblxyXG4gIEBJbnB1dCgpIGZvcm1hdCA9ICckJztcclxuICBwcml2YXRlIHdoaXRlU3BhY2UgPSAnICc7XHJcblxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlwcmVzcycsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlS2V5Ym9hcmRFdmVudChldmVudDogYW55KSB7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5pc0RpZ2l0KGV2ZW50LmtleSkgfHwgdGhpcy5pc1ZhbGlkRG90KGV2ZW50LmtleSwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSkgb25CbHVyKHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEgJiYgdmFsdWUudG9TdHJpbmcoKS5pbmRleE9mKCcuJykgPT09IDApIHtcclxuICAgICAgdGhpcy5tb2RlbC51cGRhdGUuZW1pdCgnJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZWwudmFsaWQgJiYgdmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIHRoaXMubW9kZWwudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlKHRoaXMuZm9ybWF0ICsgdGhpcy53aGl0ZVNwYWNlICsgU3RyaW5nKHBhcnNlRmxvYXQodmFsdWUpLnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQudGFyZ2V0LnZhbHVlJ10pIG9uRm9jdXModmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMubW9kZWwudmFsaWQgJiYgdmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIHRoaXMubW9kZWwudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlKFN0cmluZyhwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UodGhpcy5mb3JtYXQsICcnKS5yZXBsYWNlKHRoaXMud2hpdGVTcGFjZSwgJycpKSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gaXNWYWxpZERvdChrZXksIHZhbCkge1xyXG4gIC8vICAgICByZXR1cm4gKChrZXkgPT0gJy4nKSAmJiB2YWwudG9TdHJpbmcoKS5pbmRleE9mKCcuJykgPT09IC0xKVxyXG4gIC8vIH1cclxuXHJcbiAgY29uc3RydWN0b3IobW9kZWw6IE5nTW9kZWwsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHN1cGVyKG1vZGVsLCBlbGVtZW50UmVmKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==