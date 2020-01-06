/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { FnMenuActionType, LoadMenuDataSucess, LoadMenuDataError } from '../actions/fn-menu.action';
import { FnMenuStoreService } from '../service/fn-menu.store.service';
var FnMenuEffects = /** @class */ (function () {
    function FnMenuEffects(actions$, fnMenuSvcs) {
        var _this = this;
        this.actions$ = actions$;
        this.fnMenuSvcs = fnMenuSvcs;
        this.loadMenuData$ = this.actions$.pipe(ofType(FnMenuActionType.LoadMenuData), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.fnMenuSvcs.getMenuData(action).pipe(map((/**
             * @param {?} menuData
             * @return {?}
             */
            function (menuData) {
                // tslint:disable-next-line: prefer-const
                /** @type {?} */
                var menuItemMap = {};
                menuItemMap[menuData.id] = {};
                // tslint:disable-next-line: prefer-const
                /** @type {?} */
                var menuItemDetailMap = {};
                menuItemDetailMap[menuData.id] = menuData;
                _this.fnMenuSvcs.simpleMenuMapOnId(menuItemMap, menuData.menuItemArray);
                _this.fnMenuSvcs.getMenuMapOnId(menuItemDetailMap, menuData.menuItemArray);
                return new LoadMenuDataSucess(menuData, menuItemMap, menuItemDetailMap, true);
            })), catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return of(new LoadMenuDataError(err)); })));
        })));
    }
    FnMenuEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FnMenuEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: FnMenuStoreService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], FnMenuEffects.prototype, "loadMenuData$", void 0);
    return FnMenuEffects;
}());
export { FnMenuEffects };
if (false) {
    /** @type {?} */
    FnMenuEffects.prototype.loadMenuData$;
    /**
     * @type {?}
     * @private
     */
    FnMenuEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    FnMenuEffects.prototype.fnMenuSvcs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbWVudS9mbi1zdG9yZXMvZWZmZWN0cy9mbi1tZW51LmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUMsRUFBRSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBK0Isa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVqSSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV0RTtJQUVJLHVCQUFxQixRQUFpQixFQUFXLFVBQThCO1FBQS9FLGlCQUFvRjtRQUEvRCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVcsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFHL0Usa0JBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDOUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxFQUNyQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFvQixJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFDNUMsUUFBUTs7OztRQUFDLFVBQUEsTUFBTTtZQUNkLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUN0QyxHQUFHOzs7O1lBQUMsVUFBQSxRQUFROzs7b0JBRU4sV0FBVyxHQUFHLEVBQUU7Z0JBQ3BCLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDOzs7b0JBRTFCLGlCQUFpQixHQUFHLEVBQUU7Z0JBQzFCLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDdkUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxRSxPQUFPLElBQUksa0JBQWtCLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNoRixDQUFDLEVBQUMsRUFFRixVQUFVOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUE5QixDQUE4QixFQUFDLENBQ2xEO1FBZEQsQ0FjQyxFQUFDLENBQ0wsQ0FBQztJQXRCK0UsQ0FBQzs7Z0JBRnZGLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFLUCxrQkFBa0I7O0lBT3ZCO1FBREMsTUFBTSxFQUFFOzt3REFvQkw7SUFhUixvQkFBQztDQUFBLEFBckNELElBcUNDO1NBcENZLGFBQWE7OztJQUd0QixzQ0FvQkk7Ozs7O0lBdEJTLGlDQUF5Qjs7Ozs7SUFBRyxtQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XHJcbmltcG9ydCB7IG1lcmdlTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7b2YsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGbk1lbnVBY3Rpb25UeXBlLCBGbk1lbnVBY3Rpb25zLCBMb2FkTWVudURhdGEsIExvYWRNZW51RGF0YVN1Y2VzcywgTG9hZE1lbnVEYXRhRXJyb3IgfSBmcm9tICcuLi9hY3Rpb25zL2ZuLW1lbnUuYWN0aW9uJztcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBGbk1lbnVTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2ZuLW1lbnUuc3RvcmUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGbk1lbnVFZmZlY3RzIHtcclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zICwgcHJpdmF0ZSBmbk1lbnVTdmNzOiBGbk1lbnVTdG9yZVNlcnZpY2UpIHsgfVxyXG5cclxuICAgIEBFZmZlY3QoKVxyXG4gICAgbG9hZE1lbnVEYXRhJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuICAgICAgICBvZlR5cGUoRm5NZW51QWN0aW9uVHlwZS5Mb2FkTWVudURhdGEpLFxyXG4gICAgICAgIG1hcCgoYWN0aW9uOiBMb2FkTWVudURhdGEpID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuICAgICAgICAgbWVyZ2VNYXAoYWN0aW9uID0+XHJcbiAgICAgICAgICB0aGlzLmZuTWVudVN2Y3MuZ2V0TWVudURhdGEoYWN0aW9uKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAobWVudURhdGEgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWNvbnN0XHJcbiAgICAgICAgICAgICAgbGV0IG1lbnVJdGVtTWFwID0ge307XHJcbiAgICAgICAgICAgICAgbWVudUl0ZW1NYXBbbWVudURhdGEuaWRdID0ge307XHJcbiAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItY29uc3RcclxuICAgICAgICAgICAgICBsZXQgbWVudUl0ZW1EZXRhaWxNYXAgPSB7fTtcclxuICAgICAgICAgICAgICBtZW51SXRlbURldGFpbE1hcFttZW51RGF0YS5pZF0gPSBtZW51RGF0YTtcclxuICAgICAgICAgICAgICB0aGlzLmZuTWVudVN2Y3Muc2ltcGxlTWVudU1hcE9uSWQobWVudUl0ZW1NYXAsIG1lbnVEYXRhLm1lbnVJdGVtQXJyYXkpO1xyXG4gICAgICAgICAgICAgIHRoaXMuZm5NZW51U3Zjcy5nZXRNZW51TWFwT25JZChtZW51SXRlbURldGFpbE1hcCwgbWVudURhdGEubWVudUl0ZW1BcnJheSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBMb2FkTWVudURhdGFTdWNlc3MobWVudURhdGEsIG1lbnVJdGVtTWFwLCBtZW51SXRlbURldGFpbE1hcCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4gb2YobmV3IExvYWRNZW51RGF0YUVycm9yKGVycikpKVxyXG4gICAgICAgICAgKSlcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBARWZmZWN0KClcclxuICAgIC8vIGxvYWRNZW51RGF0YSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuICAgIC8vICAgICBvZlR5cGUocHJvZHVjdEFjdGlvbnMuUHJvZHVjdEFjdGlvblR5cGVzLkxvYWQpLFxyXG4gICAgLy8gICAgIG1lcmdlTWFwKGFjdGlvbiA9PlxyXG4gICAgLy8gICAgICAgdGhpcy5wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0cygpLnBpcGUoXHJcbiAgICAvLyAgICAgICAgIG1hcChwcm9kdWN0cyA9PiAobmV3IHByb2R1Y3RBY3Rpb25zLkxvYWRTdWNjZXNzKHByb2R1Y3RzKSkpLFxyXG4gICAgLy8gICAgICAgICBjYXRjaEVycm9yKGVyciA9PiBvZihuZXcgcHJvZHVjdEFjdGlvbnMuTG9hZEZhaWwoZXJyKSkpXHJcbiAgICAvLyAgICAgICApXHJcbiAgICAvLyAgICAgKVxyXG4gICAgLy8gICApO1xyXG5cclxufVxyXG4iXX0=