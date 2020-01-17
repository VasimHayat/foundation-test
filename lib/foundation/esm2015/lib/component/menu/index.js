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
export class FnMenuModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FnMenuModule,
            providers: [FnMenuService, FnMenuEffects, FnMenuStoreService]
        };
    }
}
FnMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [FormsModule, CommonModule, FoundationModule, HttpClientModule],
                declarations: [FnMenuItemComponent, FnMenuLandingComponent, FnMenuSidebarComponent],
                exports: [FnMenuItemComponent, FnMenuLandingComponent, FnMenuSidebarComponent],
                providers: [FnMenuService, FnMenuEffects, FnMenuStoreService]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9tZW51L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXRELHNIQUFjLG9DQUFvQyxDQUFDO0FBQ25ELDhCQUFjLHFDQUFxQyxDQUFDO0FBQ3BELG1DQUFjLGtDQUFrQyxDQUFDO0FBQ2pELG1LQUFjLHFDQUFxQyxDQUFDO0FBQ3BELHVDQUFlLDBDQUEwQyxDQUFDO0FBUTFELE1BQU0sT0FBTyxZQUFZOzs7O0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLENBQUM7U0FDOUQsQ0FBQztJQUVKLENBQUM7OztZQWJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO2dCQUN4RSxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsQ0FBQztnQkFDbkYsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLENBQUM7Z0JBQzlFLFNBQVMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLENBQUM7YUFDOUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICogQ3JlYXRlZCBCeSBWYXNpbSBIYXlhdCBhdCAxLzE0LzIwMjAgNDowMSBQTVxyXG4gICpcclxuICAqL1xyXG5cclxuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Rm5NZW51U2VydmljZX0gZnJvbSAnLi9mbi1tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQge0ZvdW5kYXRpb25Nb2R1bGV9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24ubW9kdWxlJztcclxuaW1wb3J0IHtGbk1lbnVJdGVtQ29tcG9uZW50fSBmcm9tICcuL21lbnUtaXRlbS9mbi1tZW51Lml0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHtGbk1lbnVMYW5kaW5nQ29tcG9uZW50fSBmcm9tICcuL21lbnUtbGFuZGluZy9mbi1tZW51LWxhbmRpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHtGbk1lbnVTaWRlYmFyQ29tcG9uZW50fSBmcm9tICcuL3NpZGViYXIvZm4tbWVudS1zaWRlYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Rm5NZW51RWZmZWN0c30gZnJvbSAnLi9mbi1zdG9yZXMvZWZmZWN0cy9mbi1tZW51LmVmZmVjdHMnO1xyXG5pbXBvcnQge0ZuTWVudVN0b3JlU2VydmljZX0gZnJvbSAnLi9mbi1zdG9yZXMvc2VydmljZS9mbi1tZW51LnN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vZm4tc3RvcmVzL2FjdGlvbnMvZm4tbWVudS5hY3Rpb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL2ZuLXN0b3Jlcy9lZmZlY3RzL2ZuLW1lbnUuZWZmZWN0cyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZm4tc3RvcmVzL21vZGVscy9mbi1tZW51LnN0YXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9mbi1zdG9yZXMvcmVkdWNlci9mbi1tZW51LnJlZHVjZXInO1xyXG5leHBvcnQgICogZnJvbSAnLi9tZW51LWxhbmRpbmcvZm4tbWVudS1sYW5kaW5nLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlLCBGb3VuZGF0aW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtGbk1lbnVJdGVtQ29tcG9uZW50LCBGbk1lbnVMYW5kaW5nQ29tcG9uZW50LCBGbk1lbnVTaWRlYmFyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbRm5NZW51SXRlbUNvbXBvbmVudCwgRm5NZW51TGFuZGluZ0NvbXBvbmVudCwgRm5NZW51U2lkZWJhckNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbRm5NZW51U2VydmljZSwgRm5NZW51RWZmZWN0cywgRm5NZW51U3RvcmVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5NZW51TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBGbk1lbnVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0ZuTWVudVNlcnZpY2UsIEZuTWVudUVmZmVjdHMsIEZuTWVudVN0b3JlU2VydmljZV1cclxuICAgIH07XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19