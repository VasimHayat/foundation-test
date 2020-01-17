/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { fnDom } from '../../util/dom';
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
        const $this = fnDom('#' + menuId);
        if ($this.parents('li').hasClass('active')) {
            $this.parent('li').children('li').removeClass('active');
            $this.siblings('ul').children('li').removeClass('active');
            $this.parent('li').siblings('li').removeClass('active');
            $this.parents('li').addClass('active');
            // $this.parent('li').siblings('li').children('ul').slideUp();
            // $this.siblings('ul').children('li').children('ul').slideUp();
            // $this.siblings('ul').slideDown();
        }
        else {
            fnDom('.side-bar-menu li').each((/**
             * @param {?} node
             * @return {?}
             */
            (node) => {
                fnDom(node).removeClass('active');
            }));
            //  $('.side-bar-menu li ul').slideUp();
            $this.parents('li').addClass('active');
            // $this.siblings('ul').slideDown();
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
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    FnMenuService.prototype.menuItemClick$;
    /** @type {?} */
    FnMenuService.prototype.menuOpen$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbWVudS9mbi1tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXZDLE1BQU0sT0FBTyxhQUFhO0lBRDFCO1FBR0UsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3BDLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQStCbEQsQ0FBQzs7Ozs7SUE3QlEsWUFBWSxDQUFDLE1BQWM7O2NBQzFCLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNqQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hELEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZDLDhEQUE4RDtZQUM5RCxnRUFBZ0U7WUFDaEUsb0NBQW9DO1NBQ3JDO2FBQU07WUFDTCxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwQyxDQUFDLEVBQUMsQ0FBQztZQUNILHdDQUF3QztZQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxvQ0FBb0M7U0FDckM7SUFDSCxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxNQUFjO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7WUFqQ0YsVUFBVTs7OztJQUdULHVDQUFvQzs7SUFDcEMsa0NBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZm5Eb20gfSBmcm9tICcuLi8uLi91dGlsL2RvbSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm5NZW51U2VydmljZSB7XHJcblxyXG4gIG1lbnVJdGVtQ2xpY2skID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIG1lbnVPcGVuJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBwdWJsaWMgbmF2TWVudUNsaWNrKG1lbnVJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCAkdGhpcyA9IGZuRG9tKCcjJyArIG1lbnVJZCk7XHJcbiAgICBpZiAoJHRoaXMucGFyZW50cygnbGknKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgJHRoaXMucGFyZW50KCdsaScpLmNoaWxkcmVuKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJHRoaXMuc2libGluZ3MoJ3VsJykuY2hpbGRyZW4oJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkdGhpcy5wYXJlbnQoJ2xpJykuc2libGluZ3MoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkdGhpcy5wYXJlbnRzKCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgLy8gJHRoaXMucGFyZW50KCdsaScpLnNpYmxpbmdzKCdsaScpLmNoaWxkcmVuKCd1bCcpLnNsaWRlVXAoKTtcclxuICAgICAgLy8gJHRoaXMuc2libGluZ3MoJ3VsJykuY2hpbGRyZW4oJ2xpJykuY2hpbGRyZW4oJ3VsJykuc2xpZGVVcCgpO1xyXG4gICAgICAvLyAkdGhpcy5zaWJsaW5ncygndWwnKS5zbGlkZURvd24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZuRG9tKCcuc2lkZS1iYXItbWVudSBsaScpLmVhY2goKG5vZGU6IGFueSkgPT4ge1xyXG4gICAgICAgIGZuRG9tKG5vZGUpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vICAkKCcuc2lkZS1iYXItbWVudSBsaSB1bCcpLnNsaWRlVXAoKTtcclxuICAgICAgJHRoaXMucGFyZW50cygnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIC8vICR0aGlzLnNpYmxpbmdzKCd1bCcpLnNsaWRlRG93bigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25NZW51SXRlbUNsaWNrKG1lbnVJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLm1lbnVJdGVtQ2xpY2skLm5leHQobWVudUlkKTtcclxuICAgIHRoaXMubmF2TWVudUNsaWNrKG1lbnVJZCk7XHJcbiAgfVxyXG5cclxuICBnZXRNZW51SXRlbUNsaWNrJCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1lbnVJdGVtQ2xpY2skO1xyXG4gIH1cclxuXHJcbn1cclxuIl19