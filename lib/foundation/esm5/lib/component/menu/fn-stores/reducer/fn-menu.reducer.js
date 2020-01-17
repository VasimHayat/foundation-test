/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DEFAULT_MENU_STATE } from '../models/fn-menu.state';
import { FnMenuActionType } from '../actions/fn-menu.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';
/** @type {?} */
var initMenuState = {
    menuData: DEFAULT_MENU_STATE,
    error: '',
    activeMenuId: '',
    menuItemMap: null,
    menuItemDetailMap: null,
    isMenuLoaded: false
};
/** @type {?} */
var fnMenuFeatureState = createFeatureSelector('FnMenuReducer');
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.menuData; } // may be we filter some item
;
/** @type {?} */
export var getMenuData = createSelector(fnMenuFeatureState, (ɵ0));
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.menuData.id; } // may be we filter some item
;
/** @type {?} */
export var getRooMenuId = createSelector(fnMenuFeatureState, (ɵ1));
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.activeMenuId; };
/** @type {?} */
export var getActiveMenuId = createSelector(fnMenuFeatureState, (ɵ2));
var ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.menuItemMap; };
/** @type {?} */
export var getMenuItemMap = createSelector(fnMenuFeatureState, (ɵ3));
var ɵ4 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.menuItemDetailMap; };
/** @type {?} */
export var getMenuDetailItemMap = createSelector(fnMenuFeatureState, (ɵ4));
var ɵ5 = /**
 * @param {?} state
 * @param {?} prop
 * @return {?}
 */
function (state, prop) {
    return state[prop.id];
};
/** @type {?} */
export var getMenuItemById = createSelector(getMenuDetailItemMap, (ɵ5));
var ɵ6 = /**
 * @param {?} state
 * @param {?} activeMenuId
 * @return {?}
 */
function (state, activeMenuId) {
    return state[activeMenuId];
};
/** @type {?} */
export var getActiveMenuItem = createSelector(getMenuDetailItemMap, getActiveMenuId, (ɵ6));
var ɵ7 = /**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return state.isMenuLoaded;
};
/** @type {?} */
export var getMenuStatus = createSelector(fnMenuFeatureState, (ɵ7));
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function FnMenuReducer(state, action) {
    if (state === void 0) { state = initMenuState; }
    switch (action.type) {
        case FnMenuActionType.InitMenuState:
            return tslib_1.__assign({}, state);
        case FnMenuActionType.LoadMenuDataSucess:
            return tslib_1.__assign({}, state, { menuData: action.menuItemState, menuItemMap: action.menuItemMap, menuItemDetailMap: action.menuItemDetailMap, isMenuLoaded: action.isMenuLoaded });
        case FnMenuActionType.LoadMenuDataError:
            return tslib_1.__assign({}, state, { error: action.error });
        case FnMenuActionType.SetActiveMenuId:
            return tslib_1.__assign({}, state, { activeMenuId: action.activeMenuId });
        default:
            return state;
    }
}
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbWVudS9mbi1zdG9yZXMvcmVkdWNlci9mbi1tZW51LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsa0JBQWtCLEVBQStCLE1BQU0seUJBQXlCLENBQUM7QUFDekYsT0FBTyxFQUFDLGdCQUFnQixFQUFnQixNQUFNLDJCQUEyQixDQUFDO0FBQzFFLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxjQUFjLEVBQUMsTUFBTSxhQUFhLENBQUM7O0lBRTVELGFBQWEsR0FBZ0I7SUFDakMsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixLQUFLLEVBQUUsRUFBRTtJQUNULFlBQVksRUFBRSxFQUFFO0lBQ2hCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLGlCQUFpQixFQUFFLElBQUk7SUFDdkIsWUFBWSxFQUFFLEtBQUs7Q0FDcEI7O0lBR0ssa0JBQWtCLEdBQUcscUJBQXFCLENBQWMsZUFBZSxDQUFDOzs7OztBQUs1RSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQWQsQ0FBYyxDQUFDLDZCQUE2Qjs7O0FBRnZELE1BQU0sS0FBTyxXQUFXLEdBQUcsY0FBYyxDQUN2QyxrQkFBa0IsT0FFbkI7Ozs7O0FBR0MsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyw2QkFBNkI7OztBQUYxRCxNQUFNLEtBQU8sWUFBWSxHQUFHLGNBQWMsQ0FDeEMsa0JBQWtCLE9BRW5COzs7OztBQUdDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFlBQVksRUFBbEIsQ0FBa0I7O0FBRjdCLE1BQU0sS0FBTyxlQUFlLEdBQUcsY0FBYyxDQUMzQyxrQkFBa0IsT0FFbkI7Ozs7O0FBR0MsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsV0FBVyxFQUFqQixDQUFpQjs7QUFGNUIsTUFBTSxLQUFPLGNBQWMsR0FBRyxjQUFjLENBQzFDLGtCQUFrQixPQUVuQjs7Ozs7QUFHQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxpQkFBaUIsRUFBdkIsQ0FBdUI7O0FBRmxDLE1BQU0sS0FBTyxvQkFBb0IsR0FBRyxjQUFjLENBQ2hELGtCQUFrQixPQUVuQjs7Ozs7O0FBR0MsVUFBQyxLQUFLLEVBQUUsSUFBSTtJQUNWLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN4QixDQUFDOztBQUpILE1BQU0sS0FBTyxlQUFlLEdBQUcsY0FBYyxDQUMzQyxvQkFBb0IsT0FJckI7Ozs7OztBQUtDLFVBQUMsS0FBSyxFQUFFLFlBQVk7SUFDbEIsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDN0IsQ0FBQzs7QUFMSCxNQUFNLEtBQU8saUJBQWlCLEdBQUcsY0FBYyxDQUM3QyxvQkFBb0IsRUFDcEIsZUFBZSxPQUloQjs7Ozs7QUFJQyxVQUFBLEtBQUs7SUFDSCxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUM7QUFDNUIsQ0FBQzs7QUFKSCxNQUFNLEtBQU8sYUFBYSxHQUFHLGNBQWMsQ0FDekMsa0JBQWtCLE9BSW5COzs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQXFCLEVBQUUsTUFBcUI7SUFBNUMsc0JBQUEsRUFBQSxxQkFBcUI7SUFFakQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssZ0JBQWdCLENBQUMsYUFBYTtZQUNqQyw0QkFDSyxLQUFLLEVBQ1I7UUFDSixLQUFLLGdCQUFnQixDQUFDLGtCQUFrQjtZQUN0Qyw0QkFDSyxLQUFLLElBQ1IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxhQUFhLEVBQzlCLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVyxFQUMvQixpQkFBaUIsRUFBRSxNQUFNLENBQUMsaUJBQWlCLEVBQzNDLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWSxJQUNqQztRQUNKLEtBQUssZ0JBQWdCLENBQUMsaUJBQWlCO1lBQ3JDLDRCQUNLLEtBQUssSUFDUixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssSUFDbkI7UUFDSixLQUFLLGdCQUFnQixDQUFDLGVBQWU7WUFDbkMsNEJBQ0ssS0FBSyxJQUNSLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWSxJQUNqQztRQUNKO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtERUZBVUxUX01FTlVfU1RBVEUsIEZuTWVudUl0ZW1TdGF0ZSwgRm5NZW51U3RhdGV9IGZyb20gJy4uL21vZGVscy9mbi1tZW51LnN0YXRlJztcclxuaW1wb3J0IHtGbk1lbnVBY3Rpb25UeXBlLCBGbk1lbnVBY3Rpb25zfSBmcm9tICcuLi9hY3Rpb25zL2ZuLW1lbnUuYWN0aW9uJztcclxuaW1wb3J0IHtjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9yfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5jb25zdCBpbml0TWVudVN0YXRlOiBGbk1lbnVTdGF0ZSA9IHtcclxuICBtZW51RGF0YTogREVGQVVMVF9NRU5VX1NUQVRFLFxyXG4gIGVycm9yOiAnJyxcclxuICBhY3RpdmVNZW51SWQ6ICcnLFxyXG4gIG1lbnVJdGVtTWFwOiBudWxsLFxyXG4gIG1lbnVJdGVtRGV0YWlsTWFwOiBudWxsLFxyXG4gIGlzTWVudUxvYWRlZDogZmFsc2VcclxufTtcclxuXHJcblxyXG5jb25zdCBmbk1lbnVGZWF0dXJlU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8Rm5NZW51U3RhdGU+KCdGbk1lbnVSZWR1Y2VyJyk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1lbnVEYXRhID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgZm5NZW51RmVhdHVyZVN0YXRlLFxyXG4gIHN0YXRlID0+IHN0YXRlLm1lbnVEYXRhIC8vIG1heSBiZSB3ZSBmaWx0ZXIgc29tZSBpdGVtXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRSb29NZW51SWQgPSBjcmVhdGVTZWxlY3RvcihcclxuICBmbk1lbnVGZWF0dXJlU3RhdGUsXHJcbiAgc3RhdGUgPT4gc3RhdGUubWVudURhdGEuaWQgLy8gbWF5IGJlIHdlIGZpbHRlciBzb21lIGl0ZW1cclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldEFjdGl2ZU1lbnVJZCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gIGZuTWVudUZlYXR1cmVTdGF0ZSxcclxuICBzdGF0ZSA9PiBzdGF0ZS5hY3RpdmVNZW51SWRcclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldE1lbnVJdGVtTWFwID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgZm5NZW51RmVhdHVyZVN0YXRlLFxyXG4gIHN0YXRlID0+IHN0YXRlLm1lbnVJdGVtTWFwXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRNZW51RGV0YWlsSXRlbU1hcCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gIGZuTWVudUZlYXR1cmVTdGF0ZSxcclxuICBzdGF0ZSA9PiBzdGF0ZS5tZW51SXRlbURldGFpbE1hcFxyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0TWVudUl0ZW1CeUlkID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgZ2V0TWVudURldGFpbEl0ZW1NYXAsXHJcbiAgKHN0YXRlLCBwcm9wKSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGVbcHJvcC5pZF07XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFjdGl2ZU1lbnVJdGVtID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgZ2V0TWVudURldGFpbEl0ZW1NYXAsXHJcbiAgZ2V0QWN0aXZlTWVudUlkLFxyXG4gIChzdGF0ZSwgYWN0aXZlTWVudUlkKSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGVbYWN0aXZlTWVudUlkXTtcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWVudVN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gIGZuTWVudUZlYXR1cmVTdGF0ZSxcclxuICBzdGF0ZSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGUuaXNNZW51TG9hZGVkO1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGbk1lbnVSZWR1Y2VyKHN0YXRlID0gaW5pdE1lbnVTdGF0ZSwgYWN0aW9uOiBGbk1lbnVBY3Rpb25zKTogRm5NZW51U3RhdGUge1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEZuTWVudUFjdGlvblR5cGUuSW5pdE1lbnVTdGF0ZTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZVxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBGbk1lbnVBY3Rpb25UeXBlLkxvYWRNZW51RGF0YVN1Y2VzczpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtZW51RGF0YTogYWN0aW9uLm1lbnVJdGVtU3RhdGUsXHJcbiAgICAgICAgbWVudUl0ZW1NYXA6IGFjdGlvbi5tZW51SXRlbU1hcCxcclxuICAgICAgICBtZW51SXRlbURldGFpbE1hcDogYWN0aW9uLm1lbnVJdGVtRGV0YWlsTWFwLFxyXG4gICAgICAgIGlzTWVudUxvYWRlZDogYWN0aW9uLmlzTWVudUxvYWRlZFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBGbk1lbnVBY3Rpb25UeXBlLkxvYWRNZW51RGF0YUVycm9yOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3JcclxuICAgICAgfTtcclxuICAgIGNhc2UgRm5NZW51QWN0aW9uVHlwZS5TZXRBY3RpdmVNZW51SWQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWN0aXZlTWVudUlkOiBhY3Rpb24uYWN0aXZlTWVudUlkXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==