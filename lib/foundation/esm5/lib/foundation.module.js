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
var FoundationModule = /** @class */ (function () {
    function FoundationModule() {
    }
    /**
     * @return {?}
     */
    FoundationModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FoundationModule,
            providers: [FnApplicationHelper, FnApplication, FnUtilService, FnCookieService, FnExceptionService, FNErrorLogSvcs, FNErrorHandler]
        };
    };
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
    return FoundationModule;
}());
export { FoundationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bmRhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2ZvdW5kYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHOUQsOEJBQWMsbUNBQW1DLENBQUM7QUFDbEQsZ0NBQWMsc0NBQXNDLENBQUM7QUFFckQsaUNBQWMseUNBQXlDLENBQUM7QUFDeEQsZUFBYyw2Q0FBNkMsQ0FBQztBQUM1RCxnQ0FBYywrQ0FBK0MsQ0FBQztBQUM5RCx5UkFBYywrQ0FBK0MsQ0FBQztBQUM5RCxnSEFBYywrQ0FBK0MsQ0FBQztBQUU5RCxzSEFBYyxtREFBbUQsQ0FBQztBQUNsRSw4QkFBYyxvREFBb0QsQ0FBQztBQUNuRSxtQ0FBYyxpREFBaUQsQ0FBQztBQUNoRSxtS0FBYyxvREFBb0QsQ0FBQzs7OztBQVNuRSx1Q0FBYyxvREFBb0QsQ0FBQztBQUNuRSxvQ0FBYyxtREFBbUQsQ0FBQztBQUNsRSx1Q0FBYyx5REFBeUQsQ0FBQztBQUd4RTtJQUFBO0lBc0JBLENBQUM7Ozs7SUFOUSx3QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDO1NBQ3BJLENBQUM7SUFDSixDQUFDOztnQkFyQkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUI7d0JBQzVHLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFdBQVcsRUFBRSxZQUFZO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CO3dCQUM1RyxzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDO2lCQUNwSTs7SUFRRCx1QkFBQztDQUFBLEFBdEJELElBc0JDO1NBUFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBGblRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvdGFibGUvZm4tdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm5QYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvcGFnaW5hdGlvbi9mbi1wYWdpbmF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZuVGFibGVTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC90YWJsZS9zZWFyY2gvZm4tdGFibGUuc2VhcmNoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZuTWVudVNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9tZW51L3NpZGViYXIvZm4tbWVudS5zaWRlYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZuTWVudUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9tZW51L21lbnUtaXRlbS9mbi1tZW51Lml0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm5NZW51TGFuZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L21lbnUvbWVudS1sYW5kaW5nL2ZuLW1lbnUubGFuZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGbkNvb2tpZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2ZuLWNvb2tpZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IEZuQXBwbGljYXRpb25IZWxwZXIgfSBmcm9tICcuL3NlcnZpY2VzL2ZuLWFwcGxpY2F0aW9uLmhlbHBlcic7XHJcbmltcG9ydCB7IEZuQXBwbGljYXRpb24gfSBmcm9tICcuL3NlcnZpY2VzL2ZuLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgRm5VdGlsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZm4tdXRpbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm5FeGNlcHRpb25TZXJ2aWNlIH0gZnJvbSAnLi9leGNlcHRpb24vZm4tZXhjZXB0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGTkVycm9yTG9nU3ZjcyB9IGZyb20gJy4vZXhjZXB0aW9uL2ZuLWVycm9yLmxvZy5zdmNzJztcclxuaW1wb3J0IHsgRk5FcnJvckhhbmRsZXIgfSBmcm9tICcuL2V4Y2VwdGlvbi9mbi1lcnJvci5oYW5kbGVyJztcclxuXHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC90YWJsZS9mbi10YWJsZS5jb25maWcnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC90YWJsZS9mbi10YWJsZS5tZXRhLmRhdGEnO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9zdG9yZXMvYXBwLXNlc3Npb24vZm4tc2Vzc2lvbi5zdG9yYWdlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdG9yZXMvYXBwLXNlc3Npb24vc3RhdGUvZm4uc2Vzc2lvbi5tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3RvcmVzL2FwcC1zZXNzaW9uL3N0YXRlL2ZuLXNlc3Npb24uZWZmZWN0cyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3RvcmVzL2FwcC1zZXNzaW9uL3N0YXRlL2ZuLXNlc3Npb24ucmVkdWNlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3RvcmVzL2FwcC1zZXNzaW9uL2FjdGlvbi9mbi1zZWVzaW9uLmFjdGlvbic7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC9tZW51L2ZuLXN0b3Jlcy9hY3Rpb25zL2ZuLW1lbnUuYWN0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQvbWVudS9mbi1zdG9yZXMvZWZmZWN0cy9mbi1tZW51LmVmZmVjdHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC9tZW51L2ZuLXN0b3Jlcy9tb2RlbHMvZm4tbWVudS5zdGF0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L21lbnUvZm4tc3RvcmVzL3JlZHVjZXIvZm4tbWVudS5yZWR1Y2VyJztcclxuXHJcblxyXG5cclxuLy8gZXhwb3J0ICogZnJvbSAnLi9saWIvY29tcG9uZW50L3RhYmxlL2ZuLXRhYmxlLmNvbXBvbmVudCc7XHJcbi8vIGV4cG9ydCAqIGZyb20gJy4vbGliL2NvbXBvbmVudC90YWJsZS9zZWFyY2gvZm4tdGFibGUuc2VhcmNoLmNvbXBvbmVudCc7XHJcbi8vIGV4cG9ydCAqIGZyb20gJy4vbGliL2NvbXBvbmVudC9wYWdpbmF0aW9uL2ZuLXBhZ2luYXRpb24uY29tcG9uZW50JztcclxuXHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC9tZW51L3NpZGViYXIvZm4tbWVudS5zaWRlYmFyLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L21lbnUvbWVudS1pdGVtL2ZuLW1lbnUuaXRlbS5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC9tZW51L21lbnUtbGFuZGluZy9mbi1tZW51LmxhbmRpbmcuY29tcG9uZW50JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRm5UYWJsZUNvbXBvbmVudCwgRm5QYWdpbmF0aW9uQ29tcG9uZW50LCBGblRhYmxlU2VhcmNoQ29tcG9uZW50LCBGbk1lbnVTaWRlYmFyQ29tcG9uZW50LCBGbk1lbnVJdGVtQ29tcG9uZW50LFxyXG4gICAgRm5NZW51TGFuZGluZ0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRm5UYWJsZUNvbXBvbmVudCwgRm5QYWdpbmF0aW9uQ29tcG9uZW50LCBGblRhYmxlU2VhcmNoQ29tcG9uZW50LCBGbk1lbnVTaWRlYmFyQ29tcG9uZW50LCBGbk1lbnVJdGVtQ29tcG9uZW50LFxyXG4gICAgRm5NZW51TGFuZGluZ0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxyXG4gIHByb3ZpZGVyczogW0ZuQXBwbGljYXRpb25IZWxwZXIsIEZuQXBwbGljYXRpb24sIEZuVXRpbFNlcnZpY2UsIEZuQ29va2llU2VydmljZSwgRm5FeGNlcHRpb25TZXJ2aWNlLCBGTkVycm9yTG9nU3ZjcywgRk5FcnJvckhhbmRsZXJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3VuZGF0aW9uTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBGb3VuZGF0aW9uTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtGbkFwcGxpY2F0aW9uSGVscGVyLCBGbkFwcGxpY2F0aW9uLCBGblV0aWxTZXJ2aWNlLCBGbkNvb2tpZVNlcnZpY2UsIEZuRXhjZXB0aW9uU2VydmljZSwgRk5FcnJvckxvZ1N2Y3MsIEZORXJyb3JIYW5kbGVyXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19