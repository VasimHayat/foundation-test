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
        if (_url == this.SUB_MENU_LANDING_URL) {
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
        //this.sidebarHeight = (window.innerHeight -56) + 'px';
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
                    template: "<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top bg-dark \">\r\n  <section style=\"width: 100%;height:100%\" class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n    <ul *ngIf=\"isMenuLoded\" class=\"navbar-nav mr-auto sidenav side-bar-menu\" id=\"navAccordion\" style=\"overflow:hidden\"\r\n      [style.height]=\"sidebarHeight\" fn-menu-item [fnMenuItem]=\"menuData\"></ul>\r\n  </section>\r\n</nav>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["@charset \"UTF-8\";.bg-dark{background:#484d55!important}.navbar{padding:inherit}#navAccordion .nav-link:hover{transition:.4s}#navAccordion .nav-link-collapse:after{float:right;content:\"\uF078\";font-family:FontAwesome;font-size:.9em}#navAccordion .nav-link-show:after{float:right;content:\"\uF077\";font-family:FontAwesome;font-size:.9em}@media (min-width:720px){#navAccordion.sidenav{position:absolute;top:0;left:0;width:48px;height:calc(100vh - 3.5rem);margin-top:3.5rem;background:#484d55;box-sizing:border-box;overflow-x:hidden}.navbar-expand-lg #navAccordion.sidenav{flex-direction:column}}#navAccordion.sidenav:hover{width:300px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L21lbnUvc2lkZWJhci9mbi1tZW51LnNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUErQixTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuSSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QztJQW9CSSxnQ0FBb0IsV0FBbUMsRUFDM0MsYUFBNEIsRUFDNUIsUUFBbUIsRUFDbkIsTUFBYztRQUhOLGdCQUFXLEdBQVgsV0FBVyxDQUF3QjtRQUMzQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFkUCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVoRCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsYUFBUSxHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBS3BELHlCQUFvQixHQUFHLFVBQVUsQ0FBQztRQU90QyxJ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QWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFFeEM7Ozs7Z0JBZlEsS0FBSztnQkFDTCxhQUFhO2dCQUgyQixTQUFTO2dCQVFqRCxNQUFNOzs7MEJBWVYsTUFBTTs7SUEwRlgsNkJBQUM7Q0FBQSxBQW5HRCxJQW1HQztTQTVGWSxzQkFBc0I7OztJQUUvQix5Q0FBd0Q7Ozs7O0lBRXhELDhDQUEwQzs7Ozs7SUFDMUMsMENBQTREOztJQUM1RCwrQ0FBc0I7O0lBQ3RCLDZDQUE0Qjs7Ozs7SUFDNUIsNkNBQTRCOztJQUM1QiwwQ0FBaUM7Ozs7O0lBQ2pDLHNEQUEwQzs7Ozs7SUFHOUIsNkNBQTJDOzs7OztJQUNuRCwrQ0FBb0M7Ozs7O0lBQ3BDLDBDQUEyQjs7Ozs7SUFDM0Isd0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQsIFJlbmRlcmVyMiwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm5NZW51SXRlbVN0YXRlIH0gZnJvbSAnLi4vZm4tc3RvcmVzL21vZGVscy9mbi1tZW51LnN0YXRlJztcclxuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgRm5NZW51U2VydmljZSB9IGZyb20gJy4uL2ZuLW1lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBnZXRNZW51SXRlbU1hcCwgZ2V0TWVudURhdGEgfSBmcm9tICcuLi9mbi1zdG9yZXMvcmVkdWNlci9mbi1tZW51LnJlZHVjZXInO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFNldEFjdGl2ZU1lbnVJZCB9IGZyb20gJy4uL2ZuLXN0b3Jlcy9hY3Rpb25zL2ZuLW1lbnUuYWN0aW9uJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZm4tbWVudS1zaWRlYmFyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnZm4tbWVudS5zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydmbi1tZW51LnNpZGViYXIuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbk1lbnVTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQge1xyXG5cclxuICAgIEBPdXRwdXQoKSByZWFkb25seSBmbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICAgIHNpZGViYXJIZWlnaHQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBpc01lbnVMb2RlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgbWVudUl0ZW1NYXA6IG9iamVjdDtcclxuICAgIHB1YmxpYyBtZW51RGF0YTogRm5NZW51SXRlbVN0YXRlO1xyXG4gICAgcHJpdmF0ZSBTVUJfTUVOVV9MQU5ESU5HX1VSTCA9ICd6aXAvbWFpbic7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZm5NZW51U3RvcmU6IFN0b3JlPEZuTWVudUl0ZW1TdGF0ZT4sXHJcbiAgICAgICAgcHJpdmF0ZSBmbk1lbnVTZXJ2aWNlOiBGbk1lbnVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVNZW51RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHN1YnNjcmliZU1lbnVEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuZm5NZW51U3RvcmUucGlwZShcclxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgICBzZWxlY3QoZ2V0TWVudURhdGEpXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIG1lbnVEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudURhdGEgPSBtZW51RGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNNZW51TG9kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVNZW51SXRlbU1hcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc3Vic2NyaWJlTWVudUl0ZW1NYXAoKSB7XHJcbiAgICAgICAgdGhpcy5mbk1lbnVTdG9yZS5waXBlKFxyXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgICAgIHNlbGVjdChnZXRNZW51SXRlbU1hcClcclxuICAgICAgICApLnN1YnNjcmliZShcclxuICAgICAgICAgICAgX21lbnVJdGVtTWFwID0+IHRoaXMubWVudUl0ZW1NYXAgPSBfbWVudUl0ZW1NYXBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmF2aWdhdGVUb1VybChfdXJsOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoX3VybCA9PSB0aGlzLlNVQl9NRU5VX0xBTkRJTkdfVVJMKSB7XHJcbiAgICAgICAgICAgIF91cmwgKz0gJy9zdWJtZW51JztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChfdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1lbnVDbGlja1N1YnNjcmliZXIoKSB7XHJcbiAgICAgICAgdGhpcy5mbk1lbnVTZXJ2aWNlLm1lbnVJdGVtQ2xpY2skLnBpcGUoXHJcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICAgICkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBtZW51SWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbk1lbnVTdG9yZS5kaXNwYXRjaChuZXcgU2V0QWN0aXZlTWVudUlkKG1lbnVJZCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbkNsaWNrLmVtaXQobWVudUlkKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubWVudUl0ZW1NYXAuZ2V0KG1lbnVJZClcclxuICAgICAgICAgICAgICAgIC8vIHRvZG8gcm91dGluZyBoZWxwXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1lbnVJdGVtTWFwW21lbnVJZF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvVXJsKHRoaXMubWVudUl0ZW1NYXBbbWVudUlkXS5kZXRhaWwudXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tZW51Q2xpY2tTdWJzY3JpYmVyKCk7XHJcbiAgICAgICAgdGhpcy5jYWxTaWRlYmFySGVpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgICAgIHRoaXMubGlzdGVuV2luZG93UmVzaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsU2lkZWJhckhlaWdodCgpIHtcclxuICAgICAgICAvL3RoaXMuc2lkZWJhckhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLTU2KSArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuV2luZG93UmVzaXplKCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZCh0aGlzLnJlbmRlcmVyLmxpc3Rlbih3aW5kb3csICdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gcmVzaXplaW5nXHJcbiAgICAgICAgICAgIHRoaXMuY2FsU2lkZWJhckhlaWdodCgpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19