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
    error: ''
};
/** @type {?} */
var getSessionFeatureState = createFeatureSelector('fnSession');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tc2Vzc2lvbi5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zdG9yZXMvYXBwLXNlc3Npb24vc3RhdGUvZm4tc2Vzc2lvbi5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGNBQWMsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEtBQUssZUFBZSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDOztJQUVuRCxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxFQUFFO0FBQ3BELGNBQWMsR0FBRyxjQUFjLElBQUk7SUFDakMsSUFBSSxFQUFFLENBQUM7SUFDUCxLQUFLLEVBQUUsQ0FBQztJQUNSLEtBQUssRUFBRSxDQUFDO0lBQ1IsSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsQ0FBQztJQUNQLEtBQUssRUFBRSxDQUFDO0lBQ1IsS0FBSyxFQUFFLENBQUM7SUFDUixNQUFNLEVBQUUsQ0FBQztJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsSUFBSSxFQUFFLElBQUk7SUFDVixHQUFHLEVBQUUsSUFBSTtJQUNULEtBQUssRUFBRSxDQUFDO0lBQ1IsT0FBTyxFQUFFLElBQUk7Q0FDZCxDQUFDOztJQUNJLHFCQUFxQixHQUFtQjtJQUM1QyxjQUFjLEVBQUUsY0FBYztJQUM5QixLQUFLLEVBQUcsRUFBRTtDQUNYOztJQUVLLHNCQUFzQixHQUFHLHFCQUFxQixDQUFpQixXQUFXLENBQUM7Ozs7O0FBSS9FLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLGNBQWMsRUFBcEIsQ0FBb0IsQ0FBQyw2QkFBNkI7OztBQUY3RCxNQUFNLEtBQU8saUJBQWlCLEdBQUcsY0FBYyxDQUM3QyxzQkFBc0IsT0FFdkI7Ozs7O0FBR0MsVUFBQSxLQUFLLElBQUksT0FBQSxL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bSAnLi9mbi5zZXNzaW9uLm1vZGVsJztcclxuaW1wb3J0IHtjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9yfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIGZuU2Vzc2lvbkFjdGlvbiBmcm9tICcuLi9hY3Rpb24vZm4tc2Vlc2lvbi5hY3Rpb24nO1xyXG5pbXBvcnQge0ZuU2Vzc2lvblN0b3JhZ2V9IGZyb20gJy4uL2ZuLXNlc3Npb24uc3RvcmFnZSc7XHJcblxyXG5sZXQgX2luaXRhbFNlc3Npb24gPSBGblNlc3Npb25TdG9yYWdlLmdldEZuU2Vzc2lvbigpO1xyXG5faW5pdGFsU2Vzc2lvbiA9IF9pbml0YWxTZXNzaW9uIHx8IHtcclxuICBzc1BLOiAwLFxyXG4gIHNjY1BLOiAwLFxyXG4gIHNjYVBLOiAwLFxyXG4gIHNhUEs6IDAsXHJcbiAgc2NQSzogMCxcclxuICBzY3VQSzogMCxcclxuICBzYXVQSzogMCxcclxuICB3SW5kZXg6IDAsXHJcbiAgcGlkOiBudWxsLFxyXG4gIHBtaWQ6IG51bGwsXHJcbiAgbWlkOiBudWxsLFxyXG4gIHNnYVBLOiAwLFxyXG4gIGJhc2VVcmw6IG51bGxcclxufTtcclxuY29uc3QgaW5pdGlhbEZuU2Vzc2lvblN0YXRlOiBGblNlc3Npb25TdGF0ZSA9IHtcclxuICBjdXJyZW50U2Vzc2lvbjogX2luaXRhbFNlc3Npb24sXHJcbiAgZXJyb3IgOiAnJ1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2Vzc2lvbkZlYXR1cmVTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxGblNlc3Npb25TdGF0ZT4oJ2ZuU2Vzc2lvbicpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRTZXNzaW9uID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgZ2V0U2Vzc2lvbkZlYXR1cmVTdGF0ZSxcclxuICBzdGF0ZSA9PiBzdGF0ZS5jdXJyZW50U2Vzc2lvbiAvLyBtYXkgYmUgd2UgZmlsdGVyIHNvbWUgaXRlbVxyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudF9zc1BLID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgc3RhdGUgPT4gc3RhdGUuc3NQS1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmV0bl9zY2NQSyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gIGdldEN1cnJlbnRTZXNzaW9uLFxyXG4gIHN0YXRlID0+IHN0YXRlLnNjY1BLXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50X3NjYVBLID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgc3RhdGUgPT4gc3RhdGUuc2NhUEtcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50X3NhUEsgPSBjcmVhdGVTZWxlY3RvcihcclxuICBnZXRDdXJyZW50U2Vzc2lvbixcclxuICBzdGF0ZSA9PiBzdGF0ZS5zYVBLXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50X3NjUEsgPSBjcmVhdGVTZWxlY3RvcihcclxuICBnZXRDdXJyZW50U2Vzc2lvbixcclxuICBzdGF0ZSA9PiBzdGF0ZS5zY1BLXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50X3NjdVBLID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgc3RhdGUgPT4gc3RhdGUuc2N1UEtcclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRfc2F1UEsgPSBjcmVhdGVTZWxlY3RvcihcclxuICBnZXRDdXJyZW50U2Vzc2lvbixcclxuICBzdGF0ZSA9PiBzdGF0ZS5zY2FQS1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudF93SW5kZXggPSBjcmVhdGVTZWxlY3RvcihcclxuICBnZXRDdXJyZW50U2Vzc2lvbixcclxuICBzdGF0ZSA9PiBzdGF0ZS5zY2FQS1xyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRfcGlkID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgc3RhdGUgPT4gc3RhdGUucGlkXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50X3BtaWQgPSBjcmVhdGVTZWxlY3RvcihcclxuICBnZXRDdXJyZW50U2Vzc2lvbixcclxuICBzdGF0ZSA9PiBzdGF0ZS5wbWlkXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudF9taWQgPSBjcmVhdGVTZWxlY3RvcihcclxuICBnZXRDdXJyZW50U2Vzc2lvbixcclxuICBzdGF0ZSA9PiBzdGF0ZS5taWRcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50X3NnYVBLID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgZ2V0Q3VycmVudFNlc3Npb24sXHJcbiAgc3RhdGUgPT4gc3RhdGUuc2dhUEtcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50X2Jhc2VVcmwgPSBjcmVhdGVTZWxlY3RvcihcclxuICBnZXRDdXJyZW50U2Vzc2lvbixcclxuICBzdGF0ZSA9PiBzdGF0ZS5iYXNlVXJsXHJcbik7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZuU2Vzc2lvblJlZHVjZXIoXHJcbiAgc3RhdGUgPSBpbml0aWFsRm5TZXNzaW9uU3RhdGUsXHJcbiAgYWN0aW9uOiBmblNlc3Npb25BY3Rpb24uRm5TZXNzaW9uQWN0aW9uc1xyXG4pOiBGblNlc3Npb25TdGF0ZSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgIGNhc2UgZm5TZXNzaW9uQWN0aW9uLkZuU2Vzc2lvbkFjdGlvblR5cGUuSW5pdGlhbHplQ3VycmVudFNlc3Npb246XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGVcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGZuU2Vzc2lvbkFjdGlvbi5GblNlc3Npb25BY3Rpb25UeXBlLkxvYWRTZXNzaW9uU3VjY2VzczpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJyZW50U2Vzc2lvbjogYWN0aW9uLnBheUxvYWRcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIGZuU2Vzc2lvbkFjdGlvbi5GblNlc3Npb25BY3Rpb25UeXBlLkxvYWRTZXNzaW9uRXJyb3I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvclxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iXX0=