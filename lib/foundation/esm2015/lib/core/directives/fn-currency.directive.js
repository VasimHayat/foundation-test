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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY3VycmVuY3kuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2RpcmVjdGl2ZXMvZm4tY3VycmVuY3kuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU8xRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsaUJBQWlCOzs7Ozs7OztJQTJCdEQsWUFBWSxLQUFjLEVBQUUsVUFBc0I7UUFDOUMsS0FBSyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQTFCcEIsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNkLGVBQVUsR0FBRyxHQUFHLENBQUM7SUEwQnpCLENBQUM7Ozs7O0lBdEJELG1CQUFtQixDQUFDLEtBQVU7UUFDMUIsb0ZBQW9GO0lBQ3hGLENBQUM7Ozs7O0lBRThDLE1BQU0sQ0FBQyxLQUFVO1FBQzVELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlCO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdHO0lBQ0wsQ0FBQzs7Ozs7SUFDK0MsT0FBTyxDQUFDLEtBQVU7UUFDOUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4SDtJQUNMLENBQUM7OztZQTFCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO2FBQ3ZCOzs7O1lBUlEsT0FBTztZQUN5QixVQUFVOzs7cUJBVTlDLEtBQUs7a0NBSUwsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQztxQkFLbkMsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLHFCQUFxQixDQUFDO3NCQU81QyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7Ozs7SUFoQjlDLHFDQUFzQjs7Ozs7SUFDdEIseUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZuTnVtYmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9mbi1udW1iZXIuZGlyZWN0aXZlJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2ZuQ3VycmVuY3lEaXJlY3RpdmVdJyxcclxuICAgIHByb3ZpZGVyczogW05nTW9kZWxdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbkN1cnJlbmN5RGlyZWN0aXZlIGV4dGVuZHMgRm5OdW1iZXJEaXJlY3RpdmUge1xyXG5cclxuICAgIEBJbnB1dCgpIGZvcm1hdCA9ICckJztcclxuICAgIHByaXZhdGUgd2hpdGVTcGFjZSA9ICcgJztcclxuXHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5cHJlc3MnLCBbJyRldmVudCddKVxyXG4gICAgaGFuZGxlS2V5Ym9hcmRFdmVudChldmVudDogYW55KSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuaXNEaWdpdChldmVudC5rZXkpIHx8IHRoaXMuaXNWYWxpZERvdChldmVudC5rZXksIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50LnRhcmdldC52YWx1ZSddKSBvbkJsdXIodmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEgJiYgdmFsdWUudG9TdHJpbmcoKS5pbmRleE9mKCcuJykgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC51cGRhdGUuZW1pdCgnJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGVsLnZhbGlkICYmIHZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSh0aGlzLmZvcm1hdCArIHRoaXMud2hpdGVTcGFjZSArIFN0cmluZyhwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSkgb25Gb2N1cyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwudmFsaWQgJiYgdmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlKFN0cmluZyhwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UodGhpcy5mb3JtYXQsICcnKS5yZXBsYWNlKHRoaXMud2hpdGVTcGFjZSwgJycpKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGlzVmFsaWREb3Qoa2V5LCB2YWwpIHtcclxuICAgIC8vICAgICByZXR1cm4gKChrZXkgPT0gJy4nKSAmJiB2YWwudG9TdHJpbmcoKS5pbmRleE9mKCcuJykgPT09IC0xKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vZGVsOiBOZ01vZGVsLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICAgICAgc3VwZXIobW9kZWwsIGVsZW1lbnRSZWYpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=