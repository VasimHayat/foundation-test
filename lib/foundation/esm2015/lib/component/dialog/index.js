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
                imports: [FormsModule, CommonModule, A11yModule, MatDialogModule, FnCoreModule, FoundationModule],
                declarations: [FnConfirmModalComponent, FnDialogHeaderComponent],
                exports: [FnConfirmModalComponent, FnDialogHeaderComponent],
                providers: [FnModalService],
                entryComponents: [FnConfirmModalComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTlFLHdDQUFjLHNDQUFzQyxDQUFDO0FBQ3JELCtCQUFjLDRCQUE0QixDQUFDO0FBVzNDLE1BQU0sT0FBTyxjQUFjOzs7O0lBQ3pCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztTQUM1QixDQUFDO0lBQ0osQ0FBQzs7O1lBZkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ2pHLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLHVCQUF1QixDQUFDO2dCQUNoRSxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSx1QkFBdUIsQ0FBQztnQkFDM0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUMzQixlQUFlLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDMUMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFFbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGbkNvbmZpcm1Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybS9mbi1jb25maXJtLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBGbk1vZGFsU2VydmljZSB9IGZyb20gJy4vY29uZmlybS9mbi1tb2RhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm5Db3JlTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IEZvdW5kYXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZuRGlhbG9nSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvZm4tZGlhbG9nLWhlYWRlci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9jb25maXJtL2ZuLWNvbmZpcm0tbW9kYWwuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb25maXJtL2ZuLW1vZGFsLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSwgQTExeU1vZHVsZSwgTWF0RGlhbG9nTW9kdWxlLCBGbkNvcmVNb2R1bGUsIEZvdW5kYXRpb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0ZuQ29uZmlybU1vZGFsQ29tcG9uZW50LCBGbkRpYWxvZ0hlYWRlckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0ZuQ29uZmlybU1vZGFsQ29tcG9uZW50LCBGbkRpYWxvZ0hlYWRlckNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbRm5Nb2RhbFNlcnZpY2VdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0ZuQ29uZmlybU1vZGFsQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbkRpYWxvZ01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRm5EaWFsb2dNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0ZuTW9kYWxTZXJ2aWNlXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=