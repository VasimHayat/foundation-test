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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY2xpY2subGlzdG5lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvbGlzdG5lcnMvZm4tY2xpY2subGlzdG5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsTUFBTSxPQUFnQixjQUFjOzs7O0lBQ2xDLFlBQW9CLFlBQWdDO1FBQWhDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtJQUNwRCxDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUMsT0FBZSxFQUFFLEdBQUcsVUFBaUI7UUFDekMsSUFBSTs7a0JBQ0ksRUFBRSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7O2tCQUM1QixFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLENBQUM7U0FDckU7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWxDLHNCQUFzQjtTQUN2QjtJQUVILENBQUM7Q0FHRjs7Ozs7O0lBbEJhLHNDQUF3Qzs7Ozs7OztJQWlCcEQsc0VBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm5FeGNlcHRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vZXhjZXB0aW9uL2ZuLWV4Y2VwdGlvbi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGbkNsaWNrTGlzdG5lciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBleGNwdGlvblN2Y3M6IEZuRXhjZXB0aW9uU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgY2xpY2soZXZlbnRJZDogc3RyaW5nLCAuLi5yZXN0UGFyYW1zOiBhbnlbXSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgdGhpcy5leGVjdXRlKGV2ZW50SWQsIHJlc3RQYXJhbXMpO1xyXG4gICAgICBjb25zdCB0MSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICBjb25zb2xlLmxvZygnQ2FsbCB0byBleGVjdXRlIHRvb2sgJyArICh0MSAtIHQwKSArICcgbWlsbGlzZWNvbmRzLicpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aGlzLmV4Y3B0aW9uU3Zjcy5sb2dFeGNlcHRpb24oZSk7XHJcblxyXG4gICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoZSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgZXhlY3V0ZShldmVudElkOiBzdHJpbmcsIHJlc3RQYXJhbXMpO1xyXG59XHJcbiJdfQ==