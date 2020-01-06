export interface FnMenuItemState {
    id: string;
    menuItemArray: FnMenuItemState[];
    isEnableOnUI: boolean;
    labelIDArray: string[];
    showBreadcrum: boolean;
    isActive: boolean;
    textColor: string;
    parentID: string;
    isWalkthruConfigured: boolean;
    menuItemIDArray: string[];
    showDropIcon: boolean;
    hrefClass: string;
    name: string;
    recalAccess: boolean;
    isCustomMenu: boolean;
    applicablePK: number;
    isDisabled: boolean;
    hideLabel: boolean;
    smallIcon?: string;
    menuType?: string;
    helpTextLBL?: string;
    customIcon?: string;
    bigIcon?: string;
}
export declare const DEFAULT_MENU_STATE: {
    id: string;
    menuItemArray: any[];
    isEnableOnUI: boolean;
    labelIDArray: any[];
    showBreadcrum: boolean;
    isActive: boolean;
    textColor: string;
    parentID: string;
    isWalkthruConfigured: boolean;
    menuItemIDArray: any[];
    showDropIcon: boolean;
    hrefClass: string;
    name: string;
    recalAccess: boolean;
    isCustomMenu: boolean;
    applicablePK: number;
    isDisabled: boolean;
    hideLabel: boolean;
};
export interface FnMenuState {
    activeMenuId: string;
    menuData: FnMenuItemState;
    menuItemDetailMap: object;
    menuItemMap: object;
    error: string;
    isMenuLoaded: boolean;
}
