export declare class FnDateFormatter {
    format(d?: Date, pattern?: any, langId?: any): string;
    weekFullEn: any;
    weekJp: any;
    monthFullEn: any;
    monthOldJp: any;
    dateSuffix: any;
    preZero(value: any): any;
    from24to12(hours: any): any;
    ampm(hours: any): "am" | "pm";
    ap(hours: any): "a" | "p";
    isoDay(day: any): any;
    lastDayOfMonth(dateObj: any): number;
    isLeapYear(year: any): "0" | "1";
    dateCount(year: any, month: any, date: any): any;
    getMonthAbbrInLocal(lngIID: any, month: any): any;
    getMonthInLocal(lngIID: any, month: any): any;
    getDayInLocal(lngIID: any, day: any): any;
    weekFullInLocal(langId: any, dayIndex: any): any;
    getDayInShortLocal(lngIID: any, day: any): any;
}
