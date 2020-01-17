/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FnConfirmModalComponent } from './fn-confirm-modal.component';
var FnModalService = /** @class */ (function () {
    function FnModalService(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?=} dialogData
     * @return {?}
     */
    FnModalService.prototype.openConfirmModal = /**
     * @param {?=} dialogData
     * @return {?}
     */
    function (dialogData) {
        if (dialogData === void 0) { dialogData = { title: 'Confirmation', content: 'Do you want to delete this?' }; }
        return this.dialog.open(FnConfirmModalComponent, {
            data: dialogData
        });
    };
    /**
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    FnModalService.prototype.openCustomModal = /**
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    function (componentOrTemplateRef, config) {
        return this.dialog.open(componentOrTemplateRef, config);
    };
    /**
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    FnModalService.prototype.openModal = /**
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    function (componentOrTemplateRef, config) {
        return this.dialog.open(componentOrTemplateRef, {
            data: config.data,
            width: '500px',
            hasBackdrop: config.hasBackdrop
        });
    };
    FnModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FnModalService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    return FnModalService;
}());
export { FnModalService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnModalService.prototype.dialog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2RpYWxvZy9jb25maXJtL2ZuLW1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFDLFNBQVMsRUFBZ0MsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUlyRTtJQUdFLHdCQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBRXJDLENBQUM7Ozs7O0lBRU0seUNBQWdCOzs7O0lBQXZCLFVBQXdCLFVBQXdGO1FBQXhGLDJCQUFBLEVBQUEsZUFBMEIsS0FBSyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUM7UUFFOUcsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUMvQyxJQUFJLEVBQUUsVUFBVTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTSx3Q0FBZTs7Ozs7SUFBdEIsVUFBdUIsc0JBQTZELEVBQUUsTUFBd0I7UUFDNUcsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFFTSxrQ0FBUzs7Ozs7SUFBaEIsVUFBaUIsc0JBQTZELEVBQUUsTUFBd0I7UUFDdEcsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUM5QyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDakIsS0FBSyxFQUFFLE9BQU87WUFDZCxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7U0FDaEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBeEJGLFVBQVU7Ozs7Z0JBTEgsU0FBUzs7SUE4QmpCLHFCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F4QlksY0FBYzs7Ozs7O0lBRWIsZ0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1hdERpYWxvZ0NvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge0ZuQ29uZmlybU1vZGFsQ29tcG9uZW50fSBmcm9tICcuL2ZuLWNvbmZpcm0tbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtEaWFsb2dEYXRhfSBmcm9tICcuLi9mbi1kaWFsb2cubW9kZWwnO1xyXG5pbXBvcnQge0NvbXBvbmVudFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm5Nb2RhbFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW5Db25maXJtTW9kYWwoZGlhbG9nRGF0YTogRGlhbG9nRGF0YSA9IHt0aXRsZTogJ0NvbmZpcm1hdGlvbicsIGNvbnRlbnQ6ICdEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcz8nfSk6XHJcbiAgICBNYXREaWFsb2dSZWY8Rm5Db25maXJtTW9kYWxDb21wb25lbnQsIGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nLm9wZW4oRm5Db25maXJtTW9kYWxDb21wb25lbnQsIHtcclxuICAgICAgZGF0YTogZGlhbG9nRGF0YVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbkN1c3RvbU1vZGFsKGNvbXBvbmVudE9yVGVtcGxhdGVSZWY6IENvbXBvbmVudFR5cGU8YW55PiB8IFRlbXBsYXRlUmVmPGFueT4sIGNvbmZpZz86IE1hdERpYWxvZ0NvbmZpZykge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nLm9wZW4oY29tcG9uZW50T3JUZW1wbGF0ZVJlZiwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcGVuTW9kYWwoY29tcG9uZW50T3JUZW1wbGF0ZVJlZjogQ29tcG9uZW50VHlwZTxhbnk+IHwgVGVtcGxhdGVSZWY8YW55PiwgY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaWFsb2cub3Blbihjb21wb25lbnRPclRlbXBsYXRlUmVmLCB7XHJcbiAgICAgIGRhdGE6IGNvbmZpZy5kYXRhLFxyXG4gICAgICB3aWR0aDogJzUwMHB4JyxcclxuICAgICAgaGFzQmFja2Ryb3A6IGNvbmZpZy5oYXNCYWNrZHJvcFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==