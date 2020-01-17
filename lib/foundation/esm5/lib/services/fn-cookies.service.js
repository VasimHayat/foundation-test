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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tY29va2llcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9mbi1jb29raWVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFNUQ7SUFJRSx5QkFDNEIsUUFBYSxFQUVWLFVBQWtDO1FBRnJDLGFBQVEsR0FBUixRQUFRLENBQUs7UUFFVixlQUFVLEdBQVYsVUFBVSxDQUF3QjtRQUUvRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBR0QsK0JBQUs7Ozs7SUFBTCxVQUFNLElBQVk7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDOztZQUUxQixNQUFNLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7O1lBQzNDLE1BQU0sR0FBWSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRXpELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBR0QsNkJBQUc7Ozs7SUFBSCxVQUFJLElBQVk7UUFDZCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pELElBQUksR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Z0JBRTFCLE1BQU0sR0FBVyxJQUFJLENBQUMsZUFB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QUFDLG9CQUFvQixFQUFFO1lBQzlCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7Ozs7SUFHRCxtQ0FBUzs7Ozs7SUFBVCxVQUFVLElBQWEsRUFBRSxNQUFlO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsT0FBTztTQUNSOztZQUVLLE9BQU8sR0FBUSxJQUFJLENBQUMsTUFBTSxFQUFFO1FBRWxDLEtBQUssSUFBTSxVQUFVLElBQUksT0FBTyxFQUFFO1lBQ2hDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFHTyx5Q0FBZTs7Ozs7SUFBdkIsVUFBd0IsSUFBWTs7WUFDNUIsV0FBVyxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsd0NBQXdDLEVBQUUsTUFBTSxDQUFDO1FBRTFGLE9BQU8sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsR0FBRyxRQUFRLEdBQUcsV0FBVyxHQUFHLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNGLENBQUM7O2dCQXhJRixVQUFVOzs7O2dEQUtOLE1BQU0sU0FBQyxRQUFRO2dCQVJxQixjQUFjLHVCQVVsRCxNQUFNLFNBQUMsV0FBVzs7SUFrSXZCLHNCQUFDO0NBQUEsQUF6SUQsSUF5SUM7U0F4SVksZUFBZTs7Ozs7O0lBQzFCLCtDQUErQzs7Ozs7SUFHN0MsbUNBQXVDOzs7OztJQUV2QyxxQ0FBK0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIHNlcnZpY2UgaXMgYmFzZWQgb24gbmd4IGNvb2tpZXNcclxuLy8gUGFja2FnZTogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvbmd4LWNvb2tpZS1zZXJ2aWNlXHJcblxyXG5pbXBvcnQge0luamVjdGFibGUsIEluamVjdCwgUExBVEZPUk1fSUQsIEluamVjdGlvblRva2VufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGbkNvb2tpZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZG9jdW1lbnRJc0FjY2Vzc2libGU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgLy8gR2V0IHRoZSBgUExBVEZPUk1fSURgIHNvIHdlIGNhbiBjaGVjayBpZiB3ZSdyZSBpbiBhIGJyb3dzZXIuXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IEluamVjdGlvblRva2VuPG9iamVjdD4sXHJcbiAgKSB7XHJcbiAgICB0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlID0gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKTtcclxuICB9XHJcblxyXG5cclxuICBjaGVjayhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTtcclxuXHJcbiAgICBjb25zdCByZWdFeHA6IFJlZ0V4cCA9IHRoaXMuZ2V0Q29va2llUmVnRXhwKG5hbWUpO1xyXG4gICAgY29uc3QgZXhpc3RzOiBib29sZWFuID0gcmVnRXhwLnRlc3QodGhpcy5kb2N1bWVudC5jb29raWUpO1xyXG5cclxuICAgIHJldHVybiBleGlzdHM7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0KG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSAmJiB0aGlzLmNoZWNrKG5hbWUpKSB7XHJcbiAgICAgIG5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7XHJcblxyXG4gICAgICBjb25zdCByZWdFeHA6IFJlZ0V4cCA9IHRoaXMuZ2V0Q29va2llUmVnRXhwKG5hbWUpO1xyXG4gICAgICBjb25zdCByZXN1bHQ6IFJlZ0V4cEV4ZWNBcnJheSA9IHJlZ0V4cC5leGVjKHRoaXMuZG9jdW1lbnQuY29va2llKTtcclxuXHJcbiAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0WzFdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEFsbCgpOiB7fSB7XHJcbiAgICBpZiAoIXRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUpIHtcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvb2tpZXM6IHt9ID0ge307XHJcbiAgICBjb25zdCBkb2N1bWVudDogYW55ID0gdGhpcy5kb2N1bWVudDtcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuY29va2llICYmIGRvY3VtZW50LmNvb2tpZSAhPT0gJycpIHtcclxuICAgICAgY29uc3Qgc3BsaXQ6IEFycmF5PHN0cmluZz4gPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29va2llOiBBcnJheTxzdHJpbmc+ID0gc3BsaXRbaV0uc3BsaXQoJz0nKTtcclxuXHJcbiAgICAgICAgY3VycmVudENvb2tpZVswXSA9IGN1cnJlbnRDb29raWVbMF0ucmVwbGFjZSgvXiAvLCAnJyk7XHJcbiAgICAgICAgY29va2llc1tkZWNvZGVVUklDb21wb25lbnQoY3VycmVudENvb2tpZVswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KGN1cnJlbnRDb29raWVbMV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvb2tpZXM7XHJcbiAgfVxyXG5cclxuXHJcbiAgc2V0KFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgdmFsdWU6IHN0cmluZyxcclxuICAgIGV4cGlyZXM/OiBudW1iZXIgfCBEYXRlLFxyXG4gICAgcGF0aD86IHN0cmluZyxcclxuICAgIGRvbWFpbj86IHN0cmluZyxcclxuICAgIHNlY3VyZT86IGJvb2xlYW4sXHJcbiAgICBzYW1lU2l0ZT86ICdMYXgnIHwgJ1N0cmljdCdcclxuICApOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNvb2tpZVN0cmluZzogc3RyaW5nID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSArICc7JztcclxuXHJcbiAgICBpZiAoZXhwaXJlcykge1xyXG4gICAgICBpZiAodHlwZW9mIGV4cGlyZXMgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZUV4cGlyZXM6IERhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIGV4cGlyZXMgKiAxMDAwICogNjAgKiA2MCAqIDI0KTtcclxuXHJcbiAgICAgICAgY29va2llU3RyaW5nICs9ICdleHBpcmVzPScgKyBkYXRlRXhwaXJlcy50b1VUQ1N0cmluZygpICsgJzsnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvb2tpZVN0cmluZyArPSAnZXhwaXJlcz0nICsgZXhwaXJlcy50b1VUQ1N0cmluZygpICsgJzsnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhdGgpIHtcclxuICAgICAgY29va2llU3RyaW5nICs9ICdwYXRoPScgKyBwYXRoICsgJzsnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkb21haW4pIHtcclxuICAgICAgY29va2llU3RyaW5nICs9ICdkb21haW49JyArIGRvbWFpbiArICc7JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VjdXJlKSB7XHJcbiAgICAgIGNvb2tpZVN0cmluZyArPSAnc2VjdXJlOyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNhbWVTaXRlKSB7XHJcbiAgICAgIGNvb2tpZVN0cmluZyArPSAnc2FtZVNpdGU9JyArIHNhbWVTaXRlICsgJzsnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZG9jdW1lbnQuY29va2llID0gY29va2llU3RyaW5nO1xyXG4gIH1cclxuXHJcblxyXG4gIGRlbGV0ZShuYW1lOiBzdHJpbmcsIHBhdGg/OiBzdHJpbmcsIGRvbWFpbj86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldChuYW1lLCAnJywgbmV3IERhdGUoJ1RodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UJyksIHBhdGgsIGRvbWFpbik7XHJcbiAgfVxyXG5cclxuXHJcbiAgZGVsZXRlQWxsKHBhdGg/OiBzdHJpbmcsIGRvbWFpbj86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb29raWVzOiBhbnkgPSB0aGlzLmdldEFsbCgpO1xyXG5cclxuICAgIGZvciAoY29uc3QgY29va2llTmFtZSBpbiBjb29raWVzKSB7XHJcbiAgICAgIGlmIChjb29raWVzLmhhc093blByb3BlcnR5KGNvb2tpZU5hbWUpKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGUoY29va2llTmFtZSwgcGF0aCwgZG9tYWluKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZ2V0Q29va2llUmVnRXhwKG5hbWU6IHN0cmluZyk6IFJlZ0V4cCB7XHJcbiAgICBjb25zdCBlc2NhcGVkTmFtZTogc3RyaW5nID0gbmFtZS5yZXBsYWNlKC8oW1xcW1xcXVxce1xcfVxcKFxcKVxcfFxcPVxcO1xcK1xcP1xcLFxcLlxcKlxcXlxcJF0pL2lnLCAnXFxcXCQxJyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyg/Ol4nICsgZXNjYXBlZE5hbWUgKyAnfDtcXFxccyonICsgZXNjYXBlZE5hbWUgKyAnKT0oLio/KSg/Ojt8JCknLCAnZycpO1xyXG4gIH1cclxufVxyXG4iXX0=