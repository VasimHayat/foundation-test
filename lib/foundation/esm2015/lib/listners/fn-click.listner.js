/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class FnClickListner {
    /**
     * @param {?} excptionSvcs
     */
    constructor(excptionSvcs) {
        this.excptionSvcs = excptionSvcs;
    }
    /**
     * @param {?} eventId
     * @param {...?} restParams
     * @return {?}
     */
    click(eventId, ...restParams) {
        try {
            /** @type {?} */
            const t0 = performance.now();
            this.execute(eventId, restParams);
            /** @type {?} */
            const t1 = performance.now();
            console.log('Call to execute took ' + (t1 - t0) + ' milliseconds.');
        }
        catch (e) {
            this.excptionSvcs.logException(e);
            // throw new Error(e);
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY2xpY2subGlzdG5lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvbGlzdG5lcnMvZm4tY2xpY2subGlzdG5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsTUFBTSxPQUFnQixjQUFjOzs7O0lBQ2xDLFlBQW9CLFlBQWdDO1FBQWhDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtJQUNwRCxDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUMsT0FBZSxFQUFFLEdBQUcsVUFBaUI7UUFDekMsSUFBSTs7a0JBQ0ksRUFBRSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7O2tCQUM1QixFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLENBQUM7U0FDckU7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWxDLHNCQUFzQjtTQUN2QjtJQUVILENBQUM7Q0FHRjs7Ozs7O0lBbEJhLHNDQUF3Qzs7Ozs7OztJQWlCcEQsc0VBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGbkV4Y2VwdGlvblNlcnZpY2V9IGZyb20gJy4uL2V4Y2VwdGlvbi9mbi1leGNlcHRpb24uc2VydmljZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm5DbGlja0xpc3RuZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXhjcHRpb25TdmNzOiBGbkV4Y2VwdGlvblNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGNsaWNrKGV2ZW50SWQ6IHN0cmluZywgLi4ucmVzdFBhcmFtczogYW55W10pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHQwID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgIHRoaXMuZXhlY3V0ZShldmVudElkLCByZXN0UGFyYW1zKTtcclxuICAgICAgY29uc3QgdDEgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgY29uc29sZS5sb2coJ0NhbGwgdG8gZXhlY3V0ZSB0b29rICcgKyAodDEgLSB0MCkgKyAnIG1pbGxpc2Vjb25kcy4nKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhpcy5leGNwdGlvblN2Y3MubG9nRXhjZXB0aW9uKGUpO1xyXG5cclxuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGUpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGFic3RyYWN0IGV4ZWN1dGUoZXZlbnRJZDogc3RyaW5nLCByZXN0UGFyYW1zKTtcclxufVxyXG4iXX0=