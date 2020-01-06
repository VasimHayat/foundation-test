/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var FnMenuService = /** @class */ (function () {
    function FnMenuService() {
        this.menuItemClick$ = new Subject();
        this.menuOpen$ = new BehaviorSubject(false);
    }
    /**
     * @param {?} menuId
     * @return {?}
     */
    FnMenuService.prototype.navMenuClick = /**
     * @param {?} menuId
     * @return {?}
     */
    function (menuId) {
        /** @type {?} */
        var $this = $('#' + menuId);
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
    };
    /**
     * @param {?} menuId
     * @return {?}
     */
    FnMenuService.prototype.onMenuItemClick = /**
     * @param {?} menuId
     * @return {?}
     */
    function (menuId) {
        this.menuItemClick$.next(menuId);
        this.navMenuClick(menuId);
    };
    /**
     * @return {?}
     */
    FnMenuService.prototype.getMenuItemClick$ = /**
     * @return {?}
     */
    function () {
        return this.menuItemClick$;
    };
    FnMenuService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ FnMenuService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FnMenuService_Factory() { return new FnMenuService(); }, token: FnMenuService, providedIn: "root" });
    return FnMenuService;
}());
export { FnMenuService };
if (false) {
    /** @type {?} */
    FnMenuService.prototype.menuItemClick$;
    /** @type {?} */
    FnMenuService.prototype.menuOpen$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbWVudS9mbi1tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBR2hEO0lBQUE7UUFLSSxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFFcEMsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO0tBK0JuRDs7Ozs7SUE3QlUsb0NBQVk7Ozs7SUFBbkIsVUFBb0IsTUFBYzs7WUFDeEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQzdCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDeEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hELEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNELEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3RCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3BDO2FBQU07WUFDSCxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJOzs7WUFBQztnQkFDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsQyxDQUFDLEVBQUMsQ0FBQztZQUNILENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEM7SUFDTCxDQUFDOzs7OztJQUVELHVDQUFlOzs7O0lBQWYsVUFBZ0IsTUFBYztRQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCx5Q0FBaUI7OztJQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDOztnQkFwQ0osVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7O3dCQU5EO0NBMENDLEFBdENELElBc0NDO1NBbkNZLGFBQWE7OztJQUV0Qix1Q0FBb0M7O0lBRXBDLGtDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmRlY2xhcmUgdmFyICQ7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZuTWVudVNlcnZpY2Uge1xyXG5cclxuICAgIG1lbnVJdGVtQ2xpY2skID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG5cclxuICAgIG1lbnVPcGVuJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIHB1YmxpYyBuYXZNZW51Q2xpY2sobWVudUlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCAkdGhpcyA9ICQoJyMnICsgbWVudUlkKTtcclxuICAgICAgICBpZiAoJHRoaXMucGFyZW50cygnbGknKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgJHRoaXMucGFyZW50KCdsaScpLmNoaWxkcmVuKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJHRoaXMuc2libGluZ3MoJ3VsJykuY2hpbGRyZW4oJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkdGhpcy5wYXJlbnQoJ2xpJykuc2libGluZ3MoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkdGhpcy5wYXJlbnRzKCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJHRoaXMucGFyZW50KCdsaScpLnNpYmxpbmdzKCdsaScpLmNoaWxkcmVuKCd1bCcpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgJHRoaXMuc2libGluZ3MoJ3VsJykuY2hpbGRyZW4oJ2xpJykuY2hpbGRyZW4oJ3VsJykuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICAkdGhpcy5zaWJsaW5ncygndWwnKS5zbGlkZURvd24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuc2lkZS1iYXItbWVudSBsaScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJy5zaWRlLWJhci1tZW51IGxpIHVsJykuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICAkdGhpcy5wYXJlbnRzKCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJHRoaXMuc2libGluZ3MoJ3VsJykuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTWVudUl0ZW1DbGljayhtZW51SWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVudUl0ZW1DbGljayQubmV4dChtZW51SWQpO1xyXG4gICAgICAgIHRoaXMubmF2TWVudUNsaWNrKG1lbnVJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVudUl0ZW1DbGljayQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVudUl0ZW1DbGljayQ7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==