/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
export class FnInputValueAccessor {
    constructor() {
        this.isDisabled = false;
        this.propagateChange = (/**
         * @return {?}
         */
        () => {
        });
        this.propagateTouched = (/**
         * @return {?}
         */
        () => {
        });
    }
    /**
     * @return {?}
     */
    get value() {
        return this.innerValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this.innerValue !== value) {
            this.innerValue = value;
            this.propagateChange(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.innerValue = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.propagateTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnInputValueAccessor.prototype.innerValue;
    /** @type {?} */
    FnInputValueAccessor.prototype.isDisabled;
    /** @type {?} */
    FnInputValueAccessor.prototype.propagateChange;
    /** @type {?} */
    FnInputValueAccessor.prototype.propagateTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taW5wdXQudmFsdWUuYWNjZXNzb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbW9kZWwvZm4taW5wdXQudmFsdWUuYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNLE9BQWdCLG9CQUFvQjtJQUExQztRQUdTLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsb0JBQWU7OztRQUFRLEdBQUcsRUFBRTtRQUNuQyxDQUFDLEVBQUE7UUFFTSxxQkFBZ0I7OztRQUFRLEdBQUcsRUFBRTtRQUNwQyxDQUFDLEVBQUE7SUE4QkgsQ0FBQzs7OztJQTVCQyxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFRO1FBQ2hCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQVE7UUFFakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFzQjtRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7Q0FFRjs7Ozs7O0lBdENDLDBDQUFzQjs7SUFFdEIsMENBQTBCOztJQUUxQiwrQ0FDQzs7SUFFRCxnREFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGbklucHV0VmFsdWVBY2Nlc3NvcjxUPiBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBwcml2YXRlIGlubmVyVmFsdWU6IFQ7XHJcblxyXG4gIHB1YmxpYyBpc0Rpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBwcm9wYWdhdGVDaGFuZ2U6IGFueSA9ICgpID0+IHtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcm9wYWdhdGVUb3VjaGVkOiBhbnkgPSAoKSA9PiB7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKTogVCB7XHJcbiAgICByZXR1cm4gdGhpcy5pbm5lclZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBUKSB7XHJcbiAgICBpZiAodGhpcy5pbm5lclZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLmlubmVyVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogVCkge1xyXG5cclxuICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBUKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpIHtcclxuICAgIHRoaXMucHJvcGFnYXRlVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbn1cclxuIl19