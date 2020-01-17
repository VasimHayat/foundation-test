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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbWVudS9mbi1zdG9yZXMvZWZmZWN0cy9mbi1tZW51LmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsRUFBRSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFDTCxnQkFBZ0IsRUFHaEIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNsQixNQUFNLDJCQUEyQixDQUFDO0FBRW5DLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBRXBFO0lBRUUsdUJBQW9CLFFBQWlCLEVBQVUsVUFBOEI7UUFBN0UsaUJBQ0M7UUFEbUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLGVBQVUsR0FBVixVQUFVLENBQW9CO1FBSTdFLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsRUFDckMsR0FBRzs7OztRQUFDLFVBQUMsTUFBb0IsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzdDLFFBQVE7Ozs7UUFBQyxVQUFBLE1BQU07WUFDYixPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDdEMsR0FBRzs7OztZQUFDLFVBQUEsUUFBUTs7O29CQUVOLFdBQVcsR0FBRyxFQUFFO2dCQUNwQixXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7O29CQUUxQixpQkFBaUIsR0FBRyxFQUFFO2dCQUMxQixpQkFBaUIsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO2dCQUMxQyxLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3ZFLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDMUUsT0FBTyxJQUFJLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEYsQ0FBQyxFQUFDLEVBRUYsVUFBVTs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBOUIsQ0FBOEIsRUFBQyxDQUNsRDtRQWRELENBY0MsRUFBQyxDQUNMLENBQUM7SUF0QkYsQ0FBQzs7Z0JBSEYsVUFBVTs7OztnQkFiSCxPQUFPO2dCQVdQLGtCQUFrQjs7SUFReEI7UUFEQyxNQUFNLEVBQUU7O3dEQW9CUDtJQWFKLG9CQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FyQ1ksYUFBYTs7O0lBSXhCLHNDQW9CRTs7Ozs7SUF2QlUsaUNBQXlCOzs7OztJQUFFLG1DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QWN0aW9ucywgRWZmZWN0LCBvZlR5cGV9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5pbXBvcnQge21lcmdlTWFwLCBtYXAsIGNhdGNoRXJyb3J9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtvZiwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgRm5NZW51QWN0aW9uVHlwZSxcclxuICBGbk1lbnVBY3Rpb25zLFxyXG4gIExvYWRNZW51RGF0YSxcclxuICBMb2FkTWVudURhdGFTdWNlc3MsXHJcbiAgTG9hZE1lbnVEYXRhRXJyb3JcclxufSBmcm9tICcuLi9hY3Rpb25zL2ZuLW1lbnUuYWN0aW9uJztcclxuaW1wb3J0IHtBY3Rpb259IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHtGbk1lbnVTdG9yZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvZm4tbWVudS5zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZuTWVudUVmZmVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsIHByaXZhdGUgZm5NZW51U3ZjczogRm5NZW51U3RvcmVTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBARWZmZWN0KClcclxuICBsb2FkTWVudURhdGEkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG4gICAgb2ZUeXBlKEZuTWVudUFjdGlvblR5cGUuTG9hZE1lbnVEYXRhKSxcclxuICAgIG1hcCgoYWN0aW9uOiBMb2FkTWVudURhdGEpID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuICAgIG1lcmdlTWFwKGFjdGlvbiA9PlxyXG4gICAgICB0aGlzLmZuTWVudVN2Y3MuZ2V0TWVudURhdGEoYWN0aW9uKS5waXBlKFxyXG4gICAgICAgIG1hcChtZW51RGF0YSA9PiB7XHJcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1jb25zdFxyXG4gICAgICAgICAgbGV0IG1lbnVJdGVtTWFwID0ge307XHJcbiAgICAgICAgICBtZW51SXRlbU1hcFttZW51RGF0YS5pZF0gPSB7fTtcclxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWNvbnN0XHJcbiAgICAgICAgICBsZXQgbWVudUl0ZW1EZXRhaWxNYXAgPSB7fTtcclxuICAgICAgICAgIG1lbnVJdGVtRGV0YWlsTWFwW21lbnVEYXRhLmlkXSA9IG1lbnVEYXRhO1xyXG4gICAgICAgICAgdGhpcy5mbk1lbnVTdmNzLnNpbXBsZU1lbnVNYXBPbklkKG1lbnVJdGVtTWFwLCBtZW51RGF0YS5tZW51SXRlbUFycmF5KTtcclxuICAgICAgICAgIHRoaXMuZm5NZW51U3Zjcy5nZXRNZW51TWFwT25JZChtZW51SXRlbURldGFpbE1hcCwgbWVudURhdGEubWVudUl0ZW1BcnJheSk7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IExvYWRNZW51RGF0YVN1Y2VzcyhtZW51RGF0YSwgbWVudUl0ZW1NYXAsIG1lbnVJdGVtRGV0YWlsTWFwLCB0cnVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICxcclxuICAgICAgICBjYXRjaEVycm9yKGVyciA9PiBvZihuZXcgTG9hZE1lbnVEYXRhRXJyb3IoZXJyKSkpXHJcbiAgICAgICkpXHJcbiAgKTtcclxuXHJcbiAgLy8gQEVmZmVjdCgpXHJcbiAgLy8gbG9hZE1lbnVEYXRhJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG4gIC8vICAgICBvZlR5cGUocHJvZHVjdEFjdGlvbnMuUHJvZHVjdEFjdGlvblR5cGVzLkxvYWQpLFxyXG4gIC8vICAgICBtZXJnZU1hcChhY3Rpb24gPT5cclxuICAvLyAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RzKCkucGlwZShcclxuICAvLyAgICAgICAgIG1hcChwcm9kdWN0cyA9PiAobmV3IHByb2R1Y3RBY3Rpb25zLkxvYWRTdWNjZXNzKHByb2R1Y3RzKSkpLFxyXG4gIC8vICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4gb2YobmV3IHByb2R1Y3RBY3Rpb25zLkxvYWRGYWlsKGVycikpKVxyXG4gIC8vICAgICAgIClcclxuICAvLyAgICAgKVxyXG4gIC8vICAgKTtcclxuXHJcbn1cclxuIl19