import { Injectable, Inject, InjectionToken, PLATFORM_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA, Directive, ElementRef, Input, HostListener, Pipe, ChangeDetectorRef, Optional, SkipSelf, Component, ViewEncapsulation, ViewChild, TemplateRef, ChangeDetectionStrategy, forwardRef, EventEmitter, Output, ɵɵdefineInjectable, Renderer2 } from '@angular/core';
import { FormsModule, NgModel, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isPlatformBrowser, DOCUMENT, DatePipe, CommonModule } from '@angular/common';
import { fromError } from 'stacktrace-js';
import { DomSanitizer } from '@angular/platform-browser';
import { __decorate, __metadata } from 'tslib';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { map, mergeMap, startWith, takeUntil, debounceTime, catchError } from 'rxjs/operators';
import { of, Subject, BehaviorSubject, Subscription, throwError, fromEvent } from 'rxjs';
import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';
import { TranslateService, TranslatePipe, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContentObserver } from '@angular/cdk/observers';
import { LEFT_ARROW, RIGHT_ARROW, SPACE, ENTER } from '@angular/cdk/keycodes';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { A11yModule } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { List } from 'immutable';
import { Router } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnCookieService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnApplicationHelper {
    /**
     * @param {?} fnApplication
     * @return {?}
     */
    setApplication(fnApplication) {
        this.fnApplication = fnApplication;
    }
    /**
     * @return {?}
     */
    getApplication() {
        return this.fnApplication;
    }
}
FnApplicationHelper.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    FnApplicationHelper.prototype.fnApplication;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnBrowserDetail {
    /**
     * @return {?}
     */
    captureJsVersion() {
        //     function get_js_version() {
        /** @type {?} */
        let jsv = {
            versions: [
                "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "2.0"
            ],
            version: ""
        };
        /** @type {?} */
        var d = document;
        // for (let i = 0; i <jsv.versions.length; i++) {
        //     var g = d.createElement('script'),
        //         s = d.getElementsByTagName('script')[0];
        //     g.setAttribute("language", "JavaScript" +jsv.versions[i]);
        //     g.text = "this.jsv.version='" +jsv.versions[i] + "';";
        //     s.parentNode.insertBefore(g, s);
        // }
        this.jsVersion = jsv.version;
    }
    /**
     * @return {?}
     */
    init() {
        /** @type {?} */
        let unknown = '-';
        // system
        /** @type {?} */
        let os = unknown;
        /** @type {?} */
        let osVersion = unknown;
        /** @type {?} */
        let screenSize = '';
        // browser
        /** @type {?} */
        let nVer = navigator.appVersion;
        /** @type {?} */
        let nAgt = navigator.userAgent;
        /** @type {?} */
        let browser = navigator.appName;
        /** @type {?} */
        let version = '' + parseFloat(navigator.appVersion);
        /** @type {?} */
        let majorVersion = parseInt(navigator.appVersion, 10);
        /** @type {?} */
        let nameOffset;
        /** @type {?} */
        let verOffset;
        /** @type {?} */
        let ix;
        // mobile version
        /** @type {?} */
        let mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);
        // cookie
        /** @type {?} */
        let cookieEnabled = (navigator.cookieEnabled) ? true : false;
        {
            // screen
            if (screen.width) {
                /** @type {?} */
                let width = (screen.width) ? screen.width : '';
                /** @type {?} */
                let height = (screen.height) ? screen.height : '';
                screenSize += '' + width + " x " + height;
            }
            // Opera
            if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
            // Opera Next
            if ((verOffset = nAgt.indexOf('OPR')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 4);
            }
            // MSIE
            else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(verOffset + 5);
            }
            // Chrome
            else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                browser = 'Chrome';
                version = nAgt.substring(verOffset + 7);
            }
            // Safari
            else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                browser = 'Safari';
                version = nAgt.substring(verOffset + 7);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
            // Firefox
            else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                browser = 'Firefox';
                version = nAgt.substring(verOffset + 8);
            }
            // MSIE 11+
            else if (nAgt.indexOf('Trident/') != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(nAgt.indexOf('rv:') + 3);
            }
            // Other browsers
            else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                browser = nAgt.substring(nameOffset, verOffset);
                version = nAgt.substring(verOffset + 1);
                if (browser.toLowerCase() == browser.toUpperCase()) {
                    browser = navigator.appName;
                }
            }
            // trim the version string
            if ((ix = version.indexOf(';')) != -1)
                version = version.substring(0, ix);
            if ((ix = version.indexOf(' ')) != -1)
                version = version.substring(0, ix);
            if ((ix = version.indexOf(')')) != -1)
                version = version.substring(0, ix);
            majorVersion = parseInt('' + version, 10);
            if (isNaN(majorVersion)) {
                version = '' + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10);
            }
            if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
                document.cookie = 'testcookie';
                cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
            }
            /** @type {?} */
            let clientStrings = [
                { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
                { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
                { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
                { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
                { s: 'Windows Vista', r: /Windows NT 6.0/ },
                { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
                { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
                { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
                { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
                { s: 'Windows 98', r: /(Windows 98|Win98)/ },
                { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
                { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
                { s: 'Windows CE', r: /Windows CE/ },
                { s: 'Windows 3.11', r: /Win16/ },
                { s: 'Android', r: /Android/ },
                { s: 'Open BSD', r: /OpenBSD/ },
                { s: 'Sun OS', r: /SunOS/ },
                { s: 'Linux', r: /(Linux|X11)/ },
                { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
                { s: 'Mac OS X', r: /Mac OS X/ },
                { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
                { s: 'QNX', r: /QNX/ },
                { s: 'UNIX', r: /UNIX/ },
                { s: 'BeOS', r: /BeOS/ },
                { s: 'OS/2', r: /OS\/2/ },
                { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
            ];
            for (let id in clientStrings) {
                /** @type {?} */
                let cs = clientStrings[id];
                if (cs.r.test(nAgt)) {
                    os = cs.s;
                    break;
                }
            }
            if (/Windows/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
                os = 'Windows';
            }
            switch (os) {
                case 'Mac OS X':
                    osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                    break;
                case 'Android':
                    osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                    break;
                case 'iOS':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    break;
            }
            this.captureJsVersion();
        }
        window['systemObject'] = {
            screen: screenSize,
            browser: browser,
            browserVersion: version,
            browserMajorVersion: majorVersion,
            mobile: mobile,
            os: os,
            osVersion: osVersion,
            cookies: cookieEnabled
        };
    }
    /**
     * @return {?}
     */
    browserDetail() {
        if (window['systemObject'] == undefined || window['systemObject'] == null) {
            this.init();
            return window['systemObject'];
        }
        else {
            return window['systemObject'];
        }
    }
}
if (false) {
    /** @type {?} */
    FnBrowserDetail.prototype.jsVersion;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FNExceptionJson {
    //
    /**
     * @param {?} exception
     */
    constructor(exception) {
        this.appID = 'HW-Web';
        this.language = 'Javascript';
        this.deviceType = 'Web';
        this.deviceVersion = ''; // systemObject.browserMajorVersion;
        // systemObject.browserMajorVersion;
        this.deviceBrand = ''; // systemObject.browser;
        // systemObject.browser;
        this.deviceTime = new Date();
        this.osType = ''; // systemObject.os;
        // systemObject.os;
        this.osVersion = ''; // systemObject.os+" "+systemObject.osVersion;
        this.selectedObjectHash = {};
        this.init(exception);
    }
    /**
     * @param {?} exception
     * @return {?}
     */
    init(exception) {
        /** @type {?} */
        const browserDetail = new FnBrowserDetail().browserDetail();
        this.deviceVersion = browserDetail.browserMajorVersion;
        this.deviceBrand = browserDetail.browser;
        this.deviceTime = new Date();
        this.osType = browserDetail.os;
        this.osVersion = this.osType + ' ' + browserDetail.osVersion;
        this.expMessage = exception.message;
        fromError(exception).then((/**
         * @param {?} _stackTrace
         * @return {?}
         */
        (_stackTrace) => {
            /** @type {?} */
            const _rootStackTrak = _stackTrace[0];
            this.expStackTrace = _stackTrace.join('\n');
            this.rootStackTrace = _rootStackTrak.toString();
            this.rootExpLineNum = _rootStackTrak.lineNumber;
            this.id = this.expMessage + this.expStackTrace;
        })).catch((/**
         * @param {?} _err
         * @return {?}
         */
        (_err) => {
            this.expStackTrace = exception.toString();
            this.rootStackTrace = exception.toString();
            this.id = this.expMessage + this.expStackTrace;
        }));
    }
}
if (false) {
    /** @type {?} */
    FNExceptionJson.prototype.id;
    /** @type {?} */
    FNExceptionJson.prototype.appID;
    /** @type {?} */
    FNExceptionJson.prototype.appVer;
    /** @type {?} */
    FNExceptionJson.prototype.language;
    /** @type {?} */
    FNExceptionJson.prototype.langVersion;
    /** @type {?} */
    FNExceptionJson.prototype.deviceType;
    /** @type {?} */
    FNExceptionJson.prototype.deviceVersion;
    /** @type {?} */
    FNExceptionJson.prototype.deviceBrand;
    /** @type {?} */
    FNExceptionJson.prototype.deviceTime;
    /** @type {?} */
    FNExceptionJson.prototype.osType;
    /** @type {?} */
    FNExceptionJson.prototype.osVersion;
    /** @type {?} */
    FNExceptionJson.prototype.page;
    /** @type {?} */
    FNExceptionJson.prototype.custUserEmailID;
    /** @type {?} */
    FNExceptionJson.prototype.customerEmailID;
    /** @type {?} */
    FNExceptionJson.prototype.siteMainID;
    /** @type {?} */
    FNExceptionJson.prototype.custUserPK;
    /** @type {?} */
    FNExceptionJson.prototype.customerPk;
    /** @type {?} */
    FNExceptionJson.prototype.sitePk;
    /** @type {?} */
    FNExceptionJson.prototype.expMessage;
    /** @type {?} */
    FNExceptionJson.prototype.rootExpLineNum;
    /** @type {?} */
    FNExceptionJson.prototype.rootStackTrace;
    /** @type {?} */
    FNExceptionJson.prototype.expStackTrace;
    /** @type {?} */
    FNExceptionJson.prototype.selectedObjectHash;
    /** @type {?} */
    FNExceptionJson.prototype.className;
    /** @type {?} */
    FNExceptionJson.prototype.methodName;
    /** @type {?} */
    FNExceptionJson.prototype.categoryName;
    /** @type {?} */
    FNExceptionJson.prototype.threadName;
    /** @type {?} */
    FNExceptionJson.prototype.lastAction;
    /** @type {?} */
    FNExceptionJson.prototype.severity;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* mainly designed to handle try-catch exception(may be manual) and
* for auto genrate error there is FNErrorHandler sevice that implement ErrorHandler(Angular)
*/
class FnExceptionService {
    constructor() {
    }
    /**
     * @param {?} fnAplicationHelper
     * @return {?}
     */
    setFnApplicationHelper(fnAplicationHelper) {
        this.fnAppHelper = fnAplicationHelper;
    }
    /**
     * @return {?}
     */
    getFnApplicationHelper() {
        return this.fnAppHelper;
    }
    /**
     * @param {?} exception
     * @param {?=} logToConsole
     * @return {?}
     */
    logException(exception, logToConsole) {
        if (logToConsole) {
            console.error(exception);
        }
        if (this.fnAppHelper.getApplication()) {
            /** @type {?} */
            const fnExpJson = new FNExceptionJson(exception);
            this.fnAppHelper.getApplication().sendExceptionToServer(fnExpJson);
        }
    }
}
FnExceptionService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FnExceptionService.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnExceptionService.prototype.fnAppHelper;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnApplication {
    /**
     * @param {?} fnAppHelper
     * @param {?} fnExp
     */
    constructor(fnAppHelper, fnExp) {
        this.fnAppHelper = fnAppHelper;
        this.fnExp = fnExp;
        this.fnAppHelper.setApplication(this);
        this.fnExp.setFnApplicationHelper(this.fnAppHelper);
    }
    /**
     * @param {?} exception
     * @return {?}
     */
    sendExceptionToServer(exception) {
    }
}
FnApplication.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FnApplication.ctorParameters = () => [
    { type: FnApplicationHelper },
    { type: FnExceptionService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnApplication.prototype.fnAppHelper;
    /**
     * @type {?}
     * @private
     */
    FnApplication.prototype.fnExp;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
function toArray(value) {
    /** @type {?} */
    let ret;
    if (value == null) {
        ret = [];
    }
    else if (!Array.isArray(value)) {
        ret = [value];
    }
    else {
        ret = value;
    }
    return ret;
}
/**
 * @template T
 * @param {?} array1
 * @param {?} array2
 * @return {?}
 */
function arraysEqual(array1, array2) {
    if (!array1 || !array2 || array1.length !== array2.length) {
        return false;
    }
    /** @type {?} */
    const len = array1.length;
    for (let i = 0; i < len; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
/**
 * @template T
 * @param {?} source
 * @return {?}
 */
function shallowCopyArray(source) {
    return source.slice();
}
/**
 * @param {?} key
 * @param {?} isDesc
 * @return {?}
 */
function compare(key, isDesc) {
    // tslint:disable-next-line:only-arrow-functions
    return (/**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    (x, y) => {
        if (!x.hasOwnProperty(key) ||
            !y.hasOwnProperty(key)) {
            return 0;
        }
        /** @type {?} */
        const key1 = (typeof x[key] === 'string') ?
            x[key].toUpperCase() : x[key];
        /** @type {?} */
        const key2 = (typeof y[key] === 'string') ?
            y[key].toUpperCase() : y[key];
        /** @type {?} */
        let comparison = 0;
        if (key1 > key2) {
            comparison = 1;
        }
        else if (key1 < key2) {
            comparison = -1;
        }
        return (isDesc ? (comparison * -1) : comparison);
    });
}
/**
 * @param {?} objectArray
 * @param {?} key
 * @param {?=} isDesc
 * @return {?}
 */
function sortArray(objectArray, key, isDesc) {
    return objectArray.sort(this.compare(key, isDesc));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IndexableObject() { }
/**
 * @param {?} value
 * @return {?}
 */
function typeofUndefined(value) {
    return typeof (value) === 'undefined' || value == null;
}
/**
 * @param {?} value
 * @return {?}
 */
function typeofObject(value) {
    return typeof (value) === 'object' && value.constructor === Object;
}
/**
 * @param {?} value
 * @return {?}
 */
function typeofString(value) {
    return typeof (value) === 'string' && value.constructor === String;
}
/**
 * @param {?} value
 * @return {?}
 */
function typeofBoolean(value) {
    return typeof (value) === 'boolean' && value.constructor === Boolean;
}
/**
 * @param {?} value
 * @return {?}
 */
function typeofNumber(value) {
    return typeof (value) === 'number' && value.constructor === Number;
}
/**
 * @param {?} value
 * @return {?}
 */
function typeofFunction(value) {
    return typeof (value) === 'function' && value.constructor === Function;
}
/**
 * @param {?} value
 * @return {?}
 */
function typeofArray(value) {
    return typeof (value) === 'object' && value.constructor === Array;
}
/**
 * @param {?} num
 * @return {?}
 */
function isFloat(num) {
    num = parseFloat(num);
    return Number(num) === num && num % 1 !== 0;
}
/**
 * @param {?} num
 * @return {?}
 */
function isInt(num) {
    return num % 1 === 0;
}
/**
 * @param {?} value
 * @return {?}
 */
function isString(value) {
    return typeofString(value);
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
function isNotNull(value) {
    return typeof value !== 'undefined' && value !== null;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
function isNull(value) {
    return typeof value === 'undefined' || value === null;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
function isEmptyString(value) {
    return typeof value === 'string' && value.toString().length === 0;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} value
 * @return {?}
 */
function isNonEmptyString(value) {
    return typeof value === 'string' && value !== '';
}
/**
 * @param {?} obj
 * @return {?}
 */
function isEmptyObject(obj) {
    // tslint:disable-next-line:forin
    for (const name in obj) {
        return false;
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
/**
 * Examine if two objects are shallowly equaled.
 * @param {?=} objA
 * @param {?=} objB
 * @return {?}
 */
function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
        return false;
    }
    /** @type {?} */
    const keysA = Object.keys(objA);
    /** @type {?} */
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    /** @type {?} */
    const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // tslint:disable-next-line:prefer-for-of
    for (let idx = 0; idx < keysA.length; idx++) {
        /** @type {?} */
        const key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Vasim Hayat @ 2/10/2018
 */
class FnWeatherConstatnt {
}
FnWeatherConstatnt.WEATHER_ICONS = {
    Chance_of_Flurries: 'wi-day-cloudy-gusts',
    Chance_of_Rain: 'wi-rain',
    Chance_of_Freezing_Rain: 'wi-rain-wind',
    Chance_of_Sleet: 'wi-storm-showers',
    Chance_of_Snow: 'wi-snow',
    Chance_of_Thunderstorms: 'wi-thunderstorm',
    Chance_of_a_Thunderstorm: 'wi-thunderstorm',
    Clear: 'wi-day-sunny',
    Cloudy: 'wi-cloudy',
    Flurries: 'wi-day-cloudy-gusts',
    Fog: 'wi-fog',
    Haze: 'wi-day-fog',
    Mostly_Cloudy: 'wi-day-cloudy',
    Mostly_Sunny: 'wi-day-sunny-overcast',
    Partly_Cloudy: 'wi-day-cloudy',
    Partly_Sunny: 'wi-day-sunny-overcast',
    Freezing_Rain: 'wi-rain-wind',
    Rain: 'wi-rain',
    Sleet: 'wi-storm-showers',
    Snow: 'wi-snow',
    Sunny: 'wi-day-sunny',
    Thunderstorms: 'wi-thunderstorm',
    Thunderstorm: 'wi-thunderstorm',
    Overcast: 'wi-day-sunny-overcast',
    Rain_Showers: 'wi-showers',
    Snow_Showers: 'wi-snow',
    Scattered_Clouds: 'wi-day-lightning',
    'Light Rain': 'wi-rain-mix',
    'Light Freezing Rain': 'wi-hail ',
    'Light Snow': 'wi-snow',
    'Light Drizzle': 'wi-rain-mix',
    Ice_Pellets: 'wi-rain-mix '
};
FnWeatherConstatnt.WEATHER_STRINGS = {
    en: {
        Chance_of_Flurries: 'Chance of Flurries',
        Chance_of_Rain: 'Chance of Rain',
        Chance_of_Freezing_Rain: 'Chance of Freezing Rain',
        Chance_of_Sleet: 'Chance of Sleet',
        Chance_of_Snow: 'Chance of Snow',
        Chance_of_Thunderstorms: 'Chance of Thunderstorms',
        Chance_of_a_Thunderstorm: 'Chance of a Thunderstorm',
        Clear: 'Clear',
        Cloudy: 'Cloudy',
        Flurries: 'Flurries',
        Fog: 'Fog',
        Haze: 'Haze',
        Mostly_Cloudy: 'Mostly Cloudy',
        Mostly_Sunny: 'Mostly Sunny',
        Partly_Cloudy: 'Partly Cloudy',
        Partly_Sunny: 'Partly Sunny',
        Freezing_Rain: 'Freezing Rain',
        Rain: 'Rain',
        Sleet: 'Sleet',
        Snow: 'Snow',
        Sunny: 'Sunny',
        Thunderstorms: 'Thunderstorms',
        Thunderstorm: 'Thunderstorm',
        Overcast: 'Overcast',
        Snow_Showers: 'Snow Showers',
        'N/A': 'N/A',
        Scattered_Clouds: 'Scattered Clouds',
        'Light Rain': 'Light Rain',
        'Light Freezing Rain': 'Light Freezing Rain',
        'Light Snow': 'Light Snow',
        'Light Drizzle': 'Light Drizzle',
        Ice_Pellets: 'wi-rain-mix '
    },
    es: {
        Chance_of_Flurries: 'Chance of Flurries',
        Chance_of_Rain: 'Chance of Rain',
        Chance_of_Freezing_Rain: 'Chance of Freezing Rain',
        Chance_of_Sleet: 'Chance of Sleet',
        Chance_of_Snow: 'Chance of Snow',
        Chance_of_Thunderstorms: 'Chance of Thunderstorms',
        Chance_of_a_Thunderstorm: 'Chance of a Thunderstorm',
        Clear: 'Clear',
        Cloudy: 'Cloudy',
        Flurries: 'Flurries',
        Fog: 'Fog',
        Haze: 'Haze',
        Mostly_Cloudy: 'Mostly Cloudy',
        Mostly_Sunny: 'Mostly Sunny',
        Partly_Cloudy: 'Partly Cloudy',
        Partly_Sunny: 'Partly Sunny',
        Freezing_Rain: 'Freezing Rain',
        Rain: 'Rain',
        Sleet: 'Sleet',
        Snow: 'Snow',
        Sunny: 'Sunny',
        Thunderstorms: 'Thunderstorms',
        Thunderstorm: 'Thunderstorm',
        Overcast: 'Overcast',
        Snow_Showers: 'Snow Showers',
        'N/A': 'N/A',
        Scattered_Clouds: 'Scattered Clouds',
        'Light Rain': 'Light Rain',
        'Light Freezing Rain': 'Light Freezing Rain',
        'Light Snow': 'Light Snow',
        'Light Drizzle': 'Light Drizzle',
        Ice_Pellets: 'wi-rain-mix '
    },
    fr: {
        Chance_of_Flurries: 'Chance of Flurries',
        Chance_of_Rain: 'Chance of Rain',
        Chance_of_Freezing_Rain: 'Chance of Freezing Rain',
        Chance_of_Sleet: 'Chance of Sleet',
        Chance_of_Snow: 'Chance of Snow',
        Chance_of_Thunderstorms: 'Chance of Thunderstorms',
        Chance_of_a_Thunderstorm: 'Chance of a Thunderstorm',
        Clear: 'Clear',
        Cloudy: 'Cloudy',
        Flurries: 'Flurries',
        Fog: 'Fog',
        Haze: 'Haze',
        Mostly_Cloudy: 'Mostly Cloudy',
        Mostly_Sunny: 'Mostly Sunny',
        Partly_Cloudy: 'Partly Cloudy',
        Partly_Sunny: 'Partly Sunny',
        Freezing_Rain: 'Freezing Rain',
        Rain: 'Rain',
        Sleet: 'Sleet',
        Snow: 'Snow',
        Sunny: 'Sunny',
        Thunderstorms: 'Thunderstorms',
        Thunderstorm: 'Thunderstorm',
        Overcast: 'Overcast',
        Snow_Showers: 'Snow Showers',
        'N/A': 'N/A',
        Scattered_Clouds: 'Scattered Clouds',
        'Light Rain': 'Light Rain',
        'Light Freezing Rain': 'Light Freezing Rain',
        'Light Snow': 'Light Snow',
        'Light Drizzle': 'Light Drizzle',
        Ice_Pellets: 'wi-rain-mix '
    },
    zh: {
        Chance_of_Flurries: 'Chance of Flurries',
        Chance_of_Rain: 'Chance of Rain',
        Chance_of_Freezing_Rain: 'Chance of Freezing Rain',
        Chance_of_Sleet: 'Chance of Sleet',
        Chance_of_Snow: 'Chance of Snow',
        Chance_of_Thunderstorms: 'Chance of Thunderstorms',
        Chance_of_a_Thunderstorm: 'Chance of a Thunderstorm',
        Clear: 'Clear',
        Cloudy: 'Cloudy',
        Flurries: 'Flurries',
        Fog: 'Fog',
        Haze: 'Haze',
        Mostly_Cloudy: 'Mostly Cloudy',
        Mostly_Sunny: 'Mostly Sunny',
        Partly_Cloudy: 'Partly Cloudy',
        Partly_Sunny: 'Partly Sunny',
        Freezing_Rain: 'Freezing Rain',
        Rain: 'Rain',
        Sleet: 'Sleet',
        Snow: 'Snow',
        Sunny: 'Sunny',
        Thunderstorms: 'Thunderstorms',
        Thunderstorm: 'Thunderstorm',
        Overcast: 'Overcast',
        Snow_Showers: 'Snow Showers',
        'N/A': 'N/A',
        Scattered_Clouds: 'Scattered Clouds',
        'Light Rain': 'Light Rain',
        'Light Freezing Rain': 'Light Freezing Rain',
        'Light Snow': 'Light Snow',
        'Light Drizzle': 'Light Drizzle',
        Ice_Pellets: 'wi-rain-mix '
    },
    it: {
        Chance_of_Flurries: 'Chance of Flurries',
        Chance_of_Rain: 'Chance of Rain',
        Chance_of_Freezing_Rain: 'Chance of Freezing Rain',
        Chance_of_Sleet: 'Chance of Sleet',
        Chance_of_Snow: 'Chance of Snow',
        Chance_of_Thunderstorms: 'Chance of Thunderstorms',
        Chance_of_a_Thunderstorm: 'Chance of a Thunderstorm',
        Clear: 'Clear',
        Cloudy: 'Cloudy',
        Flurries: 'Flurries',
        Fog: 'Fog',
        Haze: 'Haze',
        Mostly_Cloudy: 'Mostly Cloudy',
        Mostly_Sunny: 'Mostly Sunny',
        Partly_Cloudy: 'Partly Cloudy',
        Partly_Sunny: 'Partly Sunny',
        Freezing_Rain: 'Freezing Rain',
        Rain: 'Rain',
        Sleet: 'Sleet',
        Snow: 'Snow',
        Sunny: 'Sunny',
        Thunderstorms: 'Thunderstorms',
        Thunderstorm: 'Thunderstorm',
        Overcast: 'Overcast',
        Snow_Showers: 'Snow Showers',
        'N/A': 'N/A',
        Scattered_Clouds: 'Scattered Clouds',
        'Light Rain': 'Light Rain',
        'Light Freezing Rain': 'Light Freezing Rain',
        'Light Snow': 'Light Snow',
        'Light Drizzle': 'Light Drizzle',
        Ice_Pellets: 'wi-rain-mix '
    },
    de: {
        Chance_of_Flurries: 'Chance of Flurries',
        Chance_of_Rain: 'Chance of Rain',
        Chance_of_Freezing_Rain: 'Chance of Freezing Rain',
        Chance_of_Sleet: 'Chance of Sleet',
        Chance_of_Snow: 'Chance of Snow',
        Chance_of_Thunderstorms: 'Chance of Thunderstorms',
        Chance_of_a_Thunderstorm: 'Chance of a Thunderstorm',
        Clear: 'Clear',
        Cloudy: 'Cloudy',
        Flurries: 'Flurries',
        Fog: 'Fog',
        Haze: 'Haze',
        Mostly_Cloudy: 'Mostly Cloudy',
        Mostly_Sunny: 'Mostly Sunny',
        Partly_Cloudy: 'Partly Cloudy',
        Partly_Sunny: 'Partly Sunny',
        Freezing_Rain: 'Freezing Rain',
        Rain: 'Rain',
        Sleet: 'Sleet',
        Snow: 'Snow',
        Sunny: 'Sunny',
        Thunderstorms: 'Thunderstorms',
        Thunderstorm: 'Thunderstorm',
        Overcast: 'Overcast',
        Snow_Showers: 'Snow Showers',
        'N/A': 'N/A',
        Scattered_Clouds: 'Scattered Clouds',
        'Light Rain': 'Light Rain',
        'Light Freezing Rain': 'Light Freezing Rain',
        'Light Snow': 'Light Snow',
        'Light Drizzle': 'Light Drizzle',
        Ice_Pellets: 'wi-rain-mix '
    },
};
if (false) {
    /** @type {?} */
    FnWeatherConstatnt.WEATHER_ICONS;
    /** @type {?} */
    FnWeatherConstatnt.WEATHER_STRINGS;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Vasim Hayat @ 2/10/2018
 */
class FnDeviceConstant {
}
FnDeviceConstant.DEVICE_FA_ICONS = {
    WEB: 'fa fa-globe fa-lg',
    ANDROID: 'fa fa-android fa-lg',
    MOBILE: 'fa fa-mobile fa-lg',
    WINDOWSTAB: 'fa fa-tablet fa-lg',
    IOS: 'fa fa-apple fa-lg',
    WINDOWS8: 'fa fa-windows fa-lg',
    UNKNOWN: 'fa fa-question-circle fa-lg',
    APACHECLIENT: 'fa fa-sitemap fa-lg',
    ANDROIDTAB: 'fa fa-tablet fa-lg',
    IPAD: 'fa fa-apple fa-lg',
    API: 'fa  fa-cloud-download fa-lg',
    WEBCLOCK: 'fa fa-globe fa-lg'
};
FnDeviceConstant.DEVICE_IMG_ICONS = {
    WEB: 'assets/images/device/WEB.png',
    ANDROID: 'assets/images/device/ANDROID.png',
    MOBILE: 'assets/images/device/mobile.png',
    WINDOWSTAB: 'assets/images/device/WINDOWSTAB.png',
    IOS: 'assets/images/device/IOS.png',
    WINDOWS8: 'assets/images/device/WINDOWS8.png',
    UNKNOWN: 'assets/images/device/UNKNOWN.png',
    APACHECLIENT: 'assets/images/device/APACHECLIENT.png',
    ANDROIDTAB: 'assets/images/device/ANDROIDTAB.png',
    IPAD: 'assets/images/device/Ipad.png',
    API: 'assets/images/device/API.png',
    WEBCLOCK: 'assets/images/zipClock/webClkDevice.png'
};
FnDeviceConstant.DEVICE_APP_ICONS = {
    '1': 'assets/images/logo/headerLogo/zipSchedule.png',
    '2': 'assets/images/logo/headerLogo/zipclock.png',
    '3': 'assets/images/logo/headerLogo/ZipChecklist.png',
    '4': 'assets/images/logo/headerLogo/fpreport.png',
    '5': 'assets/images/logo/headerLogo/shiftBook.png',
    '6': 'assets/images/logo/headerLogo/zipForecast.png',
    '14': 'assets/images/logo/headerLogo/zip_ordering.svg',
    '8': 'assets/images/logo/headerLogo/Zip-Supplier-logo.png',
    '9': 'assets/images/logo/headerLogo/ZipAutogas_Icon_150.png',
    '10': 'assets/images/logo/headerLogo/ZipReporting_Icon_150.png',
    '11': 'assets/images/logo/headerLogo/ZipHaccp-logo.svg',
    '12': 'assets/images/logo/headerLogo/anyconnector_logo.svg',
    '13': 'assets/images/logo/headerLogo/zip_inventory.svg',
    '15': 'assets/images/logo/headerLogo/zip-temperature3.svg'
};
if (false) {
    /** @type {?} */
    FnDeviceConstant.DEVICE_FA_ICONS;
    /** @type {?} */
    FnDeviceConstant.DEVICE_IMG_ICONS;
    /** @type {?} */
    FnDeviceConstant.DEVICE_APP_ICONS;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Vasim Hayat @ 2/10/2018
 */
class FnDateFormatConstant {
}
FnDateFormatConstant.NG_DATE_FORMAT_MAP = {
    'MM/dd/YYYY': 'MM/dd/yyyy',
    'MM/DD/YYYY': 'MM/dd/yyyy',
    'DD/MM/YYYY': 'dd/MM/yyyy',
    'dd/MM/YYYY': 'dd/MM/YYYY',
    'dd/mm': 'dd/MM',
    'mm/dd': 'MM/dd',
    'dd/MM': 'dd/MM',
    'MM/dd': 'MM/dd',
    'MM/DD': 'MM/dd',
    'DD/MM': 'dd/MM',
    'MM/dd/yyyy': 'MM/dd/yyyy',
    'MM/DD/yyyy': 'MM/dd/yyyy',
    'mm/dd/yyyy': 'MM/dd/yyyy',
    'DD/MM/yyyy': 'dd/MM/yyyy',
    'dd/MM/yyyy': 'dd/MM/yyyy',
    'yyyy/mm/dd': 'yyyy/MM/dd',
    'yyyy/MM/dd': 'yyyy/MM/dd'
};
FnDateFormatConstant.NG_TIME_FORMAT_MAP = {
    'HH:mm': 'HH:mm',
    'hh:mm a': 'hh:mm aaaaa',
    'hh:mm:a': 'hh:mm aaaaa',
    'hh:mm ap': 'hh:mm aaa'
};
FnDateFormatConstant.TIME_FORMAT_MAP = {
    'HH:mm': 'H:i',
    'hh:mm:a': 'h:iP',
    'hh:mm:ap': 'h:iA'
};
FnDateFormatConstant.DATE_FORMAT_MAP = {
    'MM/dd/YYYY': 'm/d/Y',
    'MM/DD/YYYY': 'm/d/Y',
    'DD/MM/YYYY': 'd/m/Y',
    'dd/MM/YYYY': 'd/m/Y',
    'dd/mm': 'd/m',
    'mm/dd': 'm/d',
    'dd/MM': 'd/m',
    'MM/dd': 'm/d',
    'MM/DD': 'm/d',
    'DD/MM': 'd/m',
    'MM/dd/yyyy': 'm/d/Y',
    'MM/DD/yyyy': 'm/d/Y',
    'mm/dd/yyyy': 'm/d/Y',
    'DD/MM/yyyy': 'd/m/Y',
    'dd/MM/yyyy': 'd/m/Y',
    'yyyy/mm/dd': 'Y/m/d',
    'yyyy/MM/dd': 'Y/m/d'
};
if (false) {
    /** @type {?} */
    FnDateFormatConstant.NG_DATE_FORMAT_MAP;
    /** @type {?} */
    FnDateFormatConstant.NG_TIME_FORMAT_MAP;
    /** @type {?} */
    FnDateFormatConstant.TIME_FORMAT_MAP;
    /** @type {?} */
    FnDateFormatConstant.DATE_FORMAT_MAP;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FNConstant {
}
FNConstant.SPACE = '';
FNConstant.SING_SPACE = ' ';
FNConstant.EMPTYSTR = '';
FNConstant.TILDE = '~';
FNConstant.FWD_SLASH = '/';
FNConstant.COMMA = ',';
FNConstant.HYPHEN = '-';
FNConstant.UNDERSCORE = '_';
FNConstant.DOT = '\\.';
FNConstant.PERC = '%';
FNConstant.NO = 'NO';
FNConstant.NULL_LC = 'null';
FNConstant.UN_DEFINED = 'undefined';
FNConstant.FALSE_LC = 'false';
FNConstant.NULL = null;
FNConstant.WEATHER_ICON_HASH = FnWeatherConstatnt.WEATHER_ICONS;
FNConstant.WEATHER_STRINGS = FnWeatherConstatnt.WEATHER_STRINGS;
FNConstant.FNDEVICE_ICONS_HASH = FnDeviceConstant;
// public static readonly FNINDEX_CONSTANT = FNIndexConstant;
FNConstant.FNDATE_FORMAT_MAP = FnDateFormatConstant.DATE_FORMAT_MAP;
FNConstant.FNTIME_FORMAT_MAP = FnDateFormatConstant.TIME_FORMAT_MAP;
FNConstant.NG_DATE_FORMAT_MAP = FnDateFormatConstant.NG_DATE_FORMAT_MAP;
FNConstant.NG_TIME_FORMAT_MAP = FnDateFormatConstant.NG_TIME_FORMAT_MAP;
if (false) {
    /** @type {?} */
    FNConstant.SPACE;
    /** @type {?} */
    FNConstant.SING_SPACE;
    /** @type {?} */
    FNConstant.EMPTYSTR;
    /** @type {?} */
    FNConstant.TILDE;
    /** @type {?} */
    FNConstant.FWD_SLASH;
    /** @type {?} */
    FNConstant.COMMA;
    /** @type {?} */
    FNConstant.HYPHEN;
    /** @type {?} */
    FNConstant.UNDERSCORE;
    /** @type {?} */
    FNConstant.DOT;
    /** @type {?} */
    FNConstant.PERC;
    /** @type {?} */
    FNConstant.NO;
    /** @type {?} */
    FNConstant.NULL_LC;
    /** @type {?} */
    FNConstant.UN_DEFINED;
    /** @type {?} */
    FNConstant.FALSE_LC;
    /** @type {?} */
    FNConstant.NULL;
    /** @type {?} */
    FNConstant.WEATHER_ICON_HASH;
    /** @type {?} */
    FNConstant.WEATHER_STRINGS;
    /** @type {?} */
    FNConstant.FNDEVICE_ICONS_HASH;
    /** @type {?} */
    FNConstant.FNDATE_FORMAT_MAP;
    /** @type {?} */
    FNConstant.FNTIME_FORMAT_MAP;
    /** @type {?} */
    FNConstant.NG_DATE_FORMAT_MAP;
    /** @type {?} */
    FNConstant.NG_TIME_FORMAT_MAP;
}
/** @type {?} */
const FULL_NAME_REGX = /^(?:[A-Za-z]+(?:\s+|$)){1,}$/;
/** @type {?} */
const NAME_REGEX = /^[A-Za-z\s]*$/;
/** @type {?} */
const CURRENCY_REGEX = /(\d)(?=(\d{3})+\.)/g;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnUtilService {
    /**
     * @param {?} dateFormatter
     * @param {?} sanitizer
     */
    constructor(dateFormatter, sanitizer) {
        this.dateFormatter = dateFormatter;
        this.sanitizer = sanitizer;
        // converting rgb value to hex value
        this.rgb2hex = (/**
         * @param {?} rgb
         * @return {?}
         */
        (rgb) => {
            /** @type {?} */
            const _itemList = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            return '#' +
                ('0' + parseInt(_itemList[1], 10).toString(16)).slice(-2) +
                ('0' + parseInt(_itemList[2], 10).toString(16)).slice(-2) +
                ('0' + parseInt(_itemList[3], 10).toString(16)).slice(-2);
        });
        this.isEmptyObject = (/**
         * @param {?} _value
         * @return {?}
         */
        (_value) => {
            if (typeofObject(_value)) {
                return isEmptyObject(_value);
            }
            else if (typeofArray(_value)) {
                return _value.length === 0;
            }
            else if (typeofString(_value)) {
                return isEmptyString(_value);
            }
            else {
                return isNull(_value);
            }
        });
        this.sortOrderingComparator = (/**
         * @param {?} fields
         * @param {?=} isIgnoreCase
         * @return {?}
         */
        (fields, isIgnoreCase) => {
            return (/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                return fields.map((/**
                 * @param {?} obj
                 * @return {?}
                 */
                (obj) => {
                    /** @type {?} */
                    let dir = 1;
                    if (obj[0] === '-') {
                        dir = -1;
                        obj = obj.substring(1);
                    }
                    if (isIgnoreCase && isString(a[obj]) && isString(b[obj])) {
                        a[obj] = a[obj].toLowerCase();
                        b[obj] = b[obj].toLowerCase();
                    }
                    if (a[obj] > b[obj]) {
                        return dir;
                    }
                    if (a[obj] < b[obj]) {
                        return -(dir);
                    }
                    return 0;
                }))
                    .reduce((/**
                 * @param {?} p
                 * @param {?} n
                 * @return {?}
                 */
                (p, n) => {
                    return p ? p : n;
                }), 0);
            });
        });
        this.sortObjectOnKeys = (/**
         * @param {?} objArray
         * @param {?} sortKeyStr
         * @param {?=} isIgnoreCase
         * @return {?}
         */
        (objArray, sortKeyStr, isIgnoreCase) => {
            if (!this.isEmptyObject(sortKeyStr) && !this.isEmptyObject(objArray) && Array.isArray(objArray)) {
                // @ts-ignore
                return objArray.sort(this.sortOrderingComparator(sortKeyStr.split('~'), isIgnoreCase));
            }
            else {
                return objArray;
            }
        });
        this.toStringVal = (/**
         * @param {?} objVal
         * @return {?}
         */
        (objVal) => objVal + '');
        this.reverseString = (/**
         * @param {?} strVal
         * @return {?}
         */
        (strVal) => strVal.split('').reverse().join(''));
        this.reverse = (/**
         * @param {?} objVal
         * @return {?}
         */
        (objVal) => {
            if (isString(objVal)) {
                return this.reverseString(this.toStringVal(objVal));
            }
            else {
                return new Array(objVal).reverse();
            }
        });
        this.getSumOnKey = (/**
         * @param {?} objArray
         * @param {?} key
         * @return {?}
         */
        (objArray, key) => {
            /** @type {?} */
            let sum = 0;
            objArray.forEach((/**
             * @param {?} value
             * @param {?} index
             * @return {?}
             */
            (value, index) => {
                sum += parseFloat(value[key]);
            }));
            return sum;
        });
        this.mapFromArray = (/**
         * @template T
         * @param {?} _array
         * @param {?} _key
         * @param {?=} isLowercase
         * @return {?}
         */
        (_array, _key, isLowercase) => {
            if (isNull(_array)) {
                return { keyName: new Array() };
            }
            /** @type {?} */
            const _map = {};
            for (let i = 0; i < _array.length; i++) {
                if (isNotNull(_array[i][_key])) {
                    if (isLowercase) {
                        _map[_array[i][_key].toLowerCase()] = _array[i];
                    }
                    else {
                        _map[_array[i][_key]] = _array[i];
                    }
                }
            }
            return _map;
        });
        this.mapFromArrayOnInnerKey = (/**
         * @param {?} objArray
         * @param {?} outerKey
         * @param {?} innerKey
         * @return {?}
         */
        (objArray, outerKey, innerKey) => {
            /** @type {?} */
            const _returnHash = {};
            objArray.forEach((/**
             * @param {?} value
             * @param {?} index
             * @return {?}
             */
            (value, index) => {
                if (!(isNull(value[outerKey])) && (isNull(value[outerKey][innerKey]))) {
                    _returnHash[value[outerKey][innerKey]] = value;
                }
            }));
            return _returnHash;
        });
        this.mapFromTwoLevelArray = (/**
         * @param {?} objArray
         * @param {?} relArrayKey
         * @param {?} relKey
         * @return {?}
         */
        (objArray, relArrayKey, relKey) => {
            /** @type {?} */
            const returnHash = {};
            objArray.forEach((/**
             * @param {?} value
             * @param {?} index
             * @return {?}
             */
            (value, index) => {
                if (isNotNull(value) && isNotNull(value[relArrayKey])) {
                    value[relArrayKey].forEach((/**
                     * @param {?} childVal
                     * @return {?}
                     */
                    (childVal) => {
                        if (isNotNull(childVal[relKey])) {
                            returnHash[childVal[relKey]] = childVal;
                        }
                    }));
                }
            }));
            return returnHash;
        });
        this.mapFromTwoLevelHash = (/**
         * @param {?} objArray
         * @param {?} keyName
         * @param {?} relArraykey
         * @param {?} relKey
         * @return {?}
         */
        (objArray, keyName, relArraykey, relKey) => {
            /** @type {?} */
            const returnHash = {};
            objArray.forEach((/**
             * @param {?} value
             * @param {?} index
             * @return {?}
             */
            (value, index) => {
                if (isNotNull(value)) {
                    // tslint:disable-next-line:forin
                    for (const i in value) {
                        for (const j in value[i][relArraykey]) {
                            if (isNotNull(value[i][relArraykey][j][relKey])) {
                                returnHash[value[i][relArraykey][j][relKey]] = value[i][relArraykey][j];
                            }
                        }
                    }
                }
            }));
            return returnHash;
        });
        this.mapFromArrayWithRel = (/**
         * @param {?} objArray
         * @param {?} key
         * @param {?} relArrayKey
         * @param {?} relKey
         * @return {?}
         */
        (objArray, key, relArrayKey, relKey) => {
            objArray.forEach((/**
             * @param {?} value
             * @param {?} index
             * @return {?}
             */
            (value, index) => {
                if (isNotNull(value[relArrayKey])) {
                    value[relArrayKey + 'Map'] = this.mapFromArray(value[relArrayKey], relKey);
                }
            }));
            return this.mapFromArray(objArray, key);
        });
        // Will return the string value on objects values
        this.getStringOfObjectOnKey = (/**
         * @param {?} objectVal
         * @param {?=} skipKey
         * @param {?=} keyArray
         * @return {?}
         */
        (objectVal, skipKey, keyArray) => {
            skipKey = skipKey || false;
            /** @type {?} */
            const _keyArray = skipKey ? [] : keyArray;
            /** @type {?} */
            let _returnStr = '';
            for (const key in objectVal) {
                if (!skipKey && !_keyArray.includes(key.toString())) {
                    continue;
                }
                else {
                    _returnStr += ' ' + objectVal[key];
                }
            }
            return _returnStr;
        });
        this.filterArray = (/**
         * @param {?} inputArray
         * @param {?} searchTerm
         * @param {?=} skipFilterKey
         * @param {?=} filterKeyStr
         * @return {?}
         */
        (inputArray, searchTerm, skipFilterKey, filterKeyStr = '') => {
            /** @type {?} */
            const _filterArray = new Array();
            /** @type {?} */
            const _serchTerm = searchTerm.toLocaleLowerCase();
            /** @type {?} */
            const _keyArray = filterKeyStr.split('~');
            for (let _i = 0; _i < inputArray.length; _i++) {
                /** @type {?} */
                const _item = inputArray[_i];
                /** @type {?} */
                const _objectValStr = this.getStringOfObjectOnKey(_item, skipFilterKey, _keyArray);
                if (_objectValStr.toLocaleLowerCase().match(_serchTerm)) {
                    _filterArray.push(_item);
                }
            }
            return _filterArray;
        });
    }
    /**
     * @param {?} value
     * @param {?=} format
     * @param {?=} timezone
     * @param {?=} locale
     * @return {?}
     */
    transform(value, format, timezone, locale) {
        return this.dateFormatter.transform(value, format, timezone, locale);
    }
    /**
     * @param {?} htmlStr
     * @return {?}
     */
    compileHtml(htmlStr) {
        return this.sanitizer.bypassSecurityTrustHtml(htmlStr);
    }
    /**
     * @param {?} htmlStr
     * @return {?}
     */
    convertHtmlToString(htmlStr) {
        return htmlStr ? String(htmlStr).replace(/<[^>]+>/gm, '') : '';
    }
    /**
     * @param {?} objectArray
     * @param {?} key
     * @param {?=} isDesc
     * @return {?}
     */
    sortArray(objectArray, key, isDesc) {
        return sortArray(objectArray, key, isDesc);
    }
    /**
     * @param {?} busiDate
     * @return {?}
     */
    getWeek(busiDate) {
        /** @type {?} */
        const fDate = new Date(busiDate.getFullYear(), 0, 1);
        return Math.ceil((((busiDate.getTime() - fDate.getTime()) / 86400000) + fDate.getDay() + 1) / 7);
    }
    /**
     * @param {?} index
     * @param {?} dateOb
     * @param {?} isFirstDay
     * @param {?=} isLastDay
     * @return {?}
     */
    getDateByIndex(index, dateOb, isFirstDay, isLastDay) {
        /** @type {?} */
        let date = 0;
        /** @type {?} */
        const _dateObj = new Date(dateOb);
        if (index > _dateObj.getDay()) {
            date = (_dateObj.getDate() + index - _dateObj.getDay()) - 7;
        }
        else {
            date = _dateObj.getDate() + (index - _dateObj.getDay());
        }
        if (isFirstDay) {
            _dateObj.setDate(date);
        }
        else if (isLastDay) {
            _dateObj.setDate(date + 7);
        }
        return _dateObj;
    }
    /**
     * @param {?} startIndex
     * @param {?} startDate
     * @param {?} endDate
     * @return {?}
     */
    getWeekDiff(startIndex, startDate, endDate) {
        /** @type {?} */
        const week1 = this.getDateByIndex(startIndex, startDate, true, false);
        /** @type {?} */
        const week2 = this.getDateByIndex(startIndex, endDate, true, false);
        /** @type {?} */
        const weekCount1 = this.getWeek(week1);
        /** @type {?} */
        let weekCount2 = this.getWeek(week2);
        if (weekCount2 < weekCount1) {
            weekCount2 += 52;
        }
        /** @type {?} */
        const noOfWeek = (weekCount2 - weekCount1 + 1);
        return noOfWeek;
    }
    /**
     * @param {?} _startIndex
     * @param {?} _startDate
     * @param {?} _endDate
     * @return {?}
     */
    getWeekArrayForDates(_startIndex, _startDate, _endDate) {
        /** @type {?} */
        const noOfWeek = this.getWeekDiff(_startIndex, _startDate, _endDate);
        /** @type {?} */
        const newStartDate = this.getDateByIndex(_startIndex, _startDate, true, false);
        /** @type {?} */
        const weekArray = [];
        for (let i = 0; i < noOfWeek; i++) {
            /** @type {?} */
            const _weekDate = this.getDateByIndex(_startIndex, newStartDate, true, false);
            weekArray.push(this.dateFormatter.transform(_weekDate, 'MM/dd/yyyy'));
            newStartDate.setDate(newStartDate.getDate() + 7);
        }
        return weekArray;
    }
    /**
     * @param {?} startDate
     * @param {?} noOfWeek
     * @return {?}
     */
    getWeekArray(startDate, noOfWeek) {
        /** @type {?} */
        const weekArray = [];
        /** @type {?} */
        const newStartDate = new Date(startDate);
        for (let i = 0; i < noOfWeek; i++) {
            /** @type {?} */
            const newWeekHash = { startDate: null, endDate: null, formattedEndDate: null };
            newWeekHash.startDate = newStartDate;
            newWeekHash.endDate = new Date(newStartDate.setDate(newStartDate.getDate() + 6));
            newWeekHash.formattedEndDate = this.dateFormatter.transform(newWeekHash.endDate, 'yyyyMMdd');
            weekArray.push(newWeekHash);
            newStartDate.setDate(newStartDate.getDate() + 1);
        }
        return weekArray;
    }
    /**
     * @param {?} index
     * @param {?} dateOb
     * @param {?} isFirstDay
     * @param {?} isLastDay
     * @return {?}
     */
    getWeekArrayOnIndex(index, dateOb, isFirstDay, isLastDay) {
        /** @type {?} */
        const dateObjArray = [];
        /** @type {?} */
        let date = 0;
        /** @type {?} */
        const dateObj = new Date(dateOb);
        if (index > dateObj.getDay()) {
            date = (dateObj.getDate() + index - dateObj.getDay()) - 7;
        }
        else {
            date = dateObj.getDate() + (index - dateObj.getDay());
        }
        if (isFirstDay) {
            /** @type {?} */
            const dateObject = new Date(dateOb);
            dateObject.setDate(date);
            return dateObject;
        }
        else if (isLastDay) {
            /** @type {?} */
            const dateObject = new Date(dateOb);
            dateObject.setDate(date + 7);
            return dateObject;
        }
        for (let i = 0; i < 7; i++) {
            /** @type {?} */
            const dateObject = new Date(dateOb);
            dateObject.setDate(date);
            dateObjArray.push(dateObject);
            date++;
        }
        return dateObjArray;
    }
    /**
     * @param {?} val
     * @param {?=} currencyString
     * @return {?}
     */
    currencyFormatter(val, currencyString) {
        val = this.reverseString(val);
        /** @type {?} */
        let result = '';
        for (let i = 0; i < val.length; i++) {
            if (i % 3 === 0 && i !== 0) {
                result += ',' + val.charAt(i);
            }
            else {
                result += val.charAt(i);
            }
        }
        return this.reverseString(result);
    }
    /**
     * @param {?} n
     * @param {?} currency
     * @param {?} fixedDecimal
     * @return {?}
     */
    currencyRgxFormat(n, currency, fixedDecimal) {
        /** @type {?} */
        const currencyVal = currency + ' ' + n.toFixed(fixedDecimal).replace(CURRENCY_REGEX, '$1,');
        // currencyVal = currencyVal.replaceAll(" ", "");
        return currencyVal;
    }
    /**
     * @param {?} stringObj
     * @param {?} inputStr
     * @param {?} outPutStr
     * @param {?=} ignore
     * @return {?}
     */
    replaceAll(stringObj, inputStr, outPutStr, ignore) {
        return stringObj.replace(new RegExp(inputStr.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, '\\$&'), (ignore ? 'gi' : 'g')), (typeof (outPutStr) === 'string') ?
            outPutStr.replace(/\$/g, '$$$$') : outPutStr);
    }
    /**
     * @param {?} object
     * @param {?} arrayObject
     * @param {?} keyName
     * @param {?} arrayName
     * @return {?}
     */
    mapFromArrayOfArrayObjects(object, arrayObject, keyName, arrayName) {
        // 'id', 'menuItemArray' this.menuDataHash, this.menuData.menuItemArray
        if (arrayObject) {
            for (let i = 0; i < arrayObject.length; i++) {
                if (isNotNull(arrayObject[i][keyName])) {
                    object[arrayObject[i][keyName]] = arrayObject[i];
                    if (arrayName != null) {
                        this.mapFromArrayOfArrayObjects(object, arrayObject[i][arrayName], keyName, arrayName);
                    }
                }
            }
        }
    }
    /**
     * @param {?} object
     * @return {?}
     */
    copy(object) {
        return this.isEmptyObject(object) ? object : JSON.parse(JSON.stringify(object));
    }
    /**
     * @param {?} bolStr
     * @return {?}
     */
    toBoolean(bolStr) {
        if (isNotNull(bolStr) && (bolStr === true || bolStr === 'true' || bolStr === 1)) {
            return true;
        }
        return false;
    }
    /**
     * @param {?} objectMap
     * @return {?}
     */
    arrayFromMap(objectMap) {
        /** @type {?} */
        const returnArray = [];
        for (const key in objectMap) {
            if (objectMap.hasOwnProperty(key)) {
                returnArray.push(objectMap[key]);
            }
        }
        return returnArray;
    }
    /**
     * @param {?} objectArray
     * @param {?} key
     * @return {?}
     */
    arrayFromArrayOfMap(objectArray, key) {
        /** @type {?} */
        const returnArray = [];
        for (let i = 0; i < objectArray.length; i++) {
            if (isNotNull(objectArray[i][key])) {
                returnArray.push(objectArray[i][key]);
            }
        }
        return returnArray;
    }
    /**
     * @param {?} arrayObject
     * @param {?} keyName
     * @return {?}
     */
    singleKeyArrayFromMap(arrayObject, keyName) {
        /** @type {?} */
        const arrayList = [];
        for (let i = 0; i < arrayObject.length; i++) {
            if (isNotNull(arrayObject[i][keyName])) {
                arrayList.push(arrayObject[i][keyName]);
            }
        }
        return arrayList;
    }
    /**
     * @param {?} val
     * @param {?} prefix
     * @param {?} decimalValStrength
     * @param {?} suffix
     * @return {?}
     */
    altaFormatter(val, prefix, decimalValStrength, suffix) {
        /** @type {?} */
        const originalVal = val;
        /**
         * @param {?} _val
         * @param {?} formatCall
         * @param {?} noFormat
         * @param {?} originalval
         * @return {?}
         */
        function responseObject(_val, formatCall, noFormat, originalval) {
            /** @type {?} */
            let _esp = { value: '', oldvalue: '', formatcalling: null, noformat: null };
            _esp.value = _val;
            _esp.oldvalue = originalval;
            _esp.formatcalling = formatCall;
            _esp.noformat = noFormat;
            return _esp;
        }
        /** @type {?} */
        let callingStatus = true;
        /** @type {?} */
        let noStatus = true;
        if (isNull(prefix) || isNaN(prefix) === false) {
            callingStatus = false;
            prefix = '';
        }
        if (isNull(suffix) || isNaN(suffix) === false) {
            callingStatus = false;
            suffix = '';
        }
        if (isNull(decimalValStrength) || decimalValStrength === '' || isNaN(decimalValStrength)) {
            callingStatus = false;
            decimalValStrength = 0;
        }
        if (isNotNull(val) && !isNaN(val)) {
            return responseObject(this.currencyRgxFormat(parseFloat(val), prefix, decimalValStrength) + '' + suffix, callingStatus, noStatus, val);
        }
        else {
            noStatus = false;
            return responseObject(val, callingStatus, noStatus, originalVal);
        }
    }
    /**
     * @param {?} value
     * @param {?} IID
     * @param {?=} countryFormat
     * @return {?}
     */
    format(value, IID, countryFormat) {
        if (isNull(countryFormat)) {
            countryFormat = '$';
        }
        if (IID === '$') {
            return this.altaFormatter(value, countryFormat, 0, '');
        }
        else if (IID === 'N') {
            return this.altaFormatter(value, '', 0, '');
        }
        else if (IID === '$1D') {
            return this.altaFormatter(value, countryFormat, 1, '');
        }
        else if (IID === '$2D') {
            return this.altaFormatter(value, countryFormat, 2, '');
        }
        else if (IID === '$3D') {
            return this.altaFormatter(value, countryFormat, 3, '');
        }
        else if (IID === '$4D') {
            return this.altaFormatter(value, countryFormat, 4, '');
        }
        else if (IID === '1D') {
            return this.altaFormatter(value, '', 1, '');
        }
        else if (IID === '2D') {
            return this.altaFormatter(value, '', 2, '');
        }
        else if (IID === '3D') {
            return this.altaFormatter(value, '', 3, '');
        }
        else if (IID === '%') {
            return this.altaFormatter(value, '', 2, '%');
        }
    }
    /**
     * @param {?} destination
     * @param {?} src
     * @return {?}
     */
    mergeHash(destination, src) {
        for (const key in src) {
            if (Array.isArray(src[key])) {
                if (isNull(destination[key])) {
                    destination[key] = [];
                }
                destination[key] = destination[key].concat(src[key]);
            }
            else {
                destination[key] = src[key];
            }
        } // end of for loop
        return destination;
    }
    /**
     * @param {?} arrayObject
     * @param {?} key1
     * @param {?} key2
     * @return {?}
     */
    getSumOnTheBasisOfKey(arrayObject, key1, key2) {
        /** @type {?} */
        let sum = 0;
        for (let i = 0; i < arrayObject.length; i++) {
            sum += parseFloat(arrayObject[i][key1][key2]);
        }
        return sum;
    }
    /**
     * @param {?} arrayOfObject
     * @return {?}
     */
    getSimpleHash(arrayOfObject) {
        /** @type {?} */
        const _returnObj = {};
        arrayOfObject.forEach((/**
         * @param {?} obj
         * @return {?}
         */
        (obj) => {
            _returnObj[obj] = obj;
        }));
        return _returnObj;
    }
    /**
     * @param {?} stringvalue
     * @param {?} charvalue
     * @return {?}
     */
    countOccurence(stringvalue, charvalue) {
        return stringvalue.match(new RegExp(charvalue, 'g') || []).length;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    replaceDotToUnderscore(value) {
        if (value.indexOf('.') !== -1) {
            value = value.replaceAll('.', '_');
        }
        return value;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    checkCollectionLength(obj) {
        if (this.isEmptyObject(obj)) {
            return 0;
        }
        if (typeofObject(obj)) {
            return Object.keys(obj).length;
        }
        else if (Array.isArray(obj)) {
            return obj.length;
        }
        return obj.length;
    }
    /**
     * @param {?} arrayObjects
     * @param {?} keyName
     * @return {?}
     */
    hashFromArrayWithRd(arrayObjects, keyName) {
        /** @type {?} */
        const _returnHash = {};
        for (let i = 0; i < arrayObjects.length; i++) {
            /** @type {?} */
            const key = arrayObjects[i][keyName];
            if (isNotNull(_returnHash[key])) {
                _returnHash[key].push(arrayObjects[i]);
            }
            else {
                _returnHash[key] = [];
                _returnHash[key].push(arrayObjects[i]);
            }
        }
        return _returnHash;
    }
    /**
     * @param {?} time
     * @param {?} shift
     * @return {?}
     */
    formatShiftTime(time, shift) {
        /** @type {?} */
        let timeArr = time.split(' - ');
        if (timeArr.length > 1) {
            timeArr = time.split(' -');
        }
        if (timeArr.length > 1) {
            timeArr = time.split('-');
        }
        if (timeArr.length > 1) {
            timeArr = time.split('- ');
        }
        /** @type {?} */
        const startTime = timeArr[0].trim().substr(0, timeArr[0].trim().length - 2);
        /** @type {?} */
        const endTime = timeArr[1].trim().substr(0, timeArr[1].trim().length - 2);
        /** @type {?} */
        const startTimeArr = startTime.split(':');
        if (startTimeArr.length > 1) {
            // tslint:disable-next-line:radix
            shift.startTime = parseInt(startTimeArr[0]) * 60 + parseInt(startTimeArr[1]);
        }
        else {
            // tslint:disable-next-line:radix
            shift.startTime = parseInt(startTimeArr[0]) * 60;
        }
        /** @type {?} */
        const endTimeArr = endTime.split(':');
        if (endTimeArr.length > 1) {
            // tslint:disable-next-line:radix
            shift.endTime = parseInt(endTimeArr[0]) * 60 + parseInt(endTimeArr[1]);
        }
        else {
            // tslint:disable-next-line:radix
            shift.endTime = parseInt(endTimeArr[0]) * 60;
        }
    }
    /**
     * @param {?} array
     * @param {?} firstKey
     * @param {?} firstValue
     * @param {?} secondKey
     * @param {?} secondVal
     * @return {?}
     */
    getIndexWithTwoKeys(array, firstKey, firstValue, secondKey, secondVal) {
        for (let i = 0; i < array.length; i++) {
            if ((array[i][firstKey] === firstValue) && (array[i][secondKey] === secondVal)) {
                return i;
            }
        }
        return -1;
    }
    /**
     * @param {?} array
     * @param {?} attr
     * @param {?} value
     * @return {?}
     */
    getIndexIfObjWithAttr(array, attr, value) {
        for (let i = 0; i < array.length; i++) {
            if (array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }
    /**
     * @param {?} obj1
     * @param {?} obj2
     * @return {?}
     */
    isValidObjects(obj1, obj2) {
        return isNull(obj1) && isNull(obj2);
    }
    /**
     * @param {?} hashObject1
     * @param {?} hashObject2
     * @return {?}
     */
    isSameObjects(hashObject1, hashObject2) {
        /** @type {?} */
        let flag = true;
        if (this.checkCollectionLength(hashObject1) > 0 && this.checkCollectionLength(hashObject2) > 0) {
            for (const key in hashObject1) {
                if (!this.isValidObjects(hashObject1[key], hashObject2[key]) && hashObject1[key] !== hashObject2[key]) {
                    flag = false;
                    break;
                }
            }
        }
        else {
            flag = false;
        }
        return flag;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    copyObject(obj) {
        return this.isEmptyObject(obj) ? obj : JSON.parse(JSON.stringify(obj));
    }
    /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    objectEquals(x, y) {
        'use strict';
        if (x === null || x === undefined || y === null || y === undefined) {
            return x === y;
        }
        // after this just checking type of one would be enough
        if (x.constructor !== y.constructor) {
            return false;
        }
        // if they are functions, they should exactly refer to same one (because of closures)
        if (x instanceof Function) {
            return x === y;
        }
        // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
        if (x instanceof RegExp) {
            return x === y;
        }
        if (x === y || x.valueOf() === y.valueOf()) {
            return true;
        }
        if (Array.isArray(x) && x.length !== y.length) {
            return false;
        }
        // if they are dates, they must had equal valueOf
        if (x instanceof Date) {
            return false;
        }
        // if they are strictly equal, they both need to be object at least
        if (!(x instanceof Object)) {
            return false;
        }
        if (!(y instanceof Object)) {
            return false;
        }
        // recursive object equality check
        /** @type {?} */
        const p = Object.keys(x);
        return Object.keys(y).every((/**
         * @param {?} i
         * @return {?}
         */
        (i) => {
            return p.indexOf(i) !== -1;
        })) &&
            p.every((/**
             * @param {?} i
             * @return {?}
             */
            (i) => {
                return this.objectEquals(x[i], y[i]);
            }));
    }
    /**
     * @param {?} length
     * @return {?}
     */
    dummyArrayOfLength(length) {
        /** @type {?} */
        const res = [];
        for (let i = 0; i < length; i++) {
            res.push(i + 1);
        }
        return res;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    getCleanXML(str) {
        if (isNull(str)) {
            return '';
        }
        if ((str.indexOf('&') === -1) && (str.indexOf('<') === -1)) {
            return str;
        }
        if (str === '&nbsp;') {
            return str;
        }
        /** @type {?} */
        let strBuf = '';
        /** @type {?} */
        const charArray = str.split('');
        for (let i = 0; i < charArray.length; i++) {
            if (charArray[i] === '&') {
                strBuf += '&amp;';
            }
            else if (charArray[i] === '<') {
                strBuf += '&lt;';
            }
            else if (charArray[i] === '>') {
                strBuf += '&gt;';
            }
            else {
                strBuf += (charArray[i]);
            }
        }
        return strBuf.toString();
    }
    /**
     * @param {?} sourceStr
     * @param {?} sIndex
     * @param {?} endIndex
     * @param {?} toString
     * @return {?}
     */
    replaceStringAt(sourceStr, sIndex, endIndex, toString) {
        /** @type {?} */
        let _returnStr = '';
        _returnStr += sourceStr.substring(0, sIndex);
        _returnStr += toString;
        _returnStr += (sourceStr.substring(endIndex, sourceStr.length));
        return _returnStr;
    }
    /**
     * @param {?} destObj
     * @param {?} sourceObj
     * @return {?}
     */
    mergeObject(destObj, sourceObj) {
        for (const key in sourceObj) {
            if (!this.isEmptyObject(sourceObj[key])) {
                destObj[key] = sourceObj[key];
            }
        }
        return destObj;
    }
    /**
     * @param {?} numStr
     * @return {?}
     */
    isNumberStr(numStr) {
        numStr = numStr.trim(' ');
        return this.isEmptyObject(numStr) ? false : numStr.match(/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/);
    }
    /**
     * @return {?}
     */
    isIntegerNumber() {
        return new RegExp(/^[0-9]*$/);
    }
    /**
     * @param {?} arrayObject
     * @param {?} keyName
     * @param {?=} isReverse
     * @return {?}
     */
    stringSortArray(arrayObject, keyName, isReverse) {
        arrayObject.sort((/**
         * @param {?} object1
         * @param {?} object2
         * @return {?}
         */
        (object1, object2) => {
            if (isReverse) {
                return object2[keyName].localeCompare(object1[keyName]);
            }
            else {
                return object1[keyName].localeCompare(object2[keyName]);
            }
        }));
        return arrayObject;
    }
    /**
     * @param {?} array1
     * @param {?} array2
     * @param {?} key
     * @return {?}
     */
    setDifference(array1, array2, key) {
        /** @type {?} */
        const tempArray = new Array();
        for (let index = 0; index < array1.length; index++) {
            /** @type {?} */
            const value = array1[index][key];
            /** @type {?} */
            const anotherArray = array2.filter((/**
             * @param {?} dataObj
             * @return {?}
             */
            (dataObj) => {
                return dataObj[key] === value;
            }));
            if (anotherArray.length === 0) {
                tempArray.push(array1[index]);
            }
        }
        return tempArray;
    }
    /**
     * @param {?} array1
     * @param {?} array2
     * @param {?} key
     * @return {?}
     */
    inetersection(array1, array2, key) {
        /** @type {?} */
        const tempArray = new Array();
        for (let index = 0; index < array1.length; index++) {
            /** @type {?} */
            const value = array1[index][key];
            /** @type {?} */
            const anotherArray = array2.filter((/**
             * @param {?} dataObj
             * @return {?}
             */
            (dataObj) => {
                return dataObj[key] === value;
            }));
            if (anotherArray.length > 0) {
                tempArray.push(array1[index]);
            }
        }
        return tempArray;
    }
    /**
     * @param {?} bool
     * @return {?}
     */
    getBoolValue(bool) {
        if (isNotNull(bool) && (bool === true || bool === 'true' || bool === 1)) {
            return true;
        }
        return false;
    }
    /**
     * @param {?} iterations
     * @param {?} doProcess
     * @param {?} exit
     * @return {?}
     */
    syncLoop(iterations, doProcess, exit) {
        /** @type {?} */
        let index = 0;
        /** @type {?} */
        let done = false;
        /** @type {?} */
        let shouldExit = false;
        /** @type {?} */
        const loopObject = {
            /**
             * @return {?}
             */
            next() {
                if (done) {
                    if (shouldExit && exit) {
                        return exit(); // Exit the loop
                    }
                }
                // do iteation
                if (index < iterations) {
                    index++; // increase Index
                    doProcess(loopObject); // Run our process, pass in the loop
                }
                else {
                    done = true; // Make sure we say we're done
                    if (exit) {
                        exit();
                    } // Call the callback on exit
                }
            },
            /**
             * @return {?}
             */
            iteration() {
                return index - 1; // Return the current index count
            },
            /**
             * @param {?} end
             * @return {?}
             */
            break(end) {
                done = true; // End the loop
                shouldExit = end; // Passing end as true means we still call the exit callback
            }
        };
        loopObject.next(); // run for first time...
        return loopObject;
    }
}
FnUtilService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FnUtilService.ctorParameters = () => [
    { type: DatePipe },
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    FnUtilService.prototype.rgb2hex;
    /** @type {?} */
    FnUtilService.prototype.isEmptyObject;
    /** @type {?} */
    FnUtilService.prototype.sortOrderingComparator;
    /** @type {?} */
    FnUtilService.prototype.sortObjectOnKeys;
    /** @type {?} */
    FnUtilService.prototype.toStringVal;
    /** @type {?} */
    FnUtilService.prototype.reverseString;
    /** @type {?} */
    FnUtilService.prototype.reverse;
    /** @type {?} */
    FnUtilService.prototype.getSumOnKey;
    /** @type {?} */
    FnUtilService.prototype.mapFromArray;
    /** @type {?} */
    FnUtilService.prototype.mapFromArrayOnInnerKey;
    /** @type {?} */
    FnUtilService.prototype.mapFromTwoLevelArray;
    /** @type {?} */
    FnUtilService.prototype.mapFromTwoLevelHash;
    /** @type {?} */
    FnUtilService.prototype.mapFromArrayWithRel;
    /** @type {?} */
    FnUtilService.prototype.getStringOfObjectOnKey;
    /** @type {?} */
    FnUtilService.prototype.filterArray;
    /**
     * @type {?}
     * @private
     */
    FnUtilService.prototype.dateFormatter;
    /**
     * @type {?}
     * @private
     */
    FnUtilService.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FNErrorLogSvcs {
    // I log the given error to various aggregation and tracking services.
    /**
     * @param {?} error
     * @return {?}
     */
    logError(error) {
        if (this.sendExceptionToServer) {
            /** @type {?} */
            const fnExpJson = new FNExceptionJson(error);
            this.sendToServer(fnExpJson);
        }
        else {
            this.sendToConsole(error);
        }
    }
    // I send the error the browser console (safely, if it exists).
    /**
     * @param {?} error
     * @return {?}
     */
    sendToConsole(error) {
        if (console && console.group && console.error) {
            console.group('Error Log Service');
            console.error(error);
            console.error(error.message);
            console.error(error.stack);
            console.groupEnd();
        }
    }
    // I send the error to the server-side error tracking end-point.
    /**
     * @param {?} fnExpJson
     * @return {?}
     */
    sendToServer(fnExpJson) {
        // this.http
        // 	.post(
        // 		"./error-logging-endpoint", // Doesn't really exist in demo.
        // 		{
        // 			type: error.name,
        // 			message: error.message,
        // 			stack: error.stack,
        // 			location: window.location.href
        // 		}
        // 	)
        // 	.subscribe(
        // 		( httpResponse: Response ) : void => {
        // 			// ... nothing to do here.
        // 		},
        // 		( httpError: any ) : void => {
        // 			// NOTE: We know this will fail in the demo since there is no
        // 			// ability to accept POST requests on GitHub pages.
        // 			// --
        // 			// console.log( "Http error:", httpError );
        // 		}
        // 	)
    }
}
FNErrorLogSvcs.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    FNErrorLogSvcs.prototype.sendExceptionToServer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// export interface LoggingErrorHandlerOptions {
//   rethrowError: boolean;
//   unwrapError: boolean;
// }
// // tslint:disable-next-line: variable-name
// export let LOGGING_ERROR_HANDLER_OPTIONS: LoggingErrorHandlerOptions = {rethrowError: false, unwrapError: false};
class FNErrorHandler {
    // private options: LoggingErrorHandlerOptions;
    /**
     * @param {?} errorLogService
     */
    constructor(errorLogService) {
        this.errorLogService = errorLogService;
    }
    // I handle the given error.
    /**
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        // Log to the console. or Send to the error-logging service.
        try {
            this.errorLogService.logError(error);
        }
        catch (handlingError) {
            console.group('ErrorHandler');
            console.warn('Error when trying to output error.');
            console.error(handlingError);
            console.groupEnd();
        }
    }
}
FNErrorHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FNErrorHandler.ctorParameters = () => [
    { type: FNErrorLogSvcs }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FNErrorHandler.prototype.errorLogService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnThemeService {
    constructor() {
    }
    /**
     * Apply Provided Theme Pallete
     * @param {?} themePallete theme variables to be replaced.
     * @return {?}
     */
    setTheme(themePallete) {
        Object.keys(themePallete).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => document.documentElement.style.setProperty(`--${k}`, themePallete[k])));
    }
}
FnThemeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FnThemeService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnSessionStorage {
    /**
     * @param {?} fnSession
     * @return {?}
     */
    static setFnSession(fnSession) {
        localStorage.setItem('fnSession', encodeURIComponent(JSON.stringify(fnSession)));
    }
    /**
     * @return {?}
     */
    static getFnSession() {
        if (localStorage.getItem('fnSession') === undefined) {
            return;
        }
        return JSON.parse(decodeURIComponent(localStorage.getItem('fnSession')));
    }
    /**
     * @param {?} fnSession
     * @return {?}
     */
    static clearFnSession(fnSession) {
        localStorage.setItem('fnSession', undefined);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function FnSession() { }
if (false) {
    /** @type {?|undefined} */
    FnSession.prototype.ssPK;
    /** @type {?} */
    FnSession.prototype.sccPK;
    /** @type {?} */
    FnSession.prototype.scaPK;
    /** @type {?} */
    FnSession.prototype.saPK;
    /** @type {?} */
    FnSession.prototype.scPK;
    /** @type {?} */
    FnSession.prototype.scuPK;
    /** @type {?} */
    FnSession.prototype.sauPK;
    /** @type {?|undefined} */
    FnSession.prototype.wIndex;
    /** @type {?|undefined} */
    FnSession.prototype.pid;
    /** @type {?|undefined} */
    FnSession.prototype.pmid;
    /** @type {?|undefined} */
    FnSession.prototype.mid;
    /** @type {?|undefined} */
    FnSession.prototype.sgaPK;
    /** @type {?|undefined} */
    FnSession.prototype.baseUrl;
}
/**
 * @record
 */
function FnSessionState() { }
if (false) {
    /** @type {?} */
    FnSessionState.prototype.currentSession;
    /** @type {?} */
    FnSessionState.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const FnSessionActionType = {
    InitialzeCurrentSession: '[FnSession] initialize session',
    LoadSession: '[FnSession] Load Session',
    LoadSessionSuccess: '[FnSession] Load Success',
    LoadSessionError: '[FnSession] Load Error',
};
class InitialzeCurrentSession {
    constructor() {
        this.type = FnSessionActionType.InitialzeCurrentSession;
    }
}
if (false) {
    /** @type {?} */
    InitialzeCurrentSession.prototype.type;
}
class LoadSessionSuccess {
    /**
     * @param {?} payLoad
     */
    constructor(payLoad) {
        this.payLoad = payLoad;
        this.type = FnSessionActionType.LoadSessionSuccess;
    }
}
if (false) {
    /** @type {?} */
    LoadSessionSuccess.prototype.type;
    /** @type {?} */
    LoadSessionSuccess.prototype.payLoad;
}
class LoadSession {
    /**
     * @param {?} payLoad
     */
    constructor(payLoad) {
        this.payLoad = payLoad;
        this.type = FnSessionActionType.LoadSession;
    }
}
if (false) {
    /** @type {?} */
    LoadSession.prototype.type;
    /** @type {?} */
    LoadSession.prototype.payLoad;
}
class LoadSessionError {
    /**
     * @param {?} error
     */
    constructor(error) {
        this.error = error;
        this.type = FnSessionActionType.LoadSessionError;
    }
}
if (false) {
    /** @type {?} */
    LoadSessionError.prototype.type;
    /** @type {?} */
    LoadSessionError.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnSessionEffect {
    /**
     * @param {?} action$
     */
    constructor(action$) {
        this.action$ = action$;
        this.LoadSession$ = this.action$.pipe(ofType(FnSessionActionType.LoadSession), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payLoad)), mergeMap((/**
         * @param {?} fnSession
         * @return {?}
         */
        (fnSession) => {
            FnSessionStorage.setFnSession(fnSession);
            return of(new LoadSessionSuccess(fnSession));
        })));
    }
}
FnSessionEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FnSessionEffect.ctorParameters = () => [
    { type: Actions }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], FnSessionEffect.prototype, "LoadSession$", void 0);
if (false) {
    /** @type {?} */
    FnSessionEffect.prototype.LoadSession$;
    /**
     * @type {?}
     * @private
     */
    FnSessionEffect.prototype.action$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let _initalSession = FnSessionStorage.getFnSession();
_initalSession = _initalSession || {
    ssPK: 0,
    sccPK: 0,
    scaPK: 0,
    saPK: 0,
    scPK: 0,
    scuPK: 0,
    sauPK: 0,
    wIndex: 0,
    pid: null,
    pmid: null,
    mid: null,
    sgaPK: 0,
    baseUrl: null
};
/** @type {?} */
const initialFnSessionState = {
    currentSession: _initalSession,
    error: ''
};
/** @type {?} */
const getSessionFeatureState = createFeatureSelector('fnSession');
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
state => state.currentSession // may be we filter some item
;
/** @type {?} */
const getCurrentSession = createSelector(getSessionFeatureState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
state => state.ssPK;
/** @type {?} */
const getCurrent_ssPK = createSelector(getCurrentSession, (ɵ1));
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
state => state.sccPK;
/** @type {?} */
const getCurretn_sccPK = createSelector(getCurrentSession, (ɵ2));
const ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
state => state.scaPK;
/** @type {?} */
const getCurrent_scaPK = createSelector(getCurrentSession, (ɵ3));
const ɵ4 = /**
 * @param {?} state
 * @return {?}
 */
state => state.saPK;
/** @type {?} */
const getCurrent_saPK = createSelector(getCurrentSession, (ɵ4));
const ɵ5 = /**
 * @param {?} state
 * @return {?}
 */
state => state.scPK;
/** @type {?} */
const getCurrent_scPK = createSelector(getCurrentSession, (ɵ5));
const ɵ6 = /**
 * @param {?} state
 * @return {?}
 */
state => state.scuPK;
/** @type {?} */
const getCurrent_scuPK = createSelector(getCurrentSession, (ɵ6));
const ɵ7 = /**
 * @param {?} state
 * @return {?}
 */
state => state.scaPK;
/** @type {?} */
const getCurrent_sauPK = createSelector(getCurrentSession, (ɵ7));
const ɵ8 = /**
 * @param {?} state
 * @return {?}
 */
state => state.scaPK;
/** @type {?} */
const getCurrent_wIndex = createSelector(getCurrentSession, (ɵ8));
const ɵ9 = /**
 * @param {?} state
 * @return {?}
 */
state => state.pid;
/** @type {?} */
const getCurrent_pid = createSelector(getCurrentSession, (ɵ9));
const ɵ10 = /**
 * @param {?} state
 * @return {?}
 */
state => state.pmid;
/** @type {?} */
const getCurrent_pmid = createSelector(getCurrentSession, (ɵ10));
const ɵ11 = /**
 * @param {?} state
 * @return {?}
 */
state => state.mid;
/** @type {?} */
const getCurrent_mid = createSelector(getCurrentSession, (ɵ11));
const ɵ12 = /**
 * @param {?} state
 * @return {?}
 */
state => state.sgaPK;
/** @type {?} */
const getCurrent_sgaPK = createSelector(getCurrentSession, (ɵ12));
const ɵ13 = /**
 * @param {?} state
 * @return {?}
 */
state => state.baseUrl;
/** @type {?} */
const getCurrent_baseUrl = createSelector(getCurrentSession, (ɵ13));
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function fnSessionReducer(state = initialFnSessionState, action) {
    switch (action.type) {
        case FnSessionActionType.InitialzeCurrentSession:
            return Object.assign({}, state);
        case FnSessionActionType.LoadSessionSuccess:
            return Object.assign({}, state, { currentSession: action.payLoad });
        case FnSessionActionType.LoadSessionError:
            return Object.assign({}, state, { error: action.error });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FoundationModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FoundationModule,
            providers: [FnApplicationHelper, FnApplication, FnUtilService, FnCookieService, FnExceptionService,
                FNErrorLogSvcs, FNErrorHandler, FnThemeService
            ]
        };
    }
}
FoundationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    FormsModule, CommonModule
                ],
                exports: [],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                providers: [FnApplicationHelper, FnApplication, FnUtilService, FnCookieService, FnExceptionService, FNErrorLogSvcs,
                    FNErrorHandler, FnThemeService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Vasim Hayat @ 2/10/2018
 */
class FnLangConstant {
}
FnLangConstant.APP_LANGUAGE_HASH = {
    en: {
        langCode: 'en',
        flag: 'flag-icon-us',
        icon: 'app/extra/icons/usa_square_icon_64.png',
        name: 'EN',
        description: 'English'
    },
    es: {
        langCode: 'es',
        flag: 'flag-icon-es',
        icon: 'app/extra/icons/spain_square_icon_64.png',
        name: 'ES',
        description: 'Spanish'
    },
    fr: {
        langCode: 'fr',
        flag: 'flag-icon-fr',
        icon: 'app/extra/icons/france_square_icon_64.png',
        name: 'FR',
        description: 'French'
    },
    zh: {
        langCode: 'zh',
        flag: 'flag-icon-cn',
        icon: 'app/extra/icons/china_square_icon_64.png',
        name: 'ZH',
        description: 'Chines'
    },
    it: {
        langCode: 'it',
        flag: 'flag-icon-it',
        icon: 'app/extra/icons/italy_square_icon_64.png',
        name: 'IT',
        description: 'Italian'
    },
    de: {
        langCode: 'de',
        flag: 'flag-icon-de',
        icon: 'app/extra/icons/germany_square_icon_64.png',
        name: 'DE',
        description: 'Germany'
    }
};
FnLangConstant.APP_LANGUAGES = [
    FnLangConstant.APP_LANGUAGE_HASH.en,
    FnLangConstant.APP_LANGUAGE_HASH.es,
    FnLangConstant.APP_LANGUAGE_HASH.fr,
    FnLangConstant.APP_LANGUAGE_HASH.zh,
    FnLangConstant.APP_LANGUAGE_HASH.it,
    FnLangConstant.APP_LANGUAGE_HASH.de
];
if (false) {
    /** @type {?} */
    FnLangConstant.APP_LANGUAGE_HASH;
    /** @type {?} */
    FnLangConstant.APP_LANGUAGES;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class FnClickListner {
    /**
     * @param {?} excptionSvcs
     */
    constructor(excptionSvcs) {
        this.excptionSvcs = excptionSvcs;
    }
    /**
     * @param {?} eventId
     * @param {...?} restParams
     * @return {?}
     */
    click(eventId, ...restParams) {
        try {
            /** @type {?} */
            const t0 = performance.now();
            this.execute(eventId, restParams);
            /** @type {?} */
            const t1 = performance.now();
            console.log('Call to execute took ' + (t1 - t0) + ' milliseconds.');
        }
        catch (e) {
            this.excptionSvcs.logException(e);
            // throw new Error(e);
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnClickListner.prototype.excptionSvcs;
    /**
     * @abstract
     * @param {?} eventId
     * @param {?} restParams
     * @return {?}
     */
    FnClickListner.prototype.execute = function (eventId, restParams) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} min
 * @param {?} max
 * @param {?} value
 * @return {?}
 */
function getPercent(min, max, value) {
    return ((value - min) / (max - min)) * 100;
}
/**
 * @param {?} num
 * @return {?}
 */
function getPrecision(num) {
    /** @type {?} */
    const numStr = num.toString();
    /** @type {?} */
    const dotIndex = numStr.indexOf('.');
    return dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0;
}
/**
 * @param {?} num
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function ensureNumberInRange(num, min, max) {
    if (isNaN(num) || num < min) {
        return min;
    }
    else if (num > max) {
        return max;
    }
    else {
        return num;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnDateFormatter {
    constructor() {
        this.weekFullEn = ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.weekJp = ['日', '月', '火', '水', '木', '金', '土'];
        this.monthFullEn = ['January', 'February', 'March', 'ril', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        this.monthOldJp = ['睦月', '如月', '弥生', '卯月', '皐月', '水無月',
            '文月', '葉月', '長月', '神無月', '霜月', '師走'];
        this.dateSuffix = [
            'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
            'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
            'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st'
        ];
    }
    /**
     * @param {?=} d
     * @param {?=} pattern
     * @param {?=} langId
     * @return {?}
     */
    format(d, pattern, langId) {
        // tslint:disable-next-line:triple-equals
        if (langId == 'undefined' || langId == null || langId.trim() == '') {
            langId = 'NoLang';
        }
        if (typeof pattern !== 'string') {
            return;
        }
        /** @type {?} */
        const dYear = d.getFullYear();
        /** @type {?} */
        const dMonth = d.getMonth();
        /** @type {?} */
        const dDate = d.getDate();
        /** @type {?} */
        const dDay = d.getDay();
        /** @type {?} */
        const dHours = d.getHours();
        /** @type {?} */
        const dMinutes = d.getMinutes();
        /** @type {?} */
        const dSeconds = d.getSeconds();
        /** @type {?} */
        let res = '';
        if (pattern === 'RIB') {
            res = this.from24to12(dHours) + (':' + this.preZero(dMinutes)) + this.ap(dHours);
        }
        else if (pattern === 'RIB_DT') {
            res = this.preZero(dMonth + 1) + '/' + this.preZero(dDate) + '/' + dYear + ' ' + this.from24to12(dHours) +
                (':' + this.preZero(dMinutes)) + this.ap(dHours);
        }
        else {
            for (let i = 0, len = pattern.length; i < len; i++) {
                /** @type {?} */
                const c = pattern.charAt(i);
                switch (c) {
                    case '#':
                        if (i === len - 1) {
                            break;
                        }
                        res += pattern.charAt(++i);
                        break;
                    case 'Y':
                        res += dYear;
                        break;
                    case 'y':
                        res += dYear.toString().substr(2, 2);
                        break;
                    case 'm':
                        res += this.preZero(dMonth + 1);
                        break;
                    case 'M':
                        res += dMonth + 1;
                        break;
                    case 'd':
                        res += this.preZero(dDate);
                        break;
                    case 'j':
                        res += dDate;
                        break;
                    case 'w':
                        res += dDay;
                        break;
                    case 'N':
                        res += this.isoDay(dDay);
                        break;
                    case 'l':
                        if (langId !== 'NoLang') {
                            res += this.weekFullInLocal(langId, dDay);
                            break;
                        }
                        res += this.weekFullEn[dDay];
                        break;
                    case 'D':
                        if (langId !== 'NoLang') {
                            res += this.getDayInLocal(langId, dDay);
                            break;
                        }
                        res += this.weekFullEn[dDay].substr(0, 3);
                        break;
                    case 'X':
                        if (langId !== 'NoLang') {
                            res += this.getDayInShortLocal(langId, dDay);
                            break;
                        }
                        res += this.weekFullEn[dDay].substr(0, 1);
                        break;
                    case 'J':
                        res += this.weekJp[dDay];
                        break;
                    case 'F':
                        if (langId !== 'NoLang') {
                            res += this.getMonthInLocal(langId, dMonth);
                            break;
                        }
                        res += this.monthFullEn[dMonth];
                        break;
                    case 'R':
                        if (langId !== 'NoLang') {
                            res += this.getMonthAbbrInLocal(langId, dMonth);
                            break;
                        }
                        res += this.monthFullEn[dMonth].substr(0, 3);
                        break;
                    case 'O':
                        res += this.monthOldJp[dMonth];
                        break;
                    case 'a':
                        res += this.ampm(dHours);
                        break;
                    case 'P':
                        res += this.ap(dHours);
                        break;
                    case 'A':
                        res += this.ampm(dHours).toUpperCase();
                        break;
                    case 'H':
                        res += this.preZero(dHours);
                        break;
                    case 'h':
                        res += this.preZero(this.from24to12(dHours));
                        break;
                    case 'g':
                        res += this.from24to12(dHours);
                        break;
                    case 'G':
                        res += dHours;
                        break;
                    case 'i':
                        res += this.preZero(dMinutes);
                        break;
                    case 's':
                        res += this.preZero(dSeconds);
                        break;
                    case 't':
                        res += this.lastDayOfMonth(d);
                        break;
                    case 'L':
                        res += this.isLeapYear(dYear);
                        break;
                    case 'z':
                        res += this.dateCount(dYear, dMonth, dDate);
                        break;
                    case 'S':
                        res += this.dateSuffix[dDate - 1];
                        break;
                    default:
                        res += c;
                        break;
                }
            }
        }
        return res;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    preZero(value) {
        // tslint:disable-next-line:radix
        return (parseInt(value) < 10) ? '0' + value : value;
    }
    /**
     * @param {?} hours
     * @return {?}
     */
    from24to12(hours) {
        return (hours > 12) ? hours - 12 : (hours === 0 ? 12 : hours);
    }
    /**
     * @param {?} hours
     * @return {?}
     */
    ampm(hours) {
        return (hours < 12) ? 'am' : 'pm';
    }
    /**
     * @param {?} hours
     * @return {?}
     */
    ap(hours) {
        return (hours < 12) ? 'a' : 'p';
    }
    /**
     * @param {?} day
     * @return {?}
     */
    isoDay(day) {
        return (day === 0) ? '7' : day;
    }
    /**
     * @param {?} dateObj
     * @return {?}
     */
    lastDayOfMonth(dateObj) {
        /** @type {?} */
        const tmp = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 1);
        tmp.setTime(tmp.getTime() - 1);
        return tmp.getDate();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    isLeapYear(year) {
        /** @type {?} */
        const tmp = new Date(year, 0, 1);
        /** @type {?} */
        let sum = 0;
        for (let i = 0; i < 12; i++) {
            tmp.setMonth(i);
            sum += this.lastDayOfMonth(tmp);
        }
        return (sum === 365) ? '0' : '1';
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    dateCount(year, month, date) {
        /** @type {?} */
        const tmp = new Date(year, 0, 1);
        /** @type {?} */
        let sum = -1;
        for (let i = 0; i < month; i++) {
            tmp.setMonth(i);
            sum += this.lastDayOfMonth(tmp);
        }
        return sum + date;
    }
    /**
     * @param {?} lngIID
     * @param {?} month
     * @return {?}
     */
    getMonthAbbrInLocal(lngIID, month) {
        /** @type {?} */
        const lagnHash = {
            es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun',
                'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
            en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            fr: ['&#106;&#97;&#110;&#118;', '&#102;&#101;&#118;&#114;', '&#109;&#97;&#114;&#115;', '&#97;&#118;&#114;&#105;&#108;',
                '&#109;&#97;&#105;', ' &#106;&#117;&#105;&#110;',
                '&#106;&#117;&#105;&#108;', '&#97;&#111;&#117;&#116;', '&#115;&#101;&#112;&#116;', '&#111;&#99;&#116;',
                '&#110;&#111;&#118;', '&#100;&#101;&#99;'],
            zh: ['&#19968;&#26376;', '&#20108;&#26376;', ' &#19977;&#26376;', '&#22235;&#26376;', '&#20116;&#26376;',
                '&#20845;&#26376;',
                '&#19971;&#26376;', '&#19971;&#26376;', '&#20061;&#26376;', ' &#21313;&#26376;', ' &#21313;&#19968;&#26376;',
                ' &#21313;&#20108;&#26376;'],
            de: ['Jan', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni',
                'Juli', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez'],
            it: ['genn', 'febbr', 'mar', 'apr', 'magg', 'giugno',
                'luglio', 'ag', 'sett', 'ott', 'nov', 'dic']
        };
        return lagnHash[lngIID][month];
    }
    /**
     * @param {?} lngIID
     * @param {?} month
     * @return {?}
     */
    getMonthInLocal(lngIID, month) {
        /** @type {?} */
        const lagnHash = {
            es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
            en: ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'],
            fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
                'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
            zh: ['&#19968;&#26376;', '&#20108;&#26376;', ' &#19977;&#26376;', '&#22235;&#26376;', '&#20116;&#26376;',
                '&#20845;&#26376;',
                '&#19971;&#26376;', '&#19971;&#26376;', '&#20061;&#26376;', ' &#21313;&#26376;', ' &#21313;&#19968;&#26376;',
                ' &#21313;&#20108;&#26376;'],
            de: ['Januar', 'Februar', 'Marz', 'April', 'Mai', 'Juni',
                'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            it: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno',
                'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
        };
        return lagnHash[lngIID][month];
    }
    /**
     * @param {?} lngIID
     * @param {?} day
     * @return {?}
     */
    getDayInLocal(lngIID, day) {
        /** @type {?} */
        const lagnHash = {
            es: ['Dom', 'Lu', 'Ma', 'Mx', 'Ju', 'Vi', 'Sab'],
            en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            fr: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
            zh: ['&#21608;&#26085;', '&#21608;&#19968;', '&#21608;&#20108;', '&#21608;&#19977;', '&#21608;&#22235;',
                '&#21608;&#20116;', '&#21608;&#20845;'],
            de: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            it: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab']
        };
        return lagnHash[lngIID][day];
    }
    /**
     * @param {?} langId
     * @param {?} dayIndex
     * @return {?}
     */
    weekFullInLocal(langId, dayIndex) {
        /** @type {?} */
        const dayHashOnLang = {
            en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            es: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
            fr: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
            zh: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            de: ['Sonntag', 'Montag', 'Dienstag	', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            it: ['domenica', 'luned\u00ec', 'marted\u00ec', 'mercoled\u00ec', 'gioved\u00ec', 'venerd\u00ec', 'sabato']
        };
        return dayHashOnLang[langId][dayIndex];
    }
    /**
     * @param {?} lngIID
     * @param {?} day
     * @return {?}
     */
    getDayInShortLocal(lngIID, day) {
        /** @type {?} */
        const lagnHash = {
            es: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            en: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            fr: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            zh: ['&#21608;&#26085;', '&#21608;&#19968;', '&#21608;&#20108;', '&#21608;&#19977;', '&#21608;&#22235;',
                '&#21608;&#20116;', '&#21608;&#20845;'],
            de: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
            it: ['d', 'l', 'm', 'm', 'g', 'v', 's']
        };
        return lagnHash[lngIID][day];
    }
}
if (false) {
    /** @type {?} */
    FnDateFormatter.prototype.weekFullEn;
    /** @type {?} */
    FnDateFormatter.prototype.weekJp;
    /** @type {?} */
    FnDateFormatter.prototype.monthFullEn;
    /** @type {?} */
    FnDateFormatter.prototype.monthOldJp;
    /** @type {?} */
    FnDateFormatter.prototype.dateSuffix;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// All String Prototype //
String.prototype.startsWith = (/**
 * @param {?} str
 * @return {?}
 */
function (str) {
    return this.indexOf(str) === 0;
});
String.prototype.getFirstChar = (/**
 * @return {?}
 */
function () {
    return this[0];
});
String.prototype.removeSpaces = (/**
 * @return {?}
 */
function () {
    return this.replace(/\s+/g, '');
});
String.prototype.endsWith = (/**
 * @param {?} suffix
 * @return {?}
 */
function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
});
String.prototype.codePointBefore = (/**
 * @param {?} strVal
 * @return {?}
 */
function (strVal) {
    return this.substr(0, this.indexOf(strVal));
});
String.prototype.insertCharAt = (/**
 * @param {?} index
 * @param {?} character
 * @return {?}
 */
function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
});
String.prototype.replaceAll = (/**
 * @param {?} str1
 * @param {?} str2
 * @param {?} ignore
 * @return {?}
 */
function (str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, '\\$&'), (ignore ? 'gi' : 'g')), (typeof (str2) === 'string') ?
        str2.replace(/\$/g, '$$$$') : str2);
});
String.prototype.capitalizeFirstLetter = (/**
 * @return {?}
 */
function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
});
String.prototype.includes = (/**
 * @return {?}
 */
function () {
    'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
});
String.prototype.contains = (/**
 * @param {?} str
 * @param {?} startIndex
 * @return {?}
 */
function (str, startIndex) {
    return ''.indexOf.call(this, str, startIndex) !== -1;
});
// All Date Prototype //
Date.prototype.formatter = (/**
 * @param {?} formatterString
 * @param {?=} langId
 * @return {?}
 */
function (formatterString, langId) {
    return new FnDateFormatter().format(this, formatterString, langId);
});
Date.prototype.getCurrentDate = (/**
 * @return {?}
 */
function () {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate());
});
Date.prototype.offsetMntsToBusiDate = (/**
 * @param {?} minutes
 * @return {?}
 */
function (minutes) {
    /** @type {?} */
    const date = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    date.setMinutes(minutes);
    return date;
});
Date.prototype.timeForZoneOffset = (/**
 * @param {?} offset
 * @return {?}
 */
function (offset) {
    /** @type {?} */
    const utc = this.getTime() + (this.getTimezoneOffset() * 60000);
    /** @type {?} */
    const newDate = new Date(utc + (3600000 * offset));
    return newDate;
});
Date.prototype.getWeek = (/**
 * @return {?}
 */
function () {
    /** @type {?} */
    const onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - this.onejan) / 86400000) + onejan.getDay() + 1) / 7);
});
Date.prototype.dateOffset = (/**
 * @param {?} offset
 * @return {?}
 */
function (offset) {
    this.setDate(this.getDate() + offset);
    return this;
});
Date.prototype.getNextPrevDates = (/**
 * @param {?} numOfDays
 * @return {?}
 */
function (numOfDays) {
    /** @type {?} */
    const nextDate = this;
    if (numOfDays === undefined || numOfDays === 0) {
        return nextDate;
    }
    return new Date(nextDate.setDate(nextDate.getDate() + numOfDays));
});
Date.prototype.getMinutesOfDay = (/**
 * @return {?}
 */
function () {
    return (this.getHours() * 60) + this.getMinutes();
});
Date.prototype.getFormattedTime = (/**
 * @return {?}
 */
function () {
    return this.formatter('RIB');
});
Date.prototype.addDays = (/**
 * @param {?} days
 * @return {?}
 */
function (days) {
    if (!days) {
        return this;
    }
    console.log(this);
    /** @type {?} */
    const date = this;
    date.setDate(date.getDate() + days);
    return date;
});
Date.prototype.isToday = (/**
 * @return {?}
 */
function () {
    return this.isSameDate(new Date());
});
Date.prototype.clone = (/**
 * @return {?}
 */
function () {
    return new Date(+this);
});
Date.prototype.isAnotherMonth = (/**
 * @param {?} date
 * @return {?}
 */
function (date) {
    return date && this.getMonth() !== date.getMonth();
});
Date.prototype.isWeekend = (/**
 * @return {?}
 */
function () {
    return this.getDay() === 0 || this.getDay() === 6;
});
Date.prototype.isSameDate = (/**
 * @param {?} date
 * @return {?}
 */
function (date) {
    return date && this.getFullYear() === date.getFullYear() && this.getMonth() === date.getMonth() && this.getDate() === date.getDate();
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnDomLibrary {
    constructor() {
        this.nodes = [];
        this.rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);
        this.select = (/**
         * @param {?} parameter
         * @param {?} context
         * @return {?}
         */
        (parameter, context) => {
            // Allow for spaces before or after
            parameter = parameter.replace(/^\s*/, '').replace(/\s*$/, '');
            if (/^</.test(parameter)) {
                return this.generate(parameter);
            }
            return (context || document).querySelectorAll(parameter);
        });
        this.slice = (/**
         * @param {?} pseudo
         * @return {?}
         */
        (pseudo) => {
            // Check that it's not a valid object
            if (!pseudo || pseudo.length === 0 ||
                typeof pseudo === 'string' ||
                pseudo.toString() === '[object Function]') {
                return [];
            }
            // Accept also a u() object (that has .nodes)
            return pseudo.length ? [].slice.call(pseudo.nodes || pseudo) : [pseudo];
        });
        this.generate = (/**
         * @param {?} html
         * @return {?}
         */
        (html) => {
            // Table elements need to be child of <table> for some f***ed up reason
            if (/^\s*<tr[> ]/.test(html)) {
                return new FnDomLibrary().init(document.createElement('table')).html(html).children().children().nodes;
            }
            else if (/^\s*<t(h|d)[> ]/.test(html)) {
                return new FnDomLibrary().init(document.createElement('table')).html(html).children().children().children().nodes;
            }
            else if (/^\s*</.test(html)) {
                return new FnDomLibrary().init(document.createElement('div')).html(html).children().nodes;
            }
            else {
                return document.createTextNode(html);
            }
        });
        this.html = (/**
         * @param {?} text
         * @return {?}
         */
        (text) => {
            // Needs to check undefined as it might be ""
            if (text === undefined) {
                return this.first().innerHTML || '';
            }
            // If we're attempting to set some text
            // Loop through all the nodes
            return this.each((/**
             * @param {?} node
             * @return {?}
             */
            (node) => {
                // Set the inner html to the node
                node.innerHTML = text;
            }));
        });
        this.first = (/**
         * @return {?}
         */
        () => {
            return this.nodes[0] || false;
        });
        // tslint:disable-next-line: ban-types
        this.each = (/**
         * @param {?} callback
         * @return {?}
         */
        (callback) => {
            if (!callback || typeof callback !== 'function') {
                return;
            }
            for (let i = 0; i < this.nodes.length; i++) {
                callback(this.nodes[i], i);
            }
        });
        this.empty = (/**
         * @return {?}
         */
        () => {
            return this.each((/**
             * @param {?} node
             * @return {?}
             */
            (node) => {
                while (node.firstChild) {
                    node.removeChild(node.firstChild);
                }
            }));
        });
        // .filter(selector)
        // Delete all of the nodes that don't pass the selector
        this.filter = (/**
         * @param {?} selector
         * @param {?=} isNative
         * @return {?}
         */
        (selector, isNative) => {
            // The default function if it's a CSS selector
            // Cannot change name to 'selector' since it'd mess with it inside this fn
            /** @type {?} */
            let callback = (/**
             * @param {?} node
             * @return {?}
             */
            (node) => {
                // Make it compatible with some other browsers
                node.matches = node.matches || node.msMatchesSelector || node.webkitMatchesSelector;
                // Check if it's the same element (or any element if no selector was passed)
                return node.matches(selector || '*');
            });
            // filter() receives a function as in .filter(e => u(e).children().length)
            if (typeof selector === 'function') {
                callback = selector;
            }
            // filter() receives an instance of Agis as in .filter(u('a'))
            if (selector instanceof FnDomLibrary) {
                callback = (/**
                 * @param {?} node
                 * @return {?}
                 */
                (node) => {
                    return (selector.nodes).indexOf(node) !== -1;
                });
            }
            return isNative ? this.nodes.filter(callback) : new FnDomLibrary().init(this.nodes.filter(callback));
        });
        // Find all the nodes children of the current ones matched by a selector
        this.find = (/**
         * @param {?} selector
         * @return {?}
         */
        (selector) => {
            return this.map((/**
             * @param {?} node
             * @return {?}
             */
            (node) => {
                return new FnDomLibrary().init(selector || '*', node);
            }));
        });
        // tslint:disable-next-line: ban-types
        this.map = (/**
         * @param {?} callback
         * @return {?}
         */
        (callback) => {
            return callback ? new FnDomLibrary().init(this.array(callback)).unique() : this;
        });
        // Merge all of the nodes that the callback return into a simple array
        // tslint:disable-next-line: ban-types
        this.array = (/**
         * @param {?} callback
         * @return {?}
         */
        (callback) => {
            callback = callback;
            /** @type {?} */
            const self = this;
            return this.nodes.reduce((/**
             * @param {?} list
             * @param {?} node
             * @param {?} i
             * @return {?}
             */
            (list, node, i) => {
                /** @type {?} */
                let val;
                if (callback) {
                    val = callback.call(self, node, i);
                    if (!val) {
                        val = false;
                    }
                    if (typeof val === 'string') {
                        val = new FnDomLibrary().init(val);
                    }
                    if (val instanceof FnDomLibrary) {
                        val = val.nodes;
                    }
                }
                else {
                    val = node.innerHTML;
                }
                return list.concat(val !== false ? val : []);
            }), []);
        });
        // Removed duplicated nodes, used for some specific methods
        this.unique = (/**
         * @return {?}
         */
        () => {
            return new FnDomLibrary().init(this.nodes.reduce((/**
             * @param {?} clean
             * @param {?} node
             * @return {?}
             */
            (clean, node) => {
                /** @type {?} */
                const istruthy = node !== null && node !== undefined && node !== false;
                return (istruthy && clean.indexOf(node) === -1) ? clean.concat(node) : clean;
            }), []));
        });
        this.classesToArray = (/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            if (Array.isArray(val)) {
                return val;
            }
            if (typeof val === 'string') {
                return val.match(this.rnothtmlwhite) || [];
            }
            return [];
        });
        // Add class(es) to the matched nodes
        this.addClass = (/**
         * @template THIS
         * @this {THIS}
         * @param {?} value
         * @return {THIS}
         */
        (value) => {
            /** @type {?} */
            let classes;
            /** @type {?} */
            let elem;
            /** @type {?} */
            let cur;
            /** @type {?} */
            let curValue;
            /** @type {?} */
            let clazz;
            /** @type {?} */
            let j;
            /** @type {?} */
            let finalValue;
            /** @type {?} */
            let i = 0;
            classes = this.classesToArray(value);
            if (classes.length) {
                // tslint:disable-next-line: no-conditional-assignment
                while ((elem = this.nodes[i++])) {
                    curValue = this.getClass(elem);
                    cur = elem.nodeType === 1 && (' ' + this.stripAndCollapse(curValue) + ' ');
                    if (cur) {
                        j = 0;
                        // tslint:disable-next-line: no-conditional-assignment
                        while ((clazz = classes[j++])) {
                            if (cur.indexOf(' ' + clazz + ' ') < 0) {
                                cur += clazz + ' ';
                            }
                        }
                        // Only assign if different to avoid unneeded rendering.
                        finalValue = this.stripAndCollapse(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute('class', finalValue);
                        }
                    }
                }
            }
            return this;
        });
        // Normalize the arguments to an array of strings
        // Allow for several class names like "a b, c" and several parameters
        this.args = (/**
         * @param {?} args
         * @param {?} node
         * @param {?} i
         * @return {?}
         */
        (args, node, i) => {
            if (typeof args === 'function') {
                args = args(node, i);
            }
            if (typeof args !== 'string') {
                args = this.slice(args).map(this.str(node, i));
            }
            // Then convert that string to an array of not-null strings
            return args.toString().split(/[\s,]+/).filter((/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                return e.length;
            }));
        });
        this.str = (/**
         * @param {?} node
         * @param {?} i
         * @return {?}
         */
        (node, i) => {
            return (/**
             * @param {?} arg
             * @return {?}
             */
            (arg) => {
                // Call the function with the corresponding nodes
                if (typeof arg === 'function') {
                    return arg.call(this, node, i);
                }
                // From an array or other 'weird' things
                return arg.toString();
            });
        });
        this.removeClass = (/**
         * @template THIS
         * @this {THIS}
         * @param {?=} value
         * @return {THIS}
         */
        (value) => {
            /** @type {?} */
            let classes;
            /** @type {?} */
            let elem;
            /** @type {?} */
            let cur;
            /** @type {?} */
            let curValue;
            /** @type {?} */
            let clazz;
            /** @type {?} */
            let j;
            /** @type {?} */
            let finalValue;
            /** @type {?} */
            let i = 0;
            if (value === undefined) {
                this.nodes.forEach((/**
                 * @param {?} el
                 * @return {?}
                 */
                (el) => {
                    el.attr('class', '');
                }));
            }
            else {
                classes = this.classesToArray(value);
                if (classes.length) {
                    // tslint:disable-next-line: no-conditional-assignment
                    while ((elem = this.nodes[i++])) {
                        curValue = this.getClass(elem);
                        // This expression is here for better compressibility (see addClass)
                        cur = elem.nodeType === 1 && (' ' + this.stripAndCollapse(curValue) + ' ');
                        if (cur) {
                            j = 0;
                            // tslint:disable-next-line: no-conditional-assignment
                            while ((clazz = classes[j++])) {
                                // Remove *all* instances
                                while (cur.indexOf(' ' + clazz + ' ') > -1) {
                                    cur = cur.replace(' ' + clazz + ' ', ' ');
                                }
                            }
                            // Only assign if different to avoid unneeded rendering.
                            finalValue = this.stripAndCollapse(cur);
                            if (curValue !== finalValue) {
                                elem.setAttribute('class', finalValue);
                            }
                        }
                    }
                }
            }
            return this;
        });
        this.stripAndCollapse = (/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            /** @type {?} */
            const _token = val.match(this.rnothtmlwhite) || [];
            return _token.join(' ');
        });
        this.getClass = (/**
         * @param {?} elem
         * @return {?}
         */
        (elem) => {
            return elem.getAttribute && elem.getAttribute('class') || '';
        });
        this.hasClass = (/**
         * @param {?} selector
         * @return {?}
         */
        (selector) => {
            /** @type {?} */
            let className;
            /** @type {?} */
            let elem;
            /** @type {?} */
            let i = 0;
            className = ' ' + selector + ' ';
            // tslint:disable-next-line: no-conditional-assignment
            while ((elem = this.nodes[i++])) {
                if (elem.nodeType === 1 &&
                    (' ' + this.stripAndCollapse(this.getClass(elem)) + ' ').indexOf(className) > -1) {
                    return true;
                }
            }
            return false;
        });
        this._siblings = (/**
         * @param {?} n
         * @param {?} elem
         * @return {?}
         */
        (n, elem) => {
            /** @type {?} */
            const matched = [];
            for (; n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    matched.push(n);
                }
            }
            return matched;
        });
        this.siblings = (/**
         * @param {?} selector
         * @return {?}
         */
        (selector) => {
            return this.map((/**
             * @param {?} elem
             * @return {?}
             */
            (elem) => {
                return this._siblings((elem.parentNode || {}).firstChild, elem);
            })).filter(selector);
        });
        this.children = (/**
         * @param {?} selector
         * @return {?}
         */
        (selector) => {
            return this.map((/**
             * @param {?} node
             * @return {?}
             */
            (node) => {
                return this.slice(node.children);
            })).filter(selector);
        });
        this.dir = (/**
         * @param {?} elem
         * @param {?} dir
         * @return {?}
         */
        (elem, dir) => {
            /** @type {?} */
            const matched = [];
            // tslint:disable-next-line: no-conditional-assignment
            while ((elem = elem[dir]) && elem.nodeType !== 9) {
                if (elem.nodeType === 1) {
                    matched.push(elem);
                }
            }
            return matched;
        });
        this._parent = (/**
         * @param {?=} selector
         * @return {?}
         */
        (selector) => {
            return this.map((/**
             * @param {?} elem
             * @return {?}
             */
            (elem) => {
                /** @type {?} */
                const parent = elem.parentNode;
                return parent && parent.nodeType !== 11 ? parent : null;
            })).filter(selector, true);
        });
        this.parent = (/**
         * @param {?=} selector
         * @return {?}
         */
        (selector) => {
            return this.map((/**
             * @param {?} elem
             * @return {?}
             */
            (elem) => {
                /** @type {?} */
                const parent = elem.parentNode;
                return parent && parent.nodeType !== 11 ? parent : null;
            })).filter(selector);
        });
        this.parents = (/**
         * @param {?} selector
         * @return {?}
         */
        (selector) => {
            /** @type {?} */
            const parents = [];
            return this.map((/**
             * @param {?} elem
             * @return {?}
             */
            (elem) => {
                parents.push(this.dir(elem, 'parentNode'));
                return parents;
            })).filter(selector);
        });
    }
    /**
     * @param {?} parameter
     * @param {?=} context
     * @return {?}
     */
    init(parameter, context) {
        if (!(this instanceof FnDomLibrary)) {
            return new FnDomLibrary().init(parameter, context);
        }
        if (parameter instanceof FnDomLibrary) {
            return parameter;
        }
        if (typeof parameter === 'string') {
            parameter = this.select(parameter, context);
        }
        // If we're referring a specific node as in on('click', function(){ u(this) })
        // or the select() function returned a single node such as in '#id'
        if (parameter && parameter.nodeName) {
            parameter = [parameter];
        }
        // Convert to an array, since there are many 'array-like' stuff in js-land
        this.nodes = this.slice(parameter);
        return this;
    }
}
if (false) {
    /** @type {?} */
    FnDomLibrary.prototype.nodes;
    /**
     * @type {?}
     * @private
     */
    FnDomLibrary.prototype.rnothtmlwhite;
    /** @type {?} */
    FnDomLibrary.prototype.select;
    /** @type {?} */
    FnDomLibrary.prototype.slice;
    /** @type {?} */
    FnDomLibrary.prototype.generate;
    /** @type {?} */
    FnDomLibrary.prototype.html;
    /** @type {?} */
    FnDomLibrary.prototype.first;
    /** @type {?} */
    FnDomLibrary.prototype.each;
    /** @type {?} */
    FnDomLibrary.prototype.empty;
    /** @type {?} */
    FnDomLibrary.prototype.filter;
    /** @type {?} */
    FnDomLibrary.prototype.find;
    /** @type {?} */
    FnDomLibrary.prototype.map;
    /** @type {?} */
    FnDomLibrary.prototype.array;
    /** @type {?} */
    FnDomLibrary.prototype.unique;
    /** @type {?} */
    FnDomLibrary.prototype.classesToArray;
    /** @type {?} */
    FnDomLibrary.prototype.addClass;
    /** @type {?} */
    FnDomLibrary.prototype.args;
    /** @type {?} */
    FnDomLibrary.prototype.str;
    /** @type {?} */
    FnDomLibrary.prototype.removeClass;
    /**
     * @type {?}
     * @private
     */
    FnDomLibrary.prototype.stripAndCollapse;
    /** @type {?} */
    FnDomLibrary.prototype.getClass;
    /** @type {?} */
    FnDomLibrary.prototype.hasClass;
    /** @type {?} */
    FnDomLibrary.prototype._siblings;
    /** @type {?} */
    FnDomLibrary.prototype.siblings;
    /** @type {?} */
    FnDomLibrary.prototype.children;
    /** @type {?} */
    FnDomLibrary.prototype.dir;
    /** @type {?} */
    FnDomLibrary.prototype._parent;
    /** @type {?} */
    FnDomLibrary.prototype.parent;
    /** @type {?} */
    FnDomLibrary.prototype.parents;
}
/** @type {?} */
const fnDom = new FnDomLibrary().init;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
/** @type {?} */
const FLOAT_NUM_REGEX = /\d+(\.\d+)?(?=$| )|\.\d+(?=$| )|\d+(\.)?(?=$| )$/;
/** @type {?} */
const FLOAT_NUM_WITH_NEG_REGEX = /(?<=^| )[-]?\d+(\.\d+)?(?=$| )|(?<=^| )[-]?\.\d+(?=$| )|(?<=^| )[-]?\d+(\.)?(?=$| )$/;
/** @type {?} */
const VALIDATOR_MAP = {
    REQUIRED: 'REQUIRED',
    MIN_LENGTH: 'MIN_LENGTH',
    MAX_LENGTH: 'MAX_LENGTH',
    EMAIL: 'EMAIL'
};
/** @type {?} */
const FN_INPUT_TYPES = {
    TEXT: 'TEXT',
    PASSWORD: 'PASSWORD',
    STRING: 'STRING',
    PHONENUMBER: 'PHONENUMBER',
    NUMBER: 'NUMBER',
    CURRENCY: 'CURRENCY',
    FLOAT: 'FLOAT',
    DOUBLE: 'DOUBLE',
    EMAIL: 'EMAIL',
    BOOL: 'BOOL',
    TEXTAREA: 'TEXTAREA',
    LOOKUP: 'LOOKUP',
    MULTILOOKUP: 'MULTILOOKUP',
    COLOR: 'COLOR'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnNumberDirective {
    // user selected value via mouse
    /**
     * @param {?} model
     * @param {?} elementRef
     */
    constructor(model, elementRef) {
        this.model = model;
        this.elementRef = elementRef;
        this.decimalCounter = 0;
        this.navigationKeys = [
            'Backspace',
            'Delete',
            'Tab',
            'Escape',
            'Enter',
            'Home',
            'End',
            'ArrowLeft',
            'ArrowRight',
            'Clear',
            'Copy',
            'Paste'
        ];
        this.selectedVal = ''; // user selected value via mouse
        this.nativeElement = this.elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    removeSelectedVal() {
        this.selectedVal = window.getSelection().toString();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        // tslint:disable-next-line: no-string-literal
        /** @type {?} */
        const isNotAddingBeforMinus = !(e.target['value'].indexOf('-') === 0 && e.target['selectionStart'] === 0);
        if ((this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
            (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.key === 'y' && e.ctrlKey === true) || // Allow: Ctrl+y
            (e.key === 'z' && e.ctrlKey === true) || // Allow: Ctrl+y
            (e.key === 'a' && e.metaKey === true) || // Allow: Cmd+A (Mac)
            (e.key === 'c' && e.metaKey === true) || // Allow: Cmd+C (Mac)
            (e.key === 'v' && e.metaKey === true) || // Allow: Cmd+V (Mac)
            (e.key === 'x' && e.metaKey === true) || // Allow: Cmd+X(Mac)
            (e.key === 'y' && e.metaKey === true) || // Allow: Cmd+y (Mac)
            (e.key === 'z' && e.metaKey === true) || // Allow: Cmd+z (Mac)
            (this.isDecimal && e.key === '.' && this.decimalCounter < 1) && isNotAddingBeforMinus) // Allow: only one decimal point
        ) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        // tslint:disable-next-line: deprecation
        if (e.key === ' ' || !this.isValidKey(event, isNotAddingBeforMinus)) {
            e.preventDefault();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyUp(e) {
        if (!this.isDecimal) {
            return;
        }
        else {
            this.decimalCounter = this.nativeElement.value.split('.').length - 1;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPaste(event) {
        this.removeSelectedVal();
        /** @type {?} */
        const pastedInput = event.clipboardData.getData('text/plain');
        if (this.isValidPastString(pastedInput, event)) {
            document.execCommand('insertText', false, pastedInput);
        }
        else {
            document.execCommand('insertText', false, this.selectedVal);
        }
        event.preventDefault();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        /** @type {?} */
        const textData = event.dataTransfer.getData('text');
        this.nativeElement.focus();
        this.removeSelectedVal();
        if (this.isValidPastString(textData, event)) {
            document.execCommand('insertText', false, textData);
        }
        else {
            document.execCommand('insertText', false, this.selectedVal);
        }
        event.preventDefault();
    }
    /**
     * @param {?} eventKey
     * @param {?} isNotAddingDotBeforMinus
     * @return {?}
     */
    isDigit(eventKey, isNotAddingDotBeforMinus) {
        return ((eventKey >= '0' && eventKey <= '9') && isNotAddingDotBeforMinus);
    }
    /**
     * @return {?}
     */
    isAllTextSelected() {
        /** @type {?} */
        const valueLen = this.nativeElement.value.trim().length;
        return valueLen === 0;
    }
    /**
     * @param {?} event
     * @param {?} isNotAddingDotBeforMinus
     * @return {?}
     */
    isValidKey(event, isNotAddingDotBeforMinus) {
        /** @type {?} */
        const key = event.key;
        if (this.isNegative && key === '-') {
            return this.isAllTextSelected() || (event.target.selectionStart === 0 && this.nativeElement.value.indexOf('-') === -1);
        }
        else {
            if (this.isDecimal && key === '.' && (this.isAllTextSelected() || (this.decimalCounter < 1 && isNotAddingDotBeforMinus))) {
                return true;
            }
            else {
                return this.isDigit(key, isNotAddingDotBeforMinus);
            }
        }
    }
    // Used only for copy paste data
    /**
     * @param {?} inputVal
     * @param {?} event
     * @return {?}
     */
    isValidPastString(inputVal, event) {
        /** @type {?} */
        const startCursorposition = event.target.selectionStart;
        /** @type {?} */
        const endCursorposition = event.target.selectionEnd;
        return this.isAllowPastingOrDroping(this.replaceBetween(startCursorposition, endCursorposition, inputVal)) ? this.isDecimal ?
            this.isValidDecimal(inputVal, startCursorposition) : this.isValidNumber(inputVal, startCursorposition) : false;
    }
    /**
     * @param {?} inputVal
     * @param {?} startCursorposition
     * @return {?}
     */
    isValidNumber(inputVal, startCursorposition) {
        return this.isNegative && startCursorposition === 0 ? /^[-]?[0-9]+$/.test(inputVal) : /^[0-9]+$/.test(inputVal);
    }
    /**
     * @param {?} inputVal
     * @param {?} startCursorposition
     * @return {?}
     */
    isValidDecimal(inputVal, startCursorposition) {
        return this.isNegative && startCursorposition === 0 ? FLOAT_NUM_WITH_NEG_REGEX.test(inputVal) : FLOAT_NUM_REGEX.test(inputVal);
    }
    /**
     * @param {?} start
     * @param {?} end
     * @param {?} inputVal
     * @return {?}
     */
    replaceBetween(start, end, inputVal) {
        /** @type {?} */
        const value = this.nativeElement.val;
        return value !== undefined && value !== '' ? value.substring(0, start) + inputVal + value.substring(end) : inputVal;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    isAllowPastingOrDroping(val) {
        return FLOAT_NUM_WITH_NEG_REGEX.test(val);
    }
}
FnNumberDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fnNumberDirective]',
                providers: [NgModel]
            },] }
];
/** @nocollapse */
FnNumberDirective.ctorParameters = () => [
    { type: NgModel },
    { type: ElementRef }
];
FnNumberDirective.propDecorators = {
    isNegative: [{ type: Input }],
    isDecimal: [{ type: Input }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    onPaste: [{ type: HostListener, args: ['paste', ['$event'],] }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnNumberDirective.prototype.decimalCounter;
    /**
     * @type {?}
     * @private
     */
    FnNumberDirective.prototype.navigationKeys;
    /** @type {?} */
    FnNumberDirective.prototype.isNegative;
    /** @type {?} */
    FnNumberDirective.prototype.isDecimal;
    /**
     * @type {?}
     * @private
     */
    FnNumberDirective.prototype.nativeElement;
    /**
     * @type {?}
     * @private
     */
    FnNumberDirective.prototype.selectedVal;
    /**
     * @type {?}
     * @protected
     */
    FnNumberDirective.prototype.model;
    /**
     * @type {?}
     * @private
     */
    FnNumberDirective.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnCurrencyDirective extends FnNumberDirective {
    // isValidDot(key, val) {
    //     return ((key == '.') && val.toString().indexOf('.') === -1)
    // }
    /**
     * @param {?} model
     * @param {?} elementRef
     */
    constructor(model, elementRef) {
        super(model, elementRef);
        this.format = '$';
        this.whiteSpace = ' ';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleKeyboardEvent(event) {
        // return this.isDigit(event.key) || this.isValidDot(event.key, event.target.value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onBlur(value) {
        if (value.length === 1 && value.toString().indexOf('.') === 0) {
            this.model.update.emit('');
        }
        else if (this.model.valid && value !== '') {
            this.model.valueAccessor.writeValue(this.format + this.whiteSpace + String(parseFloat(value).toFixed(2)));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onFocus(value) {
        if (this.model.valid && value !== '') {
            this.model.valueAccessor.writeValue(String(parseFloat(value.replace(this.format, '').replace(this.whiteSpace, ''))));
        }
    }
}
FnCurrencyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fnCurrencyDirective]',
                providers: [NgModel]
            },] }
];
/** @nocollapse */
FnCurrencyDirective.ctorParameters = () => [
    { type: NgModel },
    { type: ElementRef }
];
FnCurrencyDirective.propDecorators = {
    format: [{ type: Input }],
    handleKeyboardEvent: [{ type: HostListener, args: ['keypress', ['$event'],] }],
    onBlur: [{ type: HostListener, args: ['blur', ['$event.target.value'],] }],
    onFocus: [{ type: HostListener, args: ['focus', ['$event.target.value'],] }]
};
if (false) {
    /** @type {?} */
    FnCurrencyDirective.prototype.format;
    /**
     * @type {?}
     * @private
     */
    FnCurrencyDirective.prototype.whiteSpace;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function UIFieldTypeId() { }
if (false) {
    /** @type {?} */
    UIFieldTypeId.prototype.iid;
    /** @type {?} */
    UIFieldTypeId.prototype.isNumber;
}
class FnInputModel {
}
if (false) {
    /** @type {?} */
    FnInputModel.prototype.isRequired;
    /** @type {?} */
    FnInputModel.prototype.minLength;
    /** @type {?} */
    FnInputModel.prototype.labelPosition;
    /** @type {?} */
    FnInputModel.prototype.typeID;
    /** @type {?} */
    FnInputModel.prototype.id;
    /** @type {?} */
    FnInputModel.prototype.isDisabled;
    /** @type {?} */
    FnInputModel.prototype.key;
    /** @type {?} */
    FnInputModel.prototype.maxLength;
    /** @type {?} */
    FnInputModel.prototype.hideLabel;
    /** @type {?} */
    FnInputModel.prototype.pattern;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnI18nService {
    /**
     * @param {?} http
     * @param {?} translateService
     */
    constructor(http, translateService) {
        this.http = http;
        this.translateService = translateService;
        this.selectedLang = 'en';
        this.languageSelected = new Subject();
        this.translateService.setDefaultLang('en');
        this.setLanguage('en');
        this.languageSelected.subscribe((/**
         * @param {?} language
         * @return {?}
         */
        (language) => {
            this.translateService.use(language);
            this.selectedLang = language;
        }));
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    setLanguage(lang) {
        this.selectedLang = lang;
        this.translateService.use(lang);
        this.languageSelected.next(lang);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    translate(key) {
        return this.translateService.instant(key);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return this.translateService.get(key);
    }
    /**
     * @param {?} lang
     * @param {?=} path
     * @return {?}
     */
    loadTranslations(lang, path = `./assets/i18n/${lang}.json`) {
        this.http.get(path).subscribe((/**
         * @param {?} messageJson
         * @return {?}
         */
        (messageJson) => {
            this.loadTranslateMessage(lang, messageJson);
        }));
    }
    /**
     * @param {?} lang
     * @param {?} messageJson
     * @return {?}
     */
    loadTranslateMessage(lang, messageJson) {
        this.translateService.setTranslation(lang, messageJson, true);
    }
    /**
     * @param {?} fieldKey
     * @param {?} validatorType
     * @return {?}
     */
    errorMessage(fieldKey, validatorType) {
        return fieldKey + '_' + validatorType;
    }
}
FnI18nService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FnI18nService.ctorParameters = () => [
    { type: HttpClient },
    { type: TranslateService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnI18nService.prototype.i18nDataMap;
    /**
     * @type {?}
     * @private
     */
    FnI18nService.prototype.selectedLang;
    /** @type {?} */
    FnI18nService.prototype.languageSelected;
    /**
     * @type {?}
     * @private
     */
    FnI18nService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    FnI18nService.prototype.translateService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} i18nSvcs
 * @param {?} config
 * @return {?}
 */
function FnPatternValidator(i18nSvcs, config) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        /** @type {?} */
        const pattern = new RegExp(`^${config.pattern}$`);
        if ((pattern).test(control.value)) {
            return null;
        }
        else {
            return { valid: false, message: i18nSvcs.errorMessage(VALIDATOR_MAP.EMAIL, config.key) };
        }
    });
}
/**
 * @param {?} i18nSvcs
 * @param {?} config
 * @return {?}
 */
function FnEmailValidator(i18nSvcs, config) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        /** @type {?} */
        const pattern = config.pattern === undefined ? EMAIL_REGEX : new RegExp(`^${config.pattern}$`);
        if ((pattern).test(control.value)) {
            return null;
        }
        else {
            return { valid: false, message: i18nSvcs.errorMessage(VALIDATOR_MAP.EMAIL, config.key) };
        }
    });
}
/**
 * @param {?} i18nSvcs
 * @param {?} config
 * @return {?}
 */
function FnRequireValidator(i18nSvcs, config) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        if (control.value !== undefined && control.value !== '') {
            return null;
        }
        else {
            return { valid: false, message: i18nSvcs.errorMessage(VALIDATOR_MAP.REQUIRED, config.key) };
        }
    });
}
/**
 * @param {?} i18nSvcs
 * @param {?} config
 * @return {?}
 */
function FnMinValidator(i18nSvcs, config) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        /** @type {?} */
        const value = control.value || '';
        if (config.isRequired && value.length >= config.minLength) {
            return null;
        }
        else {
            return { valid: false, message: i18nSvcs.errorMessage(VALIDATOR_MAP.MIN_LENGTH, config.key) };
        }
    });
}
/**
 * @param {?} i18nSvcs
 * @param {?} config
 * @return {?}
 */
function FnMaxValidator(i18nSvcs, config) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        /** @type {?} */
        const value = control.value || '';
        if (config.maxLength >= value.length) {
            return null;
        }
        else {
            return { valid: false, message: i18nSvcs.errorMessage(VALIDATOR_MAP.MIN_LENGTH, config.key) };
        }
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnInputValidator {
    /**
     * @param {?} i18nSvcs
     */
    constructor(i18nSvcs) {
        this.i18nSvcs = i18nSvcs;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this.executeValidation(control, control.value);
    }
    /**
     * @param {?} control
     * @param {?} value
     * @return {?}
     */
    executeValidation(control, value) {
        /** @type {?} */
        let validatorResp = null;
        if (this.fieldConfig.isRequired) {
            validatorResp = FnRequireValidator(this.i18nSvcs, this.fieldConfig)(control);
            if (validatorResp != null) {
                return validatorResp;
            }
        }
        if (this.fieldConfig.minLength) {
            validatorResp = FnMinValidator(this.i18nSvcs, this.fieldConfig)(control);
            if (validatorResp != null) {
                return validatorResp;
            }
        }
        if (this.fieldConfig.maxLength) {
            validatorResp = FnMaxValidator(this.i18nSvcs, this.fieldConfig)(control);
            if (validatorResp != null) {
                return validatorResp;
            }
        }
        if (this.fieldConfig.pattern) {
            validatorResp = FnPatternValidator(this.i18nSvcs, this.fieldConfig)(control);
            if (validatorResp != null) {
                return validatorResp;
            }
        }
        if (this.fieldConfig.typeID.iid === FN_INPUT_TYPES.EMAIL) {
            validatorResp = FnEmailValidator(this.i18nSvcs, this.fieldConfig)(control);
            if (validatorResp != null) {
                return validatorResp;
            }
        }
        return null;
    }
}
FnInputValidator.decorators = [
    { type: Directive, args: [{
                selector: '[fnInputValidator]',
                providers: [{ provide: NG_VALIDATORS, useExisting: FnInputValidator, multi: true }]
            },] }
];
/** @nocollapse */
FnInputValidator.ctorParameters = () => [
    { type: FnI18nService }
];
FnInputValidator.propDecorators = {
    fieldConfig: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FnInputValidator.prototype.fieldConfig;
    /**
     * @type {?}
     * @private
     */
    FnInputValidator.prototype.i18nSvcs;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable-next-line: use-pipe-transform-interface
class FnTranslatePipe extends TranslatePipe {
    /**
     * @param {?} translateService
     * @param {?} changeDetectRef
     */
    constructor(translateService, changeDetectRef) {
        super(translateService, changeDetectRef);
        this.translateService = translateService;
        this.changeDetectRef = changeDetectRef;
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        return super.transform(value, args);
    }
}
FnTranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'fnTranslate',
                pure: false
            },] }
];
/** @nocollapse */
FnTranslatePipe.ctorParameters = () => [
    { type: TranslateService },
    { type: ChangeDetectorRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnTranslatePipe.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    FnTranslatePipe.prototype.changeDetectRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnTranslateModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FnTranslateModule,
            providers: TranslateModule.forRoot().providers
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: FnTranslateModule,
            providers: TranslateModule.forChild().providers
        };
    }
}
FnTranslateModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FnTranslatePipe
                ],
                imports: [
                    TranslateModule,
                    HttpClientModule
                ],
                exports: [
                    TranslateModule,
                    HttpClientModule,
                    FnTranslatePipe
                ],
                schemas: [],
                providers: [FnI18nService, TranslatePipe]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class FnInputValueAccessor {
    constructor() {
        this.isDisabled = false;
        this.propagateChange = (/**
         * @return {?}
         */
        () => {
        });
        this.propagateTouched = (/**
         * @return {?}
         */
        () => {
        });
    }
    /**
     * @return {?}
     */
    get value() {
        return this.innerValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this.innerValue !== value) {
            this.innerValue = value;
            this.propagateChange(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.innerValue = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.propagateTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnInputValueAccessor.prototype.innerValue;
    /** @type {?} */
    FnInputValueAccessor.prototype.isDisabled;
    /** @type {?} */
    FnInputValueAccessor.prototype.propagateChange;
    /** @type {?} */
    FnInputValueAccessor.prototype.propagateTouched;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnCoreModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('FnCoreModule is already loaded. Import it in the  AppModule(Root Module) only');
        }
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FnCoreModule,
            providers: []
        };
    }
}
FnCoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FnNumberDirective, FnCurrencyDirective, FnInputValidator],
                imports: [FormsModule, CommonModule, FnTranslateModule],
                exports: [FnNumberDirective, FnCurrencyDirective, FnInputValidator],
                providers: []
            },] }
];
/** @nocollapse */
FnCoreModule.ctorParameters = () => [
    { type: FnCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnIconComponent {
    /**
     * @param {?} change
     */
    constructor(change) {
        this.change = change;
        // tslint:disable-next-line: no-inferrable-types
        this.lib = 'fa';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.contentIconCode();
    }
    /**
     * @return {?}
     */
    contentIconCode() {
        if (this.content.nativeElement.innerText) {
            this.icon = this.content.nativeElement.innerText;
            if (this.isFullCode()) {
                this.lib = this.icon.substr(0, 2);
                this.getStyle();
            }
            this.change.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    isFullCode() {
        /** @type {?} */
        const space = this.icon.indexOf(' ');
        return space !== -1;
    }
    /**
     * @return {?}
     */
    getStyle() {
        /** @type {?} */
        let fistSplit;
        /** @type {?} */
        let secondSplit;
        if (this.lib === 'fa') {
            fistSplit = 0;
            secondSplit = this.icon.indexOf(' ');
        }
        if (this.lib === 'ion') {
            fistSplit = this.icon.indexOf('-') + 1;
            secondSplit = this.icon.indexOf('-', fistSplit) - fistSplit;
        }
        this.setStyle(fistSplit, secondSplit);
    }
    /**
     * @param {?} start
     * @param {?} length
     * @return {?}
     */
    setStyle(start, length) {
        this.style = this.icon.substr(start, length);
        switch (this.lib) {
            case 'dx':
                this.setIcon(16);
                break;
            case 'fa':
                /** @type {?} */
                const fistSplit = this.icon.indexOf('-') + 1;
                this.setIcon(fistSplit);
                break;
            case 'other':
                this.setIcon((start + length) + 1);
                break;
        }
    }
    /**
     * @param {?} start
     * @return {?}
     */
    setIcon(start) {
        this.icon = this.icon.substr(start);
    }
}
FnIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-icon',
                template: " <fa-icon [icon]=\"icon\" [style]=\"style\" [size]=\"size\" [animation]=\"animation\" [color]=\"color\" [align]=\"align\"\n   *ngIf=\"lib === 'fa'\"></fa-icon>\n <div  #content>\n   <ng-content></ng-content>\n </div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
FnIconComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
FnIconComponent.propDecorators = {
    icon: [{ type: Input }],
    lib: [{ type: Input }],
    style: [{ type: Input }],
    size: [{ type: Input }],
    animation: [{ type: Input }],
    color: [{ type: Input }],
    align: [{ type: Input }],
    content: [{ type: ViewChild, args: ['content', { static: true },] }],
    template: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
};
if (false) {
    /** @type {?} */
    FnIconComponent.prototype.icon;
    /** @type {?} */
    FnIconComponent.prototype.lib;
    /** @type {?} */
    FnIconComponent.prototype.style;
    /** @type {?} */
    FnIconComponent.prototype.size;
    /** @type {?} */
    FnIconComponent.prototype.animation;
    /** @type {?} */
    FnIconComponent.prototype.color;
    /** @type {?} */
    FnIconComponent.prototype.align;
    /** @type {?} */
    FnIconComponent.prototype.content;
    /** @type {?} */
    FnIconComponent.prototype.template;
    /**
     * @type {?}
     * @private
     */
    FnIconComponent.prototype.change;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnFaIconComponent {
    constructor() {
        this.size = '11px';
        this.PREFIX = 'fa-';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formatClass();
    }
    /**
     * @private
     * @return {?}
     */
    formatClass() {
        if (this.style === undefined) {
            this.style = 'fas';
        }
        this.format = this.style + ' ';
        this.format += this.PREFIX + this.icon;
        this.format += (this.animation) ? ' anim-' + this.animation + ' animated' : '';
        this.format += (this.align) ? ' pull-' + this.align : '';
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.formatClass();
    }
}
FnFaIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-fa-icon',
                template: "<i class=\"{{ format }}\" [ngStyle]=\"{'font-size': size, 'color': color}\"></i>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
FnFaIconComponent.ctorParameters = () => [];
FnFaIconComponent.propDecorators = {
    icon: [{ type: Input }],
    style: [{ type: Input }],
    size: [{ type: Input }],
    animation: [{ type: Input }],
    color: [{ type: Input }],
    align: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FnFaIconComponent.prototype.icon;
    /** @type {?} */
    FnFaIconComponent.prototype.style;
    /** @type {?} */
    FnFaIconComponent.prototype.size;
    /** @type {?} */
    FnFaIconComponent.prototype.animation;
    /** @type {?} */
    FnFaIconComponent.prototype.color;
    /** @type {?} */
    FnFaIconComponent.prototype.align;
    /** @type {?} */
    FnFaIconComponent.prototype.format;
    /** @type {?} */
    FnFaIconComponent.prototype.PREFIX;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnIconModule {
}
FnIconModule.decorators = [
    { type: NgModule, args: [{
                imports: [FormsModule, CommonModule],
                exports: [FnIconComponent, FnFaIconComponent],
                declarations: [FnIconComponent, FnFaIconComponent],
                providers: [],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnButtonComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} contentObserver
     */
    constructor(elementRef, cdr, contentObserver) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.contentObserver = contentObserver;
        this.id = '';
        this.type = 'default';
        this.shape = null;
        this.text = '';
        this.iconAddonBefore = '';
        this.iconAddonAfter = '';
        this.height = 'auto';
        this.width = 'auto';
        this.disabled = null;
        this.flatBorder = false;
        this.outline = false;
        this.isLoading = false;
        this.indexShortcut = 0;
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} text
     * @return {?}
     */
    set textLoading(text) {
        this._textLoading = text;
    }
    /**
     * @return {?}
     */
    get textLoading() {
        return this._textLoading;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.contentObserver
            .observe(this.buttonElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.checkContent()));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    checkContent() {
        if (!((/** @type {?} */ (this.cdr))).destroyed) {
            this.cdr.detectChanges();
        }
    }
}
FnButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-button',
                template: "<!-- [ngStyle]=\"{'min-width': width, 'height': height, 'border-radius': flatBorder ? '0' : '3px', 'line-height': height }\" -->\n<button #fnbutton [id]=\"id\" cdkTrapFocus attr.tabindex=\"-1\" [ngClass]=\"{'disabled ': disabled, 'outline': outline}\"\n  [class]=\"'fn-button btn  btn-'+ type+' '+shape\" [disabled]=\"( disabled || isLoading ) ? true : null\"\n  attr.fnId=\"{{id}}\">\n  <ng-container *ngTemplateOutlet=\"template ? template : templateContent\"></ng-container>\n</button>\n<ng-template #templateContent>\n  <fn-icon *ngIf=\"iconAddonBefore\" [id]=\"'iconAddonBefore_'+id\" attr.fnId=\"{{id}}\" [class]=\"type + ' iconAddonBefore'\">\n    {{ iconAddonBefore }}\n  </fn-icon>\n  <div class=\"button-content\" [style.lineHeight]=\"height\" [id]=\"'button-content_'+id\" attr.fnId=\"{{id}}\">\n    <span class=\"label\" *ngIf=\"!isLoading\" attr.fnId=\"{{id}}\">{{ text }}</span>\n    <span class=\"label\" *ngIf=\"isLoading\" attr.fnId=\"{{id}}\">{{ textLoading }}</span>\n  </div>\n  <fn-icon *ngIf=\"iconAddonAfter\" attr.fnId=\"{{id}}\" [id]=\"'iconAddonAfter_'+id\" [class]=\"type + ' iconAddonAfter'\"\n    [ngStyle]=\"{'line-height': 'calc(' + height + ' - 1px)'}\">{{ iconAddonAfter }}\n  </fn-icon>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["fn-button{display:inline-block}fn-button .fn-button{outline:0;cursor:pointer;box-sizing:border-box;display:inline-flex}fn-button .fn-button .iconAddonBefore{box-sizing:border-box;padding:0 5px 0 0!important;pointer-events:none}fn-button .fn-button .iconAddonAfter{box-sizing:border-box;padding:0 0 0 5px!important;pointer-events:none}fn-button .fn-button .button-content{display:flex;padding:0;align-items:center;margin:auto;place-content:center}fn-button .fn-button .button-content .label{padding:0}"]
            }] }
];
/** @nocollapse */
FnButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: ContentObserver }
];
FnButtonComponent.propDecorators = {
    id: [{ type: Input }],
    type: [{ type: Input }],
    shape: [{ type: Input }],
    text: [{ type: Input }],
    iconAddonBefore: [{ type: Input }],
    iconAddonAfter: [{ type: Input }],
    height: [{ type: Input }],
    width: [{ type: Input }],
    disabled: [{ type: Input }],
    flatBorder: [{ type: Input }],
    template: [{ type: Input }],
    outline: [{ type: Input }],
    isLoading: [{ type: Input }],
    indexShortcut: [{ type: Input }],
    textLoading: [{ type: Input }],
    buttonElement: [{ type: ViewChild, args: ['fnbutton', { static: true },] }]
};
if (false) {
    /** @type {?} */
    FnButtonComponent.prototype.id;
    /** @type {?} */
    FnButtonComponent.prototype.type;
    /** @type {?} */
    FnButtonComponent.prototype.shape;
    /** @type {?} */
    FnButtonComponent.prototype.text;
    /** @type {?} */
    FnButtonComponent.prototype.iconAddonBefore;
    /** @type {?} */
    FnButtonComponent.prototype.iconAddonAfter;
    /** @type {?} */
    FnButtonComponent.prototype.height;
    /** @type {?} */
    FnButtonComponent.prototype.width;
    /** @type {?} */
    FnButtonComponent.prototype.disabled;
    /** @type {?} */
    FnButtonComponent.prototype.flatBorder;
    /** @type {?} */
    FnButtonComponent.prototype.template;
    /** @type {?} */
    FnButtonComponent.prototype.outline;
    /** @type {?} */
    FnButtonComponent.prototype.isLoading;
    /** @type {?} */
    FnButtonComponent.prototype.indexShortcut;
    /** @type {?} */
    FnButtonComponent.prototype.buttonElement;
    /**
     * @type {?}
     * @private
     */
    FnButtonComponent.prototype._textLoading;
    /**
     * @type {?}
     * @private
     */
    FnButtonComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    FnButtonComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FnButtonComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    FnButtonComponent.prototype.contentObserver;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnButtonModule {
}
FnButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [FormsModule, CommonModule, FnIconModule],
                exports: [FnButtonComponent],
                declarations: [FnButtonComponent],
                providers: [],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnSwitchComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.checked = false;
        this.fnSize = '';
        this.isDisabled = false;
        this.onChange = (/**
         * @return {?}
         */
        () => null);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    clickEvent(e) {
        e.preventDefault();
        if (!this.isDisabled) {
            this.updateValue(!this.checked);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateValue(value) {
        if (this.checked !== value) {
            this.checked = value;
            this.onChange(this.checked);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (!this.isDisabled) {
            // tslint:disable-next-line: deprecation
            /** @type {?} */
            const keyCode = e.keyCode;
            if (keyCode === LEFT_ARROW) {
                this.updateValue(false);
                e.preventDefault();
            }
            else if (keyCode === RIGHT_ARROW) {
                this.updateValue(true);
                e.preventDefault();
            }
            else if (keyCode === SPACE || keyCode === ENTER) {
                this.updateValue(!this.checked);
                e.preventDefault();
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.checked = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
        this.cdr.markForCheck();
    }
}
FnSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-switch',
                template: "<button type=\"button\" class=\"fn-switch\"\n        [disabled]=\"isDisabled\"\n        [class.fn-switch-checked]=\"checked\"\n        [class.ant-switch-disabled]=\"isDisabled\"\n        [class.fn-switch-small]=\"fnSize === 'small'\"\n        [class.fn-switch-large]=\"fnSize === 'large'\"\n        (click)=\"clickEvent($event)\"\n        (keydown)=\"onKeyDown($event)\">\n\n  <span class=\"fn-switch-inner\">\n    <span>\n      <ng-container *ngIf=\"checked\">\n        <ng-container *ngTemplateOutlet=\"checkedTemplate || defaultTemplate\"> </ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"!checked\">\n        <ng-container *ngTemplateOutlet=\"unCheckedTemplate || defaultTemplate\"> </ng-container>\n      </ng-container>\n      <ng-template #defaultTemplate>\n        {{checked ? 'Yes' : 'No'}}\n      </ng-template>\n    </span>\n  </span>\n</button>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => FnSwitchComponent)),
                        multi: true
                    }
                ],
                styles: ["fn-switch button.fn-switch{margin:0;padding:0;color:#fff;font-size:14px;list-style:none;position:relative;display:inline-block;box-sizing:border-box;min-width:44px;height:30px;line-height:28px;vertical-align:middle;background-color:#fd5969;border:1px solid transparent;border-radius:100px;cursor:pointer;transition:.36s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}fn-switch button.fn-switch.disabled,fn-switch button.fn-switch:disabled{background-color:rgba(0,0,0,.25);pointer-events:none}fn-switch button.fn-switch .checked-text{display:none}fn-switch button.fn-switch .unchecked-text{display:block}fn-switch button.fn-switch:after{position:absolute;top:1px;left:1px;width:26px;height:26px;background-color:#fff;border-radius:26px;cursor:pointer;transition:.36s cubic-bezier(.78,.14,.15,.86);content:\"|||\";box-shadow:0 2px 4px 0 rgba(0,35,11,.2);font-size:9px;line-height:25px;letter-spacing:2px;text-indent:2px;color:#ccc}fn-switch button.fn-switch span.fn-switch-inner{display:block;margin-right:12px;margin-left:34px;color:#fff;font-size:14px}fn-switch button.fn-switch.fn-switch-checked{background-color:#3bbbef}fn-switch button.fn-switch.fn-switch-checked:after{left:100%;margin-left:-1px;transform:translateX(-100%)}fn-switch button.fn-switch.fn-switch-checked span.fn-switch-inner{margin-right:34px;margin-left:12px}fn-switch button.fn-switch.fn-switch-checked .checked-text{display:block}fn-switch button.fn-switch.fn-switch-checked .unchecked-text{display:none}fn-switch button.fn-switch.fn-switch-large{min-width:48px;height:36px;line-height:14px}fn-switch button.fn-switch.fn-switch-large .fn-switch-inner{margin-right:14px;margin-left:42px;font-size:16px}fn-switch button.fn-switch.fn-switch-large.fn-switch-checked .fn-switch-inner{margin-right:42px;margin-left:14px}fn-switch button.fn-switch.fn-switch-large:after{width:32px;height:32px;font-size:10px;line-height:31px}fn-switch button.fn-switch.fn-switch-small{min-width:38px;height:24px;line-height:18px}fn-switch button.fn-switch.fn-switch-small .fn-switch-inner{margin-right:10px;margin-left:25px;font-size:12px}fn-switch button.fn-switch.fn-switch-small.fn-switch-checked .fn-switch-inner{margin-right:25px;margin-left:10px}fn-switch button.fn-switch.fn-switch-small:after{width:20px;height:20px;font-size:6px;line-height:20px}"]
            }] }
];
/** @nocollapse */
FnSwitchComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
FnSwitchComponent.propDecorators = {
    fnSize: [{ type: Input }],
    isDisabled: [{ type: Input }],
    checkedTemplate: [{ type: Input }],
    unCheckedTemplate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FnSwitchComponent.prototype.checked;
    /** @type {?} */
    FnSwitchComponent.prototype.fnSize;
    /** @type {?} */
    FnSwitchComponent.prototype.isDisabled;
    /** @type {?} */
    FnSwitchComponent.prototype.checkedTemplate;
    /** @type {?} */
    FnSwitchComponent.prototype.unCheckedTemplate;
    /** @type {?} */
    FnSwitchComponent.prototype.onTouched;
    /** @type {?} */
    FnSwitchComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    FnSwitchComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnSwitchModule {
}
FnSwitchModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FnSwitchComponent],
                imports: [CommonModule, FormsModule],
                exports: [FnSwitchComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnUiFieldMetaDataService {
    /**
     * @param {?} uiFieldKey
     * @return {?}
     */
    getFieldForId(uiFieldKey) {
        return this.uiFieldMap[uiFieldKey];
    }
    /**
     * @param {?} uiFieldKey
     * @param {?} uiFieldVal
     * @return {?}
     */
    setFieldForId(uiFieldKey, uiFieldVal) {
        this.uiFieldMap[uiFieldKey] = uiFieldVal;
    }
    /**
     * @param {?} uiFieldMap
     * @return {?}
     */
    setFieldMap(uiFieldMap) {
        this.uiFieldMap = uiFieldMap;
    }
    /**
     * @return {?}
     */
    getFieldMap() {
        return this.uiFieldMap;
    }
}
FnUiFieldMetaDataService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    FnUiFieldMetaDataService.prototype.uiFieldMap;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnBaseInputComponent extends FnInputValueAccessor {
    constructor() {
        super(...arguments);
        // @ts-ignore
        this.inputTypeMap = FN_INPUT_TYPES;
        this.name = '';
        this.id = '';
        this.placeholder = '';
        this.isDisabled = false;
        this.textAlign = 'left';
        this.isErrorBox = true;
        this.minLength = 0;
        this.isRequired = false;
        this.maxLength = 255;
        this.type = 'TEXT';
        this.parentForm = null;
        this.readonly = false;
        this.autocomplete = 'off';
        this.tabindex = 0;
        this.focusEvent = new EventEmitter();
        this.blueEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setOption();
    }
    /**
     * @return {?}
     */
    setOption() {
        this.placeholder = this.placeholder || this.name;
    }
}
FnBaseInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-base-input',
                template: "<div class=\"fn-input-box\">\r\n  <ng-container [ngSwitch]=\"type\">\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.PASSWORD\">\r\n      <ng-container *ngTemplateOutlet=\"PASSWORD\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.TEXT || inputTypeMap.STRING\">\r\n      <ng-container *ngTemplateOutlet=\" TEXT\"></ng-container>\r\n    </ng-container>\r\n    <!-- <ng-container *ngSwitchCase=\"inputTypeMap.STRING\">\r\n    <ng-container *ngTemplateOutlet=\"TEXT\"> </ng-container>\r\n  </ng-container> -->\r\n\r\n\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.NUMBER\">\r\n      <ng-container *ngTemplateOutlet=\"NUMBER\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.DOUBLE || inputTypeMap.FLOAT\">\r\n      <ng-container *ngTemplateOutlet=\"FLOAT\"></ng-container>\r\n    </ng-container>\r\n    <!-- <ng-container *ngSwitchCase=\"inputTypeMap.FLOAT\">\r\n      <ng-container *ngTemplateOutlet=\"FLOAT\"> </ng-container>\r\n    </ng-container> -->\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.CURRENCY\">\r\n      <ng-container *ngTemplateOutlet=\"CURRENCY\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.EMAIL\">\r\n      <ng-container *ngTemplateOutlet=\"EMAIL\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.BOOL\">\r\n      <ng-container *ngTemplateOutlet=\"BOOL\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.TEXTAREA\">\r\n      <ng-container *ngTemplateOutlet=\"TEXTAREA\"></ng-container>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container *ngSwitchDefault>\r\n      <ng-container *ngTemplateOutlet=\"TEXT\"></ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  <ng-template #TEXT>\r\n\r\n    <input [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n           [(ngModel)]=\"value\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\" [tabindex]=\"tabindex\"/>\r\n\r\n  </ng-template>\r\n\r\n  <ng-template #PASSWORD>\r\n    <input [id]=\"id\" type=\"password\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n           [(ngModel)]=\"value\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\" [tabindex]=\"tabindex\"/>\r\n  </ng-template>\r\n\r\n  <ng-template #NUMBER>\r\n    <input [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n           [(ngModel)]=\"value\" fnNumberDirective [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\"\r\n           [tabindex]=\"tabindex\"/>\r\n  </ng-template>\r\n  <ng-template #FLOAT>\r\n    <input [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n           [(ngModel)]=\"value\" fnNumberDirective [isDecimal]=\"'true'\" [disabled]=\"isDisabled\"\r\n           [style.text-align]=\"textAlign\"\r\n           [tabindex]=\"tabindex\"/>\r\n  </ng-template>\r\n\r\n  <ng-template #CURRENCY>\r\n    <!-- Todo for currency  -->\r\n  </ng-template>\r\n  <ng-template #EMAIL>\r\n    <input [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n           [(ngModel)]=\"value\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\" [tabindex]=\"tabindex\"/>\r\n  </ng-template>\r\n\r\n  <ng-template #TEXTAREA>\r\n    <textarea [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n              [(ngModel)]=\"value\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\"></textarea>\r\n  </ng-template>\r\n\r\n  <ng-template #BOOL>\r\n    <!--  Need to be design -->\r\n    <input [id]=\"id\" type=\"checkbox\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n           [(ngModel)]=\"value\" fnNumberDirective [isDecimal]=\"'true'\" [disabled]=\"isDisabled\"/>\r\n  </ng-template>\r\n\r\n  <!-- <ng-template #PHONENUMBER></ng-template>\r\n  <ng-template #LOOKUP></ng-template>\r\n  <ng-template #MULTILOOKUP></ng-template> -->\r\n\r\n  <ng-container *ngIf=\"isErrorBox && parentForm\">\r\n    <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\"\r\n                    [control]=\"parentForm.form.controls[name]\">\r\n    </fn-input-error>\r\n  </ng-container>\r\n\r\n</div>\r\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => FnBaseInputComponent)),
                        multi: true
                    }
                ],
                styles: ["fn-input{position:relative;width:100%;float:left}fn-input fn-base-input .fn-input-box{position:relative}fn-input fn-base-input .fn-input-box input.fn-input,fn-input fn-base-input .fn-input-box input.form-control{box-sizing:border-box;width:100%;height:34px;border:1px solid #ced4da;box-shadow:none!important;background-color:#fff;color:#555;outline:0;padding:6px 12px;font-size:14px;line-height:1.42857143;background-image:none;transition:.2s linear;border-radius:4px;display:inline-block;position:relative}fn-input fn-base-input .fn-input-box input.fn-input:active,fn-input fn-base-input .fn-input-box input.fn-input:focus,fn-input fn-base-input .fn-input-box input.fn-input:visited,fn-input fn-base-input .fn-input-box input.form-control:active,fn-input fn-base-input .fn-input-box input.form-control:focus,fn-input fn-base-input .fn-input-box input.form-control:visited{border-color:#80bdff}fn-input fn-base-input .fn-input-box input.fn-input[disabled],fn-input fn-base-input .fn-input-box input.form-control[disabled]{color:rgba(0,0,0,.25);background-color:#f5f5f5;cursor:not-allowed;opacity:1}fn-input fn-base-input .fn-input-box input.fn-input:placeholder-shown,fn-input fn-base-input .fn-input-box input.form-control:placeholder-shown{text-overflow:ellipsis;color:#999}fn-input fn-base-input .fn-input-box input.fn-input::-webkit-input-placeholder,fn-input fn-base-input .fn-input-box input.form-control::-webkit-input-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input::-moz-placeholder,fn-input fn-base-input .fn-input-box input.form-control::-moz-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input:-ms-input-placeholder,fn-input fn-base-input .fn-input-box input.form-control:-ms-input-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input::-ms-input-placeholder,fn-input fn-base-input .fn-input-box input.form-control::-ms-input-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input::placeholder,fn-input fn-base-input .fn-input-box input.form-control::placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input.input-rounded,fn-input fn-base-input .fn-input-box input.form-control.input-rounded{border-radius:25px}fn-input fn-base-input .fn-input-box textarea.fn-input{max-width:100%;height:auto;min-height:32px;line-height:1.5;vertical-align:bottom;transition:.3s,height}"]
            }] }
];
FnBaseInputComponent.propDecorators = {
    name: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    isDisabled: [{ type: Input }],
    textAlign: [{ type: Input }],
    isErrorBox: [{ type: Input }],
    minLength: [{ type: Input }],
    isRequired: [{ type: Input }],
    maxLength: [{ type: Input }],
    type: [{ type: Input }],
    parentForm: [{ type: Input }],
    readonly: [{ type: Input }],
    autocomplete: [{ type: Input }],
    tabindex: [{ type: Input }],
    pattern: [{ type: Input }],
    focusEvent: [{ type: Output }],
    blueEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FnBaseInputComponent.prototype.inputTypeMap;
    /** @type {?} */
    FnBaseInputComponent.prototype.name;
    /** @type {?} */
    FnBaseInputComponent.prototype.id;
    /** @type {?} */
    FnBaseInputComponent.prototype.placeholder;
    /** @type {?} */
    FnBaseInputComponent.prototype.isDisabled;
    /** @type {?} */
    FnBaseInputComponent.prototype.textAlign;
    /** @type {?} */
    FnBaseInputComponent.prototype.isErrorBox;
    /** @type {?} */
    FnBaseInputComponent.prototype.minLength;
    /** @type {?} */
    FnBaseInputComponent.prototype.isRequired;
    /** @type {?} */
    FnBaseInputComponent.prototype.maxLength;
    /** @type {?} */
    FnBaseInputComponent.prototype.type;
    /** @type {?} */
    FnBaseInputComponent.prototype.parentForm;
    /** @type {?} */
    FnBaseInputComponent.prototype.readonly;
    /** @type {?} */
    FnBaseInputComponent.prototype.autocomplete;
    /** @type {?} */
    FnBaseInputComponent.prototype.tabindex;
    /** @type {?} */
    FnBaseInputComponent.prototype.pattern;
    /** @type {?} */
    FnBaseInputComponent.prototype.focusEvent;
    /** @type {?} */
    FnBaseInputComponent.prototype.blueEvent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnInputComponent extends FnInputValueAccessor {
    /**
     * @param {?} fieldMetaDataSvcs
     */
    constructor(fieldMetaDataSvcs) {
        super();
        this.fieldMetaDataSvcs = fieldMetaDataSvcs;
        // @ts-ignore
        this.inputTypeMap = FN_INPUT_TYPES;
        this.type = '';
        this.name = '';
        this.isDisabled = false;
        this.autocomplete = 'off';
        this.tabindex = 0;
        this.textAlign = 'left';
        this.placeholder = '';
        this.dataKey = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.config = this.fieldMetaDataSvcs.getFieldForId(this.dataKey);
        this.type = this.config.typeID.iid;
    }
}
FnInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-input',
                template: "<ng-container [ngSwitch]=\"type\">\r\n\r\n  <!-- default for PASSWORD TEXT STRING NUMBER DOUBLE EMAIL BOOL TEXTAREA -->\r\n  <ng-container *ngSwitchDefault>\r\n    <fn-base-input [(ngModel)]=\"value\" [id]=\"config.id\" [name]=\"name\" [isDisabled]=\"isDisabled\" [isErrorBox]=\"'false'\"\r\n                   [type]=\"type\">\r\n    </fn-base-input>\r\n\r\n    <!-- @Input() name: string;\r\n      @Input() id: string;\r\n      @Input() placeholder: string;\r\n      @Input() isDisabled: boolean;\r\n      @Input() textAlign: 'left' | 'right' | 'center' | 'justify' = 'left';\r\n      @Input() isErrorBox = true;\r\n      @Input() minLength = 0;\r\n      @Input() isRequired = false;\r\n      @Input() maxLength = 255;\r\n      @Input() type: string;\r\n      @Input() parentForm: any;\r\n      @Input() readonly: boolean = null;\r\n      @Input() autocomplete = 'off';\r\n      @Input() tabindex = 0;\r\n      @Input() pattern?: any;\r\n\r\n\r\n      isRequired: true,\r\n      isEnableOnUI: true,\r\n      labelIDArray: [\r\n      'Entity_EOEmpMain_Field_email_LBL',\r\n      'Entity_EOEmpMain_Field_email_HVR'\r\n      ],\r\n      minLength: 5,\r\n      isInitialized: true,\r\n      isShowInfo: false,\r\n      labelPosition: 'left',\r\n      recalAccess: false,\r\n      typeID: {\r\n      iid: 'EMAIL',\r\n      isNumber: false,\r\n      defaultTableWidth: 50,\r\n      defaultEditWidth: 20\r\n      },\r\n      applicablePK: 0,\r\n      id: 'Entity_EOEmpMain_Field_email',\r\n      isDisabled: false,\r\n      key: 'email',\r\n      maxLength: 255,\r\n      isDynDetailKey: false,\r\n      hideLabel: false -->\r\n\r\n\r\n  </ng-container>\r\n\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.PHONENUMBER\">\r\n    <!-- TODO for phone number -->\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.CURRENCY\">\r\n    <!-- Currency -->\r\n  </ng-container>\r\n\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.LOOKUP\">\r\n    <!-- Single Lookp -->\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.MULTILOOKUP\">\r\n    <!-- Multi Lookup Lookp -->\r\n  </ng-container>\r\n\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.COLOR\">\r\n    <!-- Color -->\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"parentForm\">\r\n    <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\">\r\n    </fn-input-error>\r\n  </ng-container>\r\n\r\n</ng-container>\r\n\r\n\r\n<!-- <fn-base-input-component-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\">\r\n</fn-base-input-component-error> -->\r\n\r\n<!-- <ng-container *ngSwitchCase=\"inputTypeMap.DATE\">\r\n\r\n    </ng-container> -->\r\n\r\n<!-- <ng-container *ngSwitchCase=\"inputTypeMap.DURATION\">\r\n\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.TIME\">\r\n\r\n    </ng-container> -->\r\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => FnInputComponent)),
                        multi: true
                    }
                ],
                styles: ["fn-input{position:relative;width:100%;float:left}fn-input fn-base-input .fn-input-box{position:relative}fn-input fn-base-input .fn-input-box input.fn-input,fn-input fn-base-input .fn-input-box input.form-control{box-sizing:border-box;width:100%;height:34px;border:1px solid #ced4da;box-shadow:none!important;background-color:#fff;color:#555;outline:0;padding:6px 12px;font-size:14px;line-height:1.42857143;background-image:none;transition:.2s linear;border-radius:4px;display:inline-block;position:relative}fn-input fn-base-input .fn-input-box input.fn-input:active,fn-input fn-base-input .fn-input-box input.fn-input:focus,fn-input fn-base-input .fn-input-box input.fn-input:visited,fn-input fn-base-input .fn-input-box input.form-control:active,fn-input fn-base-input .fn-input-box input.form-control:focus,fn-input fn-base-input .fn-input-box input.form-control:visited{border-color:#80bdff}fn-input fn-base-input .fn-input-box input.fn-input[disabled],fn-input fn-base-input .fn-input-box input.form-control[disabled]{color:rgba(0,0,0,.25);background-color:#f5f5f5;cursor:not-allowed;opacity:1}fn-input fn-base-input .fn-input-box input.fn-input:placeholder-shown,fn-input fn-base-input .fn-input-box input.form-control:placeholder-shown{text-overflow:ellipsis;color:#999}fn-input fn-base-input .fn-input-box input.fn-input::-webkit-input-placeholder,fn-input fn-base-input .fn-input-box input.form-control::-webkit-input-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input::-moz-placeholder,fn-input fn-base-input .fn-input-box input.form-control::-moz-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input:-ms-input-placeholder,fn-input fn-base-input .fn-input-box input.form-control:-ms-input-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input::-ms-input-placeholder,fn-input fn-base-input .fn-input-box input.form-control::-ms-input-placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input::placeholder,fn-input fn-base-input .fn-input-box input.form-control::placeholder{color:#999}fn-input fn-base-input .fn-input-box input.fn-input.input-rounded,fn-input fn-base-input .fn-input-box input.form-control.input-rounded{border-radius:25px}fn-input fn-base-input .fn-input-box textarea.fn-input{max-width:100%;height:auto;min-height:32px;line-height:1.5;vertical-align:bottom;transition:.3s,height}"]
            }] }
];
/** @nocollapse */
FnInputComponent.ctorParameters = () => [
    { type: FnUiFieldMetaDataService }
];
FnInputComponent.propDecorators = {
    name: [{ type: Input }],
    isDisabled: [{ type: Input }],
    autocomplete: [{ type: Input }],
    tabindex: [{ type: Input }],
    textAlign: [{ type: Input }],
    placeholder: [{ type: Input }],
    parentForm: [{ type: Input }],
    dataKey: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FnInputComponent.prototype.inputTypeMap;
    /** @type {?} */
    FnInputComponent.prototype.type;
    /** @type {?} */
    FnInputComponent.prototype.config;
    /** @type {?} */
    FnInputComponent.prototype.pattern;
    /** @type {?} */
    FnInputComponent.prototype.name;
    /** @type {?} */
    FnInputComponent.prototype.isDisabled;
    /** @type {?} */
    FnInputComponent.prototype.autocomplete;
    /** @type {?} */
    FnInputComponent.prototype.tabindex;
    /** @type {?} */
    FnInputComponent.prototype.textAlign;
    /** @type {?} */
    FnInputComponent.prototype.placeholder;
    /** @type {?} */
    FnInputComponent.prototype.parentForm;
    /** @type {?} */
    FnInputComponent.prototype.dataKey;
    /**
     * @type {?}
     * @private
     */
    FnInputComponent.prototype.fieldMetaDataSvcs;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnInputErrorComponent {
    constructor() {
        this.submitted = false;
        this.position = 'bottom';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FnInputErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-input-error',
                template: "<span class=\"fn-msg-err\" [ngClass]=\"position\"\r\n      *ngIf=\"submitted && control.invalid\">{{control.errors.message || 'Invalid '}}</span>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".fn-msg-err{color:#fff;position:absolute;z-index:1;background:#e74c3c;padding:6px 10px;margin:0!important;width:-webkit-max-content;width:-moz-max-content;width:max-content;border-radius:4px;box-shadow:0 1px 4px 0 rgba(0,0,0,.35);font-size:11px}.fn-msg-err:before{content:\"\";display:block;position:absolute;border-style:solid}.fn-msg-err.top{bottom:calc(100% + 7px);left:0}.fn-msg-err.top:before{top:100%;left:10px;border-width:8px 8px 0;border-color:#e74c3c transparent transparent}.fn-msg-err.bottom{top:calc(100% + 7px);left:0}.fn-msg-err.bottom:before{bottom:100%;left:10px;border-width:0 8px 8px;border-color:transparent transparent #e74c3c}.fn-msg-err.left{top:0;right:calc(100% + 7px)}.fn-msg-err.left:before{top:5px;right:-7px;border-width:8px 0 8px 8px;border-color:transparent #e74c3c}.fn-msg-err.right{top:0;left:calc(100% + 7px)}.fn-msg-err.right:before{top:5px;left:-7px;border-width:8px 8px 8px 0;border-color:transparent #e74c3c}"]
            }] }
];
/** @nocollapse */
FnInputErrorComponent.ctorParameters = () => [];
FnInputErrorComponent.propDecorators = {
    submitted: [{ type: Input }],
    control: [{ type: Input }],
    position: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FnInputErrorComponent.prototype.submitted;
    /** @type {?} */
    FnInputErrorComponent.prototype.control;
    /** @type {?} */
    FnInputErrorComponent.prototype.position;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnInputModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FnInputModule,
            providers: [FnUiFieldMetaDataService]
        };
    }
}
FnInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FnBaseInputComponent, FnInputComponent, FnInputErrorComponent],
                imports: [FormsModule, CommonModule, FnCoreModule.forRoot()],
                exports: [FnBaseInputComponent, FnInputComponent, FnInputErrorComponent],
                providers: [FnUiFieldMetaDataService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnSelectComponent extends FnInputValueAccessor {
    constructor() {
        super();
        this.name = '';
        this.id = '';
        this.isDisabled = false;
        this.isErrorBox = true;
        this.optionList = [];
        this.labelKey = '';
        this.inputKey = '';
        this.placeholder = '';
        this.isRequired = false;
        this.tabIndex = 0;
        this.groupBy = '';
        this.changeEvent = new EventEmitter();
        this.closeEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setOption();
    }
    /**
     * @return {?}
     */
    setOption() {
        this.placeholder = this.placeholder || this.name;
    }
}
FnSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-select',
                template: "<ng-container *ngIf=\"labelKey\">\r\n  <ng-container *ngIf=\"!groupBy\">\r\n    <ng-select [items]=\"optionList\" [bindLabel]=\"labelKey\" [bindValue]=\"inputKey\" [(ngModel)]=\"value\"\r\n               [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\" (change)=\"changeEvent.emit($event)\">\r\n    </ng-select>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"groupBy\">\r\n\r\n    <ng-select [items]=\"optionList\" [bindLabel]=\"labelKey\" [bindValue]=\"inputKey\" [groupBy]=\"groupBy\"\r\n               [(ngModel)]=\"value\" [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\"\r\n               (change)=\"changeEvent.emit($event)\">\r\n      <ng-template ng-optgroup-tmp let-item=\"item\">\r\n        {{item[groupBy] || 'Unnamed group'}}\r\n      </ng-template>\r\n    </ng-select>\r\n  </ng-container>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"!labelKey\">\r\n  <ng-select [items]=\"optionList\" [(ngModel)]=\"value\" [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\"\r\n             (change)=\"changeEvent.emit($event)\">\r\n  </ng-select>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"parentForm\">\r\n  <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\"\r\n                  [tabIndex]=\"tabIndex\">\r\n  </fn-input-error>\r\n</ng-container>\r\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => FnSelectComponent)),
                        multi: true
                    }
                ],
                styles: [""]
            }] }
];
/** @nocollapse */
FnSelectComponent.ctorParameters = () => [];
FnSelectComponent.propDecorators = {
    name: [{ type: Input }],
    id: [{ type: Input }],
    isDisabled: [{ type: Input }],
    isErrorBox: [{ type: Input }],
    optionList: [{ type: Input }],
    labelKey: [{ type: Input }],
    inputKey: [{ type: Input }],
    placeholder: [{ type: Input }],
    isRequired: [{ type: Input }],
    parentForm: [{ type: Input }],
    tabIndex: [{ type: Input }],
    groupBy: [{ type: Input }],
    changeEvent: [{ type: Output }],
    closeEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FnSelectComponent.prototype.name;
    /** @type {?} */
    FnSelectComponent.prototype.id;
    /** @type {?} */
    FnSelectComponent.prototype.isDisabled;
    /** @type {?} */
    FnSelectComponent.prototype.isErrorBox;
    /** @type {?} */
    FnSelectComponent.prototype.optionList;
    /** @type {?} */
    FnSelectComponent.prototype.labelKey;
    /** @type {?} */
    FnSelectComponent.prototype.inputKey;
    /** @type {?} */
    FnSelectComponent.prototype.placeholder;
    /** @type {?} */
    FnSelectComponent.prototype.isRequired;
    /** @type {?} */
    FnSelectComponent.prototype.parentForm;
    /** @type {?} */
    FnSelectComponent.prototype.tabIndex;
    /** @type {?} */
    FnSelectComponent.prototype.groupBy;
    /** @type {?} */
    FnSelectComponent.prototype.changeEvent;
    /** @type {?} */
    FnSelectComponent.prototype.closeEvent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnMultiSelectComponent extends FnInputValueAccessor {
    constructor() {
        super();
        this.name = '';
        this.id = '';
        this.isDisabled = false;
        this.isErrorBox = true;
        this.optionList = [];
        this.labelKey = '';
        this.placeholder = '';
        this.isRequired = false;
        this.tabIndex = 0;
        this.maxSelectedItems = 0;
        this.changeEvent = new EventEmitter();
        this.closeEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setOption();
    }
    /**
     * @return {?}
     */
    setOption() {
        this.placeholder = this.placeholder || this.name;
    }
}
FnMultiSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-multi-select',
                template: "<ng-container>\r\n  <ng-container *ngIf=\"!groupBy\">\r\n    <ng-select [items]=\"optionList\" [multiple]=\"true\" [maxSelectedItems]=\"\" [bindLabel]=\"labelKey\" [(ngModel)]=\"value\"\r\n               [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\" (change)=\"changeEvent.emit($event)\">\r\n    </ng-select>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"groupBy\">\r\n\r\n    <ng-select [items]=\"optionList\" [multiple]=\"true\" [groupBy]=\"groupBy\" [maxSelectedItems]=\"\" [bindLabel]=\"labelKey\"\r\n               [(ngModel)]=\"value\" [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\"\r\n               (change)=\"changeEvent.emit($event)\">\r\n\r\n      <ng-template ng-optgroup-tmp let-item=\"item\">\r\n        {{item[groupBy] || 'Unnamed group'}}\r\n      </ng-template>\r\n    </ng-select>\r\n  </ng-container>\r\n</ng-container>\r\n\r\n\r\n<ng-container *ngIf=\"parentForm\">\r\n  <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\"\r\n                  [tabIndex]=\"tabIndex\">\r\n  </fn-input-error>\r\n</ng-container>\r\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => FnMultiSelectComponent)),
                        multi: true
                    }
                ],
                styles: [":root{--list-item-hover-bg:$list-item-hover-bg}fn-select ng-select.ng-select-opened .ng-select-container .ng-arrow-wrapper .ng-arrow{top:-5px!important}fn-select ng-select .ng-select-container .ng-value-container .ng-input{top:inherit!important;padding-left:12px!important}fn-select ng-select .ng-select-container .ng-value-container .ng-input input{font-size:1rem;line-height:30px}fn-select ng-select .ng-select-container .ng-clear-wrapper{line-height:32px}fn-select ng-select .ng-select-container .ng-arrow-wrapper .ng-arrow{height:9px}fn-select ng-select ng-dropdown-panel.ng-dropdown-panel .ng-dropdown-panel-items div.ng-option{padding:5px 10px 5px 22px!important;transition:.3s ease-in}fn-select ng-select ng-dropdown-panel.ng-dropdown-panel .ng-dropdown-panel-items div.ng-option.ng-option-marked{background-color:var(--list-item-hover-bg);color:#fff}fn-select ng-select ng-dropdown-panel.ng-dropdown-panel .ng-dropdown-panel-items div.ng-option,fn-select ng-select ng-dropdown-panel.ng-dropdown-panel .ng-dropdown-panel-items div.ng-option-disabled{line-height:20px!important;font-size:14px}fn-select ng-select ng-dropdown-panel.ng-dropdown-panel .ng-dropdown-panel-items div.ng-option span,fn-select ng-select ng-dropdown-panel.ng-dropdown-panel .ng-dropdown-panel-items div.ng-option-disabled span{font-size:14px}"]
            }] }
];
/** @nocollapse */
FnMultiSelectComponent.ctorParameters = () => [];
FnMultiSelectComponent.propDecorators = {
    name: [{ type: Input }],
    id: [{ type: Input }],
    isDisabled: [{ type: Input }],
    isErrorBox: [{ type: Input }],
    optionList: [{ type: Input }],
    labelKey: [{ type: Input }],
    placeholder: [{ type: Input }],
    isRequired: [{ type: Input }],
    parentForm: [{ type: Input }],
    tabIndex: [{ type: Input }],
    groupBy: [{ type: Input }],
    maxSelectedItems: [{ type: Input }],
    changeEvent: [{ type: Output }],
    closeEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FnMultiSelectComponent.prototype.name;
    /** @type {?} */
    FnMultiSelectComponent.prototype.id;
    /** @type {?} */
    FnMultiSelectComponent.prototype.isDisabled;
    /** @type {?} */
    FnMultiSelectComponent.prototype.isErrorBox;
    /** @type {?} */
    FnMultiSelectComponent.prototype.optionList;
    /** @type {?} */
    FnMultiSelectComponent.prototype.labelKey;
    /** @type {?} */
    FnMultiSelectComponent.prototype.placeholder;
    /** @type {?} */
    FnMultiSelectComponent.prototype.isRequired;
    /** @type {?} */
    FnMultiSelectComponent.prototype.parentForm;
    /** @type {?} */
    FnMultiSelectComponent.prototype.tabIndex;
    /** @type {?} */
    FnMultiSelectComponent.prototype.groupBy;
    /** @type {?} */
    FnMultiSelectComponent.prototype.maxSelectedItems;
    /** @type {?} */
    FnMultiSelectComponent.prototype.changeEvent;
    /** @type {?} */
    FnMultiSelectComponent.prototype.closeEvent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnSelectModule {
}
FnSelectModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, NgSelectModule, FnCoreModule, FnInputModule],
                declarations: [FnSelectComponent, FnMultiSelectComponent],
                exports: [FnSelectComponent, FnMultiSelectComponent],
                providers: [],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnConfirmModalComponent {
    /**
     * @param {?} dialogRef
     * @param {?} dialogData
     */
    constructor(dialogRef, dialogData) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
    }
    /**
     * @param {?=} isOkey
     * @return {?}
     */
    close(isOkey = false) {
        this.dialogRef.close(isOkey);
    }
}
FnConfirmModalComponent.decorators = [
    { type: Component, args: [{
                template: "<!--<modal-header mat-dialog-title> <h2>{{dialogData.title}}</h2></modal-header>-->\r\n<fn-modal-header class=\"modal-header-success\">\r\n  <h5 class=\"modal-title\" mat-dialog-title>{{dialogData.title}}</h5>\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</fn-modal-header>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  {{dialogData.content}}\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button class=\"btn btn-danger float-left btn-round\" (click)=\"close()\">Cancel</button>\r\n  <button class=\"btn btn-primary float-right btn-round\" (click)=\"close(true)\" cdkFocusInitial>Ok</button>\r\n</mat-dialog-actions>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["fn-button{display:inline-block}fn-button .fn-button{outline:0;cursor:pointer;box-sizing:border-box;display:inline-flex}fn-button .fn-button .iconAddonBefore{box-sizing:border-box;padding:0 5px 0 0!important;pointer-events:none}fn-button .fn-button .iconAddonAfter{box-sizing:border-box;padding:0 0 0 5px!important;pointer-events:none}fn-button .fn-button .button-content{display:flex;padding:0;align-items:center;margin:auto;place-content:center}fn-button .fn-button .button-content .label{padding:0}.btn-action{width:auto;margin:0 5px;font-size:14px;padding:0;display:inline-block}.btn-sm{height:34px;padding:.25rem .7rem}.btn-success{border:2px solid #61c390;color:#fff;background-color:#61c390}.btn-progress{border:2px solid #ed6f00;color:#fff;background-color:#ed6f00}.btn-warning{border:2px solid #ffc300;color:#fff;background-color:#ffc300}.btn-light{border:2px solid #fff;color:#fff;background-color:#fff}.btn-danger{border:2px solid #fd5969;color:#fff;background-color:#fd5969}.btn-alert{border:2px solid #e7394a;color:#fff;background-color:#e7394a}.btn-primary{border:2px solid #3bbbef;color:#fff;background-color:#3bbbef}.btn-info{border:2px solid #4acaff;color:#fff;background-color:#4acaff}.btn-secondary{border:2px solid #8a8f9f;color:#fff;background-color:#8a8f9f}.btn-success:active,.btn-success:focus,.btn-success:hover,.btn-success:not(:disabled):not(.disabled):active,.btn-success:visited{border:2px solid #40b377;color:#fff;background-color:#40b377}.btn-progress:active,.btn-progress:focus,.btn-progress:hover,.btn-progress:not(:disabled):not(.disabled):active,.btn-progress:visited{border:2px solid #da6b0a;color:#fff;background-color:#da6b0a}.btn-warning:active,.btn-warning:focus,.btn-warning:hover,.btn-warning:not(:disabled):not(.disabled):active,.btn-warning:visited{border:2px solid #ebb60a;color:#fff;background-color:#ebb60a}.btn-light:active,.btn-light:focus,.btn-light:hover,.btn-light:not(:disabled):not(.disabled):active,.btn-light:visited{border:2px solid #fff;color:#fff;background-color:#fff}.btn-alert:active,.btn-alert:focus,.btn-alert:hover,.btn-alert:not(:disabled):not(.disabled):active,.btn-alert:visited,.btn-danger:active,.btn-danger:focus,.btn-danger:hover,.btn-danger:not(:disabled):not(.disabled):active,.btn-danger:visited{border:2px solid #e7394a;color:#fff;background-color:#e7394a}.btn-primary:active,.btn-primary:focus,.btn-primary:hover,.btn-primary:not(:disabled):not(.disabled):active,.btn-primary:visited{border:2px solid #21a7de;color:#fff;background-color:#21a7de}.btn-info:active,.btn-info:focus,.btn-info:hover,.btn-info:not(:disabled):not(.disabled):active,.btn-info:visited{border:2px solid #4acaff;color:#fff;background-color:#4acaff}.btn-secondary:active,.btn-secondary:focus,.btn-secondary:hover,.btn-secondary:not(:disabled):not(.disabled):active,.btn-secondary:visited{border:2px solid #6a6e7b;color:#fff;background-color:#6a6e7b}.btn-round{border-radius:30px}.btn-square{border-radius:0}.progress-bar-green:before{background:#61c390}.bg-green{background-color:#61c390}.f-green,.green{color:#61c390}.progress-bar-black:before{background:#000}.bg-black{background-color:#000}.black,.f-black{color:#000}.progress-bar-orange:before{background:#ed6f00}.bg-orange{background-color:#ed6f00}.f-orange,.orange{color:#ed6f00}.progress-bar-blue:before{background:#3bbbef}.bg-blue{background-color:#3bbbef}.blue,.f-blue{color:#3bbbef}.progress-bar-red:before{background:#fd5969}.bg-red{background-color:#fd5969}.f-red,.red{color:#fd5969}.progress-bar-cyan:before{background:#4acaff}.bg-cyan{background-color:#4acaff}.cyan,.f-cyan{color:#4acaff}.progress-bar-yellow:before{background:#ffc300}.bg-yellow{background-color:#ffc300}.f-yellow,.yellow{color:#ffc300}.progress-bar-white:before{background:#fff}.bg-white{background-color:#fff}.f-white,.white{color:#fff}.progress-bar-gray:before{background:#8a8f9f}.bg-gray{background-color:#8a8f9f}.f-gray,.gray{color:#8a8f9f}.progress-bar-light-gray:before{background:#b6b6b6}.bg-light-gray{background-color:#b6b6b6}.f-light-gray,.light-gray{color:#b6b6b6}mat-dialog-container.mat-dialog-container{padding:0;border-radius:5px;min-width:300px}mat-dialog-container.mat-dialog-container ng-component{float:left;width:100%;overflow-x:hidden}mat-dialog-container.mat-dialog-container ng-component mat-dialog-content{margin:0;padding:15px;min-height:50px}mat-dialog-container.mat-dialog-container ng-component mat-dialog-actions{margin-bottom:0;min-height:auto!important;padding:12px 15px;float:left;width:100%;display:block;border-top:1px solid #ced4da}mat-dialog-container.mat-dialog-container ng-component mat-dialog-actions button{padding:5px 10px;font-size:12px;min-width:80px}:root{--modal-header-bg:$modal-header-bg;--modal-header-title-color:$modal-header-title-color;--modal-header-close-border:$modal-header-close-border}fn-modal-header{display:flex;padding:12px 15px;background-color:var(--modal-header-bg);position:relative}fn-modal-header .modal-title{font-size:15px;color:#8a8f9f;margin:0}fn-modal-header button.close{position:absolute;float:right;right:10px;top:13px;border-radius:10px;border:1px solid var(--modal-header-close-border);height:20px;width:20px;outline:0;font-size:15px!important;text-align:center;line-height:17px!important;padding-bottom:0!important;text-shadow:none}fn-modal-header.modal-header-success{color:#fff;background-color:#40b377}fn-modal-header.modal-header-success .modal-title{color:#fff}fn-modal-header.modal-header-success button.close{border-color:#fff;color:#fff}fn-modal-header.modal-header-progress{color:#fff;background-color:#da6b0a}fn-modal-header.modal-header-progress .modal-title{color:#fff}fn-modal-header.modal-header-progress button.close{border-color:#fff;color:#fff}fn-modal-header.modal-header-warning{color:#fff;background-color:#ebb60a}fn-modal-header.modal-header-warning .modal-title{color:#fff}fn-modal-header.modal-header-warning button.close{border-color:#fff;color:#fff}fn-modal-header.modal-header-light{color:#fff;background-color:#fff}fn-modal-header.modal-header-light .modal-title{color:#fff}fn-modal-header.modal-header-light button.close{border-color:#fff;color:#fff}fn-modal-header.modal-header-danger{color:#fff;background-color:#e7394a}fn-modal-header.modal-header-danger .modal-title{color:#fff}fn-modal-header.modal-header-danger button.close{border-color:#fff;color:#fff}fn-modal-header.modal-header-alert{color:#fff;background-color:#e7394a}fn-modal-header.modal-header-alert .modal-title{color:#fff}fn-modal-header.modal-header-alert button.close{border-color:#fff;color:#fff}fn-modal-header.modal-header-primary{color:#fff;background-color:#21a7de}fn-modal-header.modal-header-primary .modal-title{color:#fff}fn-modal-header.modal-header-primary button.close{border-color:#fff;color:#fff}fn-modal-header.modal-header-info{color:#fff;background-color:#4acaff}fn-modal-header.modal-header-info .modal-title{color:#fff}fn-modal-header.modal-header-info button.close{border-color:#fff;color:#fff}fn-modal-header.modal-header-secondary{color:#fff;background-color:#6a6e7b}fn-modal-header.modal-header-secondary .modal-title{color:#fff}fn-modal-header.modal-header-secondary button.close{border-color:#fff;color:#fff}"]
            }] }
];
/** @nocollapse */
FnConfirmModalComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    FnConfirmModalComponent.prototype.dialogRef;
    /** @type {?} */
    FnConfirmModalComponent.prototype.dialogData;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnModalService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?=} dialogData
     * @return {?}
     */
    openConfirmModal(dialogData = { title: 'Confirmation', content: 'Do you want to delete this?' }) {
        return this.dialog.open(FnConfirmModalComponent, {
            data: dialogData
        });
    }
    /**
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    openCustomModal(componentOrTemplateRef, config) {
        return this.dialog.open(componentOrTemplateRef, config);
    }
    /**
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    openModal(componentOrTemplateRef, config) {
        return this.dialog.open(componentOrTemplateRef, {
            data: config.data,
            width: '500px',
            hasBackdrop: config.hasBackdrop
        });
    }
}
FnModalService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FnModalService.ctorParameters = () => [
    { type: MatDialog }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnModalService.prototype.dialog;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnDialogHeaderComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FnDialogHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-dialog-header',
                template: "<h5 class=\"modal-title\">Modal title</h5>\n<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">&times;</button>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [":root{--modal-header-bg:$modal-header-bg;--modal-header-title-color:$modal-header-title-color;--modal-header-close-border:$modal-header-close-border}fn-modal-header{display:flex;padding:12px 15px;background-color:var(--modal-header-bg);position:relative}fn-modal-header .modal-title{font-size:15px;color:#494949;margin:0}fn-modal-header button.close{position:absolute;float:right;right:10px;top:13px;border-radius:10px;border:1px solid var(--modal-header-close-border);height:20px;width:20px;outline:0;font-size:15px!important;text-align:center;line-height:16px!important}fn-modal-header button.close span{vertical-align:text-top}fn-modal-header.modal-header-success{color:#fff;background-color:#61c390}fn-modal-header.modal-header-success .modal-title{color:#fff}fn-modal-header.modal-header-success button.close{border-color:#fff}fn-modal-header.modal-header-success button.close span{color:#fff}fn-modal-header.modal-header-warning{color:#fff;background-color:#ed6f00}fn-modal-header.modal-header-danger{color:#fff;background-color:#fd5969}fn-modal-header.modal-header-danger .modal-title{color:#fff}fn-modal-header.modal-header-danger button.close{border-color:#fff}fn-modal-header.modal-header-danger button.close span{color:#fff}fn-modal-header.modal-header-info{color:#fff;background-color:#4acaff}fn-modal-header.modal-header-primary{color:#fff;background-color:#3bbbef}fn-modal-header.modal-header-primary .modal-title{color:#fff}fn-modal-header.modal-header-primary button.close{border-color:#fff}fn-modal-header.modal-header-primary button.close span{color:#fff}"]
            }] }
];
/** @nocollapse */
FnDialogHeaderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnDialogModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FnDialogModule,
            providers: [FnModalService]
        };
    }
}
FnDialogModule.decorators = [
    { type: NgModule, args: [{
                imports: [FormsModule, CommonModule, A11yModule, MatDialogModule, FnCoreModule, FoundationModule],
                declarations: [FnConfirmModalComponent, FnDialogHeaderComponent],
                exports: [FnConfirmModalComponent, FnDialogHeaderComponent],
                providers: [FnModalService],
                entryComponents: [FnConfirmModalComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnTimepickerService {
    constructor() {
        this.KEY_CODES = {
            BACKSPACE: 8,
            ENTER: 13,
            ARROW_DOWN: 'ArrowDown',
            ARROW_UP: 'ArrowUp'
        };
        this.regex12a = new RegExp('^([1-9]|1[012])(a)$');
        this.regex12p = new RegExp('^([1-9]|1[012])(p)$');
        this.Hour12Format = [
            '12:00a', '12:15a', '12:30a', '12:45a',
            '1:00a', '1:15a', '1:30a', '1:45a',
            '2:00a', '2:15a', '2:30a', '2:45a',
            '3:00a', '3:15a', '3:30a', '3:45a',
            '4:00a', '4:15a', '4:30a', '4:45a',
            '5:00a', '5:15a', '5:30a', '5:45a',
            '6:00a', '6:15a', '6:30a', '6:45a',
            '7:00a', '7:15a', '7:30a', '7:45a',
            '8:00a', '8:15a', '8:30a', '8:45a',
            '9:00a', '9:15a', '9:30a', '9:45a',
            '10:00a', '10:15a', '10:30a', '10:45a',
            '11:00a', '11:15a', '11:30a', '11:45a',
            '12:00p', '12:15p', '12:30p', '12:45p',
            '1:00p', '1:15p', '1:30p', '1:45p',
            '2:00p', '2:15p', '2:30p', '2:45p',
            '3:00p', '3:15p', '3:30p', '3:45p',
            '4:00p', '4:15p', '4:30p', '4:45p',
            '5:00p', '5:15p', '5:30p', '5:45p',
            '6:00p', '6:15p', '6:30p', '6:45p',
            '7:00p', '7:15p', '7:30p', '7:45p',
            '8:00p', '8:15p', '8:30p', '8:45p',
            '9:00p', '9:15p', '9:30p', '9:45p',
            '10:00p', '10:15p', '10:30p', '10:45p',
            '11:00p', '11:15p', '11:30p', '11:45p'
        ];
        this.Hour12NextFormat = [
            '12:00a', '12:15a', '12:30a', '12:45a',
            '1:00a', '1:15a', '1:30a', '1:45a',
            '2:00a', '2:15a', '2:30a', '2:45a',
            '3:00a', '3:15a', '3:30a', '3:45a',
            '4:00a', '4:15a', '4:30a', '4:45a',
            '5:00a', '5:15a', '5:30a', '5:45a',
            '6:00a', '6:15a', '6:30a', '6:45a',
            '7:00a', '7:15a', '7:30a', '7:45a',
            '8:00a', '8:15a', '8:30a', '8:45a',
            '9:00a', '9:15a', '9:30a', '9:45a',
            '10:00a', '10:15a', '10:30a', '10:45a',
            '11:00a', '11:15a', '11:30a', '11:45a',
            '12:00p', '12:15p', '12:30p', '12:45p',
            '1:00p', '1:15p', '1:30p', '1:45p',
            '2:00p', '2:15p', '2:30p', '2:45p',
            '3:00p', '3:15p', '3:30p', '3:45p',
            '4:00p', '4:15p', '4:30p', '4:45p',
            '5:00p', '5:15p', '5:30p', '5:45p',
            '6:00p', '6:15p', '6:30p', '6:45p',
            '7:00p', '7:15p', '7:30p', '7:45p',
            '8:00p', '8:15p', '8:30p', '8:45p',
            '9:00p', '9:15p', '9:30p', '9:45p',
            '10:00p', '10:15p', '10:30p', '10:45p',
            '11:00p', '11:15p', '11:30p', '11:45p',
            '12:00a +1 D', '12:15a +1 D', '12:30a +1 D', '12:45a +1 D',
            '1:00a +1 D', '1:15a +1 D', '1:30a +1 D', '1:45a +1 D',
            '2:00a +1 D', '2:15a +1 D', '2:30a +1 D', '2:45a +1 D',
            '3:00a +1 D', '3:15a +1 D', '3:30a +1 D', '3:45a +1 D',
            '4:00a +1 D', '4:15a +1 D', '4:30a +1 D', '4:45a +1 D',
            '5:00a +1 D', '5:15a +1 D', '5:30a +1 D', '5:45a +1 D',
            '6:00a +1 D', '6:15a +1 D', '6:30a +1 D', '6:45a +1 D',
            '7:00a +1 D', '7:15a +1 D', '7:30a +1 D', '7:45a +1 D',
            '8:00a +1 D', '8:15a +1 D', '8:30a +1 D', '8:45a +1 D',
            '9:00a +1 D', '9:15a +1 D', '9:30a +1 D', '9:45a +1 D',
            '10:00a +1 D'
        ];
        this.Hour24Format = [
            '00:00', '00:15', '00:30', '00:45',
            '01:00', '01:15', '01:30', '01:45',
            '02:00', '02:15', '02:30', '02:45',
            '03:00', '03:15', '03:30', '03:45',
            '04:00', '04:15', '04:30', '04:45',
            '05:00', '05:15', '05:30', '05:45',
            '06:00', '06:15', '06:30', '06:45',
            '07:00', '07:15', '07:30', '07:45',
            '08:00', '08:15', '08:30', '08:45',
            '09:00', '09:15', '09:30', '09:45',
            '10:00', '10:15', '10:30', '10:45',
            '11:00', '11:15', '11:30', '11:45',
            '12:00', '12:15', '12:30', '12:45',
            '13:00', '13:15', '13:30', '13:45',
            '14:00', '14:15', '14:30', '14:45',
            '15:00', '15:15', '15:30', '15:45',
            '16:00', '16:15', '16:30', '16:45',
            '17:00', '17:15', '17:30', '17:45',
            '18:00', '18:15', '18:30', '18:45',
            '19:00', '19:15', '19:30', '19:45',
            '20:00', '20:15', '20:30', '20:45',
            '21:00', '21:15', '21:30', '21:45',
            '22:00', '22:15', '22:30', '22:45',
            '23:00', '23:15', '23:30', '23:45',
        ];
        this.Hour24NextFormat = [
            '00:00', '00:15', '00:30', '00:45',
            '01:00', '01:15', '01:30', '01:45',
            '02:00', '02:15', '02:30', '02:45',
            '03:00', '03:15', '03:30', '03:45',
            '04:00', '04:15', '04:30', '04:45',
            '05:00', '05:15', '05:30', '05:45',
            '06:00', '06:15', '06:30', '06:45',
            '07:00', '07:15', '07:30', '07:45',
            '08:00', '08:15', '08:30', '08:45',
            '09:00', '09:15', '09:30', '09:45',
            '10:00', '10:15', '10:30', '10:45',
            '11:00', '11:15', '11:30', '11:45',
            '12:00', '12:15', '12:30', '12:45',
            '13:00', '13:15', '13:30', '13:45',
            '14:00', '14:15', '14:30', '14:45',
            '15:00', '15:15', '15:30', '15:45',
            '16:00', '16:15', '16:30', '16:45',
            '17:00', '17:15', '17:30', '17:45',
            '18:00', '18:15', '18:30', '18:45',
            '19:00', '19:15', '19:30', '19:45',
            '20:00', '20:15', '20:30', '20:45',
            '21:00', '21:15', '21:30', '21:45',
            '22:00', '22:15', '22:30', '22:45',
            '23:00', '23:15', '23:30', '23:45',
            '00:00 +1 D', '00:15 +1 D', '00:30 +1 D', '00:45 +1 D',
            '01:00 +1 D', '01:15 +1 D', '01:30 +1 D', '01:45 +1 D',
            '02:00 +1 D', '02:15 +1 D', '02:30 +1 D', '02:45 +1 D',
            '03:00 +1 D', '03:15 +1 D', '03:30 +1 D', '03:45 +1 D',
            '04:00 +1 D', '04:15 +1 D', '04:30 +1 D', '04:45 +1 D',
            '05:00 +1 D', '05:15 +1 D', '05:30 +1 D', '05:45 +1 D',
            '06:00 +1 D', '06:15 +1 D', '06:30 +1 D', '06:45 +1 D',
            '07:00 +1 D', '07:15 +1 D', '07:30 +1 D', '07:45 +1 D',
            '08:00 +1 D', '08:15 +1 D', '08:30 +1 D', '08:45 +1 D',
            '09:00 +1 D', '09:15 +1 D', '09:30 +1 D', '09:45 +1 D',
            '10:00 +1 D'
        ];
    }
}
FnTimepickerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ FnTimepickerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FnTimepickerService_Factory() { return new FnTimepickerService(); }, token: FnTimepickerService, providedIn: "root" });
if (false) {
    /** @type {?} */
    FnTimepickerService.prototype.KEY_CODES;
    /** @type {?} */
    FnTimepickerService.prototype.regex12a;
    /** @type {?} */
    FnTimepickerService.prototype.regex12p;
    /** @type {?} */
    FnTimepickerService.prototype.Hour12Format;
    /** @type {?} */
    FnTimepickerService.prototype.Hour12NextFormat;
    /** @type {?} */
    FnTimepickerService.prototype.Hour24Format;
    /** @type {?} */
    FnTimepickerService.prototype.Hour24NextFormat;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnTimePickerComponent {
    /**
     * @param {?} timePickerSvcs
     */
    constructor(timePickerSvcs) {
        this.timePickerSvcs = timePickerSvcs;
        this.mainItemArray = [];
        this.uiItemArray = [];
        this.searchTerm = '1';
        this.showDropDown = true;
        this.activeItem = -1;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isMilitryTime) {
            this.mainItemArray = this.timePickerSvcs.Hour24Format;
        }
        else {
            this.mainItemArray = this.timePickerSvcs.Hour12Format;
        }
        this.searchTerm = this.mainItemArray[this.index];
    }
    /*
      * this filter function call on keypress on input box for filter data in array
      *   @Param event: Keyboard Event
      * */
    /**
     * @param {?} event
     * @return {?}
     */
    filterValue(event) {
        this.showDropDown = true;
        if (typeof (this.searchTerm) !== 'undefined') {
            // this code is written for matching From time
            if (this.timePickerSvcs.regex12a.test(this.searchTerm)) {
                /** @type {?} */
                const timeStringSplit = this.searchTerm.split('a');
                this.uiItemArray = this.mainItemArray.filter((/**
                 * @param {?} items
                 * @return {?}
                 */
                items => items.includes(timeStringSplit[0]) && items.includes('a')));
            }
            else if (this.timePickerSvcs.regex12p.test(this.searchTerm)) {
                /** @type {?} */
                const timeStringSplit = this.searchTerm.split('p');
                this.uiItemArray = this.mainItemArray.filter((/**
                 * @param {?} items
                 * @return {?}
                 */
                items => items.includes(timeStringSplit[0]) && items.includes('p')));
            }
            else {
                if (this.isMilitryTime) {
                    /** @type {?} */
                    const term = this.searchTerm.toString().split(':');
                    // tslint:disable-next-line:max-line-length radix
                    /** @type {?} */
                    const modifiedTerm = parseInt(term[0]) < 10 && !term[0].toString().startsWith('0') ? '0' + term[0] + (term.length > 1 ? ':' + term[1] : '') : this.searchTerm;
                    this.uiItemArray = this.mainItemArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    items => items.toString().startsWith(modifiedTerm)));
                }
                else {
                    this.uiItemArray = this.mainItemArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    items => items.toString().startsWith(this.searchTerm)));
                }
            }
            // this function call on backspce
            if (event.keyCode === this.timePickerSvcs.KEY_CODES.BACKSPACE) {
                this.activeItem = 0;
                if (this.uiItemArray.length > 0) {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => document.getElementsByClassName('.fn-time-picker-ul')[0].scrollTop = 0));
                }
            }
            // this function call on enter after select value in dropdown list
            if (event.keyCode === this.timePickerSvcs.KEY_CODES.ENTER && this.uiItemArray.length > 0) {
                /** @type {?} */
                const liVal = document.querySelector('li.active').textContent;
                this.onItemClick(liVal);
                this.activeItem = 0;
                this.uiItemArray = [];
                document.getElementsByClassName('.fn-time-picker-ul')[0].scrollTop = 0;
            }
        }
        else {
            this.activeItem = 0;
            this.uiItemArray = [];
        }
    }
    // onSelectEvent is call after click on li option in ul after apply filter
    /**
     * @param {?} indexVal
     * @return {?}
     */
    onItemClick(indexVal) {
        this.activeItem = 0;
        this.searchTerm = indexVal;
        this.index = this.mainItemArray.indexOf(indexVal);
        this.uiItemArray = [];
        console.log(this.index);
    }
    /**
     * @return {?}
     */
    closeDropDown() {
        this.showDropDown = false;
    }
    // Open Dropdown by default value
    /**
     * @param {?} event
     * @return {?}
     */
    clickEvent(event) {
        this.showDropDown = true;
        if (this.activeItem < 1) {
            this.filterValue(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keydownEvent(event) {
        if (event.code === 'ArrowUp' && this.activeItem > 0) {
            this.activeItem--;
            document.getElementById('.fn-time-picker-ul').scrollTop -= 35;
        }
        if (event.code === 'ArrowDown' && this.activeItem < this.uiItemArray.length - 1) {
            this.activeItem++;
            document.getElementById('.fn-time-picker-ul').scrollTop += 35;
        }
    }
}
FnTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-time-picker',
                template: "<div class=\"fn-time-picker-search\">\n  <input class=\"form-control\" [(ngModel)]=\"searchTerm\" (click)=\"clickEvent($event)\" (keydown)=\"keydownEvent($event)\"\n         maxlength=\"17\"\n         (keyup)=\"filterValue($event)\"/>\n\n  <div (click)=\"closeDropDown()\">\n    <ul *ngIf=\"(uiItemArray && uiItemArray.length > 0) && showDropDown\" class=\"fn-time-picker-ul\">\n      <li *ngFor=\"let item of uiItemArray; let i = index\" tabindex=\"{{i}}\" [ngClass]=\"{'active': activeItem === i  }\"\n          (click)=\"onItemClick(item)\">{{item}}</li>\n    </ul>\n  </div>\n</div>\n",
                styles: [":root{--time-list-hover-bg:$time-list-hover-bg}.fn-time-picker-search{width:100%;float:left;position:relative}.fn-time-picker-search input{width:100%;float:left;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem}.fn-time-picker-search input:focus{border:1px solid #80bdff}.fn-time-picker-search .fn-time-picker-ul{list-style:none;border:1px solid #ced4da;width:100%;max-height:160px;overflow-x:hidden;overflow-y:scroll;scroll-behavior:smooth;padding:1px;margin:0;box-shadow:5px 5px 10px rgba(0,0,0,.05);position:absolute;top:100%;z-index:1;background-image:linear-gradient(to top,#f2f2f2 0,#eceeef 100%)}.fn-time-picker-search .fn-time-picker-ul li{cursor:pointer;padding:4px 12px;background-color:transparent;font-size:13px;letter-spacing:.03em;font-weight:400;transition:.3s ease-in;border-radius:4px;border:none!important}.fn-time-picker-search .fn-time-picker-ul li:last-child{border-bottom:none}.fn-time-picker-search .fn-time-picker-ul li:hover{background-color:var(--time-list-hover-bg);color:#fff}"]
            }] }
];
/** @nocollapse */
FnTimePickerComponent.ctorParameters = () => [
    { type: FnTimepickerService }
];
FnTimePickerComponent.propDecorators = {
    index: [{ type: Input }],
    placeHolder: [{ type: Input }],
    isMilitryTime: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FnTimePickerComponent.prototype.index;
    /** @type {?} */
    FnTimePickerComponent.prototype.placeHolder;
    /** @type {?} */
    FnTimePickerComponent.prototype.isMilitryTime;
    /** @type {?} */
    FnTimePickerComponent.prototype.mainItemArray;
    /** @type {?} */
    FnTimePickerComponent.prototype.uiItemArray;
    /** @type {?} */
    FnTimePickerComponent.prototype.searchTerm;
    /** @type {?} */
    FnTimePickerComponent.prototype.showDropDown;
    /** @type {?} */
    FnTimePickerComponent.prototype.activeItem;
    /**
     * @type {?}
     * @private
     */
    FnTimePickerComponent.prototype.timePickerSvcs;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnMultiTimePickerComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.timeStoredArray = [];
        this.uiItemArray = [];
        this.nonMilitryHourArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        this.nonMilitryMinuteArray = ['00a', '00p', '15a', '15p', '30a', '30p', '45a', '45p'];
        this.militryHourArray = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.militryMinuteArray = ['00', '15', '30', '45'];
        this.showDropDown = true;
        this.checkEmpty = false;
        this.activeIndex = -1;
        this.searchTerm = '';
        this.KEY_CODES = service.KEY_CODES;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isMilitryTime) {
            this.timeStoredArray = this.service.Hour24Format;
        }
        else {
            this.timeStoredArray = this.service.Hour12Format;
        }
        this.searchTerm = this.timeStoredArray[this.startIndex] + '-' + this.timeStoredArray[this.lastIndex];
        this.selectIndex = this.startIndex;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    filterValue(event) {
        this.showDropDown = true;
        if (typeof (this.searchTerm) !== 'undefined') {
            this.checkEmpty = false;
            this.splitTimeVal = this.searchTerm.split('-');
            if (this.splitTimeVal[1]) {
                /** @type {?} */
                const inputVal = this.splitTimeVal[1];
                if (this.selectIndex) {
                    /** @type {?} */
                    const splitFromTime = this.splitTimeVal[0].split(':');
                    if (this.isMilitryTime) {
                        if (this.militryHourArray.includes(splitFromTime[0]) && this.militryMinuteArray.includes(splitFromTime[1])) {
                            this.uiItemArray = this.service.Hour24NextFormat.filter((/**
                             * @param {?} items
                             * @return {?}
                             */
                            items => items.toString().startsWith(inputVal)
                                && this.service.Hour24NextFormat.indexOf(items) > this.selectIndex));
                        }
                        else {
                            this.activeIndex = 0;
                            this.uiItemArray = [];
                        }
                    }
                    else {
                        // this code written for matching regex for To time
                        if (this.service.regex12a.test(inputVal)) {
                            /** @type {?} */
                            const timeStringSplit = inputVal.split('a');
                            if (this.nonMilitryHourArray.includes(splitFromTime[0]) && this.nonMilitryMinuteArray.includes(splitFromTime[1])) {
                                this.uiItemArray = this.service.Hour12NextFormat.filter((/**
                                 * @param {?} items
                                 * @return {?}
                                 */
                                items => (items.toString().startsWith(timeStringSplit[0])
                                    && items.includes('a')) && this.service.Hour12NextFormat.indexOf(items) > this.selectIndex));
                            }
                            else {
                                this.activeIndex = 0;
                                this.uiItemArray = [];
                            }
                        }
                        else if (this.service.regex12p.test(inputVal)) {
                            /** @type {?} */
                            const timeStringSplit = inputVal.split('p');
                            if (this.nonMilitryHourArray.includes(splitFromTime[0]) && this.nonMilitryMinuteArray.includes(splitFromTime[1])) {
                                this.uiItemArray = this.service.Hour12NextFormat.filter((/**
                                 * @param {?} items
                                 * @return {?}
                                 */
                                items => (items.toString().startsWith(timeStringSplit[0])
                                    && items.includes('p')) && this.service.Hour12NextFormat.indexOf(items) > this.selectIndex));
                            }
                            else {
                                this.activeIndex = 0;
                                this.uiItemArray = [];
                            }
                        }
                        else {
                            if (this.nonMilitryHourArray.includes(splitFromTime[0]) && this.nonMilitryMinuteArray.includes(splitFromTime[1])) {
                                this.uiItemArray = this.service.Hour12NextFormat.filter((/**
                                 * @param {?} items
                                 * @return {?}
                                 */
                                items => items.toString().startsWith(inputVal)
                                    && this.service.Hour12NextFormat.indexOf(items) > this.selectIndex));
                            }
                            else {
                                this.activeIndex = 0;
                                this.uiItemArray = [];
                            }
                        }
                    }
                }
            }
            else {
                if (this.service.regex12a.test(this.searchTerm)) {
                    /** @type {?} */
                    const timeStringSplit = this.searchTerm.split('a');
                    this.uiItemArray = this.timeStoredArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    items => items.includes(timeStringSplit[0]) && items.includes('a')));
                }
                else if (this.service.regex12p.test(this.searchTerm)) {
                    /** @type {?} */
                    const timeStringSplit = this.searchTerm.split('p');
                    this.uiItemArray = this.timeStoredArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    items => items.includes(timeStringSplit[0]) && items.includes('p')));
                }
                else {
                    if (this.isMilitryTime) {
                        /** @type {?} */
                        const term = this.searchTerm.toString().split(':');
                        // tslint:disable-next-line:radix max-line-length
                        /** @type {?} */
                        const modifiedTerm = parseInt(term[0]) < 10 && !term[0].toString().startsWith('0') ? '0' + term[0] + (term.length > 1 ? ':' + term[1] : '') : this.searchTerm;
                        this.uiItemArray = this.timeStoredArray.filter((/**
                         * @param {?} items
                         * @return {?}
                         */
                        items => items.toString().startsWith(modifiedTerm)));
                    }
                    else {
                        this.uiItemArray = this.timeStoredArray.filter((/**
                         * @param {?} items
                         * @return {?}
                         */
                        items => items.toString().startsWith(this.searchTerm)));
                    }
                }
            }
            if (event.keyCode === this.KEY_CODES.BACKSPACE) {
                this.activeIndex = 0;
                if (this.uiItemArray.length > 0) {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => document.getElementsByClassName('fn-time-picker-ul')[0].scrollTop = 0));
                }
            }
            if (event.keyCode === this.KEY_CODES.ENTER && this.uiItemArray.length > 0) {
                /** @type {?} */
                const liVal = document.querySelector('li.active').textContent;
                this.onItemClick(liVal);
                this.activeIndex = 0;
                this.uiItemArray = [];
                document.getElementsByClassName('fn-time-picker-ul')[0].scrollTop = 0;
                this.checkEmpty = false;
            }
        }
        else {
            this.activeIndex = 0;
            this.checkEmpty = true;
            this.uiItemArray = [];
        }
    }
    /**
     * @param {?} param
     * @return {?}
     */
    onItemClick(param) {
        if (this.splitTimeVal[1]) {
            this.activeIndex = 0;
            /** @type {?} */
            const newToTimeString = this.searchTerm.split('-')[0];
            this.searchTerm = newToTimeString + '-' + param;
            this.uiItemArray = [];
        }
        else {
            this.activeIndex = 0;
            this.searchTerm = param + '-';
            this.selectIndex = this.timeStoredArray.indexOf(param);
            this.uiItemArray = [];
        }
    }
    /**
     * @return {?}
     */
    closeDropDown() {
        this.showDropDown = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    openDropDown(event) {
        this.showDropDown = true;
        if (this.checkEmpty) {
            this.filterValue(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyDownChange(event) {
        if (event.code === this.KEY_CODES.ARROW_UP && this.activeIndex > 0) {
            this.activeIndex--;
            document.getElementsByClassName('fn-time-picker-ul')[0].scrollTop -= 35;
        }
        if (event.code === this.KEY_CODES.ARROW_DOWN && this.activeIndex < this.uiItemArray.length - 1) {
            this.activeIndex++;
            document.getElementsByClassName('fn-time-picker-ul')[0].scrollTop += 35;
        }
    }
}
FnMultiTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-multi-time-picker',
                template: "<div>\n  <input [(ngModel)]=\"searchTerm\" (click)=\"openDropDown($event)\" (keydown)=\"keyDownChange($event)\" maxlength=\"17\"\n         (keyup)=\"filterValue($event)\"/>\n  <div (click)=\"closeDropDown()\">\n    <ul *ngIf=\"uiItemArray.length > 0 && showDropDown\" class=\"fn-time-picker-ul\">\n      <li *ngFor=\"let item of uiItemArray; let i = index\" tabindex=\"{{i}}\" [ngClass]=\"{'active': activeIndex === i  }\"\n          (click)=\"onItemClick(item)\">{{item}}</li>\n    </ul>\n  </div>\n</div>\n",
                styles: [":root{--time-list-hover-bg:$time-list-hover-bg}.fn-time-picker-search{width:100%;float:left;position:relative}.fn-time-picker-search input{width:100%;float:left;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem}.fn-time-picker-search .fn-time-picker-ul{list-style:none;border:1px solid #ced4da;width:100%;max-height:160px;overflow-x:hidden;overflow-y:scroll;scroll-behavior:smooth;padding:0;margin:0;box-shadow:5px 5px 10px rgba(0,0,0,.05);position:absolute;top:100%;z-index:1}.fn-time-picker-search .fn-time-picker-ul li{border-bottom:1px solid #ced4da;cursor:pointer;padding:4px 12px;background-color:#fff;font-size:13px;letter-spacing:.03em;font-weight:400;transition:.3s ease-in}.fn-time-picker-search .fn-time-picker-ul li:last-child{border-bottom:none}.fn-time-picker-search .fn-time-picker-ul li:hover{background-color:var(--time-list-hover-bg);color:#fff}"]
            }] }
];
/** @nocollapse */
FnMultiTimePickerComponent.ctorParameters = () => [
    { type: FnTimepickerService }
];
FnMultiTimePickerComponent.propDecorators = {
    startIndex: [{ type: Input }],
    lastIndex: [{ type: Input }],
    placeHolder: [{ type: Input }],
    isMilitryTime: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.startIndex;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.lastIndex;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.placeHolder;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.isMilitryTime;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.timeStoredArray;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.uiItemArray;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.nonMilitryHourArray;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.nonMilitryMinuteArray;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.militryHourArray;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.militryMinuteArray;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.showDropDown;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.checkEmpty;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.activeIndex;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.searchTerm;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.splitTimeVal;
    /** @type {?} */
    FnMultiTimePickerComponent.prototype.selectIndex;
    /**
     * @type {?}
     * @private
     */
    FnMultiTimePickerComponent.prototype.KEY_CODES;
    /**
     * @type {?}
     * @private
     */
    FnMultiTimePickerComponent.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnTimePickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FnTimePickerModule,
            providers: [FnTimepickerService]
        };
    }
}
FnTimePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [FnCoreModule.forRoot(), CommonModule, FormsModule],
                declarations: [FnTimePickerComponent, FnMultiTimePickerComponent],
                providers: [FnTimepickerService],
                exports: [FnTimePickerComponent, FnMultiTimePickerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnColorPickerComponent extends FnInputValueAccessor {
    constructor() {
        super(...arguments);
        this.isDisable = false;
        this.isDisableInput = true;
        this.showOkBtn = true;
        this.showCancelBtn = true;
        this.okButtonClass = 'btn btn-primary btn-xs';
        this.cancelButtonClass = 'btn btn-danger btn-xs';
        this.isSaveClkOutside = false;
        this.outputFormat = 'hex';
        this.changeColorCb = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.okButtonClass = this.okButtonClass + ' ok-button pull-right btn-round';
        this.cancelButtonClass = this.cancelButtonClass + ' cancel-button pull-left btn-round';
    }
    /**
     * @param {?} colorCode
     * @return {?}
     */
    changeColor(colorCode) {
        this.value = colorCode;
        this.changeColorCb.emit(colorCode);
    }
}
FnColorPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-color-picker',
                template: "<input class=\"fn-color-picker-border\" [colorPicker]=\"value\" [cpDisabled]=\"isDisable\" [style.background]=\"value\"\r\n  [cpOKButton]=\"showOkBtn\" [cpCancelButton]=\"showCancelBtn\" (colorPickerSelect)=\"changeColor($event)\"\r\n  [cpOutputFormat]=\"outputFormat\" [cpSaveClickOutside]=\"isSaveClkOutside\" [cpDisableInput]=\"isDisableInput\"\r\n  [cpOKButtonClass]=\"okButtonClass\" [cpCancelButtonClass]=\"cancelButtonClass\" />\r\n<span [style.color]=\"value\">{{value}}</span>\r\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => FnColorPickerComponent)),
                        multi: true
                    }
                ],
                encapsulation: ViewEncapsulation.None,
                styles: ["fn-color-picker input.fn-color-picker-border{height:19px;width:19px;cursor:pointer;border:none}fn-color-picker color-picker .color-picker{box-shadow:5px 5px 10px rgba(0,0,0,.1);border:none!important;border-radius:5px;z-index:1;padding:2px}fn-color-picker color-picker .color-picker .arrow.arrow-right-top{bottom:4px;border-width:6px 10px;border-color:transparent #fff transparent transparent}fn-color-picker color-picker .color-picker .arrow.arrow-right-bottom{top:4px;border-width:6px 10px;border-color:transparent #fff transparent transparent}fn-color-picker color-picker .color-picker .arrow.arrow-left-top{bottom:4px;right:-20px;border-width:6px 10px;border-color:transparent transparent transparent #fff}fn-color-picker color-picker .color-picker .arrow.arrow-left-bottom{top:4px;right:-20px;border-width:6px 10px;border-color:transparent transparent transparent #fff}fn-color-picker color-picker .color-picker .hue-alpha .left{padding:0}fn-color-picker color-picker .color-picker .hue-alpha .left .selected-color{top:0;left:0}fn-color-picker color-picker .color-picker .hue-alpha .right{padding:0 0 0 10px}fn-color-picker color-picker .color-picker .button-area{padding:0 9px 9px;text-align:inherit;float:left;width:100%}fn-color-picker color-picker .color-picker .button-area button{min-width:80px;padding:5px 10px}"]
            }] }
];
FnColorPickerComponent.propDecorators = {
    isDisable: [{ type: Input }],
    isDisableInput: [{ type: Input }],
    showOkBtn: [{ type: Input }],
    showCancelBtn: [{ type: Input }],
    okButtonClass: [{ type: Input }],
    cancelButtonClass: [{ type: Input }],
    isSaveClkOutside: [{ type: Input }],
    outputFormat: [{ type: Input }],
    changeColorCb: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FnColorPickerComponent.prototype.isDisable;
    /** @type {?} */
    FnColorPickerComponent.prototype.isDisableInput;
    /** @type {?} */
    FnColorPickerComponent.prototype.showOkBtn;
    /** @type {?} */
    FnColorPickerComponent.prototype.showCancelBtn;
    /** @type {?} */
    FnColorPickerComponent.prototype.okButtonClass;
    /** @type {?} */
    FnColorPickerComponent.prototype.cancelButtonClass;
    /** @type {?} */
    FnColorPickerComponent.prototype.isSaveClkOutside;
    /** @type {?} */
    FnColorPickerComponent.prototype.outputFormat;
    /** @type {?} */
    FnColorPickerComponent.prototype.changeColorCb;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnColorPickerModule {
}
FnColorPickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, ColorPickerModule, FnCoreModule],
                declarations: [FnColorPickerComponent],
                exports: [FnColorPickerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnDatePickerComponent {
    constructor() {
        this.currentDate = new Date();
        this.isDisable = false;
        this.format = 'd/M/Y';
        this.callback = new EventEmitter();
        this.nextDisabledCallback = new EventEmitter();
        this.prevDisabledCallback = new EventEmitter();
        this.nextPrevCallback = new EventEmitter();
        this.dateDisabled = new EventEmitter();
        this.startView = 'month';
        this.datePickerFilter = (/**
         * @param {?} date
         * @return {?}
         */
        (date) => {
            if (this.globalConfig.maxDate !== null) {
                return;
            }
            if (this.globalConfig.isAutoHandler && this.globalConfig.isFutureDisable) {
                return new Date(date.toString()) < this.globalConfig.disabledDate;
            }
            /** @type {?} */
            let returnVal = true;
            this.dateDisabled.emit({
                date: new Date(date.toString()), callback: (/**
                 * @param {?} val
                 * @return {?}
                 */
                (val) => {
                    returnVal = val;
                })
            });
            return returnVal;
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.globalConfig = this.globalConfig === undefined ? new FnDateConfig() : this.initGlbConfig(this.globalConfig);
        this.setDateModel(this.selectedDate || this.currentDate);
        this.customClass = this.customClass === undefined ? this.globalConfig.isMonthView ? 'fn-date-month-picker' : '' : this.customClass;
        this.startView = this.globalConfig.isMonthView ? 'year' : 'month';
    }
    /**
     * @return {?}
     */
    getFormattedDate() {
        return new FnDateFormatter().format(this.getDateObj(), this.format);
    }
    /**
     * @return {?}
     */
    getDateObj() {
        return new Date(this.selectedDate);
    }
    /**
     * @return {?}
     */
    setDate() {
        this.callback.emit(this.getDateObj());
    }
    /**
     * @param {?} isNext
     * @return {?}
     */
    nextPrevHandler(isNext) {
        if (this.globalConfig.isAutoHandler) {
            this.setDateModel(isNext ? this.getNextDate(this.globalConfig.noOfNavDay) : this.getPrevDate(this.globalConfig.noOfNavDay));
        }
        else {
            if (this.globalConfig.isMonthView) {
                this.setDateModel(isNext ? this.getNextMonth() : this.getPrevMonth());
            }
            else {
                this.setDateModel(isNext ? this.getNextDate(1) : this.getPrevDate(1));
            }
        }
        this.nextPrevCallback.emit({ date: this.getDateObj(), isNext });
    }
    /**
     * @return {?}
     */
    nextDisable() {
        if (this.globalConfig.isAutoHandler && this.globalConfig.isFutureDisable) {
            if (this.selectedDate !== undefined) {
                return new Date(this.getNextDate(this.globalConfig.noOfNavDay)) >= this.globalConfig.disabledDate;
            }
        }
        else if (this.globalConfig.isFutureDisable) {
            /** @type {?} */
            let isDisable = false;
            this.nextDisabledCallback.emit({
                date: this.getDateObj(),
                callback: (/**
                 * @param {?} value
                 * @return {?}
                 */
                (value) => {
                    isDisable = value;
                })
            });
            return isDisable;
        }
        return false;
    }
    /**
     * @return {?}
     */
    prevDisable() {
        /** @type {?} */
        let isDisable = false;
        this.prevDisabledCallback.emit({
            date: this.getDateObj(),
            callback: (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                isDisable = value;
            })
        });
        return isDisable;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    setDateModel(date) {
        this.selectedDate = date;
    }
    /**
     * @param {?} noOfNavDay
     * @return {?}
     */
    getNextDate(noOfNavDay) {
        /** @type {?} */
        const date = this.getDateObj();
        return new Date(date.setDate(date.getDate() + noOfNavDay));
    }
    /**
     * @param {?} noOfNavDay
     * @return {?}
     */
    getPrevDate(noOfNavDay) {
        /** @type {?} */
        const date = this.getDateObj();
        return new Date(date.setDate(date.getDate() - noOfNavDay));
    }
    /**
     * @return {?}
     */
    getNextMonth() {
        /** @type {?} */
        const date = this.getDateObj();
        return new Date(date.getFullYear(), date.getMonth() + 1, 1);
    }
    /**
     * @return {?}
     */
    getPrevMonth() {
        /** @type {?} */
        const date = this.getDateObj();
        return new Date(date.getFullYear(), date.getMonth() - 1, 1);
    }
    /**
     * @param {?} event
     * @param {?} datePicker
     * @return {?}
     */
    _monthSelectedHandler(event, datePicker) {
        if (this.globalConfig.isMonthView) {
            this.setDateModel(new Date(event));
            this.setDate();
            datePicker.close();
        }
    }
    /**
     * @param {?} configHash
     * @return {?}
     */
    initGlbConfig(configHash) {
        /** @type {?} */
        const returnGlbHash = Object.assign(configHash, {});
        /** @type {?} */
        const defaultCnfHash = new FnDateConfig();
        Object.keys(defaultCnfHash).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            if (!returnGlbHash.hasOwnProperty(key)) {
                returnGlbHash[key] = defaultCnfHash[key];
            }
            else if (key === 'type') {
                if (returnGlbHash[key] === 'month') {
                    returnGlbHash.isMonthView = true;
                }
            }
        }));
        return returnGlbHash;
    }
}
FnDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-date-picker',
                template: "<div class=\"single-date-picker\">\n  <div class=\"invisible\">\n    <input matInput [matDatepicker]=\"picker\" (dateChange)=\"setDate()\" [matDatepickerFilter]=\"datePickerFilter\"\n           placeholder=\"Choose a date\" [(ngModel)]=\"selectedDate\">\n    <mat-datepicker #picker [startView]=\"startView\" [panelClass]=\"customClass\"\n                    (monthSelected)=\"_monthSelectedHandler($event,picker)\"></mat-datepicker>\n  </div>\n  <div class=\"btn-group\">\n  <button class=\"btn btn-sm btn-outline-secondary\" mat-raised-button [disabled]=\"prevDisable()\" (click)=\"nextPrevHandler(false)\"><i class=\"fa fa-angle-left fa-fw\"></i></button>\n  <button class=\"btn btn-sm btn-outline-secondary\" mat-raised-button (click)=\"picker.open()\"><img class=\"svg\" src=\"assets/images/common/svg/calender-date-range.svg\"> {{getFormattedDate()}}</button>\n  <button class=\"btn btn-sm btn-outline-secondary\" mat-raised-button [disabled]=\"nextDisable()\" (click)=\"nextPrevHandler(true)\"><i class=\"fa fa-angle-right fa-fw\"></i></button>\n  </div>\n</div>\n",
                styles: [".single-date-picker{width:225px}.single-date-picker .invisible{height:0}.single-date-picker .btn-group button.btn-outline-secondary{border-color:#dddfe0;padding:5px 10px;letter-spacing:.04em;color:#6c757d;line-height:23px;background-color:transparent;height:34px}.single-date-picker .btn-group button.btn-outline-secondary:hover{color:#000;background-color:transparent}.single-date-picker .btn-group button.btn-outline-secondary i.fa{font-size:16px;line-height:23px}.single-date-picker .btn-group button.btn-outline-secondary img.svg{height:17px;width:17px;margin-top:-4px;margin-right:4px}.single-date-picker .btn-group button.btn-outline-secondary:first-child{border-radius:30px 0 0 30px}.single-date-picker .btn-group button.btn-outline-secondary:last-child{border-radius:0 30px 30px 0}::ng-deep .fn-date-month-picker .mat-calendar-period-button{pointer-events:none}::ng-deep .fn-date-month-picker .mat-calendar-arrow{display:none}mat-datepicker-content.mat-datepicker-content{min-height:330px;height:330px;margin-top:5px}mat-datepicker-content.mat-datepicker-content mat-calendar.mat-calendar mat-calendar-header .mat-calendar-header .mat-calendar-controls{margin:0 calc(33% / 7 - 16px) 2%}mat-datepicker-content.mat-datepicker-content mat-calendar.mat-calendar .mat-calendar-content{min-height:326px;height:326px}mat-datepicker-content.mat-datepicker-content mat-calendar.mat-calendar .mat-calendar-content mat-month-view table.mat-calendar-table{width:100%}mat-datepicker-content.mat-datepicker-content mat-calendar.mat-calendar .mat-calendar-content mat-month-view table.mat-calendar-table .mat-calendar-table-header tr th.mat-calendar-table-header-divider{visibility:inherit}"]
            }] }
];
FnDatePickerComponent.propDecorators = {
    currentDate: [{ type: Input }],
    globalConfig: [{ type: Input }],
    isDisable: [{ type: Input }],
    format: [{ type: Input }],
    selectedDate: [{ type: Input }],
    customClass: [{ type: Input }],
    callback: [{ type: Output }],
    nextDisabledCallback: [{ type: Output }],
    prevDisabledCallback: [{ type: Output }],
    nextPrevCallback: [{ type: Output }],
    dateDisabled: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FnDatePickerComponent.prototype.currentDate;
    /** @type {?} */
    FnDatePickerComponent.prototype.globalConfig;
    /** @type {?} */
    FnDatePickerComponent.prototype.isDisable;
    /** @type {?} */
    FnDatePickerComponent.prototype.format;
    /** @type {?} */
    FnDatePickerComponent.prototype.selectedDate;
    /** @type {?} */
    FnDatePickerComponent.prototype.customClass;
    /** @type {?} */
    FnDatePickerComponent.prototype.callback;
    /** @type {?} */
    FnDatePickerComponent.prototype.nextDisabledCallback;
    /** @type {?} */
    FnDatePickerComponent.prototype.prevDisabledCallback;
    /** @type {?} */
    FnDatePickerComponent.prototype.nextPrevCallback;
    /** @type {?} */
    FnDatePickerComponent.prototype.dateDisabled;
    /** @type {?} */
    FnDatePickerComponent.prototype.startView;
    /** @type {?} */
    FnDatePickerComponent.prototype.datePickerFilter;
}
class FnDateConfig {
    constructor() {
        this.minDate = new Date('1-1-1990');
        this.maxDate = null;
        this.navigation = 'select';
        this.startingDay = 2;
        this.displayMonths = 1;
        this.isAutoHandler = false; // handle next prev functionality
        // handle next prev functionality
        this.isFutureDisable = false; // use this if you are using the autoHandler.
        // use this if you are using the autoHandler.
        this.noOfNavDay = 7;
        this.disabledDate = new Date();
        this.isMonthView = false;
        this.type = null;
    }
}
if (false) {
    /** @type {?} */
    FnDateConfig.prototype.minDate;
    /** @type {?} */
    FnDateConfig.prototype.maxDate;
    /** @type {?} */
    FnDateConfig.prototype.navigation;
    /** @type {?} */
    FnDateConfig.prototype.startingDay;
    /** @type {?} */
    FnDateConfig.prototype.displayMonths;
    /** @type {?} */
    FnDateConfig.prototype.isAutoHandler;
    /** @type {?} */
    FnDateConfig.prototype.isFutureDisable;
    /** @type {?} */
    FnDateConfig.prototype.noOfNavDay;
    /** @type {?} */
    FnDateConfig.prototype.disabledDate;
    /** @type {?} */
    FnDateConfig.prototype.isMonthView;
    /** @type {?} */
    FnDateConfig.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnDatePickerModule {
}
FnDatePickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FnDatePickerComponent],
                imports: [CommonModule, FormsModule, MatDatepickerModule, MatNativeDateModule, FoundationModule],
                exports: [FnDatePickerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnPaginationComponent {
    constructor() {
        this.currentPage = 0;
        this.totalPage = 0;
        this.pageSize = 0;
        this.pageClass = '';
        this.changePage = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentPage = 1;
    }
    /**
     * @return {?}
     */
    firstPage() {
        this.currentPage = 1;
        this.changePage.emit(this.currentPage);
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.currentPage = this.currentPage - 1;
        this.changePage.emit(this.currentPage);
    }
    /**
     * @return {?}
     */
    nextPage() {
        this.currentPage = this.currentPage + 1;
        this.changePage.emit(this.currentPage);
    }
    /**
     * @return {?}
     */
    lastPage() {
        this.currentPage = this.totalPage;
        this.changePage.emit(this.currentPage);
    }
}
FnPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-pagination',
                template: "<div class=\"{{pageClass}}\" *ngIf=\"totalPage>1\">\n  <div class=\" row \">\n    <div class=\"col-sm-12 no-padding \">\n      <div class=\"btn-toolbar pull-right \" role=\"toolbar \">\n        <div class=\"btn-group \">\n          <button id=\"firstBtn \" class=\"btn btn-xs fn-pagging-btn \" (click)=\"firstPage() \" [disabled]=\"currentPage==1 \">\n            First\n          </button>\n          <button id=\"prevBtn \" class=\"btn btn-xs fn-pagging-btn \" [disabled]=\"currentPage==1\" (click)=\"prevPage() \">\n            Previous\n          </button>\n          <button id=\"labelBtn \" class=\"btn btn-xs fn-pagging-btn bg-white \" disabled=\"disabled \">\n            {{currentPage}}/{{totalPage}}</button>\n          <button id=\"nextBtn \" class=\"btn btn-xs fn-pagging-btn \" [disabled]=\"currentPage == totalPage \"\n                  (click)=\"nextPage() \">\n            Next\n          </button>\n          <button id=\"lastBtn \" class=\"btn btn-xs fn-pagging-btn \" [disabled]=\"currentPage==totalPage \"\n                  (click)=\"lastPage() \">\n            Last\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".fn-pagging-btn{border:1px solid #ced4da;padding:3px 10px!important;font-size:12px}"]
            }] }
];
FnPaginationComponent.propDecorators = {
    currentPage: [{ type: Input }],
    totalPage: [{ type: Input }],
    pageSize: [{ type: Input }],
    pageClass: [{ type: Input }],
    changePage: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FnPaginationComponent.prototype.currentPage;
    /** @type {?} */
    FnPaginationComponent.prototype.totalPage;
    /** @type {?} */
    FnPaginationComponent.prototype.pageSize;
    /** @type {?} */
    FnPaginationComponent.prototype.pageClass;
    /** @type {?} */
    FnPaginationComponent.prototype.changePage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnPaginationModule {
}
FnPaginationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [FnPaginationComponent],
                exports: [FnPaginationComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Created by mvasim on 12/9/17.
 */
/*
 * tableAction ->
 *  'ADD' -> Add Action
 *  'REFRESH' -> Refresh Action
 *
*/
/**
 * @record
 */
function TableAction() { }
if (false) {
    /** @type {?} */
    TableAction.prototype.action;
    /** @type {?} */
    TableAction.prototype.data;
}
class FnTableConfig {
    constructor() {
        this.pagination = true;
        this.filterOn = true;
        this.hideAction = false;
        this.hideEdit = false;
        this.hideDelete = false;
    }
}
FnTableConfig.defalutSortClass = ' fa-sort';
FnTableConfig.defaultSortValue = 1; // -1 = desc , 1 = asc
// -1 = desc , 1 = asc
FnTableConfig.defaultIsColSort = true;
if (false) {
    /** @type {?} */
    FnTableConfig.defalutSortClass;
    /** @type {?} */
    FnTableConfig.defaultSortValue;
    /** @type {?} */
    FnTableConfig.defaultIsColSort;
    /** @type {?} */
    FnTableConfig.prototype.uniqueKey;
    /** @type {?} */
    FnTableConfig.prototype.tableClass;
    /** @type {?} */
    FnTableConfig.prototype.pagination;
    /** @type {?} */
    FnTableConfig.prototype.filterOn;
    /** @type {?} */
    FnTableConfig.prototype.hideAction;
    /** @type {?} */
    FnTableConfig.prototype.hideEdit;
    /** @type {?} */
    FnTableConfig.prototype.hideDelete;
    /** @type {?} */
    FnTableConfig.prototype.defaultSortKey;
    /** @type {?} */
    FnTableConfig.prototype.hidePagination;
    /** @type {?} */
    FnTableConfig.prototype.isSelectable;
    /** @type {?} */
    FnTableConfig.prototype.tableAction;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnTableComponent {
    /**
     * @param {?} fnUtil
     */
    constructor(fnUtil) {
        this.fnUtil = fnUtil;
        this.tblSearchConfig = {
            actionClear: new Subject()
        };
        this.updateRow = new EventEmitter();
        this.deleteRow = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.config.tableAction.unsubscribe();
        this.tblSearchConfig.actionClear.complete();
    }
    /**
     * @return {?}
     */
    initPageConfig() {
        if (this.fnUtil.isEmptyObject(this.config.hidePagination)) {
            this.config.hidePagination = false;
        }
        if (!this.config.hidePagination) {
            this.currentPage = 1;
            this.pageSize = this.fnUtil.isEmptyObject(this.pageSize) ? 10 : this.pageSize;
            this.totalPage = Math.ceil(this.dataArray.size / this.pageSize);
        }
        else {
            this.currentPage = 1;
            this.pageSize = this.dataArray.size;
            this.totalPage = 1;
        }
        if (this.fnUtil.isEmptyObject(this.config.uniqueKey)) {
            this.config.uniqueKey = 'primaryKey';
        }
        /** @type {?} */
        const _tempMetaHash = this.fnUtil.mapFromArray(this.rowMetaArray, 'key');
        this.uniquKeyExits = !this.fnUtil.isEmptyObject(_tempMetaHash[this.config.uniqueKey]);
    }
    /**
     * @param {?} tableAction
     * @return {?}
     */
    tableAction(tableAction) {
        if (tableAction.action === 'ADD') {
            this.addRowAction(tableAction.data);
        }
        else if (tableAction.action === 'REFRESH') {
        }
        else {
            // todo
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.config.tableAction.subscribe(this.tableAction);
        this.filterArray = this.dataArray;
        this.initPageConfig();
        for (let index = 0; index < this.rowMetaArray.length; index++) {
            this.rowMetaArray[index].sortValue = this.fnUtil.isEmptyObject(this.rowMetaArray[index].sortValue) ?
                FnTableConfig.defaultSortValue : this.rowMetaArray[index].sortValue;
            if (this.fnUtil.isEmptyObject(this.rowMetaArray[index].isSortable)) {
                this.rowMetaArray[index].isSortable = FnTableConfig.defaultIsColSort;
            }
            if (this.config.defaultSortKey === this.rowMetaArray[index].key) {
                this.selectedCol = this.rowMetaArray[index];
            }
        }
        if (this.config.defaultSortKey) {
            this.applySortIcon(this.config.defaultSortKey);
            this.changeSort(this.selectedCol);
        }
    }
    /**
     * @param {?} sortKey
     * @return {?}
     */
    applySortIcon(sortKey) {
        for (const index in this.rowMetaArray) {
            if (this.rowMetaArray[index].key === sortKey) {
                if (this.rowMetaArray[index].sortValue === 0) {
                    this.rowMetaArray[index].sortValue = 1;
                    this.rowMetaArray[index].sortCls = ' fa-sort-desc';
                }
                else {
                    this.rowMetaArray[index].sortValue = this.rowMetaArray[index].sortValue === 1 ? -1 : 1;
                    this.rowMetaArray[index].sortCls = this.rowMetaArray[index].sortValue === 1 ? ' fa-sort-desc' : ' fa-sort-asc';
                }
            }
            else {
                this.rowMetaArray[index].sortCls = FnTableConfig.defalutSortClass;
                this.rowMetaArray[index].sortValue = FnTableConfig.defaultSortValue;
            }
        }
    }
    /**
     * @param {?} column
     * @param {?=} skipSortIcon
     * @return {?}
     */
    changeSort(column, skipSortIcon) {
        this.selectedCol = column;
        if (!skipSortIcon) {
            this.applySortIcon(column.key);
        }
        /** @type {?} */
        const _key = column.sortValue < 0 ? '-' + column.key : column.key;
        /** @type {?} */
        const tempArray = this.fnUtil.sortObjectOnKeys(this.filterArray.toArray(), _key);
        /** @type {?} */
        const startSize = (this.currentPage - 1) * (this.pageSize);
        this.dataCloneArray = List(tempArray.slice(startSize, startSize + this.pageSize));
    }
    /**
     * @param {?} eventObj
     * @return {?}
     */
    paginzationEvent(eventObj) {
        this.currentPage = eventObj;
        this.changeSort(this.selectedCol, true);
    }
    /**
     * @param {?=} _searchTerm
     * @return {?}
     */
    searchOnRows(_searchTerm) {
        this.currentPage = 1;
        if (this.fnUtil.isEmptyObject(_searchTerm)) {
            this.filterArray = this.dataArray;
            this.totalPage = Math.ceil(this.dataArray.size / this.pageSize);
        }
        else {
            this.filterArray = List(this.fnUtil.filterArray(this.dataArray.toArray(), _searchTerm, true));
            this.totalPage = Math.ceil(this.filterArray.size / this.pageSize);
        }
        this.changeSort(this.selectedCol, true);
    }
    /**
     * @private
     * @param {?} rowObj
     * @return {?}
     */
    addRowAction(rowObj) {
        this.dataArray.push(rowObj);
        this.searchOnRows();
    }
    /**
     * @param {?} rowArray
     * @return {?}
     */
    filterAction(rowArray) {
        this.dataArray = rowArray;
        this.searchTerm = '';
        this.searchOnRows();
    }
    /**
     * @private
     * @param {?} dataArray
     * @return {?}
     */
    updateDataArray(dataArray) {
        this.dataArray = dataArray;
        this.ngOnInit();
    }
    /**
     * @param {?} rowObj
     * @param {?} columnName
     * @return {?}
     */
    cellClick(rowObj, columnName) {
        this.updateAction(rowObj);
    }
    /**
     * @param {?} rowObj
     * @return {?}
     */
    updateAction(rowObj) {
        this.updateRow.emit({
            row: rowObj, callback: (/**
             * @param {?} returnRow
             * @return {?}
             */
            (returnRow) => {
                for (const key in this.dataArray) {
                    if (this.uniquKeyExits && this.dataArray[key][this.config.uniqueKey] === returnRow[this.config.uniqueKey]) {
                        this.dataArray[key] = returnRow;
                        break;
                    }
                }
                this.searchOnRows();
            })
        });
    }
    /**
     * @param {?} rowObj
     * @return {?}
     */
    deleteAction(rowObj) {
        this.deleteRow.emit({
            row: rowObj, callback: (/**
             * @param {?=} returnRow
             * @return {?}
             */
            (returnRow) => {
                for (const index in this.dataArray) {
                    if (this.uniquKeyExits && this.dataArray[index][this.config.uniqueKey] === rowObj[this.config.uniqueKey]) {
                        // tslint:disable-next-line:radix
                        this.dataArray.splice(parseInt(index), 1);
                        break;
                    }
                }
                this.searchOnRows();
            })
        });
    }
    /**
     * @private
     * @param {?} rowObj
     * @return {?}
     */
    deleteRowAction(rowObj) {
        for (const index in this.dataArray) {
            if (this.uniquKeyExits && this.dataArray[index][this.config.uniqueKey] === rowObj[this.config.uniqueKey]) {
                // tslint:disable-next-line: radix
                this.dataArray.splice(parseInt(index), 1);
                break;
            }
        }
        this.searchOnRows();
    }
    /**
     * @return {?}
     */
    toggleSearch() {
        this.searchTerm = '';
        if (this.showSearchBox) {
            this.tblSearchConfig.actionClear.next();
        }
        this.searchOnRows();
        this.showSearchBox = !this.showSearchBox;
    }
}
FnTableComponent.DEFAULT_SORT_CLS = '';
FnTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-table',
                template: "<table class=\"table table-bordered table-striped table-hover dataTable no-margin\" ngClass=\"{{config.tableClass || ''}}\" role=\"grid\" style=\"width: 100%;\">\n  <thead class=\"grey lighten-2\">\n  <tr role=\"row\">\n    <th *ngFor=\"let column of rowMetaArray\" [class.hidden]=\"column.isHidden\" (click)=\"changeSort(column)\"\n        ngClass=\"{{column.className || ''}}\">\n      {{column.description}}\n      <i *ngIf=\"column.isSortable\" class=\"margin-left-5 fa \" [ngClass]=\"column.sortCls\"></i>\n    </th>\n    <th *ngIf=\"!config.hideAction\" class=\"text-center relative\" style=\"width:10%;min-width: 100px;\">\n        <span>Action\n          <label class=\"lable\" (click)=\"toggleSearch()\" style=\"cursor: pointer;margin-bottom:-2px\">\n            <i class=\"fa fa-search pull-right blue \"></i>\n          </label>\n        </span>\n\n      <div id=\"fn-search-input\" class=\"input-group table-search\" [class.hidden]=\"!showSearchBox\">\n        <!-- <input type=\"text\" class=\"form-control input-lg\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"searchOnRows()\" placeholder=\"Search\" /> -->\n        <fn-table-search-component (search)=\"searchOnRows($event)\" [config]=\"tblSearchConfig\">\n        </fn-table-search-component>\n        <span class=\"input-group-btn\">\n            <button class=\"btn btn-basic btn-sm\" type=\"button\" (click)=\"toggleSearch()\">\n              <i class=\"fa fa-times red\"></i>\n            </button>\n          </span>\n      </div>\n\n    </th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let row of dataCloneArray\">\n    <td (click)=\"cellClick(row, column.key)\" *ngFor=\"let column of rowMetaArray\" [class.hidden]=\"column.isHidden\">\n      <div *ngIf=\"column.type == 'string'\"> {{row[column.key]}} </div>\n      <div *ngIf=\"column.type == 'number'\"> {{row[column.key]}} </div>\n      <div *ngIf=\"column.type == 'color'\" class=\"color-test padding-10 choppOff\"\n           [ngStyle]=\"{'background-color': row[column.key]}\"></div>\n    </td>\n    <td *ngIf=\"!config.hideAction\" style=\"width:10%\" class=\"text-center\">\n      <button (click)=\"updateAction(row)\" *ngIf=\"!config.hideEdit\" class=\"btn btn-link btn-action\">\n        <!-- <img src=\"assets/images/common/svg/edit-icon.svg\" class=\"alta-table-btn\"> -->\n        <i (click)=\"updateAction(row)\" ng-if=\"!config.hideEdit\" class=\"fa hide fa-edit blue fa-lg\"></i></button>\n      <button (click)=\"deleteAction(row)\" *ngIf=\"!config.hideDelete\" class=\"btn btn-link btn-action\">\n        <!-- <img src=\"assets/images/common/svg/delete-icon.svg\" class=\"alta-table-btn\"> -->\n        <i (click)=\"deleteAction(row)\" ng-if=\"!config.hideDelete\" class=\"fa hide fa-trash-o red fa-lg\"></i></button>\n\n      <input *ngIf=\"config.isSelectable\" [(ngModel)]=\"row['isActive']\" type=\"checkbox\" (change)=\"updateAction(row)\"\n             style=\"opacity: 1\">\n\n\n    </td>\n  </tr>\n\n  </tbody>\n</table>\n<div class=\"no_data_display mt-13\" *ngIf=\"dataCloneArray.size<1\">No Data to display</div>\n<fn-pagination [currentPage]=\"currentPage\" [totalPage]=\"totalPage\" (changePage)=\"paginzationEvent($event)\">\n</fn-pagination>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["#fn-search-input{padding:0!important;border:1px solid #ced4da;border-radius:6px;background-color:#fff}#fn-search-input input{border:none!important;box-shadow:none}#fn-search-input button{margin:0!important;background:0 0;box-shadow:none;border:none!important;color:#8a8f9f;padding:4px 8px 4px 10px;border-left:1px solid #ced4da}#fn-search-input button:hover{border:none!important;box-shadow:none;border-left:1px solid #ced4da}#fn-search-input .glyphicon-search{font-size:23px}"]
            }] }
];
/** @nocollapse */
FnTableComponent.ctorParameters = () => [
    { type: FnUtilService }
];
FnTableComponent.propDecorators = {
    config: [{ type: Input }],
    rowMetaArray: [{ type: Input }],
    dataArray: [{ type: Input }],
    currentPage: [{ type: Input }],
    pageSize: [{ type: Input }],
    updateRow: [{ type: Output }],
    deleteRow: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnTableComponent.DEFAULT_SORT_CLS;
    /** @type {?} */
    FnTableComponent.prototype.tblSearchConfig;
    /**
     * @type {?}
     * @private
     */
    FnTableComponent.prototype.selectedCol;
    /** @type {?} */
    FnTableComponent.prototype.searchTerm;
    /**
     * @type {?}
     * @private
     */
    FnTableComponent.prototype.uniquKeyExits;
    /** @type {?} */
    FnTableComponent.prototype.filterArray;
    /** @type {?} */
    FnTableComponent.prototype.config;
    /** @type {?} */
    FnTableComponent.prototype.rowMetaArray;
    /** @type {?} */
    FnTableComponent.prototype.dataArray;
    /** @type {?} */
    FnTableComponent.prototype.currentPage;
    /** @type {?} */
    FnTableComponent.prototype.pageSize;
    /** @type {?} */
    FnTableComponent.prototype.updateRow;
    /** @type {?} */
    FnTableComponent.prototype.deleteRow;
    /** @type {?} */
    FnTableComponent.prototype.totalPage;
    /** @type {?} */
    FnTableComponent.prototype.showSearchBox;
    /** @type {?} */
    FnTableComponent.prototype.dataCloneArray;
    /**
     * @type {?}
     * @private
     */
    FnTableComponent.prototype.fnUtil;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnTableSearchComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.debouncer = new Subject();
        this.search = new EventEmitter();
        this.debouncer.pipe(debounceTime(200)).subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => {
            this.search.emit(val);
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.config.actionClear.subscribe((/**
         * @return {?}
         */
        () => {
            this.el.nativeElement.lastChild.value = '';
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    debounce(value) {
        this.debouncer.next(value);
    }
}
FnTableSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-table-search',
                template: "<!-- <input type=\"text\" class=\"form-control input-lg\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"searchOnRows()\" placeholder=\"Search\" /> -->\r\n<input type=\"text\" (input)=\"debounce($event.target.value)\" placeholder=\"Search...\">",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
FnTableSearchComponent.ctorParameters = () => [
    { type: ElementRef }
];
FnTableSearchComponent.propDecorators = {
    search: [{ type: Output }],
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FnTableSearchComponent.prototype.debouncer;
    /** @type {?} */
    FnTableSearchComponent.prototype.search;
    /** @type {?} */
    FnTableSearchComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    FnTableSearchComponent.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Created by mvasim on 12/9/17.
 */
class FnTableMetaData {
}
if (false) {
    /** @type {?} */
    FnTableMetaData.prototype.key;
    /** @type {?} */
    FnTableMetaData.prototype.description;
    /** @type {?} */
    FnTableMetaData.prototype.type;
    /** @type {?} */
    FnTableMetaData.prototype.isDisable;
    /** @type {?} */
    FnTableMetaData.prototype.className;
    /** @type {?} */
    FnTableMetaData.prototype.isSortable;
    /** @type {?} */
    FnTableMetaData.prototype.sortCls;
    /** @type {?} */
    FnTableMetaData.prototype.sortValue;
    /** @type {?} */
    FnTableMetaData.prototype.isHidden;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnTableModule {
}
FnTableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FnTableComponent, FnTableSearchComponent],
                imports: [FormsModule, CommonModule, FnPaginationModule, FoundationModule],
                exports: [FnTableComponent, FnTableSearchComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnMenuService {
    constructor() {
        this.menuItemClick$ = new Subject();
        this.menuOpen$ = new BehaviorSubject(false);
    }
    /**
     * @param {?} menuId
     * @return {?}
     */
    navMenuClick(menuId) {
        /** @type {?} */
        const $this = fnDom('#' + menuId);
        if ($this.parents('li').hasClass('active')) {
            $this.parent('li').children('li').removeClass('active');
            $this.siblings('ul').children('li').removeClass('active');
            $this.parent('li').siblings('li').removeClass('active');
            $this.parents('li').addClass('active');
            // $this.parent('li').siblings('li').children('ul').slideUp();
            // $this.siblings('ul').children('li').children('ul').slideUp();
            // $this.siblings('ul').slideDown();
        }
        else {
            fnDom('.side-bar-menu li').each((/**
             * @param {?} node
             * @return {?}
             */
            (node) => {
                fnDom(node).removeClass('active');
            }));
            //  $('.side-bar-menu li ul').slideUp();
            $this.parents('li').addClass('active');
            // $this.siblings('ul').slideDown();
        }
    }
    /**
     * @param {?} menuId
     * @return {?}
     */
    onMenuItemClick(menuId) {
        this.menuItemClick$.next(menuId);
        this.navMenuClick(menuId);
    }
    /**
     * @return {?}
     */
    getMenuItemClick$() {
        return this.menuItemClick$;
    }
}
FnMenuService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    FnMenuService.prototype.menuItemClick$;
    /** @type {?} */
    FnMenuService.prototype.menuOpen$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnMenuItemComponent {
    /**
     * @param {?} fnMenuService
     */
    constructor(fnMenuService) {
        this.fnMenuService = fnMenuService;
    }
    /**
     * @param {?} menuItem
     * @return {?}
     */
    menuClickHandler(menuItem) {
        this.fnMenuService.onMenuItemClick(menuItem.id);
    }
}
FnMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: '[fn-menu-item]',
                encapsulation: ViewEncapsulation.None,
                template: "<li *ngFor=\"let menuItem of fnMenuItem.menuItemArray\" [ngClass]=\"{'nav-dropdown':menuItem.menuItemArray.length>0 && menuItem.showDropIcon}\"\r\n  class=\"nav-item\">\r\n  <a (click)=\"menuClickHandler(menuItem)\" [id]=\"menuItem.id\" class=\"nav-link\">\r\n    <img [src]=\"menuItem.smallIcon\" height=\"20\" width=\"20\"/>\r\n    <span [innerHTML]=\"menuItem.name\"></span>\r\n    <i *ngIf=\"menuItem.menuItemArray && menuItem.menuItemArray.length>0\" class=\"fa fa-angle-right pull-right\"></i>\r\n  </a>\r\n  <ul\r\n    fn-menu-item class=\"sidebar-menu-item nav-sub  {{menuItem.id}}\" *ngIf=\"!menuItem.isDisabled\" [fnMenuItem]=\"menuItem\">\r\n  </ul>\r\n\r\n</li>\r\n"
            }] }
];
/** @nocollapse */
FnMenuItemComponent.ctorParameters = () => [
    { type: FnMenuService }
];
FnMenuItemComponent.propDecorators = {
    fnMenuItem: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FnMenuItemComponent.prototype.renderMenuItem;
    /** @type {?} */
    FnMenuItemComponent.prototype.fnMenuItem;
    /**
     * @type {?}
     * @private
     */
    FnMenuItemComponent.prototype.fnMenuService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function FnMenuItemState() { }
if (false) {
    /** @type {?} */
    FnMenuItemState.prototype.id;
    /** @type {?} */
    FnMenuItemState.prototype.menuItemArray;
    /** @type {?} */
    FnMenuItemState.prototype.isEnableOnUI;
    /** @type {?} */
    FnMenuItemState.prototype.labelIDArray;
    /** @type {?} */
    FnMenuItemState.prototype.showBreadcrum;
    /** @type {?} */
    FnMenuItemState.prototype.isActive;
    /** @type {?} */
    FnMenuItemState.prototype.textColor;
    /** @type {?} */
    FnMenuItemState.prototype.parentID;
    /** @type {?} */
    FnMenuItemState.prototype.isWalkthruConfigured;
    /** @type {?} */
    FnMenuItemState.prototype.menuItemIDArray;
    /** @type {?} */
    FnMenuItemState.prototype.showDropIcon;
    /** @type {?} */
    FnMenuItemState.prototype.hrefClass;
    /** @type {?} */
    FnMenuItemState.prototype.name;
    /** @type {?} */
    FnMenuItemState.prototype.recalAccess;
    /** @type {?} */
    FnMenuItemState.prototype.isCustomMenu;
    /** @type {?} */
    FnMenuItemState.prototype.applicablePK;
    /** @type {?} */
    FnMenuItemState.prototype.isDisabled;
    /** @type {?} */
    FnMenuItemState.prototype.hideLabel;
    /** @type {?|undefined} */
    FnMenuItemState.prototype.smallIcon;
    /** @type {?|undefined} */
    FnMenuItemState.prototype.menuType;
    /** @type {?|undefined} */
    FnMenuItemState.prototype.helpTextLBL;
    /** @type {?|undefined} */
    FnMenuItemState.prototype.customIcon;
    /** @type {?|undefined} */
    FnMenuItemState.prototype.bigIcon;
}
/** @type {?} */
const DEFAULT_MENU_STATE = {
    id: '',
    menuItemArray: [],
    isEnableOnUI: false,
    labelIDArray: [],
    showBreadcrum: false,
    isActive: false,
    textColor: '',
    parentID: '',
    isWalkthruConfigured: false,
    menuItemIDArray: [],
    showDropIcon: false,
    hrefClass: '',
    name: '',
    recalAccess: false,
    isCustomMenu: false,
    applicablePK: 0,
    isDisabled: false,
    hideLabel: false
};
/**
 * @record
 */
function FnMenuState() { }
if (false) {
    /** @type {?} */
    FnMenuState.prototype.activeMenuId;
    /** @type {?} */
    FnMenuState.prototype.menuData;
    /** @type {?} */
    FnMenuState.prototype.menuItemDetailMap;
    /** @type {?} */
    FnMenuState.prototype.menuItemMap;
    /** @type {?} */
    FnMenuState.prototype.error;
    /** @type {?} */
    FnMenuState.prototype.isMenuLoaded;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const FnMenuActionType = {
    InitMenuState: '[FnMenu] initialize Menu State',
    LoadMenuData: '[FnMenu] Load Menu Data',
    LoadMenuDataSucess: '[FnMenu] Load Success',
    LoadMenuDataError: '[FnMenu] Load Error',
    SetActiveMenuId: '[FnMenu] Set Active Menu ID',
};
class InitMenuState {
    constructor() {
        this.type = FnMenuActionType.InitMenuState;
    }
}
if (false) {
    /** @type {?} */
    InitMenuState.prototype.type;
}
class LoadMenuDataSucess {
    /**
     * @param {?} menuItemState
     * @param {?} menuItemMap
     * @param {?} menuItemDetailMap
     * @param {?} isMenuLoaded
     */
    constructor(menuItemState, menuItemMap, menuItemDetailMap, isMenuLoaded) {
        this.menuItemState = menuItemState;
        this.menuItemMap = menuItemMap;
        this.menuItemDetailMap = menuItemDetailMap;
        this.isMenuLoaded = isMenuLoaded;
        this.type = FnMenuActionType.LoadMenuDataSucess;
    }
}
if (false) {
    /** @type {?} */
    LoadMenuDataSucess.prototype.type;
    /** @type {?} */
    LoadMenuDataSucess.prototype.menuItemState;
    /** @type {?} */
    LoadMenuDataSucess.prototype.menuItemMap;
    /** @type {?} */
    LoadMenuDataSucess.prototype.menuItemDetailMap;
    /** @type {?} */
    LoadMenuDataSucess.prototype.isMenuLoaded;
}
class LoadMenuData {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = FnMenuActionType.LoadMenuData;
    }
}
if (false) {
    /** @type {?} */
    LoadMenuData.prototype.type;
    /** @type {?} */
    LoadMenuData.prototype.payload;
}
class LoadMenuDataError {
    /**
     * @param {?} error
     */
    constructor(error) {
        this.error = error;
        this.type = FnMenuActionType.LoadMenuDataError;
    }
}
if (false) {
    /** @type {?} */
    LoadMenuDataError.prototype.type;
    /** @type {?} */
    LoadMenuDataError.prototype.error;
}
class SetActiveMenuId {
    /**
     * @param {?} activeMenuId
     */
    constructor(activeMenuId) {
        this.activeMenuId = activeMenuId;
        this.type = FnMenuActionType.SetActiveMenuId;
    }
}
if (false) {
    /** @type {?} */
    SetActiveMenuId.prototype.type;
    /** @type {?} */
    SetActiveMenuId.prototype.activeMenuId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initMenuState = {
    menuData: DEFAULT_MENU_STATE,
    error: '',
    activeMenuId: '',
    menuItemMap: null,
    menuItemDetailMap: null,
    isMenuLoaded: false
};
/** @type {?} */
const fnMenuFeatureState = createFeatureSelector('FnMenuReducer');
const ɵ0$1 = /**
 * @param {?} state
 * @return {?}
 */
state => state.menuData // may be we filter some item
;
/** @type {?} */
const getMenuData = createSelector(fnMenuFeatureState, (ɵ0$1));
const ɵ1$1 = /**
 * @param {?} state
 * @return {?}
 */
state => state.menuData.id // may be we filter some item
;
/** @type {?} */
const getRooMenuId = createSelector(fnMenuFeatureState, (ɵ1$1));
const ɵ2$1 = /**
 * @param {?} state
 * @return {?}
 */
state => state.activeMenuId;
/** @type {?} */
const getActiveMenuId = createSelector(fnMenuFeatureState, (ɵ2$1));
const ɵ3$1 = /**
 * @param {?} state
 * @return {?}
 */
state => state.menuItemMap;
/** @type {?} */
const getMenuItemMap = createSelector(fnMenuFeatureState, (ɵ3$1));
const ɵ4$1 = /**
 * @param {?} state
 * @return {?}
 */
state => state.menuItemDetailMap;
/** @type {?} */
const getMenuDetailItemMap = createSelector(fnMenuFeatureState, (ɵ4$1));
const ɵ5$1 = /**
 * @param {?} state
 * @param {?} prop
 * @return {?}
 */
(state, prop) => {
    return state[prop.id];
};
/** @type {?} */
const getMenuItemById = createSelector(getMenuDetailItemMap, (ɵ5$1));
const ɵ6$1 = /**
 * @param {?} state
 * @param {?} activeMenuId
 * @return {?}
 */
(state, activeMenuId) => {
    return state[activeMenuId];
};
/** @type {?} */
const getActiveMenuItem = createSelector(getMenuDetailItemMap, getActiveMenuId, (ɵ6$1));
const ɵ7$1 = /**
 * @param {?} state
 * @return {?}
 */
state => {
    return state.isMenuLoaded;
};
/** @type {?} */
const getMenuStatus = createSelector(fnMenuFeatureState, (ɵ7$1));
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function FnMenuReducer(state = initMenuState, action) {
    switch (action.type) {
        case FnMenuActionType.InitMenuState:
            return Object.assign({}, state);
        case FnMenuActionType.LoadMenuDataSucess:
            return Object.assign({}, state, { menuData: action.menuItemState, menuItemMap: action.menuItemMap, menuItemDetailMap: action.menuItemDetailMap, isMenuLoaded: action.isMenuLoaded });
        case FnMenuActionType.LoadMenuDataError:
            return Object.assign({}, state, { error: action.error });
        case FnMenuActionType.SetActiveMenuId:
            return Object.assign({}, state, { activeMenuId: action.activeMenuId });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnMenuLandingComponent {
    /**
     * @param {?} menuStore
     * @param {?} fnMenuService
     */
    constructor(menuStore, fnMenuService) {
        this.menuStore = menuStore;
        this.fnMenuService = fnMenuService;
        this.destroy$ = new Subject();
        this.loadSubMenuArrayForActiveMenuId();
    }
    /**
     * @return {?}
     */
    loadSubMenuArrayForActiveMenuId() {
        this.menuStore.pipe(takeUntil(this.destroy$), select(getActiveMenuItem)).subscribe((/**
         * @param {?} menuItem
         * @return {?}
         */
        (menuItem) => {
            this.activeMenuItem = menuItem;
            //  console.log(menuItem);
            // tslint:disable-next-line: triple-equals
            this.isCustMenu = this.activeMenuItem.menuType == 'CUSTOM';
            this.isLoaded = true;
        }));
    }
    /**
     * @param {?} menuItem
     * @return {?}
     */
    menuClickHandler(menuItem) {
        this.fnMenuService.onMenuItemClick(menuItem.id);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
FnMenuLandingComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                template: "<!-- <div class=\"zrpt_box_content\" *ngIf=\"isLoaded\">\r\n    <div class=\"header_wrap\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <img class=\"height-width-17 margin-right-5\" [src]=\"activeMenuItem.smallIcon\"><span [innerHTML]=\"activeMenuItem.name\"></span></div>\r\n\r\n\r\n        </div>\r\n        <div class=\"seperator_sky\"></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"site_reports_wrapper bg-white padding-15\">\r\n        <div class=\"row no-margin\">\r\n            <div class=\"report-img-data-wrap col-md-3\" *ngFor=\"let item of activeMenuItem.menuItemArray\" [ngClass]=\"{'hide':item.isDisabled}\" (click)=\"menuClickHandler(item)\">\r\n                <div class=\"img-wrap\">\r\n                    <img [src]=\"item.customIcon\" width=\"100%\" *ngIf=\"isCustMenu\">\r\n                    <img [src]=\"item.bigIcon\" width=\"100%\" *ngIf=\"!isCustMenu\">\r\n                </div>\r\n                <div class=\"reports-Data\">\r\n                    <h5 class=\"choppOff\">\r\n                        <span [innerHTML]=\"item.name\"></span>\r\n                    </h5>\r\n                    <p class=\"choppOff\" [title]=\"item.helpTextLBL\">\r\n                        <span [innerHTML]=\"item.helpTextLBL\"></span>\r\n\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div> -->\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"sub-menu-landing\">\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"sml-img-data-wrap col-3\" *ngFor=\"let item of activeMenuItem.menuItemArray\" [ngClass]=\"{'hide':item.isDisabled}\" (click)=\"menuClickHandler(item)\">\r\n                        <div class=\"sml-img-wrap\">\r\n                            <img [src]=\"item.customIcon\" width=\"100%\" *ngIf=\"isCustMenu\">\r\n                            <img [src]=\"item.bigIcon\" width=\"100%\" *ngIf=\"!isCustMenu\">\r\n                        </div>\r\n                        <div class=\"sml-Data\">\r\n                            <h5 class=\"choppOff\">\r\n                                <span [innerHTML]=\"item.name\"></span>\r\n                            </h5>\r\n                            <p class=\"choppOff\" [title]=\"item.helpTextLBL\">\r\n                                <span [innerHTML]=\"item.helpTextLBL\"></span>\r\n        \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>",
                styles: [".sub-menu-landing{background-color:#fff;padding:15px 30px;border-radius:2px}.sub-menu-landing .sml-img-data-wrap{padding:10px;cursor:pointer;min-height:80px;float:left}.sub-menu-landing .sml-img-data-wrap:hover{background-color:#f8f9fb;border-radius:4px}.sub-menu-landing .sml-img-wrap{width:50px;height:50px;float:left;margin-right:10px;padding:5px}.sub-menu-landing .sml-img-wrap img.svg{width:100%;height:auto}.sub-menu-landing .sml-Data{margin-top:5px}.sub-menu-landing .sml-Data h5{margin:0;color:#555557;font-size:15px}.sub-menu-landing .sml-Data p{color:#9e9e9e;margin:0;font-size:13px}"]
            }] }
];
/** @nocollapse */
FnMenuLandingComponent.ctorParameters = () => [
    { type: Store },
    { type: FnMenuService }
];
if (false) {
    /** @type {?} */
    FnMenuLandingComponent.prototype.activeMenuItem;
    /** @type {?} */
    FnMenuLandingComponent.prototype.isLoaded;
    /** @type {?} */
    FnMenuLandingComponent.prototype.isCustMenu;
    /**
     * @type {?}
     * @private
     */
    FnMenuLandingComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    FnMenuLandingComponent.prototype.menuStore;
    /**
     * @type {?}
     * @private
     */
    FnMenuLandingComponent.prototype.fnMenuService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnMenuSidebarComponent {
    /**
     * @param {?} fnMenuStore
     * @param {?} fnMenuService
     * @param {?} renderer
     * @param {?} router
     */
    constructor(fnMenuStore, fnMenuService, renderer, router) {
        this.fnMenuStore = fnMenuStore;
        this.fnMenuService = fnMenuService;
        this.renderer = renderer;
        this.router = router;
        this.fnClick = new EventEmitter();
        this.subscription = new Subscription();
        this.destroy$ = new Subject();
        this.sidebarHeight = '';
        this.isMenuLoded = false;
        this.SUB_MENU_LANDING_URL = 'zip/main';
        this.subscribeMenuData();
    }
    /**
     * @private
     * @return {?}
     */
    subscribeMenuData() {
        this.fnMenuStore.pipe(takeUntil(this.destroy$), select(getMenuData)).subscribe((/**
         * @param {?} menuData
         * @return {?}
         */
        menuData => {
            this.menuData = menuData;
            this.isMenuLoded = true;
            this.subscribeMenuItemMap();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    subscribeMenuItemMap() {
        this.fnMenuStore.pipe(takeUntil(this.destroy$), select(getMenuItemMap)).subscribe((/**
         * @param {?} _menuItemMap
         * @return {?}
         */
        _menuItemMap => this.menuItemMap = _menuItemMap));
    }
    /**
     * @private
     * @param {?} _url
     * @return {?}
     */
    navigateToUrl(_url) {
        if (_url === this.SUB_MENU_LANDING_URL) {
            _url += '/submenu';
        }
        this.router.navigateByUrl(_url);
    }
    /**
     * @private
     * @return {?}
     */
    menuClickSubscriber() {
        this.fnMenuService.menuItemClick$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} menuId
         * @return {?}
         */
        menuId => {
            this.fnMenuStore.dispatch(new SetActiveMenuId(menuId));
            this.fnClick.emit(menuId);
            // this.menuItemMap.get(menuId)
            // todo routing help
            // console.log(this.menuItemMap[menuId]);
            this.navigateToUrl(this.menuItemMap[menuId].detail.url);
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.menuClickSubscriber();
        this.calSidebarHeight();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.listenWindowResize();
    }
    /**
     * @return {?}
     */
    calSidebarHeight() {
        // this.sidebarHeight = (window.innerHeight -56) + 'px';
    }
    /**
     * @return {?}
     */
    listenWindowResize() {
        this.subscription.add(this.renderer.listen(window, 'resize', (/**
         * @return {?}
         */
        () => {
            // TODO resizeing
            this.calSidebarHeight();
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
FnMenuSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-menu-sidebar',
                template: "<aside>\r\n  <ul *ngIf=\"isMenuLoded\" class=\"navbar-nav mr-auto sidenav side-bar-menu\" id=\"navAccordion\"\r\n  [style.height]=\"sidebarHeight\" fn-menu-item [fnMenuItem]=\"menuData\">\r\n  </ul>\r\n</aside>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["@charset \"UTF-8\";:root{--side-nav-bg:$side-nav-bg;--nav-link-text:$nav-link-text;--nav-link-text-hover:$nav-link-text-hover;--active-nav-link-border:$active-nav-link-border;--active-nav-link-hover-bg:$active-nav-link-hover-bg;--nav-link-border:$nav-link-border;--nav-link-bg:$nav-link-bg;--nav-link-hover-color:$nav-link-hover-color;--nav-link-bg-color:$nav-link-bg-color}.bg-dark{background-color:#484d55!important}#navAccordion{background:var(--side-nav-bg)}#navAccordion .nav-link-collapse:after{float:right;content:\"\uF078\";font-family:FontAwesome;font-size:.9em}#navAccordion .nav-link-show:after{float:right;content:\"\uF077\";font-family:FontAwesome;font-size:.9em}#navAccordion .nav-item{cursor:pointer;width:300px}#navAccordion .nav-item .nav-link{border-left:2px solid transparent;font-size:13px;letter-spacing:.05em;padding:.7rem .8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:300px;color:var(--nav-link-text);opacity:.7;font-weight:300}#navAccordion .nav-item .nav-link:hover{color:var(--nav-link-text-hover);background-color:var(--active-nav-link-hover-bg);transition:.4s;opacity:1}#navAccordion .nav-item .nav-link img{height:21px;width:21px;margin-right:15px;margin-top:-3px}#navAccordion .nav-item .nav-link i{line-height:20px}#navAccordion .nav-item.active>.nav-link{border-left:2px solid var(--active-nav-link-border);background-color:var(--active-nav-link-hover-bg);opacity:1}#navAccordion .nav-item.active>.nav-sub{display:block}#navAccordion .nav-item>.nav-sub{margin:0;padding:0!important;display:none}#navAccordion .nav-item>.nav-sub>.nav-item .nav-link{padding-left:48px}#navAccordion .nav-item.nav-dropdown a i{line-height:23px}.nav-item ul.nav-second-level>.nav-item{padding-left:0}.nav-item ul.nav-second-level>.nav-item>.nav-link{padding-left:20px}.nav-item ul.nav-second-level{padding-left:0}.fixed-top{z-index:2!important}@media (min-width:720px){#navAccordion.sidenav{position:fixed;top:0;left:0;width:50px;height:calc(100vh - 50px);margin-top:50px;background:var(--side-nav-bg);box-sizing:border-box;overflow-x:hidden;transition:width .5s ease-in;z-index:2}.navbar-expand-lg #navAccordion.sidenav{flex-direction:column}}#navAccordion.sidenav:hover{width:300px}"]
            }] }
];
/** @nocollapse */
FnMenuSidebarComponent.ctorParameters = () => [
    { type: Store },
    { type: FnMenuService },
    { type: Renderer2 },
    { type: Router }
];
FnMenuSidebarComponent.propDecorators = {
    fnClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FnMenuSidebarComponent.prototype.fnClick;
    /**
     * @type {?}
     * @private
     */
    FnMenuSidebarComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    FnMenuSidebarComponent.prototype.destroy$;
    /** @type {?} */
    FnMenuSidebarComponent.prototype.sidebarHeight;
    /** @type {?} */
    FnMenuSidebarComponent.prototype.isMenuLoded;
    /**
     * @type {?}
     * @private
     */
    FnMenuSidebarComponent.prototype.menuItemMap;
    /** @type {?} */
    FnMenuSidebarComponent.prototype.menuData;
    /**
     * @type {?}
     * @private
     */
    FnMenuSidebarComponent.prototype.SUB_MENU_LANDING_URL;
    /**
     * @type {?}
     * @private
     */
    FnMenuSidebarComponent.prototype.fnMenuStore;
    /**
     * @type {?}
     * @private
     */
    FnMenuSidebarComponent.prototype.fnMenuService;
    /**
     * @type {?}
     * @private
     */
    FnMenuSidebarComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FnMenuSidebarComponent.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnMenuStoreService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.MENU_ID_KEY = 'id';
        this.MENU_ARRAY_KEY = 'menuItemArray';
        this.MENU_INFO_KEY = 'detail';
        this.MENU_PARENT_ARRAY_KEY = 'parentArray';
    }
    /**
     * @param {?} rootMap
     * @param {?} arrayObject
     * @return {?}
     */
    getMenuMapOnId(rootMap, arrayObject) {
        if (arrayObject) {
            for (let i = 0; i < arrayObject.length; i++) {
                if (arrayObject[i][this.MENU_ID_KEY] !== 'undefined') {
                    rootMap[arrayObject[i][this.MENU_ID_KEY]] = arrayObject[i];
                    this.getMenuMapOnId(rootMap, arrayObject[i][this.MENU_ARRAY_KEY]);
                }
            }
        }
    }
    /**
     * @param {?} rootMap
     * @param {?} arrayObject
     * @param {?=} parentKey
     * @return {?}
     */
    simpleMenuMapOnId(rootMap, arrayObject, parentKey) {
        if (arrayObject) {
            for (let i = 0; i < arrayObject.length; i++) {
                if (arrayObject[i][this.MENU_ID_KEY] !== undefined) {
                    /** @type {?} */
                    const menuArray = [];
                    if (parentKey !== undefined && rootMap[parentKey][this.MENU_PARENT_ARRAY_KEY] !== undefined) {
                        rootMap[parentKey][this.MENU_PARENT_ARRAY_KEY].forEach((/**
                         * @param {?} value
                         * @return {?}
                         */
                        (value) => {
                            menuArray.push(value);
                        }));
                    }
                    /** @type {?} */
                    const tempObj = {
                        id: arrayObject[i][this.MENU_ID_KEY], name: arrayObject[i].name, url: arrayObject[i].url,
                        len: arrayObject[i][this.MENU_ARRAY_KEY].length, showBreadcrum: arrayObject[i].showBreadcrum
                    };
                    menuArray.push(tempObj);
                    rootMap[arrayObject[i][this.MENU_ID_KEY]] = {};
                    //  rootMap[arrayObject[i][this.MENU_ID_KEY]] = menuArray;
                    rootMap[arrayObject[i][this.MENU_ID_KEY]][this.MENU_INFO_KEY] = tempObj;
                    rootMap[arrayObject[i][this.MENU_ID_KEY]][this.MENU_PARENT_ARRAY_KEY] = menuArray;
                    this.simpleMenuMapOnId(rootMap, arrayObject[i][this.MENU_ARRAY_KEY], arrayObject[i][this.MENU_ID_KEY]);
                }
            }
        }
    }
    /**
     * @param {?} menuId
     * @return {?}
     */
    getMenuData(menuId) {
        return this.http.get('https://raw.githubusercontent.com/VasimHayat/mock_data/master/menu.json')
            .pipe(
        // tslint:disable-next-line: no-string-literal
        map((/**
         * @param {?} menuData
         * @return {?}
         */
        (menuData) => menuData.menuDataHash.menuData)), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(error))));
    }
}
FnMenuStoreService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FnMenuStoreService.ctorParameters = () => [
    { type: HttpClient }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnMenuStoreService.prototype.MENU_ID_KEY;
    /**
     * @type {?}
     * @private
     */
    FnMenuStoreService.prototype.MENU_ARRAY_KEY;
    /**
     * @type {?}
     * @private
     */
    FnMenuStoreService.prototype.MENU_INFO_KEY;
    /**
     * @type {?}
     * @private
     */
    FnMenuStoreService.prototype.MENU_PARENT_ARRAY_KEY;
    /**
     * @type {?}
     * @private
     */
    FnMenuStoreService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnMenuEffects {
    /**
     * @param {?} actions$
     * @param {?} fnMenuSvcs
     */
    constructor(actions$, fnMenuSvcs) {
        this.actions$ = actions$;
        this.fnMenuSvcs = fnMenuSvcs;
        this.loadMenuData$ = this.actions$.pipe(ofType(FnMenuActionType.LoadMenuData), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} action
         * @return {?}
         */
        action => this.fnMenuSvcs.getMenuData(action).pipe(map((/**
         * @param {?} menuData
         * @return {?}
         */
        menuData => {
            // tslint:disable-next-line: prefer-const
            /** @type {?} */
            let menuItemMap = {};
            menuItemMap[menuData.id] = {};
            // tslint:disable-next-line: prefer-const
            /** @type {?} */
            let menuItemDetailMap = {};
            menuItemDetailMap[menuData.id] = menuData;
            this.fnMenuSvcs.simpleMenuMapOnId(menuItemMap, menuData.menuItemArray);
            this.fnMenuSvcs.getMenuMapOnId(menuItemDetailMap, menuData.menuItemArray);
            return new LoadMenuDataSucess(menuData, menuItemMap, menuItemDetailMap, true);
        })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => of(new LoadMenuDataError(err))))))));
    }
}
FnMenuEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FnMenuEffects.ctorParameters = () => [
    { type: Actions },
    { type: FnMenuStoreService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], FnMenuEffects.prototype, "loadMenuData$", void 0);
if (false) {
    /** @type {?} */
    FnMenuEffects.prototype.loadMenuData$;
    /**
     * @type {?}
     * @private
     */
    FnMenuEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    FnMenuEffects.prototype.fnMenuSvcs;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnMenuModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FnMenuModule,
            providers: [FnMenuService, FnMenuEffects, FnMenuStoreService]
        };
    }
}
FnMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [FormsModule, CommonModule, FoundationModule, HttpClientModule],
                declarations: [FnMenuItemComponent, FnMenuLandingComponent, FnMenuSidebarComponent],
                exports: [FnMenuItemComponent, FnMenuLandingComponent, FnMenuSidebarComponent],
                providers: [FnMenuService, FnMenuEffects, FnMenuStoreService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnCheckboxFilterItem {
}
if (false) {
    /** @type {?} */
    FnCheckboxFilterItem.prototype.id;
    /** @type {?} */
    FnCheckboxFilterItem.prototype.description;
    /** @type {?} */
    FnCheckboxFilterItem.prototype.isSelected;
    /** @type {?} */
    FnCheckboxFilterItem.prototype.childArray;
}
class FnCheckboxFilterComponent {
    constructor() {
        this.listItemArray = [];
        this.cbSelectedItem = new EventEmitter();
        this.description = 'Filter';
        this.uiFilterArray = [];
        this.searchInput = '';
        this.showDropDown = false;
        this.showDropDown = false;
        this.selectedMap = {};
        this.listenClick();
    }
    /**
     * @return {?}
     */
    listenClick() {
        this.$wClickSubscrption = fromEvent(window, 'click').subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (!document.getElementById('fn-checkbox-filter-container').contains(event.target)) {
                this.showDropDown = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // tslint:disable-next-line:triple-equals
        this.isGrouping = (this.isGrouping === true || this.isGrouping == 'true');
        this.uiFilterArray = this.listItemArray;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$wClickSubscrption.unsubscribe();
    }
    /**
     * @param {?} toggelValue
     * @return {?}
     */
    toggleSelect(toggelValue) {
        this.showDropDown = toggelValue;
    }
    /**
     * @return {?}
     */
    refreshSearch() {
        if (this.searchInput) {
            this.searchInput = '';
            this.uiFilterArray = this.listItemArray;
        }
    }
    /**
     * @param {?} isSelectAll
     * @return {?}
     */
    selectAction(isSelectAll) {
        if (isSelectAll) {
            if (this.isGrouping) {
                for (let i = 0; i < this.uiFilterArray.length; i++) {
                    /** @type {?} */
                    const childArray = [];
                    this.uiFilterArray[i].isSelected = true;
                    for (let j = 0; j < this.uiFilterArray[i].childArray.length; j++) {
                        this.uiFilterArray[i].childArray[j].isSelected = true;
                        childArray.push(this.uiFilterArray[i].childArray[j].id);
                    }
                    this.selectedMap[this.uiFilterArray[i].id] = childArray;
                }
            }
            else {
                for (let i = 0; i < this.uiFilterArray.length; i++) {
                    this.uiFilterArray[i].isSelected = true;
                    // this.selectedMap[this.uiFilterArray[i].id] = null;
                    delete this.selectedMap[this.uiFilterArray[i].id];
                }
            }
            if (Object.keys(this.selectedMap).length > 1) {
                this.description = Object.keys(this.selectedMap).length + ' ' + 'options selected';
            }
        }
        else {
            this.uiFilterArray.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                item.isSelected = false;
            }));
            if (this.isGrouping) {
                for (let i = 0; i < this.uiFilterArray.length; i++) {
                    this.uiFilterArray[i].isSelected = false;
                    for (let j = 0; j < this.uiFilterArray[i].childArray.length; j++) {
                        this.uiFilterArray[i].childArray[j].isSelected = false;
                    }
                }
                this.searchInput = '';
                this.uiFilterArray = this.listItemArray;
            }
            this.selectedMap = {};
            this.description = 'Filter';
        }
        this.cbSelectedItem.emit(this.selectedMap);
    }
    /**
     * @param {?} uiItem
     * @return {?}
     */
    selectParent(uiItem) {
        /** @type {?} */
        const id = uiItem.id;
        if (this.selectedMap[id] !== undefined) {
            delete this.selectedMap[id];
        }
        if (uiItem.isSelected) {
            uiItem.isSelected = false;
            if (this.isGrouping && uiItem.childArray) {
                for (let i = 0; i < uiItem.childArray.length; i++) {
                    uiItem.childArray[i].isSelected = false;
                }
            }
        }
        else {
            uiItem.isSelected = true;
            /** @type {?} */
            const childArray = [];
            if (this.isGrouping && uiItem.childArray) {
                for (let i = 0; i < uiItem.childArray.length; i++) {
                    uiItem.childArray[i].isSelected = true;
                    childArray.push(uiItem.childArray[i].id);
                }
            }
            else {
                childArray.push(id);
            }
            this.selectedMap[id] = childArray;
        }
        // if (Object.keys(this.selectedMap).length === 1) {
        //     const firstIndex = Array.from(this.selectedMap)[0];
        //     for (let i = 0; i < this.uiFilterArray.length; i++) {
        //         if (this.uiFilterArray[i].id === firstIndex[0]) {
        //             this.description = this.uiFilterArray[i].description;
        //         }
        //     }
        // } else
        if (Object.keys(this.selectedMap).length >= 1) {
            this.description = Object.keys(this.selectedMap).length + ' ' + 'options selected';
        }
        else {
            this.selectedMap = {};
            this.description = 'Filter';
        }
        this.cbSelectedItem.emit(this.selectedMap);
    }
    /**
     * @return {?}
     */
    onSearch() {
        if (this.searchInput !== '') {
            if (this.isGrouping) {
                this.uiFilterArray = [];
                for (let i = 0; i < this.listItemArray.length; i++) {
                    if (this.listItemArray[i].description.toLowerCase().indexOf(this.searchInput) !== -1) {
                        this.uiFilterArray.push(Object.assign([], this.listItemArray[i]));
                    }
                    else {
                        /** @type {?} */
                        const childItem = this.listItemArray[i].childArray.filter((/**
                         * @param {?} item
                         * @return {?}
                         */
                        item => item.description.toLowerCase().indexOf(this.searchInput) !== -1));
                        if (childItem.length > 0) {
                            this.uiFilterArray.push(Object.assign([], this.listItemArray[i]));
                            this.uiFilterArray[this.uiFilterArray.length - 1].childArray = childItem;
                        }
                    }
                }
            }
            else {
                this.uiFilterArray = this.listItemArray.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.description.toLowerCase().indexOf(this.searchInput) !== -1));
            }
        }
        else {
            this.uiFilterArray = this.listItemArray;
        }
    }
    // this function is used for select and unselect the child item
    /**
     * @param {?} childVal
     * @param {?} childParentId
     * @return {?}
     */
    selectChildItem(childVal, childParentId) {
        for (let i = 0; i < this.uiFilterArray.length; i++) {
            if (this.uiFilterArray[i].id === childParentId) {
                for (let j = 0; j < this.uiFilterArray[i].childArray.length; j++) {
                    if (this.uiFilterArray[i].childArray[j].id === childVal.id) {
                        if (this.uiFilterArray[i].childArray[j].isSelected === false) {
                            this.uiFilterArray[i].childArray[j].isSelected = true;
                            if (this.selectedMap[childParentId] !== undefined) {
                                /** @type {?} */
                                const itemVal = this.selectedMap[childParentId];
                                itemVal.push(childVal.id);
                                if (this.uiFilterArray[i].childArray.length === itemVal.length) {
                                    this.uiFilterArray[i].isSelected = true;
                                }
                            }
                            else {
                                this.selectedMap[childParentId] = [childVal.id];
                                if (this.uiFilterArray[i].childArray.length === this.selectedMap[childParentId].length) {
                                    this.uiFilterArray[i].isSelected = true;
                                }
                            }
                        }
                        else {
                            this.uiFilterArray[i].isSelected = false;
                            this.uiFilterArray[i].childArray[j].isSelected = false;
                            /** @type {?} */
                            const childObj = this.selectedMap[childParentId];
                            delete childObj[childVal.id];
                            this.selectedMap[childParentId] = childObj;
                            if (Object.keys(this.selectedMap[childParentId]).length === 0) {
                                delete this.selectedMap[childParentId];
                            }
                        }
                    }
                }
            }
        }
        this.cbSelectedItem.emit(this.selectedMap);
    }
}
FnCheckboxFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-checkbox-filter',
                template: "<div id=\"fn-checkbox-filter-container\" class=\"dropdown\" (click)=\"toggleSelect(true)\">\r\n  <button type=\"button\" class=\"btn btn-default dropdown-toggle filter_btn\" ngDefaultControl [(ngModel)]=\"selectedMap\"\r\n    data-toggle=\"dropdown\"><span class=\"pull-left\" [innerHtml]=\"description\"></span>\r\n    <i class=\"fa fa-filter fa-fw\"></i>\r\n  </button>\r\n  <ul class=\"dropdown-menu filter_data show fn-multi-drop-ul\" *ngIf=\"showDropDown\">\r\n    <li> <input type=\"text\" placeholder=\"Search..\" [(ngModel)]=\"searchInput\" (keyup)=\"onSearch()\" maxlength=\"40\"\r\n        class=\"form-control\"><i class=\"fa fa-times-circle-o search_icon\" (click)=\"refreshSearch()\"></i>\r\n    </li>\r\n    <li>\r\n      <div class=\"row m-0\">\r\n        <div class=\"col-6\"><a (click)=\"selectAction(true)\">Select all</a></div>\r\n        <div class=\"col-6 text-right\"><a (click)=\"selectAction(false)\">Clear</a>\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <li *ngFor=\"let uiItem of uiFilterArray; let i=index;\" [value]=\"uiItem.id\">\r\n      <div (click)=\"selectParent(uiItem)\">\r\n        <span><i [ngClass]=\"{'fa fa-check': uiItem.isSelected}\"></i></span>\r\n        {{uiItem.description}}</div>\r\n      <div class=\"sub_role\" *ngIf=\"isGrouping\">\r\n        <ng-container *ngFor=\"let childItem of uiItem.childArray\">\r\n          <div class=\"sub_role_data\" (click)=\"selectChildItem(childItem,uiItem.id)\">\r\n            <span><i [ngClass]=\"{'fa fa-check': childItem.isSelected}\"></i></span>\r\n            <span>{{childItem.description}}</span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n",
                styles: [".filter_btn{background-color:#fff;color:#777;border:1px solid #777;border-radius:30px;width:250px;margin-top:10px;padding:4px 10px;text-align:left}.filter_btn:active,.filter_btn:focus,.filter_btn:hover{box-shadow:none}.filter_btn i{margin-left:10px;float:right;top:18px;position:absolute;right:8px}.filter_btn:after{display:none}.filter_data{width:250px;background-color:#fff;padding:10px;box-shadow:0 6px 12px rgba(0,0,0,.15);max-height:230px;overflow-x:hidden}.filter_data input{padding-right:40px}.filter_data input:focus{box-shadow:none}.filter_data .search_icon{position:absolute;right:22px;top:22px;cursor:pointer}.filter_data li{color:#424242;font-size:14px;border-radius:4px;float:left;width:100%}.filter_data li a{text-decoration:none}.filter_data li div{padding:5px 6px}.filter_data li>div:hover{background-color:#f8f9f9;color:#787a7b}.filter_data li i{font-size:14px}.filter_data li span{margin-right:5px;width:auto;display:inline-block}.filter_data li:first-child{cursor:default;background-color:transparent;padding:0 0 5px}.filter_data li:nth-child(2){cursor:default}.filter_data li .sub_role{color:#a9a9a9;font-size:13px;padding:0;float:left;width:100%}.filter_data li .sub_role:hover{background-color:transparent}.filter_data li .sub_role .sub_role_data{cursor:pointer;float:left;width:100%;margin-bottom:1px;padding:5px 6px 5px 22px}.filter_data li .sub_role .sub_role_data:hover{background-color:#f8f9f9;color:#787a7b}"]
            }] }
];
/** @nocollapse */
FnCheckboxFilterComponent.ctorParameters = () => [];
FnCheckboxFilterComponent.propDecorators = {
    isGrouping: [{ type: Input }],
    listItemArray: [{ type: Input }],
    cbSelectedItem: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.isGrouping;
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.listItemArray;
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.cbSelectedItem;
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.$wClickSubscrption;
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.description;
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.uiFilterArray;
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.searchInput;
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.showDropDown;
    /** @type {?} */
    FnCheckboxFilterComponent.prototype.selectedMap;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnCheckboxFilterModule {
}
FnCheckboxFilterModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [FnCheckboxFilterComponent],
                providers: [],
                exports: [FnCheckboxFilterComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CURRENCY_REGEX, DEFAULT_MENU_STATE, EMAIL_REGEX, FLOAT_NUM_REGEX, FLOAT_NUM_WITH_NEG_REGEX, FNConstant, FNErrorHandler, FNErrorLogSvcs, FNExceptionJson, FN_INPUT_TYPES, FULL_NAME_REGX, FnApplication, FnApplicationHelper, FnBrowserDetail, FnButtonModule, FnCheckboxFilterModule, FnClickListner, FnColorPickerModule, FnConfirmModalComponent, FnCookieService, FnCoreModule, FnDateFormatConstant, FnDateFormatter, FnDatePickerModule, FnDeviceConstant, FnDialogModule, FnEmailValidator, FnExceptionService, FnI18nService, FnIconModule, FnInputModel, FnInputModule, FnInputValueAccessor, FnLangConstant, FnMaxValidator, FnMenuActionType, FnMenuEffects, FnMenuLandingComponent, FnMenuModule, FnMenuReducer, FnMinValidator, FnModalService, FnPaginationModule, FnPatternValidator, FnRequireValidator, FnSelectModule, FnSessionActionType, FnSessionEffect, FnSessionStorage, FnSwitchModule, FnTableConfig, FnTableMetaData, FnTableModule, FnThemeService, FnTimePickerModule, FnTranslateModule, FnTranslatePipe, FnUiFieldMetaDataService, FnUtilService, FnWeatherConstatnt, FoundationModule, InitMenuState, InitialzeCurrentSession, LoadMenuData, LoadMenuDataError, LoadMenuDataSucess, LoadSession, LoadSessionError, LoadSessionSuccess, NAME_REGEX, SetActiveMenuId, VALIDATOR_MAP, arraysEqual, compare, ensureNumberInRange, fnDom, fnSessionReducer, getActiveMenuId, getActiveMenuItem, getCurrentSession, getCurrent_baseUrl, getCurrent_mid, getCurrent_pid, getCurrent_pmid, getCurrent_saPK, getCurrent_sauPK, getCurrent_scPK, getCurrent_scaPK, getCurrent_scuPK, getCurrent_sgaPK, getCurrent_ssPK, getCurrent_wIndex, getCurretn_sccPK, getMenuData, getMenuDetailItemMap, getMenuItemById, getMenuItemMap, getMenuStatus, getPercent, getPrecision, getRooMenuId, isEmptyObject, isEmptyString, isFloat, isInt, isInteger, isNonEmptyString, isNotNull, isNull, isString, shallowCopyArray, shallowEqual, sortArray, toArray, typeofArray, typeofBoolean, typeofFunction, typeofNumber, typeofObject, typeofString, typeofUndefined, FnNumberDirective as ɵa, FnCurrencyDirective as ɵb, FnMenuStoreService as ɵba, FnCheckboxFilterComponent as ɵbc, FnInputValidator as ɵc, FnIconComponent as ɵd, FnFaIconComponent as ɵe, FnButtonComponent as ɵf, FnSwitchComponent as ɵg, FnBaseInputComponent as ɵh, FnInputComponent as ɵi, FnInputErrorComponent as ɵj, FnSelectComponent as ɵk, FnInputValueAccessor as ɵl, FnMultiSelectComponent as ɵm, FnDialogHeaderComponent as ɵo, FnTimePickerComponent as ɵp, FnTimepickerService as ɵq, FnMultiTimePickerComponent as ɵr, FnColorPickerComponent as ɵs, FnDatePickerComponent as ɵt, FnPaginationComponent as ɵu, FnTableComponent as ɵv, FnTableSearchComponent as ɵw, FnMenuItemComponent as ɵx, FnMenuService as ɵy, FnMenuSidebarComponent as ɵz };
//# sourceMappingURL=foundation.js.map
