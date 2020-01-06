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
        this.propagateChange = (/**
         * @return {?}
         */
        () => { });
        this.propagateTouched = (/**
         * @return {?}
         */
        () => { });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taW5wdXQudmFsdWUuYWNjZXNzb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbW9kZWwvZm4taW5wdXQudmFsdWUuYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNLE9BQWdCLG9CQUFvQjtJQUExQztRQUtTLG9CQUFlOzs7UUFBUSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUM7UUFFakMscUJBQWdCOzs7UUFBUSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUM7SUE4QjNDLENBQUM7Ozs7SUE1QkMsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBUTtRQUNoQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxFQUFFO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFRO1FBRWpCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBc0I7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFjO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0NBRUY7Ozs7OztJQXBDQywwQ0FBc0I7O0lBRXRCLDBDQUEyQjs7SUFFM0IsK0NBQXdDOztJQUV4QyxnREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGbklucHV0VmFsdWVBY2Nlc3NvcjxUPiBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBwcml2YXRlIGlubmVyVmFsdWU6IFQ7XHJcblxyXG4gIHB1YmxpYyBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgcHJvcGFnYXRlQ2hhbmdlOiBhbnkgPSAoKSA9PiB7IH07XHJcblxyXG4gIHB1YmxpYyBwcm9wYWdhdGVUb3VjaGVkOiBhbnkgPSAoKSA9PiB7IH07XHJcblxyXG4gIGdldCB2YWx1ZSgpOiBUIHtcclxuICAgIHJldHVybiB0aGlzLmlubmVyVmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodmFsdWU6IFQpIHtcclxuICAgIGlmICh0aGlzLmlubmVyVmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBUKSB7XHJcblxyXG4gICAgdGhpcy5pbm5lclZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IFQpID0+IHZvaWQpIHtcclxuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5wcm9wYWdhdGVUb3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=