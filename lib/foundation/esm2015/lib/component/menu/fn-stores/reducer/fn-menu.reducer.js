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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbWVudS9mbi1zdG9yZXMvcmVkdWNlci9mbi1tZW51LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxrQkFBa0IsRUFBK0IsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RixPQUFPLEVBQUMsZ0JBQWdCLEVBQWdCLE1BQU0sMkJBQTJCLENBQUM7QUFDMUUsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGNBQWMsRUFBQyxNQUFNLGFBQWEsQ0FBQzs7TUFFNUQsYUFBYSxHQUFnQjtJQUNqQyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLEtBQUssRUFBRSxFQUFFO0lBQ1QsWUFBWSxFQUFFLEVBQUU7SUFDaEIsV0FBVyxFQUFFLElBQUk7SUFDakIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixZQUFZLEVBQUUsS0FBSztDQUNwQjs7TUFHSyxrQkFBa0IsR0FBRyxxQkFBcUIsQ0FBYyxlQUFlLENBQUM7Ozs7O0FBSzVFLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyw2QkFBNkI7OztBQUZ2RCxNQUFNLE9BQU8sV0FBVyxHQUFHLGNBQWMsQ0FDdkMsa0JBQWtCLE9BRW5COzs7OztBQUdDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsNkJBQTZCOzs7QUFGMUQsTUFBTSxPQUFPLFlBQVksR0FBRyxjQUFjLENBQ3hDLGtCQUFrQixPQUVuQjs7Ozs7QUFHQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZOztBQUY3QixNQUFNLE9BQU8sZUFBZSxHQUFHLGNBQWMsQ0FDM0Msa0JBQWtCLE9BRW5COzs7OztBQUdDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVc7O0FBRjVCLE1BQU0sT0FBTyxjQUFjLEdBQUcsY0FBYyxDQUMxQyxrQkFBa0IsT0FFbkI7Ozs7O0FBR0MsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCOztBQUZsQyxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsY0FBYyxDQUNoRCxrQkFBa0IsT0FFbkI7Ozs7OztBQUdDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ2QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLENBQUM7O0FBSkgsTUFBTSxPQUFPLGVBQWUsR0FBRyxjQUFjLENBQzNDLG9CQUFvQixPQUlyQjs7Ozs7O0FBS0MsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUU7SUFDdEIsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDN0IsQ0FBQzs7QUFMSCxNQUFNLE9BQU8saUJBQWlCLEdBQUcsY0FBYyxDQUM3QyxvQkFBb0IsRUFDcEIsZUFBZSxPQUloQjs7Ozs7QUFJQyxLQUFLLENBQUMsRUFBRTtJQUNOLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQztBQUM1QixDQUFDOztBQUpILE1BQU0sT0FBTyxhQUFhLEdBQUcsY0FBYyxDQUN6QyxrQkFBa0IsT0FJbkI7Ozs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBSyxHQUFHLGFBQWEsRUFBRSxNQUFxQjtJQUV4RSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxnQkFBZ0IsQ0FBQyxhQUFhO1lBQ2pDLHlCQUNLLEtBQUssRUFDUjtRQUNKLEtBQUssZ0JBQWdCLENBQUMsa0JBQWtCO1lBQ3RDLHlCQUNLLEtBQUssSUFDUixRQUFRLEVBQUUsTUFBTSxDQUFDLGFBQWEsRUFDOUIsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQy9CLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsRUFDM0MsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZLElBQ2pDO1FBQ0osS0FBSyxnQkFBZ0IsQ0FBQyxpQkFBaUI7WUFDckMseUJBQ0ssS0FBSyxJQUNSLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxJQUNuQjtRQUNKLEtBQUssZ0JBQWdCLENBQUMsZUFBZTtZQUNuQyx5QkFDSyxLQUFLLElBQ1IsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZLElBQ2pDO1FBQ0o7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RFRkFVTFRfTUVOVV9TVEFURSwgRm5NZW51SXRlbVN0YXRlLCBGbk1lbnVTdGF0ZX0gZnJvbSAnLi4vbW9kZWxzL2ZuLW1lbnUuc3RhdGUnO1xyXG5pbXBvcnQge0ZuTWVudUFjdGlvblR5cGUsIEZuTWVudUFjdGlvbnN9IGZyb20gJy4uL2FjdGlvbnMvZm4tbWVudS5hY3Rpb24nO1xyXG5pbXBvcnQge2NyZWF0ZUZlYXR1cmVTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3J9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmNvbnN0IGluaXRNZW51U3RhdGU6IEZuTWVudVN0YXRlID0ge1xyXG4gIG1lbnVEYXRhOiBERUZBVUxUX01FTlVfU1RBVEUsXHJcbiAgZXJyb3I6ICcnLFxyXG4gIGFjdGl2ZU1lbnVJZDogJycsXHJcbiAgbWVudUl0ZW1NYXA6IG51bGwsXHJcbiAgbWVudUl0ZW1EZXRhaWxNYXA6IG51bGwsXHJcbiAgaXNNZW51TG9hZGVkOiBmYWxzZVxyXG59O1xyXG5cclxuXHJcbmNvbnN0IGZuTWVudUZlYXR1cmVTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxGbk1lbnVTdGF0ZT4oJ0ZuTWVudVJlZHVjZXInKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWVudURhdGEgPSBjcmVhdGVTZWxlY3RvcihcclxuICBmbk1lbnVGZWF0dXJlU3RhdGUsXHJcbiAgc3RhdGUgPT4gc3RhdGUubWVudURhdGEgLy8gbWF5IGJlIHdlIGZpbHRlciBzb21lIGl0ZW1cclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldFJvb01lbnVJZCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gIGZuTWVudUZlYXR1cmVTdGF0ZSxcclxuICBzdGF0ZSA9PiBzdGF0ZS5tZW51RGF0YS5pZCAvLyBtYXkgYmUgd2UgZmlsdGVyIHNvbWUgaXRlbVxyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0QWN0aXZlTWVudUlkID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgZm5NZW51RmVhdHVyZVN0YXRlLFxyXG4gIHN0YXRlID0+IHN0YXRlLmFjdGl2ZU1lbnVJZFxyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0TWVudUl0ZW1NYXAgPSBjcmVhdGVTZWxlY3RvcihcclxuICBmbk1lbnVGZWF0dXJlU3RhdGUsXHJcbiAgc3RhdGUgPT4gc3RhdGUubWVudUl0ZW1NYXBcclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldE1lbnVEZXRhaWxJdGVtTWFwID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgZm5NZW51RmVhdHVyZVN0YXRlLFxyXG4gIHN0YXRlID0+IHN0YXRlLm1lbnVJdGVtRGV0YWlsTWFwXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRNZW51SXRlbUJ5SWQgPSBjcmVhdGVTZWxlY3RvcihcclxuICBnZXRNZW51RGV0YWlsSXRlbU1hcCxcclxuICAoc3RhdGUsIHByb3ApID0+IHtcclxuICAgIHJldHVybiBzdGF0ZVtwcm9wLmlkXTtcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWN0aXZlTWVudUl0ZW0gPSBjcmVhdGVTZWxlY3RvcihcclxuICBnZXRNZW51RGV0YWlsSXRlbU1hcCxcclxuICBnZXRBY3RpdmVNZW51SWQsXHJcbiAgKHN0YXRlLCBhY3RpdmVNZW51SWQpID0+IHtcclxuICAgIHJldHVybiBzdGF0ZVthY3RpdmVNZW51SWRdO1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNZW51U3RhdHVzID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgZm5NZW51RmVhdHVyZVN0YXRlLFxyXG4gIHN0YXRlID0+IHtcclxuICAgIHJldHVybiBzdGF0ZS5pc01lbnVMb2FkZWQ7XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZuTWVudVJlZHVjZXIoc3RhdGUgPSBpbml0TWVudVN0YXRlLCBhY3Rpb246IEZuTWVudUFjdGlvbnMpOiBGbk1lbnVTdGF0ZSB7XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgRm5NZW51QWN0aW9uVHlwZS5Jbml0TWVudVN0YXRlOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEZuTWVudUFjdGlvblR5cGUuTG9hZE1lbnVEYXRhU3VjZXNzOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1lbnVEYXRhOiBhY3Rpb24ubWVudUl0ZW1TdGF0ZSxcclxuICAgICAgICBtZW51SXRlbU1hcDogYWN0aW9uLm1lbnVJdGVtTWFwLFxyXG4gICAgICAgIG1lbnVJdGVtRGV0YWlsTWFwOiBhY3Rpb24ubWVudUl0ZW1EZXRhaWxNYXAsXHJcbiAgICAgICAgaXNNZW51TG9hZGVkOiBhY3Rpb24uaXNNZW51TG9hZGVkXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEZuTWVudUFjdGlvblR5cGUuTG9hZE1lbnVEYXRhRXJyb3I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvclxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBGbk1lbnVBY3Rpb25UeXBlLlNldEFjdGl2ZU1lbnVJZDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhY3RpdmVNZW51SWQ6IGFjdGlvbi5hY3RpdmVNZW51SWRcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIl19