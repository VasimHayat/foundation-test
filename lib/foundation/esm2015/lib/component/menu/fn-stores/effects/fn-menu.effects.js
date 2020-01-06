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
export class FnMenuEffects {
    /**
     * @param {?} actions$
     * @param {?} fnMenuSvcs
     */
    constructor(actions$, fnMenuSvcs) {
        this.actions$ = actions$;
        this.fnMenuSvcs = fnMenuSvcs;
        this.loadMenuData$ = this.actions$.pipe(ofType(FnMenuActionType.LoadMenuData), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} action
         * @return {?}
         */
        action => this.fnMenuSvcs.getMenuData(action).pipe(map((/**
         * @param {?} menuData
         * @return {?}
         */
        menuData => {
            // tslint:disable-next-line: prefer-const
            /** @type {?} */
            let menuItemMap = {};
            menuItemMap[menuData.id] = {};
            // tslint:disable-next-line: prefer-const
            /** @type {?} */
            let menuItemDetailMap = {};
            menuItemDetailMap[menuData.id] = menuData;
            this.fnMenuSvcs.simpleMenuMapOnId(menuItemMap, menuData.menuItemArray);
            this.fnMenuSvcs.getMenuMapOnId(menuItemDetailMap, menuData.menuItemArray);
            return new LoadMenuDataSucess(menuData, menuItemMap, menuItemDetailMap, true);
        })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(new LoadMenuDataError(err))))))));
    }
}
FnMenuEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FnMenuEffects.ctorParameters = () => [
    { type: Actions },
    { type: FnMenuStoreService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], FnMenuEffects.prototype, "loadMenuData$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbWVudS9mbi1zdG9yZXMvZWZmZWN0cy9mbi1tZW51LmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUMsRUFBRSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBK0Isa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVqSSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUd0RSxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFDdEIsWUFBcUIsUUFBaUIsRUFBVyxVQUE4QjtRQUExRCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVcsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFHL0Usa0JBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDOUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxFQUNyQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQzVDLFFBQVE7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3RDLEdBQUc7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRTs7O2dCQUVULFdBQVcsR0FBRyxFQUFFO1lBQ3BCLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDOzs7Z0JBRTFCLGlCQUFpQixHQUFHLEVBQUU7WUFDMUIsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzFFLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hGLENBQUMsRUFBQyxFQUVGLFVBQVU7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FDbEQsRUFBQyxDQUNMLENBQUM7SUF0QitFLENBQUM7OztZQUZ2RixVQUFVOzs7O1lBUEYsT0FBTztZQUtQLGtCQUFrQjs7QUFPdkI7SUFEQyxNQUFNLEVBQUU7O29EQW9CTDs7O0lBcEJKLHNDQW9CSTs7Ozs7SUF0QlMsaUNBQXlCOzs7OztJQUFHLG1DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcclxuaW1wb3J0IHsgbWVyZ2VNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtvZiwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEZuTWVudUFjdGlvblR5cGUsIEZuTWVudUFjdGlvbnMsIExvYWRNZW51RGF0YSwgTG9hZE1lbnVEYXRhU3VjZXNzLCBMb2FkTWVudURhdGFFcnJvciB9IGZyb20gJy4uL2FjdGlvbnMvZm4tbWVudS5hY3Rpb24nO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IEZuTWVudVN0b3JlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvZm4tbWVudS5zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZuTWVudUVmZmVjdHMge1xyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMgLCBwcml2YXRlIGZuTWVudVN2Y3M6IEZuTWVudVN0b3JlU2VydmljZSkgeyB9XHJcblxyXG4gICAgQEVmZmVjdCgpXHJcbiAgICBsb2FkTWVudURhdGEkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG4gICAgICAgIG9mVHlwZShGbk1lbnVBY3Rpb25UeXBlLkxvYWRNZW51RGF0YSksXHJcbiAgICAgICAgbWFwKChhY3Rpb246IExvYWRNZW51RGF0YSkgPT4gYWN0aW9uLnBheWxvYWQpLFxyXG4gICAgICAgICBtZXJnZU1hcChhY3Rpb24gPT5cclxuICAgICAgICAgIHRoaXMuZm5NZW51U3Zjcy5nZXRNZW51RGF0YShhY3Rpb24pLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcChtZW51RGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItY29uc3RcclxuICAgICAgICAgICAgICBsZXQgbWVudUl0ZW1NYXAgPSB7fTtcclxuICAgICAgICAgICAgICBtZW51SXRlbU1hcFttZW51RGF0YS5pZF0gPSB7fTtcclxuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1jb25zdFxyXG4gICAgICAgICAgICAgIGxldCBtZW51SXRlbURldGFpbE1hcCA9IHt9O1xyXG4gICAgICAgICAgICAgIG1lbnVJdGVtRGV0YWlsTWFwW21lbnVEYXRhLmlkXSA9IG1lbnVEYXRhO1xyXG4gICAgICAgICAgICAgIHRoaXMuZm5NZW51U3Zjcy5zaW1wbGVNZW51TWFwT25JZChtZW51SXRlbU1hcCwgbWVudURhdGEubWVudUl0ZW1BcnJheSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5mbk1lbnVTdmNzLmdldE1lbnVNYXBPbklkKG1lbnVJdGVtRGV0YWlsTWFwLCBtZW51RGF0YS5tZW51SXRlbUFycmF5KTtcclxuICAgICAgICAgICAgICByZXR1cm4gbmV3IExvYWRNZW51RGF0YVN1Y2VzcyhtZW51RGF0YSwgbWVudUl0ZW1NYXAsIG1lbnVJdGVtRGV0YWlsTWFwLCB0cnVlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiBvZihuZXcgTG9hZE1lbnVEYXRhRXJyb3IoZXJyKSkpXHJcbiAgICAgICAgICApKVxyXG4gICAgICApO1xyXG5cclxuICAgIC8vIEBFZmZlY3QoKVxyXG4gICAgLy8gbG9hZE1lbnVEYXRhJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG4gICAgLy8gICAgIG9mVHlwZShwcm9kdWN0QWN0aW9ucy5Qcm9kdWN0QWN0aW9uVHlwZXMuTG9hZCksXHJcbiAgICAvLyAgICAgbWVyZ2VNYXAoYWN0aW9uID0+XHJcbiAgICAvLyAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RzKCkucGlwZShcclxuICAgIC8vICAgICAgICAgbWFwKHByb2R1Y3RzID0+IChuZXcgcHJvZHVjdEFjdGlvbnMuTG9hZFN1Y2Nlc3MocHJvZHVjdHMpKSksXHJcbiAgICAvLyAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IG9mKG5ldyBwcm9kdWN0QWN0aW9ucy5Mb2FkRmFpbChlcnIpKSlcclxuICAgIC8vICAgICAgIClcclxuICAgIC8vICAgICApXHJcbiAgICAvLyAgICk7XHJcblxyXG59XHJcbiJdfQ==