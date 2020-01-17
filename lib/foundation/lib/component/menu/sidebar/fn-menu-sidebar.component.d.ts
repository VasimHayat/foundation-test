import { OnDestroy, AfterContentInit, Renderer2, OnInit, EventEmitter } from '@angular/core';
import { FnMenuItemState } from '../fn-stores/models/fn-menu.state';
import { Store } from '@ngrx/store';
import { FnMenuService } from '../fn-menu.service';
import { Router } from '@angular/router';
export declare class FnMenuSidebarComponent implements OnDestroy, AfterContentInit, OnInit {
    private fnMenuStore;
    private fnMenuService;
    private renderer;
    private router;
    readonly fnClick: EventEmitter<string>;
    private subscription;
    private destroy$;
    sidebarHeight: string;
    isMenuLoded: boolean;
    private menuItemMap;
    menuData: FnMenuItemState;
    private SUB_MENU_LANDING_URL;
    constructor(fnMenuStore: Store<FnMenuItemState>, fnMenuService: FnMenuService, renderer: Renderer2, router: Router);
    private subscribeMenuData;
    private subscribeMenuItemMap;
    private navigateToUrl;
    private menuClickSubscriber;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    calSidebarHeight(): void;
    listenWindowResize(): void;
    ngOnDestroy(): void;
}
