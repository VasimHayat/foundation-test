/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FnMenuService } from '../fn-menu.service';
export class FnMenuItemComponent {
    /**
     * @param {?} fnMenuService
     */
    constructor(fnMenuService) {
        this.fnMenuService = fnMenuService;
    }
    /**
     * @param {?} menuItem
     * @return {?}
     */
    menuClickHandler(menuItem) {
        this.fnMenuService.onMenuItemClick(menuItem.id);
    }
}
FnMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: '[fn-menu-item]',
                encapsulation: ViewEncapsulation.None,
                template: "<li *ngFor=\"let menuItem of fnMenuItem.menuItemArray\" [ngClass]=\"{'nav-dropdown':menuItem.menuItemArray.length>0 && menuItem.showDropIcon}\" class=\"nav-item\">\r\n    <a (click)=\"menuClickHandler(menuItem)\" [id]=\"menuItem.id\" class=\"nav-link\">\r\n        <img [src]=\"menuItem.smallIcon\" height=\"20\" width=\"20\" /> <span [innerHTML]=\"menuItem.name\"></span>\r\n        <i *ngIf=\"menuItem.menuItemArray && menuItem.menuItemArray.length>0\" class=\"fa fa-angle-right pull-right\"></i>\r\n    </a>\r\n    <ul fn-menu-item class=\"sidebar-menu-item nav-sub  {{menuItem.id}}\" *ngIf=\"!menuItem.isDisabled\" [fnMenuItem]=\"menuItem\">\r\n    </ul>\r\n\r\n</li>",
                styles: [`
li{list-style:none}
.nav-item .nav-link:hover {
    color: rgba(255, 255, 255, 0.75);
    background-color: #596773;
}
  .nav-item .nav-link:hover img{
    opacity: 1;
}
  .nav-item .nav-link{
    border-left: 2px solid transparent;
    font-size: 13px;
    letter-spacing: 0.05em;
    padding: .7rem 0.7rem;
}
  .nav-item.active> .nav-link{
    border-left: 2px solid #35c4ff;
    background-color: #465766;
}
  .nav-item .nav-link img{
    height: 21px;
    width: 21px;
    margin-right: 15px;
    margin-top: -3px;
    opacity: 0.7;
}
 > .nav-item.active> .nav-link img{
    opacity: 1;
}
 > .nav-item ul.nav-second-level > .nav-item {
    padding-left: 0px;
}
 > .nav-item ul.nav-second-level > .nav-item > .nav-link {
    padding-left: 20px;
}
 > .nav-item ul.nav-second-level {
    padding-left: 0;
}
.sidebar-menu-item{display:none}
.nav-item  {
    width: 300px;
}
`]
            }] }
];
/** @nocollapse */
FnMenuItemComponent.ctorParameters = () => [
    { type: FnMenuService }
];
FnMenuItemComponent.propDecorators = {
    fnMenuItem: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L21lbnUvbWVudS1pdGVtL2ZuLW1lbnUuaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQW9EbkQsTUFBTSxPQUFPLG1CQUFtQjs7OztJQU01QixZQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFJLENBQUM7Ozs7O0lBQ3JELGdCQUFnQixDQUFDLFFBQXlCO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7WUEzREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQywycUJBQTBDO3lCQUV0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMENQO2FBRUE7Ozs7WUFuRFEsYUFBYTs7O3lCQXdEakIsS0FBSzs7OztJQUROLDZDQUF1Qzs7SUFDdkMseUNBQXFDOzs7OztJQUV6Qiw0Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGbk1lbnVJdGVtU3RhdGUgfSBmcm9tICcuLi9mbi1zdG9yZXMvbW9kZWxzL2ZuLW1lbnUuc3RhdGUnO1xyXG5pbXBvcnQgeyBGbk1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vZm4tbWVudS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdbZm4tbWVudS1pdGVtXScsXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdmbi1tZW51Lml0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbXHJcbiAgICAgICAgYFxyXG5saXtsaXN0LXN0eWxlOm5vbmV9XHJcbi5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk2NzczO1xyXG59XHJcbiAgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciBpbWd7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbiAgLm5hdi1pdGVtIC5uYXYtbGlua3tcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gICAgcGFkZGluZzogLjdyZW0gMC43cmVtO1xyXG59XHJcbiAgLm5hdi1pdGVtLmFjdGl2ZT4gLm5hdi1saW5re1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMzVjNGZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NTc2NjtcclxufVxyXG4gIC5uYXYtaXRlbSAubmF2LWxpbmsgaW1ne1xyXG4gICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgd2lkdGg6IDIxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcbiA+IC5uYXYtaXRlbS5hY3RpdmU+IC5uYXYtbGluayBpbWd7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbiA+IC5uYXYtaXRlbSB1bC5uYXYtc2Vjb25kLWxldmVsID4gLm5hdi1pdGVtIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbiA+IC5uYXYtaXRlbSB1bC5uYXYtc2Vjb25kLWxldmVsID4gLm5hdi1pdGVtID4gLm5hdi1saW5rIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4gPiAubmF2LWl0ZW0gdWwubmF2LXNlY29uZC1sZXZlbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLnNpZGViYXItbWVudS1pdGVte2Rpc3BsYXk6bm9uZX1cclxuLm5hdi1pdGVtICB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5NZW51SXRlbUNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIHB1YmxpYyByZW5kZXJNZW51SXRlbTogRm5NZW51SXRlbVN0YXRlO1xyXG4gICAgQElucHV0KCkgZm5NZW51SXRlbTogRm5NZW51SXRlbVN0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZm5NZW51U2VydmljZTogRm5NZW51U2VydmljZSkgeyB9XHJcbiAgICBtZW51Q2xpY2tIYW5kbGVyKG1lbnVJdGVtOiBGbk1lbnVJdGVtU3RhdGUpIHtcclxuICAgICAgICB0aGlzLmZuTWVudVNlcnZpY2Uub25NZW51SXRlbUNsaWNrKG1lbnVJdGVtLmlkKTtcclxuICAgIH1cclxufVxyXG4iXX0=