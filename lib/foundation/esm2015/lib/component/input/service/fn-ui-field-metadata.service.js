/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class FnUiFieldMetaDataService {
    /**
     * @param {?} uiFieldKey
     * @return {?}
     */
    getFieldForId(uiFieldKey) {
        return this.uiFieldMap[uiFieldKey];
    }
    /**
     * @param {?} uiFieldKey
     * @param {?} uiFieldVal
     * @return {?}
     */
    setFieldForId(uiFieldKey, uiFieldVal) {
        this.uiFieldMap[uiFieldKey] = uiFieldVal;
    }
    /**
     * @param {?} uiFieldMap
     * @return {?}
     */
    setFieldMap(uiFieldMap) {
        this.uiFieldMap = uiFieldMap;
    }
    /**
     * @return {?}
     */
    getFieldMap() {
        return this.uiFieldMap;
    }
}
FnUiFieldMetaDataService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    FnUiFieldMetaDataService.prototype.uiFieldMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdWktZmllbGQtbWV0YWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2lucHV0L3NlcnZpY2UvZm4tdWktZmllbGQtbWV0YWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQUlqQyxhQUFhLENBQUMsVUFBa0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxVQUFrQixFQUFFLFVBQXdCO1FBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFVBQWtCO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7OztZQW5CSixVQUFVOzs7O0lBR1AsOENBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGbklucHV0TW9kZWwgfSBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVsL2ZuLWlucHV0Lm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZuVWlGaWVsZE1ldGFEYXRhU2VydmljZSB7XHJcblxyXG4gICAgdWlGaWVsZE1hcDogb2JqZWN0O1xyXG5cclxuICAgIGdldEZpZWxkRm9ySWQodWlGaWVsZEtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudWlGaWVsZE1hcFt1aUZpZWxkS2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZEZvcklkKHVpRmllbGRLZXk6IHN0cmluZywgdWlGaWVsZFZhbDogRm5JbnB1dE1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy51aUZpZWxkTWFwW3VpRmllbGRLZXldID0gdWlGaWVsZFZhbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZE1hcCh1aUZpZWxkTWFwOiBvYmplY3QpIHtcclxuICAgICAgICB0aGlzLnVpRmllbGRNYXAgPSB1aUZpZWxkTWFwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpZWxkTWFwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVpRmllbGRNYXA7XHJcbiAgICB9XHJcbn1cclxuIl19