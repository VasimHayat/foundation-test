/**
 * Vasim Hayat @ 1/24/2018
 */
import { DatePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { FnDate } from '../util/types';
export declare class FnUtilService {
    private dateFormatter;
    private sanitizer;
    constructor(dateFormatter: DatePipe, sanitizer: DomSanitizer);
    transform(value: any, format?: string, timezone?: string, locale?: string): string | null;
    compileHtml(htmlStr: any): import("@angular/platform-browser").SafeHtml;
    convertHtmlToString(htmlStr: any): string;
    sortArray(objectArray: Array<any>, key: string, isDesc?: boolean): any[];
    getWeek(busiDate: any): number;
    getDateByIndex(index: number, dateOb: FnDate, isFirstDay: boolean, isLastDay?: boolean): Date;
    getWeekDiff(startIndex: number, startDate: FnDate, endDate: FnDate): number;
    getWeekArrayForDates(_startIndex: number, _startDate: FnDate, _endDate: FnDate): Array<Date>;
    getWeekArray(startDate: FnDate, noOfWeek: number): Array<Date>;
    getWeekArrayOnIndex(index: number, dateOb: any, isFirstDay: any, isLastDay: any): any[] | Date;
    currencyFormatter(val: any, currencyString?: any): string;
    currencyRgxFormat(n: number, currency: any, fixedDecimal: any): string;
    rgb2hex: (rgb: string) => string;
    isEmptyObject: (_value: any) => boolean;
    sortOrderingComparator: (fields: object[], isIgnoreCase?: boolean) => (a: object, b: object) => number;
    sortObjectOnKeys: (objArray: object[], sortKeyStr: string, isIgnoreCase?: boolean) => object[];
    toStringVal: (objVal: object) => string;
    reverseString: (strVal: string) => string;
    reverse: (objVal: object) => string | object[];
    getSumOnKey: (objArray: object[], key: string) => number;
    mapFromArray: <T>(_array: T[], _key: string, isLowercase?: boolean) => {};
    mapFromArrayOnInnerKey: (objArray: object[], outerKey: string, innerKey: string) => {};
    mapFromTwoLevelArray: (objArray: object[], relArrayKey: string, relKey: string) => {};
    mapFromTwoLevelHash: (objArray: object[], keyName: string, relArraykey: string, relKey: string) => {};
    mapFromArrayWithRel: (objArray: object[], key: string, relArrayKey: string, relKey: string) => {};
    getStringOfObjectOnKey: (objectVal: object, skipKey?: boolean, keyArray?: string[]) => string;
    filterArray: (inputArray: object[], searchTerm: string, skipFilterKey?: boolean, filterKeyStr?: string) => object[];
    replaceAll(stringObj: string, inputStr: string, outPutStr: string, ignore?: boolean): string;
    mapFromArrayOfArrayObjects(object: object, arrayObject: Array<object>, keyName: string, arrayName: string): void;
    copy(object: object): any;
    toBoolean(bolStr: any): boolean;
    arrayFromMap(objectMap: object): any[];
    arrayFromArrayOfMap(objectArray: Array<object>, key: string): any[];
    singleKeyArrayFromMap(arrayObject: Array<object>, keyName: string): any[];
    altaFormatter(val: any, prefix: any, decimalValStrength: any, suffix: any): {
        value: string;
        oldvalue: string;
        formatcalling: any;
        noformat: any;
    };
    format(value: any, IID: string, countryFormat?: string): {
        value: string;
        oldvalue: string;
        formatcalling: any;
        noformat: any;
    };
    mergeHash(destination: any, src: any): any;
    getSumOnTheBasisOfKey(arrayObject: any, key1: any, key2: any): number;
    getSimpleHash(arrayOfObject: any): {};
    countOccurence(stringvalue: any, charvalue: string): any;
    replaceDotToUnderscore(value: any): any;
    checkCollectionLength(obj: any): any;
    hashFromArrayWithRd(arrayObjects: Array<any>, keyName: string): {};
    formatShiftTime(time: any, shift: any): void;
    getIndexWithTwoKeys(array: Array<any>, firstKey: string, firstValue: any, secondKey: string, secondVal: any): number;
    getIndexIfObjWithAttr(array: Array<any>, attr: any, value: any): number;
    isValidObjects(obj1: any, obj2: any): boolean;
    isSameObjects(hashObject1: any, hashObject2: any): boolean;
    copyObject(obj: any): any;
    objectEquals(x: any, y: any): any;
    dummyArrayOfLength(length: number): any[];
    getCleanXML(str: string): string;
    replaceStringAt(sourceStr: string, sIndex: number, endIndex: number, toString: any): string;
    mergeObject(destObj: any, sourceObj: any): any;
    isNumberStr(numStr: any): any;
    isIntegerNumber(): RegExp;
    stringSortArray(arrayObject: any, keyName: string, isReverse?: boolean): any;
    setDifference(array1: Array<any>, array2: Array<any>, key: string): any[];
    inetersection(array1: Array<any>, array2: Array<any>, key: string): any[];
    getBoolValue(bool: any): boolean;
    syncLoop(iterations: any, doProcess: any, exit: any): {
        next(): any;
        iteration(): number;
        break(end: any): void;
    };
}
