import { OnDestroy } from '@angular/core';
import { FnMenuItemState } from '../fn-stores/models/fn-menu.state';
import { Store } from '@ngrx/store';
import { FnMenuService } from '../fn-menu.service';
export declare class FnMenuLandingComponent implements OnDestroy {
    private menuStore;
    private fnMenuService;
    activeMenuItem: FnMenuItemState;
    isLoaded: boolean;
    isCustMenu: boolean;
    private destroy$;
    constructor(menuStore: Store<FnMenuItemState>, fnMenuService: FnMenuService);
    loadSubMenuArrayForActiveMenuId(): void;
    menuClickHandler(menuItem: FnMenuItemState): void;
    ngOnDestroy(): void;
}
