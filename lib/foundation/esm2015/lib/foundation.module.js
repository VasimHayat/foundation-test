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
export class FoundationModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FoundationModule,
            providers: [FnApplicationHelper, FnApplication, FnUtilService, FnCookieService, FnExceptionService,
                FNErrorLogSvcs, FNErrorHandler, FnThemeService
            ]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bmRhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2ZvdW5kYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLHNCQUFzQixFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBRTNELGlDQUFjLHlDQUF5QyxDQUFDO0FBQ3hELGVBQWMsNkNBQTZDLENBQUM7QUFDNUQsZ0NBQWMsK0NBQStDLENBQUM7QUFDOUQseVJBQWMsK0NBQStDLENBQUM7QUFDOUQsZ0hBQWMsK0NBQStDLENBQUM7QUFhOUQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUMzQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGtCQUFrQjtnQkFDaEcsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjO2FBQy9DO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWxCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRTtvQkFDUCxXQUFXLEVBQUUsWUFBWTtpQkFDMUI7Z0JBQ0QsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLGNBQWM7b0JBQ2hILGNBQWMsRUFBRSxjQUFjLENBQUM7YUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBNb2R1bGVXaXRoUHJvdmlkZXJzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7Rm5Db29raWVTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2ZuLWNvb2tpZXMuc2VydmljZSc7XHJcbmltcG9ydCB7Rm5BcHBsaWNhdGlvbkhlbHBlcn0gZnJvbSAnLi9zZXJ2aWNlcy9mbi1hcHBsaWNhdGlvbi5oZWxwZXInO1xyXG5pbXBvcnQge0ZuQXBwbGljYXRpb259IGZyb20gJy4vc2VydmljZXMvZm4tYXBwbGljYXRpb24nO1xyXG5pbXBvcnQge0ZuVXRpbFNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZm4tdXRpbC5zZXJ2aWNlJztcclxuaW1wb3J0IHtGbkV4Y2VwdGlvblNlcnZpY2V9IGZyb20gJy4vZXhjZXB0aW9uL2ZuLWV4Y2VwdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHtGTkVycm9yTG9nU3Zjc30gZnJvbSAnLi9leGNlcHRpb24vZm4tZXJyb3IubG9nLnN2Y3MnO1xyXG5pbXBvcnQge0ZORXJyb3JIYW5kbGVyfSBmcm9tICcuL2V4Y2VwdGlvbi9mbi1lcnJvci5oYW5kbGVyJztcclxuaW1wb3J0IHtGblRoZW1lU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9mbi10aGVtZS1zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vc3RvcmVzL2FwcC1zZXNzaW9uL2ZuLXNlc3Npb24uc3RvcmFnZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3RvcmVzL2FwcC1zZXNzaW9uL3N0YXRlL2ZuLnNlc3Npb24ubW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0b3Jlcy9hcHAtc2Vzc2lvbi9zdGF0ZS9mbi1zZXNzaW9uLmVmZmVjdHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0b3Jlcy9hcHAtc2Vzc2lvbi9zdGF0ZS9mbi1zZXNzaW9uLnJlZHVjZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0b3Jlcy9hcHAtc2Vzc2lvbi9hY3Rpb24vZm4tc2Vlc2lvbi5hY3Rpb24nO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXHJcbiAgcHJvdmlkZXJzOiBbRm5BcHBsaWNhdGlvbkhlbHBlciwgRm5BcHBsaWNhdGlvbiwgRm5VdGlsU2VydmljZSwgRm5Db29raWVTZXJ2aWNlLCBGbkV4Y2VwdGlvblNlcnZpY2UsIEZORXJyb3JMb2dTdmNzLFxyXG4gICAgRk5FcnJvckhhbmRsZXIsIEZuVGhlbWVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm91bmRhdGlvbk1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRm91bmRhdGlvbk1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbRm5BcHBsaWNhdGlvbkhlbHBlciwgRm5BcHBsaWNhdGlvbiwgRm5VdGlsU2VydmljZSwgRm5Db29raWVTZXJ2aWNlLCBGbkV4Y2VwdGlvblNlcnZpY2UsXHJcbiAgICAgICAgRk5FcnJvckxvZ1N2Y3MsIEZORXJyb3JIYW5kbGVyLCBGblRoZW1lU2VydmljZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=