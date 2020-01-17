/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
var FnI18nService = /** @class */ (function () {
    function FnI18nService(http, translateService) {
        var _this = this;
        this.http = http;
        this.translateService = translateService;
        this.selectedLang = 'en';
        this.languageSelected = new Subject();
        this.translateService.setDefaultLang('en');
        this.setLanguage('en');
        this.languageSelected.subscribe((/**
         * @param {?} language
         * @return {?}
         */
        function (language) {
            _this.translateService.use(language);
            _this.selectedLang = language;
        }));
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    FnI18nService.prototype.setLanguage = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this.selectedLang = lang;
        this.translateService.use(lang);
        this.languageSelected.next(lang);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FnI18nService.prototype.translate = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.translateService.instant(key);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FnI18nService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.translateService.get(key);
    };
    /**
     * @param {?} lang
     * @param {?=} path
     * @return {?}
     */
    FnI18nService.prototype.loadTranslations = /**
     * @param {?} lang
     * @param {?=} path
     * @return {?}
     */
    function (lang, path) {
        var _this = this;
        if (path === void 0) { path = "./assets/i18n/" + lang + ".json"; }
        this.http.get(path).subscribe((/**
         * @param {?} messageJson
         * @return {?}
         */
        function (messageJson) {
            _this.loadTranslateMessage(lang, messageJson);
        }));
    };
    /**
     * @param {?} lang
     * @param {?} messageJson
     * @return {?}
     */
    FnI18nService.prototype.loadTranslateMessage = /**
     * @param {?} lang
     * @param {?} messageJson
     * @return {?}
     */
    function (lang, messageJson) {
        this.translateService.setTranslation(lang, messageJson, true);
    };
    /**
     * @param {?} fieldKey
     * @param {?} validatorType
     * @return {?}
     */
    FnI18nService.prototype.errorMessage = /**
     * @param {?} fieldKey
     * @param {?} validatorType
     * @return {?}
     */
    function (fieldKey, validatorType) {
        return fieldKey + '_' + validatorType;
    };
    FnI18nService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FnI18nService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: TranslateService }
    ]; };
    return FnI18nService;
}());
export { FnI18nService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnI18nService.prototype.i18nDataMap;
    /**
     * @type {?}
     * @private
     */
    FnI18nService.prototype.selectedLang;
    /** @type {?} */
    FnI18nService.prototype.languageSelected;
    /**
     * @type {?}
     * @private
     */
    FnI18nService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    FnI18nService.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taTE4LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2kxOG4vZm4taTE4LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJbEQ7SUFPSSx1QkFBb0IsSUFBZ0IsRUFBVSxnQkFBa0M7UUFBaEYsaUJBT0M7UUFQbUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFIeEUsaUJBQVksR0FBd0IsSUFBSSxDQUFDO1FBQzFDLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUF1QixDQUFDO1FBR3pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsUUFBNkI7WUFDMUQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwQyxLQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRUQsbUNBQVc7Ozs7SUFBWCxVQUFZLElBQXlCO1FBRWpDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELGlDQUFTOzs7O0lBQVQsVUFBVSxHQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUNELDJCQUFHOzs7O0lBQUgsVUFBSSxHQUFXO1FBQ1gsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUVELHdDQUFnQjs7Ozs7SUFBaEIsVUFBaUIsSUFBeUIsRUFBRSxJQUEyQztRQUF2RixpQkFJQztRQUoyQyxxQkFBQSxFQUFBLDBCQUFnQyxJQUFJLFVBQU87UUFDbkYsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsV0FBbUI7WUFDOUMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNqRCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7OztJQUVELDRDQUFvQjs7Ozs7SUFBcEIsVUFBcUIsSUFBeUIsRUFBRSxXQUFtQjtRQUMvRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBR0Qsb0NBQVk7Ozs7O0lBQVosVUFBYSxRQUFnQixFQUFFLGFBQXFCO1FBQ2hELE9BQU8sUUFBUSxHQUFHLEdBQUcsR0FBRyxhQUFhLENBQUM7SUFDMUMsQ0FBQzs7Z0JBM0NKLFVBQVU7Ozs7Z0JBSkYsVUFBVTtnQkFEVixnQkFBZ0I7O0lBaUR6QixvQkFBQztDQUFBLEFBNUNELElBNENDO1NBM0NZLGFBQWE7Ozs7OztJQUV0QixvQ0FBeUM7Ozs7O0lBQ3pDLHFDQUFpRDs7SUFDakQseUNBQTZEOzs7OztJQUVqRCw2QkFBd0I7Ozs7O0lBQUUseUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmV4cG9ydCB0eXBlIFNVUFBPUlRFRF9MQU5HVUFHRVMgPSAnZW4nIHwgJ2RlJyB8ICdmcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGbkkxOG5TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGkxOG5EYXRhTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZExhbmc6IFNVUFBPUlRFRF9MQU5HVUFHRVMgPSAnZW4nO1xyXG4gICAgcHVibGljIGxhbmd1YWdlU2VsZWN0ZWQgPSBuZXcgU3ViamVjdDxTVVBQT1JURURfTEFOR1VBR0VTPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldERlZmF1bHRMYW5nKCdlbicpO1xyXG4gICAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UoJ2VuJyk7XHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZVNlbGVjdGVkLnN1YnNjcmliZSgobGFuZ3VhZ2U6IFNVUFBPUlRFRF9MQU5HVUFHRVMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5ndWFnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRMYW5nID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGFuZ3VhZ2UobGFuZzogU1VQUE9SVEVEX0xBTkdVQUdFU1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZExhbmcgPSBsYW5nO1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZyk7XHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZVNlbGVjdGVkLm5leHQobGFuZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNsYXRlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoa2V5KTtcclxuICAgIH1cclxuICAgIGdldChrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVHJhbnNsYXRpb25zKGxhbmc6IFNVUFBPUlRFRF9MQU5HVUFHRVMsIHBhdGg6IHN0cmluZyA9IGAuL2Fzc2V0cy9pMThuLyR7bGFuZ30uanNvbmApOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHBhdGgpLnN1YnNjcmliZSgobWVzc2FnZUpzb246IG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRUcmFuc2xhdGVNZXNzYWdlKGxhbmcsIG1lc3NhZ2VKc29uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVHJhbnNsYXRlTWVzc2FnZShsYW5nOiBTVVBQT1JURURfTEFOR1VBR0VTLCBtZXNzYWdlSnNvbjogb2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldFRyYW5zbGF0aW9uKGxhbmcsIG1lc3NhZ2VKc29uLCB0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZXJyb3JNZXNzYWdlKGZpZWxkS2V5OiBzdHJpbmcsIHZhbGlkYXRvclR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBmaWVsZEtleSArICdfJyArIHZhbGlkYXRvclR5cGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==