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
        if (_url == this.SUB_MENU_LANDING_URL) {
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
            console.log(this.menuItemMap[menuId]);
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
        //this.sidebarHeight = (window.innerHeight -56) + 'px';
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
                template: "<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top bg-dark \">\r\n  <section style=\"width: 100%;height:100%\" class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n    <ul *ngIf=\"isMenuLoded\" class=\"navbar-nav mr-auto sidenav side-bar-menu\" id=\"navAccordion\" style=\"overflow:hidden\"\r\n      [style.height]=\"sidebarHeight\" fn-menu-item [fnMenuItem]=\"menuData\"></ul>\r\n  </section>\r\n</nav>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["@charset \"UTF-8\";.bg-dark{background:#484d55!important}.navbar{padding:inherit}#navAccordion .nav-link:hover{transition:.4s}#navAccordion .nav-link-collapse:after{float:right;content:\"\uF078\";font-family:FontAwesome;font-size:.9em}#navAccordion .nav-link-show:after{float:right;content:\"\uF077\";font-family:FontAwesome;font-size:.9em}@media (min-width:720px){#navAccordion.sidenav{position:absolute;top:0;left:0;width:48px;height:calc(100vh - 3.5rem);margin-top:3.5rem;background:#484d55;box-sizing:border-box;overflow-x:hidden}.navbar-expand-lg #navAccordion.sidenav{flex-direction:column}}#navAccordion.sidenav:hover{width:300px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L21lbnUvc2lkZWJhci9mbi1tZW51LnNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUErQixTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuSSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVV6QyxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7O0lBYS9CLFlBQW9CLFdBQW1DLEVBQzNDLGFBQTRCLEVBQzVCLFFBQW1CLEVBQ25CLE1BQWM7UUFITixnQkFBVyxHQUFYLFdBQVcsQ0FBd0I7UUFDM0Msa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBZFAsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFaEQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLGFBQVEsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUtwRCx5QkFBb0Is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ZlEsS0FBSztZQUNMLGFBQWE7WUFIMkIsU0FBUztZQVFqRCxNQUFNOzs7c0JBWVYsTUFBTTs7OztJQUFQLHlDQUF3RDs7Ozs7SUFFeEQsOENBQTBDOzs7OztJQUMxQywwQ0FBNEQ7O0lBQzVELCtDQUFzQjs7SUFDdEIsNkNBQTRCOzs7OztJQUM1Qiw2Q0FBNEI7O0lBQzVCLDBDQUFpQzs7Ozs7SUFDakMsc0RBQTBDOzs7OztJQUc5Qiw2Q0FBMkM7Ozs7O0lBQ25ELCtDQUFvQzs7Ozs7SUFDcEMsMENBQTJCOzs7OztJQUMzQix3Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgUmVuZGVyZXIyLCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGbk1lbnVJdGVtU3RhdGUgfSBmcm9tICcuLi9mbi1zdG9yZXMvbW9kZWxzL2ZuLW1lbnUuc3RhdGUnO1xyXG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBGbk1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vZm4tbWVudS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGdldE1lbnVJdGVtTWFwLCBnZXRNZW51RGF0YSB9IGZyb20gJy4uL2ZuLXN0b3Jlcy9yZWR1Y2VyL2ZuLW1lbnUucmVkdWNlcic7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU2V0QWN0aXZlTWVudUlkIH0gZnJvbSAnLi4vZm4tc3RvcmVzL2FjdGlvbnMvZm4tbWVudS5hY3Rpb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmbi1tZW51LXNpZGViYXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdmbi1tZW51LnNpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2ZuLW1lbnUuc2lkZWJhci5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEZuTWVudVNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCB7XHJcblxyXG4gICAgQE91dHB1dCgpIHJlYWRvbmx5IGZuQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICAgIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gICAgc2lkZWJhckhlaWdodDogc3RyaW5nO1xyXG4gICAgcHVibGljIGlzTWVudUxvZGVkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBtZW51SXRlbU1hcDogb2JqZWN0O1xyXG4gICAgcHVibGljIG1lbnVEYXRhOiBGbk1lbnVJdGVtU3RhdGU7XHJcbiAgICBwcml2YXRlIFNVQl9NRU5VX0xBTkRJTkdfVVJMID0gJ3ppcC9tYWluJztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmbk1lbnVTdG9yZTogU3RvcmU8Rm5NZW51SXRlbVN0YXRlPixcclxuICAgICAgICBwcml2YXRlIGZuTWVudVNlcnZpY2U6IEZuTWVudVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZU1lbnVEYXRhKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc3Vic2NyaWJlTWVudURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5mbk1lbnVTdG9yZS5waXBlKFxyXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgICAgIHNlbGVjdChnZXRNZW51RGF0YSlcclxuICAgICAgICApLnN1YnNjcmliZShcclxuICAgICAgICAgICAgbWVudURhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51RGF0YSA9IG1lbnVEYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01lbnVMb2RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZU1lbnVJdGVtTWFwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdWJzY3JpYmVNZW51SXRlbU1hcCgpIHtcclxuICAgICAgICB0aGlzLmZuTWVudVN0b3JlLnBpcGUoXHJcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgICAgc2VsZWN0KGdldE1lbnVJdGVtTWFwKVxyXG4gICAgICAgICkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBfbWVudUl0ZW1NYXAgPT4gdGhpcy5tZW51SXRlbU1hcCA9IF9tZW51SXRlbU1hcFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZVRvVXJsKF91cmw6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChfdXJsID09IHRoaXMuU1VCX01FTlVfTEFORElOR19VUkwpIHtcclxuICAgICAgICAgICAgX3VybCArPSAnL3N1Ym1lbnUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKF91cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWVudUNsaWNrU3Vic2NyaWJlcigpIHtcclxuICAgICAgICB0aGlzLmZuTWVudVNlcnZpY2UubWVudUl0ZW1DbGljayQucGlwZShcclxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIG1lbnVJZCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZuTWVudVN0b3JlLmRpc3BhdGNoKG5ldyBTZXRBY3RpdmVNZW51SWQobWVudUlkKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZuQ2xpY2suZW1pdChtZW51SWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tZW51SXRlbU1hcC5nZXQobWVudUlkKVxyXG4gICAgICAgICAgICAgICAgLy8gdG9kbyByb3V0aW5nIGhlbHBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVudUl0ZW1NYXBbbWVudUlkXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9VcmwodGhpcy5tZW51SXRlbU1hcFttZW51SWRdLmRldGFpbC51cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lbnVDbGlja1N1YnNjcmliZXIoKTtcclxuICAgICAgICB0aGlzLmNhbFNpZGViYXJIZWlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5XaW5kb3dSZXNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxTaWRlYmFySGVpZ2h0KCkge1xyXG4gICAgICAgIC8vdGhpcy5zaWRlYmFySGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCAtNTYpICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBsaXN0ZW5XaW5kb3dSZXNpemUoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKHRoaXMucmVuZGVyZXIubGlzdGVuKHdpbmRvdywgJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETyByZXNpemVpbmdcclxuICAgICAgICAgICAgdGhpcy5jYWxTaWRlYmFySGVpZ2h0KCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0=