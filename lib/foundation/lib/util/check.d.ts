export interface IndexableObject {
    [key: string]: any;
}
export declare function typeofUndefined(value: any): boolean;
export declare function typeofObject(value: any): boolean;
export declare function typeofString(value: any): boolean;
export declare function typeofBoolean(value: any): boolean;
export declare function typeofNumber(value: any): boolean;
export declare function typeofFunction(value: any): boolean;
export declare function typeofArray(value: any): boolean;
export declare function isFloat(num: any): boolean;
export declare function isInt(num: number): boolean;
export declare function isString(value: any): boolean;
export declare function isNotNull(value: any): boolean;
export declare function isNull(value: any): boolean;
export declare function isEmptyString(value: any): boolean;
export declare function isNonEmptyString(value: any): boolean;
export declare function isEmptyObject(obj: object): boolean;
export declare function isInteger(value: string | number): boolean;
/**
 * Examine if two objects are shallowly equaled.
 */
export declare function shallowEqual(objA?: IndexableObject, objB?: IndexableObject): boolean;
