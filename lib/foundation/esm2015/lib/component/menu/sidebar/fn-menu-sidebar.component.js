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
export class FnMenuSidebarComponent {
    /**
     * @param {?} fnMenuStore
     * @param {?} fnMenuService
     * @param {?} renderer
     * @param {?} router
     */
    constructor(fnMenuStore, fnMenuService, renderer, router) {
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
    subscribeMenuData() {
        this.fnMenuStore.pipe(takeUntil(this.destroy$), select(getMenuData)).subscribe((/**
         * @param {?} menuData
         * @return {?}
         */
        menuData => {
            this.menuData = menuData;
            this.isMenuLoded = true;
            this.subscribeMenuItemMap();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    subscribeMenuItemMap() {
        this.fnMenuStore.pipe(takeUntil(this.destroy$), select(getMenuItemMap)).subscribe((/**
         * @param {?} _menuItemMap
         * @return {?}
         */
        _menuItemMap => this.menuItemMap = _menuItemMap));
    }
    /**
     * @private
     * @param {?} _url
     * @return {?}
     */
    navigateToUrl(_url) {
        if (_url === this.SUB_MENU_LANDING_URL) {
            _url += '/submenu';
        }
        this.router.navigateByUrl(_url);
    }
    /**
     * @private
     * @return {?}
     */
    menuClickSubscriber() {
        this.fnMenuService.menuItemClick$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} menuId
         * @return {?}
         */
        menuId => {
            this.fnMenuStore.dispatch(new SetActiveMenuId(menuId));
            this.fnClick.emit(menuId);
            // this.menuItemMap.get(menuId)
            // todo routing help
            // console.log(this.menuItemMap[menuId]);
            this.navigateToUrl(this.menuItemMap[menuId].detail.url);
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.menuClickSubscriber();
        this.calSidebarHeight();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.listenWindowResize();
    }
    /**
     * @return {?}
     */
    calSidebarHeight() {
        // this.sidebarHeight = (window.innerHeight -56) + 'px';
    }
    /**
     * @return {?}
     */
    listenWindowResize() {
        this.subscription.add(this.renderer.listen(window, 'resize', (/**
         * @return {?}
         */
        () => {
            // TODO resizeing
            this.calSidebarHeight();
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
FnMenuSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-menu-sidebar',
                template: "<aside>\r\n  <ul *ngIf=\"isMenuLoded\" class=\"navbar-nav mr-auto sidenav side-bar-menu\" id=\"navAccordion\"\r\n  [style.height]=\"sidebarHeight\" fn-menu-item [fnMenuItem]=\"menuData\">\r\n  </ul>\r\n</aside>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["@charset \"UTF-8\";:root{--side-nav-bg:$side-nav-bg;--nav-link-text:$nav-link-text;--nav-link-text-hover:$nav-link-text-hover;--active-nav-link-border:$active-nav-link-border;--active-nav-link-hover-bg:$active-nav-link-hover-bg;--nav-link-border:$nav-link-border;--nav-link-bg:$nav-link-bg;--nav-link-hover-color:$nav-link-hover-color;--nav-link-bg-color:$nav-link-bg-color}.bg-dark{background-color:#484d55!important}#navAccordion{background:var(--side-nav-bg)}#navAccordion .nav-link-collapse:after{float:right;content:\"\uF078\";font-family:FontAwesome;font-size:.9em}#navAccordion .nav-link-show:after{float:right;content:\"\uF077\";font-family:FontAwesome;font-size:.9em}#navAccordion .nav-item{cursor:pointer;width:300px}#navAccordion .nav-item .nav-link{border-left:2px solid transparent;font-size:13px;letter-spacing:.05em;padding:.7rem .8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:300px;color:var(--nav-link-text);opacity:.7;font-weight:300}#navAccordion .nav-item .nav-link:hover{color:var(--nav-link-text-hover);background-color:var(--active-nav-link-hover-bg);transition:.4s;opacity:1}#navAccordion .nav-item .nav-link img{height:21px;width:21px;margin-right:15px;margin-top:-3px}#navAccordion .nav-item .nav-link i{line-height:20px}#navAccordion .nav-item.active>.nav-link{border-left:2px solid var(--active-nav-link-border);background-color:var(--active-nav-link-hover-bg);opacity:1}#navAccordion .nav-item.active>.nav-sub{display:block}#navAccordion .nav-item>.nav-sub{margin:0;padding:0!important;display:none}#navAccordion .nav-item>.nav-sub>.nav-item .nav-link{padding-left:48px}#navAccordion .nav-item.nav-dropdown a i{line-height:23px}.nav-item ul.nav-second-level>.nav-item{padding-left:0}.nav-item ul.nav-second-level>.nav-item>.nav-link{padding-left:20px}.nav-item ul.nav-second-level{padding-left:0}.fixed-top{z-index:2!important}@media (min-width:720px){#navAccordion.sidenav{position:fixed;top:0;left:0;width:50px;height:calc(100vh - 50px);margin-top:50px;background:var(--side-nav-bg);box-sizing:border-box;overflow-x:hidden;transition:width .5s ease-in;z-index:2}.navbar-expand-lg #navAccordion.sidenav{flex-direction:column}}#navAccordion.sidenav:hover{width:300px}"]
            }] }
];
/** @nocollapse */
FnMenuSidebarComponent.ctorParameters = () => [
    { type: Store },
    { type: FnMenuService },
    { type: Renderer2 },
    { type: Router }
];
FnMenuSidebarComponent.propDecorators = {
    fnClick: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L21lbnUvc2lkZWJhci9mbi1tZW51LXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULFNBQVMsRUFFVCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFDLGNBQWMsRUFBRSxXQUFXLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQVV2QyxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7O0lBYWpDLFlBQ1UsV0FBbUMsRUFDbkMsYUFBNEIsRUFDNUIsUUFBbUIsRUFDbkIsTUFBYztRQUhkLGdCQUFXLEdBQVgsV0FBVyxDQUF3QjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFmTCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVoRCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsYUFBUSxHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQzVELGtCQUFhLEdB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QWZPLEtBQUs7WUFDTCxhQUFhO1lBUm5CLFNBQVM7WUFhSCxNQUFNOzs7c0JBWVgsTUFBTTs7OztJQUFQLHlDQUF3RDs7Ozs7SUFFeEQsOENBQTBDOzs7OztJQUMxQywwQ0FBNEQ7O0lBQzVELCtDQUFtQjs7SUFDbkIsNkNBQTJCOzs7OztJQUMzQiw2Q0FBNEI7O0lBQzVCLDBDQUFpQzs7Ozs7SUFDakMsc0RBQTBDOzs7OztJQUl4Qyw2Q0FBMkM7Ozs7O0lBQzNDLCtDQUFvQzs7Ozs7SUFDcEMsMENBQTJCOzs7OztJQUMzQix3Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGbk1lbnVJdGVtU3RhdGV9IGZyb20gJy4uL2ZuLXN0b3Jlcy9tb2RlbHMvZm4tbWVudS5zdGF0ZSc7XHJcbmltcG9ydCB7U3RvcmUsIHNlbGVjdH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQge0ZuTWVudVNlcnZpY2V9IGZyb20gJy4uL2ZuLW1lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7U3Vic2NyaXB0aW9uLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtnZXRNZW51SXRlbU1hcCwgZ2V0TWVudURhdGF9IGZyb20gJy4uL2ZuLXN0b3Jlcy9yZWR1Y2VyL2ZuLW1lbnUucmVkdWNlcic7XHJcbmltcG9ydCB7dGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7U2V0QWN0aXZlTWVudUlkfSBmcm9tICcuLi9mbi1zdG9yZXMvYWN0aW9ucy9mbi1tZW51LmFjdGlvbic7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm4tbWVudS1zaWRlYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2ZuLW1lbnUtc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2ZuLW1lbnUtc2lkZWJhci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbk1lbnVTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQge1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZm5DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBzaWRlYmFySGVpZ2h0ID0gJyc7XHJcbiAgcHVibGljIGlzTWVudUxvZGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBtZW51SXRlbU1hcDogb2JqZWN0O1xyXG4gIHB1YmxpYyBtZW51RGF0YTogRm5NZW51SXRlbVN0YXRlO1xyXG4gIHByaXZhdGUgU1VCX01FTlVfTEFORElOR19VUkwgPSAnemlwL21haW4nO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZuTWVudVN0b3JlOiBTdG9yZTxGbk1lbnVJdGVtU3RhdGU+LFxyXG4gICAgcHJpdmF0ZSBmbk1lbnVTZXJ2aWNlOiBGbk1lbnVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy5zdWJzY3JpYmVNZW51RGF0YSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlTWVudURhdGEoKSB7XHJcbiAgICB0aGlzLmZuTWVudVN0b3JlLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgc2VsZWN0KGdldE1lbnVEYXRhKVxyXG4gICAgKS5zdWJzY3JpYmUoXHJcbiAgICAgIG1lbnVEYXRhID0+IHtcclxuICAgICAgICB0aGlzLm1lbnVEYXRhID0gbWVudURhdGE7XHJcbiAgICAgICAgdGhpcy5pc01lbnVMb2RlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVNZW51SXRlbU1hcCgpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVNZW51SXRlbU1hcCgpIHtcclxuICAgIHRoaXMuZm5NZW51U3RvcmUucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICBzZWxlY3QoZ2V0TWVudUl0ZW1NYXApXHJcbiAgICApLnN1YnNjcmliZShcclxuICAgICAgX21lbnVJdGVtTWFwID0+IHRoaXMubWVudUl0ZW1NYXAgPSBfbWVudUl0ZW1NYXBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5hdmlnYXRlVG9VcmwoX3VybDogc3RyaW5nKSB7XHJcbiAgICBpZiAoX3VybCA9PT0gdGhpcy5TVUJfTUVOVV9MQU5ESU5HX1VSTCkge1xyXG4gICAgICBfdXJsICs9ICcvc3VibWVudSc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKF91cmwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtZW51Q2xpY2tTdWJzY3JpYmVyKCkge1xyXG4gICAgdGhpcy5mbk1lbnVTZXJ2aWNlLm1lbnVJdGVtQ2xpY2skLnBpcGUoXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgKS5zdWJzY3JpYmUoXHJcbiAgICAgIG1lbnVJZCA9PiB7XHJcbiAgICAgICAgdGhpcy5mbk1lbnVTdG9yZS5kaXNwYXRjaChuZXcgU2V0QWN0aXZlTWVudUlkKG1lbnVJZCkpO1xyXG4gICAgICAgIHRoaXMuZm5DbGljay5lbWl0KG1lbnVJZCk7XHJcbiAgICAgICAgLy8gdGhpcy5tZW51SXRlbU1hcC5nZXQobWVudUlkKVxyXG4gICAgICAgIC8vIHRvZG8gcm91dGluZyBoZWxwXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tZW51SXRlbU1hcFttZW51SWRdKTtcclxuICAgICAgICB0aGlzLm5hdmlnYXRlVG9VcmwodGhpcy5tZW51SXRlbU1hcFttZW51SWRdLmRldGFpbC51cmwpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1lbnVDbGlja1N1YnNjcmliZXIoKTtcclxuICAgIHRoaXMuY2FsU2lkZWJhckhlaWdodCgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5saXN0ZW5XaW5kb3dSZXNpemUoKTtcclxuICB9XHJcblxyXG4gIGNhbFNpZGViYXJIZWlnaHQoKSB7XHJcbiAgICAvLyB0aGlzLnNpZGViYXJIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC01NikgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgbGlzdGVuV2luZG93UmVzaXplKCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKHRoaXMucmVuZGVyZXIubGlzdGVuKHdpbmRvdywgJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgLy8gVE9ETyByZXNpemVpbmdcclxuICAgICAgdGhpcy5jYWxTaWRlYmFySGVpZ2h0KCk7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19