/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var FnMenuActionType = {
    InitMenuState: '[FnMenu] initialize Menu State',
    LoadMenuData: '[FnMenu] Load Menu Data',
    LoadMenuDataSucess: '[FnMenu] Load Success',
    LoadMenuDataError: '[FnMenu] Load Error',
    SetActiveMenuId: '[FnMenu] Set Active Menu ID',
};
export { FnMenuActionType };
var InitMenuState = /** @class */ (function () {
    function InitMenuState() {
        this.type = FnMenuActionType.InitMenuState;
    }
    return InitMenuState;
}());
export { InitMenuState };
if (false) {
    /** @type {?} */
    InitMenuState.prototype.type;
}
var LoadMenuDataSucess = /** @class */ (function () {
    function LoadMenuDataSucess(menuItemState, menuItemMap, menuItemDetailMap, isMenuLoaded) {
        this.menuItemState = menuItemState;
        this.menuItemMap = menuItemMap;
        this.menuItemDetailMap = menuItemDetailMap;
        this.isMenuLoaded = isMenuLoaded;
        this.type = FnMenuActionType.LoadMenuDataSucess;
    }
    return LoadMenuDataSucess;
}());
export { LoadMenuDataSucess };
if (false) {
    /** @type {?} */
    LoadMenuDataSucess.prototype.type;
    /** @type {?} */
    LoadMenuDataSucess.prototype.menuItemState;
    /** @type {?} */
    LoadMenuDataSucess.prototype.menuItemMap;
    /** @type {?} */
    LoadMenuDataSucess.prototype.menuItemDetailMap;
    /** @type {?} */
    LoadMenuDataSucess.prototype.isMenuLoaded;
}
var LoadMenuData = /** @class */ (function () {
    function LoadMenuData(payload) {
        this.payload = payload;
        this.type = FnMenuActionType.LoadMenuData;
    }
    return LoadMenuData;
}());
export { LoadMenuData };
if (false) {
    /** @type {?} */
    LoadMenuData.prototype.type;
    /** @type {?} */
    LoadMenuData.prototype.payload;
}
var LoadMenuDataError = /** @class */ (function () {
    function LoadMenuDataError(error) {
        this.error = error;
        this.type = FnMenuActionType.LoadMenuDataError;
    }
    return LoadMenuDataError;
}());
export { LoadMenuDataError };
if (false) {
    /** @type {?} */
    LoadMenuDataError.prototype.type;
    /** @type {?} */
    LoadMenuDataError.prototype.error;
}
var SetActiveMenuId = /** @class */ (function () {
    function SetActiveMenuId(activeMenuId) {
        this.activeMenuId = activeMenuId;
        this.type = FnMenuActionType.SetActiveMenuId;
    }
    return SetActiveMenuId;
}());
export { SetActiveMenuId };
if (false) {
    /** @type {?} */
    SetActiveMenuId.prototype.type;
    /** @type {?} */
    SetActiveMenuId.prototype.activeMenuId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9tZW51L2ZuLXN0b3Jlcy9hY3Rpb25zL2ZuLW1lbnUuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUlJLGVBQWdCLGdDQUFnQztJQUNoRCxjQUFlLHlCQUF5QjtJQUN4QyxvQkFBcUIsdUJBQXVCO0lBQzVDLG1CQUFvQixxQkFBcUI7SUFDekMsaUJBQWtCLDZCQUE2Qjs7O0FBR25EO0lBQUE7UUFDYSxTQUFJLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ25ELENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREcsNkJBQStDOztBQUduRDtJQUVJLDRCQUFtQixhQUE4QixFQUFTLFdBQW1CLEVBQzFELGlCQUF5QixFQUFTLFlBQXFCO1FBRHZELGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQzFELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBUTtRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFTO1FBRmpFLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUUyQixDQUFDO0lBQ3BGLHlCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIRyxrQ0FBb0Q7O0lBQ3hDLDJDQUFxQzs7SUFBRSx5Q0FBMEI7O0lBQ2pFLCtDQUFnQzs7SUFBRSwwQ0FBNEI7O0FBRzlFO0lBRUksc0JBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7SUFDVCxDQUFDO0lBQzFDLG1CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGRyw0QkFBOEM7O0lBQ2xDLCtCQUFzQjs7QUFHdEM7SUFFSSwyQkFBbUIsS0FBYTtRQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7UUFEdkIsU0FBSSxHQUFHLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0lBQ2hCLENBQUM7SUFDeEMsd0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZHLGlDQUFtRDs7SUFDdkMsa0NBQW9COztBQUdwQztJQUVJLHlCQUFtQixZQUFvQjtRQUFwQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUQ5QixTQUFJLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0lBQ1AsQ0FBQztJQUMvQyxzQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkcsK0JBQWlEOztJQUNyQyx1Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IEZuTWVudUl0ZW1TdGF0ZSB9IGZyb20gJy4uL21vZGVscy9mbi1tZW51LnN0YXRlJztcclxuXHJcbmV4cG9ydCBlbnVtIEZuTWVudUFjdGlvblR5cGUge1xyXG4gICAgSW5pdE1lbnVTdGF0ZSA9ICdbRm5NZW51XSBpbml0aWFsaXplIE1lbnUgU3RhdGUnLFxyXG4gICAgTG9hZE1lbnVEYXRhID0gJ1tGbk1lbnVdIExvYWQgTWVudSBEYXRhJyxcclxuICAgIExvYWRNZW51RGF0YVN1Y2VzcyA9ICdbRm5NZW51XSBMb2FkIFN1Y2Nlc3MnLFxyXG4gICAgTG9hZE1lbnVEYXRhRXJyb3IgPSAnW0ZuTWVudV0gTG9hZCBFcnJvcicsXHJcbiAgICBTZXRBY3RpdmVNZW51SWQgPSAnW0ZuTWVudV0gU2V0IEFjdGl2ZSBNZW51IElEJ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5pdE1lbnVTdGF0ZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gRm5NZW51QWN0aW9uVHlwZS5Jbml0TWVudVN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZE1lbnVEYXRhU3VjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBGbk1lbnVBY3Rpb25UeXBlLkxvYWRNZW51RGF0YVN1Y2VzcztcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtZW51SXRlbVN0YXRlOiBGbk1lbnVJdGVtU3RhdGUsIHB1YmxpYyBtZW51SXRlbU1hcDogb2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgcHVibGljIG1lbnVJdGVtRGV0YWlsTWFwOiBvYmplY3QsIHB1YmxpYyBpc01lbnVMb2FkZWQ6IGJvb2xlYW4pIHsgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRNZW51RGF0YSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gRm5NZW51QWN0aW9uVHlwZS5Mb2FkTWVudURhdGE7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZE1lbnVEYXRhRXJyb3IgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IEZuTWVudUFjdGlvblR5cGUuTG9hZE1lbnVEYXRhRXJyb3I7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZXJyb3I6IHN0cmluZykge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNldEFjdGl2ZU1lbnVJZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gRm5NZW51QWN0aW9uVHlwZS5TZXRBY3RpdmVNZW51SWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aXZlTWVudUlkOiBzdHJpbmcpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEZuTWVudUFjdGlvbnMgPSBJbml0TWVudVN0YXRlIHxcclxuTG9hZE1lbnVEYXRhU3VjZXNzIHxcclxuTG9hZE1lbnVEYXRhIHxcclxuTG9hZE1lbnVEYXRhRXJyb3IgfFxyXG5TZXRBY3RpdmVNZW51SWQ7XHJcbiJdfQ==