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
export class FnTableConfig {
    constructor() {
        this.pagination = true;
        this.filterOn = true;
        this.hideAction = false;
        this.hideEdit = false;
        this.hideDelete = false;
    }
}
FnTableConfig.defalutSortClass = ' fa-sort';
FnTableConfig.defaultSortValue = 1; // -1 = desc , 1 = asc
// -1 = desc , 1 = asc
FnTableConfig.defaultIsColSort = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdGFibGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvdGFibGUvZm4tdGFibGUuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQSxpQ0FHQzs7O0lBRkMsNkJBQWU7O0lBQ2YsMkJBQVU7O0FBR1osTUFBTSxPQUFPLGFBQWE7SUFBMUI7UUFPRSxlQUFVLEdBQUssSUFBSSxDQUFDO1FBQ3BCLGFBQVEsR0FBSyxJQUFJLENBQUM7UUFDbEIsZUFBVSxHQUFLLEtBQUssQ0FBQztRQUNyQixhQUFRLEdBQUssS0FBSyxDQUFDO1FBQ25CLGVBQVUsR0FBSyxLQUFLLENBQUM7SUFNdkIsQ0FBQzs7QUFoQlEsOEJBQWdCLEdBQUcsVUFBVSxDQUFDO0FBQzlCLDhCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjs7QUFDNUMsOEJBQWdCLEdBQUcsSUFBSSxDQUFDOzs7SUFGL0IsK0JBQXFDOztJQUNyQywrQkFBNEI7O0lBQzVCLCtCQUErQjs7SUFFL0Isa0NBQWlCOztJQUNqQixtQ0FBcUI7O0lBQ3JCLG1DQUFvQjs7SUFDcEIsaUNBQWtCOztJQUNsQixtQ0FBcUI7O0lBQ3JCLGlDQUFtQjs7SUFDbkIsbUNBQXFCOztJQUNyQix1Q0FBd0I7O0lBQ3hCLHVDQUF5Qjs7SUFDekIscUNBQXVCOztJQUV2QixvQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ3JlYXRlZCBieSBtdmFzaW0gb24gMTIvOS8xNy5cbiAqL1xuXG4vKlxuICogdGFibGVBY3Rpb24gLT5cbiAqICAnQUREJyAtPiBBZGQgQWN0aW9uXG4gKiAgJ1JFRlJFU0gnIC0+IFJlZnJlc2ggQWN0aW9uXG4gKlxuKi9cblxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUFjdGlvbiB7XG4gIGFjdGlvbjogc3RyaW5nO1xuICBkYXRhOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBGblRhYmxlQ29uZmlnIHtcbiAgc3RhdGljIGRlZmFsdXRTb3J0Q2xhc3MgPSAnIGZhLXNvcnQnO1xuICBzdGF0aWMgZGVmYXVsdFNvcnRWYWx1ZSA9IDE7IC8vIC0xID0gZGVzYyAsIDEgPSBhc2NcbiAgc3RhdGljIGRlZmF1bHRJc0NvbFNvcnQgPSB0cnVlO1xuXG4gIHVuaXF1ZUtleSA/OiBhbnk7XG4gIHRhYmxlQ2xhc3MgPzogc3RyaW5nO1xuICBwYWdpbmF0aW9uID8gPSB0cnVlO1xuICBmaWx0ZXJPbiA/ID0gdHJ1ZTtcbiAgaGlkZUFjdGlvbiA/ID0gZmFsc2U7XG4gIGhpZGVFZGl0ID8gPSBmYWxzZTtcbiAgaGlkZURlbGV0ZSA/ID0gZmFsc2U7XG4gIGRlZmF1bHRTb3J0S2V5Pzogc3RyaW5nO1xuICBoaWRlUGFnaW5hdGlvbj86IGJvb2xlYW47XG4gIGlzU2VsZWN0YWJsZT86IGJvb2xlYW47XG5cbiAgdGFibGVBY3Rpb246IFN1YmplY3Q8VGFibGVBY3Rpb24+O1xufVxuIl19