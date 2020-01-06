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
                    imports: [FormsModule, CommonModule, A11yModule, MatDialogModule, FnCoreModule],
                    declarations: [FnConfirmModalComponent],
                    exports: [FnConfirmModalComponent],
                    providers: [FnModalService],
                    entryComponents: [FnConfirmModalComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] }
    ];
    return FnDialogModule;
}());
export { FnDialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhELHdDQUFjLHNDQUFzQyxDQUFDO0FBQ3JELCtCQUFjLDRCQUE0QixDQUFDO0FBRTNDO0lBQUE7SUFrQkEsQ0FBQzs7OztJQVJVLHNCQUFPOzs7SUFBZDtRQUNJLE9BQU87WUFDSCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7U0FDOUIsQ0FBQztJQUNOLENBQUM7O2dCQWZKLFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsWUFBWSxDQUFDO29CQUMvRSxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ2xDLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDM0IsZUFBZSxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQzFDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUVwQzs7SUFVRCxxQkFBQztDQUFBLEFBbEJELElBa0JDO1NBVFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZuQ29uZmlybU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtL2ZuLWNvbmZpcm0tbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEExMXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IEZuTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9jb25maXJtL2ZuLW1vZGFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGbkNvcmVNb2R1bGUgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlybS9mbi1jb25maXJtLW1vZGFsLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlybS9mbi1tb2RhbC5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSwgQTExeU1vZHVsZSwgTWF0RGlhbG9nTW9kdWxlLCBGbkNvcmVNb2R1bGVdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbRm5Db25maXJtTW9kYWxDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW0ZuQ29uZmlybU1vZGFsQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW0ZuTW9kYWxTZXJ2aWNlXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW0ZuQ29uZmlybU1vZGFsQ29tcG9uZW50XSxcclxuICAgIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEZuRGlhbG9nTW9kdWxlIHtcclxuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBGbkRpYWxvZ01vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbRm5Nb2RhbFNlcnZpY2VdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG59Il19