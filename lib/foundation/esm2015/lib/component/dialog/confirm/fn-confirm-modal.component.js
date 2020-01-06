/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export class FnConfirmModalComponent {
    /**
     * @param {?} dialogRef
     * @param {?} dialogData
     */
    constructor(dialogRef, dialogData) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
    }
    /**
     * @param {?=} isOkey
     * @return {?}
     */
    close(isOkey = false) {
        this.dialogRef.close(isOkey);
    }
}
FnConfirmModalComponent.decorators = [
    { type: Component, args: [{
                template: "<h2 mat-dialog-title>{{dialogData.title}}</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  {{dialogData.content}}\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button class=\"btn btn-danger\" (click)=\"close()\">Cancel</button>\r\n  <button class=\"btn btn-sucess\" (click)=\"close(true)\" cdkFocusInitial>Okey</button>\r\n</mat-dialog-actions>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
FnConfirmModalComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    FnConfirmModalComponent.prototype.dialogRef;
    /** @type {?} */
    FnConfirmModalComponent.prototype.dialogData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY29uZmlybS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9kaWFsb2cvY29uZmlybS9mbi1jb25maXJtLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVF6RSxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUdoQyxZQUFtQixTQUFnRCxFQUMvQixVQUFzQjtRQUR2QyxjQUFTLEdBQVQsU0FBUyxDQUF1QztRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBRTFELENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLFNBQWtCLEtBQUs7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBZkosU0FBUyxTQUFDO2dCQUNQLDJYQUE4QztnQkFFOUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3hDOzs7O1lBUFEsWUFBWTs0Q0FZWixNQUFNLFNBQUMsZUFBZTs7OztJQURmLDRDQUF1RDs7SUFDL0QsNkNBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgRGlhbG9nRGF0YSB9IGZyb20gJy4uL2ZuLWRpYWxvZy5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnZm4tY29uZmlybS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnZm4tY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZuQ29uZmlybU1vZGFsQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEZuQ29uZmlybU1vZGFsQ29tcG9uZW50PixcclxuICAgICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRpYWxvZ0RhdGE6IERpYWxvZ0RhdGEpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoaXNPa2V5OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShpc09rZXkpO1xyXG4gICAgfVxyXG59Il19