/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Import the core angular services.
import { Injectable } from '@angular/core';
import { FNExceptionJson } from './fn-exception-json';
var FNErrorLogSvcs = /** @class */ (function () {
    function FNErrorLogSvcs() {
    }
    // I log the given error to various aggregation and tracking services.
    // I log the given error to various aggregation and tracking services.
    /**
     * @param {?} error
     * @return {?}
     */
    FNErrorLogSvcs.prototype.logError = 
    // I log the given error to various aggregation and tracking services.
    /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (this.sendExceptionToServer) {
            /** @type {?} */
            var fnExpJson = new FNExceptionJson(error);
            this.sendToServer(fnExpJson);
        }
        else {
            this.sendToConsole(error);
        }
    };
    // I send the error the browser console (safely, if it exists).
    // I send the error the browser console (safely, if it exists).
    /**
     * @param {?} error
     * @return {?}
     */
    FNErrorLogSvcs.prototype.sendToConsole = 
    // I send the error the browser console (safely, if it exists).
    /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (console && console.group && console.error) {
            console.group('Error Log Service');
            console.error(error);
            console.error(error.message);
            console.error(error.stack);
            console.groupEnd();
        }
    };
    // I send the error to the server-side error tracking end-point.
    // I send the error to the server-side error tracking end-point.
    /**
     * @param {?} fnExpJson
     * @return {?}
     */
    FNErrorLogSvcs.prototype.sendToServer = 
    // I send the error to the server-side error tracking end-point.
    /**
     * @param {?} fnExpJson
     * @return {?}
     */
    function (fnExpJson) {
        // this.http
        // 	.post(
        // 		"./error-logging-endpoint", // Doesn't really exist in demo.
        // 		{
        // 			type: error.name,
        // 			message: error.message,
        // 			stack: error.stack,
        // 			location: window.location.href
        // 		}
        // 	)
        // 	.subscribe(
        // 		( httpResponse: Response ) : void => {
        // 			// ... nothing to do here.
        // 		},
        // 		( httpError: any ) : void => {
        // 			// NOTE: We know this will fail in the demo since there is no
        // 			// ability to accept POST requests on GitHub pages.
        // 			// --
        // 			// console.log( "Http error:", httpError );
        // 		}
        // 	)
    };
    FNErrorLogSvcs.decorators = [
        { type: Injectable }
    ];
    return FNErrorLogSvcs;
}());
export { FNErrorLogSvcs };
if (false) {
    /** @type {?} */
    FNErrorLogSvcs.prototype.sendExceptionToServer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tZXJyb3IubG9nLnN2Y3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2V4Y2VwdGlvbi9mbi1lcnJvci5sb2cuc3Zjcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXREO0lBQUE7SUE2REEsQ0FBQztJQXpEQyxzRUFBc0U7Ozs7OztJQUMvRCxpQ0FBUTs7Ozs7O0lBQWYsVUFBZ0IsS0FBVTtRQUN4QixJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7Z0JBQ3hCLFNBQVMsR0FBb0IsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDO1lBQzdELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFFSCxDQUFDO0lBRUQsK0RBQStEOzs7Ozs7SUFDeEQsc0NBQWE7Ozs7OztJQUFwQixVQUFxQixLQUFVO1FBRTdCLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUU3QyxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7U0FFcEI7SUFFSCxDQUFDO0lBR0QsZ0VBQWdFOzs7Ozs7SUFDekQscUNBQVk7Ozs7OztJQUFuQixVQUFvQixTQUEwQjtRQUU1QyxZQUFZO1FBQ1osVUFBVTtRQUNWLGlFQUFpRTtRQUNqRSxNQUFNO1FBQ04sdUJBQXVCO1FBQ3ZCLDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIsb0NBQW9DO1FBQ3BDLE1BQU07UUFDTixLQUFLO1FBQ0wsZUFBZTtRQUNmLDJDQUEyQztRQUUzQyxnQ0FBZ0M7UUFDaEMsT0FBTztRQUNQLG1DQUFtQztRQUVuQyxtRUFBbUU7UUFDbkUseURBQXlEO1FBQ3pELFdBQVc7UUFDWCxpREFBaUQ7UUFDakQsTUFBTTtRQUNOLEtBQUs7SUFHUCxDQUFDOztnQkEzREYsVUFBVTs7SUE2RFgscUJBQUM7Q0FBQSxBQTdERCxJQTZEQztTQTVEWSxjQUFjOzs7SUFDekIsK0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBjb3JlIGFuZ3VsYXIgc2VydmljZXMuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRk5FeGNlcHRpb25Kc29uIH0gZnJvbSAnLi9mbi1leGNlcHRpb24tanNvbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGTkVycm9yTG9nU3ZjcyB7XHJcbiAgcHVibGljIHNlbmRFeGNlcHRpb25Ub1NlcnZlcjogYm9vbGVhbjtcclxuXHJcbiAgLy8gSSBsb2cgdGhlIGdpdmVuIGVycm9yIHRvIHZhcmlvdXMgYWdncmVnYXRpb24gYW5kIHRyYWNraW5nIHNlcnZpY2VzLlxyXG4gIHB1YmxpYyBsb2dFcnJvcihlcnJvcjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZW5kRXhjZXB0aW9uVG9TZXJ2ZXIpIHtcclxuICAgICAgY29uc3QgZm5FeHBKc29uOiBGTkV4Y2VwdGlvbkpzb24gPSBuZXcgRk5FeGNlcHRpb25Kc29uKGVycm9yKTtcclxuICAgICAgdGhpcy5zZW5kVG9TZXJ2ZXIoZm5FeHBKc29uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VuZFRvQ29uc29sZShlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gSSBzZW5kIHRoZSBlcnJvciB0aGUgYnJvd3NlciBjb25zb2xlIChzYWZlbHksIGlmIGl0IGV4aXN0cykuXHJcbiAgcHVibGljIHNlbmRUb0NvbnNvbGUoZXJyb3I6IGFueSk6IHZvaWQge1xyXG5cclxuICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGUuZ3JvdXAgJiYgY29uc29sZS5lcnJvcikge1xyXG5cclxuICAgICAgY29uc29sZS5ncm91cCgnRXJyb3IgTG9nIFNlcnZpY2UnKTtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3Iuc3RhY2spO1xyXG4gICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICAvLyBJIHNlbmQgdGhlIGVycm9yIHRvIHRoZSBzZXJ2ZXItc2lkZSBlcnJvciB0cmFja2luZyBlbmQtcG9pbnQuXHJcbiAgcHVibGljIHNlbmRUb1NlcnZlcihmbkV4cEpzb246IEZORXhjZXB0aW9uSnNvbik6IHZvaWQge1xyXG5cclxuICAgIC8vIHRoaXMuaHR0cFxyXG4gICAgLy8gXHQucG9zdChcclxuICAgIC8vIFx0XHRcIi4vZXJyb3ItbG9nZ2luZy1lbmRwb2ludFwiLCAvLyBEb2Vzbid0IHJlYWxseSBleGlzdCBpbiBkZW1vLlxyXG4gICAgLy8gXHRcdHtcclxuICAgIC8vIFx0XHRcdHR5cGU6IGVycm9yLm5hbWUsXHJcbiAgICAvLyBcdFx0XHRtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgLy8gXHRcdFx0c3RhY2s6IGVycm9yLnN0YWNrLFxyXG4gICAgLy8gXHRcdFx0bG9jYXRpb246IHdpbmRvdy5sb2NhdGlvbi5ocmVmXHJcbiAgICAvLyBcdFx0fVxyXG4gICAgLy8gXHQpXHJcbiAgICAvLyBcdC5zdWJzY3JpYmUoXHJcbiAgICAvLyBcdFx0KCBodHRwUmVzcG9uc2U6IFJlc3BvbnNlICkgOiB2b2lkID0+IHtcclxuXHJcbiAgICAvLyBcdFx0XHQvLyAuLi4gbm90aGluZyB0byBkbyBoZXJlLlxyXG4gICAgLy8gXHRcdH0sXHJcbiAgICAvLyBcdFx0KCBodHRwRXJyb3I6IGFueSApIDogdm9pZCA9PiB7XHJcblxyXG4gICAgLy8gXHRcdFx0Ly8gTk9URTogV2Uga25vdyB0aGlzIHdpbGwgZmFpbCBpbiB0aGUgZGVtbyBzaW5jZSB0aGVyZSBpcyBub1xyXG4gICAgLy8gXHRcdFx0Ly8gYWJpbGl0eSB0byBhY2NlcHQgUE9TVCByZXF1ZXN0cyBvbiBHaXRIdWIgcGFnZXMuXHJcbiAgICAvLyBcdFx0XHQvLyAtLVxyXG4gICAgLy8gXHRcdFx0Ly8gY29uc29sZS5sb2coIFwiSHR0cCBlcnJvcjpcIiwgaHR0cEVycm9yICk7XHJcbiAgICAvLyBcdFx0fVxyXG4gICAgLy8gXHQpXHJcblxyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==