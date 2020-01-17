import { OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
export declare class FnCheckboxFilterItem {
    id: string;
    description: string;
    isSelected: boolean;
    childArray?: Array<FnCheckboxFilterItem>;
}
export declare class FnCheckboxFilterComponent implements OnInit, OnDestroy {
    isGrouping: boolean | string;
    listItemArray: Array<FnCheckboxFilterItem>;
    cbSelectedItem: EventEmitter<any>;
    $wClickSubscrption: Subscription;
    description: string;
    uiFilterArray: Array<FnCheckboxFilterItem>;
    searchInput: string;
    showDropDown: boolean;
    selectedMap: object;
    constructor();
    listenClick(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleSelect(toggelValue: boolean): void;
    refreshSearch(): void;
    selectAction(isSelectAll: boolean): void;
    selectParent(uiItem: FnCheckboxFilterItem): void;
    onSearch(): void;
    selectChildItem(childVal: FnCheckboxFilterItem, childParentId: string): void;
}
