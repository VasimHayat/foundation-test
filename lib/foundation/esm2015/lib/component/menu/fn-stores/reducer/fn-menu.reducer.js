/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DEFAULT_MENU_STATE } from '../models/fn-menu.state';
import { FnMenuActionType } from '../actions/fn-menu.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';
/** @type {?} */
const initMenuState = {
    menuData: DEFAULT_MENU_STATE,
    error: '',
    activeMenuId: '',
    menuItemMap: null,
    menuItemDetailMap: null,
    isMenuLoaded: false
};
/** @type {?} */
const fnMenuFeatureState = createFeatureSelector('FnMenuReducer');
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
state => state.menuData // may be we filter some item
;
/** @type {?} */
export const getMenuData = createSelector(fnMenuFeatureState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
state => state.menuData.id // may be we filter some item
;
/** @type {?} */
export const getRooMenuId = createSelector(fnMenuFeatureState, (ɵ1));
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
state => state.activeMenuId;
/** @type {?} */
export const getActiveMenuId = createSelector(fnMenuFeatureState, (ɵ2));
const ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
state => state.menuItemMap;
/** @type {?} */
export const getMenuItemMap = createSelector(fnMenuFeatureState, (ɵ3));
const ɵ4 = /**
 * @param {?} state
 * @return {?}
 */
state => state.menuItemDetailMap;
/** @type {?} */
export const getMenuDetailItemMap = createSelector(fnMenuFeatureState, (ɵ4));
const ɵ5 = /**
 * @param {?} state
 * @param {?} prop
 * @return {?}
 */
(state, prop) => {
    return state[prop.id];
};
/** @type {?} */
export const getMenuItemById = createSelector(getMenuDetailItemMap, (ɵ5));
const ɵ6 = /**
 * @param {?} state
 * @param {?} activeMenuId
 * @return {?}
 */
(state, activeMenuId) => {
    return state[activeMenuId];
};
/** @type {?} */
export const getActiveMenuItem = createSelector(getMenuDetailItemMap, getActiveMenuId, (ɵ6));
const ɵ7 = /**
 * @param {?} state
 * @return {?}
 */
state => {
    return state.isMenuLoaded;
};
/** @type {?} */
export const getMenuStatus = createSelector(fnMenuFeatureState, (ɵ7));
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function FnMenuReducer(state = initMenuState, action) {
    switch (action.type) {
        case FnMenuActionType.InitMenuState:
            return Object.assign({}, state);
        case FnMenuActionType.LoadMenuDataSucess:
            return Object.assign({}, state, { menuData: action.menuItemState, menuItemMap: action.menuItemMap, menuItemDetailMap: action.menuItemDetailMap, isMenuLoaded: action.isMenuLoaded });
        case FnMenuActionType.LoadMenuDataError:
            return Object.assign({}, state, { error: action.error });
        case FnMenuActionType.SetActiveMenuId:
            return Object.assign({}, state, { activeMenuId: action.activeMenuId });
        default:
            return state;
    }
}
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbWVudS9mbi1zdG9yZXMvcmVkdWNlci9mbi1tZW51LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBZ0MsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRixPQUFPLEVBQUUsZ0JBQWdCLEVBQWlCLE1BQU0sMkJBQTJCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7TUFFOUQsYUFBYSxHQUFnQjtJQUMvQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLEtBQUssRUFBRSxFQUFFO0lBQ1QsWUFBWSxFQUFFLEVBQUU7SUFDaEIsV0FBVyxFQUFFLElBQUk7SUFDakIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixZQUFZLEVBQUUsS0FBSztDQUN0Qjs7TUFHSyxrQkFBa0IsR0FBRyxxQkFBcUIsQ0FBYyxlQUFlLENBQUM7Ozs7O0FBSzFFLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyw2QkFBNkI7OztBQUZ6RCxNQUFNLE9BQU8sV0FBVyxHQUFHLGNBQWMsQ0FDckMsa0JBQWtCLE9BRXJCOzs7OztBQUdHLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsNkJBQTZCOzs7QUFGNUQsTUFBTSxPQUFPLFlBQVksR0FBRyxjQUFjLENBQ3RDLGtCQUFrQixPQUVyQjs7Ozs7QUFHRyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZOztBQUYvQixNQUFNLE9BQU8sZUFBZSxHQUFHLGNBQWMsQ0FDekMsa0JBQWtCLE9BRXJCOzs7OztBQUdHLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVc7O0FBRjlCLE1BQU0sT0FBTyxjQUFjLEdBQUcsY0FBYyxDQUN4QyxrQkFBa0IsT0FFckI7Ozs7O0FBR0csS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCOztBQUZwQyxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsY0FBYyxDQUM5QyxrQkFBa0IsT0FFckI7Ozs7OztBQUdHLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ1osT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFCLENBQUM7O0FBSkwsTUFBTSxPQUFPLGVBQWUsR0FBRyxjQUFjLENBQ3pDLG9CQUFvQixPQUl2Qjs7Ozs7O0FBS0csQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUU7SUFDcEIsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDL0IsQ0FBQzs7QUFMTCxNQUFNLE9BQU8saUJBQWlCLEdBQUcsY0FBYyxDQUMzQyxvQkFBb0IsRUFDcEIsZUFBZSxPQUlsQjs7Ozs7QUFJRyxLQUFLLENBQUMsRUFBRTtJQUNKLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQztBQUM5QixDQUFDOztBQUpMLE1BQU0sT0FBTyxhQUFhLEdBQUcsY0FBYyxDQUN2QyxrQkFBa0IsT0FJckI7Ozs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBSyxHQUFHLGFBQWEsRUFBRSxNQUFxQjtJQUV0RSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDakIsS0FBSyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQy9CLHlCQUNPLEtBQUssRUFDVjtRQUNOLEtBQUssZ0JBQWdCLENBQUMsa0JBQWtCO1lBQ3BDLHlCQUNPLEtBQUssSUFDUixRQUFRLEVBQUUsTUFBTSxDQUFDLGFBQWEsRUFDOUIsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQy9CLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsRUFDM0MsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZLElBQ25DO1FBQ04sS0FBSyxnQkFBZ0IsQ0FBQyxpQkFBaUI7WUFDbkMseUJBQ08sS0FBSyxJQUNSLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxJQUNyQjtRQUNOLEtBQUssZ0JBQWdCLENBQUMsZUFBZTtZQUNqQyx5QkFDTyxLQUFLLElBQ1IsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZLElBQ25DO1FBQ047WUFDSSxPQUFPLEtBQUssQ0FBQztLQUNwQjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBERUZBVUxUX01FTlVfU1RBVEUsIEZuTWVudUl0ZW1TdGF0ZSwgRm5NZW51U3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvZm4tbWVudS5zdGF0ZSc7XHJcbmltcG9ydCB7IEZuTWVudUFjdGlvblR5cGUsIEZuTWVudUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2ZuLW1lbnUuYWN0aW9uJztcclxuaW1wb3J0IHsgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmNvbnN0IGluaXRNZW51U3RhdGU6IEZuTWVudVN0YXRlID0ge1xyXG4gICAgbWVudURhdGE6IERFRkFVTFRfTUVOVV9TVEFURSxcclxuICAgIGVycm9yOiAnJyxcclxuICAgIGFjdGl2ZU1lbnVJZDogJycsXHJcbiAgICBtZW51SXRlbU1hcDogbnVsbCxcclxuICAgIG1lbnVJdGVtRGV0YWlsTWFwOiBudWxsLFxyXG4gICAgaXNNZW51TG9hZGVkOiBmYWxzZVxyXG59O1xyXG5cclxuXHJcbmNvbnN0IGZuTWVudUZlYXR1cmVTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxGbk1lbnVTdGF0ZT4oJ0ZuTWVudVJlZHVjZXInKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWVudURhdGEgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIGZuTWVudUZlYXR1cmVTdGF0ZSxcclxuICAgIHN0YXRlID0+IHN0YXRlLm1lbnVEYXRhIC8vIG1heSBiZSB3ZSBmaWx0ZXIgc29tZSBpdGVtXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRSb29NZW51SWQgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIGZuTWVudUZlYXR1cmVTdGF0ZSxcclxuICAgIHN0YXRlID0+IHN0YXRlLm1lbnVEYXRhLmlkIC8vIG1heSBiZSB3ZSBmaWx0ZXIgc29tZSBpdGVtXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRBY3RpdmVNZW51SWQgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIGZuTWVudUZlYXR1cmVTdGF0ZSxcclxuICAgIHN0YXRlID0+IHN0YXRlLmFjdGl2ZU1lbnVJZFxyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0TWVudUl0ZW1NYXAgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIGZuTWVudUZlYXR1cmVTdGF0ZSxcclxuICAgIHN0YXRlID0+IHN0YXRlLm1lbnVJdGVtTWFwXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRNZW51RGV0YWlsSXRlbU1hcCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZm5NZW51RmVhdHVyZVN0YXRlLFxyXG4gICAgc3RhdGUgPT4gc3RhdGUubWVudUl0ZW1EZXRhaWxNYXBcclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldE1lbnVJdGVtQnlJZCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0TWVudURldGFpbEl0ZW1NYXAsXHJcbiAgICAoc3RhdGUsIHByb3ApID0+IHtcclxuICAgICAgICByZXR1cm4gc3RhdGVbcHJvcC5pZF07XHJcbiAgICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWN0aXZlTWVudUl0ZW0gPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIGdldE1lbnVEZXRhaWxJdGVtTWFwLFxyXG4gICAgZ2V0QWN0aXZlTWVudUlkLFxyXG4gICAgKHN0YXRlLCBhY3RpdmVNZW51SWQpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RhdGVbYWN0aXZlTWVudUlkXTtcclxuICAgIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNZW51U3RhdHVzID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBmbk1lbnVGZWF0dXJlU3RhdGUsXHJcbiAgICBzdGF0ZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlLmlzTWVudUxvYWRlZDtcclxuICAgIH1cclxuKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGbk1lbnVSZWR1Y2VyKHN0YXRlID0gaW5pdE1lbnVTdGF0ZSwgYWN0aW9uOiBGbk1lbnVBY3Rpb25zKTogRm5NZW51U3RhdGUge1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEZuTWVudUFjdGlvblR5cGUuSW5pdE1lbnVTdGF0ZTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBGbk1lbnVBY3Rpb25UeXBlLkxvYWRNZW51RGF0YVN1Y2VzczpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWVudURhdGE6IGFjdGlvbi5tZW51SXRlbVN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1NYXA6IGFjdGlvbi5tZW51SXRlbU1hcCxcclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtRGV0YWlsTWFwOiBhY3Rpb24ubWVudUl0ZW1EZXRhaWxNYXAsXHJcbiAgICAgICAgICAgICAgICBpc01lbnVMb2FkZWQ6IGFjdGlvbi5pc01lbnVMb2FkZWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEZuTWVudUFjdGlvblR5cGUuTG9hZE1lbnVEYXRhRXJyb3I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEZuTWVudUFjdGlvblR5cGUuU2V0QWN0aXZlTWVudUlkOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVNZW51SWQ6IGFjdGlvbi5hY3RpdmVNZW51SWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuIl19