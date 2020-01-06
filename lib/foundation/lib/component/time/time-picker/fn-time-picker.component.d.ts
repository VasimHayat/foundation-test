import { OnInit } from '@angular/core';
import { FnTimepickerService } from './../services/timepicker.service';
export declare class FnTimePickerComponent implements OnInit {
    private timePickerSvcs;
    index: number;
    placeHolder: string;
    isMilitryTime: boolean;
    mainItemArray: any[];
    uiItemArray: any[];
    searchTerm: string;
    showDropDown: boolean;
    activeItem: number;
    constructor(timePickerSvcs: FnTimepickerService);
    ngOnInit(): void;
    filterValue(event: KeyboardEvent): void;
    onItemClick(indexVal: string): void;
    closeDropDown(): void;
    clickEvent(event: KeyboardEvent): void;
    keydownEvent(event: KeyboardEvent): void;
}
