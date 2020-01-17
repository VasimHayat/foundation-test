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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdWktZmllbGQtbWV0YWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2lucHV0L3NlcnZpY2UvZm4tdWktZmllbGQtbWV0YWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUl6QyxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQUluQyxhQUFhLENBQUMsVUFBa0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxVQUFrQixFQUFFLFVBQXdCO1FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFVBQWtCO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7OztZQW5CRixVQUFVOzs7O0lBR1QsOENBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGbklucHV0TW9kZWx9IGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWwvZm4taW5wdXQubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm5VaUZpZWxkTWV0YURhdGFTZXJ2aWNlIHtcclxuXHJcbiAgdWlGaWVsZE1hcDogb2JqZWN0O1xyXG5cclxuICBnZXRGaWVsZEZvcklkKHVpRmllbGRLZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMudWlGaWVsZE1hcFt1aUZpZWxkS2V5XTtcclxuICB9XHJcblxyXG4gIHNldEZpZWxkRm9ySWQodWlGaWVsZEtleTogc3RyaW5nLCB1aUZpZWxkVmFsOiBGbklucHV0TW9kZWwpIHtcclxuICAgIHRoaXMudWlGaWVsZE1hcFt1aUZpZWxkS2V5XSA9IHVpRmllbGRWYWw7XHJcbiAgfVxyXG5cclxuICBzZXRGaWVsZE1hcCh1aUZpZWxkTWFwOiBvYmplY3QpIHtcclxuICAgIHRoaXMudWlGaWVsZE1hcCA9IHVpRmllbGRNYXA7XHJcbiAgfVxyXG5cclxuICBnZXRGaWVsZE1hcCgpIHtcclxuICAgIHJldHVybiB0aGlzLnVpRmllbGRNYXA7XHJcbiAgfVxyXG59XHJcbiJdfQ==