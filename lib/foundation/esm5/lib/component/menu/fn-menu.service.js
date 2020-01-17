/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { fnDom } from '../../util/dom';
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
        var $this = fnDom('#' + menuId);
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
            function (node) {
                fnDom(node).removeClass('active');
            }));
            //  $('.side-bar-menu li ul').slideUp();
            $this.parents('li').addClass('active');
            // $this.siblings('ul').slideDown();
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
        { type: Injectable }
    ];
    return FnMenuService;
}());
export { FnMenuService };
if (false) {
    /** @type {?} */
    FnMenuService.prototype.menuItemClick$;
    /** @type {?} */
    FnMenuService.prototype.menuOpen$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbWVudS9mbi1tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZDO0lBQUE7UUFHRSxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDcEMsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBK0JsRCxDQUFDOzs7OztJQTdCUSxvQ0FBWTs7OztJQUFuQixVQUFvQixNQUFjOztZQUMxQixLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDakMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMxQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFELEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2Qyw4REFBOEQ7WUFDOUQsZ0VBQWdFO1lBQ2hFLG9DQUFvQztTQUNyQzthQUFNO1lBQ0wsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsSUFBUztnQkFDeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwQyxDQUFDLEVBQUMsQ0FBQztZQUNILHdDQUF3QztZQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxvQ0FBb0M7U0FDckM7SUFDSCxDQUFDOzs7OztJQUVELHVDQUFlOzs7O0lBQWYsVUFBZ0IsTUFBYztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCx5Q0FBaUI7OztJQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOztnQkFqQ0YsVUFBVTs7SUFtQ1gsb0JBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQWxDWSxhQUFhOzs7SUFFeEIsdUNBQW9DOztJQUNwQyxrQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmbkRvbSB9IGZyb20gJy4uLy4uL3V0aWwvZG9tJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGbk1lbnVTZXJ2aWNlIHtcclxuXHJcbiAgbWVudUl0ZW1DbGljayQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgbWVudU9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIHB1YmxpYyBuYXZNZW51Q2xpY2sobWVudUlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0ICR0aGlzID0gZm5Eb20oJyMnICsgbWVudUlkKTtcclxuICAgIGlmICgkdGhpcy5wYXJlbnRzKCdsaScpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAkdGhpcy5wYXJlbnQoJ2xpJykuY2hpbGRyZW4oJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkdGhpcy5zaWJsaW5ncygndWwnKS5jaGlsZHJlbignbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICR0aGlzLnBhcmVudCgnbGknKS5zaWJsaW5ncygnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICR0aGlzLnBhcmVudHMoJ2xpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAvLyAkdGhpcy5wYXJlbnQoJ2xpJykuc2libGluZ3MoJ2xpJykuY2hpbGRyZW4oJ3VsJykuc2xpZGVVcCgpO1xyXG4gICAgICAvLyAkdGhpcy5zaWJsaW5ncygndWwnKS5jaGlsZHJlbignbGknKS5jaGlsZHJlbigndWwnKS5zbGlkZVVwKCk7XHJcbiAgICAgIC8vICR0aGlzLnNpYmxpbmdzKCd1bCcpLnNsaWRlRG93bigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm5Eb20oJy5zaWRlLWJhci1tZW51IGxpJykuZWFjaCgobm9kZTogYW55KSA9PiB7XHJcbiAgICAgICAgZm5Eb20obm9kZSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gICQoJy5zaWRlLWJhci1tZW51IGxpIHVsJykuc2xpZGVVcCgpO1xyXG4gICAgICAkdGhpcy5wYXJlbnRzKCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgLy8gJHRoaXMuc2libGluZ3MoJ3VsJykuc2xpZGVEb3duKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk1lbnVJdGVtQ2xpY2sobWVudUlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubWVudUl0ZW1DbGljayQubmV4dChtZW51SWQpO1xyXG4gICAgdGhpcy5uYXZNZW51Q2xpY2sobWVudUlkKTtcclxuICB9XHJcblxyXG4gIGdldE1lbnVJdGVtQ2xpY2skKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWVudUl0ZW1DbGljayQ7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=