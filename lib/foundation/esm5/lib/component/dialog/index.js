/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FnConfirmModalComponent } from './confirm/fn-confirm-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { FnModalService } from './confirm/fn-modal.service';
import { FnCoreModule } from '../../core/index';
import { FoundationModule } from '../../foundation.module';
import { FnDialogHeaderComponent } from './header/fn-dialog-header.component';
export { FnConfirmModalComponent } from './confirm/fn-confirm-modal.component';
export { FnModalService } from './confirm/fn-modal.service';
var FnDialogModule = /** @class */ (function () {
    function FnDialogModule() {
    }
    /**
     * @return {?}
     */
    FnDialogModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FnDialogModule,
            providers: [FnModalService]
        };
    };
    FnDialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FormsModule, CommonModule, A11yModule, MatDialogModule, FnCoreModule, FoundationModule],
                    declarations: [FnConfirmModalComponent, FnDialogHeaderComponent],
                    exports: [FnConfirmModalComponent, FnDialogHeaderComponent],
                    providers: [FnModalService],
                    entryComponents: [FnConfirmModalComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] }
    ];
    return FnDialogModule;
}());
export { FnDialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTlFLHdDQUFjLHNDQUFzQyxDQUFDO0FBQ3JELCtCQUFjLDRCQUE0QixDQUFDO0FBRTNDO0lBQUE7SUFrQkEsQ0FBQzs7OztJQVJRLHNCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7U0FDNUIsQ0FBQztJQUNKLENBQUM7O2dCQWZGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixDQUFDO29CQUNqRyxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSx1QkFBdUIsQ0FBQztvQkFDaEUsT0FBTyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsdUJBQXVCLENBQUM7b0JBQzNELFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDM0IsZUFBZSxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQzFDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUVsQzs7SUFVRCxxQkFBQztDQUFBLEFBbEJELElBa0JDO1NBVFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZuQ29uZmlybU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtL2ZuLWNvbmZpcm0tbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEExMXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IEZuTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9jb25maXJtL2ZuLW1vZGFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGbkNvcmVNb2R1bGUgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRm91bmRhdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgRm5EaWFsb2dIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9mbi1kaWFsb2ctaGVhZGVyLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2NvbmZpcm0vZm4tY29uZmlybS1tb2RhbC5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbmZpcm0vZm4tbW9kYWwuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlLCBBMTF5TW9kdWxlLCBNYXREaWFsb2dNb2R1bGUsIEZuQ29yZU1vZHVsZSwgRm91bmRhdGlvbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbRm5Db25maXJtTW9kYWxDb21wb25lbnQsIEZuRGlhbG9nSGVhZGVyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbRm5Db25maXJtTW9kYWxDb21wb25lbnQsIEZuRGlhbG9nSGVhZGVyQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtGbk1vZGFsU2VydmljZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbRm5Db25maXJtTW9kYWxDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEZuRGlhbG9nTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBGbkRpYWxvZ01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbRm5Nb2RhbFNlcnZpY2VdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==