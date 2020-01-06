/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { mergeMap, map } from "rxjs/operators";
import { of } from 'rxjs';
import * as fnSessionAction from '../action/fn-seesion.action';
import { FnSessionStorage } from '../fn-session.storage';
var FnSessionEffect = /** @class */ (function () {
    function FnSessionEffect(action$) {
        this.action$ = action$;
        this.LoadSession$ = this.action$.pipe(ofType(fnSessionAction.FnSessionActionType.LoadSession), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payLoad; })), mergeMap((/**
         * @param {?} fnSession
         * @return {?}
         */
        function (fnSession) {
            FnSessionStorage.setFnSession(fnSession);
            return of(new fnSessionAction.LoadSessionSuccess(fnSession));
        })));
    }
    FnSessionEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FnSessionEffect.ctorParameters = function () { return [
        { type: Actions }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], FnSessionEffect.prototype, "LoadSession$", void 0);
    return FnSessionEffect;
}());
export { FnSessionEffect };
if (false) {
    /** @type {?} */
    FnSessionEffect.prototype.LoadSession$;
    /**
     * @type {?}
     * @private
     */
    FnSessionEffect.prototype.action$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tc2Vzc2lvbi5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zdG9yZXMvYXBwLXNlc3Npb24vc3RhdGUvZm4tc2Vzc2lvbi5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3hCLE9BQU8sS0FBSyxlQUFlLE1BQU0sNkJBQTZCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFekQ7SUFFSSx5QkFDWSxPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBSTVCLGlCQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLEVBQ3ZELEdBQUc7Ozs7UUFBQyxVQUFDLE1BQW1DLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUM1RCxRQUFROzs7O1FBQUMsVUFBQyxTQUFvQjtZQUN6QixnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUMsT0FBTyxFQUFFLENBQUMsSUFBSSxlQUFlLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUNoRSxDQUFDLEVBQ0EsQ0FDSixDQUFDO0lBWEUsQ0FBQzs7Z0JBSlIsVUFBVTs7OztnQkFQRixPQUFPOztJQWNaO1FBREMsTUFBTSxFQUFFOzt5REFTUDtJQUVOLHNCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FoQlksZUFBZTs7O0lBS3hCLHVDQVNFOzs7OztJQVpFLGtDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7IFxyXG5pbXBvcnQgeyBtZXJnZU1hcCwgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7IFxyXG5pbXBvcnQge29mfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgZm5TZXNzaW9uQWN0aW9uIGZyb20gJy4uL2FjdGlvbi9mbi1zZWVzaW9uLmFjdGlvbic7XHJcbmltcG9ydCB7IEZuU2Vzc2lvbiB9IGZyb20gJy4vZm4uc2Vzc2lvbi5tb2RlbCc7XHJcbmltcG9ydCB7IEZuU2Vzc2lvblN0b3JhZ2UgfSBmcm9tICcuLi9mbi1zZXNzaW9uLnN0b3JhZ2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm5TZXNzaW9uRWZmZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYWN0aW9uJDogQWN0aW9uc1xyXG4gICAgKSB7IH1cclxuXHJcbiAgICBARWZmZWN0KClcclxuICAgIExvYWRTZXNzaW9uJCA9IHRoaXMuYWN0aW9uJC5waXBlKFxyXG4gICAgICAgIG9mVHlwZShmblNlc3Npb25BY3Rpb24uRm5TZXNzaW9uQWN0aW9uVHlwZS5Mb2FkU2Vzc2lvbiksXHJcbiAgICAgICAgbWFwKChhY3Rpb246IGZuU2Vzc2lvbkFjdGlvbi5Mb2FkU2Vzc2lvbikgPT4gYWN0aW9uLnBheUxvYWQpLFxyXG4gICAgICAgIG1lcmdlTWFwKChmblNlc3Npb246IEZuU2Vzc2lvbikgPT57XHJcbiAgICAgICAgICAgICBGblNlc3Npb25TdG9yYWdlLnNldEZuU2Vzc2lvbihmblNlc3Npb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gb2YobmV3IGZuU2Vzc2lvbkFjdGlvbi5Mb2FkU2Vzc2lvblN1Y2Nlc3MoZm5TZXNzaW9uKSkgICAgICAgXHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIClcclxuICAgICk7IFxyXG4gICAgXHJcbn1cclxuIl19