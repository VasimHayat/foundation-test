/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
export class FnI18nService {
    /**
     * @param {?} http
     * @param {?} translateService
     */
    constructor(http, translateService) {
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
        (language) => {
            this.translateService.use(language);
            this.selectedLang = language;
        }));
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    setLanguage(lang) {
        this.selectedLang = lang;
        this.translateService.use(lang);
        this.languageSelected.next(lang);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    translate(key) {
        return this.translateService.instant(key);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return this.translateService.get(key);
    }
    /**
     * @param {?} lang
     * @param {?=} path
     * @return {?}
     */
    loadTranslations(lang, path = `./assets/i18n/${lang}.json`) {
        this.http.get(path).subscribe((/**
         * @param {?} messageJson
         * @return {?}
         */
        (messageJson) => {
            this.loadTranslateMessage(lang, messageJson);
        }));
    }
    /**
     * @param {?} lang
     * @param {?} messageJson
     * @return {?}
     */
    loadTranslateMessage(lang, messageJson) {
        this.translateService.setTranslation(lang, messageJson, true);
    }
    /**
     * @param {?} fieldKey
     * @param {?} validatorType
     * @return {?}
     */
    errorMessage(fieldKey, validatorType) {
        return fieldKey + '_' + validatorType;
    }
}
FnI18nService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FnI18nService.ctorParameters = () => [
    { type: HttpClient },
    { type: TranslateService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taTE4LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2kxOG4vZm4taTE4LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFLbEQsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBTXRCLFlBQW9CLElBQWdCLEVBQVUsZ0JBQWtDO1FBQTVELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSHhFLGlCQUFZLEdBQXdCLElBQUksQ0FBQztRQUMxQyxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBdUIsQ0FBQztRQUd6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLFFBQTZCLEVBQUUsRUFBRTtZQUM5RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsSUFBeUI7UUFFakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBQ0QsR0FBRyxDQUFDLEdBQVc7UUFDWCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsSUFBeUIsRUFBRSxPQUFlLGlCQUFpQixJQUFJLE9BQU87UUFDbkYsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsV0FBbUIsRUFBRSxFQUFFO1lBQ2xELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDakQsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxJQUF5QixFQUFFLFdBQW1CO1FBQy9ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFHRCxZQUFZLENBQUMsUUFBZ0IsRUFBRSxhQUFxQjtRQUNoRCxPQUFPLFFBQVEsR0FBRyxHQUFHLEdBQUcsYUFBYSxDQUFDO0lBQzFDLENBQUM7OztZQTNDSixVQUFVOzs7O1lBSkYsVUFBVTtZQURWLGdCQUFnQjs7Ozs7OztJQVFyQixvQ0FBeUM7Ozs7O0lBQ3pDLHFDQUFpRDs7SUFDakQseUNBQTZEOzs7OztJQUVqRCw2QkFBd0I7Ozs7O0lBQUUseUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmV4cG9ydCB0eXBlIFNVUFBPUlRFRF9MQU5HVUFHRVMgPSAnZW4nIHwgJ2RlJyB8ICdmcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGbkkxOG5TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGkxOG5EYXRhTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZExhbmc6IFNVUFBPUlRFRF9MQU5HVUFHRVMgPSAnZW4nO1xyXG4gICAgcHVibGljIGxhbmd1YWdlU2VsZWN0ZWQgPSBuZXcgU3ViamVjdDxTVVBQT1JURURfTEFOR1VBR0VTPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldERlZmF1bHRMYW5nKCdlbicpO1xyXG4gICAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UoJ2VuJyk7XHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZVNlbGVjdGVkLnN1YnNjcmliZSgobGFuZ3VhZ2U6IFNVUFBPUlRFRF9MQU5HVUFHRVMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5ndWFnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRMYW5nID0gbGFuZ3VhZ2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGFuZ3VhZ2UobGFuZzogU1VQUE9SVEVEX0xBTkdVQUdFU1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZExhbmcgPSBsYW5nO1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZyk7XHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZVNlbGVjdGVkLm5leHQobGFuZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNsYXRlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoa2V5KTtcclxuICAgIH1cclxuICAgIGdldChrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVHJhbnNsYXRpb25zKGxhbmc6IFNVUFBPUlRFRF9MQU5HVUFHRVMsIHBhdGg6IHN0cmluZyA9IGAuL2Fzc2V0cy9pMThuLyR7bGFuZ30uanNvbmApOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHBhdGgpLnN1YnNjcmliZSgobWVzc2FnZUpzb246IG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRUcmFuc2xhdGVNZXNzYWdlKGxhbmcsIG1lc3NhZ2VKc29uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVHJhbnNsYXRlTWVzc2FnZShsYW5nOiBTVVBQT1JURURfTEFOR1VBR0VTLCBtZXNzYWdlSnNvbjogb2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldFRyYW5zbGF0aW9uKGxhbmcsIG1lc3NhZ2VKc29uLCB0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZXJyb3JNZXNzYWdlKGZpZWxkS2V5OiBzdHJpbmcsIHZhbGlkYXRvclR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBmaWVsZEtleSArICdfJyArIHZhbGlkYXRvclR5cGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==