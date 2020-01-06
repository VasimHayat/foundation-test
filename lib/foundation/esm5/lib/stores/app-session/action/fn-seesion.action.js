/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var FnSessionActionType = {
    InitialzeCurrentSession: '[FnSession] initialize session',
    LoadSession: '[FnSession] Load Session',
    LoadSessionSuccess: '[FnSession] Load Success',
    LoadSessionError: '[FnSession] Load Error',
};
export { FnSessionActionType };
var InitialzeCurrentSession = /** @class */ (function () {
    function InitialzeCurrentSession() {
        this.type = FnSessionActionType.InitialzeCurrentSession;
    }
    return InitialzeCurrentSession;
}());
export { InitialzeCurrentSession };
if (false) {
    /** @type {?} */
    InitialzeCurrentSession.prototype.type;
}
var LoadSessionSuccess = /** @class */ (function () {
    function LoadSessionSuccess(payLoad) {
        this.payLoad = payLoad;
        this.type = FnSessionActionType.LoadSessionSuccess;
    }
    return LoadSessionSuccess;
}());
export { LoadSessionSuccess };
if (false) {
    /** @type {?} */
    LoadSessionSuccess.prototype.type;
    /** @type {?} */
    LoadSessionSuccess.prototype.payLoad;
}
var LoadSession = /** @class */ (function () {
    function LoadSession(payLoad) {
        this.payLoad = payLoad;
        this.type = FnSessionActionType.LoadSession;
    }
    return LoadSession;
}());
export { LoadSession };
if (false) {
    /** @type {?} */
    LoadSession.prototype.type;
    /** @type {?} */
    LoadSession.prototype.payLoad;
}
var LoadSessionError = /** @class */ (function () {
    function LoadSessionError(error) {
        this.error = error;
        this.type = FnSessionActionType.LoadSessionError;
    }
    return LoadSessionError;
}());
export { LoadSessionError };
if (false) {
    /** @type {?} */
    LoadSessionError.prototype.type;
    /** @type {?} */
    LoadSessionError.prototype.error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tc2Vlc2lvbi5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL3N0b3Jlcy9hcHAtc2Vzc2lvbi9hY3Rpb24vZm4tc2Vlc2lvbi5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBSUUseUJBQTBCLGdDQUFnQztJQUMxRCxhQUFjLDBCQUEwQjtJQUN4QyxvQkFBcUIsMEJBQTBCO0lBQy9DLGtCQUFtQix3QkFBd0I7OztBQUc3QztJQUFBO1FBQ1csU0FBSSxHQUFHLG1CQUFtQixDQUFDLHVCQUF1QixDQUFDO0lBQzlELENBQUM7SUFBRCw4QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsdUNBQTREOztBQUc5RDtJQUdFLDRCQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBRjVCLFNBQUksR0FBRyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQztJQUd2RCxDQUFDO0lBRUgseUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxDLGtDQUF1RDs7SUFFM0MscUNBQXlCOztBQUt2QztJQUdFLHFCQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBRjVCLFNBQUksR0FBRyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7SUFHaEQsQ0FBQztJQUVILGtCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQywyQkFBZ0Q7O0lBRXBDLDhCQUF5Qjs7QUFLdkM7SUFHRSwwQkFBbUIsS0FBYTtRQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7UUFGdkIsU0FBSSxHQUFHLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDO0lBR3JELENBQUM7SUFFSCx1QkFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBTEMsZ0NBQXFEOztJQUV6QyxpQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FjdGlvbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQge0ZuU2Vzc2lvbn0gZnJvbSAnLi4vc3RhdGUvZm4uc2Vzc2lvbi5tb2RlbCc7XHJcblxyXG5leHBvcnQgZW51bSBGblNlc3Npb25BY3Rpb25UeXBlIHtcclxuICBJbml0aWFsemVDdXJyZW50U2Vzc2lvbiA9ICdbRm5TZXNzaW9uXSBpbml0aWFsaXplIHNlc3Npb24nLFxyXG4gIExvYWRTZXNzaW9uID0gJ1tGblNlc3Npb25dIExvYWQgU2Vzc2lvbicsXHJcbiAgTG9hZFNlc3Npb25TdWNjZXNzID0gJ1tGblNlc3Npb25dIExvYWQgU3VjY2VzcycsXHJcbiAgTG9hZFNlc3Npb25FcnJvciA9ICdbRm5TZXNzaW9uXSBMb2FkIEVycm9yJ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5pdGlhbHplQ3VycmVudFNlc3Npb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBGblNlc3Npb25BY3Rpb25UeXBlLkluaXRpYWx6ZUN1cnJlbnRTZXNzaW9uO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZFNlc3Npb25TdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gRm5TZXNzaW9uQWN0aW9uVHlwZS5Mb2FkU2Vzc2lvblN1Y2Nlc3M7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlMb2FkOiBGblNlc3Npb24pIHtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZFNlc3Npb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBGblNlc3Npb25BY3Rpb25UeXBlLkxvYWRTZXNzaW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5TG9hZDogRm5TZXNzaW9uKSB7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRTZXNzaW9uRXJyb3IgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBGblNlc3Npb25BY3Rpb25UeXBlLkxvYWRTZXNzaW9uRXJyb3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlcnJvcjogc3RyaW5nKSB7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRm5TZXNzaW9uQWN0aW9ucyA9IEluaXRpYWx6ZUN1cnJlbnRTZXNzaW9uXHJcbiAgfCBMb2FkU2Vzc2lvblxyXG4gIHwgTG9hZFNlc3Npb25TdWNjZXNzXHJcbiAgfCBMb2FkU2Vzc2lvbkVycm9yO1xyXG4iXX0=