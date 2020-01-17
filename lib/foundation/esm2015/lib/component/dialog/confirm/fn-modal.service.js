/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FnConfirmModalComponent } from './fn-confirm-modal.component';
export class FnModalService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?=} dialogData
     * @return {?}
     */
    openConfirmModal(dialogData = { title: 'Confirmation', content: 'Do you want to delete this?' }) {
        return this.dialog.open(FnConfirmModalComponent, {
            data: dialogData
        });
    }
    /**
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    openCustomModal(componentOrTemplateRef, config) {
        return this.dialog.open(componentOrTemplateRef, config);
    }
    /**
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    openModal(componentOrTemplateRef, config) {
        return this.dialog.open(componentOrTemplateRef, {
            data: config.data,
            width: '500px',
            hasBackdrop: config.hasBackdrop
        });
    }
}
FnModalService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FnModalService.ctorParameters = () => [
    { type: MatDialog }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnModalService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2RpYWxvZy9jb25maXJtL2ZuLW1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFDLFNBQVMsRUFBZ0MsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUtyRSxNQUFNLE9BQU8sY0FBYzs7OztJQUV6QixZQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBRXJDLENBQUM7Ozs7O0lBRU0sZ0JBQWdCLENBQUMsYUFBeUIsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBQztRQUU5RyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQy9DLElBQUksRUFBRSxVQUFVO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVNLGVBQWUsQ0FBQyxzQkFBNkQsRUFBRSxNQUF3QjtRQUM1RyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7OztJQUVNLFNBQVMsQ0FBQyxzQkFBNkQsRUFBRSxNQUF3QjtRQUN0RyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQzlDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixLQUFLLEVBQUUsT0FBTztZQUNkLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF4QkYsVUFBVTs7OztZQUxILFNBQVM7Ozs7Ozs7SUFRSCxnQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTWF0RGlhbG9nQ29uZmlnfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7Rm5Db25maXJtTW9kYWxDb21wb25lbnR9IGZyb20gJy4vZm4tY29uZmlybS1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RpYWxvZ0RhdGF9IGZyb20gJy4uL2ZuLWRpYWxvZy5tb2RlbCc7XHJcbmltcG9ydCB7Q29tcG9uZW50VHlwZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGbk1vZGFsU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2cpIHtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbkNvbmZpcm1Nb2RhbChkaWFsb2dEYXRhOiBEaWFsb2dEYXRhID0ge3RpdGxlOiAnQ29uZmlybWF0aW9uJywgY29udGVudDogJ0RvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzPyd9KTpcclxuICAgIE1hdERpYWxvZ1JlZjxGbkNvbmZpcm1Nb2RhbENvbXBvbmVudCwgYW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5kaWFsb2cub3BlbihGbkNvbmZpcm1Nb2RhbENvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiBkaWFsb2dEYXRhXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuQ3VzdG9tTW9kYWwoY29tcG9uZW50T3JUZW1wbGF0ZVJlZjogQ29tcG9uZW50VHlwZTxhbnk+IHwgVGVtcGxhdGVSZWY8YW55PiwgY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaWFsb2cub3Blbihjb21wb25lbnRPclRlbXBsYXRlUmVmLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW5Nb2RhbChjb21wb25lbnRPclRlbXBsYXRlUmVmOiBDb21wb25lbnRUeXBlPGFueT4gfCBUZW1wbGF0ZVJlZjxhbnk+LCBjb25maWc/OiBNYXREaWFsb2dDb25maWcpIHtcclxuICAgIHJldHVybiB0aGlzLmRpYWxvZy5vcGVuKGNvbXBvbmVudE9yVGVtcGxhdGVSZWYsIHtcclxuICAgICAgZGF0YTogY29uZmlnLmRhdGEsXHJcbiAgICAgIHdpZHRoOiAnNTAwcHgnLFxyXG4gICAgICBoYXNCYWNrZHJvcDogY29uZmlnLmhhc0JhY2tkcm9wXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19