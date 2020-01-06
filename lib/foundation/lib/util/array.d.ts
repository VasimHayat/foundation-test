export declare function toArray<T>(value: T | T[]): T[];
export declare function arraysEqual<T>(array1: T[], array2: T[]): boolean;
export declare function shallowCopyArray<T>(source: T[]): T[];
export declare function compare(key: any, isDesc: boolean): (x: any, y: any) => number;
export declare function sortArray(objectArray: Array<any>, key: string, isDesc?: boolean): any[];
