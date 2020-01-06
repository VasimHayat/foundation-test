/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FnTableComponent } from './component/table/fn-table.component';
import { FnPaginationComponent } from './component/pagination/fn-pagination.component';
import { FnTableSearchComponent } from './component/table/search/fn-table.search.component';
import { FnMenuSidebarComponent } from './component/menu/sidebar/fn-menu.sidebar.component';
import { FnMenuItemComponent } from './component/menu/menu-item/fn-menu.item.component';
import { FnMenuLandingComponent } from './component/menu/menu-landing/fn-menu.landing.component';
import { FnCookieService } from './services/fn-cookies.service';
import { FnApplicationHelper } from './services/fn-application.helper';
import { FnApplication } from './services/fn-application';
import { FnUtilService } from './services/fn-util.service';
import { FnExceptionService } from './exception/fn-exception.service';
import { FNErrorLogSvcs } from './exception/fn-error.log.svcs';
import { FNErrorHandler } from './exception/fn-error.handler';
export { FnTableConfig } from './component/table/fn-table.config';
export { FnTableMetaData } from './component/table/fn-table.meta.data';
export { FnSessionStorage } from './stores/app-session/fn-session.storage';
export {} from './stores/app-session/state/fn.session.model';
export { FnSessionEffect } from './stores/app-session/state/fn-session.effects';
export { fnSessionReducer, getCurrentSession, getCurrent_ssPK, getCurretn_sccPK, getCurrent_scaPK, getCurrent_saPK, getCurrent_scPK, getCurrent_scuPK, getCurrent_sauPK, getCurrent_wIndex, getCurrent_pid, getCurrent_pmid, getCurrent_mid, getCurrent_sgaPK, getCurrent_baseUrl } from './stores/app-session/state/fn-session.reducer';
export { FnSessionActionType, InitialzeCurrentSession, LoadSessionSuccess, LoadSession, LoadSessionError } from './stores/app-session/action/fn-seesion.action';
export { FnMenuActionType, InitMenuState, LoadMenuDataSucess, LoadMenuData, LoadMenuDataError, SetActiveMenuId } from './component/menu/fn-stores/actions/fn-menu.action';
export { FnMenuEffects } from './component/menu/fn-stores/effects/fn-menu.effects';
export { DEFAULT_MENU_STATE } from './component/menu/fn-stores/models/fn-menu.state';
export { FnMenuReducer, getMenuData, getRooMenuId, getActiveMenuId, getMenuItemMap, getMenuDetailItemMap, getMenuItemById, getActiveMenuItem, getMenuStatus } from './component/menu/fn-stores/reducer/fn-menu.reducer';
// export * from './lib/component/table/fn-table.component';
// export * from './lib/component/table/search/fn-table.search.component';
// export * from './lib/component/pagination/fn-pagination.component';
export { FnMenuSidebarComponent } from './component/menu/sidebar/fn-menu.sidebar.component';
export { FnMenuItemComponent } from './component/menu/menu-item/fn-menu.item.component';
export { FnMenuLandingComponent } from './component/menu/menu-landing/fn-menu.landing.component';
export class FoundationModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FoundationModule,
            providers: [FnApplicationHelper, FnApplication, FnUtilService, FnCookieService, FnExceptionService, FNErrorLogSvcs, FNErrorHandler]
        };
    }
}
FoundationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FnTableComponent, FnPaginationComponent, FnTableSearchComponent, FnMenuSidebarComponent, FnMenuItemComponent,
                    FnMenuLandingComponent
                ],
                imports: [
                    FormsModule, CommonModule
                ],
                exports: [
                    FnTableComponent, FnPaginationComponent, FnTableSearchComponent, FnMenuSidebarComponent, FnMenuItemComponent,
                    FnMenuLandingComponent
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                providers: [FnApplicationHelper, FnApplication, FnUtilService, FnCookieService, FnExceptionService, FNErrorLogSvcs, FNErrorHandler]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bmRhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2ZvdW5kYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHOUQsOEJBQWMsbUNBQW1DLENBQUM7QUFDbEQsZ0NBQWMsc0NBQXNDLENBQUM7QUFFckQsaUNBQWMseUNBQXlDLENBQUM7QUFDeEQsZUFBYyw2Q0FBNkMsQ0FBQztBQUM1RCxnQ0FBYywrQ0FBK0MsQ0FBQztBQUM5RCx5UkFBYywrQ0FBK0MsQ0FBQztBQUM5RCxnSEFBYywrQ0FBK0MsQ0FBQztBQUU5RCxzSEFBYyxtREFBbUQsQ0FBQztBQUNsRSw4QkFBYyxvREFBb0QsQ0FBQztBQUNuRSxtQ0FBYyxpREFBaUQsQ0FBQztBQUNoRSxtS0FBYyxvREFBb0QsQ0FBQzs7OztBQVNuRSx1Q0FBYyxvREFBb0QsQ0FBQztBQUNuRSxvQ0FBYyxtREFBbUQsQ0FBQztBQUNsRSx1Q0FBYyx5REFBeUQsQ0FBQztBQWtCeEUsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUMzQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUM7U0FDcEksQ0FBQztJQUNKLENBQUM7OztZQXJCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLG1CQUFtQjtvQkFDNUcsc0JBQXNCO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsV0FBVyxFQUFFLFlBQVk7aUJBQzFCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUI7b0JBQzVHLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUM7YUFDcEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEZuVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC90YWJsZS9mbi10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGblBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9wYWdpbmF0aW9uL2ZuLXBhZ2luYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm5UYWJsZVNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3RhYmxlL3NlYXJjaC9mbi10YWJsZS5zZWFyY2guY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm5NZW51U2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L21lbnUvc2lkZWJhci9mbi1tZW51LnNpZGViYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm5NZW51SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L21lbnUvbWVudS1pdGVtL2ZuLW1lbnUuaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGbk1lbnVMYW5kaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvbWVudS9tZW51LWxhbmRpbmcvZm4tbWVudS5sYW5kaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZuQ29va2llU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZm4tY29va2llcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm5BcHBsaWNhdGlvbkhlbHBlciB9IGZyb20gJy4vc2VydmljZXMvZm4tYXBwbGljYXRpb24uaGVscGVyJztcclxuaW1wb3J0IHsgRm5BcHBsaWNhdGlvbiB9IGZyb20gJy4vc2VydmljZXMvZm4tYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBGblV0aWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9mbi11dGlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGbkV4Y2VwdGlvblNlcnZpY2UgfSBmcm9tICcuL2V4Y2VwdGlvbi9mbi1leGNlcHRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEZORXJyb3JMb2dTdmNzIH0gZnJvbSAnLi9leGNlcHRpb24vZm4tZXJyb3IubG9nLnN2Y3MnO1xyXG5pbXBvcnQgeyBGTkVycm9ySGFuZGxlciB9IGZyb20gJy4vZXhjZXB0aW9uL2ZuLWVycm9yLmhhbmRsZXInO1xyXG5cclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L3RhYmxlL2ZuLXRhYmxlLmNvbmZpZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L3RhYmxlL2ZuLXRhYmxlLm1ldGEuZGF0YSc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL3N0b3Jlcy9hcHAtc2Vzc2lvbi9mbi1zZXNzaW9uLnN0b3JhZ2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0b3Jlcy9hcHAtc2Vzc2lvbi9zdGF0ZS9mbi5zZXNzaW9uLm1vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdG9yZXMvYXBwLXNlc3Npb24vc3RhdGUvZm4tc2Vzc2lvbi5lZmZlY3RzJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdG9yZXMvYXBwLXNlc3Npb24vc3RhdGUvZm4tc2Vzc2lvbi5yZWR1Y2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdG9yZXMvYXBwLXNlc3Npb24vYWN0aW9uL2ZuLXNlZXNpb24uYWN0aW9uJztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L21lbnUvZm4tc3RvcmVzL2FjdGlvbnMvZm4tbWVudS5hY3Rpb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC9tZW51L2ZuLXN0b3Jlcy9lZmZlY3RzL2ZuLW1lbnUuZWZmZWN0cyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L21lbnUvZm4tc3RvcmVzL21vZGVscy9mbi1tZW51LnN0YXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQvbWVudS9mbi1zdG9yZXMvcmVkdWNlci9mbi1tZW51LnJlZHVjZXInO1xyXG5cclxuXHJcblxyXG4vLyBleHBvcnQgKiBmcm9tICcuL2xpYi9jb21wb25lbnQvdGFibGUvZm4tdGFibGUuY29tcG9uZW50JztcclxuLy8gZXhwb3J0ICogZnJvbSAnLi9saWIvY29tcG9uZW50L3RhYmxlL3NlYXJjaC9mbi10YWJsZS5zZWFyY2guY29tcG9uZW50JztcclxuLy8gZXhwb3J0ICogZnJvbSAnLi9saWIvY29tcG9uZW50L3BhZ2luYXRpb24vZm4tcGFnaW5hdGlvbi5jb21wb25lbnQnO1xyXG5cclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L21lbnUvc2lkZWJhci9mbi1tZW51LnNpZGViYXIuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQvbWVudS9tZW51LWl0ZW0vZm4tbWVudS5pdGVtLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L21lbnUvbWVudS1sYW5kaW5nL2ZuLW1lbnUubGFuZGluZy5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBGblRhYmxlQ29tcG9uZW50LCBGblBhZ2luYXRpb25Db21wb25lbnQsIEZuVGFibGVTZWFyY2hDb21wb25lbnQsIEZuTWVudVNpZGViYXJDb21wb25lbnQsIEZuTWVudUl0ZW1Db21wb25lbnQsXHJcbiAgICBGbk1lbnVMYW5kaW5nQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBGblRhYmxlQ29tcG9uZW50LCBGblBhZ2luYXRpb25Db21wb25lbnQsIEZuVGFibGVTZWFyY2hDb21wb25lbnQsIEZuTWVudVNpZGViYXJDb21wb25lbnQsIEZuTWVudUl0ZW1Db21wb25lbnQsXHJcbiAgICBGbk1lbnVMYW5kaW5nQ29tcG9uZW50XHJcbiAgXSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXHJcbiAgcHJvdmlkZXJzOiBbRm5BcHBsaWNhdGlvbkhlbHBlciwgRm5BcHBsaWNhdGlvbiwgRm5VdGlsU2VydmljZSwgRm5Db29raWVTZXJ2aWNlLCBGbkV4Y2VwdGlvblNlcnZpY2UsIEZORXJyb3JMb2dTdmNzLCBGTkVycm9ySGFuZGxlcl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvdW5kYXRpb25Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEZvdW5kYXRpb25Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0ZuQXBwbGljYXRpb25IZWxwZXIsIEZuQXBwbGljYXRpb24sIEZuVXRpbFNlcnZpY2UsIEZuQ29va2llU2VydmljZSwgRm5FeGNlcHRpb25TZXJ2aWNlLCBGTkVycm9yTG9nU3ZjcywgRk5FcnJvckhhbmRsZXJdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=