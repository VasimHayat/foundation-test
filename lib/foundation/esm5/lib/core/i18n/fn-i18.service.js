/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var FnI18nService = /** @class */ (function () {
    function FnI18nService() {
    }
    /**
     * @param {?} _i18nDataMap
     * @return {?}
     */
    FnI18nService.prototype.setI18Data = /**
     * @param {?} _i18nDataMap
     * @return {?}
     */
    function (_i18nDataMap) {
        this.i18nDataMap = _i18nDataMap;
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
        if (this.i18nDataMap.hasOwnProperty(key)) {
            return this.i18nDataMap[key] || key;
        }
        else {
            return key;
        }
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
    return FnI18nService;
}());
export { FnI18nService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnI18nService.prototype.i18nDataMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taTE4LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaTE4bi9mbi1pMTguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQztJQUFBO0lBcUJBLENBQUM7Ozs7O0lBaEJHLGtDQUFVOzs7O0lBQVYsVUFBVyxZQUFpQztRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztJQUNwQyxDQUFDOzs7OztJQUdELGlDQUFTOzs7O0lBQVQsVUFBVSxHQUFXO1FBQ2pCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQztTQUN2QzthQUFNO1lBQ0gsT0FBTyxHQUFHLENBQUM7U0FDZDtJQUNMLENBQUM7Ozs7OztJQUVELG9DQUFZOzs7OztJQUFaLFVBQWEsUUFBZ0IsRUFBRSxhQUFxQjtRQUNoRCxPQUFPLFFBQVEsR0FBRyxHQUFHLEdBQUcsYUFBYSxDQUFDO0lBQzFDLENBQUM7O2dCQXBCSixVQUFVOztJQXFCWCxvQkFBQztDQUFBLEFBckJELElBcUJDO1NBcEJZLGFBQWE7Ozs7OztJQUV0QixvQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm5JMThuU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBpMThuRGF0YU1hcDogTWFwPHN0cmluZywgc3RyaW5nPjtcclxuXHJcbiAgICBzZXRJMThEYXRhKF9pMThuRGF0YU1hcDogTWFwPHN0cmluZywgc3RyaW5nPikge1xyXG4gICAgICAgIHRoaXMuaTE4bkRhdGFNYXAgPSBfaTE4bkRhdGFNYXA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRyYW5zbGF0ZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaTE4bkRhdGFNYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pMThuRGF0YU1hcFtrZXldIHx8IGtleTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlcnJvck1lc3NhZ2UoZmllbGRLZXk6IHN0cmluZywgdmFsaWRhdG9yVHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkS2V5ICsgJ18nICsgdmFsaWRhdG9yVHlwZTtcclxuICAgIH1cclxufVxyXG5cclxuIl19