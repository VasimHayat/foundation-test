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
        /** @type {?} */
        const confirmDialogRef = this.dialog.open(FnConfirmModalComponent, {
            data: dialogData
        });
        // confirmDialogRef.afterClosed().subscribe(result => {
        // });
        return confirmDialogRef;
    }
    /**
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    openCustomModal(componentOrTemplateRef, config) {
        /** @type {?} */
        const dialogRef = this.dialog.open(componentOrTemplateRef, config);
        return dialogRef;
    }
    /**
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    openModal(componentOrTemplateRef, config) {
        /** @type {?} */
        const dialogRef = this.dialog.open(componentOrTemplateRef, {
            data: config.data,
            width: '500px',
            hasBackdrop: config.hasBackdrop
        });
        return dialogRef;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2RpYWxvZy9jb25maXJtL2ZuLW1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUt2RSxNQUFNLE9BQU8sY0FBYzs7OztJQUV2QixZQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBRXJDLENBQUM7Ozs7O0lBRU0sZ0JBQWdCLENBQUMsYUFBeUIsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRTs7Y0FDeEcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDL0QsSUFBSSxFQUFFLFVBQVU7U0FDbkIsQ0FBQztRQUVGLHVEQUF1RDtRQUV2RCxNQUFNO1FBRU4sT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFFTSxlQUFlLENBQUMsc0JBQTZELEVBQUUsTUFBd0I7O2NBQ3BHLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLENBQUM7UUFDbEUsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBQ00sU0FBUyxDQUFDLHNCQUE2RCxFQUFFLE1BQXdCOztjQUM5RixTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDdkQsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLEtBQUssRUFBRSxPQUFPO1lBQ2QsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO1NBQ2xDLENBQUM7UUFDRixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDOzs7WUE5QkosVUFBVTs7OztZQUxGLFNBQVM7Ozs7Ozs7SUFRRixnQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTWF0RGlhbG9nQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBGbkNvbmZpcm1Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vZm4tY29uZmlybS1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaWFsb2dEYXRhIH0gZnJvbSAnLi4vZm4tZGlhbG9nLm1vZGVsJztcclxuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm5Nb2RhbFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2cpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5Db25maXJtTW9kYWwoZGlhbG9nRGF0YTogRGlhbG9nRGF0YSA9IHsgdGl0bGU6ICdDb25maXJtYXRpb24nLCBjb250ZW50OiAnRG8geW91IHdhbnQgdG8gZGVsZXRlIHRoaXM/JyB9KTogTWF0RGlhbG9nUmVmPEZuQ29uZmlybU1vZGFsQ29tcG9uZW50LCBhbnk+IHtcclxuICAgICAgICBjb25zdCBjb25maXJtRGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihGbkNvbmZpcm1Nb2RhbENvbXBvbmVudCwge1xyXG4gICAgICAgICAgICBkYXRhOiBkaWFsb2dEYXRhXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNvbmZpcm1EaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb25maXJtRGlhbG9nUmVmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuQ3VzdG9tTW9kYWwoY29tcG9uZW50T3JUZW1wbGF0ZVJlZjogQ29tcG9uZW50VHlwZTxhbnk+IHwgVGVtcGxhdGVSZWY8YW55PiwgY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnKSB7XHJcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3Blbihjb21wb25lbnRPclRlbXBsYXRlUmVmLCBjb25maWcpO1xyXG4gICAgICAgIHJldHVybiBkaWFsb2dSZWY7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3Blbk1vZGFsKGNvbXBvbmVudE9yVGVtcGxhdGVSZWY6IENvbXBvbmVudFR5cGU8YW55PiB8IFRlbXBsYXRlUmVmPGFueT4sIGNvbmZpZz86IE1hdERpYWxvZ0NvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oY29tcG9uZW50T3JUZW1wbGF0ZVJlZiwge1xyXG4gICAgICAgICAgICBkYXRhOiBjb25maWcuZGF0YSxcclxuICAgICAgICAgICAgd2lkdGg6ICc1MDBweCcsXHJcbiAgICAgICAgICAgIGhhc0JhY2tkcm9wOiBjb25maWcuaGFzQmFja2Ryb3BcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZGlhbG9nUmVmO1xyXG4gICAgfVxyXG59Il19