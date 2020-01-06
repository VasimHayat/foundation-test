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
        this.propagateChange = (/**
         * @return {?}
         */
        function () { });
        this.propagateTouched = (/**
         * @return {?}
         */
        function () { });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taW5wdXQudmFsdWUuYWNjZXNzb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbW9kZWwvZm4taW5wdXQudmFsdWUuYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTs7Ozs7SUFBQTtRQUtTLG9CQUFlOzs7UUFBUSxjQUFRLENBQUMsRUFBQztRQUVqQyxxQkFBZ0I7OztRQUFRLGNBQVEsQ0FBQyxFQUFDO0lBOEIzQyxDQUFDO0lBNUJDLHNCQUFJLHVDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7Ozs7UUFFRCxVQUFVLEtBQVE7WUFDaEIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0I7UUFDSCxDQUFDOzs7T0FQQTs7Ozs7SUFTRCx5Q0FBVTs7OztJQUFWLFVBQVcsS0FBUTtRQUVqQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELCtDQUFnQjs7OztJQUFoQixVQUFpQixFQUFzQjtRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELGdEQUFpQjs7OztJQUFqQixVQUFrQixFQUFjO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCwrQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVILDJCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQzs7Ozs7Ozs7Ozs7SUFwQ0MsMENBQXNCOztJQUV0QiwwQ0FBMkI7O0lBRTNCLCtDQUF3Qzs7SUFFeEMsZ0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm5JbnB1dFZhbHVlQWNjZXNzb3I8VD4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgcHJpdmF0ZSBpbm5lclZhbHVlOiBUO1xyXG5cclxuICBwdWJsaWMgaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIHByb3BhZ2F0ZUNoYW5nZTogYW55ID0gKCkgPT4geyB9O1xyXG5cclxuICBwdWJsaWMgcHJvcGFnYXRlVG91Y2hlZDogYW55ID0gKCkgPT4geyB9O1xyXG5cclxuICBnZXQgdmFsdWUoKTogVCB7XHJcbiAgICByZXR1cm4gdGhpcy5pbm5lclZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBUKSB7XHJcbiAgICBpZiAodGhpcy5pbm5lclZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLmlubmVyVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogVCkge1xyXG5cclxuICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBUKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpIHtcclxuICAgIHRoaXMucHJvcGFnYXRlVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbn1cclxuIl19