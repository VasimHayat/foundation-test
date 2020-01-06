/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as StackTrace from 'stacktrace-js';
import { FnBrowserDetail } from '../helpers/fn-browser.detail';
var FNExceptionJson = /** @class */ (function () {
    function FNExceptionJson(exception) {
        this.appID = 'HW-Web';
        this.language = 'Javascript';
        this.deviceType = 'Web';
        this.deviceVersion = ''; // systemObject.browserMajorVersion;
        // systemObject.browserMajorVersion;
        this.deviceBrand = ''; // systemObject.browser;
        // systemObject.browser;
        this.deviceTime = new Date();
        this.osType = ''; // systemObject.os;
        // systemObject.os;
        this.osVersion = ''; // systemObject.os+" "+systemObject.osVersion;
        this.selectedObjectHash = {};
        this.init(exception);
    }
    /**
     * @param {?} exception
     * @return {?}
     */
    FNExceptionJson.prototype.init = /**
     * @param {?} exception
     * @return {?}
     */
    function (exception) {
        var _this = this;
        /** @type {?} */
        var browserDetail = new FnBrowserDetail().browserDetail();
        this.deviceVersion = browserDetail.browserMajorVersion;
        this.deviceBrand = browserDetail.browser;
        this.deviceTime = new Date();
        this.osType = browserDetail.os;
        this.osVersion = this.osType + ' ' + browserDetail.osVersion;
        this.expMessage = exception.message;
        StackTrace.fromError(exception).then((/**
         * @param {?} _stackTrace
         * @return {?}
         */
        function (_stackTrace) {
            /** @type {?} */
            var _rootStackTrak = _stackTrace[0];
            _this.expStackTrace = _stackTrace.join('\n');
            _this.rootStackTrace = _rootStackTrak.toString();
            _this.rootExpLineNum = _rootStackTrak.lineNumber;
            _this.id = _this.expMessage + _this.expStackTrace;
        })).catch((/**
         * @param {?} _err
         * @return {?}
         */
        function (_err) {
            _this.expStackTrace = exception.toString();
            _this.rootStackTrace = exception.toString();
            _this.id = _this.expMessage + _this.expStackTrace;
        }));
    };
    return FNExceptionJson;
}());
export { FNExceptionJson };
if (false) {
    /** @type {?} */
    FNExceptionJson.prototype.id;
    /** @type {?} */
    FNExceptionJson.prototype.appID;
    /** @type {?} */
    FNExceptionJson.prototype.appVer;
    /** @type {?} */
    FNExceptionJson.prototype.language;
    /** @type {?} */
    FNExceptionJson.prototype.langVersion;
    /** @type {?} */
    FNExceptionJson.prototype.deviceType;
    /** @type {?} */
    FNExceptionJson.prototype.deviceVersion;
    /** @type {?} */
    FNExceptionJson.prototype.deviceBrand;
    /** @type {?} */
    FNExceptionJson.prototype.deviceTime;
    /** @type {?} */
    FNExceptionJson.prototype.osType;
    /** @type {?} */
    FNExceptionJson.prototype.osVersion;
    /** @type {?} */
    FNExceptionJson.prototype.page;
    /** @type {?} */
    FNExceptionJson.prototype.custUserEmailID;
    /** @type {?} */
    FNExceptionJson.prototype.customerEmailID;
    /** @type {?} */
    FNExceptionJson.prototype.siteMainID;
    /** @type {?} */
    FNExceptionJson.prototype.custUserPK;
    /** @type {?} */
    FNExceptionJson.prototype.customerPk;
    /** @type {?} */
    FNExceptionJson.prototype.sitePk;
    /** @type {?} */
    FNExceptionJson.prototype.expMessage;
    /** @type {?} */
    FNExceptionJson.prototype.rootExpLineNum;
    /** @type {?} */
    FNExceptionJson.prototype.rootStackTrace;
    /** @type {?} */
    FNExceptionJson.prototype.expStackTrace;
    /** @type {?} */
    FNExceptionJson.prototype.selectedObjectHash;
    /** @type {?} */
    FNExceptionJson.prototype.className;
    /** @type {?} */
    FNExceptionJson.prototype.methodName;
    /** @type {?} */
    FNExceptionJson.prototype.categoryName;
    /** @type {?} */
    FNExceptionJson.prototype.threadName;
    /** @type {?} */
    FNExceptionJson.prototype.lastAction;
    /** @type {?} */
    FNExceptionJson.prototype.severity;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tZXhjZXB0aW9uLWpzb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2V4Y2VwdGlvbi9mbi1leGNlcHRpb24tanNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLFVBQVUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBRTdEO0lBK0JFLHlCQUFZLFNBQWM7UUE3QjFCLFVBQUssR0FBRyxRQUFRLENBQUM7UUFFakIsYUFBUSxHQUFHLFlBQVksQ0FBQztRQUV4QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGtCQUFhLEdBQVEsRUFBRSxDQUFDLENBQUMsb0NBQW9DOztRQUM3RCxnQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHdCQUF3Qjs7UUFDMUMsZUFBVSxHQUFRLElBQUksSUFBSSxFQUFFLENBQUM7UUFDN0IsV0FBTSxHQUFRLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQjs7UUFDckMsY0FBUyxHQUFRLEVBQUUsQ0FBQyxDQUFDLDhDQUE4QztRQVluRSx1QkFBa0IsR0FBUSxFQUFFLENBQUM7UUFTM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELDhCQUFJOzs7O0lBQUosVUFBSyxTQUFjO1FBQW5CLGlCQXFCQzs7WUFwQk8sYUFBYSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUMsYUFBYSxFQUFFO1FBQzNELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUM3RCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDcEMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxXQUFXOztnQkFDekMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckMsS0FBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hELEtBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQztZQUNoRCxLQUFJLENBQUMsRUFBRSxHQUFHLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQztRQUVqRCxDQUFDLEVBQUMsQ0FBQyxLQUFLOzs7O1FBQUMsVUFBQyxJQUFJO1lBQ1osS0FBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDMUMsS0FBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDM0MsS0FBSSxDQUFDLEVBQUUsR0FBRyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7UUFDakQsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBekRELElBeURDOzs7O0lBeERDLDZCQUFXOztJQUNYLGdDQUFpQjs7SUFDakIsaUNBQVk7O0lBQ1osbUNBQXdCOztJQUN4QixzQ0FBaUI7O0lBQ2pCLHFDQUFtQjs7SUFDbkIsd0NBQXdCOztJQUN4QixzQ0FBaUI7O0lBQ2pCLHFDQUE2Qjs7SUFDN0IsaUNBQWlCOztJQUNqQixvQ0FBb0I7O0lBQ3BCLCtCQUFhOztJQUNiLDBDQUF3Qjs7SUFDeEIsMENBQXdCOztJQUN4QixxQ0FBbUI7O0lBQ25CLHFDQUFnQjs7SUFDaEIscUNBQWdCOztJQUNoQixpQ0FBWTs7SUFDWixxQ0FBbUI7O0lBQ25CLHlDQUF1Qjs7SUFDdkIseUNBQXVCOztJQUN2Qix3Q0FBbUI7O0lBQ25CLDZDQUE2Qjs7SUFDN0Isb0NBQWtCOztJQUNsQixxQ0FBbUI7O0lBQ25CLHVDQUFxQjs7SUFDckIscUNBQW1COztJQUNuQixxQ0FBbUI7O0lBQ25CLG1DQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFN0YWNrVHJhY2UgZnJvbSAnc3RhY2t0cmFjZS1qcyc7XHJcbmltcG9ydCB7Rm5Ccm93c2VyRGV0YWlsfSBmcm9tICcuLi9oZWxwZXJzL2ZuLWJyb3dzZXIuZGV0YWlsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGTkV4Y2VwdGlvbkpzb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgYXBwSUQgPSAnSFctV2ViJztcclxuICBhcHBWZXI6IGFueTtcclxuICBsYW5ndWFnZSA9ICdKYXZhc2NyaXB0JztcclxuICBsYW5nVmVyc2lvbjogYW55O1xyXG4gIGRldmljZVR5cGUgPSAnV2ViJztcclxuICBkZXZpY2VWZXJzaW9uOiBhbnkgPSAnJzsgLy8gc3lzdGVtT2JqZWN0LmJyb3dzZXJNYWpvclZlcnNpb247XHJcbiAgZGV2aWNlQnJhbmQgPSAnJzsgLy8gc3lzdGVtT2JqZWN0LmJyb3dzZXI7XHJcbiAgZGV2aWNlVGltZTogYW55ID0gbmV3IERhdGUoKTtcclxuICBvc1R5cGU6IGFueSA9ICcnOyAvLyBzeXN0ZW1PYmplY3Qub3M7XHJcbiAgb3NWZXJzaW9uOiBhbnkgPSAnJzsgLy8gc3lzdGVtT2JqZWN0Lm9zK1wiIFwiK3N5c3RlbU9iamVjdC5vc1ZlcnNpb247XHJcbiAgcGFnZTogc3RyaW5nO1xyXG4gIGN1c3RVc2VyRW1haWxJRDogc3RyaW5nO1xyXG4gIGN1c3RvbWVyRW1haWxJRDogc3RyaW5nO1xyXG4gIHNpdGVNYWluSUQ6IHN0cmluZztcclxuICBjdXN0VXNlclBLOiBhbnk7XHJcbiAgY3VzdG9tZXJQazogYW55O1xyXG4gIHNpdGVQazogYW55O1xyXG4gIGV4cE1lc3NhZ2U6IHN0cmluZztcclxuICByb290RXhwTGluZU51bTogbnVtYmVyO1xyXG4gIHJvb3RTdGFja1RyYWNlOiBzdHJpbmc7XHJcbiAgZXhwU3RhY2tUcmFjZTogYW55O1xyXG4gIHNlbGVjdGVkT2JqZWN0SGFzaDogYW55ID0ge307XHJcbiAgY2xhc3NOYW1lOiBzdHJpbmc7IC8vXHJcbiAgbWV0aG9kTmFtZTogc3RyaW5nOyAvL1xyXG4gIGNhdGVnb3J5TmFtZTogc3RyaW5nOyAvL1xyXG4gIHRocmVhZE5hbWU6IHN0cmluZzsgLy9cclxuICBsYXN0QWN0aW9uOiBzdHJpbmc7IC8vXHJcbiAgc2V2ZXJpdHk6IHN0cmluZzsgLy9cclxuXHJcbiAgY29uc3RydWN0b3IoZXhjZXB0aW9uOiBhbnkpIHtcclxuICAgIHRoaXMuaW5pdChleGNlcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgaW5pdChleGNlcHRpb246IGFueSkge1xyXG4gICAgY29uc3QgYnJvd3NlckRldGFpbCA9IG5ldyBGbkJyb3dzZXJEZXRhaWwoKS5icm93c2VyRGV0YWlsKCk7XHJcbiAgICB0aGlzLmRldmljZVZlcnNpb24gPSBicm93c2VyRGV0YWlsLmJyb3dzZXJNYWpvclZlcnNpb247XHJcbiAgICB0aGlzLmRldmljZUJyYW5kID0gYnJvd3NlckRldGFpbC5icm93c2VyO1xyXG4gICAgdGhpcy5kZXZpY2VUaW1lID0gbmV3IERhdGUoKTtcclxuICAgIHRoaXMub3NUeXBlID0gYnJvd3NlckRldGFpbC5vcztcclxuICAgIHRoaXMub3NWZXJzaW9uID0gdGhpcy5vc1R5cGUgKyAnICcgKyBicm93c2VyRGV0YWlsLm9zVmVyc2lvbjtcclxuICAgIHRoaXMuZXhwTWVzc2FnZSA9IGV4Y2VwdGlvbi5tZXNzYWdlO1xyXG4gICAgU3RhY2tUcmFjZS5mcm9tRXJyb3IoZXhjZXB0aW9uKS50aGVuKChfc3RhY2tUcmFjZSkgPT4ge1xyXG4gICAgICBjb25zdCBfcm9vdFN0YWNrVHJhayA9IF9zdGFja1RyYWNlWzBdO1xyXG4gICAgICB0aGlzLmV4cFN0YWNrVHJhY2UgPSBfc3RhY2tUcmFjZS5qb2luKCdcXG4nKTtcclxuICAgICAgdGhpcy5yb290U3RhY2tUcmFjZSA9IF9yb290U3RhY2tUcmFrLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMucm9vdEV4cExpbmVOdW0gPSBfcm9vdFN0YWNrVHJhay5saW5lTnVtYmVyO1xyXG4gICAgICB0aGlzLmlkID0gdGhpcy5leHBNZXNzYWdlICsgdGhpcy5leHBTdGFja1RyYWNlO1xyXG5cclxuICAgIH0pLmNhdGNoKChfZXJyKSA9PiB7XHJcbiAgICAgIHRoaXMuZXhwU3RhY2tUcmFjZSA9IGV4Y2VwdGlvbi50b1N0cmluZygpO1xyXG4gICAgICB0aGlzLnJvb3RTdGFja1RyYWNlID0gZXhjZXB0aW9uLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuaWQgPSB0aGlzLmV4cE1lc3NhZ2UgKyB0aGlzLmV4cFN0YWNrVHJhY2U7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19