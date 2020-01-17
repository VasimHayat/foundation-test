/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FnMenuService } from '../fn-menu.service';
var FnMenuItemComponent = /** @class */ (function () {
    function FnMenuItemComponent(fnMenuService) {
        this.fnMenuService = fnMenuService;
    }
    /**
     * @param {?} menuItem
     * @return {?}
     */
    FnMenuItemComponent.prototype.menuClickHandler = /**
     * @param {?} menuItem
     * @return {?}
     */
    function (menuItem) {
        this.fnMenuService.onMenuItemClick(menuItem.id);
    };
    FnMenuItemComponent.decorators = [
        { type: Component, args: [{
                    selector: '[fn-menu-item]',
                    encapsulation: ViewEncapsulation.None,
                    template: "<li *ngFor=\"let menuItem of fnMenuItem.menuItemArray\" [ngClass]=\"{'nav-dropdown':menuItem.menuItemArray.length>0 && menuItem.showDropIcon}\"\r\n  class=\"nav-item\">\r\n  <a (click)=\"menuClickHandler(menuItem)\" [id]=\"menuItem.id\" class=\"nav-link\">\r\n    <img [src]=\"menuItem.smallIcon\" height=\"20\" width=\"20\"/>\r\n    <span [innerHTML]=\"menuItem.name\"></span>\r\n    <i *ngIf=\"menuItem.menuItemArray && menuItem.menuItemArray.length>0\" class=\"fa fa-angle-right pull-right\"></i>\r\n  </a>\r\n  <ul\r\n    fn-menu-item class=\"sidebar-menu-item nav-sub  {{menuItem.id}}\" *ngIf=\"!menuItem.isDisabled\" [fnMenuItem]=\"menuItem\">\r\n  </ul>\r\n\r\n</li>\r\n"
                }] }
    ];
    /** @nocollapse */
    FnMenuItemComponent.ctorParameters = function () { return [
        { type: FnMenuService }
    ]; };
    FnMenuItemComponent.propDecorators = {
        fnMenuItem: [{ type: Input }]
    };
    return FnMenuItemComponent;
}());
export { FnMenuItemComponent };
if (false) {
    /** @type {?} */
    FnMenuItemComponent.prototype.renderMenuItem;
    /** @type {?} */
    FnMenuItemComponent.prototype.fnMenuItem;
    /**
     * @type {?}
     * @private
     */
    FnMenuItemComponent.prototype.fnMenuService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L21lbnUvbWVudS1pdGVtL2ZuLW1lbnUuaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWxFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRDtJQVVFLDZCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNoRCxDQUFDOzs7OztJQUVELDhDQUFnQjs7OztJQUFoQixVQUFpQixRQUF5QjtRQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxpckJBQTBDO2lCQUMzQzs7OztnQkFOTyxhQUFhOzs7NkJBVWxCLEtBQUs7O0lBUVIsMEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVhZLG1CQUFtQjs7O0lBRTlCLDZDQUF1Qzs7SUFDdkMseUNBQXFDOzs7OztJQUV6Qiw0Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGbk1lbnVJdGVtU3RhdGV9IGZyb20gJy4uL2ZuLXN0b3Jlcy9tb2RlbHMvZm4tbWVudS5zdGF0ZSc7XHJcbmltcG9ydCB7Rm5NZW51U2VydmljZX0gZnJvbSAnLi4vZm4tbWVudS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2ZuLW1lbnUtaXRlbV0nLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICdmbi1tZW51Lml0ZW0uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbk1lbnVJdGVtQ29tcG9uZW50IHtcclxuXHJcbiAgcHVibGljIHJlbmRlck1lbnVJdGVtOiBGbk1lbnVJdGVtU3RhdGU7XHJcbiAgQElucHV0KCkgZm5NZW51SXRlbTogRm5NZW51SXRlbVN0YXRlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZuTWVudVNlcnZpY2U6IEZuTWVudVNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG1lbnVDbGlja0hhbmRsZXIobWVudUl0ZW06IEZuTWVudUl0ZW1TdGF0ZSkge1xyXG4gICAgdGhpcy5mbk1lbnVTZXJ2aWNlLm9uTWVudUl0ZW1DbGljayhtZW51SXRlbS5pZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==