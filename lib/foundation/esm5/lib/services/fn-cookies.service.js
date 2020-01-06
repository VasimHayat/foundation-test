/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// This service is based on ngx cookies
// Package: https://www.npmjs.com/package/ngx-cookie-service
import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
var FnCookieService = /** @class */ (function () {
    function FnCookieService(document, platformId) {
        this.document = document;
        this.platformId = platformId;
        this.documentIsAccessible = isPlatformBrowser(this.platformId);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    FnCookieService.prototype.check = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!this.documentIsAccessible) {
            return false;
        }
        name = encodeURIComponent(name);
        /** @type {?} */
        var regExp = this.getCookieRegExp(name);
        /** @type {?} */
        var exists = regExp.test(this.document.cookie);
        return exists;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    FnCookieService.prototype.get = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (this.documentIsAccessible && this.check(name)) {
            name = encodeURIComponent(name);
            /** @type {?} */
            var regExp = this.getCookieRegExp(name);
            /** @type {?} */
            var result = regExp.exec(this.document.cookie);
            return decodeURIComponent(result[1]);
        }
        else {
            return '';
        }
    };
    /**
     * @return {?}
     */
    FnCookieService.prototype.getAll = /**
     * @return {?}
     */
    function () {
        if (!this.documentIsAccessible) {
            return {};
        }
        /** @type {?} */
        var cookies = {};
        /** @type {?} */
        var document = this.document;
        if (document.cookie && document.cookie !== '') {
            /** @type {?} */
            var split = document.cookie.split(';');
            for (var i = 0; i < split.length; i += 1) {
                /** @type {?} */
                var currentCookie = split[i].split('=');
                currentCookie[0] = currentCookie[0].replace(/^ /, '');
                cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
            }
        }
        return cookies;
    };
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
    FnCookieService.prototype.set = /**
     * @param {?} name
     * @param {?} value
     * @param {?=} expires
     * @param {?=} path
     * @param {?=} domain
     * @param {?=} secure
     * @param {?=} sameSite
     * @return {?}
     */
    function (name, value, expires, path, domain, secure, sameSite) {
        if (!this.documentIsAccessible) {
            return;
        }
        /** @type {?} */
        var cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
        if (expires) {
            if (typeof expires === 'number') {
                /** @type {?} */
                var dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
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
    };
    /**
     * @param {?} name
     * @param {?=} path
     * @param {?=} domain
     * @return {?}
     */
    FnCookieService.prototype.delete = /**
     * @param {?} name
     * @param {?=} path
     * @param {?=} domain
     * @return {?}
     */
    function (name, path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), path, domain);
    };
    /**
     * @param {?=} path
     * @param {?=} domain
     * @return {?}
     */
    FnCookieService.prototype.deleteAll = /**
     * @param {?=} path
     * @param {?=} domain
     * @return {?}
     */
    function (path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        /** @type {?} */
        var cookies = this.getAll();
        for (var cookieName in cookies) {
            if (cookies.hasOwnProperty(cookieName)) {
                this.delete(cookieName, path, domain);
            }
        }
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    FnCookieService.prototype.getCookieRegExp = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');
        return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
    };
    FnCookieService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FnCookieService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: InjectionToken, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return FnCookieService;
}());
export { FnCookieService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY29va2llcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9mbi1jb29raWVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFOUQ7SUFJRSx5QkFDNEIsUUFBYSxFQUVWLFVBQWtDO1FBRnJDLGFBQVEsR0FBUixRQUFRLENBQUs7UUFFVixlQUFVLEdBQVYsVUFBVSxDQUF3QjtRQUUvRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBR0QsK0JBQUs7Ozs7SUFBTCxVQUFNLElBQVk7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDOztZQUUxQixNQUFNLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7O1lBQzNDLE1BQU0sR0FBWSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRXpELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBR0QsNkJBQUc7Ozs7SUFBSCxVQUFJLElBQVk7UUFDZCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pELElBQUksR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Z0JBRTFCLE1BQU0sR0FBVyxJQUFJLENBQUMsZUFB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QUFDLG9CQUFvQixFQUFFO1lBQzlCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7Ozs7SUFHRCxtQ0FBUzs7Ozs7SUFBVCxVQUFVLElBQWEsRUFBRSxNQUFlO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsT0FBTztTQUNSOztZQUVLLE9BQU8sR0FBUSxJQUFJLENBQUMsTUFBTSxFQUFFO1FBRWxDLEtBQUssSUFBTSxVQUFVLElBQUksT0FBTyxFQUFFO1lBQ2hDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFHTyx5Q0FBZTs7Ozs7SUFBdkIsVUFBd0IsSUFBWTs7WUFDNUIsV0FBVyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsd0NBQXdDLEVBQUUsTUFBTSxDQUFDO1FBRTFGLE9BQU8sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsR0FBRyxRQUFRLEdBQUcsV0FBVyxHQUFHLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNGLENBQUM7O2dCQXhJRixVQUFVOzs7O2dEQUtOLE1BQU0sU0FBQyxRQUFRO2dCQVJzQixjQUFjLHVCQVVuRCxNQUFNLFNBQUMsV0FBVzs7SUFrSXZCLHNCQUFDO0NBQUEsQUF6SUQsSUF5SUM7U0F4SVksZUFBZTs7Ozs7O0lBQzFCLCtDQUErQzs7Ozs7SUFHN0MsbUNBQXVDOzs7OztJQUV2QyxxQ0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIHNlcnZpY2UgaXMgYmFzZWQgb24gbmd4IGNvb2tpZXNcclxuLy8gUGFja2FnZTogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvbmd4LWNvb2tpZS1zZXJ2aWNlXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIFBMQVRGT1JNX0lELCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm5Db29raWVTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGRvY3VtZW50SXNBY2Nlc3NpYmxlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIC8vIEdldCB0aGUgYFBMQVRGT1JNX0lEYCBzbyB3ZSBjYW4gY2hlY2sgaWYgd2UncmUgaW4gYSBicm93c2VyLlxyXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBJbmplY3Rpb25Ub2tlbjxvYmplY3Q+LFxyXG4gICkge1xyXG4gICAgdGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSA9IGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY2hlY2sobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7XHJcblxyXG4gICAgY29uc3QgcmVnRXhwOiBSZWdFeHAgPSB0aGlzLmdldENvb2tpZVJlZ0V4cChuYW1lKTtcclxuICAgIGNvbnN0IGV4aXN0czogYm9vbGVhbiA9IHJlZ0V4cC50ZXN0KHRoaXMuZG9jdW1lbnQuY29va2llKTtcclxuXHJcbiAgICByZXR1cm4gZXhpc3RzO1xyXG4gIH1cclxuXHJcblxyXG4gIGdldChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUgJiYgdGhpcy5jaGVjayhuYW1lKSkge1xyXG4gICAgICBuYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xyXG5cclxuICAgICAgY29uc3QgcmVnRXhwOiBSZWdFeHAgPSB0aGlzLmdldENvb2tpZVJlZ0V4cChuYW1lKTtcclxuICAgICAgY29uc3QgcmVzdWx0OiBSZWdFeHBFeGVjQXJyYXkgPSByZWdFeHAuZXhlYyh0aGlzLmRvY3VtZW50LmNvb2tpZSk7XHJcblxyXG4gICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdFsxXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRBbGwoKToge30ge1xyXG4gICAgaWYgKCF0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlKSB7XHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb29raWVzOiB7fSA9IHt9O1xyXG4gICAgY29uc3QgZG9jdW1lbnQ6IGFueSA9IHRoaXMuZG9jdW1lbnQ7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZSAmJiBkb2N1bWVudC5jb29raWUgIT09ICcnKSB7XHJcbiAgICAgIGNvbnN0IHNwbGl0OiBBcnJheTxzdHJpbmc+ID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvb2tpZTogQXJyYXk8c3RyaW5nPiA9IHNwbGl0W2ldLnNwbGl0KCc9Jyk7XHJcblxyXG4gICAgICAgIGN1cnJlbnRDb29raWVbMF0gPSBjdXJyZW50Q29va2llWzBdLnJlcGxhY2UoL14gLywgJycpO1xyXG4gICAgICAgIGNvb2tpZXNbZGVjb2RlVVJJQ29tcG9uZW50KGN1cnJlbnRDb29raWVbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChjdXJyZW50Q29va2llWzFdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb29raWVzO1xyXG4gIH1cclxuXHJcblxyXG4gIHNldChcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICBleHBpcmVzPzogbnVtYmVyIHwgRGF0ZSxcclxuICAgIHBhdGg/OiBzdHJpbmcsXHJcbiAgICBkb21haW4/OiBzdHJpbmcsXHJcbiAgICBzZWN1cmU/OiBib29sZWFuLFxyXG4gICAgc2FtZVNpdGU/OiAnTGF4JyB8ICdTdHJpY3QnXHJcbiAgKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjb29raWVTdHJpbmc6IHN0cmluZyA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgKyAnOyc7XHJcblxyXG4gICAgaWYgKGV4cGlyZXMpIHtcclxuICAgICAgaWYgKHR5cGVvZiBleHBpcmVzID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIGNvbnN0IGRhdGVFeHBpcmVzOiBEYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyBleHBpcmVzICogMTAwMCAqIDYwICogNjAgKiAyNCk7XHJcblxyXG4gICAgICAgIGNvb2tpZVN0cmluZyArPSAnZXhwaXJlcz0nICsgZGF0ZUV4cGlyZXMudG9VVENTdHJpbmcoKSArICc7JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb29raWVTdHJpbmcgKz0gJ2V4cGlyZXM9JyArIGV4cGlyZXMudG9VVENTdHJpbmcoKSArICc7JztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXRoKSB7XHJcbiAgICAgIGNvb2tpZVN0cmluZyArPSAncGF0aD0nICsgcGF0aCArICc7JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZG9tYWluKSB7XHJcbiAgICAgIGNvb2tpZVN0cmluZyArPSAnZG9tYWluPScgKyBkb21haW4gKyAnOyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlY3VyZSkge1xyXG4gICAgICBjb29raWVTdHJpbmcgKz0gJ3NlY3VyZTsnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzYW1lU2l0ZSkge1xyXG4gICAgICBjb29raWVTdHJpbmcgKz0gJ3NhbWVTaXRlPScgKyBzYW1lU2l0ZSArICc7JztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZVN0cmluZztcclxuICB9XHJcblxyXG5cclxuICBkZWxldGUobmFtZTogc3RyaW5nLCBwYXRoPzogc3RyaW5nLCBkb21haW4/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXQobmFtZSwgJycsIG5ldyBEYXRlKCdUaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVCcpLCBwYXRoLCBkb21haW4pO1xyXG4gIH1cclxuXHJcblxyXG4gIGRlbGV0ZUFsbChwYXRoPzogc3RyaW5nLCBkb21haW4/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29va2llczogYW55ID0gdGhpcy5nZXRBbGwoKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNvb2tpZU5hbWUgaW4gY29va2llcykge1xyXG4gICAgICBpZiAoY29va2llcy5oYXNPd25Qcm9wZXJ0eShjb29raWVOYW1lKSkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlKGNvb2tpZU5hbWUsIHBhdGgsIGRvbWFpbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGdldENvb2tpZVJlZ0V4cChuYW1lOiBzdHJpbmcpOiBSZWdFeHAge1xyXG4gICAgY29uc3QgZXNjYXBlZE5hbWU6IHN0cmluZyA9IG5hbWUucmVwbGFjZSgvKFtcXFtcXF1cXHtcXH1cXChcXClcXHxcXD1cXDtcXCtcXD9cXCxcXC5cXCpcXF5cXCRdKS9pZywgJ1xcXFwkMScpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUmVnRXhwKCcoPzpeJyArIGVzY2FwZWROYW1lICsgJ3w7XFxcXHMqJyArIGVzY2FwZWROYW1lICsgJyk9KC4qPykoPzo7fCQpJywgJ2cnKTtcclxuICB9XHJcbn1cclxuIl19