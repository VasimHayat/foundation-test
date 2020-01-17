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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdWktZmllbGQtbWV0YWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2lucHV0L3NlcnZpY2UvZm4tdWktZmllbGQtbWV0YWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QztJQUFBO0lBb0JBLENBQUM7Ozs7O0lBZkMsZ0RBQWE7Ozs7SUFBYixVQUFjLFVBQWtCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxnREFBYTs7Ozs7SUFBYixVQUFjLFVBQWtCLEVBQUUsVUFBd0I7UUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxVQUFVLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCw4Q0FBVzs7OztJQUFYLFVBQVksVUFBa0I7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELDhDQUFXOzs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOztnQkFuQkYsVUFBVTs7SUFvQlgsK0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQW5CWSx3QkFBd0I7OztJQUVuQyw4Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0ZuSW5wdXRNb2RlbH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbC9mbi1pbnB1dC5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGblVpRmllbGRNZXRhRGF0YVNlcnZpY2Uge1xyXG5cclxuICB1aUZpZWxkTWFwOiBvYmplY3Q7XHJcblxyXG4gIGdldEZpZWxkRm9ySWQodWlGaWVsZEtleTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy51aUZpZWxkTWFwW3VpRmllbGRLZXldO1xyXG4gIH1cclxuXHJcbiAgc2V0RmllbGRGb3JJZCh1aUZpZWxkS2V5OiBzdHJpbmcsIHVpRmllbGRWYWw6IEZuSW5wdXRNb2RlbCkge1xyXG4gICAgdGhpcy51aUZpZWxkTWFwW3VpRmllbGRLZXldID0gdWlGaWVsZFZhbDtcclxuICB9XHJcblxyXG4gIHNldEZpZWxkTWFwKHVpRmllbGRNYXA6IG9iamVjdCkge1xyXG4gICAgdGhpcy51aUZpZWxkTWFwID0gdWlGaWVsZE1hcDtcclxuICB9XHJcblxyXG4gIGdldEZpZWxkTWFwKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudWlGaWVsZE1hcDtcclxuICB9XHJcbn1cclxuIl19