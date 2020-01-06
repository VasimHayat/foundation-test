/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fnSessionAction from '../action/fn-seesion.action';
import { FnSessionStorage } from '../fn-session.storage';
/** @type {?} */
let _initalSession = FnSessionStorage.getFnSession();
_initalSession = _initalSession || {
    ssPK: 0,
    sccPK: 0,
    scaPK: 0,
    saPK: 0,
    scPK: 0,
    scuPK: 0,
    sauPK: 0,
    wIndex: 0,
    pid: null,
    pmid: null,
    mid: null,
    sgaPK: 0,
    baseUrl: null
};
/** @type {?} */
const initialFnSessionState = {
    currentSession: _initalSession,
    error: ""
};
/** @type {?} */
const getSessionFeatureState = createFeatureSelector("fnSession");
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
state => state.currentSession // may be we filter some item
;
/** @type {?} */
export const getCurrentSession = createSelector(getSessionFeatureState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
state => state.ssPK;
/** @type {?} */
export const getCurrent_ssPK = createSelector(getCurrentSession, (ɵ1));
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
state => state.sccPK;
/** @type {?} */
export const getCurretn_sccPK = createSelector(getCurrentSession, (ɵ2));
const ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
state => state.scaPK;
/** @type {?} */
export const getCurrent_scaPK = createSelector(getCurrentSession, (ɵ3));
const ɵ4 = /**
 * @param {?} state
 * @return {?}
 */
state => state.saPK;
/** @type {?} */
export const getCurrent_saPK = createSelector(getCurrentSession, (ɵ4));
const ɵ5 = /**
 * @param {?} state
 * @return {?}
 */
state => state.scPK;
/** @type {?} */
export const getCurrent_scPK = createSelector(getCurrentSession, (ɵ5));
const ɵ6 = /**
 * @param {?} state
 * @return {?}
 */
state => state.scuPK;
/** @type {?} */
export const getCurrent_scuPK = createSelector(getCurrentSession, (ɵ6));
const ɵ7 = /**
 * @param {?} state
 * @return {?}
 */
state => state.scaPK;
/** @type {?} */
export const getCurrent_sauPK = createSelector(getCurrentSession, (ɵ7));
const ɵ8 = /**
 * @param {?} state
 * @return {?}
 */
state => state.scaPK;
/** @type {?} */
export const getCurrent_wIndex = createSelector(getCurrentSession, (ɵ8));
const ɵ9 = /**
 * @param {?} state
 * @return {?}
 */
state => state.pid;
/** @type {?} */
export const getCurrent_pid = createSelector(getCurrentSession, (ɵ9));
const ɵ10 = /**
 * @param {?} state
 * @return {?}
 */
state => state.pmid;
/** @type {?} */
export const getCurrent_pmid = createSelector(getCurrentSession, (ɵ10));
const ɵ11 = /**
 * @param {?} state
 * @return {?}
 */
state => state.mid;
/** @type {?} */
export const getCurrent_mid = createSelector(getCurrentSession, (ɵ11));
const ɵ12 = /**
 * @param {?} state
 * @return {?}
 */
state => state.sgaPK;
/** @type {?} */
export const getCurrent_sgaPK = createSelector(getCurrentSession, (ɵ12));
const ɵ13 = /**
 * @param {?} state
 * @return {?}
 */
state => state.baseUrl;
/** @type {?} */
export const getCurrent_baseUrl = createSelector(getCurrentSession, (ɵ13));
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function fnSessionReducer(state = initialFnSessionState, action) {
    switch (action.type) {
        case fnSessionAction.FnSessionActionType.InitialzeCurrentSession:
            return Object.assign({}, state);
        case fnSessionAction.FnSessionActionType.LoadSessionSuccess:
            return Object.assign({}, state, { currentSession: action.payLoad });
        case fnSessionAction.FnSessionActionType.LoadSessionError:
            return Object.assign({}, state, { error: action.error });
        default:
            return state;
    }
}
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tc2Vzc2lvbi5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zdG9yZXMvYXBwLXNlc3Npb24vc3RhdGUvZm4tc2Vzc2lvbi5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sS0FBSyxlQUFlLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBRXJELGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU7QUFDcEQsY0FBYyxHQUFHLGNBQWMsSUFBSTtJQUMvQixJQUFJLEVBQUUsQ0FBQztJQUNQLEtBQUssRUFBRSxDQUFDO0lBQ1IsS0FBSyxFQUFFLENBQUM7SUFDUixJQUFJLEVBQUUsQ0FBQztJQUNQLElBQUksRUFBRSxDQUFDO0lBQ1AsS0FBSyxFQUFFLENBQUM7SUFDUixLQUFLLEVBQUUsQ0FBQztJQUNSLE1BQU0sRUFBRSxDQUFDO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxJQUFJLEVBQUUsSUFBSTtJQUNWLEdBQUcsRUFBRSxJQUFJO0lBQ1QsS0FBSyxFQUFFLENBQUM7SUFDUixPQUFPLEVBQUUsSUFBSTtDQUNoQixDQUFDOztNQUNJLHFCQUFxQixHQUFtQjtJQUMxQyxjQUFjLEVBQUMsY0FBYztJQUM3QixLQUFLLEVBQUUsRUFBRTtDQUNaOztNQUVLLHNCQUFzQixHQUFHLHFCQUFxQixDQUFpQixXQUFXLENBQUM7Ozs7O0FBSTdFLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyw2QkFBNkI7OztBQUYvRCxNQUFNLE9BQU8saUJBQWlCLEdBQUcsY0FBYyxDQUMzQyxzQkFBc0IsT0FFekI7Ozs7O0FBR0csS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSTs7QUFGdkIsTUFBTSxPQUFPLGVBQWUsR0FBRyxjQUFjLENBQ3pDLGlCQUFpQixPQUVwQjs7Ozs7QUFHRyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLOztBQUZ4QixNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsY0FBYyxDQUMxQyxpQkFBaUIsT0FFcEI7Ozs7O0FBR0csS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSzs7QUFGeEIsTUFBTSxPQUFPLGdCQUFnQixHQUFHLGNBQWMsQ0FDMUMsaUJBQWlCLE9BRXBCOzs7OztBQUlHLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUk7O0FBRnZCLE1BQU0sT0FBTyxlQUFlLEdBQUcsY0FBYyxDQUN6QyxpQkFBaUIsT0FFcEI7Ozs7O0FBR0csS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSTs7QUFGdkIsTUFBTSxPQUFPLGVBQWUsR0FBRyxjQUFjLENBQ3pDLGlCQUFpQixPQUVwQjs7Ozs7QUFHRyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLOztBQUZ4QixNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsY0FBYyxDQUMxQyxpQkFBaUIsT0FFcEI7Ozs7O0FBR0csS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSzs7QUFGeEIsTUFBTSxPQUFPLGdCQUFnQixHQUFHLGNBQWMsQ0FDMUMsaUJBQWlCLE9BRXBCOzs7OztBQUdHLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUs7O0FBRnhCLE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxjQUFjLENBQzNDLGlCQUFpQixPQUVwQjs7Ozs7QUFJRyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHOztBQUZ0QixNQUFNLE9BQU8sY0FBYyxHQUFHLGNBQWMsQ0FDeEMsaUJBQWlCLE9BRXBCOzs7OztBQUdHLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUk7O0FBRnZCLE1BQU0sT0FBTyxlQUFlLEdBQUcsY0FBYyxDQUN6QyxpQkFBaUIsUUFFcEI7Ozs7O0FBSUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRzs7QUFGdEIsTUFBTSxPQUFPLGNBQWMsR0FBRyxjQUFjLENBQ3hDLGlCQUFpQixRQUVwQjs7Ozs7QUFJRyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLOztBQUZ4QixNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsY0FBYyxDQUMxQyxpQkFBaUIsUUFFcEI7Ozs7O0FBSUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTzs7QUFGMUIsTUFBTSxPQUFPLGtCQUFrQixHQUFHLGNBQWMsQ0FDNUMsaUJBQWlCLFFBRXBCOzs7Ozs7QUFJRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzVCLEtBQUssR0FBRyxxQkFBcUIsRUFDN0IsTUFBd0M7SUFFeEMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBRWpCLEtBQUssZUFBZSxDQUFDLG1CQUFtQixDQUFDLHVCQUF1QjtZQUM1RCx5QkFDTyxLQUFLLEVBQ1Y7UUFFTixLQUFLLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0I7WUFDdkQseUJBQ08sS0FBSyxJQUNSLGNBQWMsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUNoQztRQUVOLEtBQUssZUFBZSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQjtZQUNyRCx5QkFDTyxLQUFLLElBQ1IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQ3JCO1FBQ047WUFDSSxPQUFPLEtBQUssQ0FBQztLQUNwQjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGblNlc3Npb24sIEZuU2Vzc2lvblN0YXRlIH0gZnJvbSAnLi9mbi5zZXNzaW9uLm1vZGVsJztcclxuaW1wb3J0IHsgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0ICogYXMgZm5TZXNzaW9uQWN0aW9uIGZyb20gJy4uL2FjdGlvbi9mbi1zZWVzaW9uLmFjdGlvbic7XHJcbmltcG9ydCB7IEZuU2Vzc2lvblN0b3JhZ2UgfSBmcm9tICcuLi9mbi1zZXNzaW9uLnN0b3JhZ2UnO1xyXG5cclxubGV0IF9pbml0YWxTZXNzaW9uID0gRm5TZXNzaW9uU3RvcmFnZS5nZXRGblNlc3Npb24oKTtcclxuX2luaXRhbFNlc3Npb24gPSBfaW5pdGFsU2Vzc2lvbiB8fCB7XHJcbiAgICBzc1BLOiAwLFxyXG4gICAgc2NjUEs6IDAsXHJcbiAgICBzY2FQSzogMCxcclxuICAgIHNhUEs6IDAsXHJcbiAgICBzY1BLOiAwLFxyXG4gICAgc2N1UEs6IDAsXHJcbiAgICBzYXVQSzogMCxcclxuICAgIHdJbmRleDogMCxcclxuICAgIHBpZDogbnVsbCxcclxuICAgIHBtaWQ6IG51bGwsXHJcbiAgICBtaWQ6IG51bGwsXHJcbiAgICBzZ2FQSzogMCxcclxuICAgIGJhc2VVcmw6IG51bGxcclxufTtcclxuY29uc3QgaW5pdGlhbEZuU2Vzc2lvblN0YXRlOiBGblNlc3Npb25TdGF0ZSA9IHtcclxuICAgIGN1cnJlbnRTZXNzaW9uOl9pbml0YWxTZXNzaW9uICxcclxuICAgIGVycm9yOiBcIlwiXHJcbn07XHJcblxyXG5jb25zdCBnZXRTZXNzaW9uRmVhdHVyZVN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPEZuU2Vzc2lvblN0YXRlPihcImZuU2Vzc2lvblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50U2Vzc2lvbiA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0U2Vzc2lvbkZlYXR1cmVTdGF0ZSxcclxuICAgIHN0YXRlID0+IHN0YXRlLmN1cnJlbnRTZXNzaW9uIC8vIG1heSBiZSB3ZSBmaWx0ZXIgc29tZSBpdGVtXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50X3NzUEsgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIGdldEN1cnJlbnRTZXNzaW9uLFxyXG4gICAgc3RhdGUgPT4gc3RhdGUuc3NQS1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmV0bl9zY2NQSyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5zY2NQS1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudF9zY2FQSyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5zY2FQS1xyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRfc2FQSyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5zYVBLXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50X3NjUEsgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIGdldEN1cnJlbnRTZXNzaW9uLFxyXG4gICAgc3RhdGUgPT4gc3RhdGUuc2NQS1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudF9zY3VQSyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5zY3VQS1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudF9zYXVQSyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5zY2FQS1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudF93SW5kZXggPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIGdldEN1cnJlbnRTZXNzaW9uLFxyXG4gICAgc3RhdGUgPT4gc3RhdGUuc2NhUEtcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50X3BpZCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5waWRcclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRfcG1pZCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5wbWlkXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudF9taWQgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIGdldEN1cnJlbnRTZXNzaW9uLFxyXG4gICAgc3RhdGUgPT4gc3RhdGUubWlkXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudF9zZ2FQSyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5zZ2FQS1xyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRfYmFzZVVybCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5iYXNlVXJsXHJcbik7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmblNlc3Npb25SZWR1Y2VyKFxyXG4gICAgc3RhdGUgPSBpbml0aWFsRm5TZXNzaW9uU3RhdGUsXHJcbiAgICBhY3Rpb246IGZuU2Vzc2lvbkFjdGlvbi5GblNlc3Npb25BY3Rpb25zXHJcbik6IEZuU2Vzc2lvblN0YXRlIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICAgICAgY2FzZSBmblNlc3Npb25BY3Rpb24uRm5TZXNzaW9uQWN0aW9uVHlwZS5Jbml0aWFsemVDdXJyZW50U2Vzc2lvbjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgZm5TZXNzaW9uQWN0aW9uLkZuU2Vzc2lvbkFjdGlvblR5cGUuTG9hZFNlc3Npb25TdWNjZXNzOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2Vzc2lvbjogYWN0aW9uLnBheUxvYWRcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSBmblNlc3Npb25BY3Rpb24uRm5TZXNzaW9uQWN0aW9uVHlwZS5Mb2FkU2Vzc2lvbkVycm9yOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==