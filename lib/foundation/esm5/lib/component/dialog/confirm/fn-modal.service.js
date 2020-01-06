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
        /** @type {?} */
        var confirmDialogRef = this.dialog.open(FnConfirmModalComponent, {
            data: dialogData
        });
        // confirmDialogRef.afterClosed().subscribe(result => {
        // });
        return confirmDialogRef;
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
        /** @type {?} */
        var dialogRef = this.dialog.open(componentOrTemplateRef, config);
        return dialogRef;
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
        /** @type {?} */
        var dialogRef = this.dialog.open(componentOrTemplateRef, {
            data: config.data,
            width: '500px',
            hasBackdrop: config.hasBackdrop
        });
        return dialogRef;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2RpYWxvZy9jb25maXJtL2ZuLW1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUl2RTtJQUdJLHdCQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBRXJDLENBQUM7Ozs7O0lBRU0seUNBQWdCOzs7O0lBQXZCLFVBQXdCLFVBQTBGO1FBQTFGLDJCQUFBLEVBQUEsZUFBMkIsS0FBSyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUU7O1lBQ3hHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQy9ELElBQUksRUFBRSxVQUFVO1NBQ25CLENBQUM7UUFFRix1REFBdUQ7UUFFdkQsTUFBTTtRQUVOLE9BQU8sZ0JBQWdCLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRU0sd0NBQWU7Ozs7O0lBQXRCLFVBQXVCLHNCQUE2RCxFQUFFLE1BQXdCOztZQUNwRyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxDQUFDO1FBQ2xFLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUNNLGtDQUFTOzs7OztJQUFoQixVQUFpQixzQkFBNkQsRUFBRSxNQUF3Qjs7WUFDOUYsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ3ZELElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixLQUFLLEVBQUUsT0FBTztZQUNkLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztTQUNsQyxDQUFDO1FBQ0YsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQzs7Z0JBOUJKLFVBQVU7Ozs7Z0JBTEYsU0FBUzs7SUFvQ2xCLHFCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0E5QlksY0FBYzs7Ozs7O0lBRVgsZ0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1hdERpYWxvZ0NvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgRm5Db25maXJtTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2ZuLWNvbmZpcm0tbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlhbG9nRGF0YSB9IGZyb20gJy4uL2ZuLWRpYWxvZy5tb2RlbCc7XHJcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZuTW9kYWxTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuQ29uZmlybU1vZGFsKGRpYWxvZ0RhdGE6IERpYWxvZ0RhdGEgPSB7IHRpdGxlOiAnQ29uZmlybWF0aW9uJywgY29udGVudDogJ0RvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzPycgfSk6IE1hdERpYWxvZ1JlZjxGbkNvbmZpcm1Nb2RhbENvbXBvbmVudCwgYW55PiB7XHJcbiAgICAgICAgY29uc3QgY29uZmlybURpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRm5Db25maXJtTW9kYWxDb21wb25lbnQsIHtcclxuICAgICAgICAgICAgZGF0YTogZGlhbG9nRGF0YVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjb25maXJtRGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcblxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY29uZmlybURpYWxvZ1JlZjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlbkN1c3RvbU1vZGFsKGNvbXBvbmVudE9yVGVtcGxhdGVSZWY6IENvbXBvbmVudFR5cGU8YW55PiB8IFRlbXBsYXRlUmVmPGFueT4sIGNvbmZpZz86IE1hdERpYWxvZ0NvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oY29tcG9uZW50T3JUZW1wbGF0ZVJlZiwgY29uZmlnKTtcclxuICAgICAgICByZXR1cm4gZGlhbG9nUmVmO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9wZW5Nb2RhbChjb21wb25lbnRPclRlbXBsYXRlUmVmOiBDb21wb25lbnRUeXBlPGFueT4gfCBUZW1wbGF0ZVJlZjxhbnk+LCBjb25maWc/OiBNYXREaWFsb2dDb25maWcpIHtcclxuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKGNvbXBvbmVudE9yVGVtcGxhdGVSZWYsIHtcclxuICAgICAgICAgICAgZGF0YTogY29uZmlnLmRhdGEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnNTAwcHgnLFxyXG4gICAgICAgICAgICBoYXNCYWNrZHJvcDogY29uZmlnLmhhc0JhY2tkcm9wXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRpYWxvZ1JlZjtcclxuICAgIH1cclxufSJdfQ==