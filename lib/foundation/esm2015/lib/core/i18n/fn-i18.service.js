/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class FnI18nService {
    /**
     * @param {?} _i18nDataMap
     * @return {?}
     */
    setI18Data(_i18nDataMap) {
        this.i18nDataMap = _i18nDataMap;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    translate(key) {
        if (this.i18nDataMap.hasOwnProperty(key)) {
            return this.i18nDataMap[key] || key;
        }
        else {
            return key;
        }
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnI18nService.prototype.i18nDataMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taTE4LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaTE4bi9mbi1pMTguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFJdEIsVUFBVSxDQUFDLFlBQWlDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBR0QsU0FBUyxDQUFDLEdBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDO1NBQ3ZDO2FBQU07WUFDSCxPQUFPLEdBQUcsQ0FBQztTQUNkO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLFFBQWdCLEVBQUUsYUFBcUI7UUFDaEQsT0FBTyxRQUFRLEdBQUcsR0FBRyxHQUFHLGFBQWEsQ0FBQztJQUMxQyxDQUFDOzs7WUFwQkosVUFBVTs7Ozs7OztJQUdQLG9DQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGbkkxOG5TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGkxOG5EYXRhTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xyXG5cclxuICAgIHNldEkxOERhdGEoX2kxOG5EYXRhTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5pMThuRGF0YU1hcCA9IF9pMThuRGF0YU1hcDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdHJhbnNsYXRlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5pMThuRGF0YU1hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmkxOG5EYXRhTWFwW2tleV0gfHwga2V5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVycm9yTWVzc2FnZShmaWVsZEtleTogc3RyaW5nLCB2YWxpZGF0b3JUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gZmllbGRLZXkgKyAnXycgKyB2YWxpZGF0b3JUeXBlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=