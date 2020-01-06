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
export class FnDialogModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FnDialogModule,
            providers: [FnModalService]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhELHdDQUFjLHNDQUFzQyxDQUFDO0FBQ3JELCtCQUFjLDRCQUE0QixDQUFDO0FBVzNDLE1BQU0sT0FBTyxjQUFjOzs7O0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPO1FBQ1YsT0FBTztZQUNILFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztTQUM5QixDQUFDO0lBQ04sQ0FBQzs7O1lBZkosUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxZQUFZLENBQUM7Z0JBQy9FLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDbEMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUMzQixlQUFlLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDMUMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFFcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGbkNvbmZpcm1Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybS9mbi1jb25maXJtLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBGbk1vZGFsU2VydmljZSB9IGZyb20gJy4vY29uZmlybS9mbi1tb2RhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm5Db3JlTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2NvbmZpcm0vZm4tY29uZmlybS1tb2RhbC5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbmZpcm0vZm4tbW9kYWwuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGUsIEExMXlNb2R1bGUsIE1hdERpYWxvZ01vZHVsZSwgRm5Db3JlTW9kdWxlXSxcclxuICAgIGRlY2xhcmF0aW9uczogW0ZuQ29uZmlybU1vZGFsQ29tcG9uZW50XSxcclxuICAgIGV4cG9ydHM6IFtGbkNvbmZpcm1Nb2RhbENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtGbk1vZGFsU2VydmljZV0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtGbkNvbmZpcm1Nb2RhbENvbXBvbmVudF0sXHJcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbkRpYWxvZ01vZHVsZSB7XHJcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogRm5EaWFsb2dNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW0ZuTW9kYWxTZXJ2aWNlXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==