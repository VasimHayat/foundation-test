/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
FnClickListner = /** @class */ (function () {
    function FnClickListner(excptionSvcs) {
        this.excptionSvcs = excptionSvcs;
    }
    /**
     * @param {?} eventId
     * @param {...?} restParams
     * @return {?}
     */
    FnClickListner.prototype.click = /**
     * @param {?} eventId
     * @param {...?} restParams
     * @return {?}
     */
    function (eventId) {
        var restParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restParams[_i - 1] = arguments[_i];
        }
        try {
            /** @type {?} */
            var t0 = performance.now();
            this.execute(eventId, restParams);
            /** @type {?} */
            var t1 = performance.now();
            console.log('Call to execute took ' + (t1 - t0) + ' milliseconds.');
        }
        catch (e) {
            this.excptionSvcs.logException(e);
            // throw new Error(e);
        }
    };
    return FnClickListner;
}());
/**
 * @abstract
 */
export { FnClickListner };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnClickListner.prototype.excptionSvcs;
    /**
     * @abstract
     * @param {?} eventId
     * @param {?} restParams
     * @return {?}
     */
    FnClickListner.prototype.execute = function (eventId, restParams) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY2xpY2subGlzdG5lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvbGlzdG5lcnMvZm4tY2xpY2subGlzdG5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7SUFDRSx3QkFBb0IsWUFBZ0M7UUFBaEMsaUJBQVksR0FBWixZQUFZLENBQW9CO0lBQ3BELENBQUM7Ozs7OztJQUVELDhCQUFLOzs7OztJQUFMLFVBQU0sT0FBZTtRQUFFLG9CQUFvQjthQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7WUFBcEIsbUNBQW9COztRQUN6QyxJQUFJOztnQkFDSSxFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQzs7Z0JBQzVCLEVBQUUsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztTQUNyRTtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbEMsc0JBQXNCO1NBQ3ZCO0lBRUgsQ0FBQztJQUdILHFCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQzs7Ozs7Ozs7OztJQWxCYSxzQ0FBd0M7Ozs7Ozs7SUFpQnBELHNFQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZuRXhjZXB0aW9uU2VydmljZSB9IGZyb20gJy4uL2V4Y2VwdGlvbi9mbi1leGNlcHRpb24uc2VydmljZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm5DbGlja0xpc3RuZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXhjcHRpb25TdmNzOiBGbkV4Y2VwdGlvblNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGNsaWNrKGV2ZW50SWQ6IHN0cmluZywgLi4ucmVzdFBhcmFtczogYW55W10pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHQwID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZShldmVudElkLCByZXN0UGFyYW1zKTtcclxuICAgICAgY29uc3QgdDEgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgY29uc29sZS5sb2coJ0NhbGwgdG8gZXhlY3V0ZSB0b29rICcgKyAodDEgLSB0MCkgKyAnIG1pbGxpc2Vjb25kcy4nKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhpcy5leGNwdGlvblN2Y3MubG9nRXhjZXB0aW9uKGUpO1xyXG5cclxuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGUpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGFic3RyYWN0IGV4ZWN1dGUoZXZlbnRJZDogc3RyaW5nLCByZXN0UGFyYW1zKTtcclxufVxyXG4iXX0=