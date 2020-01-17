import { OnInit } from '@angular/core';
import { FnTimepickerService } from '../services/timepicker.service';
export declare class FnMultiTimePickerComponent implements OnInit {
    private service;
    startIndex: number;
    lastIndex: number;
    placeHolder: string;
    isMilitryTime: boolean;
    timeStoredArray: any[];
    uiItemArray: any[];
    nonMilitryHourArray: string[];
    nonMilitryMinuteArray: string[];
    militryHourArray: string[];
    militryMinuteArray: string[];
    showDropDown: boolean;
    checkEmpty: boolean;
    activeIndex: number;
    searchTerm: string;
    splitTimeVal: Array<string>;
    selectIndex: number;
    private KEY_CODES;
    constructor(service: FnTimepickerService);
    ngOnInit(): void;
    filterValue(event: KeyboardEvent): void;
    onItemClick(param: string): void;
    closeDropDown(): void;
    openDropDown(event: any): void;
    keyDownChange(event: KeyboardEvent): void;
}
