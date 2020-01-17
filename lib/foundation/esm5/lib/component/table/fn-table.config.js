/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Created by mvasim on 12/9/17.
 */
/*
 * tableAction ->
 *  'ADD' -> Add Action
 *  'REFRESH' -> Refresh Action
 *
*/
/**
 * @record
 */
export function TableAction() { }
if (false) {
    /** @type {?} */
    TableAction.prototype.action;
    /** @type {?} */
    TableAction.prototype.data;
}
var FnTableConfig = /** @class */ (function () {
    function FnTableConfig() {
        this.pagination = true;
        this.filterOn = true;
        this.hideAction = false;
        this.hideEdit = false;
        this.hideDelete = false;
    }
    FnTableConfig.defalutSortClass = ' fa-sort';
    FnTableConfig.defaultSortValue = 1; // -1 = desc , 1 = asc
    // -1 = desc , 1 = asc
    FnTableConfig.defaultIsColSort = true;
    return FnTableConfig;
}());
export { FnTableConfig };
if (false) {
    /** @type {?} */
    FnTableConfig.defalutSortClass;
    /** @type {?} */
    FnTableConfig.defaultSortValue;
    /** @type {?} */
    FnTableConfig.defaultIsColSort;
    /** @type {?} */
    FnTableConfig.prototype.uniqueKey;
    /** @type {?} */
    FnTableConfig.prototype.tableClass;
    /** @type {?} */
    FnTableConfig.prototype.pagination;
    /** @type {?} */
    FnTableConfig.prototype.filterOn;
    /** @type {?} */
    FnTableConfig.prototype.hideAction;
    /** @type {?} */
    FnTableConfig.prototype.hideEdit;
    /** @type {?} */
    FnTableConfig.prototype.hideDelete;
    /** @type {?} */
    FnTableConfig.prototype.defaultSortKey;
    /** @type {?} */
    FnTableConfig.prototype.hidePagination;
    /** @type {?} */
    FnTableConfig.prototype.isSelectable;
    /** @type {?} */
    FnTableConfig.prototype.tableAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdGFibGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvdGFibGUvZm4tdGFibGUuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQSxpQ0FHQzs7O0lBRkMsNkJBQWU7O0lBQ2YsMkJBQVU7O0FBR1o7SUFBQTtRQU9FLGVBQVUsR0FBSyxJQUFJLENBQUM7UUFDcEIsYUFBUSxHQUFLLElBQUksQ0FBQztRQUNsQixlQUFVLEdBQUssS0FBSyxDQUFDO1FBQ3JCLGFBQVEsR0FBSyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFLLEtBQUssQ0FBQztJQU12QixDQUFDO0lBaEJRLDhCQUFnQixHQUFHLFVBQVUsQ0FBQztJQUM5Qiw4QkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7O0lBQzVDLDhCQUFnQixHQUFHLElBQUksQ0FBQztJQWNqQyxvQkFBQztDQUFBLEFBakJELElBaUJDO1NBakJZLGFBQWE7OztJQUN4QiwrQkFBcUM7O0lBQ3JDLCtCQUE0Qjs7SUFDNUIsK0JBQStCOztJQUUvQixrQ0FBaUI7O0lBQ2pCLG1DQUFxQjs7SUFDckIsbUNBQW9COztJQUNwQixpQ0FBa0I7O0lBQ2xCLG1DQUFxQjs7SUFDckIsaUNBQW1COztJQUNuQixtQ0FBcUI7O0lBQ3JCLHVDQUF3Qjs7SUFDeEIsdUNBQXlCOztJQUN6QixxQ0FBdUI7O0lBRXZCLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDcmVhdGVkIGJ5IG12YXNpbSBvbiAxMi85LzE3LlxuICovXG5cbi8qXG4gKiB0YWJsZUFjdGlvbiAtPlxuICogICdBREQnIC0+IEFkZCBBY3Rpb25cbiAqICAnUkVGUkVTSCcgLT4gUmVmcmVzaCBBY3Rpb25cbiAqXG4qL1xuXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlQWN0aW9uIHtcbiAgYWN0aW9uOiBzdHJpbmc7XG4gIGRhdGE6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIEZuVGFibGVDb25maWcge1xuICBzdGF0aWMgZGVmYWx1dFNvcnRDbGFzcyA9ICcgZmEtc29ydCc7XG4gIHN0YXRpYyBkZWZhdWx0U29ydFZhbHVlID0gMTsgLy8gLTEgPSBkZXNjICwgMSA9IGFzY1xuICBzdGF0aWMgZGVmYXVsdElzQ29sU29ydCA9IHRydWU7XG5cbiAgdW5pcXVlS2V5ID86IGFueTtcbiAgdGFibGVDbGFzcyA/OiBzdHJpbmc7XG4gIHBhZ2luYXRpb24gPyA9IHRydWU7XG4gIGZpbHRlck9uID8gPSB0cnVlO1xuICBoaWRlQWN0aW9uID8gPSBmYWxzZTtcbiAgaGlkZUVkaXQgPyA9IGZhbHNlO1xuICBoaWRlRGVsZXRlID8gPSBmYWxzZTtcbiAgZGVmYXVsdFNvcnRLZXk/OiBzdHJpbmc7XG4gIGhpZGVQYWdpbmF0aW9uPzogYm9vbGVhbjtcbiAgaXNTZWxlY3RhYmxlPzogYm9vbGVhbjtcblxuICB0YWJsZUFjdGlvbjogU3ViamVjdDxUYWJsZUFjdGlvbj47XG59XG4iXX0=