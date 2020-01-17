/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FnCookieService } from './services/fn-cookies.service';
import { FnApplicationHelper } from './services/fn-application.helper';
import { FnApplication } from './services/fn-application';
import { FnUtilService } from './services/fn-util.service';
import { FnExceptionService } from './exception/fn-exception.service';
import { FNErrorLogSvcs } from './exception/fn-error.log.svcs';
import { FNErrorHandler } from './exception/fn-error.handler';
import { FnThemeService } from './services/fn-theme-service';
export { FnSessionStorage } from './stores/app-session/fn-session.storage';
export {} from './stores/app-session/state/fn.session.model';
export { FnSessionEffect } from './stores/app-session/state/fn-session.effects';
export { fnSessionReducer, getCurrentSession, getCurrent_ssPK, getCurretn_sccPK, getCurrent_scaPK, getCurrent_saPK, getCurrent_scPK, getCurrent_scuPK, getCurrent_sauPK, getCurrent_wIndex, getCurrent_pid, getCurrent_pmid, getCurrent_mid, getCurrent_sgaPK, getCurrent_baseUrl } from './stores/app-session/state/fn-session.reducer';
export { FnSessionActionType, InitialzeCurrentSession, LoadSessionSuccess, LoadSession, LoadSessionError } from './stores/app-session/action/fn-seesion.action';
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
            providers: [FnApplicationHelper, FnApplication, FnUtilService, FnCookieService, FnExceptionService,
                FNErrorLogSvcs, FNErrorHandler, FnThemeService
            ]
        };
    };
    FoundationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        FormsModule, CommonModule
                    ],
                    exports: [],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    providers: [FnApplicationHelper, FnApplication, FnUtilService, FnCookieService, FnExceptionService, FNErrorLogSvcs,
                        FNErrorHandler, FnThemeService]
                },] }
    ];
    return FoundationModule;
}());
export { FoundationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bmRhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2ZvdW5kYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLHNCQUFzQixFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBRTNELGlDQUFjLHlDQUF5QyxDQUFDO0FBQ3hELGVBQWMsNkNBQTZDLENBQUM7QUFDNUQsZ0NBQWMsK0NBQStDLENBQUM7QUFDOUQseVJBQWMsK0NBQStDLENBQUM7QUFDOUQsZ0hBQWMsK0NBQStDLENBQUM7QUFHOUQ7SUFBQTtJQW1CQSxDQUFDOzs7O0lBUlEsd0JBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsa0JBQWtCO2dCQUNoRyxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWM7YUFDL0M7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBbEJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLFdBQVcsRUFBRSxZQUFZO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUUsRUFBRTtvQkFDWCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDakMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsY0FBYzt3QkFDaEgsY0FBYyxFQUFFLGNBQWMsQ0FBQztpQkFDbEM7O0lBVUQsdUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQVRZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtGbkNvb2tpZVNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZm4tY29va2llcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtGbkFwcGxpY2F0aW9uSGVscGVyfSBmcm9tICcuL3NlcnZpY2VzL2ZuLWFwcGxpY2F0aW9uLmhlbHBlcic7XHJcbmltcG9ydCB7Rm5BcHBsaWNhdGlvbn0gZnJvbSAnLi9zZXJ2aWNlcy9mbi1hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7Rm5VdGlsU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9mbi11dGlsLnNlcnZpY2UnO1xyXG5pbXBvcnQge0ZuRXhjZXB0aW9uU2VydmljZX0gZnJvbSAnLi9leGNlcHRpb24vZm4tZXhjZXB0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQge0ZORXJyb3JMb2dTdmNzfSBmcm9tICcuL2V4Y2VwdGlvbi9mbi1lcnJvci5sb2cuc3Zjcyc7XHJcbmltcG9ydCB7Rk5FcnJvckhhbmRsZXJ9IGZyb20gJy4vZXhjZXB0aW9uL2ZuLWVycm9yLmhhbmRsZXInO1xyXG5pbXBvcnQge0ZuVGhlbWVTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2ZuLXRoZW1lLXNlcnZpY2UnO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9zdG9yZXMvYXBwLXNlc3Npb24vZm4tc2Vzc2lvbi5zdG9yYWdlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdG9yZXMvYXBwLXNlc3Npb24vc3RhdGUvZm4uc2Vzc2lvbi5tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3RvcmVzL2FwcC1zZXNzaW9uL3N0YXRlL2ZuLXNlc3Npb24uZWZmZWN0cyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3RvcmVzL2FwcC1zZXNzaW9uL3N0YXRlL2ZuLXNlc3Npb24ucmVkdWNlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3RvcmVzL2FwcC1zZXNzaW9uL2FjdGlvbi9mbi1zZWVzaW9uLmFjdGlvbic7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEZvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcclxuICBwcm92aWRlcnM6IFtGbkFwcGxpY2F0aW9uSGVscGVyLCBGbkFwcGxpY2F0aW9uLCBGblV0aWxTZXJ2aWNlLCBGbkNvb2tpZVNlcnZpY2UsIEZuRXhjZXB0aW9uU2VydmljZSwgRk5FcnJvckxvZ1N2Y3MsXHJcbiAgICBGTkVycm9ySGFuZGxlciwgRm5UaGVtZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3VuZGF0aW9uTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBGb3VuZGF0aW9uTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtGbkFwcGxpY2F0aW9uSGVscGVyLCBGbkFwcGxpY2F0aW9uLCBGblV0aWxTZXJ2aWNlLCBGbkNvb2tpZVNlcnZpY2UsIEZuRXhjZXB0aW9uU2VydmljZSxcclxuICAgICAgICBGTkVycm9yTG9nU3ZjcywgRk5FcnJvckhhbmRsZXIsIEZuVGhlbWVTZXJ2aWNlXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==