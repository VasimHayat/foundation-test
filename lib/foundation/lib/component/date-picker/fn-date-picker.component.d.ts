import { OnInit, EventEmitter } from '@angular/core';
export declare class FnDatePickerComponent implements OnInit {
    currentDate: Date;
    globalConfig: FnDateConfig;
    isDisable: boolean;
    format: string;
    selectedDate: Date;
    customClass: string;
    callback: EventEmitter<any>;
    nextDisabledCallback: EventEmitter<any>;
    prevDisabledCallback: EventEmitter<any>;
    nextPrevCallback: EventEmitter<any>;
    dateDisabled: EventEmitter<any>;
    startView: string;
    ngOnInit(): void;
    getFormattedDate(): string;
    getDateObj(): Date;
    setDate(): void;
    nextPrevHandler(isNext: boolean): void;
    nextDisable(): boolean;
    prevDisable(): boolean;
    setDateModel(date: Date): void;
    datePickerFilter: (date: Date) => boolean;
    getNextDate(noOfNavDay: number): Date;
    getPrevDate(noOfNavDay: number): Date;
    getNextMonth(): Date;
    getPrevMonth(): Date;
    _monthSelectedHandler(event: any, datePicker: any): void;
    initGlbConfig(configHash: FnDateConfig): FnDateConfig;
}
export declare class FnDateConfig {
    minDate: Date;
    maxDate: Date;
    navigation: string;
    startingDay: number;
    displayMonths: number;
    isAutoHandler: boolean;
    isFutureDisable: boolean;
    noOfNavDay: number;
    disabledDate: Date;
    isMonthView: boolean;
    type: any;
}
