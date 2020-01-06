/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const FnMenuActionType = {
    InitMenuState: '[FnMenu] initialize Menu State',
    LoadMenuData: '[FnMenu] Load Menu Data',
    LoadMenuDataSucess: '[FnMenu] Load Success',
    LoadMenuDataError: '[FnMenu] Load Error',
    SetActiveMenuId: '[FnMenu] Set Active Menu ID',
};
export { FnMenuActionType };
export class InitMenuState {
    constructor() {
        this.type = FnMenuActionType.InitMenuState;
    }
}
if (false) {
    /** @type {?} */
    InitMenuState.prototype.type;
}
export class LoadMenuDataSucess {
    /**
     * @param {?} menuItemState
     * @param {?} menuItemMap
     * @param {?} menuItemDetailMap
     * @param {?} isMenuLoaded
     */
    constructor(menuItemState, menuItemMap, menuItemDetailMap, isMenuLoaded) {
        this.menuItemState = menuItemState;
        this.menuItemMap = menuItemMap;
        this.menuItemDetailMap = menuItemDetailMap;
        this.isMenuLoaded = isMenuLoaded;
        this.type = FnMenuActionType.LoadMenuDataSucess;
    }
}
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
export class LoadMenuData {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FnMenuActionType.LoadMenuData;
    }
}
if (false) {
    /** @type {?} */
    LoadMenuData.prototype.type;
    /** @type {?} */
    LoadMenuData.prototype.payload;
}
export class LoadMenuDataError {
    /**
     * @param {?} error
     */
    constructor(error) {
        this.error = error;
        this.type = FnMenuActionType.LoadMenuDataError;
    }
}
if (false) {
    /** @type {?} */
    LoadMenuDataError.prototype.type;
    /** @type {?} */
    LoadMenuDataError.prototype.error;
}
export class SetActiveMenuId {
    /**
     * @param {?} activeMenuId
     */
    constructor(activeMenuId) {
        this.activeMenuId = activeMenuId;
        this.type = FnMenuActionType.SetActiveMenuId;
    }
}
if (false) {
    /** @type {?} */
    SetActiveMenuId.prototype.type;
    /** @type {?} */
    SetActiveMenuId.prototype.activeMenuId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9tZW51L2ZuLXN0b3Jlcy9hY3Rpb25zL2ZuLW1lbnUuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUlJLGVBQWdCLGdDQUFnQztJQUNoRCxjQUFlLHlCQUF5QjtJQUN4QyxvQkFBcUIsdUJBQXVCO0lBQzVDLG1CQUFvQixxQkFBcUI7SUFDekMsaUJBQWtCLDZCQUE2Qjs7O0FBR25ELE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBQ2EsU0FBSSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUNuRCxDQUFDO0NBQUE7OztJQURHLDZCQUErQzs7QUFHbkQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7OztJQUUzQixZQUFtQixhQUE4QixFQUFTLFdBQW1CLEVBQzFELGlCQUF5QixFQUFTLFlBQXFCO1FBRHZELGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQzFELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBUTtRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFTO1FBRmpFLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUUyQixDQUFDO0NBQ25GOzs7SUFIRyxrQ0FBb0Q7O0lBQ3hDLDJDQUFxQzs7SUFBRSx5Q0FBMEI7O0lBQ2pFLCtDQUFnQzs7SUFBRSwwQ0FBNEI7O0FBRzlFLE1BQU0sT0FBTyxZQUFZOzs7O0lBRXJCLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7SUFDVCxDQUFDO0NBQ3pDOzs7SUFGRyw0QkFBOEM7O0lBQ2xDLCtCQUFzQjs7QUFHdEMsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUUxQixZQUFtQixLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUR2QixTQUFJLEdBQUcsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7SUFDaEIsQ0FBQztDQUN2Qzs7O0lBRkcsaUNBQW1EOztJQUN2QyxrQ0FBb0I7O0FBR3BDLE1BQU0sT0FBTyxlQUFlOzs7O0lBRXhCLFlBQW1CLFlBQW9CO1FBQXBCLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBRDlCLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7SUFDUCxDQUFDO0NBQzlDOzs7SUFGRywrQkFBaUQ7O0lBQ3JDLHVDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgRm5NZW51SXRlbVN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL2ZuLW1lbnUuc3RhdGUnO1xyXG5cclxuZXhwb3J0IGVudW0gRm5NZW51QWN0aW9uVHlwZSB7XHJcbiAgICBJbml0TWVudVN0YXRlID0gJ1tGbk1lbnVdIGluaXRpYWxpemUgTWVudSBTdGF0ZScsXHJcbiAgICBMb2FkTWVudURhdGEgPSAnW0ZuTWVudV0gTG9hZCBNZW51IERhdGEnLFxyXG4gICAgTG9hZE1lbnVEYXRhU3VjZXNzID0gJ1tGbk1lbnVdIExvYWQgU3VjY2VzcycsXHJcbiAgICBMb2FkTWVudURhdGFFcnJvciA9ICdbRm5NZW51XSBMb2FkIEVycm9yJyxcclxuICAgIFNldEFjdGl2ZU1lbnVJZCA9ICdbRm5NZW51XSBTZXQgQWN0aXZlIE1lbnUgSUQnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbml0TWVudVN0YXRlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBGbk1lbnVBY3Rpb25UeXBlLkluaXRNZW51U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkTWVudURhdGFTdWNlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IEZuTWVudUFjdGlvblR5cGUuTG9hZE1lbnVEYXRhU3VjZXNzO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG1lbnVJdGVtU3RhdGU6IEZuTWVudUl0ZW1TdGF0ZSwgcHVibGljIG1lbnVJdGVtTWFwOiBvYmplY3QsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgbWVudUl0ZW1EZXRhaWxNYXA6IG9iamVjdCwgcHVibGljIGlzTWVudUxvYWRlZDogYm9vbGVhbikgeyAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZE1lbnVEYXRhIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBGbk1lbnVBY3Rpb25UeXBlLkxvYWRNZW51RGF0YTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkTWVudURhdGFFcnJvciBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gRm5NZW51QWN0aW9uVHlwZS5Mb2FkTWVudURhdGFFcnJvcjtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlcnJvcjogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2V0QWN0aXZlTWVudUlkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBGbk1lbnVBY3Rpb25UeXBlLlNldEFjdGl2ZU1lbnVJZDtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3RpdmVNZW51SWQ6IHN0cmluZykge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRm5NZW51QWN0aW9ucyA9IEluaXRNZW51U3RhdGUgfFxyXG5Mb2FkTWVudURhdGFTdWNlc3MgfFxyXG5Mb2FkTWVudURhdGEgfFxyXG5Mb2FkTWVudURhdGFFcnJvciB8XHJcblNldEFjdGl2ZU1lbnVJZDtcclxuIl19