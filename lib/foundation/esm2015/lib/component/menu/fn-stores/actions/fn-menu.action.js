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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9tZW51L2ZuLXN0b3Jlcy9hY3Rpb25zL2ZuLW1lbnUuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUlFLGVBQWdCLGdDQUFnQztJQUNoRCxjQUFlLHlCQUF5QjtJQUN4QyxvQkFBcUIsdUJBQXVCO0lBQzVDLG1CQUFvQixxQkFBcUI7SUFDekMsaUJBQWtCLDZCQUE2Qjs7O0FBR2pELE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBQ1csU0FBSSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUNqRCxDQUFDO0NBQUE7OztJQURDLDZCQUErQzs7QUFHakQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7OztJQUc3QixZQUFtQixhQUE4QixFQUFTLFdBQW1CLEVBQzFELGlCQUF5QixFQUFTLFlBQXFCO1FBRHZELGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQzFELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBUTtRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFTO1FBSGpFLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztJQUlwRCxDQUFDO0NBQ0Y7OztJQUxDLGtDQUFvRDs7SUFFeEMsMkNBQXFDOztJQUFFLHlDQUEwQjs7SUFDakUsK0NBQWdDOztJQUFFLDBDQUE0Qjs7QUFJNUUsTUFBTSxPQUFPLFlBQVk7Ozs7SUFHdkIsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGekIsU0FBSSxHQUFHLGdCQUFnQixDQUFDLFlBQVksQ0FBQztJQUc5QyxDQUFDO0NBQ0Y7OztJQUpDLDRCQUE4Qzs7SUFFbEMsK0JBQXNCOztBQUlwQyxNQUFNLE9BQU8saUJBQWlCOzs7O0lBRzVCLFlBQW1CLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBRnZCLFNBQUksR0FBRyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztJQUduRCxDQUFDO0NBQ0Y7OztJQUpDLGlDQUFtRDs7SUFFdkMsa0NBQW9COztBQUlsQyxNQUFNLE9BQU8sZUFBZTs7OztJQUcxQixZQUFtQixZQUFvQjtRQUFwQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUY5QixTQUFJLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0lBR2pELENBQUM7Q0FDRjs7O0lBSkMsK0JBQWlEOztJQUVyQyx1Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FjdGlvbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQge0ZuTWVudUl0ZW1TdGF0ZX0gZnJvbSAnLi4vLi4nO1xyXG5cclxuZXhwb3J0IGVudW0gRm5NZW51QWN0aW9uVHlwZSB7XHJcbiAgSW5pdE1lbnVTdGF0ZSA9ICdbRm5NZW51XSBpbml0aWFsaXplIE1lbnUgU3RhdGUnLFxyXG4gIExvYWRNZW51RGF0YSA9ICdbRm5NZW51XSBMb2FkIE1lbnUgRGF0YScsXHJcbiAgTG9hZE1lbnVEYXRhU3VjZXNzID0gJ1tGbk1lbnVdIExvYWQgU3VjY2VzcycsXHJcbiAgTG9hZE1lbnVEYXRhRXJyb3IgPSAnW0ZuTWVudV0gTG9hZCBFcnJvcicsXHJcbiAgU2V0QWN0aXZlTWVudUlkID0gJ1tGbk1lbnVdIFNldCBBY3RpdmUgTWVudSBJRCdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEluaXRNZW51U3RhdGUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBGbk1lbnVBY3Rpb25UeXBlLkluaXRNZW51U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkTWVudURhdGFTdWNlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBGbk1lbnVBY3Rpb25UeXBlLkxvYWRNZW51RGF0YVN1Y2VzcztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG1lbnVJdGVtU3RhdGU6IEZuTWVudUl0ZW1TdGF0ZSwgcHVibGljIG1lbnVJdGVtTWFwOiBvYmplY3QsXHJcbiAgICAgICAgICAgICAgcHVibGljIG1lbnVJdGVtRGV0YWlsTWFwOiBvYmplY3QsIHB1YmxpYyBpc01lbnVMb2FkZWQ6IGJvb2xlYW4pIHtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkTWVudURhdGEgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBGbk1lbnVBY3Rpb25UeXBlLkxvYWRNZW51RGF0YTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRNZW51RGF0YUVycm9yIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gRm5NZW51QWN0aW9uVHlwZS5Mb2FkTWVudURhdGFFcnJvcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVycm9yOiBzdHJpbmcpIHtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXRBY3RpdmVNZW51SWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBGbk1lbnVBY3Rpb25UeXBlLlNldEFjdGl2ZU1lbnVJZDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGFjdGl2ZU1lbnVJZDogc3RyaW5nKSB7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBGbk1lbnVBY3Rpb25zID0gSW5pdE1lbnVTdGF0ZSB8XHJcbiAgTG9hZE1lbnVEYXRhU3VjZXNzIHxcclxuICBMb2FkTWVudURhdGEgfFxyXG4gIExvYWRNZW51RGF0YUVycm9yIHxcclxuICBTZXRBY3RpdmVNZW51SWQ7XHJcbiJdfQ==