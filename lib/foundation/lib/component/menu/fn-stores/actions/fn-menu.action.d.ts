import { Action } from '@ngrx/store';
import { FnMenuItemState } from '../models/fn-menu.state';
export declare enum FnMenuActionType {
    InitMenuState = "[FnMenu] initialize Menu State",
    LoadMenuData = "[FnMenu] Load Menu Data",
    LoadMenuDataSucess = "[FnMenu] Load Success",
    LoadMenuDataError = "[FnMenu] Load Error",
    SetActiveMenuId = "[FnMenu] Set Active Menu ID"
}
export declare class InitMenuState implements Action {
    readonly type = FnMenuActionType.InitMenuState;
}
export declare class LoadMenuDataSucess implements Action {
    menuItemState: FnMenuItemState;
    menuItemMap: object;
    menuItemDetailMap: object;
    isMenuLoaded: boolean;
    readonly type = FnMenuActionType.LoadMenuDataSucess;
    constructor(menuItemState: FnMenuItemState, menuItemMap: object, menuItemDetailMap: object, isMenuLoaded: boolean);
}
export declare class LoadMenuData implements Action {
    payload: string;
    readonly type = FnMenuActionType.LoadMenuData;
    constructor(payload: string);
}
export declare class LoadMenuDataError implements Action {
    error: string;
    readonly type = FnMenuActionType.LoadMenuDataError;
    constructor(error: string);
}
export declare class SetActiveMenuId implements Action {
    activeMenuId: string;
    readonly type = FnMenuActionType.SetActiveMenuId;
    constructor(activeMenuId: string);
}
export declare type FnMenuActions = InitMenuState | LoadMenuDataSucess | LoadMenuData | LoadMenuDataError | SetActiveMenuId;
