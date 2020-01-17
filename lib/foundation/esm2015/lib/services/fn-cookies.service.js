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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY29va2llcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9mbi1jb29raWVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFHNUQsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBRzFCLFlBQzRCLFFBQWEsRUFFVixVQUFrQztRQUZyQyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBRVYsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7UUFFL0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUdELEtBQUssQ0FBQyxJQUFZO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Y0FFMUIsTUFBTSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDOztjQUMzQyxNQUFNLEdBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUV6RCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUdELEdBQUcsQ0FBQyxJQUFZO1FBQ2QsSUFBSSxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqRCxJQUFJLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7O2tCQUUxQixNQUFNLEdBQVcsSUFBSSxDQUFDLGVB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QUVELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7Ozs7SUFHRCxTQUFTLENBQUMsSUFBYSxFQUFFLE1BQWU7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM5QixPQUFPO1NBQ1I7O2NBRUssT0FBTyxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFFbEMsS0FBSyxNQUFNLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDaEMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDdkM7U0FDRjtJQUNILENBQUM7Ozs7OztJQUdPLGVBQWUsQ0FBQyxJQUFZOztjQUM1QixXQUFXLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3Q0FBd0MsRUFBRSxNQUFNLENBQUM7UUFFMUYsT0FBTyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxHQUFHLFFBQVEsR0FBRyxXQUFXLEdBQUcsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0YsQ0FBQzs7O1lBeElGLFVBQVU7Ozs7NENBS04sTUFBTSxTQUFDLFFBQVE7WUFScUIsY0FBYyx1QkFVbEQsTUFBTSxTQUFDLFdBQVc7Ozs7Ozs7SUFMckIsK0NBQStDOzs7OztJQUc3QyxtQ0FBdUM7Ozs7O0lBRXZDLHFDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgc2VydmljZSBpcyBiYXNlZCBvbiBuZ3ggY29va2llc1xyXG4vLyBQYWNrYWdlOiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9uZ3gtY29va2llLXNlcnZpY2VcclxuXHJcbmltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0LCBQTEFURk9STV9JRCwgSW5qZWN0aW9uVG9rZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZuQ29va2llU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBkb2N1bWVudElzQWNjZXNzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcbiAgICAvLyBHZXQgdGhlIGBQTEFURk9STV9JRGAgc28gd2UgY2FuIGNoZWNrIGlmIHdlJ3JlIGluIGEgYnJvd3Nlci5cclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogSW5qZWN0aW9uVG9rZW48b2JqZWN0PixcclxuICApIHtcclxuICAgIHRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUgPSBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNoZWNrKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xyXG5cclxuICAgIGNvbnN0IHJlZ0V4cDogUmVnRXhwID0gdGhpcy5nZXRDb29raWVSZWdFeHAobmFtZSk7XHJcbiAgICBjb25zdCBleGlzdHM6IGJvb2xlYW4gPSByZWdFeHAudGVzdCh0aGlzLmRvY3VtZW50LmNvb2tpZSk7XHJcblxyXG4gICAgcmV0dXJuIGV4aXN0cztcclxuICB9XHJcblxyXG5cclxuICBnZXQobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlICYmIHRoaXMuY2hlY2sobmFtZSkpIHtcclxuICAgICAgbmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlZ0V4cDogUmVnRXhwID0gdGhpcy5nZXRDb29raWVSZWdFeHAobmFtZSk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdDogUmVnRXhwRXhlY0FycmF5ID0gcmVnRXhwLmV4ZWModGhpcy5kb2N1bWVudC5jb29raWUpO1xyXG5cclxuICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRbMV0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0QWxsKCk6IHt9IHtcclxuICAgIGlmICghdGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSkge1xyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29va2llczoge30gPSB7fTtcclxuICAgIGNvbnN0IGRvY3VtZW50OiBhbnkgPSB0aGlzLmRvY3VtZW50O1xyXG5cclxuICAgIGlmIChkb2N1bWVudC5jb29raWUgJiYgZG9jdW1lbnQuY29va2llICE9PSAnJykge1xyXG4gICAgICBjb25zdCBzcGxpdDogQXJyYXk8c3RyaW5nPiA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb29raWU6IEFycmF5PHN0cmluZz4gPSBzcGxpdFtpXS5zcGxpdCgnPScpO1xyXG5cclxuICAgICAgICBjdXJyZW50Q29va2llWzBdID0gY3VycmVudENvb2tpZVswXS5yZXBsYWNlKC9eIC8sICcnKTtcclxuICAgICAgICBjb29raWVzW2RlY29kZVVSSUNvbXBvbmVudChjdXJyZW50Q29va2llWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQoY3VycmVudENvb2tpZVsxXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29va2llcztcclxuICB9XHJcblxyXG5cclxuICBzZXQoXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgZXhwaXJlcz86IG51bWJlciB8IERhdGUsXHJcbiAgICBwYXRoPzogc3RyaW5nLFxyXG4gICAgZG9tYWluPzogc3RyaW5nLFxyXG4gICAgc2VjdXJlPzogYm9vbGVhbixcclxuICAgIHNhbWVTaXRlPzogJ0xheCcgfCAnU3RyaWN0J1xyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY29va2llU3RyaW5nOiBzdHJpbmcgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpICsgJzsnO1xyXG5cclxuICAgIGlmIChleHBpcmVzKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZXhwaXJlcyA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICBjb25zdCBkYXRlRXhwaXJlczogRGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgZXhwaXJlcyAqIDEwMDAgKiA2MCAqIDYwICogMjQpO1xyXG5cclxuICAgICAgICBjb29raWVTdHJpbmcgKz0gJ2V4cGlyZXM9JyArIGRhdGVFeHBpcmVzLnRvVVRDU3RyaW5nKCkgKyAnOyc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29va2llU3RyaW5nICs9ICdleHBpcmVzPScgKyBleHBpcmVzLnRvVVRDU3RyaW5nKCkgKyAnOyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocGF0aCkge1xyXG4gICAgICBjb29raWVTdHJpbmcgKz0gJ3BhdGg9JyArIHBhdGggKyAnOyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvbWFpbikge1xyXG4gICAgICBjb29raWVTdHJpbmcgKz0gJ2RvbWFpbj0nICsgZG9tYWluICsgJzsnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWN1cmUpIHtcclxuICAgICAgY29va2llU3RyaW5nICs9ICdzZWN1cmU7JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2FtZVNpdGUpIHtcclxuICAgICAgY29va2llU3RyaW5nICs9ICdzYW1lU2l0ZT0nICsgc2FtZVNpdGUgKyAnOyc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kb2N1bWVudC5jb29raWUgPSBjb29raWVTdHJpbmc7XHJcbiAgfVxyXG5cclxuXHJcbiAgZGVsZXRlKG5hbWU6IHN0cmluZywgcGF0aD86IHN0cmluZywgZG9tYWluPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0KG5hbWUsICcnLCBuZXcgRGF0ZSgnVGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQnKSwgcGF0aCwgZG9tYWluKTtcclxuICB9XHJcblxyXG5cclxuICBkZWxldGVBbGwocGF0aD86IHN0cmluZywgZG9tYWluPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvb2tpZXM6IGFueSA9IHRoaXMuZ2V0QWxsKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBjb29raWVOYW1lIGluIGNvb2tpZXMpIHtcclxuICAgICAgaWYgKGNvb2tpZXMuaGFzT3duUHJvcGVydHkoY29va2llTmFtZSkpIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZShjb29raWVOYW1lLCBwYXRoLCBkb21haW4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb29raWVSZWdFeHAobmFtZTogc3RyaW5nKTogUmVnRXhwIHtcclxuICAgIGNvbnN0IGVzY2FwZWROYW1lOiBzdHJpbmcgPSBuYW1lLnJlcGxhY2UoLyhbXFxbXFxdXFx7XFx9XFwoXFwpXFx8XFw9XFw7XFwrXFw/XFwsXFwuXFwqXFxeXFwkXSkvaWcsICdcXFxcJDEnKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKD86XicgKyBlc2NhcGVkTmFtZSArICd8O1xcXFxzKicgKyBlc2NhcGVkTmFtZSArICcpPSguKj8pKD86O3wkKScsICdnJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==