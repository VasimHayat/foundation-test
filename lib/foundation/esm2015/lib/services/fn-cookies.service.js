/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// This service is based on ngx cookies
// Package: https://www.npmjs.com/package/ngx-cookie-service
import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
export class FnCookieService {
    /**
     * @param {?} document
     * @param {?} platformId
     */
    constructor(document, platformId) {
        this.document = document;
        this.platformId = platformId;
        this.documentIsAccessible = isPlatformBrowser(this.platformId);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    check(name) {
        if (!this.documentIsAccessible) {
            return false;
        }
        name = encodeURIComponent(name);
        /** @type {?} */
        const regExp = this.getCookieRegExp(name);
        /** @type {?} */
        const exists = regExp.test(this.document.cookie);
        return exists;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        if (this.documentIsAccessible && this.check(name)) {
            name = encodeURIComponent(name);
            /** @type {?} */
            const regExp = this.getCookieRegExp(name);
            /** @type {?} */
            const result = regExp.exec(this.document.cookie);
            return decodeURIComponent(result[1]);
        }
        else {
            return '';
        }
    }
    /**
     * @return {?}
     */
    getAll() {
        if (!this.documentIsAccessible) {
            return {};
        }
        /** @type {?} */
        const cookies = {};
        /** @type {?} */
        const document = this.document;
        if (document.cookie && document.cookie !== '') {
            /** @type {?} */
            const split = document.cookie.split(';');
            for (let i = 0; i < split.length; i += 1) {
                /** @type {?} */
                const currentCookie = split[i].split('=');
                currentCookie[0] = currentCookie[0].replace(/^ /, '');
                cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
            }
        }
        return cookies;
    }
    /**
     * @param {?} name
     * @param {?} value
     * @param {?=} expires
     * @param {?=} path
     * @param {?=} domain
     * @param {?=} secure
     * @param {?=} sameSite
     * @return {?}
     */
    set(name, value, expires, path, domain, secure, sameSite) {
        if (!this.documentIsAccessible) {
            return;
        }
        /** @type {?} */
        let cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
        if (expires) {
            if (typeof expires === 'number') {
                /** @type {?} */
                const dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                cookieString += 'expires=' + dateExpires.toUTCString() + ';';
            }
            else {
                cookieString += 'expires=' + expires.toUTCString() + ';';
            }
        }
        if (path) {
            cookieString += 'path=' + path + ';';
        }
        if (domain) {
            cookieString += 'domain=' + domain + ';';
        }
        if (secure) {
            cookieString += 'secure;';
        }
        if (sameSite) {
            cookieString += 'sameSite=' + sameSite + ';';
        }
        this.document.cookie = cookieString;
    }
    /**
     * @param {?} name
     * @param {?=} path
     * @param {?=} domain
     * @return {?}
     */
    delete(name, path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), path, domain);
    }
    /**
     * @param {?=} path
     * @param {?=} domain
     * @return {?}
     */
    deleteAll(path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        /** @type {?} */
        const cookies = this.getAll();
        for (const cookieName in cookies) {
            if (cookies.hasOwnProperty(cookieName)) {
                this.delete(cookieName, path, domain);
            }
        }
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    getCookieRegExp(name) {
        /** @type {?} */
        const escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');
        return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
    }
}
FnCookieService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FnCookieService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: InjectionToken, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnCookieService.prototype.documentIsAccessible;
    /**
     * @type {?}
     * @private
     */
    FnCookieService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    FnCookieService.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY29va2llcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9mbi1jb29raWVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHOUQsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBRzFCLFlBQzRCLFFBQWEsRUFFVixVQUFrQztRQUZyQyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBRVYsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7UUFFL0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUdELEtBQUssQ0FBQyxJQUFZO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Y0FFMUIsTUFBTSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDOztjQUMzQyxNQUFNLEdBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUV6RCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUdELEdBQUcsQ0FBQyxJQUFZO1FBQ2QsSUFBSSxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqRCxJQUFJLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7O2tCQUUxQixNQUFNLEdBQVcsSUFBSSxDQUFDLGVB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QUVELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7Ozs7SUFHRCxTQUFTLENBQUMsSUFBYSxFQUFFLE1BQWU7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM5QixPQUFPO1NBQ1I7O2NBRUssT0FBTyxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFFbEMsS0FBSyxNQUFNLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDaEMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDdkM7U0FDRjtJQUNILENBQUM7Ozs7OztJQUdPLGVBQWUsQ0FBQyxJQUFZOztjQUM1QixXQUFXLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3Q0FBd0MsRUFBRSxNQUFNLENBQUM7UUFFMUYsT0FBTyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxHQUFHLFFBQVEsR0FBRyxXQUFXLEdBQUcsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0YsQ0FBQzs7O1lBeElGLFVBQVU7Ozs7NENBS04sTUFBTSxTQUFDLFFBQVE7WUFSc0IsY0FBYyx1QkFVbkQsTUFBTSxTQUFDLFdBQVc7Ozs7Ozs7SUFMckIsK0NBQStDOzs7OztJQUc3QyxtQ0FBdUM7Ozs7O0lBRXZDLHFDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgc2VydmljZSBpcyBiYXNlZCBvbiBuZ3ggY29va2llc1xyXG4vLyBQYWNrYWdlOiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9uZ3gtY29va2llLXNlcnZpY2VcclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUExBVEZPUk1fSUQsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGbkNvb2tpZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZG9jdW1lbnRJc0FjY2Vzc2libGU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgLy8gR2V0IHRoZSBgUExBVEZPUk1fSURgIHNvIHdlIGNhbiBjaGVjayBpZiB3ZSdyZSBpbiBhIGJyb3dzZXIuXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IEluamVjdGlvblRva2VuPG9iamVjdD4sXHJcbiAgKSB7XHJcbiAgICB0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlID0gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKTtcclxuICB9XHJcblxyXG5cclxuICBjaGVjayhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTtcclxuXHJcbiAgICBjb25zdCByZWdFeHA6IFJlZ0V4cCA9IHRoaXMuZ2V0Q29va2llUmVnRXhwKG5hbWUpO1xyXG4gICAgY29uc3QgZXhpc3RzOiBib29sZWFuID0gcmVnRXhwLnRlc3QodGhpcy5kb2N1bWVudC5jb29raWUpO1xyXG5cclxuICAgIHJldHVybiBleGlzdHM7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0KG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSAmJiB0aGlzLmNoZWNrKG5hbWUpKSB7XHJcbiAgICAgIG5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7XHJcblxyXG4gICAgICBjb25zdCByZWdFeHA6IFJlZ0V4cCA9IHRoaXMuZ2V0Q29va2llUmVnRXhwKG5hbWUpO1xyXG4gICAgICBjb25zdCByZXN1bHQ6IFJlZ0V4cEV4ZWNBcnJheSA9IHJlZ0V4cC5leGVjKHRoaXMuZG9jdW1lbnQuY29va2llKTtcclxuXHJcbiAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0WzFdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEFsbCgpOiB7fSB7XHJcbiAgICBpZiAoIXRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUpIHtcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvb2tpZXM6IHt9ID0ge307XHJcbiAgICBjb25zdCBkb2N1bWVudDogYW55ID0gdGhpcy5kb2N1bWVudDtcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuY29va2llICYmIGRvY3VtZW50LmNvb2tpZSAhPT0gJycpIHtcclxuICAgICAgY29uc3Qgc3BsaXQ6IEFycmF5PHN0cmluZz4gPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29va2llOiBBcnJheTxzdHJpbmc+ID0gc3BsaXRbaV0uc3BsaXQoJz0nKTtcclxuXHJcbiAgICAgICAgY3VycmVudENvb2tpZVswXSA9IGN1cnJlbnRDb29raWVbMF0ucmVwbGFjZSgvXiAvLCAnJyk7XHJcbiAgICAgICAgY29va2llc1tkZWNvZGVVUklDb21wb25lbnQoY3VycmVudENvb2tpZVswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KGN1cnJlbnRDb29raWVbMV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvb2tpZXM7XHJcbiAgfVxyXG5cclxuXHJcbiAgc2V0KFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgdmFsdWU6IHN0cmluZyxcclxuICAgIGV4cGlyZXM/OiBudW1iZXIgfCBEYXRlLFxyXG4gICAgcGF0aD86IHN0cmluZyxcclxuICAgIGRvbWFpbj86IHN0cmluZyxcclxuICAgIHNlY3VyZT86IGJvb2xlYW4sXHJcbiAgICBzYW1lU2l0ZT86ICdMYXgnIHwgJ1N0cmljdCdcclxuICApOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNvb2tpZVN0cmluZzogc3RyaW5nID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSArICc7JztcclxuXHJcbiAgICBpZiAoZXhwaXJlcykge1xyXG4gICAgICBpZiAodHlwZW9mIGV4cGlyZXMgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZUV4cGlyZXM6IERhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIGV4cGlyZXMgKiAxMDAwICogNjAgKiA2MCAqIDI0KTtcclxuXHJcbiAgICAgICAgY29va2llU3RyaW5nICs9ICdleHBpcmVzPScgKyBkYXRlRXhwaXJlcy50b1VUQ1N0cmluZygpICsgJzsnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvb2tpZVN0cmluZyArPSAnZXhwaXJlcz0nICsgZXhwaXJlcy50b1VUQ1N0cmluZygpICsgJzsnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhdGgpIHtcclxuICAgICAgY29va2llU3RyaW5nICs9ICdwYXRoPScgKyBwYXRoICsgJzsnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkb21haW4pIHtcclxuICAgICAgY29va2llU3RyaW5nICs9ICdkb21haW49JyArIGRvbWFpbiArICc7JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VjdXJlKSB7XHJcbiAgICAgIGNvb2tpZVN0cmluZyArPSAnc2VjdXJlOyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNhbWVTaXRlKSB7XHJcbiAgICAgIGNvb2tpZVN0cmluZyArPSAnc2FtZVNpdGU9JyArIHNhbWVTaXRlICsgJzsnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZG9jdW1lbnQuY29va2llID0gY29va2llU3RyaW5nO1xyXG4gIH1cclxuXHJcblxyXG4gIGRlbGV0ZShuYW1lOiBzdHJpbmcsIHBhdGg/OiBzdHJpbmcsIGRvbWFpbj86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldChuYW1lLCAnJywgbmV3IERhdGUoJ1RodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UJyksIHBhdGgsIGRvbWFpbik7XHJcbiAgfVxyXG5cclxuXHJcbiAgZGVsZXRlQWxsKHBhdGg/OiBzdHJpbmcsIGRvbWFpbj86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb29raWVzOiBhbnkgPSB0aGlzLmdldEFsbCgpO1xyXG5cclxuICAgIGZvciAoY29uc3QgY29va2llTmFtZSBpbiBjb29raWVzKSB7XHJcbiAgICAgIGlmIChjb29raWVzLmhhc093blByb3BlcnR5KGNvb2tpZU5hbWUpKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGUoY29va2llTmFtZSwgcGF0aCwgZG9tYWluKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZ2V0Q29va2llUmVnRXhwKG5hbWU6IHN0cmluZyk6IFJlZ0V4cCB7XHJcbiAgICBjb25zdCBlc2NhcGVkTmFtZTogc3RyaW5nID0gbmFtZS5yZXBsYWNlKC8oW1xcW1xcXVxce1xcfVxcKFxcKVxcfFxcPVxcO1xcK1xcP1xcLFxcLlxcKlxcXlxcJF0pL2lnLCAnXFxcXCQxJyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyg/Ol4nICsgZXNjYXBlZE5hbWUgKyAnfDtcXFxccyonICsgZXNjYXBlZE5hbWUgKyAnKT0oLio/KSg/Ojt8JCknLCAnZycpO1xyXG4gIH1cclxufVxyXG4iXX0=