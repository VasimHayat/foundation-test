/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fnSessionAction from '../action/fn-seesion.action';
import { FnSessionStorage } from '../fn-session.storage';
/** @type {?} */
var _initalSession = FnSessionStorage.getFnSession();
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
var initialFnSessionState = {
    currentSession: _initalSession,
    error: ""
};
/** @type {?} */
var getSessionFeatureState = createFeatureSelector("fnSession");
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.currentSession; } // may be we filter some item
;
/** @type {?} */
export var getCurrentSession = createSelector(getSessionFeatureState, (ɵ0));
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.ssPK; };
/** @type {?} */
export var getCurrent_ssPK = createSelector(getCurrentSession, (ɵ1));
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.sccPK; };
/** @type {?} */
export var getCurretn_sccPK = createSelector(getCurrentSession, (ɵ2));
var ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.scaPK; };
/** @type {?} */
export var getCurrent_scaPK = createSelector(getCurrentSession, (ɵ3));
var ɵ4 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.saPK; };
/** @type {?} */
export var getCurrent_saPK = createSelector(getCurrentSession, (ɵ4));
var ɵ5 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.scPK; };
/** @type {?} */
export var getCurrent_scPK = createSelector(getCurrentSession, (ɵ5));
var ɵ6 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.scuPK; };
/** @type {?} */
export var getCurrent_scuPK = createSelector(getCurrentSession, (ɵ6));
var ɵ7 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.scaPK; };
/** @type {?} */
export var getCurrent_sauPK = createSelector(getCurrentSession, (ɵ7));
var ɵ8 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.scaPK; };
/** @type {?} */
export var getCurrent_wIndex = createSelector(getCurrentSession, (ɵ8));
var ɵ9 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.pid; };
/** @type {?} */
export var getCurrent_pid = createSelector(getCurrentSession, (ɵ9));
var ɵ10 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.pmid; };
/** @type {?} */
export var getCurrent_pmid = createSelector(getCurrentSession, (ɵ10));
var ɵ11 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.mid; };
/** @type {?} */
export var getCurrent_mid = createSelector(getCurrentSession, (ɵ11));
var ɵ12 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.sgaPK; };
/** @type {?} */
export var getCurrent_sgaPK = createSelector(getCurrentSession, (ɵ12));
var ɵ13 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.baseUrl; };
/** @type {?} */
export var getCurrent_baseUrl = createSelector(getCurrentSession, (ɵ13));
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function fnSessionReducer(state, action) {
    if (state === void 0) { state = initialFnSessionState; }
    switch (action.type) {
        case fnSessionAction.FnSessionActionType.InitialzeCurrentSession:
            return tslib_1.__assign({}, state);
        case fnSessionAction.FnSessionActionType.LoadSessionSuccess:
            return tslib_1.__assign({}, state, { currentSession: action.payLoad });
        case fnSessionAction.FnSessionActionType.LoadSessionError:
            return tslib_1.__assign({}, state, { error: action.error });
        default:
            return state;
    }
}
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tc2Vzc2lvbi5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zdG9yZXMvYXBwLXNlc3Npb24vc3RhdGUvZm4tc2Vzc2lvbi5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwRSxPQUFPLEtBQUssZUFBZSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQUVyRCxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxFQUFFO0FBQ3BELGNBQWMsR0FBRyxjQUFjLElBQUk7SUFDL0IsSUFBSSxFQUFFLENBQUM7SUFDUCxLQUFLLEVBQUUsQ0FBQztJQUNSLEtBQUssRUFBRSxDQUFDO0lBQ1IsSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsQ0FBQztJQUNQLEtBQUssRUFBRSxDQUFDO0lBQ1IsS0FBSyxFQUFFLENBQUM7SUFDUixNQUFNLEVBQUUsQ0FBQztJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsSUFBSSxFQUFFLElBQUk7SUFDVixHQUFHLEVBQUUsSUFBSTtJQUNULEtBQUssRUFBRSxDQUFDO0lBQ1IsT0FBTyxFQUFFLElBQUk7Q0FDaEIsQ0FBQzs7SUFDSSxxQkFBcUIsR0FBbUI7SUFDMUMsY0FBYyxFQUFDLGNBQWM7SUFDN0IsS0FBSyxFQUFFLEVBQUU7Q0FDWjs7SUFFSyxzQkFBc0IsR0FBRyxxQkFBcUIsQ0FBaUIsV0FBVyxDQUFDOzs7OztBQUk3RSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQXBCLENBQW9CLENBQUMsNkJBQTZCOzs7QUFGL0QsTUFBTSxLQUFPLGlCQUFpQixHQUFHLGNBQWMsQ0FDM0Msc0JBQXNCLE9BRXpCOzs7OztBQUdHLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVOztBQUZ2QixNQUFNLEtBQU8sZUFBZSxHQUFHLGNBQWMsQ0FDekMsaUJBQWlCLE9BRXBCOzs7OztBQUdHLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxDQUFXOztBQUZ4QixNQUFNLEtBQU8sZ0JBQWdCLEdBQUcsY0FBYyxDQUMxQyxpQkFBaUIsT0FFcEI7Ozs7O0FBR0csVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFYLENBQVc7O0FBRnhCLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyxjQUFjLENBQzFDLGlCQUFpQixPQUVwQjs7Ozs7QUFJRyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQVYsQ0FBVTs7QUFGdkIsTUFBTSxLQUFPLGVBQWUsR0FBRyxjQUFjLENBQ3pDLGlCQUFpQixPQUVwQjs7Ozs7QUFHRyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQVYsQ0FBVTs7QUFGdkIsTUFBTSxLQUFPLGVBQWUsR0FBRyxjQUFjLENBQ3pDLGlCQUFpQixPQUVwQjs7Ozs7QUFHRyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVzs7QUFGeEIsTUFBTSxLQUFPLGdCQUFnQixHQUFHLGNBQWMsQ0FDMUMsaUJBQWlCLE9BRXBCOzs7OztBQUdHLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxDQUFXOztBQUZ4QixNQUFNLEtBQU8sZ0JBQWdCLEdBQUcsY0FBYyxDQUMxQyxpQkFBaUIsT0FFcEI7Ozs7O0FBR0csVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFYLENBQVc7O0FBRnhCLE1BQU0sS0FBTyxpQkFBaUIsR0FBRyxjQUFjLENBQzNDLGlCQUFpQixPQUVwQjs7Ozs7QUFJRyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLEVBQVQsQ0FBUzs7QUFGdEIsTUFBTSxLQUFPLGNBQWMsR0FBRyxjQUFjLENBQ3hDLGlCQUFpQixPQUVwQjs7Ozs7QUFHRyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQVYsQ0FBVTs7QUFGdkIsTUFBTSxLQUFPLGVBQWUsR0FBRyxjQUFjLENBQ3pDLGlCQUFpQixRQUVwQjs7Ozs7QUFJRyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLEVBQVQsQ0FBUzs7QUFGdEIsTUFBTSxLQUFPLGNBQWMsR0FBRyxjQUFjLENBQ3hDLGlCQUFpQixRQUVwQjs7Ozs7QUFJRyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVzs7QUFGeEIsTUFBTSxLQUFPLGdCQUFnQixHQUFHLGNBQWMsQ0FDMUMsaUJBQWlCLFFBRXBCOzs7OztBQUlHLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhOztBQUYxQixNQUFNLEtBQU8sa0JBQWtCLEdBQUcsY0FBYyxDQUM1QyxpQkFBaUIsUUFFcEI7Ozs7OztBQUlELE1BQU0sVUFBVSxnQkFBZ0IsQ0FDNUIsS0FBNkIsRUFDN0IsTUFBd0M7SUFEeEMsc0JBQUEsRUFBQSw2QkFBNkI7SUFHN0IsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBRWpCLEtBQUssZUFBZSxDQUFDLG1CQUFtQixDQUFDLHVCQUF1QjtZQUM1RCw0QkFDTyxLQUFLLEVBQ1Y7UUFFTixLQUFLLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0I7WUFDdkQsNEJBQ08sS0FBSyxJQUNSLGNBQWMsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUNoQztRQUVOLEtBQUssZUFBZSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQjtZQUNyRCw0QkFDTyxLQUFLLElBQ1IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQ3JCO1FBQ047WUFDSSxPQUFPLEtBQUssQ0FBQztLQUNwQjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGblNlc3Npb24sIEZuU2Vzc2lvblN0YXRlIH0gZnJvbSAnLi9mbi5zZXNzaW9uLm1vZGVsJztcclxuaW1wb3J0IHsgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0ICogYXMgZm5TZXNzaW9uQWN0aW9uIGZyb20gJy4uL2FjdGlvbi9mbi1zZWVzaW9uLmFjdGlvbic7XHJcbmltcG9ydCB7IEZuU2Vzc2lvblN0b3JhZ2UgfSBmcm9tICcuLi9mbi1zZXNzaW9uLnN0b3JhZ2UnO1xyXG5cclxubGV0IF9pbml0YWxTZXNzaW9uID0gRm5TZXNzaW9uU3RvcmFnZS5nZXRGblNlc3Npb24oKTtcclxuX2luaXRhbFNlc3Npb24gPSBfaW5pdGFsU2Vzc2lvbiB8fCB7XHJcbiAgICBzc1BLOiAwLFxyXG4gICAgc2NjUEs6IDAsXHJcbiAgICBzY2FQSzogMCxcclxuICAgIHNhUEs6IDAsXHJcbiAgICBzY1BLOiAwLFxyXG4gICAgc2N1UEs6IDAsXHJcbiAgICBzYXVQSzogMCxcclxuICAgIHdJbmRleDogMCxcclxuICAgIHBpZDogbnVsbCxcclxuICAgIHBtaWQ6IG51bGwsXHJcbiAgICBtaWQ6IG51bGwsXHJcbiAgICBzZ2FQSzogMCxcclxuICAgIGJhc2VVcmw6IG51bGxcclxufTtcclxuY29uc3QgaW5pdGlhbEZuU2Vzc2lvblN0YXRlOiBGblNlc3Npb25TdGF0ZSA9IHtcclxuICAgIGN1cnJlbnRTZXNzaW9uOl9pbml0YWxTZXNzaW9uICxcclxuICAgIGVycm9yOiBcIlwiXHJcbn07XHJcblxyXG5jb25zdCBnZXRTZXNzaW9uRmVhdHVyZVN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPEZuU2Vzc2lvblN0YXRlPihcImZuU2Vzc2lvblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50U2Vzc2lvbiA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0U2Vzc2lvbkZlYXR1cmVTdGF0ZSxcclxuICAgIHN0YXRlID0+IHN0YXRlLmN1cnJlbnRTZXNzaW9uIC8vIG1heSBiZSB3ZSBmaWx0ZXIgc29tZSBpdGVtXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50X3NzUEsgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIGdldEN1cnJlbnRTZXNzaW9uLFxyXG4gICAgc3RhdGUgPT4gc3RhdGUuc3NQS1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmV0bl9zY2NQSyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5zY2NQS1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudF9zY2FQSyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5zY2FQS1xyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRfc2FQSyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5zYVBLXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50X3NjUEsgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIGdldEN1cnJlbnRTZXNzaW9uLFxyXG4gICAgc3RhdGUgPT4gc3RhdGUuc2NQS1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudF9zY3VQSyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5zY3VQS1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudF9zYXVQSyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5zY2FQS1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudF93SW5kZXggPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIGdldEN1cnJlbnRTZXNzaW9uLFxyXG4gICAgc3RhdGUgPT4gc3RhdGUuc2NhUEtcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50X3BpZCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5waWRcclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRfcG1pZCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5wbWlkXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudF9taWQgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIGdldEN1cnJlbnRTZXNzaW9uLFxyXG4gICAgc3RhdGUgPT4gc3RhdGUubWlkXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudF9zZ2FQSyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5zZ2FQS1xyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRfYmFzZVVybCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgICBzdGF0ZSA9PiBzdGF0ZS5iYXNlVXJsXHJcbik7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmblNlc3Npb25SZWR1Y2VyKFxyXG4gICAgc3RhdGUgPSBpbml0aWFsRm5TZXNzaW9uU3RhdGUsXHJcbiAgICBhY3Rpb246IGZuU2Vzc2lvbkFjdGlvbi5GblNlc3Npb25BY3Rpb25zXHJcbik6IEZuU2Vzc2lvblN0YXRlIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICAgICAgY2FzZSBmblNlc3Npb25BY3Rpb24uRm5TZXNzaW9uQWN0aW9uVHlwZS5Jbml0aWFsemVDdXJyZW50U2Vzc2lvbjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgZm5TZXNzaW9uQWN0aW9uLkZuU2Vzc2lvbkFjdGlvblR5cGUuTG9hZFNlc3Npb25TdWNjZXNzOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2Vzc2lvbjogYWN0aW9uLnBheUxvYWRcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSBmblNlc3Npb25BY3Rpb24uRm5TZXNzaW9uQWN0aW9uVHlwZS5Mb2FkU2Vzc2lvbkVycm9yOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==