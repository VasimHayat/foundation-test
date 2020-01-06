/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
var FnConfirmModalComponent = /** @class */ (function () {
    function FnConfirmModalComponent(dialogRef, dialogData) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
    }
    /**
     * @param {?=} isOkey
     * @return {?}
     */
    FnConfirmModalComponent.prototype.close = /**
     * @param {?=} isOkey
     * @return {?}
     */
    function (isOkey) {
        if (isOkey === void 0) { isOkey = false; }
        this.dialogRef.close(isOkey);
    };
    FnConfirmModalComponent.decorators = [
        { type: Component, args: [{
                    template: "<h2 mat-dialog-title>{{dialogData.title}}</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  {{dialogData.content}}\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button class=\"btn btn-danger\" (click)=\"close()\">Cancel</button>\r\n  <button class=\"btn btn-sucess\" (click)=\"close(true)\" cdkFocusInitial>Okey</button>\r\n</mat-dialog-actions>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FnConfirmModalComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return FnConfirmModalComponent;
}());
export { FnConfirmModalComponent };
if (false) {
    /** @type {?} */
    FnConfirmModalComponent.prototype.dialogRef;
    /** @type {?} */
    FnConfirmModalComponent.prototype.dialogData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY29uZmlybS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9kaWFsb2cvY29uZmlybS9mbi1jb25maXJtLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUd6RTtJQVFJLGlDQUFtQixTQUFnRCxFQUMvQixVQUFzQjtRQUR2QyxjQUFTLEdBQVQsU0FBUyxDQUF1QztRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBRTFELENBQUM7Ozs7O0lBRUQsdUNBQUs7Ozs7SUFBTCxVQUFNLE1BQXVCO1FBQXZCLHVCQUFBLEVBQUEsY0FBdUI7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBZkosU0FBUyxTQUFDO29CQUNQLDJYQUE4QztvQkFFOUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN4Qzs7OztnQkFQUSxZQUFZO2dEQVlaLE1BQU0sU0FBQyxlQUFlOztJQU8vQiw4QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBWFksdUJBQXVCOzs7SUFHcEIsNENBQXVEOztJQUMvRCw2Q0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBEaWFsb2dEYXRhIH0gZnJvbSAnLi4vZm4tZGlhbG9nLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdmbi1jb25maXJtLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydmbi1jb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5Db25maXJtTW9kYWxDb21wb25lbnQge1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Rm5Db25maXJtTW9kYWxDb21wb25lbnQ+LFxyXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGlhbG9nRGF0YTogRGlhbG9nRGF0YSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZShpc09rZXk6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKGlzT2tleSk7XHJcbiAgICB9XHJcbn0iXX0=