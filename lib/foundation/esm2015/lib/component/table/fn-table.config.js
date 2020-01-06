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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdGFibGUuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvdGFibGUvZm4tdGFibGUuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxpQ0FHQzs7O0lBRkcsNkJBQWU7O0lBQ2YsMkJBQVU7O0FBR2QsTUFBTSxPQUFPLGFBQWE7SUFBMUI7UUFPSSxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFNdkIsQ0FBQzs7QUFoQlUsOEJBQWdCLEdBQUcsVUFBVSxDQUFDO0FBQzlCLDhCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjs7QUFDNUMsOEJBQWdCLEdBQUcsSUFBSSxDQUFDOzs7SUFGL0IsK0JBQXFDOztJQUNyQywrQkFBNEI7O0lBQzVCLCtCQUErQjs7SUFFL0Isa0NBQWdCOztJQUNoQixtQ0FBb0I7O0lBQ3BCLG1DQUFrQjs7SUFDbEIsaUNBQWdCOztJQUNoQixtQ0FBbUI7O0lBQ25CLGlDQUFpQjs7SUFDakIsbUNBQW1COztJQUNuQix1Q0FBd0I7O0lBQ3hCLHVDQUF5Qjs7SUFDekIscUNBQXVCOztJQUV2QixvQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ3JlYXRlZCBieSBtdmFzaW0gb24gMTIvOS8xNy5cbiAqL1xuXG4vKlxuICogdGFibGVBY3Rpb24gLT5cbiAqICAnQUREJyAtPiBBZGQgQWN0aW9uXG4gKiAgJ1JFRlJFU0gnIC0+IFJlZnJlc2ggQWN0aW9uXG4gKlxuKi9cblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGludGVyZmFjZSBUYWJsZUFjdGlvbiB7XG4gICAgYWN0aW9uOiBzdHJpbmc7XG4gICAgZGF0YTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgRm5UYWJsZUNvbmZpZyB7XG4gICAgc3RhdGljIGRlZmFsdXRTb3J0Q2xhc3MgPSAnIGZhLXNvcnQnO1xuICAgIHN0YXRpYyBkZWZhdWx0U29ydFZhbHVlID0gMTsgLy8gLTEgPSBkZXNjICwgMSA9IGFzY1xuICAgIHN0YXRpYyBkZWZhdWx0SXNDb2xTb3J0ID0gdHJ1ZTtcblxuICAgIHVuaXF1ZUtleT86IGFueTtcbiAgICB0YWJsZUNsYXNzPzogc3RyaW5nO1xuICAgIHBhZ2luYXRpb24/PSB0cnVlO1xuICAgIGZpbHRlck9uPz0gdHJ1ZTtcbiAgICBoaWRlQWN0aW9uPz0gZmFsc2U7XG4gICAgaGlkZUVkaXQ/PSBmYWxzZTtcbiAgICBoaWRlRGVsZXRlPz0gZmFsc2U7XG4gICAgZGVmYXVsdFNvcnRLZXk/OiBzdHJpbmc7XG4gICAgaGlkZVBhZ2luYXRpb24/OiBib29sZWFuO1xuICAgIGlzU2VsZWN0YWJsZT86IGJvb2xlYW47XG5cbiAgICB0YWJsZUFjdGlvbjogU3ViamVjdDxUYWJsZUFjdGlvbj47XG59XG4iXX0=