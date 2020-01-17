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
export class FnMenuLandingComponent {
    /**
     * @param {?} menuStore
     * @param {?} fnMenuService
     */
    constructor(menuStore, fnMenuService) {
        this.menuStore = menuStore;
        this.fnMenuService = fnMenuService;
        this.destroy$ = new Subject();
        this.loadSubMenuArrayForActiveMenuId();
    }
    /**
     * @return {?}
     */
    loadSubMenuArrayForActiveMenuId() {
        this.menuStore.pipe(takeUntil(this.destroy$), select(getActiveMenuItem)).subscribe((/**
         * @param {?} menuItem
         * @return {?}
         */
        (menuItem) => {
            this.activeMenuItem = menuItem;
            //  console.log(menuItem);
            // tslint:disable-next-line: triple-equals
            this.isCustMenu = this.activeMenuItem.menuType == 'CUSTOM';
            this.isLoaded = true;
        }));
    }
    /**
     * @param {?} menuItem
     * @return {?}
     */
    menuClickHandler(menuItem) {
        this.fnMenuService.onMenuItemClick(menuItem.id);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
FnMenuLandingComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                template: "<!-- <div class=\"zrpt_box_content\" *ngIf=\"isLoaded\">\r\n    <div class=\"header_wrap\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <img class=\"height-width-17 margin-right-5\" [src]=\"activeMenuItem.smallIcon\"><span [innerHTML]=\"activeMenuItem.name\"></span></div>\r\n\r\n\r\n        </div>\r\n        <div class=\"seperator_sky\"></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"site_reports_wrapper bg-white padding-15\">\r\n        <div class=\"row no-margin\">\r\n            <div class=\"report-img-data-wrap col-md-3\" *ngFor=\"let item of activeMenuItem.menuItemArray\" [ngClass]=\"{'hide':item.isDisabled}\" (click)=\"menuClickHandler(item)\">\r\n                <div class=\"img-wrap\">\r\n                    <img [src]=\"item.customIcon\" width=\"100%\" *ngIf=\"isCustMenu\">\r\n                    <img [src]=\"item.bigIcon\" width=\"100%\" *ngIf=\"!isCustMenu\">\r\n                </div>\r\n                <div class=\"reports-Data\">\r\n                    <h5 class=\"choppOff\">\r\n                        <span [innerHTML]=\"item.name\"></span>\r\n                    </h5>\r\n                    <p class=\"choppOff\" [title]=\"item.helpTextLBL\">\r\n                        <span [innerHTML]=\"item.helpTextLBL\"></span>\r\n\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div> -->\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"sub-menu-landing\">\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"sml-img-data-wrap col-3\" *ngFor=\"let item of activeMenuItem.menuItemArray\" [ngClass]=\"{'hide':item.isDisabled}\" (click)=\"menuClickHandler(item)\">\r\n                        <div class=\"sml-img-wrap\">\r\n                            <img [src]=\"item.customIcon\" width=\"100%\" *ngIf=\"isCustMenu\">\r\n                            <img [src]=\"item.bigIcon\" width=\"100%\" *ngIf=\"!isCustMenu\">\r\n                        </div>\r\n                        <div class=\"sml-Data\">\r\n                            <h5 class=\"choppOff\">\r\n                                <span [innerHTML]=\"item.name\"></span>\r\n                            </h5>\r\n                            <p class=\"choppOff\" [title]=\"item.helpTextLBL\">\r\n                                <span [innerHTML]=\"item.helpTextLBL\"></span>\r\n        \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>",
                styles: [".sub-menu-landing{background-color:#fff;padding:15px 30px;border-radius:2px}.sub-menu-landing .sml-img-data-wrap{padding:10px;cursor:pointer;min-height:80px;float:left}.sub-menu-landing .sml-img-data-wrap:hover{background-color:#f8f9fb;border-radius:4px}.sub-menu-landing .sml-img-wrap{width:50px;height:50px;float:left;margin-right:10px;padding:5px}.sub-menu-landing .sml-img-wrap img.svg{width:100%;height:auto}.sub-menu-landing .sml-Data{margin-top:5px}.sub-menu-landing .sml-Data h5{margin:0;color:#555557;font-size:15px}.sub-menu-landing .sml-Data p{color:#9e9e9e;margin:0;font-size:13px}"]
            }] }
];
/** @nocollapse */
FnMenuLandingComponent.ctorParameters = () => [
    { type: Store },
    { type: FnMenuService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS1sYW5kaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L21lbnUvbWVudS1sYW5kaW5nL2ZuLW1lbnUtbGFuZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWEsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBTzdCLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBUWpDLFlBQW9CLFNBQWlDLEVBQVUsYUFBNEI7UUFBdkUsY0FBUyxHQUFULFNBQVMsQ0FBd0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUZuRixhQUFRLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFHMUQsSUFBSSxDQUFDLCtCQUErQixFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELCtCQUErQjtRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDakIsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQzFCLENBQUMsU0FBUzs7OztRQUNULENBQUMsUUFBeUIsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1lBQy9CLDBCQUEwQjtZQUMxQiwwQ0FBMEM7WUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUM7WUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxFQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLFFBQXlCO1FBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBdkNGLFNBQVMsU0FBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsc29GQUE2Qzs7YUFFOUM7Ozs7WUFWTyxLQUFLO1lBR0wsYUFBYTs7OztJQVduQixnREFBZ0M7O0lBQ2hDLDBDQUFrQjs7SUFDbEIsNENBQW9COzs7OztJQUNwQiwwQ0FBNEQ7Ozs7O0lBRWhELDJDQUF5Qzs7Ozs7SUFBRSwrQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm5NZW51SXRlbVN0YXRlfSBmcm9tICcuLi9mbi1zdG9yZXMvbW9kZWxzL2ZuLW1lbnUuc3RhdGUnO1xyXG5pbXBvcnQge1N0b3JlLCBzZWxlY3R9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHt0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtnZXRBY3RpdmVNZW51SXRlbX0gZnJvbSAnLi4vZm4tc3RvcmVzL3JlZHVjZXIvZm4tbWVudS5yZWR1Y2VyJztcclxuaW1wb3J0IHtGbk1lbnVTZXJ2aWNlfSBmcm9tICcuLi9mbi1tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJ2ZuLW1lbnUtbGFuZGluZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2ZuLW1lbnUtbGFuZGluZy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbk1lbnVMYW5kaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcblxyXG4gIGFjdGl2ZU1lbnVJdGVtOiBGbk1lbnVJdGVtU3RhdGU7XHJcbiAgaXNMb2FkZWQ6IGJvb2xlYW47XHJcbiAgaXNDdXN0TWVudTogYm9vbGVhbjtcclxuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZW51U3RvcmU6IFN0b3JlPEZuTWVudUl0ZW1TdGF0ZT4sIHByaXZhdGUgZm5NZW51U2VydmljZTogRm5NZW51U2VydmljZSkge1xyXG4gICAgdGhpcy5sb2FkU3ViTWVudUFycmF5Rm9yQWN0aXZlTWVudUlkKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkU3ViTWVudUFycmF5Rm9yQWN0aXZlTWVudUlkKCkge1xyXG4gICAgdGhpcy5tZW51U3RvcmUucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICBzZWxlY3QoZ2V0QWN0aXZlTWVudUl0ZW0pXHJcbiAgICApLnN1YnNjcmliZShcclxuICAgICAgKG1lbnVJdGVtOiBGbk1lbnVJdGVtU3RhdGUpID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2ZU1lbnVJdGVtID0gbWVudUl0ZW07XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKG1lbnVJdGVtKTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHRyaXBsZS1lcXVhbHNcclxuICAgICAgICB0aGlzLmlzQ3VzdE1lbnUgPSB0aGlzLmFjdGl2ZU1lbnVJdGVtLm1lbnVUeXBlID09ICdDVVNUT00nO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbWVudUNsaWNrSGFuZGxlcihtZW51SXRlbTogRm5NZW51SXRlbVN0YXRlKSB7XHJcbiAgICB0aGlzLmZuTWVudVNlcnZpY2Uub25NZW51SXRlbUNsaWNrKG1lbnVJdGVtLmlkKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=