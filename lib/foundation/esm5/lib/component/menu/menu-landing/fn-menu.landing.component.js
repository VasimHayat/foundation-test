/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { getActiveMenuItem } from '../fn-stores/reducer/fn-menu.reducer';
import { FnMenuService } from '../fn-menu.service';
import { Subject } from 'rxjs';
var FnMenuLandingComponent = /** @class */ (function () {
    function FnMenuLandingComponent(menuStore, fnMenuService) {
        this.menuStore = menuStore;
        this.fnMenuService = fnMenuService;
        this.destroy$ = new Subject();
        this.loadSubMenuArrayForActiveMenuId();
    }
    /**
     * @return {?}
     */
    FnMenuLandingComponent.prototype.loadSubMenuArrayForActiveMenuId = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.menuStore.pipe(takeUntil(this.destroy$), select(getActiveMenuItem)).subscribe((/**
         * @param {?} menuItem
         * @return {?}
         */
        function (menuItem) {
            _this.activeMenuItem = menuItem;
            console.log(menuItem);
            // tslint:disable-next-line: triple-equals
            _this.isCustMenu = _this.activeMenuItem.menuType == 'CUSTOM';
            _this.isLoaded = true;
        }));
    };
    /**
     * @param {?} menuItem
     * @return {?}
     */
    FnMenuLandingComponent.prototype.menuClickHandler = /**
     * @param {?} menuItem
     * @return {?}
     */
    function (menuItem) {
        this.fnMenuService.onMenuItemClick(menuItem.id);
    };
    /**
     * @return {?}
     */
    FnMenuLandingComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    FnMenuLandingComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    template: "<!-- <div class=\"zrpt_box_content\" *ngIf=\"isLoaded\">\r\n    <div class=\"header_wrap\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <img class=\"height-width-17 margin-right-5\" [src]=\"activeMenuItem.smallIcon\"><span [innerHTML]=\"activeMenuItem.name\"></span></div>\r\n\r\n\r\n        </div>\r\n        <div class=\"seperator_sky\"></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"site_reports_wrapper bg-white padding-15\">\r\n        <div class=\"row no-margin\">\r\n            <div class=\"report-img-data-wrap col-md-3\" *ngFor=\"let item of activeMenuItem.menuItemArray\" [ngClass]=\"{'hide':item.isDisabled}\" (click)=\"menuClickHandler(item)\">\r\n                <div class=\"img-wrap\">\r\n                    <img [src]=\"item.customIcon\" width=\"100%\" *ngIf=\"isCustMenu\">\r\n                    <img [src]=\"item.bigIcon\" width=\"100%\" *ngIf=\"!isCustMenu\">\r\n                </div>\r\n                <div class=\"reports-Data\">\r\n                    <h5 class=\"choppOff\">\r\n                        <span [innerHTML]=\"item.name\"></span>\r\n                    </h5>\r\n                    <p class=\"choppOff\" [title]=\"item.helpTextLBL\">\r\n                        <span [innerHTML]=\"item.helpTextLBL\"></span>\r\n\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div> -->\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"sub-menu-landing\">\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"sml-img-data-wrap col-3\" *ngFor=\"let item of activeMenuItem.menuItemArray\" [ngClass]=\"{'hide':item.isDisabled}\" (click)=\"menuClickHandler(item)\">\r\n                        <div class=\"sml-img-wrap\">\r\n                            <img [src]=\"item.customIcon\" width=\"100%\" *ngIf=\"isCustMenu\">\r\n                            <img [src]=\"item.bigIcon\" width=\"100%\" *ngIf=\"!isCustMenu\">\r\n                        </div>\r\n                        <div class=\"sml-Data\">\r\n                            <h5 class=\"choppOff\">\r\n                                <span [innerHTML]=\"item.name\"></span>\r\n                            </h5>\r\n                            <p class=\"choppOff\" [title]=\"item.helpTextLBL\">\r\n                                <span [innerHTML]=\"item.helpTextLBL\"></span>\r\n        \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>",
                    styles: ["\n.sub-menu-landing {\n    background-color: #fff;\n    padding: 15px 30px;\n    border-radius: 2px;\n}\n\n.sub-menu-landing .sml-img-data-wrap {\n    padding: 10px;\n    cursor: pointer;\n    min-height: 80px;\n    float: left;\n}\n\n.sub-menu-landing .sml-img-data-wrap:hover {\n    background-color: #F8F9FB;\n    border-radius: 4px;\n}\n\n.sub-menu-landing .sml-img-wrap {\n    width: 50px;\n    height: 50px;\n    float: left;\n    margin-right: 10px;\n    padding: 5px;\n}\n.sub-menu-landing .sml-img-wrap img.svg{\n    width: 100%;\n    height: auto;\n}\n.sub-menu-landing .sml-Data {\n    margin-top: 5px;\n}\n.sub-menu-landing .sml-Data h5 {\n    margin: 0;\n    color: #555557;\n    font-size: 15px;\n}\n\n.sub-menu-landing .sml-Data p {\n    color: #9e9e9e;\n    margin: 0;\n    font-size: 13px;\n}\n        "]
                }] }
    ];
    /** @nocollapse */
    FnMenuLandingComponent.ctorParameters = function () { return [
        { type: Store },
        { type: FnMenuService }
    ]; };
    return FnMenuLandingComponent;
}());
export { FnMenuLandingComponent };
if (false) {
    /** @type {?} */
    FnMenuLandingComponent.prototype.activeMenuItem;
    /** @type {?} */
    FnMenuLandingComponent.prototype.isLoaded;
    /** @type {?} */
    FnMenuLandingComponent.prototype.isCustMenu;
    /**
     * @type {?}
     * @private
     */
    FnMenuLandingComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    FnMenuLandingComponent.prototype.menuStore;
    /**
     * @type {?}
     * @private
     */
    FnMenuLandingComponent.prototype.fnMenuService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5sYW5kaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L21lbnUvbWVudS1sYW5kaW5nL2ZuLW1lbnUubGFuZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CO0lBMkRJLGdDQUFvQixTQUFpQyxFQUFVLGFBQTRCO1FBQXZFLGNBQVMsR0FBVCxTQUFTLENBQXdCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFGbkYsYUFBUSxHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBR3hELElBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxnRUFBK0I7OztJQUEvQjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2YsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQzVCLENBQUMsU0FBUzs7OztRQUNQLFVBQUMsUUFBeUI7WUFDdEIsS0FBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QiwwQ0FBMEM7WUFDMUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUM7WUFDM0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxFQUNKLENBQUM7SUFDTixDQUFDOzs7OztJQUNELGlEQUFnQjs7OztJQUFoQixVQUFpQixRQUF5QjtRQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0JBcEZKLFNBQVMsU0FBQztvQkFDUCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsc29GQUE2Qzs2QkFFekMscXpCQTRDQztpQkFFUjs7OztnQkF4RFEsS0FBSztnQkFHTCxhQUFhOztJQXdGdEIsNkJBQUM7Q0FBQSxBQXJGRCxJQXFGQztTQWxDWSxzQkFBc0I7OztJQUcvQixnREFBZ0M7O0lBQ2hDLDBDQUFrQjs7SUFDbEIsNENBQW9COzs7OztJQUNwQiwwQ0FBNEQ7Ozs7O0lBRWhELDJDQUF5Qzs7Ozs7SUFBRSwrQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm5NZW51SXRlbVN0YXRlIH0gZnJvbSAnLi4vZm4tc3RvcmVzL21vZGVscy9mbi1tZW51LnN0YXRlJztcclxuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBnZXRBY3RpdmVNZW51SXRlbSB9IGZyb20gJy4uL2ZuLXN0b3Jlcy9yZWR1Y2VyL2ZuLW1lbnUucmVkdWNlcic7XHJcbmltcG9ydCB7IEZuTWVudVNlcnZpY2UgfSBmcm9tICcuLi9mbi1tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2ZuLW1lbnUubGFuZGluZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbi5zdWItbWVudS1sYW5kaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5zdWItbWVudS1sYW5kaW5nIC5zbWwtaW1nLWRhdGEtd3JhcCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWluLWhlaWdodDogODBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uc3ViLW1lbnUtbGFuZGluZyAuc21sLWltZy1kYXRhLXdyYXA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjlGQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnN1Yi1tZW51LWxhbmRpbmcgLnNtbC1pbWctd3JhcCB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5zdWItbWVudS1sYW5kaW5nIC5zbWwtaW1nLXdyYXAgaW1nLnN2Z3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5zdWItbWVudS1sYW5kaW5nIC5zbWwtRGF0YSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnN1Yi1tZW51LWxhbmRpbmcgLnNtbC1EYXRhIGg1IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNTU1NTU3O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uc3ViLW1lbnUtbGFuZGluZyAuc21sLURhdGEgcCB7XHJcbiAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZuTWVudUxhbmRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuXHJcbiAgICBhY3RpdmVNZW51SXRlbTogRm5NZW51SXRlbVN0YXRlO1xyXG4gICAgaXNMb2FkZWQ6IGJvb2xlYW47XHJcbiAgICBpc0N1c3RNZW51OiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtZW51U3RvcmU6IFN0b3JlPEZuTWVudUl0ZW1TdGF0ZT4sIHByaXZhdGUgZm5NZW51U2VydmljZTogRm5NZW51U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMubG9hZFN1Yk1lbnVBcnJheUZvckFjdGl2ZU1lbnVJZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTdWJNZW51QXJyYXlGb3JBY3RpdmVNZW51SWQoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51U3RvcmUucGlwZShcclxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgICBzZWxlY3QoZ2V0QWN0aXZlTWVudUl0ZW0pXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChtZW51SXRlbTogRm5NZW51SXRlbVN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU1lbnVJdGVtID0gbWVudUl0ZW07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZW51SXRlbSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHRyaXBsZS1lcXVhbHNcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDdXN0TWVudSA9IHRoaXMuYWN0aXZlTWVudUl0ZW0ubWVudVR5cGUgPT0gJ0NVU1RPTSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBtZW51Q2xpY2tIYW5kbGVyKG1lbnVJdGVtOiBGbk1lbnVJdGVtU3RhdGUpIHtcclxuICAgICAgICB0aGlzLmZuTWVudVNlcnZpY2Uub25NZW51SXRlbUNsaWNrKG1lbnVJdGVtLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==