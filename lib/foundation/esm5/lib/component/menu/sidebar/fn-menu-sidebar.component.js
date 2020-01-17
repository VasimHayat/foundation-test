/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Renderer2, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FnMenuService } from '../fn-menu.service';
import { Subscription, Subject } from 'rxjs';
import { getMenuItemMap, getMenuData } from '../fn-stores/reducer/fn-menu.reducer';
import { takeUntil } from 'rxjs/operators';
import { SetActiveMenuId } from '../fn-stores/actions/fn-menu.action';
import { Router } from '@angular/router';
var FnMenuSidebarComponent = /** @class */ (function () {
    function FnMenuSidebarComponent(fnMenuStore, fnMenuService, renderer, router) {
        this.fnMenuStore = fnMenuStore;
        this.fnMenuService = fnMenuService;
        this.renderer = renderer;
        this.router = router;
        this.fnClick = new EventEmitter();
        this.subscription = new Subscription();
        this.destroy$ = new Subject();
        this.sidebarHeight = '';
        this.isMenuLoded = false;
        this.SUB_MENU_LANDING_URL = 'zip/main';
        this.subscribeMenuData();
    }
    /**
     * @private
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.subscribeMenuData = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.fnMenuStore.pipe(takeUntil(this.destroy$), select(getMenuData)).subscribe((/**
         * @param {?} menuData
         * @return {?}
         */
        function (menuData) {
            _this.menuData = menuData;
            _this.isMenuLoded = true;
            _this.subscribeMenuItemMap();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.subscribeMenuItemMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.fnMenuStore.pipe(takeUntil(this.destroy$), select(getMenuItemMap)).subscribe((/**
         * @param {?} _menuItemMap
         * @return {?}
         */
        function (_menuItemMap) { return _this.menuItemMap = _menuItemMap; }));
    };
    /**
     * @private
     * @param {?} _url
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.navigateToUrl = /**
     * @private
     * @param {?} _url
     * @return {?}
     */
    function (_url) {
        if (_url === this.SUB_MENU_LANDING_URL) {
            _url += '/submenu';
        }
        this.router.navigateByUrl(_url);
    };
    /**
     * @private
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.menuClickSubscriber = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.fnMenuService.menuItemClick$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} menuId
         * @return {?}
         */
        function (menuId) {
            _this.fnMenuStore.dispatch(new SetActiveMenuId(menuId));
            _this.fnClick.emit(menuId);
            // this.menuItemMap.get(menuId)
            // todo routing help
            // console.log(this.menuItemMap[menuId]);
            _this.navigateToUrl(_this.menuItemMap[menuId].detail.url);
        }));
    };
    /**
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.menuClickSubscriber();
        this.calSidebarHeight();
    };
    /**
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.listenWindowResize();
    };
    /**
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.calSidebarHeight = /**
     * @return {?}
     */
    function () {
        // this.sidebarHeight = (window.innerHeight -56) + 'px';
    };
    /**
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.listenWindowResize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.renderer.listen(window, 'resize', (/**
         * @return {?}
         */
        function () {
            // TODO resizeing
            _this.calSidebarHeight();
        })));
    };
    /**
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    FnMenuSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-menu-sidebar',
                    template: "<aside>\r\n  <ul *ngIf=\"isMenuLoded\" class=\"navbar-nav mr-auto sidenav side-bar-menu\" id=\"navAccordion\"\r\n  [style.height]=\"sidebarHeight\" fn-menu-item [fnMenuItem]=\"menuData\">\r\n  </ul>\r\n</aside>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["@charset \"UTF-8\";:root{--side-nav-bg:$side-nav-bg;--nav-link-text:$nav-link-text;--nav-link-text-hover:$nav-link-text-hover;--active-nav-link-border:$active-nav-link-border;--active-nav-link-hover-bg:$active-nav-link-hover-bg;--nav-link-border:$nav-link-border;--nav-link-bg:$nav-link-bg;--nav-link-hover-color:$nav-link-hover-color;--nav-link-bg-color:$nav-link-bg-color}.bg-dark{background-color:#484d55!important}#navAccordion{background:var(--side-nav-bg)}#navAccordion .nav-link-collapse:after{float:right;content:\"\uF078\";font-family:FontAwesome;font-size:.9em}#navAccordion .nav-link-show:after{float:right;content:\"\uF077\";font-family:FontAwesome;font-size:.9em}#navAccordion .nav-item{cursor:pointer;width:300px}#navAccordion .nav-item .nav-link{border-left:2px solid transparent;font-size:13px;letter-spacing:.05em;padding:.7rem .8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:300px;color:var(--nav-link-text);opacity:.7;font-weight:300}#navAccordion .nav-item .nav-link:hover{color:var(--nav-link-text-hover);background-color:var(--active-nav-link-hover-bg);transition:.4s;opacity:1}#navAccordion .nav-item .nav-link img{height:21px;width:21px;margin-right:15px;margin-top:-3px}#navAccordion .nav-item .nav-link i{line-height:20px}#navAccordion .nav-item.active>.nav-link{border-left:2px solid var(--active-nav-link-border);background-color:var(--active-nav-link-hover-bg);opacity:1}#navAccordion .nav-item.active>.nav-sub{display:block}#navAccordion .nav-item>.nav-sub{margin:0;padding:0!important;display:none}#navAccordion .nav-item>.nav-sub>.nav-item .nav-link{padding-left:48px}#navAccordion .nav-item.nav-dropdown a i{line-height:23px}.nav-item ul.nav-second-level>.nav-item{padding-left:0}.nav-item ul.nav-second-level>.nav-item>.nav-link{padding-left:20px}.nav-item ul.nav-second-level{padding-left:0}.fixed-top{z-index:2!important}@media (min-width:720px){#navAccordion.sidenav{position:fixed;top:0;left:0;width:50px;height:calc(100vh - 50px);margin-top:50px;background:var(--side-nav-bg);box-sizing:border-box;overflow-x:hidden;transition:width .5s ease-in;z-index:2}.navbar-expand-lg #navAccordion.sidenav{flex-direction:column}}#navAccordion.sidenav:hover{width:300px}"]
                }] }
    ];
    /** @nocollapse */
    FnMenuSidebarComponent.ctorParameters = function () { return [
        { type: Store },
        { type: FnMenuService },
        { type: Renderer2 },
        { type: Router }
    ]; };
    FnMenuSidebarComponent.propDecorators = {
        fnClick: [{ type: Output }]
    };
    return FnMenuSidebarComponent;
}());
export { FnMenuSidebarComponent };
if (false) {
    /** @type {?} */
    FnMenuSidebarComponent.prototype.fnClick;
    /**
     * @type {?}
     * @private
     */
    FnMenuSidebarComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    FnMenuSidebarComponent.prototype.destroy$;
    /** @type {?} */
    FnMenuSidebarComponent.prototype.sidebarHeight;
    /** @type {?} */
    FnMenuSidebarComponent.prototype.isMenuLoded;
    /**
     * @type {?}
     * @private
     */
    FnMenuSidebarComponent.prototype.menuItemMap;
    /** @type {?} */
    FnMenuSidebarComponent.prototype.menuData;
    /**
     * @type {?}
     * @private
     */
    FnMenuSidebarComponent.prototype.SUB_MENU_LANDING_URL;
    /**
     * @type {?}
     * @private
     */
    FnMenuSidebarComponent.prototype.fnMenuStore;
    /**
     * @type {?}
     * @private
     */
    FnMenuSidebarComponent.prototype.fnMenuService;
    /**
     * @type {?}
     * @private
     */
    FnMenuSidebarComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FnMenuSidebarComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L21lbnUvc2lkZWJhci9mbi1tZW51LXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULFNBQVMsRUFFVCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFDLGNBQWMsRUFBRSxXQUFXLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUd2QztJQW9CRSxnQ0FDVSxXQUFtQyxFQUNuQyxhQUE0QixFQUM1QixRQUFtQixFQUNuQixNQUFjO1FBSGQsZ0JBQVcsR0FBWCxXQUFXLENBQXdCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWZMLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRWhELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxhQUFRLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDNUQsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDWixnQkFB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LFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0Isa09BQTZDO29CQUU3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBRXRDOzs7O2dCQWZPLEtBQUs7Z0JBQ0wsYUFBYTtnQkFSbkIsU0FBUztnQkFhSCxNQUFNOzs7MEJBWVgsTUFBTTs7SUEyRlQsNkJBQUM7Q0FBQSxBQXBHRCxJQW9HQztTQTdGWSxzQkFBc0I7OztJQUVqQyx5Q0FBd0Q7Ozs7O0lBRXhELDhDQUEwQzs7Ozs7SUFDMUMsMENBQTREOztJQUM1RCwrQ0FBbUI7O0lBQ25CLDZDQUEyQjs7Ozs7SUFDM0IsNkNBQTRCOztJQUM1QiwwQ0FBaUM7Ozs7O0lBQ2pDLHNEQUEwQzs7Ozs7SUFJeEMsNkNBQTJDOzs7OztJQUMzQywrQ0FBb0M7Ozs7O0lBQ3BDLDBDQUEyQjs7Ozs7SUFDM0Isd0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25EZXN0cm95LFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm5NZW51SXRlbVN0YXRlfSBmcm9tICcuLi9mbi1zdG9yZXMvbW9kZWxzL2ZuLW1lbnUuc3RhdGUnO1xyXG5pbXBvcnQge1N0b3JlLCBzZWxlY3R9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHtGbk1lbnVTZXJ2aWNlfSBmcm9tICcuLi9mbi1tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQge1N1YnNjcmlwdGlvbiwgU3ViamVjdH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7Z2V0TWVudUl0ZW1NYXAsIGdldE1lbnVEYXRhfSBmcm9tICcuLi9mbi1zdG9yZXMvcmVkdWNlci9mbi1tZW51LnJlZHVjZXInO1xyXG5pbXBvcnQge3Rha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1NldEFjdGl2ZU1lbnVJZH0gZnJvbSAnLi4vZm4tc3RvcmVzL2FjdGlvbnMvZm4tbWVudS5hY3Rpb24nO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZuLW1lbnUtc2lkZWJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdmbi1tZW51LXNpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydmbi1tZW51LXNpZGViYXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5NZW51U2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgT25Jbml0IHtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZuQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgc2lkZWJhckhlaWdodCA9ICcnO1xyXG4gIHB1YmxpYyBpc01lbnVMb2RlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgbWVudUl0ZW1NYXA6IG9iamVjdDtcclxuICBwdWJsaWMgbWVudURhdGE6IEZuTWVudUl0ZW1TdGF0ZTtcclxuICBwcml2YXRlIFNVQl9NRU5VX0xBTkRJTkdfVVJMID0gJ3ppcC9tYWluJztcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmbk1lbnVTdG9yZTogU3RvcmU8Rm5NZW51SXRlbVN0YXRlPixcclxuICAgIHByaXZhdGUgZm5NZW51U2VydmljZTogRm5NZW51U2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMuc3Vic2NyaWJlTWVudURhdGEoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZU1lbnVEYXRhKCkge1xyXG4gICAgdGhpcy5mbk1lbnVTdG9yZS5waXBlKFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgIHNlbGVjdChnZXRNZW51RGF0YSlcclxuICAgICkuc3Vic2NyaWJlKFxyXG4gICAgICBtZW51RGF0YSA9PiB7XHJcbiAgICAgICAgdGhpcy5tZW51RGF0YSA9IG1lbnVEYXRhO1xyXG4gICAgICAgIHRoaXMuaXNNZW51TG9kZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlTWVudUl0ZW1NYXAoKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlTWVudUl0ZW1NYXAoKSB7XHJcbiAgICB0aGlzLmZuTWVudVN0b3JlLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgc2VsZWN0KGdldE1lbnVJdGVtTWFwKVxyXG4gICAgKS5zdWJzY3JpYmUoXHJcbiAgICAgIF9tZW51SXRlbU1hcCA9PiB0aGlzLm1lbnVJdGVtTWFwID0gX21lbnVJdGVtTWFwXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBuYXZpZ2F0ZVRvVXJsKF91cmw6IHN0cmluZykge1xyXG4gICAgaWYgKF91cmwgPT09IHRoaXMuU1VCX01FTlVfTEFORElOR19VUkwpIHtcclxuICAgICAgX3VybCArPSAnL3N1Ym1lbnUnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChfdXJsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWVudUNsaWNrU3Vic2NyaWJlcigpIHtcclxuICAgIHRoaXMuZm5NZW51U2VydmljZS5tZW51SXRlbUNsaWNrJC5waXBlKFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICkuc3Vic2NyaWJlKFxyXG4gICAgICBtZW51SWQgPT4ge1xyXG4gICAgICAgIHRoaXMuZm5NZW51U3RvcmUuZGlzcGF0Y2gobmV3IFNldEFjdGl2ZU1lbnVJZChtZW51SWQpKTtcclxuICAgICAgICB0aGlzLmZuQ2xpY2suZW1pdChtZW51SWQpO1xyXG4gICAgICAgIC8vIHRoaXMubWVudUl0ZW1NYXAuZ2V0KG1lbnVJZClcclxuICAgICAgICAvLyB0b2RvIHJvdXRpbmcgaGVscFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubWVudUl0ZW1NYXBbbWVudUlkXSk7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvVXJsKHRoaXMubWVudUl0ZW1NYXBbbWVudUlkXS5kZXRhaWwudXJsKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5tZW51Q2xpY2tTdWJzY3JpYmVyKCk7XHJcbiAgICB0aGlzLmNhbFNpZGViYXJIZWlnaHQoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMubGlzdGVuV2luZG93UmVzaXplKCk7XHJcbiAgfVxyXG5cclxuICBjYWxTaWRlYmFySGVpZ2h0KCkge1xyXG4gICAgLy8gdGhpcy5zaWRlYmFySGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCAtNTYpICsgJ3B4JztcclxuICB9XHJcblxyXG4gIGxpc3RlbldpbmRvd1Jlc2l6ZSgpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZCh0aGlzLnJlbmRlcmVyLmxpc3Rlbih3aW5kb3csICdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgIC8vIFRPRE8gcmVzaXplaW5nXHJcbiAgICAgIHRoaXMuY2FsU2lkZWJhckhlaWdodCgpO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==