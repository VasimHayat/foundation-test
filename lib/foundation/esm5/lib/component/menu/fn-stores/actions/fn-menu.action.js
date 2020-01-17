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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9tZW51L2ZuLXN0b3Jlcy9hY3Rpb25zL2ZuLW1lbnUuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUlFLGVBQWdCLGdDQUFnQztJQUNoRCxjQUFlLHlCQUF5QjtJQUN4QyxvQkFBcUIsdUJBQXVCO0lBQzVDLG1CQUFvQixxQkFBcUI7SUFDekMsaUJBQWtCLDZCQUE2Qjs7O0FBR2pEO0lBQUE7UUFDVyxTQUFJLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ2pELENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsNkJBQStDOztBQUdqRDtJQUdFLDRCQUFtQixhQUE4QixFQUFTLFdBQW1CLEVBQzFELGlCQUF5QixFQUFTLFlBQXFCO1FBRHZELGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQzFELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBUTtRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFTO1FBSGpFLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUlwRCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxDLGtDQUFvRDs7SUFFeEMsMkNBQXFDOztJQUFFLHlDQUEwQjs7SUFDakUsK0NBQWdDOztJQUFFLDBDQUE0Qjs7QUFJNUU7SUFHRSxzQkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGekIsU0FBSSxHQUFHLGdCQUFnQixDQUFDLFlBQVksQ0FBQztJQUc5QyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUpDLDRCQUE4Qzs7SUFFbEMsK0JBQXNCOztBQUlwQztJQUdFLDJCQUFtQixLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUZ2QixTQUFJLEdBQUcsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7SUFHbkQsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7Ozs7SUFKQyxpQ0FBbUQ7O0lBRXZDLGtDQUFvQjs7QUFJbEM7SUFHRSx5QkFBbUIsWUFBb0I7UUFBcEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFGOUIsU0FBSSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztJQUdqRCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUpDLCtCQUFpRDs7SUFFckMsdUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY3Rpb259IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHtGbk1lbnVJdGVtU3RhdGV9IGZyb20gJy4uLy4uJztcclxuXHJcbmV4cG9ydCBlbnVtIEZuTWVudUFjdGlvblR5cGUge1xyXG4gIEluaXRNZW51U3RhdGUgPSAnW0ZuTWVudV0gaW5pdGlhbGl6ZSBNZW51IFN0YXRlJyxcclxuICBMb2FkTWVudURhdGEgPSAnW0ZuTWVudV0gTG9hZCBNZW51IERhdGEnLFxyXG4gIExvYWRNZW51RGF0YVN1Y2VzcyA9ICdbRm5NZW51XSBMb2FkIFN1Y2Nlc3MnLFxyXG4gIExvYWRNZW51RGF0YUVycm9yID0gJ1tGbk1lbnVdIExvYWQgRXJyb3InLFxyXG4gIFNldEFjdGl2ZU1lbnVJZCA9ICdbRm5NZW51XSBTZXQgQWN0aXZlIE1lbnUgSUQnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbml0TWVudVN0YXRlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gRm5NZW51QWN0aW9uVHlwZS5Jbml0TWVudVN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZE1lbnVEYXRhU3VjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gRm5NZW51QWN0aW9uVHlwZS5Mb2FkTWVudURhdGFTdWNlc3M7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtZW51SXRlbVN0YXRlOiBGbk1lbnVJdGVtU3RhdGUsIHB1YmxpYyBtZW51SXRlbU1hcDogb2JqZWN0LFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBtZW51SXRlbURldGFpbE1hcDogb2JqZWN0LCBwdWJsaWMgaXNNZW51TG9hZGVkOiBib29sZWFuKSB7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZE1lbnVEYXRhIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gRm5NZW51QWN0aW9uVHlwZS5Mb2FkTWVudURhdGE7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkTWVudURhdGFFcnJvciBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEZuTWVudUFjdGlvblR5cGUuTG9hZE1lbnVEYXRhRXJyb3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlcnJvcjogc3RyaW5nKSB7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2V0QWN0aXZlTWVudUlkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gRm5NZW51QWN0aW9uVHlwZS5TZXRBY3RpdmVNZW51SWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3RpdmVNZW51SWQ6IHN0cmluZykge1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRm5NZW51QWN0aW9ucyA9IEluaXRNZW51U3RhdGUgfFxyXG4gIExvYWRNZW51RGF0YVN1Y2VzcyB8XHJcbiAgTG9hZE1lbnVEYXRhIHxcclxuICBMb2FkTWVudURhdGFFcnJvciB8XHJcbiAgU2V0QWN0aXZlTWVudUlkO1xyXG4iXX0=