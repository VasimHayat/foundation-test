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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdGFibGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvdGFibGUvZm4tdGFibGUuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxpQ0FHQzs7O0lBRkcsNkJBQWU7O0lBQ2YsMkJBQVU7O0FBR2Q7SUFBQTtRQU9JLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQU12QixDQUFDO0lBaEJVLDhCQUFnQixHQUFHLFVBQVUsQ0FBQztJQUM5Qiw4QkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7O0lBQzVDLDhCQUFnQixHQUFHLElBQUksQ0FBQztJQWNuQyxvQkFBQztDQUFBLEFBakJELElBaUJDO1NBakJZLGFBQWE7OztJQUN0QiwrQkFBcUM7O0lBQ3JDLCtCQUE0Qjs7SUFDNUIsK0JBQStCOztJQUUvQixrQ0FBZ0I7O0lBQ2hCLG1DQUFvQjs7SUFDcEIsbUNBQWtCOztJQUNsQixpQ0FBZ0I7O0lBQ2hCLG1DQUFtQjs7SUFDbkIsaUNBQWlCOztJQUNqQixtQ0FBbUI7O0lBQ25CLHVDQUF3Qjs7SUFDeEIsdUNBQXlCOztJQUN6QixxQ0FBdUI7O0lBRXZCLG9DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDcmVhdGVkIGJ5IG12YXNpbSBvbiAxMi85LzE3LlxuICovXG5cbi8qXG4gKiB0YWJsZUFjdGlvbiAtPlxuICogICdBREQnIC0+IEFkZCBBY3Rpb25cbiAqICAnUkVGUkVTSCcgLT4gUmVmcmVzaCBBY3Rpb25cbiAqXG4qL1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlQWN0aW9uIHtcbiAgICBhY3Rpb246IHN0cmluZztcbiAgICBkYXRhOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBGblRhYmxlQ29uZmlnIHtcbiAgICBzdGF0aWMgZGVmYWx1dFNvcnRDbGFzcyA9ICcgZmEtc29ydCc7XG4gICAgc3RhdGljIGRlZmF1bHRTb3J0VmFsdWUgPSAxOyAvLyAtMSA9IGRlc2MgLCAxID0gYXNjXG4gICAgc3RhdGljIGRlZmF1bHRJc0NvbFNvcnQgPSB0cnVlO1xuXG4gICAgdW5pcXVlS2V5PzogYW55O1xuICAgIHRhYmxlQ2xhc3M/OiBzdHJpbmc7XG4gICAgcGFnaW5hdGlvbj89IHRydWU7XG4gICAgZmlsdGVyT24/PSB0cnVlO1xuICAgIGhpZGVBY3Rpb24/PSBmYWxzZTtcbiAgICBoaWRlRWRpdD89IGZhbHNlO1xuICAgIGhpZGVEZWxldGU/PSBmYWxzZTtcbiAgICBkZWZhdWx0U29ydEtleT86IHN0cmluZztcbiAgICBoaWRlUGFnaW5hdGlvbj86IGJvb2xlYW47XG4gICAgaXNTZWxlY3RhYmxlPzogYm9vbGVhbjtcblxuICAgIHRhYmxlQWN0aW9uOiBTdWJqZWN0PFRhYmxlQWN0aW9uPjtcbn1cbiJdfQ==