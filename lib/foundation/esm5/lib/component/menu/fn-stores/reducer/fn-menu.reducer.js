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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbWVudS9mbi1zdG9yZXMvcmVkdWNlci9mbi1tZW51LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQWdDLE1BQU0seUJBQXlCLENBQUM7QUFDM0YsT0FBTyxFQUFFLGdCQUFnQixFQUFpQixNQUFNLDJCQUEyQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBRTlELGFBQWEsR0FBZ0I7SUFDL0IsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixLQUFLLEVBQUUsRUFBRTtJQUNULFlBQVksRUFBRSxFQUFFO0lBQ2hCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLGlCQUFpQixFQUFFLElBQUk7SUFDdkIsWUFBWSxFQUFFLEtBQUs7Q0FDdEI7O0lBR0ssa0JBQWtCLEdBQUcscUJBQXFCLENBQWMsZUFBZSxDQUFDOzs7OztBQUsxRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQWQsQ0FBYyxDQUFDLDZCQUE2Qjs7O0FBRnpELE1BQU0sS0FBTyxXQUFXLEdBQUcsY0FBYyxDQUNyQyxrQkFBa0IsT0FFckI7Ozs7O0FBR0csVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyw2QkFBNkI7OztBQUY1RCxNQUFNLEtBQU8sWUFBWSxHQUFHLGNBQWMsQ0FDdEMsa0JBQWtCLE9BRXJCOzs7OztBQUdHLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFlBQVksRUFBbEIsQ0FBa0I7O0FBRi9CLE1BQU0sS0FBTyxlQUFlLEdBQUcsY0FBYyxDQUN6QyxrQkFBa0IsT0FFckI7Ozs7O0FBR0csVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsV0FBVyxFQUFqQixDQUFpQjs7QUFGOUIsTUFBTSxLQUFPLGNBQWMsR0FBRyxjQUFjLENBQ3hDLGtCQUFrQixPQUVyQjs7Ozs7QUFHRyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxpQkFBaUIsRUFBdkIsQ0FBdUI7O0FBRnBDLE1BQU0sS0FBTyxvQkFBb0IsR0FBRyxjQUFjLENBQzlDLGtCQUFrQixPQUVyQjs7Ozs7O0FBR0csVUFBQyxLQUFLLEVBQUUsSUFBSTtJQUNSLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQixDQUFDOztBQUpMLE1BQU0sS0FBTyxlQUFlLEdBQUcsY0FBYyxDQUN6QyxvQkFBb0IsT0FJdkI7Ozs7OztBQUtHLFVBQUMsS0FBSyxFQUFFLFlBQVk7SUFDaEIsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDL0IsQ0FBQzs7QUFMTCxNQUFNLEtBQU8saUJBQWlCLEdBQUcsY0FBYyxDQUMzQyxvQkFBb0IsRUFDcEIsZUFBZSxPQUlsQjs7Ozs7QUFJRyxVQUFBLEtBQUs7SUFDRCxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUM7QUFDOUIsQ0FBQzs7QUFKTCxNQUFNLEtBQU8sYUFBYSxHQUFHLGNBQWMsQ0FDdkMsa0JBQWtCLE9BSXJCOzs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQXFCLEVBQUUsTUFBcUI7SUFBNUMsc0JBQUEsRUFBQSxxQkFBcUI7SUFFL0MsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2pCLEtBQUssZ0JBQWdCLENBQUMsYUFBYTtZQUMvQiw0QkFDTyxLQUFLLEVBQ1Y7UUFDTixLQUFLLGdCQUFnQixDQUFDLGtCQUFrQjtZQUNwQyw0QkFDTyxLQUFLLElBQ1IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxhQUFhLEVBQzlCLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVyxFQUMvQixpQkFBaUIsRUFBRSxNQUFNLENBQUMsaUJBQWlCLEVBQzNDLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWSxJQUNuQztRQUNOLEtBQUssZ0JBQWdCLENBQUMsaUJBQWlCO1lBQ25DLDRCQUNPLEtBQUssSUFDUixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssSUFDckI7UUFDTixLQUFLLGdCQUFnQixDQUFDLGVBQWU7WUFDakMsNEJBQ08sS0FBSyxJQUNSLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWSxJQUNuQztRQUNOO1lBQ0ksT0FBTyxLQUFLLENBQUM7S0FDcEI7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgREVGQVVMVF9NRU5VX1NUQVRFLCBGbk1lbnVJdGVtU3RhdGUsIEZuTWVudVN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL2ZuLW1lbnUuc3RhdGUnO1xyXG5pbXBvcnQgeyBGbk1lbnVBY3Rpb25UeXBlLCBGbk1lbnVBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9mbi1tZW51LmFjdGlvbic7XHJcbmltcG9ydCB7IGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5jb25zdCBpbml0TWVudVN0YXRlOiBGbk1lbnVTdGF0ZSA9IHtcclxuICAgIG1lbnVEYXRhOiBERUZBVUxUX01FTlVfU1RBVEUsXHJcbiAgICBlcnJvcjogJycsXHJcbiAgICBhY3RpdmVNZW51SWQ6ICcnLFxyXG4gICAgbWVudUl0ZW1NYXA6IG51bGwsXHJcbiAgICBtZW51SXRlbURldGFpbE1hcDogbnVsbCxcclxuICAgIGlzTWVudUxvYWRlZDogZmFsc2VcclxufTtcclxuXHJcblxyXG5jb25zdCBmbk1lbnVGZWF0dXJlU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8Rm5NZW51U3RhdGU+KCdGbk1lbnVSZWR1Y2VyJyk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1lbnVEYXRhID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBmbk1lbnVGZWF0dXJlU3RhdGUsXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5tZW51RGF0YSAvLyBtYXkgYmUgd2UgZmlsdGVyIHNvbWUgaXRlbVxyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0Um9vTWVudUlkID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBmbk1lbnVGZWF0dXJlU3RhdGUsXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5tZW51RGF0YS5pZCAvLyBtYXkgYmUgd2UgZmlsdGVyIHNvbWUgaXRlbVxyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0QWN0aXZlTWVudUlkID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBmbk1lbnVGZWF0dXJlU3RhdGUsXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5hY3RpdmVNZW51SWRcclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldE1lbnVJdGVtTWFwID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBmbk1lbnVGZWF0dXJlU3RhdGUsXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5tZW51SXRlbU1hcFxyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0TWVudURldGFpbEl0ZW1NYXAgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIGZuTWVudUZlYXR1cmVTdGF0ZSxcclxuICAgIHN0YXRlID0+IHN0YXRlLm1lbnVJdGVtRGV0YWlsTWFwXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRNZW51SXRlbUJ5SWQgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIGdldE1lbnVEZXRhaWxJdGVtTWFwLFxyXG4gICAgKHN0YXRlLCBwcm9wKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlW3Byb3AuaWRdO1xyXG4gICAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFjdGl2ZU1lbnVJdGVtID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBnZXRNZW51RGV0YWlsSXRlbU1hcCxcclxuICAgIGdldEFjdGl2ZU1lbnVJZCxcclxuICAgIChzdGF0ZSwgYWN0aXZlTWVudUlkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlW2FjdGl2ZU1lbnVJZF07XHJcbiAgICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWVudVN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZm5NZW51RmVhdHVyZVN0YXRlLFxyXG4gICAgc3RhdGUgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZS5pc01lbnVMb2FkZWQ7XHJcbiAgICB9XHJcbik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm5NZW51UmVkdWNlcihzdGF0ZSA9IGluaXRNZW51U3RhdGUsIGFjdGlvbjogRm5NZW51QWN0aW9ucyk6IEZuTWVudVN0YXRlIHtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBGbk1lbnVBY3Rpb25UeXBlLkluaXRNZW51U3RhdGU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgRm5NZW51QWN0aW9uVHlwZS5Mb2FkTWVudURhdGFTdWNlc3M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lbnVEYXRhOiBhY3Rpb24ubWVudUl0ZW1TdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtTWFwOiBhY3Rpb24ubWVudUl0ZW1NYXAsXHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbURldGFpbE1hcDogYWN0aW9uLm1lbnVJdGVtRGV0YWlsTWFwLFxyXG4gICAgICAgICAgICAgICAgaXNNZW51TG9hZGVkOiBhY3Rpb24uaXNNZW51TG9hZGVkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBGbk1lbnVBY3Rpb25UeXBlLkxvYWRNZW51RGF0YUVycm9yOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBGbk1lbnVBY3Rpb25UeXBlLlNldEFjdGl2ZU1lbnVJZDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlTWVudUlkOiBhY3Rpb24uYWN0aXZlTWVudUlkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==