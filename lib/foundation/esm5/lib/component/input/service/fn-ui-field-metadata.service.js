/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var FnUiFieldMetaDataService = /** @class */ (function () {
    function FnUiFieldMetaDataService() {
    }
    /**
     * @param {?} uiFieldKey
     * @return {?}
     */
    FnUiFieldMetaDataService.prototype.getFieldForId = /**
     * @param {?} uiFieldKey
     * @return {?}
     */
    function (uiFieldKey) {
        return this.uiFieldMap[uiFieldKey];
    };
    /**
     * @param {?} uiFieldKey
     * @param {?} uiFieldVal
     * @return {?}
     */
    FnUiFieldMetaDataService.prototype.setFieldForId = /**
     * @param {?} uiFieldKey
     * @param {?} uiFieldVal
     * @return {?}
     */
    function (uiFieldKey, uiFieldVal) {
        this.uiFieldMap[uiFieldKey] = uiFieldVal;
    };
    /**
     * @param {?} uiFieldMap
     * @return {?}
     */
    FnUiFieldMetaDataService.prototype.setFieldMap = /**
     * @param {?} uiFieldMap
     * @return {?}
     */
    function (uiFieldMap) {
        this.uiFieldMap = uiFieldMap;
    };
    /**
     * @return {?}
     */
    FnUiFieldMetaDataService.prototype.getFieldMap = /**
     * @return {?}
     */
    function () {
        return this.uiFieldMap;
    };
    FnUiFieldMetaDataService.decorators = [
        { type: Injectable }
    ];
    return FnUiFieldMetaDataService;
}());
export { FnUiFieldMetaDataService };
if (false) {
    /** @type {?} */
    FnUiFieldMetaDataService.prototype.uiFieldMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdWktZmllbGQtbWV0YWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2lucHV0L3NlcnZpY2UvZm4tdWktZmllbGQtbWV0YWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQztJQUFBO0lBb0JBLENBQUM7Ozs7O0lBZkcsZ0RBQWE7Ozs7SUFBYixVQUFjLFVBQWtCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFRCxnREFBYTs7Ozs7SUFBYixVQUFjLFVBQWtCLEVBQUUsVUFBd0I7UUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxVQUFVLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCw4Q0FBVzs7OztJQUFYLFVBQVksVUFBa0I7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELDhDQUFXOzs7SUFBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDOztnQkFuQkosVUFBVTs7SUFvQlgsK0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQW5CWSx3QkFBd0I7OztJQUVqQyw4Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZuSW5wdXRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWwvZm4taW5wdXQubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm5VaUZpZWxkTWV0YURhdGFTZXJ2aWNlIHtcclxuXHJcbiAgICB1aUZpZWxkTWFwOiBvYmplY3Q7XHJcblxyXG4gICAgZ2V0RmllbGRGb3JJZCh1aUZpZWxkS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51aUZpZWxkTWFwW3VpRmllbGRLZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkRm9ySWQodWlGaWVsZEtleTogc3RyaW5nLCB1aUZpZWxkVmFsOiBGbklucHV0TW9kZWwpIHtcclxuICAgICAgICB0aGlzLnVpRmllbGRNYXBbdWlGaWVsZEtleV0gPSB1aUZpZWxkVmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkTWFwKHVpRmllbGRNYXA6IG9iamVjdCkge1xyXG4gICAgICAgIHRoaXMudWlGaWVsZE1hcCA9IHVpRmllbGRNYXA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmllbGRNYXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudWlGaWVsZE1hcDtcclxuICAgIH1cclxufVxyXG4iXX0=