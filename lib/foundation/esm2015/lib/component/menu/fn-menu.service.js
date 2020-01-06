/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class FnMenuService {
    constructor() {
        this.menuItemClick$ = new Subject();
        this.menuOpen$ = new BehaviorSubject(false);
    }
    /**
     * @param {?} menuId
     * @return {?}
     */
    navMenuClick(menuId) {
        /** @type {?} */
        const $this = $('#' + menuId);
        if ($this.parents('li').hasClass('active')) {
            $this.parent('li').children('li').removeClass('active');
            $this.siblings('ul').children('li').removeClass('active');
            $this.parent('li').siblings('li').removeClass('active');
            $this.parents('li').addClass('active');
            $this.parent('li').siblings('li').children('ul').slideUp();
            $this.siblings('ul').children('li').children('ul').slideUp();
            $this.siblings('ul').slideDown();
        }
        else {
            $('.side-bar-menu li').each((/**
             * @return {?}
             */
            function () {
                $(this).removeClass('active');
            }));
            $('.side-bar-menu li ul').slideUp();
            $this.parents('li').addClass('active');
            $this.siblings('ul').slideDown();
        }
    }
    /**
     * @param {?} menuId
     * @return {?}
     */
    onMenuItemClick(menuId) {
        this.menuItemClick$.next(menuId);
        this.navMenuClick(menuId);
    }
    /**
     * @return {?}
     */
    getMenuItemClick$() {
        return this.menuItemClick$;
    }
}
FnMenuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ FnMenuService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FnMenuService_Factory() { return new FnMenuService(); }, token: FnMenuService, providedIn: "root" });
if (false) {
    /** @type {?} */
    FnMenuService.prototype.menuItemClick$;
    /** @type {?} */
    FnMenuService.prototype.menuOpen$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbWVudS9mbi1tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBTWhELE1BQU0sT0FBTyxhQUFhO0lBSDFCO1FBS0ksbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBRXBDLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztLQStCbkQ7Ozs7O0lBN0JVLFlBQVksQ0FBQyxNQUFjOztjQUN4QixLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDN0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN4QyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFELEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzdELEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEM7YUFBTTtZQUNILENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUk7OztZQUFDO2dCQUN4QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQztJQUNMLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLE1BQWM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLENBQUM7OztZQXBDSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7Ozs7O0lBR0csdUNBQW9DOztJQUVwQyxrQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5kZWNsYXJlIHZhciAkO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbk1lbnVTZXJ2aWNlIHtcclxuXHJcbiAgICBtZW51SXRlbUNsaWNrJCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgICBtZW51T3BlbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBwdWJsaWMgbmF2TWVudUNsaWNrKG1lbnVJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKCcjJyArIG1lbnVJZCk7XHJcbiAgICAgICAgaWYgKCR0aGlzLnBhcmVudHMoJ2xpJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICR0aGlzLnBhcmVudCgnbGknKS5jaGlsZHJlbignbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCd1bCcpLmNoaWxkcmVuKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJHRoaXMucGFyZW50KCdsaScpLnNpYmxpbmdzKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJHRoaXMucGFyZW50cygnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICR0aGlzLnBhcmVudCgnbGknKS5zaWJsaW5ncygnbGknKS5jaGlsZHJlbigndWwnKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCd1bCcpLmNoaWxkcmVuKCdsaScpLmNoaWxkcmVuKCd1bCcpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgJHRoaXMuc2libGluZ3MoJ3VsJykuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLnNpZGUtYmFyLW1lbnUgbGknKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKCcuc2lkZS1iYXItbWVudSBsaSB1bCcpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgJHRoaXMucGFyZW50cygnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCd1bCcpLnNsaWRlRG93bigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1lbnVJdGVtQ2xpY2sobWVudUlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lbnVJdGVtQ2xpY2skLm5leHQobWVudUlkKTtcclxuICAgICAgICB0aGlzLm5hdk1lbnVDbGljayhtZW51SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1lbnVJdGVtQ2xpY2skKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lbnVJdGVtQ2xpY2skO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=