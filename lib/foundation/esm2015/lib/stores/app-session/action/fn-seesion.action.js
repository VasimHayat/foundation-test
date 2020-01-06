/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const FnSessionActionType = {
    InitialzeCurrentSession: '[FnSession] initialize session',
    LoadSession: '[FnSession] Load Session',
    LoadSessionSuccess: '[FnSession] Load Success',
    LoadSessionError: '[FnSession] Load Error',
};
export { FnSessionActionType };
export class InitialzeCurrentSession {
    constructor() {
        this.type = FnSessionActionType.InitialzeCurrentSession;
    }
}
if (false) {
    /** @type {?} */
    InitialzeCurrentSession.prototype.type;
}
export class LoadSessionSuccess {
    /**
     * @param {?} payLoad
     */
    constructor(payLoad) {
        this.payLoad = payLoad;
        this.type = FnSessionActionType.LoadSessionSuccess;
    }
}
if (false) {
    /** @type {?} */
    LoadSessionSuccess.prototype.type;
    /** @type {?} */
    LoadSessionSuccess.prototype.payLoad;
}
export class LoadSession {
    /**
     * @param {?} payLoad
     */
    constructor(payLoad) {
        this.payLoad = payLoad;
        this.type = FnSessionActionType.LoadSession;
    }
}
if (false) {
    /** @type {?} */
    LoadSession.prototype.type;
    /** @type {?} */
    LoadSession.prototype.payLoad;
}
export class LoadSessionError {
    /**
     * @param {?} error
     */
    constructor(error) {
        this.error = error;
        this.type = FnSessionActionType.LoadSessionError;
    }
}
if (false) {
    /** @type {?} */
    LoadSessionError.prototype.type;
    /** @type {?} */
    LoadSessionError.prototype.error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tc2Vlc2lvbi5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL3N0b3Jlcy9hcHAtc2Vzc2lvbi9hY3Rpb24vZm4tc2Vlc2lvbi5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBSUUseUJBQTBCLGdDQUFnQztJQUMxRCxhQUFjLDBCQUEwQjtJQUN4QyxvQkFBcUIsMEJBQTBCO0lBQy9DLGtCQUFtQix3QkFBd0I7OztBQUc3QyxNQUFNLE9BQU8sdUJBQXVCO0lBQXBDO1FBQ1csU0FBSSxHQUFHLG1CQUFtQixDQUFDLHVCQUF1QixDQUFDO0lBQzlELENBQUM7Q0FBQTs7O0lBREMsdUNBQTREOztBQUc5RCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBRzdCLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFGNUIsU0FBSSxHQUFHLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDO0lBR3ZELENBQUM7Q0FFRjs7O0lBTEMsa0NBQXVEOztJQUUzQyxxQ0FBeUI7O0FBS3ZDLE1BQU0sT0FBTyxXQUFXOzs7O0lBR3RCLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFGNUIsU0FBSSxHQUFHLG1CQUFtQixDQUFDLFdBQVcsQ0FBQztJQUdoRCxDQUFDO0NBRUY7OztJQUxDLDJCQUFnRDs7SUFFcEMsOEJBQXlCOztBQUt2QyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRzNCLFlBQW1CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBRnZCLFNBQUksR0FBRyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQztJQUdyRCxDQUFDO0NBRUY7OztJQUxDLGdDQUFxRDs7SUFFekMsaUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY3Rpb259IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHtGblNlc3Npb259IGZyb20gJy4uL3N0YXRlL2ZuLnNlc3Npb24ubW9kZWwnO1xyXG5cclxuZXhwb3J0IGVudW0gRm5TZXNzaW9uQWN0aW9uVHlwZSB7XHJcbiAgSW5pdGlhbHplQ3VycmVudFNlc3Npb24gPSAnW0ZuU2Vzc2lvbl0gaW5pdGlhbGl6ZSBzZXNzaW9uJyxcclxuICBMb2FkU2Vzc2lvbiA9ICdbRm5TZXNzaW9uXSBMb2FkIFNlc3Npb24nLFxyXG4gIExvYWRTZXNzaW9uU3VjY2VzcyA9ICdbRm5TZXNzaW9uXSBMb2FkIFN1Y2Nlc3MnLFxyXG4gIExvYWRTZXNzaW9uRXJyb3IgPSAnW0ZuU2Vzc2lvbl0gTG9hZCBFcnJvcidcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEluaXRpYWx6ZUN1cnJlbnRTZXNzaW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gRm5TZXNzaW9uQWN0aW9uVHlwZS5Jbml0aWFsemVDdXJyZW50U2Vzc2lvbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRTZXNzaW9uU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEZuU2Vzc2lvbkFjdGlvblR5cGUuTG9hZFNlc3Npb25TdWNjZXNzO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5TG9hZDogRm5TZXNzaW9uKSB7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRTZXNzaW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gRm5TZXNzaW9uQWN0aW9uVHlwZS5Mb2FkU2Vzc2lvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheUxvYWQ6IEZuU2Vzc2lvbikge1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkU2Vzc2lvbkVycm9yIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gRm5TZXNzaW9uQWN0aW9uVHlwZS5Mb2FkU2Vzc2lvbkVycm9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZXJyb3I6IHN0cmluZykge1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEZuU2Vzc2lvbkFjdGlvbnMgPSBJbml0aWFsemVDdXJyZW50U2Vzc2lvblxyXG4gIHwgTG9hZFNlc3Npb25cclxuICB8IExvYWRTZXNzaW9uU3VjY2Vzc1xyXG4gIHwgTG9hZFNlc3Npb25FcnJvcjtcclxuIl19