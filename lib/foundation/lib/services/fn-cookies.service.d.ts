import { InjectionToken } from '@angular/core';
export declare class FnCookieService {
    private document;
    private platformId;
    private readonly documentIsAccessible;
    constructor(document: any, platformId: InjectionToken<object>);
    check(name: string): boolean;
    get(name: string): string;
    getAll(): {};
    set(name: string, value: string, expires?: number | Date, path?: string, domain?: string, secure?: boolean, sameSite?: 'Lax' | 'Strict'): void;
    delete(name: string, path?: string, domain?: string): void;
    deleteAll(path?: string, domain?: string): void;
    private getCookieRegExp;
}
