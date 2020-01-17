/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
FnInputValueAccessor = /** @class */ (function () {
    function FnInputValueAccessor() {
        this.isDisabled = false;
        this.propagateChange = (/**
         * @return {?}
         */
        function () {
        });
        this.propagateTouched = (/**
         * @return {?}
         */
        function () {
        });
    }
    Object.defineProperty(FnInputValueAccessor.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.innerValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.innerValue !== value) {
                this.innerValue = value;
                this.propagateChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    FnInputValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.innerValue = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FnInputValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FnInputValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    FnInputValueAccessor.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    return FnInputValueAccessor;
}());
/**
 * @abstract
 * @template T
 */
export { FnInputValueAccessor };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taW5wdXQudmFsdWUuYWNjZXNzb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbW9kZWwvZm4taW5wdXQudmFsdWUuYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTs7Ozs7SUFBQTtRQUdTLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsb0JBQWU7OztRQUFRO1FBQzlCLENBQUMsRUFBQTtRQUVNLHFCQUFnQjs7O1FBQVE7UUFDL0IsQ0FBQyxFQUFBO0lBOEJILENBQUM7SUE1QkMsc0JBQUksdUNBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7OztRQUVELFVBQVUsS0FBUTtZQUNoQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxFQUFFO2dCQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QjtRQUNILENBQUM7OztPQVBBOzs7OztJQVNELHlDQUFVOzs7O0lBQVYsVUFBVyxLQUFRO1FBRWpCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsK0NBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQXNCO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsZ0RBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQWM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELCtDQUFnQjs7OztJQUFoQixVQUFpQixVQUFtQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRUgsMkJBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDOzs7Ozs7Ozs7OztJQXRDQywwQ0FBc0I7O0lBRXRCLDBDQUEwQjs7SUFFMUIsK0NBQ0M7O0lBRUQsZ0RBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm5JbnB1dFZhbHVlQWNjZXNzb3I8VD4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgcHJpdmF0ZSBpbm5lclZhbHVlOiBUO1xyXG5cclxuICBwdWJsaWMgaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgcHJvcGFnYXRlQ2hhbmdlOiBhbnkgPSAoKSA9PiB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJvcGFnYXRlVG91Y2hlZDogYW55ID0gKCkgPT4ge1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IFQge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5uZXJWYWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogVCkge1xyXG4gICAgaWYgKHRoaXMuaW5uZXJWYWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5pbm5lclZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IFQpIHtcclxuXHJcbiAgICB0aGlzLmlubmVyVmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogVCkgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLnByb3BhZ2F0ZVRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==