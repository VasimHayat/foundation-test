/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Import the core angular services.
import { Injectable } from '@angular/core';
import { FNExceptionJson } from './fn-exception-json';
export class FNErrorLogSvcs {
    // I log the given error to various aggregation and tracking services.
    /**
     * @param {?} error
     * @return {?}
     */
    logError(error) {
        if (this.sendExceptionToServer) {
            /** @type {?} */
            const fnExpJson = new FNExceptionJson(error);
            this.sendToServer(fnExpJson);
        }
        else {
            this.sendToConsole(error);
        }
    }
    // I send the error the browser console (safely, if it exists).
    /**
     * @param {?} error
     * @return {?}
     */
    sendToConsole(error) {
        if (console && console.group && console.error) {
            console.group('Error Log Service');
            console.error(error);
            console.error(error.message);
            console.error(error.stack);
            console.groupEnd();
        }
    }
    // I send the error to the server-side error tracking end-point.
    /**
     * @param {?} fnExpJson
     * @return {?}
     */
    sendToServer(fnExpJson) {
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
    }
}
FNErrorLogSvcs.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    FNErrorLogSvcs.prototype.sendExceptionToServer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tZXJyb3IubG9nLnN2Y3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2V4Y2VwdGlvbi9mbi1lcnJvci5sb2cuc3Zjcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3RELE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFJbEIsUUFBUSxDQUFDLEtBQVU7UUFDeEIsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7O2tCQUN4QixTQUFTLEdBQW9CLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQztZQUM3RCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzlCO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO0lBRUgsQ0FBQzs7Ozs7O0lBR00sYUFBYSxDQUFDLEtBQVU7UUFFN0IsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBRTdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUVwQjtJQUVILENBQUM7Ozs7OztJQUlNLFlBQVksQ0FBQyxTQUEwQjtRQUU1QyxZQUFZO1FBQ1osVUFBVTtRQUNWLGlFQUFpRTtRQUNqRSxNQUFNO1FBQ04sdUJBQXVCO1FBQ3ZCLDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIsb0NBQW9DO1FBQ3BDLE1BQU07UUFDTixLQUFLO1FBQ0wsZUFBZTtRQUNmLDJDQUEyQztRQUUzQyxnQ0FBZ0M7UUFDaEMsT0FBTztRQUNQLG1DQUFtQztRQUVuQyxtRUFBbUU7UUFDbkUseURBQXlEO1FBQ3pELFdBQVc7UUFDWCxpREFBaUQ7UUFDakQsTUFBTTtRQUNOLEtBQUs7SUFHUCxDQUFDOzs7WUEzREYsVUFBVTs7OztJQUVULCtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgY29yZSBhbmd1bGFyIHNlcnZpY2VzLlxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZORXhjZXB0aW9uSnNvbiB9IGZyb20gJy4vZm4tZXhjZXB0aW9uLWpzb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRk5FcnJvckxvZ1N2Y3Mge1xyXG4gIHB1YmxpYyBzZW5kRXhjZXB0aW9uVG9TZXJ2ZXI6IGJvb2xlYW47XHJcblxyXG4gIC8vIEkgbG9nIHRoZSBnaXZlbiBlcnJvciB0byB2YXJpb3VzIGFnZ3JlZ2F0aW9uIGFuZCB0cmFja2luZyBzZXJ2aWNlcy5cclxuICBwdWJsaWMgbG9nRXJyb3IoZXJyb3I6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VuZEV4Y2VwdGlvblRvU2VydmVyKSB7XHJcbiAgICAgIGNvbnN0IGZuRXhwSnNvbjogRk5FeGNlcHRpb25Kc29uID0gbmV3IEZORXhjZXB0aW9uSnNvbihlcnJvcik7XHJcbiAgICAgIHRoaXMuc2VuZFRvU2VydmVyKGZuRXhwSnNvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbmRUb0NvbnNvbGUoZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8vIEkgc2VuZCB0aGUgZXJyb3IgdGhlIGJyb3dzZXIgY29uc29sZSAoc2FmZWx5LCBpZiBpdCBleGlzdHMpLlxyXG4gIHB1YmxpYyBzZW5kVG9Db25zb2xlKGVycm9yOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoY29uc29sZSAmJiBjb25zb2xlLmdyb3VwICYmIGNvbnNvbGUuZXJyb3IpIHtcclxuXHJcbiAgICAgIGNvbnNvbGUuZ3JvdXAoJ0Vycm9yIExvZyBTZXJ2aWNlJyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yLnN0YWNrKTtcclxuICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gSSBzZW5kIHRoZSBlcnJvciB0byB0aGUgc2VydmVyLXNpZGUgZXJyb3IgdHJhY2tpbmcgZW5kLXBvaW50LlxyXG4gIHB1YmxpYyBzZW5kVG9TZXJ2ZXIoZm5FeHBKc29uOiBGTkV4Y2VwdGlvbkpzb24pOiB2b2lkIHtcclxuXHJcbiAgICAvLyB0aGlzLmh0dHBcclxuICAgIC8vIFx0LnBvc3QoXHJcbiAgICAvLyBcdFx0XCIuL2Vycm9yLWxvZ2dpbmctZW5kcG9pbnRcIiwgLy8gRG9lc24ndCByZWFsbHkgZXhpc3QgaW4gZGVtby5cclxuICAgIC8vIFx0XHR7XHJcbiAgICAvLyBcdFx0XHR0eXBlOiBlcnJvci5uYW1lLFxyXG4gICAgLy8gXHRcdFx0bWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgIC8vIFx0XHRcdHN0YWNrOiBlcnJvci5zdGFjayxcclxuICAgIC8vIFx0XHRcdGxvY2F0aW9uOiB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG4gICAgLy8gXHRcdH1cclxuICAgIC8vIFx0KVxyXG4gICAgLy8gXHQuc3Vic2NyaWJlKFxyXG4gICAgLy8gXHRcdCggaHR0cFJlc3BvbnNlOiBSZXNwb25zZSApIDogdm9pZCA9PiB7XHJcblxyXG4gICAgLy8gXHRcdFx0Ly8gLi4uIG5vdGhpbmcgdG8gZG8gaGVyZS5cclxuICAgIC8vIFx0XHR9LFxyXG4gICAgLy8gXHRcdCggaHR0cEVycm9yOiBhbnkgKSA6IHZvaWQgPT4ge1xyXG5cclxuICAgIC8vIFx0XHRcdC8vIE5PVEU6IFdlIGtub3cgdGhpcyB3aWxsIGZhaWwgaW4gdGhlIGRlbW8gc2luY2UgdGhlcmUgaXMgbm9cclxuICAgIC8vIFx0XHRcdC8vIGFiaWxpdHkgdG8gYWNjZXB0IFBPU1QgcmVxdWVzdHMgb24gR2l0SHViIHBhZ2VzLlxyXG4gICAgLy8gXHRcdFx0Ly8gLS1cclxuICAgIC8vIFx0XHRcdC8vIGNvbnNvbGUubG9nKCBcIkh0dHAgZXJyb3I6XCIsIGh0dHBFcnJvciApO1xyXG4gICAgLy8gXHRcdH1cclxuICAgIC8vIFx0KVxyXG5cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=