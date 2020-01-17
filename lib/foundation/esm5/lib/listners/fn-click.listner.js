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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY2xpY2subGlzdG5lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvbGlzdG5lcnMvZm4tY2xpY2subGlzdG5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7SUFDRSx3QkFBb0IsWUFBZ0M7UUFBaEMsaUJBQVksR0FBWixZQUFZLENBQW9CO0lBQ3BELENBQUM7Ozs7OztJQUVELDhCQUFLOzs7OztJQUFMLFVBQU0sT0FBZTtRQUFFLG9CQUFvQjthQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7WUFBcEIsbUNBQW9COztRQUN6QyxJQUFJOztnQkFDSSxFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQzs7Z0JBQzVCLEVBQUUsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztTQUNyRTtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbEMsc0JBQXNCO1NBQ3ZCO0lBRUgsQ0FBQztJQUdILHFCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQzs7Ozs7Ozs7OztJQWxCYSxzQ0FBd0M7Ozs7Ozs7SUFpQnBELHNFQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm5FeGNlcHRpb25TZXJ2aWNlfSBmcm9tICcuLi9leGNlcHRpb24vZm4tZXhjZXB0aW9uLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZuQ2xpY2tMaXN0bmVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV4Y3B0aW9uU3ZjczogRm5FeGNlcHRpb25TZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBjbGljayhldmVudElkOiBzdHJpbmcsIC4uLnJlc3RQYXJhbXM6IGFueVtdKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICB0aGlzLmV4ZWN1dGUoZXZlbnRJZCwgcmVzdFBhcmFtcyk7XHJcbiAgICAgIGNvbnN0IHQxID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdDYWxsIHRvIGV4ZWN1dGUgdG9vayAnICsgKHQxIC0gdDApICsgJyBtaWxsaXNlY29uZHMuJyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRoaXMuZXhjcHRpb25TdmNzLmxvZ0V4Y2VwdGlvbihlKTtcclxuXHJcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcihlKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCBleGVjdXRlKGV2ZW50SWQ6IHN0cmluZywgcmVzdFBhcmFtcyk7XHJcbn1cclxuIl19