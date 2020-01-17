/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
  * Created By Vasim Hayat at 1/14/2020 4:01 PM
  *
  */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FnMenuService } from './fn-menu.service';
import { FoundationModule } from '../../foundation.module';
import { FnMenuItemComponent } from './menu-item/fn-menu.item.component';
import { FnMenuLandingComponent } from './menu-landing/fn-menu-landing.component';
import { FnMenuSidebarComponent } from './sidebar/fn-menu-sidebar.component';
import { FnMenuEffects } from './fn-stores/effects/fn-menu.effects';
import { FnMenuStoreService } from './fn-stores/service/fn-menu.store.service';
import { HttpClientModule } from '@angular/common/http';
export { FnMenuActionType, InitMenuState, LoadMenuDataSucess, LoadMenuData, LoadMenuDataError, SetActiveMenuId } from './fn-stores/actions/fn-menu.action';
export { FnMenuEffects } from './fn-stores/effects/fn-menu.effects';
export { DEFAULT_MENU_STATE } from './fn-stores/models/fn-menu.state';
export { FnMenuReducer, getMenuData, getRooMenuId, getActiveMenuId, getMenuItemMap, getMenuDetailItemMap, getMenuItemById, getActiveMenuItem, getMenuStatus } from './fn-stores/reducer/fn-menu.reducer';
export { FnMenuLandingComponent } from './menu-landing/fn-menu-landing.component';
var FnMenuModule = /** @class */ (function () {
    function FnMenuModule() {
    }
    /**
     * @return {?}
     */
    FnMenuModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FnMenuModule,
            providers: [FnMenuService, FnMenuEffects, FnMenuStoreService]
        };
    };
    FnMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FormsModule, CommonModule, FoundationModule, HttpClientModule],
                    declarations: [FnMenuItemComponent, FnMenuLandingComponent, FnMenuSidebarComponent],
                    exports: [FnMenuItemComponent, FnMenuLandingComponent, FnMenuSidebarComponent],
                    providers: [FnMenuService, FnMenuEffects, FnMenuStoreService]
                },] }
    ];
    return FnMenuModule;
}());
export { FnMenuModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9tZW51L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXRELHNIQUFjLG9DQUFvQyxDQUFDO0FBQ25ELDhCQUFjLHFDQUFxQyxDQUFDO0FBQ3BELG1DQUFjLGtDQUFrQyxDQUFDO0FBQ2pELG1LQUFjLHFDQUFxQyxDQUFDO0FBQ3BELHVDQUFlLDBDQUEwQyxDQUFDO0FBRTFEO0lBQUE7SUFlQSxDQUFDOzs7O0lBUlEsb0JBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLENBQUM7U0FDOUQsQ0FBQztJQUVKLENBQUM7O2dCQWJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO29CQUN4RSxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsQ0FBQztvQkFDbkYsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLENBQUM7b0JBQzlFLFNBQVMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLENBQUM7aUJBQzlEOztJQVVELG1CQUFDO0NBQUEsQUFmRCxJQWVDO1NBVFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgKiBDcmVhdGVkIEJ5IFZhc2ltIEhheWF0IGF0IDEvMTQvMjAyMCA0OjAxIFBNXHJcbiAgKlxyXG4gICovXHJcblxyXG5pbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtGbk1lbnVTZXJ2aWNlfSBmcm9tICcuL2ZuLW1lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7Rm91bmRhdGlvbk1vZHVsZX0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5tb2R1bGUnO1xyXG5pbXBvcnQge0ZuTWVudUl0ZW1Db21wb25lbnR9IGZyb20gJy4vbWVudS1pdGVtL2ZuLW1lbnUuaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0ZuTWVudUxhbmRpbmdDb21wb25lbnR9IGZyb20gJy4vbWVudS1sYW5kaW5nL2ZuLW1lbnUtbGFuZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0ZuTWVudVNpZGViYXJDb21wb25lbnR9IGZyb20gJy4vc2lkZWJhci9mbi1tZW51LXNpZGViYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtGbk1lbnVFZmZlY3RzfSBmcm9tICcuL2ZuLXN0b3Jlcy9lZmZlY3RzL2ZuLW1lbnUuZWZmZWN0cyc7XHJcbmltcG9ydCB7Rm5NZW51U3RvcmVTZXJ2aWNlfSBmcm9tICcuL2ZuLXN0b3Jlcy9zZXJ2aWNlL2ZuLW1lbnUuc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9mbi1zdG9yZXMvYWN0aW9ucy9mbi1tZW51LmFjdGlvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZm4tc3RvcmVzL2VmZmVjdHMvZm4tbWVudS5lZmZlY3RzJztcclxuZXhwb3J0ICogZnJvbSAnLi9mbi1zdG9yZXMvbW9kZWxzL2ZuLW1lbnUuc3RhdGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ZuLXN0b3Jlcy9yZWR1Y2VyL2ZuLW1lbnUucmVkdWNlcic7XHJcbmV4cG9ydCAgKiBmcm9tICcuL21lbnUtbGFuZGluZy9mbi1tZW51LWxhbmRpbmcuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGUsIEZvdW5kYXRpb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0ZuTWVudUl0ZW1Db21wb25lbnQsIEZuTWVudUxhbmRpbmdDb21wb25lbnQsIEZuTWVudVNpZGViYXJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtGbk1lbnVJdGVtQ29tcG9uZW50LCBGbk1lbnVMYW5kaW5nQ29tcG9uZW50LCBGbk1lbnVTaWRlYmFyQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtGbk1lbnVTZXJ2aWNlLCBGbk1lbnVFZmZlY3RzLCBGbk1lbnVTdG9yZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbk1lbnVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEZuTWVudU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbRm5NZW51U2VydmljZSwgRm5NZW51RWZmZWN0cywgRm5NZW51U3RvcmVTZXJ2aWNlXVxyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=