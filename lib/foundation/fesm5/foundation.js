import { Injectable, EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ElementRef, ɵɵdefineInjectable, Renderer2, Inject, InjectionToken, PLATFORM_ID, ɵɵinject, NgModule, CUSTOM_ELEMENTS_SCHEMA, Directive, HostListener, Pipe, Optional, SkipSelf, ChangeDetectorRef, ViewChild, TemplateRef, forwardRef } from '@angular/core';
import { FormsModule, NgModel, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePipe, isPlatformBrowser, DOCUMENT, CommonModule } from '@angular/common';
import { List } from 'immutable';
import { Subject, BehaviorSubject, Subscription, of, throwError } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { debounceTime, takeUntil, map, mergeMap, catchError, startWith } from 'rxjs/operators';
import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';
import { __assign, __decorate, __metadata, __extends } from 'tslib';
import { Router } from '@angular/router';
import { fromError } from 'stacktrace-js';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { ContentObserver } from '@angular/cdk/observers';
import { LEFT_ARROW, RIGHT_ARROW, SPACE, ENTER } from '@angular/cdk/keycodes';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { A11yModule } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

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
var FnTableConfig = /** @class */ (function () {
    function FnTableConfig() {
        this.pagination = true;
        this.filterOn = true;
        this.hideAction = false;
        this.hideEdit = false;
        this.hideDelete = false;
    }
    FnTableConfig.defalutSortClass = ' fa-sort';
    FnTableConfig.defaultSortValue = 1; // -1 = desc , 1 = asc
    // -1 = desc , 1 = asc
    FnTableConfig.defaultIsColSort = true;
    return FnTableConfig;
}());
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
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
function toArray(value) {
    /** @type {?} */
    var ret;
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
    var len = array1.length;
    for (var i = 0; i < len; i++) {
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
    function (x, y) {
        if (!x.hasOwnProperty(key) ||
            !y.hasOwnProperty(key)) {
            return 0;
        }
        /** @type {?} */
        var key1 = (typeof x[key] === 'string') ?
            x[key].toUpperCase() : x[key];
        /** @type {?} */
        var key2 = (typeof y[key] === 'string') ?
            y[key].toUpperCase() : y[key];
        /** @type {?} */
        var comparison = 0;
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
    return typeof (value) === 'object' && value.constructor == Object;
}
/**
 * @param {?} value
 * @return {?}
 */
function typeofString(value) {
    return typeof (value) === 'string' && value.constructor == String;
}
/**
 * @param {?} value
 * @return {?}
 */
function typeofBoolean(value) {
    return typeof (value) === 'boolean' && value.constructor == Boolean;
}
/**
 * @param {?} value
 * @return {?}
 */
function typeofNumber(value) {
    return typeof (value) === 'number' && value.constructor == Number;
}
/**
 * @param {?} value
 * @return {?}
 */
function typeofFunction(value) {
    return typeof (value) === 'function' && value.constructor == Function;
}
/**
 * @param {?} value
 * @return {?}
 */
function typeofArray(value) {
    return typeof (value) === 'object' && value.constructor == Array;
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
    return typeof value === 'string' && value.toString().length == 0;
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
    for (var name_1 in obj) {
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
    var keysA = Object.keys(objA);
    /** @type {?} */
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    /** @type {?} */
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // tslint:disable-next-line:prefer-for-of
    for (var idx = 0; idx < keysA.length; idx++) {
        /** @type {?} */
        var key = keysA[idx];
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
var FnWeatherConstatnt = /** @class */ (function () {
    function FnWeatherConstatnt() {
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
    return FnWeatherConstatnt;
}());
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
var FnDeviceConstant = /** @class */ (function () {
    function FnDeviceConstant() {
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
    return FnDeviceConstant;
}());
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
var FnDateFormatConstant = /** @class */ (function () {
    function FnDateFormatConstant() {
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
    return FnDateFormatConstant;
}());
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
var FNConstant = /** @class */ (function () {
    function FNConstant() {
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
    return FNConstant;
}());
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
var FULL_NAME_REGX = /^(?:[A-Za-z]+(?:\s+|$)){1,}$/;
/** @type {?} */
var NAME_REGEX = /^[A-Za-z\s]*$/;
/** @type {?} */
var CURRENCY_REGEX = /(\d)(?=(\d{3})+\.)/g;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnUtilService = /** @class */ (function () {
    function FnUtilService(dateFormatter, sanitizer) {
        var _this = this;
        this.dateFormatter = dateFormatter;
        this.sanitizer = sanitizer;
        // converting rgb value to hex value
        this.rgb2hex = (/**
         * @param {?} rgb
         * @return {?}
         */
        function (rgb) {
            /** @type {?} */
            var _itemList = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            return '#' +
                ('0' + parseInt(_itemList[1], 10).toString(16)).slice(-2) +
                ('0' + parseInt(_itemList[2], 10).toString(16)).slice(-2) +
                ('0' + parseInt(_itemList[3], 10).toString(16)).slice(-2);
        });
        this.isEmptyObject = (/**
         * @param {?} _value
         * @return {?}
         */
        function (_value) {
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
        function (fields, isIgnoreCase) {
            return (/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                return fields.map((/**
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) {
                    /** @type {?} */
                    var dir = 1;
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
                function (p, n) {
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
        function (objArray, sortKeyStr, isIgnoreCase) {
            if (!_this.isEmptyObject(sortKeyStr) && !_this.isEmptyObject(objArray) && Array.isArray(objArray)) {
                // @ts-ignore
                return objArray.sort(_this.sortOrderingComparator(sortKeyStr.split('~'), isIgnoreCase));
            }
            else {
                return objArray;
            }
        });
        this.toStringVal = (/**
         * @param {?} objVal
         * @return {?}
         */
        function (objVal) { return objVal + ''; });
        this.reverseString = (/**
         * @param {?} strVal
         * @return {?}
         */
        function (strVal) { return strVal.split('').reverse().join(''); });
        this.reverse = (/**
         * @param {?} objVal
         * @return {?}
         */
        function (objVal) {
            if (isString(objVal)) {
                return _this.reverseString(_this.toStringVal(objVal));
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
        function (objArray, key) {
            /** @type {?} */
            var sum = 0;
            objArray.forEach((/**
             * @param {?} value
             * @param {?} index
             * @return {?}
             */
            function (value, index) {
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
        function (_array, _key, isLowercase) {
            if (isNull(_array)) {
                return { keyName: new Array() };
            }
            /** @type {?} */
            var _map = {};
            for (var i = 0; i < _array.length; i++) {
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
        function (objArray, outerKey, innerKey) {
            /** @type {?} */
            var _returnHash = {};
            objArray.forEach((/**
             * @param {?} value
             * @param {?} index
             * @return {?}
             */
            function (value, index) {
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
        function (objArray, relArrayKey, relKey) {
            /** @type {?} */
            var returnHash = {};
            objArray.forEach((/**
             * @param {?} value
             * @param {?} index
             * @return {?}
             */
            function (value, index) {
                if (isNotNull(value) && isNotNull(value[relArrayKey])) {
                    value[relArrayKey].forEach((/**
                     * @param {?} childVal
                     * @return {?}
                     */
                    function (childVal) {
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
        function (objArray, keyName, relArraykey, relKey) {
            /** @type {?} */
            var returnHash = {};
            objArray.forEach((/**
             * @param {?} value
             * @param {?} index
             * @return {?}
             */
            function (value, index) {
                if (isNotNull(value)) {
                    // tslint:disable-next-line:forin
                    for (var i in value) {
                        for (var j in value[i][relArraykey]) {
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
        function (objArray, key, relArrayKey, relKey) {
            objArray.forEach((/**
             * @param {?} value
             * @param {?} index
             * @return {?}
             */
            function (value, index) {
                if (isNotNull(value[relArrayKey])) {
                    value[relArrayKey + 'Map'] = _this.mapFromArray(value[relArrayKey], relKey);
                }
            }));
            return _this.mapFromArray(objArray, key);
        });
        // Will return the string value on objects values
        this.getStringOfObjectOnKey = (/**
         * @param {?} objectVal
         * @param {?=} skipKey
         * @param {?=} keyArray
         * @return {?}
         */
        function (objectVal, skipKey, keyArray) {
            skipKey = skipKey || false;
            /** @type {?} */
            var _keyArray = skipKey ? [] : keyArray;
            /** @type {?} */
            var _returnStr = '';
            for (var key in objectVal) {
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
        function (inputArray, searchTerm, skipFilterKey, filterKeyStr) {
            if (filterKeyStr === void 0) { filterKeyStr = ''; }
            /** @type {?} */
            var _filterArray = new Array();
            /** @type {?} */
            var _serchTerm = searchTerm.toLocaleLowerCase();
            /** @type {?} */
            var _keyArray = filterKeyStr.split('~');
            for (var _i = 0; _i < inputArray.length; _i++) {
                /** @type {?} */
                var _item = inputArray[_i];
                /** @type {?} */
                var _objectValStr = _this.getStringOfObjectOnKey(_item, skipFilterKey, _keyArray);
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
    FnUtilService.prototype.transform = /**
     * @param {?} value
     * @param {?=} format
     * @param {?=} timezone
     * @param {?=} locale
     * @return {?}
     */
    function (value, format, timezone, locale) {
        return this.dateFormatter.transform(value, format, timezone, locale);
    };
    /**
     * @param {?} htmlStr
     * @return {?}
     */
    FnUtilService.prototype.compileHtml = /**
     * @param {?} htmlStr
     * @return {?}
     */
    function (htmlStr) {
        return this.sanitizer.bypassSecurityTrustHtml(htmlStr);
    };
    /**
     * @param {?} htmlStr
     * @return {?}
     */
    FnUtilService.prototype.convertHtmlToString = /**
     * @param {?} htmlStr
     * @return {?}
     */
    function (htmlStr) {
        return htmlStr ? String(htmlStr).replace(/<[^>]+>/gm, '') : '';
    };
    /**
     * @param {?} objectArray
     * @param {?} key
     * @param {?=} isDesc
     * @return {?}
     */
    FnUtilService.prototype.sortArray = /**
     * @param {?} objectArray
     * @param {?} key
     * @param {?=} isDesc
     * @return {?}
     */
    function (objectArray, key, isDesc) {
        return sortArray(objectArray, key, isDesc);
    };
    /**
     * @param {?} busiDate
     * @return {?}
     */
    FnUtilService.prototype.getWeek = /**
     * @param {?} busiDate
     * @return {?}
     */
    function (busiDate) {
        /** @type {?} */
        var fDate = new Date(busiDate.getFullYear(), 0, 1);
        return Math.ceil((((busiDate.getTime() - fDate.getTime()) / 86400000) + fDate.getDay() + 1) / 7);
    };
    /**
     * @param {?} index
     * @param {?} dateOb
     * @param {?} isFirstDay
     * @param {?=} isLastDay
     * @return {?}
     */
    FnUtilService.prototype.getDateByIndex = /**
     * @param {?} index
     * @param {?} dateOb
     * @param {?} isFirstDay
     * @param {?=} isLastDay
     * @return {?}
     */
    function (index, dateOb, isFirstDay, isLastDay) {
        /** @type {?} */
        var date = 0;
        /** @type {?} */
        var _dateObj = new Date(dateOb);
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
    };
    /**
     * @param {?} startIndex
     * @param {?} startDate
     * @param {?} endDate
     * @return {?}
     */
    FnUtilService.prototype.getWeekDiff = /**
     * @param {?} startIndex
     * @param {?} startDate
     * @param {?} endDate
     * @return {?}
     */
    function (startIndex, startDate, endDate) {
        /** @type {?} */
        var week1 = this.getDateByIndex(startIndex, startDate, true, false);
        /** @type {?} */
        var week2 = this.getDateByIndex(startIndex, endDate, true, false);
        /** @type {?} */
        var weekCount1 = this.getWeek(week1);
        /** @type {?} */
        var weekCount2 = this.getWeek(week2);
        if (weekCount2 < weekCount1) {
            weekCount2 += 52;
        }
        /** @type {?} */
        var noOfWeek = (weekCount2 - weekCount1 + 1);
        return noOfWeek;
    };
    /**
     * @param {?} _startIndex
     * @param {?} _startDate
     * @param {?} _endDate
     * @return {?}
     */
    FnUtilService.prototype.getWeekArrayForDates = /**
     * @param {?} _startIndex
     * @param {?} _startDate
     * @param {?} _endDate
     * @return {?}
     */
    function (_startIndex, _startDate, _endDate) {
        /** @type {?} */
        var noOfWeek = this.getWeekDiff(_startIndex, _startDate, _endDate);
        /** @type {?} */
        var newStartDate = this.getDateByIndex(_startIndex, _startDate, true, false);
        /** @type {?} */
        var weekArray = [];
        for (var i = 0; i < noOfWeek; i++) {
            /** @type {?} */
            var _weekDate = this.getDateByIndex(_startIndex, newStartDate, true, false);
            weekArray.push(this.dateFormatter.transform(_weekDate, 'MM/dd/yyyy'));
            newStartDate.setDate(newStartDate.getDate() + 7);
        }
        return weekArray;
    };
    /**
     * @param {?} startDate
     * @param {?} noOfWeek
     * @return {?}
     */
    FnUtilService.prototype.getWeekArray = /**
     * @param {?} startDate
     * @param {?} noOfWeek
     * @return {?}
     */
    function (startDate, noOfWeek) {
        /** @type {?} */
        var weekArray = [];
        /** @type {?} */
        var newStartDate = new Date(startDate);
        for (var i = 0; i < noOfWeek; i++) {
            /** @type {?} */
            var newWeekHash = { startDate: null, endDate: null, formattedEndDate: null };
            newWeekHash.startDate = newStartDate;
            newWeekHash.endDate = new Date(newStartDate.setDate(newStartDate.getDate() + 6));
            newWeekHash.formattedEndDate = this.dateFormatter.transform(newWeekHash.endDate, 'yyyyMMdd');
            weekArray.push(newWeekHash);
            newStartDate.setDate(newStartDate.getDate() + 1);
        }
        return weekArray;
    };
    /**
     * @param {?} index
     * @param {?} dateOb
     * @param {?} isFirstDay
     * @param {?} isLastDay
     * @return {?}
     */
    FnUtilService.prototype.getWeekArrayOnIndex = /**
     * @param {?} index
     * @param {?} dateOb
     * @param {?} isFirstDay
     * @param {?} isLastDay
     * @return {?}
     */
    function (index, dateOb, isFirstDay, isLastDay) {
        /** @type {?} */
        var dateObjArray = [];
        /** @type {?} */
        var date = 0;
        /** @type {?} */
        var dateObj = new Date(dateOb);
        if (index > dateObj.getDay()) {
            date = (dateObj.getDate() + index - dateObj.getDay()) - 7;
        }
        else {
            date = dateObj.getDate() + (index - dateObj.getDay());
        }
        if (isFirstDay) {
            /** @type {?} */
            var dateObject = new Date(dateOb);
            dateObject.setDate(date);
            return dateObject;
        }
        else if (isLastDay) {
            /** @type {?} */
            var dateObject = new Date(dateOb);
            dateObject.setDate(date + 7);
            return dateObject;
        }
        for (var i = 0; i < 7; i++) {
            /** @type {?} */
            var dateObject = new Date(dateOb);
            dateObject.setDate(date);
            dateObjArray.push(dateObject);
            date++;
        }
        return dateObjArray;
    };
    /**
     * @param {?} val
     * @param {?=} currencyString
     * @return {?}
     */
    FnUtilService.prototype.currencyFormatter = /**
     * @param {?} val
     * @param {?=} currencyString
     * @return {?}
     */
    function (val, currencyString) {
        val = this.reverseString(val);
        /** @type {?} */
        var result = '';
        for (var i = 0; i < val.length; i++) {
            if (i % 3 === 0 && i !== 0) {
                result += ',' + val.charAt(i);
            }
            else {
                result += val.charAt(i);
            }
        }
        return this.reverseString(result);
    };
    /**
     * @param {?} n
     * @param {?} currency
     * @param {?} fixedDecimal
     * @return {?}
     */
    FnUtilService.prototype.currencyRgxFormat = /**
     * @param {?} n
     * @param {?} currency
     * @param {?} fixedDecimal
     * @return {?}
     */
    function (n, currency, fixedDecimal) {
        /** @type {?} */
        var currencyVal = currency + ' ' + n.toFixed(fixedDecimal).replace(CURRENCY_REGEX, '$1,');
        // currencyVal = currencyVal.replaceAll(" ", "");
        return currencyVal;
    };
    /**
     * @param {?} stringObj
     * @param {?} inputStr
     * @param {?} outPutStr
     * @param {?=} ignore
     * @return {?}
     */
    FnUtilService.prototype.replaceAll = /**
     * @param {?} stringObj
     * @param {?} inputStr
     * @param {?} outPutStr
     * @param {?=} ignore
     * @return {?}
     */
    function (stringObj, inputStr, outPutStr, ignore) {
        return stringObj.replace(new RegExp(inputStr.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, '\\$&'), (ignore ? 'gi' : 'g')), (typeof (outPutStr) === 'string') ?
            outPutStr.replace(/\$/g, '$$$$') : outPutStr);
    };
    /**
     * @param {?} object
     * @param {?} arrayObject
     * @param {?} keyName
     * @param {?} arrayName
     * @return {?}
     */
    FnUtilService.prototype.mapFromArrayOfArrayObjects = /**
     * @param {?} object
     * @param {?} arrayObject
     * @param {?} keyName
     * @param {?} arrayName
     * @return {?}
     */
    function (object, arrayObject, keyName, arrayName) {
        // 'id', 'menuItemArray' this.menuDataHash, this.menuData.menuItemArray
        if (arrayObject) {
            for (var i = 0; i < arrayObject.length; i++) {
                if (isNotNull(arrayObject[i][keyName])) {
                    object[arrayObject[i][keyName]] = arrayObject[i];
                    if (arrayName != null) {
                        this.mapFromArrayOfArrayObjects(object, arrayObject[i][arrayName], keyName, arrayName);
                    }
                }
            }
        }
    };
    /**
     * @param {?} object
     * @return {?}
     */
    FnUtilService.prototype.copy = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        return this.isEmptyObject(object) ? object : JSON.parse(JSON.stringify(object));
    };
    /**
     * @param {?} bolStr
     * @return {?}
     */
    FnUtilService.prototype.toBoolean = /**
     * @param {?} bolStr
     * @return {?}
     */
    function (bolStr) {
        if (isNotNull(bolStr) && (bolStr === true || bolStr === 'true' || bolStr === 1)) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} objectMap
     * @return {?}
     */
    FnUtilService.prototype.arrayFromMap = /**
     * @param {?} objectMap
     * @return {?}
     */
    function (objectMap) {
        /** @type {?} */
        var returnArray = [];
        for (var key in objectMap) {
            if (objectMap.hasOwnProperty(key)) {
                returnArray.push(objectMap[key]);
            }
        }
        return returnArray;
    };
    /**
     * @param {?} objectArray
     * @param {?} key
     * @return {?}
     */
    FnUtilService.prototype.arrayFromArrayOfMap = /**
     * @param {?} objectArray
     * @param {?} key
     * @return {?}
     */
    function (objectArray, key) {
        /** @type {?} */
        var returnArray = [];
        for (var i = 0; i < objectArray.length; i++) {
            if (isNotNull(objectArray[i][key])) {
                returnArray.push(objectArray[i][key]);
            }
        }
        return returnArray;
    };
    /**
     * @param {?} arrayObject
     * @param {?} keyName
     * @return {?}
     */
    FnUtilService.prototype.singleKeyArrayFromMap = /**
     * @param {?} arrayObject
     * @param {?} keyName
     * @return {?}
     */
    function (arrayObject, keyName) {
        /** @type {?} */
        var arrayList = [];
        for (var i = 0; i < arrayObject.length; i++) {
            if (isNotNull(arrayObject[i][keyName])) {
                arrayList.push(arrayObject[i][keyName]);
            }
        }
        return arrayList;
    };
    /**
     * @param {?} val
     * @param {?} prefix
     * @param {?} decimalValStrength
     * @param {?} suffix
     * @return {?}
     */
    FnUtilService.prototype.altaFormatter = /**
     * @param {?} val
     * @param {?} prefix
     * @param {?} decimalValStrength
     * @param {?} suffix
     * @return {?}
     */
    function (val, prefix, decimalValStrength, suffix) {
        /** @type {?} */
        var originalVal = val;
        /**
         * @param {?} _val
         * @param {?} formatCall
         * @param {?} noFormat
         * @param {?} originalval
         * @return {?}
         */
        function responseObject(_val, formatCall, noFormat, originalval) {
            /** @type {?} */
            var _esp = { value: '', oldvalue: '', formatcalling: null, noformat: null };
            _esp.value = _val;
            _esp.oldvalue = originalval;
            _esp.formatcalling = formatCall;
            _esp.noformat = noFormat;
            return _esp;
        }
        /** @type {?} */
        var callingStatus = true;
        /** @type {?} */
        var noStatus = true;
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
    };
    /**
     * @param {?} value
     * @param {?} IID
     * @param {?=} countryFormat
     * @return {?}
     */
    FnUtilService.prototype.format = /**
     * @param {?} value
     * @param {?} IID
     * @param {?=} countryFormat
     * @return {?}
     */
    function (value, IID, countryFormat) {
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
    };
    /**
     * @param {?} destination
     * @param {?} src
     * @return {?}
     */
    FnUtilService.prototype.mergeHash = /**
     * @param {?} destination
     * @param {?} src
     * @return {?}
     */
    function (destination, src) {
        for (var key in src) {
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
    };
    /**
     * @param {?} arrayObject
     * @param {?} key1
     * @param {?} key2
     * @return {?}
     */
    FnUtilService.prototype.getSumOnTheBasisOfKey = /**
     * @param {?} arrayObject
     * @param {?} key1
     * @param {?} key2
     * @return {?}
     */
    function (arrayObject, key1, key2) {
        /** @type {?} */
        var sum = 0;
        for (var i = 0; i < arrayObject.length; i++) {
            sum += parseFloat(arrayObject[i][key1][key2]);
        }
        return sum;
    };
    /**
     * @param {?} arrayOfObject
     * @return {?}
     */
    FnUtilService.prototype.getSimpleHash = /**
     * @param {?} arrayOfObject
     * @return {?}
     */
    function (arrayOfObject) {
        /** @type {?} */
        var _returnObj = {};
        arrayOfObject.forEach((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            _returnObj[obj] = obj;
        }));
        return _returnObj;
    };
    /**
     * @param {?} stringvalue
     * @param {?} charvalue
     * @return {?}
     */
    FnUtilService.prototype.countOccurence = /**
     * @param {?} stringvalue
     * @param {?} charvalue
     * @return {?}
     */
    function (stringvalue, charvalue) {
        return stringvalue.match(new RegExp(charvalue, 'g') || []).length;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FnUtilService.prototype.replaceDotToUnderscore = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value.indexOf('.') !== -1) {
            value = value.replaceAll('.', '_');
        }
        return value;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    FnUtilService.prototype.checkCollectionLength = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
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
    };
    /**
     * @param {?} arrayObjects
     * @param {?} keyName
     * @return {?}
     */
    FnUtilService.prototype.hashFromArrayWithRd = /**
     * @param {?} arrayObjects
     * @param {?} keyName
     * @return {?}
     */
    function (arrayObjects, keyName) {
        /** @type {?} */
        var _returnHash = {};
        for (var i = 0; i < arrayObjects.length; i++) {
            /** @type {?} */
            var key = arrayObjects[i][keyName];
            if (isNotNull(_returnHash[key])) {
                _returnHash[key].push(arrayObjects[i]);
            }
            else {
                _returnHash[key] = [];
                _returnHash[key].push(arrayObjects[i]);
            }
        }
        return _returnHash;
    };
    /**
     * @param {?} time
     * @param {?} shift
     * @return {?}
     */
    FnUtilService.prototype.formatShiftTime = /**
     * @param {?} time
     * @param {?} shift
     * @return {?}
     */
    function (time, shift) {
        /** @type {?} */
        var timeArr = time.split(' - ');
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
        var startTime = timeArr[0].trim().substr(0, timeArr[0].trim().length - 2);
        /** @type {?} */
        var endTime = timeArr[1].trim().substr(0, timeArr[1].trim().length - 2);
        /** @type {?} */
        var startTimeArr = startTime.split(':');
        if (startTimeArr.length > 1) {
            // tslint:disable-next-line:radix
            shift.startTime = parseInt(startTimeArr[0]) * 60 + parseInt(startTimeArr[1]);
        }
        else {
            // tslint:disable-next-line:radix
            shift.startTime = parseInt(startTimeArr[0]) * 60;
        }
        /** @type {?} */
        var endTimeArr = endTime.split(':');
        if (endTimeArr.length > 1) {
            // tslint:disable-next-line:radix
            shift.endTime = parseInt(endTimeArr[0]) * 60 + parseInt(endTimeArr[1]);
        }
        else {
            // tslint:disable-next-line:radix
            shift.endTime = parseInt(endTimeArr[0]) * 60;
        }
    };
    /**
     * @param {?} array
     * @param {?} firstKey
     * @param {?} firstValue
     * @param {?} secondKey
     * @param {?} secondVal
     * @return {?}
     */
    FnUtilService.prototype.getIndexWithTwoKeys = /**
     * @param {?} array
     * @param {?} firstKey
     * @param {?} firstValue
     * @param {?} secondKey
     * @param {?} secondVal
     * @return {?}
     */
    function (array, firstKey, firstValue, secondKey, secondVal) {
        for (var i = 0; i < array.length; i++) {
            if ((array[i][firstKey] === firstValue) && (array[i][secondKey] === secondVal)) {
                return i;
            }
        }
        return -1;
    };
    /**
     * @param {?} array
     * @param {?} attr
     * @param {?} value
     * @return {?}
     */
    FnUtilService.prototype.getIndexIfObjWithAttr = /**
     * @param {?} array
     * @param {?} attr
     * @param {?} value
     * @return {?}
     */
    function (array, attr, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    };
    /**
     * @param {?} obj1
     * @param {?} obj2
     * @return {?}
     */
    FnUtilService.prototype.isValidObjects = /**
     * @param {?} obj1
     * @param {?} obj2
     * @return {?}
     */
    function (obj1, obj2) {
        return isNull(obj1) && isNull(obj2);
    };
    /**
     * @param {?} hashObject1
     * @param {?} hashObject2
     * @return {?}
     */
    FnUtilService.prototype.isSameObjects = /**
     * @param {?} hashObject1
     * @param {?} hashObject2
     * @return {?}
     */
    function (hashObject1, hashObject2) {
        /** @type {?} */
        var flag = true;
        if (this.checkCollectionLength(hashObject1) > 0 && this.checkCollectionLength(hashObject2) > 0) {
            for (var key in hashObject1) {
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
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    FnUtilService.prototype.copyObject = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return this.isEmptyObject(obj) ? obj : JSON.parse(JSON.stringify(obj));
    };
    /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    FnUtilService.prototype.objectEquals = /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (x, y) {
        'use strict';
        var _this = this;
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
        var p = Object.keys(x);
        return Object.keys(y).every((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            return p.indexOf(i) !== -1;
        })) &&
            p.every((/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                return _this.objectEquals(x[i], y[i]);
            }));
    };
    /**
     * @param {?} length
     * @return {?}
     */
    FnUtilService.prototype.dummyArrayOfLength = /**
     * @param {?} length
     * @return {?}
     */
    function (length) {
        /** @type {?} */
        var res = [];
        for (var i = 0; i < length; i++) {
            res.push(i + 1);
        }
        return res;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    FnUtilService.prototype.getCleanXML = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
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
        var strBuf = '';
        /** @type {?} */
        var charArray = str.split('');
        for (var i = 0; i < charArray.length; i++) {
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
    };
    /**
     * @param {?} sourceStr
     * @param {?} sIndex
     * @param {?} endIndex
     * @param {?} toString
     * @return {?}
     */
    FnUtilService.prototype.replaceStringAt = /**
     * @param {?} sourceStr
     * @param {?} sIndex
     * @param {?} endIndex
     * @param {?} toString
     * @return {?}
     */
    function (sourceStr, sIndex, endIndex, toString) {
        /** @type {?} */
        var _returnStr = '';
        _returnStr += sourceStr.substring(0, sIndex);
        _returnStr += toString;
        _returnStr += (sourceStr.substring(endIndex, sourceStr.length));
        return _returnStr;
    };
    /**
     * @param {?} destObj
     * @param {?} sourceObj
     * @return {?}
     */
    FnUtilService.prototype.mergeObject = /**
     * @param {?} destObj
     * @param {?} sourceObj
     * @return {?}
     */
    function (destObj, sourceObj) {
        for (var key in sourceObj) {
            if (!this.isEmptyObject(sourceObj[key])) {
                destObj[key] = sourceObj[key];
            }
        }
        return destObj;
    };
    /**
     * @param {?} numStr
     * @return {?}
     */
    FnUtilService.prototype.isNumberStr = /**
     * @param {?} numStr
     * @return {?}
     */
    function (numStr) {
        numStr = numStr.trim(' ');
        return this.isEmptyObject(numStr) ? false : numStr.match(/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/);
    };
    /**
     * @return {?}
     */
    FnUtilService.prototype.isIntegerNumber = /**
     * @return {?}
     */
    function () {
        return new RegExp(/^[0-9]*$/);
    };
    /**
     * @param {?} arrayObject
     * @param {?} keyName
     * @param {?=} isReverse
     * @return {?}
     */
    FnUtilService.prototype.stringSortArray = /**
     * @param {?} arrayObject
     * @param {?} keyName
     * @param {?=} isReverse
     * @return {?}
     */
    function (arrayObject, keyName, isReverse) {
        arrayObject.sort((/**
         * @param {?} object1
         * @param {?} object2
         * @return {?}
         */
        function (object1, object2) {
            if (isReverse) {
                return object2[keyName].localeCompare(object1[keyName]);
            }
            else {
                return object1[keyName].localeCompare(object2[keyName]);
            }
        }));
        return arrayObject;
    };
    /**
     * @param {?} array1
     * @param {?} array2
     * @param {?} key
     * @return {?}
     */
    FnUtilService.prototype.setDifference = /**
     * @param {?} array1
     * @param {?} array2
     * @param {?} key
     * @return {?}
     */
    function (array1, array2, key) {
        /** @type {?} */
        var tempArray = new Array();
        var _loop_1 = function (index) {
            /** @type {?} */
            var value = array1[index][key];
            /** @type {?} */
            var anotherArray = array2.filter((/**
             * @param {?} dataObj
             * @return {?}
             */
            function (dataObj) {
                return dataObj[key] === value;
            }));
            if (anotherArray.length === 0) {
                tempArray.push(array1[index]);
            }
        };
        for (var index = 0; index < array1.length; index++) {
            _loop_1(index);
        }
        return tempArray;
    };
    /**
     * @param {?} array1
     * @param {?} array2
     * @param {?} key
     * @return {?}
     */
    FnUtilService.prototype.inetersection = /**
     * @param {?} array1
     * @param {?} array2
     * @param {?} key
     * @return {?}
     */
    function (array1, array2, key) {
        /** @type {?} */
        var tempArray = new Array();
        var _loop_2 = function (index) {
            /** @type {?} */
            var value = array1[index][key];
            /** @type {?} */
            var anotherArray = array2.filter((/**
             * @param {?} dataObj
             * @return {?}
             */
            function (dataObj) {
                return dataObj[key] === value;
            }));
            if (anotherArray.length > 0) {
                tempArray.push(array1[index]);
            }
        };
        for (var index = 0; index < array1.length; index++) {
            _loop_2(index);
        }
        return tempArray;
    };
    /**
     * @param {?} bool
     * @return {?}
     */
    FnUtilService.prototype.getBoolValue = /**
     * @param {?} bool
     * @return {?}
     */
    function (bool) {
        if (isNotNull(bool) && (bool === true || bool === 'true' || bool === 1)) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} iterations
     * @param {?} doProcess
     * @param {?} exit
     * @return {?}
     */
    FnUtilService.prototype.syncLoop = /**
     * @param {?} iterations
     * @param {?} doProcess
     * @param {?} exit
     * @return {?}
     */
    function (iterations, doProcess, exit) {
        /** @type {?} */
        var index = 0;
        /** @type {?} */
        var done = false;
        /** @type {?} */
        var shouldExit = false;
        /** @type {?} */
        var loopObject = {
            next: /**
             * @return {?}
             */
            function () {
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
            iteration: /**
             * @return {?}
             */
            function () {
                return index - 1; // Return the current index count
            },
            break: /**
             * @param {?} end
             * @return {?}
             */
            function (end) {
                done = true; // End the loop
                shouldExit = end; // Passing end as true means we still call the exit callback
            }
        };
        loopObject.next(); // run for first time...
        return loopObject;
    };
    FnUtilService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FnUtilService.ctorParameters = function () { return [
        { type: DatePipe },
        { type: DomSanitizer }
    ]; };
    return FnUtilService;
}());
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
var FnTableComponent = /** @class */ (function () {
    function FnTableComponent(fnUtil) {
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
    FnTableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.config.tableAction.unsubscribe();
        this.tblSearchConfig.actionClear.complete();
    };
    /**
     * @return {?}
     */
    FnTableComponent.prototype.initPageConfig = /**
     * @return {?}
     */
    function () {
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
        var _tempMetaHash = this.fnUtil.mapFromArray(this.rowMetaArray, 'key');
        this.uniquKeyExits = !this.fnUtil.isEmptyObject(_tempMetaHash[this.config.uniqueKey]);
    };
    /**
     * @param {?} tableAction
     * @return {?}
     */
    FnTableComponent.prototype.tableAction = /**
     * @param {?} tableAction
     * @return {?}
     */
    function (tableAction) {
        if (tableAction.action === 'ADD') {
            this.addRowAction(tableAction.data);
        }
        else if (tableAction.action === 'REFRESH') {
        }
        else {
            // todo
        }
    };
    /**
     * @return {?}
     */
    FnTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.config.tableAction.subscribe(this.tableAction);
        this.filterArray = this.dataArray;
        this.initPageConfig();
        for (var index = 0; index < this.rowMetaArray.length; index++) {
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
    };
    /**
     * @param {?} sortKey
     * @return {?}
     */
    FnTableComponent.prototype.applySortIcon = /**
     * @param {?} sortKey
     * @return {?}
     */
    function (sortKey) {
        for (var index in this.rowMetaArray) {
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
    };
    /**
     * @param {?} column
     * @param {?=} skipSortIcon
     * @return {?}
     */
    FnTableComponent.prototype.changeSort = /**
     * @param {?} column
     * @param {?=} skipSortIcon
     * @return {?}
     */
    function (column, skipSortIcon) {
        this.selectedCol = column;
        if (!skipSortIcon) {
            this.applySortIcon(column.key);
        }
        /** @type {?} */
        var _key = column.sortValue < 0 ? '-' + column.key : column.key;
        /** @type {?} */
        var tempArray = this.fnUtil.sortObjectOnKeys(this.filterArray.toArray(), _key);
        /** @type {?} */
        var startSize = (this.currentPage - 1) * (this.pageSize);
        this.dataCloneArray = List(tempArray.slice(startSize, startSize + this.pageSize));
    };
    /**
     * @param {?} eventObj
     * @return {?}
     */
    FnTableComponent.prototype.paginzationEvent = /**
     * @param {?} eventObj
     * @return {?}
     */
    function (eventObj) {
        this.currentPage = eventObj;
        this.changeSort(this.selectedCol, true);
    };
    /**
     * @param {?=} _searchTerm
     * @return {?}
     */
    FnTableComponent.prototype.searchOnRows = /**
     * @param {?=} _searchTerm
     * @return {?}
     */
    function (_searchTerm) {
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
    };
    /**
     * @private
     * @param {?} rowObj
     * @return {?}
     */
    FnTableComponent.prototype.addRowAction = /**
     * @private
     * @param {?} rowObj
     * @return {?}
     */
    function (rowObj) {
        this.dataArray.push(rowObj);
        this.searchOnRows();
    };
    /**
     * @param {?} rowArray
     * @return {?}
     */
    FnTableComponent.prototype.filterAction = /**
     * @param {?} rowArray
     * @return {?}
     */
    function (rowArray) {
        this.dataArray = rowArray;
        this.searchTerm = '';
        this.searchOnRows();
    };
    /**
     * @private
     * @param {?} dataArray
     * @return {?}
     */
    FnTableComponent.prototype.updateDataArray = /**
     * @private
     * @param {?} dataArray
     * @return {?}
     */
    function (dataArray) {
        this.dataArray = dataArray;
        this.ngOnInit();
    };
    /**
     * @param {?} rowObj
     * @param {?} columnName
     * @return {?}
     */
    FnTableComponent.prototype.cellClick = /**
     * @param {?} rowObj
     * @param {?} columnName
     * @return {?}
     */
    function (rowObj, columnName) {
        this.updateAction(rowObj);
    };
    /**
     * @param {?} rowObj
     * @return {?}
     */
    FnTableComponent.prototype.updateAction = /**
     * @param {?} rowObj
     * @return {?}
     */
    function (rowObj) {
        var _this = this;
        this.updateRow.emit({
            row: rowObj, callback: (/**
             * @param {?} returnRow
             * @return {?}
             */
            function (returnRow) {
                for (var key in _this.dataArray) {
                    if (_this.uniquKeyExits && _this.dataArray[key][_this.config.uniqueKey] === returnRow[_this.config.uniqueKey]) {
                        _this.dataArray[key] = returnRow;
                        break;
                    }
                }
                _this.searchOnRows();
            })
        });
    };
    /**
     * @param {?} rowObj
     * @return {?}
     */
    FnTableComponent.prototype.deleteAction = /**
     * @param {?} rowObj
     * @return {?}
     */
    function (rowObj) {
        var _this = this;
        this.deleteRow.emit({
            row: rowObj, callback: (/**
             * @param {?=} returnRow
             * @return {?}
             */
            function (returnRow) {
                for (var index in _this.dataArray) {
                    if (_this.uniquKeyExits && _this.dataArray[index][_this.config.uniqueKey] === rowObj[_this.config.uniqueKey]) {
                        // tslint:disable-next-line:radix
                        _this.dataArray.splice(parseInt(index), 1);
                        break;
                    }
                }
                _this.searchOnRows();
            })
        });
    };
    /**
     * @private
     * @param {?} rowObj
     * @return {?}
     */
    FnTableComponent.prototype.deleteRowAction = /**
     * @private
     * @param {?} rowObj
     * @return {?}
     */
    function (rowObj) {
        for (var index in this.dataArray) {
            if (this.uniquKeyExits && this.dataArray[index][this.config.uniqueKey] === rowObj[this.config.uniqueKey]) {
                // tslint:disable-next-line: radix
                this.dataArray.splice(parseInt(index), 1);
                break;
            }
        }
        this.searchOnRows();
    };
    /**
     * @return {?}
     */
    FnTableComponent.prototype.toggleSearch = /**
     * @return {?}
     */
    function () {
        this.searchTerm = '';
        if (this.showSearchBox) {
            this.tblSearchConfig.actionClear.next();
        }
        this.searchOnRows();
        this.showSearchBox = !this.showSearchBox;
    };
    FnTableComponent.DEFAULT_SORT_CLS = '';
    FnTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-table',
                    template: "<table class=\"table dataTable no-margin\" ngClass=\"{{config.tableClass || ''}}\" role=\"grid\" style=\"width: 100%;\">\n  <thead>\n    <tr role=\"row\">\n      <th *ngFor=\"let column of rowMetaArray\" [class.hidden]=\"column.isHidden\" (click)=\"changeSort(column)\"\n        ngClass=\"{{column.className || ''}}\">\n        {{column.description}}\n        <i *ngIf=\"column.isSortable\" class=\"margin-left-5 fa \" [ngClass]=\"column.sortCls\"></i>\n      </th>\n      <th *ngIf=\"!config.hideAction\" class=\"text-center relative\" style=\"width:10%;min-width: 100px;\">\n        <span>Action\n          <label class=\"lable\" (click)=\"toggleSearch()\" style=\"cursor: pointer;margin-bottom:-2px\">\n            <i class=\"fa fa-search pull-right blue \"></i>\n          </label>\n        </span>\n\n        <div id=\"fn-search-input\" class=\"input-group table-search\" [class.hidden]=\"!showSearchBox\">\n          <!-- <input type=\"text\" class=\"form-control input-lg\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"searchOnRows()\" placeholder=\"Search\" /> -->\n          <fn-table-search-component (search)=\"searchOnRows($event)\" [config]=\"tblSearchConfig\">\n          </fn-table-search-component>\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-basic btn-sm\" type=\"button\" (click)=\"toggleSearch()\">\n              <i class=\"fa fa-times red\"></i>\n            </button>\n          </span>\n        </div>\n\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of dataCloneArray\">\n      <td (click)=\"cellClick(row, column.key)\" *ngFor=\"let column of rowMetaArray\" [class.hidden]=\"column.isHidden\">\n        <div *ngIf=\"column.type == 'string'\"> {{row[column.key]}} </div>\n        <div *ngIf=\"column.type == 'number'\"> {{row[column.key]}} </div>\n        <div *ngIf=\"column.type == 'color'\" class=\"color-test padding-10 choppOff\"\n          [ngStyle]=\"{'background-color': row[column.key]}\"></div>\n      </td>\n      <td *ngIf=\"!config.hideAction\" style=\"width:10%\" class=\"text-center\">\n        <button (click)=\"updateAction(row)\" *ngIf=\"!config.hideEdit\" class=\"btn btn-link btn-action\">\n          <!-- <img src=\"assets/images/common/svg/edit-icon.svg\" class=\"alta-table-btn\"> -->\n          <i (click)=\"updateAction(row)\" ng-if=\"!config.hideEdit\" class=\"fa hide fa-edit blue fa-lg\"></i></button>\n        <button (click)=\"deleteAction(row)\" *ngIf=\"!config.hideDelete\" class=\"btn btn-link btn-action\">\n          <!-- <img src=\"assets/images/common/svg/delete-icon.svg\" class=\"alta-table-btn\"> -->\n          <i (click)=\"deleteAction(row)\" ng-if=\"!config.hideDelete\" class=\"fa hide fa-trash-o red fa-lg\"></i></button>\n\n        <input *ngIf=\"config.isSelectable\" [(ngModel)]=\"row['isActive']\" type=\"checkbox\" (change)=\"updateAction(row)\"\n          style=\"opacity: 1\">\n\n\n      </td>\n    </tr>\n\n  </tbody>\n</table>\n<div class=\"no_data_display mt-13\" *ngIf=\"dataCloneArray.size<1\">No Data to display</div>\n<fn-pagination [currentPage]=\"currentPage\" [totalPage]=\"totalPage\" (changePage)=\"paginzationEvent($event)\">\n</fn-pagination>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["#fn-search-input{padding:0;border:1px solid #e4e4e4;border-radius:6px;background-color:#fff}#fn-search-input input{border:0;box-shadow:none}#fn-search-input button{margin:0;background:0 0;box-shadow:none;border:0;color:#666;padding:4px 8px 4px 10px;border-left:1px solid #ccc}#fn-search-input button:hover{border:0;box-shadow:none;border-left:1px solid #ccc}#fn-search-input .glyphicon-search{font-size:23px}"]
                }] }
    ];
    /** @nocollapse */
    FnTableComponent.ctorParameters = function () { return [
        { type: FnUtilService }
    ]; };
    FnTableComponent.propDecorators = {
        config: [{ type: Input }],
        rowMetaArray: [{ type: Input }],
        dataArray: [{ type: Input }],
        currentPage: [{ type: Input }],
        pageSize: [{ type: Input }],
        updateRow: [{ type: Output }],
        deleteRow: [{ type: Output }]
    };
    return FnTableComponent;
}());
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
var FnPaginationComponent = /** @class */ (function () {
    function FnPaginationComponent() {
        this.changePage = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FnPaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.currentPage = 1;
    };
    /**
     * @return {?}
     */
    FnPaginationComponent.prototype.firstPage = /**
     * @return {?}
     */
    function () {
        this.currentPage = 1;
        this.changePage.emit(this.currentPage);
    };
    /**
     * @return {?}
     */
    FnPaginationComponent.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.currentPage = this.currentPage - 1;
        this.changePage.emit(this.currentPage);
    };
    /**
     * @return {?}
     */
    FnPaginationComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this.currentPage = this.currentPage + 1;
        this.changePage.emit(this.currentPage);
    };
    /**
     * @return {?}
     */
    FnPaginationComponent.prototype.lastPage = /**
     * @return {?}
     */
    function () {
        this.currentPage = this.totalPage;
        this.changePage.emit(this.currentPage);
    };
    FnPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-pagination',
                    template: "<div class=\"{{pageClass}}\" *ngIf=\"totalPage>1\">\n  <div class=\" row \">\n    <div class=\"col-sm-12 no-padding \">\n      <div class=\"btn-toolbar pull-right \" role=\"toolbar \">\n        <div class=\"btn-group \">\n          <button id=\"firstBtn \" class=\"btn btn-xs fn-pagging-btn \" (click)=\"firstPage() \" [disabled]=\"currentPage==1 \">\n            First</button>\n          <button id=\"prevBtn \" class=\"btn btn-xs fn-pagging-btn \" [disabled]=\"currentPage==1\" (click)=\"prevPage() \">\n            Previous</button>\n          <button id=\"labelBtn \" class=\"btn btn-xs fn-pagging-btn bg-white \" disabled=\"disabled \">\n            {{currentPage}}/{{totalPage}}</button>\n          <button id=\"nextBtn \" class=\"btn btn-xs fn-pagging-btn \" [disabled]=\"currentPage == totalPage \"\n            (click)=\"nextPage() \">\n            Next</button>\n          <button id=\"lastBtn \" class=\"btn btn-xs fn-pagging-btn \" [disabled]=\"currentPage==totalPage \"\n            (click)=\"lastPage() \">\n            Last</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".fn-pagging-btn{border:1px solid #c7c7c8;padding:3px 10px!important;font-size:12px}"]
                }] }
    ];
    FnPaginationComponent.propDecorators = {
        currentPage: [{ type: Input }],
        totalPage: [{ type: Input }],
        pageSize: [{ type: Input }],
        pageClass: [{ type: Input }],
        changePage: [{ type: Output }]
    };
    return FnPaginationComponent;
}());
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
var FnTableSearchComponent = /** @class */ (function () {
    function FnTableSearchComponent(el) {
        var _this = this;
        this.el = el;
        this.debouncer = new Subject();
        this.search = new EventEmitter();
        this.debouncer.pipe(debounceTime(200)).subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.search.emit(val);
        }));
    }
    /**
     * @return {?}
     */
    FnTableSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.config.actionClear.subscribe((/**
         * @return {?}
         */
        function () {
            _this.el.nativeElement.lastChild.value = '';
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FnTableSearchComponent.prototype.debounce = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.debouncer.next(value);
    };
    FnTableSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-table-search',
                    template: "<!-- <input type=\"text\" class=\"form-control input-lg\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"searchOnRows()\" placeholder=\"Search\" /> -->\r\n<input type=\"text\" (input)=\"debounce($event.target.value)\" placeholder=\"Search...\">",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    FnTableSearchComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FnTableSearchComponent.propDecorators = {
        search: [{ type: Output }],
        config: [{ type: Input }]
    };
    return FnTableSearchComponent;
}());
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
var FnMenuService = /** @class */ (function () {
    function FnMenuService() {
        this.menuItemClick$ = new Subject();
        this.menuOpen$ = new BehaviorSubject(false);
    }
    /**
     * @param {?} menuId
     * @return {?}
     */
    FnMenuService.prototype.navMenuClick = /**
     * @param {?} menuId
     * @return {?}
     */
    function (menuId) {
        /** @type {?} */
        var $this = $('#' + menuId);
        if ($this.parents('li').hasClass('active')) {
            $this.parent('li').children('li').removeClass('active');
            $this.siblings('ul').children('li').removeClass('active');
            $this.parent('li').siblings('li').removeClass('active');
            $this.parents('li').addClass('active');
            $this.parent('li').siblings('li').children('ul').slideUp();
            $this.siblings('ul').children('li').children('ul').slideUp();
            $this.siblings('ul').slideDown();
        }
        else {
            $('.side-bar-menu li').each((/**
             * @return {?}
             */
            function () {
                $(this).removeClass('active');
            }));
            $('.side-bar-menu li ul').slideUp();
            $this.parents('li').addClass('active');
            $this.siblings('ul').slideDown();
        }
    };
    /**
     * @param {?} menuId
     * @return {?}
     */
    FnMenuService.prototype.onMenuItemClick = /**
     * @param {?} menuId
     * @return {?}
     */
    function (menuId) {
        this.menuItemClick$.next(menuId);
        this.navMenuClick(menuId);
    };
    /**
     * @return {?}
     */
    FnMenuService.prototype.getMenuItemClick$ = /**
     * @return {?}
     */
    function () {
        return this.menuItemClick$;
    };
    FnMenuService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ FnMenuService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FnMenuService_Factory() { return new FnMenuService(); }, token: FnMenuService, providedIn: "root" });
    return FnMenuService;
}());
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
var DEFAULT_MENU_STATE = {
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
var FnMenuActionType = {
    InitMenuState: '[FnMenu] initialize Menu State',
    LoadMenuData: '[FnMenu] Load Menu Data',
    LoadMenuDataSucess: '[FnMenu] Load Success',
    LoadMenuDataError: '[FnMenu] Load Error',
    SetActiveMenuId: '[FnMenu] Set Active Menu ID',
};
var InitMenuState = /** @class */ (function () {
    function InitMenuState() {
        this.type = FnMenuActionType.InitMenuState;
    }
    return InitMenuState;
}());
if (false) {
    /** @type {?} */
    InitMenuState.prototype.type;
}
var LoadMenuDataSucess = /** @class */ (function () {
    function LoadMenuDataSucess(menuItemState, menuItemMap, menuItemDetailMap, isMenuLoaded) {
        this.menuItemState = menuItemState;
        this.menuItemMap = menuItemMap;
        this.menuItemDetailMap = menuItemDetailMap;
        this.isMenuLoaded = isMenuLoaded;
        this.type = FnMenuActionType.LoadMenuDataSucess;
    }
    return LoadMenuDataSucess;
}());
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
var LoadMenuData = /** @class */ (function () {
    function LoadMenuData(payload) {
        this.payload = payload;
        this.type = FnMenuActionType.LoadMenuData;
    }
    return LoadMenuData;
}());
if (false) {
    /** @type {?} */
    LoadMenuData.prototype.type;
    /** @type {?} */
    LoadMenuData.prototype.payload;
}
var LoadMenuDataError = /** @class */ (function () {
    function LoadMenuDataError(error) {
        this.error = error;
        this.type = FnMenuActionType.LoadMenuDataError;
    }
    return LoadMenuDataError;
}());
if (false) {
    /** @type {?} */
    LoadMenuDataError.prototype.type;
    /** @type {?} */
    LoadMenuDataError.prototype.error;
}
var SetActiveMenuId = /** @class */ (function () {
    function SetActiveMenuId(activeMenuId) {
        this.activeMenuId = activeMenuId;
        this.type = FnMenuActionType.SetActiveMenuId;
    }
    return SetActiveMenuId;
}());
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
var initMenuState = {
    menuData: DEFAULT_MENU_STATE,
    error: '',
    activeMenuId: '',
    menuItemMap: null,
    menuItemDetailMap: null,
    isMenuLoaded: false
};
/** @type {?} */
var fnMenuFeatureState = createFeatureSelector('FnMenuReducer');
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.menuData; } // may be we filter some item
;
/** @type {?} */
var getMenuData = createSelector(fnMenuFeatureState, (ɵ0));
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.menuData.id; } // may be we filter some item
;
/** @type {?} */
var getRooMenuId = createSelector(fnMenuFeatureState, (ɵ1));
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.activeMenuId; };
/** @type {?} */
var getActiveMenuId = createSelector(fnMenuFeatureState, (ɵ2));
var ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.menuItemMap; };
/** @type {?} */
var getMenuItemMap = createSelector(fnMenuFeatureState, (ɵ3));
var ɵ4 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.menuItemDetailMap; };
/** @type {?} */
var getMenuDetailItemMap = createSelector(fnMenuFeatureState, (ɵ4));
var ɵ5 = /**
 * @param {?} state
 * @param {?} prop
 * @return {?}
 */
function (state, prop) {
    return state[prop.id];
};
/** @type {?} */
var getMenuItemById = createSelector(getMenuDetailItemMap, (ɵ5));
var ɵ6 = /**
 * @param {?} state
 * @param {?} activeMenuId
 * @return {?}
 */
function (state, activeMenuId) {
    return state[activeMenuId];
};
/** @type {?} */
var getActiveMenuItem = createSelector(getMenuDetailItemMap, getActiveMenuId, (ɵ6));
var ɵ7 = /**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return state.isMenuLoaded;
};
/** @type {?} */
var getMenuStatus = createSelector(fnMenuFeatureState, (ɵ7));
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function FnMenuReducer(state, action) {
    if (state === void 0) { state = initMenuState; }
    switch (action.type) {
        case FnMenuActionType.InitMenuState:
            return __assign({}, state);
        case FnMenuActionType.LoadMenuDataSucess:
            return __assign({}, state, { menuData: action.menuItemState, menuItemMap: action.menuItemMap, menuItemDetailMap: action.menuItemDetailMap, isMenuLoaded: action.isMenuLoaded });
        case FnMenuActionType.LoadMenuDataError:
            return __assign({}, state, { error: action.error });
        case FnMenuActionType.SetActiveMenuId:
            return __assign({}, state, { activeMenuId: action.activeMenuId });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnMenuSidebarComponent = /** @class */ (function () {
    function FnMenuSidebarComponent(fnMenuStore, fnMenuService, renderer, router) {
        this.fnMenuStore = fnMenuStore;
        this.fnMenuService = fnMenuService;
        this.renderer = renderer;
        this.router = router;
        this.fnClick = new EventEmitter();
        this.subscription = new Subscription();
        this.destroy$ = new Subject();
        this.SUB_MENU_LANDING_URL = 'zip/main';
        this.subscribeMenuData();
    }
    /**
     * @private
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.subscribeMenuData = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.fnMenuStore.pipe(takeUntil(this.destroy$), select(getMenuData)).subscribe((/**
         * @param {?} menuData
         * @return {?}
         */
        function (menuData) {
            _this.menuData = menuData;
            _this.isMenuLoded = true;
            _this.subscribeMenuItemMap();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.subscribeMenuItemMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.fnMenuStore.pipe(takeUntil(this.destroy$), select(getMenuItemMap)).subscribe((/**
         * @param {?} _menuItemMap
         * @return {?}
         */
        function (_menuItemMap) { return _this.menuItemMap = _menuItemMap; }));
    };
    /**
     * @private
     * @param {?} _url
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.navigateToUrl = /**
     * @private
     * @param {?} _url
     * @return {?}
     */
    function (_url) {
        if (_url == this.SUB_MENU_LANDING_URL) {
            _url += '/submenu';
        }
        this.router.navigateByUrl(_url);
    };
    /**
     * @private
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.menuClickSubscriber = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.fnMenuService.menuItemClick$.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} menuId
         * @return {?}
         */
        function (menuId) {
            _this.fnMenuStore.dispatch(new SetActiveMenuId(menuId));
            _this.fnClick.emit(menuId);
            // this.menuItemMap.get(menuId)
            // todo routing help
            // console.log(this.menuItemMap[menuId]);
            _this.navigateToUrl(_this.menuItemMap[menuId].detail.url);
        }));
    };
    /**
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.menuClickSubscriber();
        this.calSidebarHeight();
    };
    /**
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.listenWindowResize();
    };
    /**
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.calSidebarHeight = /**
     * @return {?}
     */
    function () {
        //this.sidebarHeight = (window.innerHeight -56) + 'px';
    };
    /**
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.listenWindowResize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.renderer.listen(window, 'resize', (/**
         * @return {?}
         */
        function () {
            // TODO resizeing
            _this.calSidebarHeight();
        })));
    };
    /**
     * @return {?}
     */
    FnMenuSidebarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    FnMenuSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-menu-sidebar',
                    template: "<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top bg-dark \">\r\n  <section style=\"width: 100%;height:100%\" class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n    <ul *ngIf=\"isMenuLoded\" class=\"navbar-nav mr-auto sidenav side-bar-menu\" id=\"navAccordion\" style=\"overflow:hidden\"\r\n      [style.height]=\"sidebarHeight\" fn-menu-item [fnMenuItem]=\"menuData\"></ul>\r\n  </section>\r\n</nav>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["@charset \"UTF-8\";.bg-dark{background:#484d55!important}.navbar{padding:inherit}#navAccordion .nav-link:hover{transition:.4s}#navAccordion .nav-link-collapse:after{float:right;content:\"\uF078\";font-family:FontAwesome;font-size:.9em}#navAccordion .nav-link-show:after{float:right;content:\"\uF077\";font-family:FontAwesome;font-size:.9em}@media (min-width:720px){#navAccordion.sidenav{position:absolute;top:0;left:0;width:48px;height:calc(100vh - 3.5rem);margin-top:3.5rem;background:#484d55;box-sizing:border-box;overflow-x:hidden}.navbar-expand-lg #navAccordion.sidenav{flex-direction:column}}#navAccordion.sidenav:hover{width:300px}"]
                }] }
    ];
    /** @nocollapse */
    FnMenuSidebarComponent.ctorParameters = function () { return [
        { type: Store },
        { type: FnMenuService },
        { type: Renderer2 },
        { type: Router }
    ]; };
    FnMenuSidebarComponent.propDecorators = {
        fnClick: [{ type: Output }]
    };
    return FnMenuSidebarComponent;
}());
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
var FnMenuItemComponent = /** @class */ (function () {
    function FnMenuItemComponent(fnMenuService) {
        this.fnMenuService = fnMenuService;
    }
    /**
     * @param {?} menuItem
     * @return {?}
     */
    FnMenuItemComponent.prototype.menuClickHandler = /**
     * @param {?} menuItem
     * @return {?}
     */
    function (menuItem) {
        this.fnMenuService.onMenuItemClick(menuItem.id);
    };
    FnMenuItemComponent.decorators = [
        { type: Component, args: [{
                    selector: '[fn-menu-item]',
                    encapsulation: ViewEncapsulation.None,
                    template: "<li *ngFor=\"let menuItem of fnMenuItem.menuItemArray\" [ngClass]=\"{'nav-dropdown':menuItem.menuItemArray.length>0 && menuItem.showDropIcon}\" class=\"nav-item\">\r\n    <a (click)=\"menuClickHandler(menuItem)\" [id]=\"menuItem.id\" class=\"nav-link\">\r\n        <img [src]=\"menuItem.smallIcon\" height=\"20\" width=\"20\" /> <span [innerHTML]=\"menuItem.name\"></span>\r\n        <i *ngIf=\"menuItem.menuItemArray && menuItem.menuItemArray.length>0\" class=\"fa fa-angle-right pull-right\"></i>\r\n    </a>\r\n    <ul fn-menu-item class=\"sidebar-menu-item nav-sub  {{menuItem.id}}\" *ngIf=\"!menuItem.isDisabled\" [fnMenuItem]=\"menuItem\">\r\n    </ul>\r\n\r\n</li>",
                    styles: ["\nli{list-style:none}\n.nav-item .nav-link:hover {\n    color: rgba(255, 255, 255, 0.75);\n    background-color: #596773;\n}\n  .nav-item .nav-link:hover img{\n    opacity: 1;\n}\n  .nav-item .nav-link{\n    border-left: 2px solid transparent;\n    font-size: 13px;\n    letter-spacing: 0.05em;\n    padding: .7rem 0.7rem;\n}\n  .nav-item.active> .nav-link{\n    border-left: 2px solid #35c4ff;\n    background-color: #465766;\n}\n  .nav-item .nav-link img{\n    height: 21px;\n    width: 21px;\n    margin-right: 15px;\n    margin-top: -3px;\n    opacity: 0.7;\n}\n > .nav-item.active> .nav-link img{\n    opacity: 1;\n}\n > .nav-item ul.nav-second-level > .nav-item {\n    padding-left: 0px;\n}\n > .nav-item ul.nav-second-level > .nav-item > .nav-link {\n    padding-left: 20px;\n}\n > .nav-item ul.nav-second-level {\n    padding-left: 0;\n}\n.sidebar-menu-item{display:none}\n.nav-item  {\n    width: 300px;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    FnMenuItemComponent.ctorParameters = function () { return [
        { type: FnMenuService }
    ]; };
    FnMenuItemComponent.propDecorators = {
        fnMenuItem: [{ type: Input }]
    };
    return FnMenuItemComponent;
}());
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
var FnMenuLandingComponent = /** @class */ (function () {
    function FnMenuLandingComponent(menuStore, fnMenuService) {
        this.menuStore = menuStore;
        this.fnMenuService = fnMenuService;
        this.destroy$ = new Subject();
        this.loadSubMenuArrayForActiveMenuId();
    }
    /**
     * @return {?}
     */
    FnMenuLandingComponent.prototype.loadSubMenuArrayForActiveMenuId = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.menuStore.pipe(takeUntil(this.destroy$), select(getActiveMenuItem)).subscribe((/**
         * @param {?} menuItem
         * @return {?}
         */
        function (menuItem) {
            _this.activeMenuItem = menuItem;
            console.log(menuItem);
            // tslint:disable-next-line: triple-equals
            _this.isCustMenu = _this.activeMenuItem.menuType == 'CUSTOM';
            _this.isLoaded = true;
        }));
    };
    /**
     * @param {?} menuItem
     * @return {?}
     */
    FnMenuLandingComponent.prototype.menuClickHandler = /**
     * @param {?} menuItem
     * @return {?}
     */
    function (menuItem) {
        this.fnMenuService.onMenuItemClick(menuItem.id);
    };
    /**
     * @return {?}
     */
    FnMenuLandingComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next(true);
        this.destroy$.complete();
    };
    FnMenuLandingComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    template: "<!-- <div class=\"zrpt_box_content\" *ngIf=\"isLoaded\">\r\n    <div class=\"header_wrap\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <img class=\"height-width-17 margin-right-5\" [src]=\"activeMenuItem.smallIcon\"><span [innerHTML]=\"activeMenuItem.name\"></span></div>\r\n\r\n\r\n        </div>\r\n        <div class=\"seperator_sky\"></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"site_reports_wrapper bg-white padding-15\">\r\n        <div class=\"row no-margin\">\r\n            <div class=\"report-img-data-wrap col-md-3\" *ngFor=\"let item of activeMenuItem.menuItemArray\" [ngClass]=\"{'hide':item.isDisabled}\" (click)=\"menuClickHandler(item)\">\r\n                <div class=\"img-wrap\">\r\n                    <img [src]=\"item.customIcon\" width=\"100%\" *ngIf=\"isCustMenu\">\r\n                    <img [src]=\"item.bigIcon\" width=\"100%\" *ngIf=\"!isCustMenu\">\r\n                </div>\r\n                <div class=\"reports-Data\">\r\n                    <h5 class=\"choppOff\">\r\n                        <span [innerHTML]=\"item.name\"></span>\r\n                    </h5>\r\n                    <p class=\"choppOff\" [title]=\"item.helpTextLBL\">\r\n                        <span [innerHTML]=\"item.helpTextLBL\"></span>\r\n\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div> -->\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"sub-menu-landing\">\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"sml-img-data-wrap col-3\" *ngFor=\"let item of activeMenuItem.menuItemArray\" [ngClass]=\"{'hide':item.isDisabled}\" (click)=\"menuClickHandler(item)\">\r\n                        <div class=\"sml-img-wrap\">\r\n                            <img [src]=\"item.customIcon\" width=\"100%\" *ngIf=\"isCustMenu\">\r\n                            <img [src]=\"item.bigIcon\" width=\"100%\" *ngIf=\"!isCustMenu\">\r\n                        </div>\r\n                        <div class=\"sml-Data\">\r\n                            <h5 class=\"choppOff\">\r\n                                <span [innerHTML]=\"item.name\"></span>\r\n                            </h5>\r\n                            <p class=\"choppOff\" [title]=\"item.helpTextLBL\">\r\n                                <span [innerHTML]=\"item.helpTextLBL\"></span>\r\n        \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>",
                    styles: ["\n.sub-menu-landing {\n    background-color: #fff;\n    padding: 15px 30px;\n    border-radius: 2px;\n}\n\n.sub-menu-landing .sml-img-data-wrap {\n    padding: 10px;\n    cursor: pointer;\n    min-height: 80px;\n    float: left;\n}\n\n.sub-menu-landing .sml-img-data-wrap:hover {\n    background-color: #F8F9FB;\n    border-radius: 4px;\n}\n\n.sub-menu-landing .sml-img-wrap {\n    width: 50px;\n    height: 50px;\n    float: left;\n    margin-right: 10px;\n    padding: 5px;\n}\n.sub-menu-landing .sml-img-wrap img.svg{\n    width: 100%;\n    height: auto;\n}\n.sub-menu-landing .sml-Data {\n    margin-top: 5px;\n}\n.sub-menu-landing .sml-Data h5 {\n    margin: 0;\n    color: #555557;\n    font-size: 15px;\n}\n\n.sub-menu-landing .sml-Data p {\n    color: #9e9e9e;\n    margin: 0;\n    font-size: 13px;\n}\n        "]
                }] }
    ];
    /** @nocollapse */
    FnMenuLandingComponent.ctorParameters = function () { return [
        { type: Store },
        { type: FnMenuService }
    ]; };
    return FnMenuLandingComponent;
}());
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
var FnApplicationHelper = /** @class */ (function () {
    function FnApplicationHelper() {
    }
    /**
     * @param {?} fnApplication
     * @return {?}
     */
    FnApplicationHelper.prototype.setApplication = /**
     * @param {?} fnApplication
     * @return {?}
     */
    function (fnApplication) {
        this.fnApplication = fnApplication;
    };
    /**
     * @return {?}
     */
    FnApplicationHelper.prototype.getApplication = /**
     * @return {?}
     */
    function () {
        return this.fnApplication;
    };
    FnApplicationHelper.decorators = [
        { type: Injectable }
    ];
    return FnApplicationHelper;
}());
if (false) {
    /** @type {?} */
    FnApplicationHelper.prototype.fnApplication;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnBrowserDetail = /** @class */ (function () {
    function FnBrowserDetail() {
    }
    /**
     * @return {?}
     */
    FnBrowserDetail.prototype.captureJsVersion = /**
     * @return {?}
     */
    function () {
        //     function get_js_version() {
        /** @type {?} */
        var jsv = {
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
    };
    /**
     * @return {?}
     */
    FnBrowserDetail.prototype.init = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var unknown = '-';
        // system
        /** @type {?} */
        var os = unknown;
        /** @type {?} */
        var osVersion = unknown;
        /** @type {?} */
        var screenSize = '';
        // browser
        /** @type {?} */
        var nVer = navigator.appVersion;
        /** @type {?} */
        var nAgt = navigator.userAgent;
        /** @type {?} */
        var browser = navigator.appName;
        /** @type {?} */
        var version = '' + parseFloat(navigator.appVersion);
        /** @type {?} */
        var majorVersion = parseInt(navigator.appVersion, 10);
        /** @type {?} */
        var nameOffset;
        /** @type {?} */
        var verOffset;
        /** @type {?} */
        var ix;
        // mobile version
        /** @type {?} */
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);
        // cookie
        /** @type {?} */
        var cookieEnabled = (navigator.cookieEnabled) ? true : false;
        {
            // screen
            if (screen.width) {
                /** @type {?} */
                var width = (screen.width) ? screen.width : '';
                /** @type {?} */
                var height = (screen.height) ? screen.height : '';
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
            var clientStrings = [
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
            for (var id in clientStrings) {
                /** @type {?} */
                var cs = clientStrings[id];
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
    };
    /**
     * @return {?}
     */
    FnBrowserDetail.prototype.browserDetail = /**
     * @return {?}
     */
    function () {
        if (window['systemObject'] == undefined || window['systemObject'] == null) {
            this.init();
            return window['systemObject'];
        }
        else {
            return window['systemObject'];
        }
    };
    return FnBrowserDetail;
}());
if (false) {
    /** @type {?} */
    FnBrowserDetail.prototype.jsVersion;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FNExceptionJson = /** @class */ (function () {
    function FNExceptionJson(exception) {
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
    FNExceptionJson.prototype.init = /**
     * @param {?} exception
     * @return {?}
     */
    function (exception) {
        var _this = this;
        /** @type {?} */
        var browserDetail = new FnBrowserDetail().browserDetail();
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
        function (_stackTrace) {
            /** @type {?} */
            var _rootStackTrak = _stackTrace[0];
            _this.expStackTrace = _stackTrace.join('\n');
            _this.rootStackTrace = _rootStackTrak.toString();
            _this.rootExpLineNum = _rootStackTrak.lineNumber;
            _this.id = _this.expMessage + _this.expStackTrace;
        })).catch((/**
         * @param {?} _err
         * @return {?}
         */
        function (_err) {
            _this.expStackTrace = exception.toString();
            _this.rootStackTrace = exception.toString();
            _this.id = _this.expMessage + _this.expStackTrace;
        }));
    };
    return FNExceptionJson;
}());
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
var FnExceptionService = /** @class */ (function () {
    function FnExceptionService() {
    }
    /**
     * @param {?} fnAplicationHelper
     * @return {?}
     */
    FnExceptionService.prototype.setFnApplicationHelper = /**
     * @param {?} fnAplicationHelper
     * @return {?}
     */
    function (fnAplicationHelper) {
        this.fnAppHelper = fnAplicationHelper;
    };
    /**
     * @return {?}
     */
    FnExceptionService.prototype.getFnApplicationHelper = /**
     * @return {?}
     */
    function () {
        return this.fnAppHelper;
    };
    /**
     * @param {?} exception
     * @param {?=} logToConsole
     * @return {?}
     */
    FnExceptionService.prototype.logException = /**
     * @param {?} exception
     * @param {?=} logToConsole
     * @return {?}
     */
    function (exception, logToConsole) {
        if (logToConsole) {
            console.error(exception);
        }
        if (this.fnAppHelper.getApplication()) {
            /** @type {?} */
            var fnExpJson = new FNExceptionJson(exception);
            this.fnAppHelper.getApplication().sendExceptionToServer(fnExpJson);
        }
    };
    FnExceptionService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FnExceptionService.ctorParameters = function () { return []; };
    return FnExceptionService;
}());
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
var FnApplication = /** @class */ (function () {
    function FnApplication(fnAppHelper, fnExp) {
        this.fnAppHelper = fnAppHelper;
        this.fnExp = fnExp;
        this.fnAppHelper.setApplication(this);
        this.fnExp.setFnApplicationHelper(this.fnAppHelper);
    }
    /**
     * @param {?} exception
     * @return {?}
     */
    FnApplication.prototype.sendExceptionToServer = /**
     * @param {?} exception
     * @return {?}
     */
    function (exception) { };
    FnApplication.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FnApplication.ctorParameters = function () { return [
        { type: FnApplicationHelper },
        { type: FnExceptionService }
    ]; };
    return FnApplication;
}());
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
var FNErrorLogSvcs = /** @class */ (function () {
    function FNErrorLogSvcs() {
    }
    // I log the given error to various aggregation and tracking services.
    // I log the given error to various aggregation and tracking services.
    /**
     * @param {?} error
     * @return {?}
     */
    FNErrorLogSvcs.prototype.logError = 
    // I log the given error to various aggregation and tracking services.
    /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (this.sendExceptionToServer) {
            /** @type {?} */
            var fnExpJson = new FNExceptionJson(error);
            this.sendToServer(fnExpJson);
        }
        else {
            this.sendToConsole(error);
        }
    };
    // I send the error the browser console (safely, if it exists).
    // I send the error the browser console (safely, if it exists).
    /**
     * @param {?} error
     * @return {?}
     */
    FNErrorLogSvcs.prototype.sendToConsole = 
    // I send the error the browser console (safely, if it exists).
    /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (console && console.group && console.error) {
            console.group('Error Log Service');
            console.error(error);
            console.error(error.message);
            console.error(error.stack);
            console.groupEnd();
        }
    };
    // I send the error to the server-side error tracking end-point.
    // I send the error to the server-side error tracking end-point.
    /**
     * @param {?} fnExpJson
     * @return {?}
     */
    FNErrorLogSvcs.prototype.sendToServer = 
    // I send the error to the server-side error tracking end-point.
    /**
     * @param {?} fnExpJson
     * @return {?}
     */
    function (fnExpJson) {
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
    };
    FNErrorLogSvcs.decorators = [
        { type: Injectable }
    ];
    return FNErrorLogSvcs;
}());
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
var FNErrorHandler = /** @class */ (function () {
    // private options: LoggingErrorHandlerOptions;
    function FNErrorHandler(errorLogService) {
        this.errorLogService = errorLogService;
    }
    // I handle the given error.
    // I handle the given error.
    /**
     * @param {?} error
     * @return {?}
     */
    FNErrorHandler.prototype.handleError = 
    // I handle the given error.
    /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
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
    };
    FNErrorHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FNErrorHandler.ctorParameters = function () { return [
        { type: FNErrorLogSvcs }
    ]; };
    return FNErrorHandler;
}());
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
/**
 * Created by mvasim on 12/9/17.
 */
var FnTableMetaData = /** @class */ (function () {
    function FnTableMetaData() {
    }
    return FnTableMetaData;
}());
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
var FnSessionStorage = /** @class */ (function () {
    function FnSessionStorage() {
    }
    /**
     * @param {?} fnSession
     * @return {?}
     */
    FnSessionStorage.setFnSession = /**
     * @param {?} fnSession
     * @return {?}
     */
    function (fnSession) {
        localStorage.setItem('fnSession', encodeURIComponent(JSON.stringify(fnSession)));
    };
    /**
     * @return {?}
     */
    FnSessionStorage.getFnSession = /**
     * @return {?}
     */
    function () {
        if (localStorage.getItem('fnSession') === undefined) {
            return;
        }
        return JSON.parse(decodeURIComponent(localStorage.getItem('fnSession')));
    };
    /**
     * @param {?} fnSession
     * @return {?}
     */
    FnSessionStorage.clearFnSession = /**
     * @param {?} fnSession
     * @return {?}
     */
    function (fnSession) {
        localStorage.setItem('fnSession', undefined);
    };
    return FnSessionStorage;
}());

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
var FnSessionActionType = {
    InitialzeCurrentSession: '[FnSession] initialize session',
    LoadSession: '[FnSession] Load Session',
    LoadSessionSuccess: '[FnSession] Load Success',
    LoadSessionError: '[FnSession] Load Error',
};
var InitialzeCurrentSession = /** @class */ (function () {
    function InitialzeCurrentSession() {
        this.type = FnSessionActionType.InitialzeCurrentSession;
    }
    return InitialzeCurrentSession;
}());
if (false) {
    /** @type {?} */
    InitialzeCurrentSession.prototype.type;
}
var LoadSessionSuccess = /** @class */ (function () {
    function LoadSessionSuccess(payLoad) {
        this.payLoad = payLoad;
        this.type = FnSessionActionType.LoadSessionSuccess;
    }
    return LoadSessionSuccess;
}());
if (false) {
    /** @type {?} */
    LoadSessionSuccess.prototype.type;
    /** @type {?} */
    LoadSessionSuccess.prototype.payLoad;
}
var LoadSession = /** @class */ (function () {
    function LoadSession(payLoad) {
        this.payLoad = payLoad;
        this.type = FnSessionActionType.LoadSession;
    }
    return LoadSession;
}());
if (false) {
    /** @type {?} */
    LoadSession.prototype.type;
    /** @type {?} */
    LoadSession.prototype.payLoad;
}
var LoadSessionError = /** @class */ (function () {
    function LoadSessionError(error) {
        this.error = error;
        this.type = FnSessionActionType.LoadSessionError;
    }
    return LoadSessionError;
}());
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
var FnSessionEffect = /** @class */ (function () {
    function FnSessionEffect(action$) {
        this.action$ = action$;
        this.LoadSession$ = this.action$.pipe(ofType(FnSessionActionType.LoadSession), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payLoad; })), mergeMap((/**
         * @param {?} fnSession
         * @return {?}
         */
        function (fnSession) {
            FnSessionStorage.setFnSession(fnSession);
            return of(new LoadSessionSuccess(fnSession));
        })));
    }
    FnSessionEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FnSessionEffect.ctorParameters = function () { return [
        { type: Actions }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], FnSessionEffect.prototype, "LoadSession$", void 0);
    return FnSessionEffect;
}());
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
var _initalSession = FnSessionStorage.getFnSession();
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
var initialFnSessionState = {
    currentSession: _initalSession,
    error: ""
};
/** @type {?} */
var getSessionFeatureState = createFeatureSelector("fnSession");
var ɵ0$1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.currentSession; } // may be we filter some item
;
/** @type {?} */
var getCurrentSession = createSelector(getSessionFeatureState, (ɵ0$1));
var ɵ1$1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.ssPK; };
/** @type {?} */
var getCurrent_ssPK = createSelector(getCurrentSession, (ɵ1$1));
var ɵ2$1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.sccPK; };
/** @type {?} */
var getCurretn_sccPK = createSelector(getCurrentSession, (ɵ2$1));
var ɵ3$1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.scaPK; };
/** @type {?} */
var getCurrent_scaPK = createSelector(getCurrentSession, (ɵ3$1));
var ɵ4$1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.saPK; };
/** @type {?} */
var getCurrent_saPK = createSelector(getCurrentSession, (ɵ4$1));
var ɵ5$1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.scPK; };
/** @type {?} */
var getCurrent_scPK = createSelector(getCurrentSession, (ɵ5$1));
var ɵ6$1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.scuPK; };
/** @type {?} */
var getCurrent_scuPK = createSelector(getCurrentSession, (ɵ6$1));
var ɵ7$1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.scaPK; };
/** @type {?} */
var getCurrent_sauPK = createSelector(getCurrentSession, (ɵ7$1));
var ɵ8 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.scaPK; };
/** @type {?} */
var getCurrent_wIndex = createSelector(getCurrentSession, (ɵ8));
var ɵ9 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.pid; };
/** @type {?} */
var getCurrent_pid = createSelector(getCurrentSession, (ɵ9));
var ɵ10 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.pmid; };
/** @type {?} */
var getCurrent_pmid = createSelector(getCurrentSession, (ɵ10));
var ɵ11 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.mid; };
/** @type {?} */
var getCurrent_mid = createSelector(getCurrentSession, (ɵ11));
var ɵ12 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.sgaPK; };
/** @type {?} */
var getCurrent_sgaPK = createSelector(getCurrentSession, (ɵ12));
var ɵ13 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.baseUrl; };
/** @type {?} */
var getCurrent_baseUrl = createSelector(getCurrentSession, (ɵ13));
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function fnSessionReducer(state, action) {
    if (state === void 0) { state = initialFnSessionState; }
    switch (action.type) {
        case FnSessionActionType.InitialzeCurrentSession:
            return __assign({}, state);
        case FnSessionActionType.LoadSessionSuccess:
            return __assign({}, state, { currentSession: action.payLoad });
        case FnSessionActionType.LoadSessionError:
            return __assign({}, state, { error: action.error });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnMenuStoreService = /** @class */ (function () {
    function FnMenuStoreService(http) {
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
    FnMenuStoreService.prototype.getMenuMapOnId = /**
     * @param {?} rootMap
     * @param {?} arrayObject
     * @return {?}
     */
    function (rootMap, arrayObject) {
        if (arrayObject) {
            for (var i = 0; i < arrayObject.length; i++) {
                if (arrayObject[i][this.MENU_ID_KEY] !== 'undefined') {
                    rootMap[arrayObject[i][this.MENU_ID_KEY]] = arrayObject[i];
                    this.getMenuMapOnId(rootMap, arrayObject[i][this.MENU_ARRAY_KEY]);
                }
            }
        }
    };
    /**
     * @param {?} rootMap
     * @param {?} arrayObject
     * @param {?=} parentKey
     * @return {?}
     */
    FnMenuStoreService.prototype.simpleMenuMapOnId = /**
     * @param {?} rootMap
     * @param {?} arrayObject
     * @param {?=} parentKey
     * @return {?}
     */
    function (rootMap, arrayObject, parentKey) {
        if (arrayObject) {
            var _loop_1 = function (i) {
                if (arrayObject[i][this_1.MENU_ID_KEY] !== undefined) {
                    /** @type {?} */
                    var menuArray_1 = [];
                    if (parentKey !== undefined && rootMap[parentKey][this_1.MENU_PARENT_ARRAY_KEY] !== undefined) {
                        rootMap[parentKey][this_1.MENU_PARENT_ARRAY_KEY].forEach((/**
                         * @param {?} value
                         * @return {?}
                         */
                        function (value) {
                            menuArray_1.push(value);
                        }));
                    }
                    /** @type {?} */
                    var tempObj = {
                        id: arrayObject[i][this_1.MENU_ID_KEY], name: arrayObject[i].name, url: arrayObject[i].url,
                        len: arrayObject[i][this_1.MENU_ARRAY_KEY].length, showBreadcrum: arrayObject[i].showBreadcrum
                    };
                    menuArray_1.push(tempObj);
                    rootMap[arrayObject[i][this_1.MENU_ID_KEY]] = {};
                    //  rootMap[arrayObject[i][this.MENU_ID_KEY]] = menuArray;
                    rootMap[arrayObject[i][this_1.MENU_ID_KEY]][this_1.MENU_INFO_KEY] = tempObj;
                    rootMap[arrayObject[i][this_1.MENU_ID_KEY]][this_1.MENU_PARENT_ARRAY_KEY] = menuArray_1;
                    this_1.simpleMenuMapOnId(rootMap, arrayObject[i][this_1.MENU_ARRAY_KEY], arrayObject[i][this_1.MENU_ID_KEY]);
                }
            };
            var this_1 = this;
            for (var i = 0; i < arrayObject.length; i++) {
                _loop_1(i);
            }
        }
    };
    /**
     * @param {?} menuId
     * @return {?}
     */
    FnMenuStoreService.prototype.getMenuData = /**
     * @param {?} menuId
     * @return {?}
     */
    function (menuId) {
        return this.http.get('https://raw.githubusercontent.com/VasimHayat/mock_data/master/menu.json')
            .pipe(
        // tslint:disable-next-line: no-string-literal
        map((/**
         * @param {?} menuData
         * @return {?}
         */
        function (menuData) { return menuData.menuDataHash.menuData; })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })));
    };
    FnMenuStoreService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FnMenuStoreService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ FnMenuStoreService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FnMenuStoreService_Factory() { return new FnMenuStoreService(ɵɵinject(HttpClient)); }, token: FnMenuStoreService, providedIn: "root" });
    return FnMenuStoreService;
}());
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
var FnMenuEffects = /** @class */ (function () {
    function FnMenuEffects(actions$, fnMenuSvcs) {
        var _this = this;
        this.actions$ = actions$;
        this.fnMenuSvcs = fnMenuSvcs;
        this.loadMenuData$ = this.actions$.pipe(ofType(FnMenuActionType.LoadMenuData), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.fnMenuSvcs.getMenuData(action).pipe(map((/**
             * @param {?} menuData
             * @return {?}
             */
            function (menuData) {
                // tslint:disable-next-line: prefer-const
                /** @type {?} */
                var menuItemMap = {};
                menuItemMap[menuData.id] = {};
                // tslint:disable-next-line: prefer-const
                /** @type {?} */
                var menuItemDetailMap = {};
                menuItemDetailMap[menuData.id] = menuData;
                _this.fnMenuSvcs.simpleMenuMapOnId(menuItemMap, menuData.menuItemArray);
                _this.fnMenuSvcs.getMenuMapOnId(menuItemDetailMap, menuData.menuItemArray);
                return new LoadMenuDataSucess(menuData, menuItemMap, menuItemDetailMap, true);
            })), catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return of(new LoadMenuDataError(err)); })));
        })));
    }
    FnMenuEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FnMenuEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: FnMenuStoreService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], FnMenuEffects.prototype, "loadMenuData$", void 0);
    return FnMenuEffects;
}());
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
var FoundationModule = /** @class */ (function () {
    function FoundationModule() {
    }
    /**
     * @return {?}
     */
    FoundationModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FoundationModule,
            providers: [FnApplicationHelper, FnApplication, FnUtilService, FnCookieService, FnExceptionService, FNErrorLogSvcs, FNErrorHandler]
        };
    };
    FoundationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        FnTableComponent, FnPaginationComponent, FnTableSearchComponent, FnMenuSidebarComponent, FnMenuItemComponent,
                        FnMenuLandingComponent
                    ],
                    imports: [
                        FormsModule, CommonModule
                    ],
                    exports: [
                        FnTableComponent, FnPaginationComponent, FnTableSearchComponent, FnMenuSidebarComponent, FnMenuItemComponent,
                        FnMenuLandingComponent
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    providers: [FnApplicationHelper, FnApplication, FnUtilService, FnCookieService, FnExceptionService, FNErrorLogSvcs, FNErrorHandler]
                },] }
    ];
    return FoundationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Vasim Hayat @ 2/10/2018
 */
var FnLangConstant = /** @class */ (function () {
    function FnLangConstant() {
    }
    FnLangConstant.APP_LANGUAGE_HASH = {
        en: { langCode: 'en', flag: 'flag-icon-us', icon: 'app/extra/icons/usa_square_icon_64.png', name: 'EN', descriptoin: 'English' },
        es: { langCode: 'es', flag: 'flag-icon-es', icon: 'app/extra/icons/spain_square_icon_64.png', name: 'ES', descriptoin: 'Spanish' },
        fr: { langCode: 'fr', flag: 'flag-icon-fr', icon: 'app/extra/icons/france_square_icon_64.png', name: 'FR', descriptoin: 'French' },
        zh: { langCode: 'zh', flag: 'flag-icon-cn', icon: 'app/extra/icons/china_square_icon_64.png', name: 'ZH', descriptoin: 'Chines' },
        it: { langCode: 'it', flag: 'flag-icon-it', icon: 'app/extra/icons/italy_square_icon_64.png', name: 'IT', descriptoin: 'Italian' },
        de: { langCode: 'de', flag: 'flag-icon-de', icon: 'app/extra/icons/germany_square_icon_64.png', name: 'DE', descriptoin: 'Germany' }
    };
    FnLangConstant.APP_LANGUAGES = [
        FnLangConstant.APP_LANGUAGE_HASH.en,
        FnLangConstant.APP_LANGUAGE_HASH.es,
        FnLangConstant.APP_LANGUAGE_HASH.fr,
        FnLangConstant.APP_LANGUAGE_HASH.zh,
        FnLangConstant.APP_LANGUAGE_HASH.it,
        FnLangConstant.APP_LANGUAGE_HASH.de
    ];
    return FnLangConstant;
}());
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
var  /**
 * @abstract
 */
FnClickListner = /** @class */ (function () {
    function FnClickListner(excptionSvcs) {
        this.excptionSvcs = excptionSvcs;
    }
    /**
     * @param {?} eventId
     * @param {...?} restParams
     * @return {?}
     */
    FnClickListner.prototype.click = /**
     * @param {?} eventId
     * @param {...?} restParams
     * @return {?}
     */
    function (eventId) {
        var restParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restParams[_i - 1] = arguments[_i];
        }
        try {
            /** @type {?} */
            var t0 = performance.now();
            this.execute(eventId, restParams);
            /** @type {?} */
            var t1 = performance.now();
            console.log('Call to execute took ' + (t1 - t0) + ' milliseconds.');
        }
        catch (e) {
            this.excptionSvcs.logException(e);
            // throw new Error(e);
        }
    };
    return FnClickListner;
}());
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
    var numStr = num.toString();
    /** @type {?} */
    var dotIndex = numStr.indexOf('.');
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
var FnDateFormatter = /** @class */ (function () {
    function FnDateFormatter() {
        this.weekFullEn = ["Sunday", "Monday", "Tuesday",
            "Wednesday", "Thursday", "Friday", "Saturday"];
        this.weekJp = ["日", "月", "火", "水", "木", "金", "土"];
        this.monthFullEn = ["January", "February", "March", "ril", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        this.monthOldJp = ["睦月", "如月", "弥生", "卯月", "皐月", "水無月",
            "文月", "葉月", "長月", "神無月", "霜月", "師走"];
        this.dateSuffix = [
            "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th",
            "th", "th", "th", "th", "th", "th", "th", "th", "th", "th",
            "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "st"
        ];
    }
    /**
     * @param {?=} d
     * @param {?=} pattern
     * @param {?=} langId
     * @return {?}
     */
    FnDateFormatter.prototype.format = /**
     * @param {?=} d
     * @param {?=} pattern
     * @param {?=} langId
     * @return {?}
     */
    function (d, pattern, langId) {
        if (langId == "undefined" || langId == null || langId.trim() == "") {
            langId = "NoLang";
        }
        if (typeof pattern != "string")
            return;
        /** @type {?} */
        var dYear = d.getFullYear();
        /** @type {?} */
        var dMonth = d.getMonth();
        /** @type {?} */
        var dDate = d.getDate();
        /** @type {?} */
        var dDay = d.getDay();
        /** @type {?} */
        var dHours = d.getHours();
        /** @type {?} */
        var dMinutes = d.getMinutes();
        /** @type {?} */
        var dSeconds = d.getSeconds();
        /** @type {?} */
        var res = "";
        if (pattern === "RIB") {
            res = this.from24to12(dHours) + (":" + this.preZero(dMinutes)) + this.ap(dHours);
        }
        else if (pattern === "RIB_DT") {
            res = this.preZero(dMonth + 1) + '/' + this.preZero(dDate) + '/' + dYear + " " + this.from24to12(dHours) + (":" + this.preZero(dMinutes)) + this.ap(dHours);
        }
        else {
            for (var i = 0, len = pattern.length; i < len; i++) {
                /** @type {?} */
                var c = pattern.charAt(i);
                switch (c) {
                    case "#":
                        if (i == len - 1)
                            break;
                        res += pattern.charAt(++i);
                        break;
                    case "Y":
                        res += dYear;
                        break;
                    case "y":
                        res += dYear.toString().substr(2, 2);
                        break;
                    case "m":
                        res += this.preZero(dMonth + 1);
                        break;
                    case "M":
                        res += dMonth + 1;
                        break;
                    case "d":
                        res += this.preZero(dDate);
                        break;
                    case "j":
                        res += dDate;
                        break;
                    case "w":
                        res += dDay;
                        break;
                    case "N":
                        res += this.isoDay(dDay);
                        break;
                    case "l":
                        if (langId != "NoLang") {
                            res += this.weekFullInLocal(langId, dDay);
                            break;
                        }
                        res += this.weekFullEn[dDay];
                        break;
                    case "D":
                        if (langId != "NoLang") {
                            res += this.getDayInLocal(langId, dDay);
                            break;
                        }
                        res += this.weekFullEn[dDay].substr(0, 3);
                        break;
                    case "X":
                        if (langId != "NoLang") {
                            res += this.getDayInShortLocal(langId, dDay);
                            break;
                        }
                        res += this.weekFullEn[dDay].substr(0, 1);
                        break;
                    case "J":
                        res += this.weekJp[dDay];
                        break;
                    case "F":
                        if (langId != "NoLang") {
                            res += this.getMonthInLocal(langId, dMonth);
                            break;
                        }
                        res += this.monthFullEn[dMonth];
                        break;
                    case "R":
                        if (langId != "NoLang") {
                            res += this.getMonthAbbrInLocal(langId, dMonth);
                            break;
                        }
                        res += this.monthFullEn[dMonth].substr(0, 3);
                        break;
                    case "O":
                        res += this.monthOldJp[dMonth];
                        break;
                    case "a":
                        res += this.ampm(dHours);
                        break;
                    case "P":
                        res += this.ap(dHours);
                        break;
                    case "A":
                        res += this.ampm(dHours).toUpperCase();
                        break;
                    case "H":
                        res += this.preZero(dHours);
                        break;
                    case "h":
                        res += this.preZero(this.from24to12(dHours));
                        break;
                    case "g":
                        res += this.from24to12(dHours);
                        break;
                    case "G":
                        res += dHours;
                        break;
                    case "i":
                        res += this.preZero(dMinutes);
                        break;
                    case "s":
                        res += this.preZero(dSeconds);
                        break;
                    case "t":
                        res += this.lastDayOfMonth(d);
                        break;
                    case "L":
                        res += this.isLeapYear(dYear);
                        break;
                    case "z":
                        res += this.dateCount(dYear, dMonth, dDate);
                        break;
                    case "S":
                        res += this.dateSuffix[dDate - 1];
                        break;
                    default:
                        res += c;
                        break;
                }
            }
        }
        return res;
    };
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    FnDateFormatter.prototype.preZero = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (parseInt(value) < 10) ? "0" + value : value;
    };
    ;
    /**
     * @param {?} hours
     * @return {?}
     */
    FnDateFormatter.prototype.from24to12 = /**
     * @param {?} hours
     * @return {?}
     */
    function (hours) {
        return (hours > 12) ? hours - 12 : (hours == 0 ? 12 : hours);
    };
    ;
    /**
     * @param {?} hours
     * @return {?}
     */
    FnDateFormatter.prototype.ampm = /**
     * @param {?} hours
     * @return {?}
     */
    function (hours) {
        return (hours < 12) ? "am" : "pm";
    };
    ;
    /**
     * @param {?} hours
     * @return {?}
     */
    FnDateFormatter.prototype.ap = /**
     * @param {?} hours
     * @return {?}
     */
    function (hours) {
        return (hours < 12) ? "a" : "p";
    };
    ;
    /**
     * @param {?} day
     * @return {?}
     */
    FnDateFormatter.prototype.isoDay = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        return (day == 0) ? "7" : day;
    };
    ;
    /**
     * @param {?} dateObj
     * @return {?}
     */
    FnDateFormatter.prototype.lastDayOfMonth = /**
     * @param {?} dateObj
     * @return {?}
     */
    function (dateObj) {
        /** @type {?} */
        var tmp = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 1);
        tmp.setTime(tmp.getTime() - 1);
        return tmp.getDate();
    };
    ;
    /**
     * @param {?} year
     * @return {?}
     */
    FnDateFormatter.prototype.isLeapYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var tmp = new Date(year, 0, 1);
        /** @type {?} */
        var sum = 0;
        for (var i = 0; i < 12; i++) {
            tmp.setMonth(i);
            sum += this.lastDayOfMonth(tmp);
        }
        return (sum == 365) ? "0" : "1";
    };
    ;
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    FnDateFormatter.prototype.dateCount = /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    function (year, month, date) {
        /** @type {?} */
        var tmp = new Date(year, 0, 1);
        /** @type {?} */
        var sum = -1;
        for (var i = 0; i < month; i++) {
            tmp.setMonth(i);
            sum += this.lastDayOfMonth(tmp);
        }
        return sum + date;
    };
    ;
    /**
     * @param {?} lngIID
     * @param {?} month
     * @return {?}
     */
    FnDateFormatter.prototype.getMonthAbbrInLocal = /**
     * @param {?} lngIID
     * @param {?} month
     * @return {?}
     */
    function (lngIID, month) {
        /** @type {?} */
        var lagnHash = {
            "es": ["ene", "feb", "mar", "abr", "may", "jun",
                "jul", "ago", "sep", "oct", "nov", "dic"],
            "en": ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            "fr": ["&#106;&#97;&#110;&#118;", "&#102;&#101;&#118;&#114;", "&#109;&#97;&#114;&#115;", "&#97;&#118;&#114;&#105;&#108;", "&#109;&#97;&#105;", " &#106;&#117;&#105;&#110;",
                "&#106;&#117;&#105;&#108;", "&#97;&#111;&#117;&#116;", "&#115;&#101;&#112;&#116;", "&#111;&#99;&#116;", "&#110;&#111;&#118;", "&#100;&#101;&#99;"],
            "zh": ["&#19968;&#26376;", "&#20108;&#26376;", " &#19977;&#26376;", "&#22235;&#26376;", "&#20116;&#26376;", "&#20845;&#26376;",
                "&#19971;&#26376;", "&#19971;&#26376;", "&#20061;&#26376;", " &#21313;&#26376;", " &#21313;&#19968;&#26376;", " &#21313;&#20108;&#26376;"],
            "de": ["Jan", "Feb.", "März", "Apr.", "Mai", "Juni",
                "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez"],
            "it": ["genn", "febbr", "mar", "apr", "magg", "giugno",
                "luglio", "ag", "sett", "ott", "nov", "dic"]
        };
        return lagnHash[lngIID][month];
    };
    ;
    /**
     * @param {?} lngIID
     * @param {?} month
     * @return {?}
     */
    FnDateFormatter.prototype.getMonthInLocal = /**
     * @param {?} lngIID
     * @param {?} month
     * @return {?}
     */
    function (lngIID, month) {
        /** @type {?} */
        var lagnHash = {
            "es": ["enero", "febrero", "marzo", "abril", "mayo", "junio",
                "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            "en": ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"],
            "fr": ["janvier", "février", "mars", "avril", "mai", "juin",
                "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            "zh": ["&#19968;&#26376;", "&#20108;&#26376;", " &#19977;&#26376;", "&#22235;&#26376;", "&#20116;&#26376;", "&#20845;&#26376;",
                "&#19971;&#26376;", "&#19971;&#26376;", "&#20061;&#26376;", " &#21313;&#26376;", " &#21313;&#19968;&#26376;", " &#21313;&#20108;&#26376;"],
            "de": ["Januar", "Februar", "Marz", "April", "Mai", "Juni",
                "Juli", "August", "September", "Oktober", "November", "Dezember"],
            "it": ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
                "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
        };
        return lagnHash[lngIID][month];
    };
    ;
    /**
     * @param {?} lngIID
     * @param {?} day
     * @return {?}
     */
    FnDateFormatter.prototype.getDayInLocal = /**
     * @param {?} lngIID
     * @param {?} day
     * @return {?}
     */
    function (lngIID, day) {
        /** @type {?} */
        var lagnHash = {
            "es": ["Dom", "Lu", "Ma", "Mx", "Ju", "Vi", "Sab"],
            "en": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            "fr": ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            "zh": ["&#21608;&#26085;", "&#21608;&#19968;", "&#21608;&#20108;", "&#21608;&#19977;", "&#21608;&#22235;", "&#21608;&#20116;", "&#21608;&#20845;"],
            "de": ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            "it": ["dom", "lun", "mar", "mer", "gio", "ven", "sab"]
        };
        return lagnHash[lngIID][day];
    };
    ;
    /**
     * @param {?} langId
     * @param {?} dayIndex
     * @return {?}
     */
    FnDateFormatter.prototype.weekFullInLocal = /**
     * @param {?} langId
     * @param {?} dayIndex
     * @return {?}
     */
    function (langId, dayIndex) {
        /** @type {?} */
        var dayHashOnLang = {
            "en": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "es": ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            "fr": ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            "zh": ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            "de": ["Sonntag", "Montag", "Dienstag	", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            "it": ["domenica", "luned\u00ec", "marted\u00ec", "mercoled\u00ec", "gioved\u00ec", "venerd\u00ec", "sabato"]
        };
        return dayHashOnLang[langId][dayIndex];
    };
    ;
    /**
     * @param {?} lngIID
     * @param {?} day
     * @return {?}
     */
    FnDateFormatter.prototype.getDayInShortLocal = /**
     * @param {?} lngIID
     * @param {?} day
     * @return {?}
     */
    function (lngIID, day) {
        /** @type {?} */
        var lagnHash = {
            "es": ["D", "L", "M", "M", "J", "V", "S"],
            "en": ["S", "M", "T", "W", "T", "F", "S"],
            "fr": ["D", "L", "M", "M", "J", "V", "S"],
            "zh": ["&#21608;&#26085;", "&#21608;&#19968;", "&#21608;&#20108;", "&#21608;&#19977;", "&#21608;&#22235;", "&#21608;&#20116;", "&#21608;&#20845;"],
            "de": ["S", "M", "D", "M", "D", "F", "S"],
            "it": ["d", "l", "m", "m", "g", "v", "s"]
        };
        return lagnHash[lngIID][day];
    };
    return FnDateFormatter;
}());
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
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
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
    return this.indexOf(str) == 0;
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
 * @param {?} string
 * @return {?}
 */
function (string) {
    return this.substr(0, this.indexOf(string));
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
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof (str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
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
    var date = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    date.setMinutes(minutes);
    return date;
});
Date.prototype.timeForZoneOffset = (/**
 * @param {?} offset
 * @return {?}
 */
function (offset) {
    /** @type {?} */
    var utc = this.getTime() + (this.getTimezoneOffset() * 60000);
    /** @type {?} */
    var newDate = new Date(utc + (3600000 * offset));
    return newDate;
});
Date.prototype.getWeek = (/**
 * @return {?}
 */
function () {
    /** @type {?} */
    var onejan = new Date(this.getFullYear(), 0, 1);
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
    var nextDate = this;
    if (numOfDays === undefined || numOfDays === 0)
        return nextDate;
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
    return this.formatter("RIB");
});
Date.prototype.addDays = (/**
 * @param {?} days
 * @return {?}
 */
function (days) {
    if (!days)
        return this;
    console.log(this);
    /** @type {?} */
    var date = this;
    date.setDate(date.getDate() + days);
    return date;
});
Date.prototype.isToday = (/**
 * @return {?}
 */
function () {
    /** @type {?} */
    var today = new Date();
    return this.isSameDate(today);
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
/** @type {?} */
var EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
/** @type {?} */
var FLOAT_NUM_REGEX = /\d+(\.\d+)?(?=$| )|\.\d+(?=$| )|\d+(\.)?(?=$| )$/;
/** @type {?} */
var FLOAT_NUM_WITH_NEG_REGEX = /^d$/;
///(?<=^| )[-]?\d+(\.\d+)?(?=$| )|(?<=^| )[-]?\.\d+(?=$| )|(?<=^| )[-]?\d+(\.)?(?=$| )$/;
/** @type {?} */
var VALIDATOR_MAP = {
    REQUIRED: 'REQUIRED',
    MIN_LENGTH: 'MIN_LENGTH',
    MAX_LENGTH: 'MAX_LENGTH',
    EMAIL: 'EMAIL'
};
/** @type {?} */
var FN_INPUT_TYPES = {
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
var FnNumberDirective = /** @class */ (function () {
    function FnNumberDirective(model, elementRef) {
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
    FnNumberDirective.prototype.removeSelectedVal = /**
     * @return {?}
     */
    function () {
        this.selectedVal = window.getSelection().toString();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    FnNumberDirective.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // tslint:disable-next-line: no-string-literal
        /** @type {?} */
        var isNotAddingBeforMinus = !(e.target['value'].indexOf('-') === 0 && e.target['selectionStart'] === 0);
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
    };
    /**
     * @param {?} e
     * @return {?}
     */
    FnNumberDirective.prototype.onKeyUp = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.isDecimal) {
            return;
        }
        else {
            this.decimalCounter = this.nativeElement.value.split('.').length - 1;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FnNumberDirective.prototype.onPaste = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.removeSelectedVal();
        /** @type {?} */
        var pastedInput = event.clipboardData.getData('text/plain');
        if (this.isValidPastString(pastedInput, event)) {
            document.execCommand('insertText', false, pastedInput);
        }
        else {
            document.execCommand('insertText', false, this.selectedVal);
        }
        event.preventDefault();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FnNumberDirective.prototype.onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var textData = event.dataTransfer.getData('text');
        this.nativeElement.focus();
        this.removeSelectedVal();
        if (this.isValidPastString(textData, event)) {
            document.execCommand('insertText', false, textData);
        }
        else {
            document.execCommand('insertText', false, this.selectedVal);
        }
        event.preventDefault();
    };
    /**
     * @param {?} eventKey
     * @param {?} isNotAddingDotBeforMinus
     * @return {?}
     */
    FnNumberDirective.prototype.isDigit = /**
     * @param {?} eventKey
     * @param {?} isNotAddingDotBeforMinus
     * @return {?}
     */
    function (eventKey, isNotAddingDotBeforMinus) {
        return ((eventKey >= '0' && eventKey <= '9') && isNotAddingDotBeforMinus);
    };
    /**
     * @return {?}
     */
    FnNumberDirective.prototype.isAllTextSelected = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var valueLen = this.nativeElement.value.trim().length;
        return valueLen === 0;
    };
    /**
     * @param {?} event
     * @param {?} isNotAddingDotBeforMinus
     * @return {?}
     */
    FnNumberDirective.prototype.isValidKey = /**
     * @param {?} event
     * @param {?} isNotAddingDotBeforMinus
     * @return {?}
     */
    function (event, isNotAddingDotBeforMinus) {
        /** @type {?} */
        var key = event.key;
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
    };
    // Used only for copy paste data
    // Used only for copy paste data
    /**
     * @param {?} inputVal
     * @param {?} event
     * @return {?}
     */
    FnNumberDirective.prototype.isValidPastString = 
    // Used only for copy paste data
    /**
     * @param {?} inputVal
     * @param {?} event
     * @return {?}
     */
    function (inputVal, event) {
        /** @type {?} */
        var startCursorposition = event.target.selectionStart;
        /** @type {?} */
        var endCursorposition = event.target.selectionEnd;
        return this.isAllowPastingOrDroping(this.replaceBetween(startCursorposition, endCursorposition, inputVal)) ? this.isDecimal ?
            this.isValidDecimal(inputVal, startCursorposition) : this.isValidNumber(inputVal, startCursorposition) : false;
    };
    /**
     * @param {?} inputVal
     * @param {?} startCursorposition
     * @return {?}
     */
    FnNumberDirective.prototype.isValidNumber = /**
     * @param {?} inputVal
     * @param {?} startCursorposition
     * @return {?}
     */
    function (inputVal, startCursorposition) {
        return this.isNegative && startCursorposition === 0 ? /^[-]?[0-9]+$/.test(inputVal) : /^[0-9]+$/.test(inputVal);
    };
    /**
     * @param {?} inputVal
     * @param {?} startCursorposition
     * @return {?}
     */
    FnNumberDirective.prototype.isValidDecimal = /**
     * @param {?} inputVal
     * @param {?} startCursorposition
     * @return {?}
     */
    function (inputVal, startCursorposition) {
        return this.isNegative && startCursorposition === 0 ? FLOAT_NUM_WITH_NEG_REGEX.test(inputVal) : FLOAT_NUM_REGEX.test(inputVal);
    };
    /**
     * @param {?} start
     * @param {?} end
     * @param {?} inputVal
     * @return {?}
     */
    FnNumberDirective.prototype.replaceBetween = /**
     * @param {?} start
     * @param {?} end
     * @param {?} inputVal
     * @return {?}
     */
    function (start, end, inputVal) {
        /** @type {?} */
        var value = this.nativeElement.val;
        return value !== undefined && value !== '' ? value.substring(0, start) + inputVal + value.substring(end) : inputVal;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    FnNumberDirective.prototype.isAllowPastingOrDroping = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return FLOAT_NUM_WITH_NEG_REGEX.test(val);
    };
    FnNumberDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[fnNumberDirective]',
                    providers: [NgModel]
                },] }
    ];
    /** @nocollapse */
    FnNumberDirective.ctorParameters = function () { return [
        { type: NgModel },
        { type: ElementRef }
    ]; };
    FnNumberDirective.propDecorators = {
        isNegative: [{ type: Input }],
        isDecimal: [{ type: Input }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        onKeyUp: [{ type: HostListener, args: ['keyup', ['$event'],] }],
        onPaste: [{ type: HostListener, args: ['paste', ['$event'],] }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
    };
    return FnNumberDirective;
}());
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
var FnCurrencyDirective = /** @class */ (function (_super) {
    __extends(FnCurrencyDirective, _super);
    // isValidDot(key, val) {
    //     return ((key == '.') && val.toString().indexOf('.') === -1)
    // }
    function FnCurrencyDirective(model, elementRef) {
        var _this = _super.call(this, model, elementRef) || this;
        _this.format = '$';
        _this.whiteSpace = ' ';
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    FnCurrencyDirective.prototype.handleKeyboardEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // return this.isDigit(event.key) || this.isValidDot(event.key, event.target.value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FnCurrencyDirective.prototype.onBlur = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value.length === 1 && value.toString().indexOf('.') === 0) {
            this.model.update.emit('');
        }
        else if (this.model.valid && value !== '') {
            this.model.valueAccessor.writeValue(this.format + this.whiteSpace + String(parseFloat(value).toFixed(2)));
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FnCurrencyDirective.prototype.onFocus = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.model.valid && value !== '') {
            this.model.valueAccessor.writeValue(String(parseFloat(value.replace(this.format, '').replace(this.whiteSpace, ''))));
        }
    };
    FnCurrencyDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[fnCurrencyDirective]',
                    providers: [NgModel]
                },] }
    ];
    /** @nocollapse */
    FnCurrencyDirective.ctorParameters = function () { return [
        { type: NgModel },
        { type: ElementRef }
    ]; };
    FnCurrencyDirective.propDecorators = {
        format: [{ type: Input }],
        handleKeyboardEvent: [{ type: HostListener, args: ['keypress', ['$event'],] }],
        onBlur: [{ type: HostListener, args: ['blur', ['$event.target.value'],] }],
        onFocus: [{ type: HostListener, args: ['focus', ['$event.target.value'],] }]
    };
    return FnCurrencyDirective;
}(FnNumberDirective));
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
var FnI18nService = /** @class */ (function () {
    function FnI18nService() {
    }
    /**
     * @param {?} _i18nDataMap
     * @return {?}
     */
    FnI18nService.prototype.setI18Data = /**
     * @param {?} _i18nDataMap
     * @return {?}
     */
    function (_i18nDataMap) {
        this.i18nDataMap = _i18nDataMap;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FnI18nService.prototype.translate = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (this.i18nDataMap.hasOwnProperty(key)) {
            return this.i18nDataMap[key] || key;
        }
        else {
            return key;
        }
    };
    /**
     * @param {?} fieldKey
     * @param {?} validatorType
     * @return {?}
     */
    FnI18nService.prototype.errorMessage = /**
     * @param {?} fieldKey
     * @param {?} validatorType
     * @return {?}
     */
    function (fieldKey, validatorType) {
        return fieldKey + '_' + validatorType;
    };
    FnI18nService.decorators = [
        { type: Injectable }
    ];
    return FnI18nService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnI18nService.prototype.i18nDataMap;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnTranslatePipe = /** @class */ (function () {
    function FnTranslatePipe(i18n, render) {
        this.i18n = i18n;
        this.render = render;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    FnTranslatePipe.prototype.transform = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var _span = this.render.createElement('span');
        this.render.setProperty(_span, 'innerHTML', this.i18n.translate(key));
        return _span.textContent;
    };
    FnTranslatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'fnTranslate'
                },] }
    ];
    /** @nocollapse */
    FnTranslatePipe.ctorParameters = function () { return [
        { type: FnI18nService },
        { type: Renderer2 }
    ]; };
    return FnTranslatePipe;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnTranslatePipe.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    FnTranslatePipe.prototype.render;
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
var FnInputModel = /** @class */ (function () {
    function FnInputModel() {
    }
    return FnInputModel;
}());
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
    function (control) {
        /** @type {?} */
        var pattern = new RegExp("^" + config.pattern + "$");
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
    function (control) {
        /** @type {?} */
        var pattern = config.pattern === undefined ? EMAIL_REGEX : new RegExp("^" + config.pattern + "$");
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
    function (control) {
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
    function (control) {
        /** @type {?} */
        var value = control.value || '';
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
    function (control) {
        /** @type {?} */
        var value = control.value || '';
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
var FnInputValidator = /** @class */ (function () {
    function FnInputValidator(i18nSvcs) {
        this.i18nSvcs = i18nSvcs;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    FnInputValidator.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return this.executeValidation(control, control.value);
    };
    /**
     * @param {?} control
     * @param {?} value
     * @return {?}
     */
    FnInputValidator.prototype.executeValidation = /**
     * @param {?} control
     * @param {?} value
     * @return {?}
     */
    function (control, value) {
        /** @type {?} */
        var validatorResp = null;
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
    };
    FnInputValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[fnInputValidator]',
                    providers: [{ provide: NG_VALIDATORS, useExisting: FnInputValidator, multi: true }]
                },] }
    ];
    /** @nocollapse */
    FnInputValidator.ctorParameters = function () { return [
        { type: FnI18nService }
    ]; };
    FnInputValidator.propDecorators = {
        fieldConfig: [{ type: Input }]
    };
    return FnInputValidator;
}());
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
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
FnInputValueAccessor = /** @class */ (function () {
    function FnInputValueAccessor() {
        this.propagateChange = (/**
         * @return {?}
         */
        function () { });
        this.propagateTouched = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(FnInputValueAccessor.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.innerValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.innerValue !== value) {
                this.innerValue = value;
                this.propagateChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    FnInputValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.innerValue = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FnInputValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FnInputValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    FnInputValueAccessor.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    return FnInputValueAccessor;
}());
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
var FnCoreModule = /** @class */ (function () {
    function FnCoreModule(parentModule) {
        if (parentModule) {
            throw new Error('FnCoreModule is already loaded. Import it in the  AppModule(Root Module) only');
        }
    }
    /**
     * @return {?}
     */
    FnCoreModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FnCoreModule,
            providers: [FnI18nService]
        };
    };
    FnCoreModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FnNumberDirective, FnCurrencyDirective, FnTranslatePipe, FnInputValidator],
                    imports: [FormsModule, CommonModule],
                    exports: [FnNumberDirective, FnCurrencyDirective, FnTranslatePipe, FnInputValidator],
                    providers: [FnI18nService]
                },] }
    ];
    /** @nocollapse */
    FnCoreModule.ctorParameters = function () { return [
        { type: FnCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return FnCoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnIconComponent = /** @class */ (function () {
    function FnIconComponent(change) {
        this.change = change;
        // tslint:disable-next-line: no-inferrable-types
        this.lib = 'fa';
    }
    /**
     * @return {?}
     */
    FnIconComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.contentIconCode();
    };
    /**
     * @return {?}
     */
    FnIconComponent.prototype.contentIconCode = /**
     * @return {?}
     */
    function () {
        if (this.content.nativeElement.innerText) {
            this.icon = this.content.nativeElement.innerText;
            if (this.isFullCode()) {
                this.lib = this.icon.substr(0, 2);
                this.getStyle();
            }
            this.change.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    FnIconComponent.prototype.isFullCode = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var space = this.icon.indexOf(' ');
        return space !== -1;
    };
    /**
     * @return {?}
     */
    FnIconComponent.prototype.getStyle = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fistSplit;
        /** @type {?} */
        var secondSplit;
        if (this.lib === 'fa') {
            fistSplit = 0;
            secondSplit = this.icon.indexOf(' ');
        }
        if (this.lib === 'ion') {
            fistSplit = this.icon.indexOf('-') + 1;
            secondSplit = this.icon.indexOf('-', fistSplit) - fistSplit;
        }
        this.setStyle(fistSplit, secondSplit);
    };
    /**
     * @param {?} start
     * @param {?} length
     * @return {?}
     */
    FnIconComponent.prototype.setStyle = /**
     * @param {?} start
     * @param {?} length
     * @return {?}
     */
    function (start, length) {
        this.style = this.icon.substr(start, length);
        switch (this.lib) {
            case 'dx':
                this.setIcon(16);
                break;
            case 'fa':
                /** @type {?} */
                var fistSplit = this.icon.indexOf('-') + 1;
                this.setIcon(fistSplit);
                break;
            case 'other':
                this.setIcon((start + length) + 1);
                break;
        }
    };
    /**
     * @param {?} start
     * @return {?}
     */
    FnIconComponent.prototype.setIcon = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        this.icon = this.icon.substr(start);
    };
    FnIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-icon',
                    template: " <fa-icon [icon]=\"icon\" [style]=\"style\" [size]=\"size\" [animation]=\"animation\" [color]=\"color\" [align]=\"align\"\n   *ngIf=\"lib === 'fa'\"></fa-icon>\n <div hidden #content>\n   <ng-content></ng-content>\n </div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FnIconComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
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
    return FnIconComponent;
}());
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
var FnFaIconComponent = /** @class */ (function () {
    function FnFaIconComponent() {
        this.size = '11px';
        this.PREFIX = 'fa-';
    }
    /**
     * @return {?}
     */
    FnFaIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.formatClass();
    };
    /**
     * @private
     * @return {?}
     */
    FnFaIconComponent.prototype.formatClass = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.style === undefined) {
            this.style = 'fas';
        }
        this.format = this.style + ' ';
        this.format += this.PREFIX + this.icon;
        this.format += (this.animation) ? ' anim-' + this.animation + ' animated' : '';
        this.format += (this.align) ? ' pull-' + this.align : '';
    };
    /**
     * @return {?}
     */
    FnFaIconComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.formatClass();
    };
    FnFaIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-fa-icon',
                    template: "<i class=\"{{ format }}\" [ngStyle]=\"{'font-size': size, 'color': color}\"></i>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FnFaIconComponent.ctorParameters = function () { return []; };
    FnFaIconComponent.propDecorators = {
        icon: [{ type: Input }],
        style: [{ type: Input }],
        size: [{ type: Input }],
        animation: [{ type: Input }],
        color: [{ type: Input }],
        align: [{ type: Input }]
    };
    return FnFaIconComponent;
}());
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
var FnIconModule = /** @class */ (function () {
    function FnIconModule() {
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
    return FnIconModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnButtonComponent = /** @class */ (function () {
    function FnButtonComponent(elementRef, cdr, contentObserver) {
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
    Object.defineProperty(FnButtonComponent.prototype, "textLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._textLoading;
        },
        set: /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            this._textLoading = text;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FnButtonComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.contentObserver
            .observe(this.buttonElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this.checkContent(); }));
        }));
    };
    /**
     * @return {?}
     */
    FnButtonComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    // ngOnChanges(changes: SimpleChanges): void {
    // }
    // ngOnChanges(changes: SimpleChanges): void {
    // }
    /**
     * @return {?}
     */
    FnButtonComponent.prototype.checkContent = 
    // ngOnChanges(changes: SimpleChanges): void {
    // }
    /**
     * @return {?}
     */
    function () {
        if (!((/** @type {?} */ (this.cdr))).destroyed) {
            this.cdr.detectChanges();
        }
    };
    FnButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-button',
                    template: "<button #fnbutton [id]=\"id\" cdkTrapFocus attr.tabindex=\"-1\"\n  [ngStyle]=\"{'min-width': width, 'height': height, 'border-radius': flatBorder ? '0' : '3px', 'line-height': height }\"\n  [ngClass]=\"{'disabled ': disabled, 'outline': outline}\" [class]=\"'fn-button btn  btn-'+ type+' '+shape\"\n  [disabled]=\"( disabled || isLoading ) ? true : null\" attr.fnId=\"{{id}}\">\n  <ng-container *ngTemplateOutlet=\"template ? template : templateContent\"></ng-container>\n</button>\n<ng-template #templateContent>\n  <fn-icon *ngIf=\"iconAddonBefore\" [id]=\"'iconAddonBefore_'+id\" attr.fnId=\"{{id}}\" [class]=\"type + ' iconAddonBefore'\">\n    {{ iconAddonBefore }}\n  </fn-icon>\n  <div class=\"button-content\" [style.lineHeight]=\"height\" [id]=\"'button-content_'+id\" attr.fnId=\"{{id}}\">\n    <span class=\"label\" *ngIf=\"!isLoading\" attr.fnId=\"{{id}}\">{{ text }}</span>\n    <span class=\"label\" *ngIf=\"isLoading\" attr.fnId=\"{{id}}\">{{ textLoading }}</span>\n  </div>\n  <fn-icon *ngIf=\"iconAddonAfter\" attr.fnId=\"{{id}}\" [id]=\"'iconAddonAfter_'+id\" [class]=\"type + ' iconAddonAfter'\"\n    [ngStyle]=\"{'line-height': 'calc(' + height + ' - 1px)'}\">{{ iconAddonAfter }}\n  </fn-icon>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".fn-button{font-family:\"Segoe UI\",Lato,sans-serif,Arial;font-size:.9em;padding:0;margin:0;outline:0;cursor:pointer;box-sizing:border-box}.fn-button .iconAddonAfter,.fn-button .iconAddonBefore{box-sizing:border-box;padding:0 15px;pointer-events:none}.fn-button .button-content{display:flex;padding:.375rem .75rem;align-items:center;margin:auto;place-content:center;width:100%}fn-button .button-content .label{padding:0 10px}"]
                }] }
    ];
    /** @nocollapse */
    FnButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: ContentObserver }
    ]; };
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
    return FnButtonComponent;
}());
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
var FnButtonModule = /** @class */ (function () {
    function FnButtonModule() {
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
    return FnButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnSwitchComponent = /** @class */ (function () {
    function FnSwitchComponent(cdr) {
        this.cdr = cdr;
        this.checked = false;
        this.isDisabled = false;
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    FnSwitchComponent.prototype.clickEvent = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        if (!this.isDisabled) {
            this.updateValue(!this.checked);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FnSwitchComponent.prototype.updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.checked !== value) {
            this.checked = value;
            this.onChange(this.checked);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    FnSwitchComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.isDisabled) {
            // tslint:disable-next-line: deprecation
            /** @type {?} */
            var keyCode = e.keyCode;
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
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FnSwitchComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FnSwitchComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FnSwitchComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    FnSwitchComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    FnSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-switch',
                    template: "<button type=\"button\" class=\"fn-switch\" [disabled]=\"isDisabled\" [class.fn-switch-checked]=\"checked\"\n  [class.ant-switch-disabled]=\"isDisabled\" [class.fn-switch-small]=\"fnSize === 'small'\" [class.fn-switch-large]=\"fnSize\n  === 'large'\" (click)=\"clickEvent($event)\" (keydown)=\"onKeyDown($event)\">\n\n  <span class=\"fn-switch-inner\">\n    <span>\n      <ng-container *ngIf=\"checked\">\n        <ng-container *ngTemplateOutlet=\"checkedTemplate || defaultTemplate\"> </ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"!checked\">\n        <ng-container *ngTemplateOutlet=\"unCheckedTemplate || defaultTemplate\"> </ng-container>\n      </ng-container>\n      <ng-template #defaultTemplate>\n        {{checked?'Yes':'No'}}\n      </ng-template>\n    </span>\n  </span>\n</button>\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return FnSwitchComponent; })),
                            multi: true
                        }
                    ],
                    styles: [".fn-switch{margin:0;padding:0;color:rgba(0,0,0,.65);font-size:14px;list-style:none;position:relative;display:inline-block;box-sizing:border-box;min-width:44px;height:30px;line-height:28px;vertical-align:middle;background-color:rgba(0,0,0,.25);border:1px solid transparent;border-radius:100px;cursor:pointer;transition:.36s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}button,input{overflow:visible}button,select{text-transform:none}.fn-switch-inner{display:block;margin-right:12px;margin-left:34px;color:#fff;font-size:14px}.fn-switch-checked{background-color:#1890ff}.fn-switch-checked .fn-switch-inner{margin-right:34px;margin-left:12px}.fn-switch::after{position:absolute;top:1px;left:1px;width:26px;height:26px;background-color:#fff;border-radius:26px;cursor:pointer;transition:.36s cubic-bezier(.78,.14,.15,.86);content:\"|||\";box-shadow:0 2px 4px 0 rgba(0,35,11,.2);font-size:9px;line-height:25px;letter-spacing:2px;text-indent:2px}.fn-switch-checked::after{left:100%;margin-left:-1px;transform:translateX(-100%)}.fn-switch-large{min-width:48px;height:36px;line-height:14px}.fn-switch-large .fn-switch-inner{margin-right:14px;margin-left:42px;font-size:16px}.fn-switch-large.fn-switch-checked .fn-switch-inner{margin-right:42px;margin-left:14px}.fn-switch-large::after{width:32px;height:32px;font-size:15px;line-height:28px}.fn-switch-small{min-width:38px;height:24px;line-height:18px}.fn-switch-small .fn-switch-inner{margin-right:10px;margin-left:25px;font-size:12px}.fn-switch-small.fn-switch-checked .fn-switch-inner{margin-right:25px;margin-left:10px}.fn-switch-small::after{width:20px;height:20px;font-size:11px;line-height:18px}.fn-switch .checked-text{display:none}.fn-switch .unchecked-text,.fn-switch.fn-switch-checked .checked-text{display:block}.fn-switch.fn-switch-checked .unchecked-text{display:none}"]
                }] }
    ];
    /** @nocollapse */
    FnSwitchComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    FnSwitchComponent.propDecorators = {
        fnSize: [{ type: Input }],
        isDisabled: [{ type: Input }],
        checkedTemplate: [{ type: Input }],
        unCheckedTemplate: [{ type: Input }]
    };
    return FnSwitchComponent;
}());
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
var FnSwitchModule = /** @class */ (function () {
    function FnSwitchModule() {
    }
    FnSwitchModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FnSwitchComponent],
                    imports: [CommonModule, FormsModule],
                    exports: [FnSwitchComponent],
                },] }
    ];
    return FnSwitchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnUiFieldMetaDataService = /** @class */ (function () {
    function FnUiFieldMetaDataService() {
    }
    /**
     * @param {?} uiFieldKey
     * @return {?}
     */
    FnUiFieldMetaDataService.prototype.getFieldForId = /**
     * @param {?} uiFieldKey
     * @return {?}
     */
    function (uiFieldKey) {
        return this.uiFieldMap[uiFieldKey];
    };
    /**
     * @param {?} uiFieldKey
     * @param {?} uiFieldVal
     * @return {?}
     */
    FnUiFieldMetaDataService.prototype.setFieldForId = /**
     * @param {?} uiFieldKey
     * @param {?} uiFieldVal
     * @return {?}
     */
    function (uiFieldKey, uiFieldVal) {
        this.uiFieldMap[uiFieldKey] = uiFieldVal;
    };
    /**
     * @param {?} uiFieldMap
     * @return {?}
     */
    FnUiFieldMetaDataService.prototype.setFieldMap = /**
     * @param {?} uiFieldMap
     * @return {?}
     */
    function (uiFieldMap) {
        this.uiFieldMap = uiFieldMap;
    };
    /**
     * @return {?}
     */
    FnUiFieldMetaDataService.prototype.getFieldMap = /**
     * @return {?}
     */
    function () {
        return this.uiFieldMap;
    };
    FnUiFieldMetaDataService.decorators = [
        { type: Injectable }
    ];
    return FnUiFieldMetaDataService;
}());
if (false) {
    /** @type {?} */
    FnUiFieldMetaDataService.prototype.uiFieldMap;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnBaseInputComponent = /** @class */ (function (_super) {
    __extends(FnBaseInputComponent, _super);
    function FnBaseInputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @ts-ignore
        _this.inputTypeMap = FN_INPUT_TYPES;
        _this.textAlign = 'left';
        _this.isErrorBox = true;
        _this.minLength = 0;
        _this.isRequired = false;
        _this.maxLength = 255;
        _this.readonly = null;
        _this.autocomplete = 'off';
        _this.tabindex = 0;
        _this.focusEvent = new EventEmitter();
        _this.blueEvent = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FnBaseInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setOption();
    };
    /**
     * @return {?}
     */
    FnBaseInputComponent.prototype.setOption = /**
     * @return {?}
     */
    function () {
        this.placeholder = this.placeholder || this.name;
    };
    FnBaseInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-base-input',
                    template: "<div class=\"fn-input-box\">\r\n  <ng-container [ngSwitch]=\"type\">\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.PASSWORD\">\r\n      <ng-container *ngTemplateOutlet=\"PASSWORD\"> </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.TEXT || inputTypeMap.STRING\">\r\n      <ng-container *ngTemplateOutlet=\" TEXT\"> </ng-container>\r\n    </ng-container>\r\n    <!-- <ng-container *ngSwitchCase=\"inputTypeMap.STRING\">\r\n    <ng-container *ngTemplateOutlet=\"TEXT\"> </ng-container>\r\n  </ng-container> -->\r\n\r\n\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.NUMBER\">\r\n      <ng-container *ngTemplateOutlet=\"NUMBER\"> </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.DOUBLE || inputTypeMap.FLOAT\">\r\n      <ng-container *ngTemplateOutlet=\"FLOAT\"> </ng-container>\r\n    </ng-container>\r\n    <!-- <ng-container *ngSwitchCase=\"inputTypeMap.FLOAT\">\r\n      <ng-container *ngTemplateOutlet=\"FLOAT\"> </ng-container>\r\n    </ng-container> -->\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.CURRENCY\">\r\n      <ng-container *ngTemplateOutlet=\"CURRENCY\"> </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.EMAIL\">\r\n      <ng-container *ngTemplateOutlet=\"EMAIL\"> </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.BOOL\">\r\n      <ng-container *ngTemplateOutlet=\"BOOL\"> </ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.TEXTAREA\">\r\n      <ng-container *ngTemplateOutlet=\"TEXTAREA\"> </ng-container>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container *ngSwitchDefault>\r\n      <ng-container *ngTemplateOutlet=\"TEXT\"> </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  <ng-template #TEXT>\r\n\r\n    <input [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n      [(ngModel)]=\"value\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\" [tabindex]=\"tabindex\" />\r\n\r\n  </ng-template>\r\n\r\n  <ng-template #PASSWORD>\r\n    <input [id]=\"id\" type=\"password\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n      [(ngModel)]=\"value\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\" [tabindex]=\"tabindex\" />\r\n  </ng-template>\r\n\r\n  <ng-template #NUMBER>\r\n    <input [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n      [(ngModel)]=\"value\" fnNumberDirective [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\"\r\n      [tabindex]=\"tabindex\" />\r\n  </ng-template>\r\n  <ng-template #FLOAT>\r\n    <input [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n      [(ngModel)]=\"value\" fnNumberDirective [isDecimal]=\"'true'\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\"\r\n      [tabindex]=\"tabindex\" />\r\n  </ng-template>\r\n\r\n  <ng-template #CURRENCY>\r\n    <!-- Todo for currency  -->\r\n  </ng-template>\r\n  <ng-template #EMAIL>\r\n    <input [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n      [(ngModel)]=\"value\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\" [tabindex]=\"tabindex\" />\r\n  </ng-template>\r\n\r\n  <ng-template #TEXTAREA>\r\n    <textarea [id]=\"id\" type=\"text\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n      [(ngModel)]=\"value\" [disabled]=\"isDisabled\" [style.text-align]=\"textAlign\"></textarea>\r\n  </ng-template>\r\n\r\n  <ng-template #BOOL>\r\n    <!--  Need to be design -->\r\n    <input [id]=\"id\" type=\"checkbox\" class=\"form-control fn-input\" [name]=\"name\" [placeholder]=\"placeholder\"\r\n      [(ngModel)]=\"value\" fnNumberDirective [isDecimal]=\"'true'\" [disabled]=\"isDisabled\" />\r\n  </ng-template>\r\n\r\n  <!-- <ng-template #PHONENUMBER></ng-template>\r\n  <ng-template #LOOKUP></ng-template>\r\n  <ng-template #MULTILOOKUP></ng-template> -->\r\n\r\n  <ng-container *ngIf=\"isErrorBox && parentForm\">\r\n    <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\"\r\n      [control]=\"parentForm.form.controls[name]\">\r\n    </fn-input-error>\r\n  </ng-container>\r\n\r\n</div>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return FnBaseInputComponent; })),
                            multi: true
                        }
                    ],
                    styles: [".fn-input-box{position:relative}.fn-input{box-sizing:border-box;font-variant:tabular-nums;-webkit-font-feature-settings:\"tnum\";font-feature-settings:\"tnum\";width:100%}.fn-input[disabled]{color:rgba(0,0,0,.25);background-color:#f5f5f5;cursor:not-allowed;opacity:1}.fn-input:placeholder-shown{text-overflow:ellipsis;color:#999}textarea.fn-input{max-width:100%;height:auto;min-height:32px;line-height:1.5;vertical-align:bottom;transition:.3s,height}"]
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
    return FnBaseInputComponent;
}(FnInputValueAccessor));
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
var FnInputComponent = /** @class */ (function (_super) {
    __extends(FnInputComponent, _super);
    function FnInputComponent(fieldMetaDataSvcs) {
        var _this = _super.call(this) || this;
        _this.fieldMetaDataSvcs = fieldMetaDataSvcs;
        // @ts-ignore
        _this.inputTypeMap = FN_INPUT_TYPES;
        _this.autocomplete = 'off';
        _this.tabindex = 0;
        _this.textAlign = 'left';
        _this.placeholder = ' ';
        return _this;
    }
    /**
     * @return {?}
     */
    FnInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.config = this.fieldMetaDataSvcs.getFieldForId(this.dataKey);
        this.type = this.config.typeID.iid;
    };
    FnInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-input',
                    template: "<ng-container [ngSwitch]=\"type\">\r\n\r\n  <!-- default for PASSWORD TEXT STRING NUMBER DOUBLE EMAIL BOOL TEXTAREA -->\r\n  <ng-container *ngSwitchDefault>\r\n    <fn-base-input [(ngModel)]=\"value\" [id]=\"config.id\" [name]=\"name\" [isDisabled]=\"isDisabled\" [isErrorBox]=\"'false'\"\r\n      [type]=\"type\">\r\n    </fn-base-input>\r\n\r\n    <!-- @Input() name: string;\r\n      @Input() id: string;\r\n      @Input() placeholder: string;\r\n      @Input() isDisabled: boolean;\r\n      @Input() textAlign: 'left' | 'right' | 'center' | 'justify' = 'left';\r\n      @Input() isErrorBox = true;\r\n      @Input() minLength = 0;\r\n      @Input() isRequired = false;\r\n      @Input() maxLength = 255;\r\n      @Input() type: string;\r\n      @Input() parentForm: any;\r\n      @Input() readonly: boolean = null;\r\n      @Input() autocomplete = 'off';\r\n      @Input() tabindex = 0;\r\n      @Input() pattern?: any;\r\n\r\n\r\n      isRequired: true,\r\n      isEnableOnUI: true,\r\n      labelIDArray: [\r\n      'Entity_EOEmpMain_Field_email_LBL',\r\n      'Entity_EOEmpMain_Field_email_HVR'\r\n      ],\r\n      minLength: 5,\r\n      isInitialized: true,\r\n      isShowInfo: false,\r\n      labelPosition: 'left',\r\n      recalAccess: false,\r\n      typeID: {\r\n      iid: 'EMAIL',\r\n      isNumber: false,\r\n      defaultTableWidth: 50,\r\n      defaultEditWidth: 20\r\n      },\r\n      applicablePK: 0,\r\n      id: 'Entity_EOEmpMain_Field_email',\r\n      isDisabled: false,\r\n      key: 'email',\r\n      maxLength: 255,\r\n      isDynDetailKey: false,\r\n      hideLabel: false -->\r\n\r\n\r\n  </ng-container>\r\n\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.PHONENUMBER\">\r\n    <!-- TODO for phone number -->\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.CURRENCY\">\r\n    <!-- Currency -->\r\n  </ng-container>\r\n\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.LOOKUP\">\r\n    <!-- Single Lookp -->\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.MULTILOOKUP\">\r\n    <!-- Multi Lookup Lookp -->\r\n  </ng-container>\r\n\r\n  <ng-container *ngSwitchCase=\"inputTypeMap.COLOR\">\r\n    <!-- Color -->\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"parentForm\">\r\n    <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\">\r\n    </fn-input-error>\r\n  </ng-container>\r\n\r\n</ng-container>\r\n\r\n\r\n<!-- <fn-base-input-component-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\">\r\n</fn-base-input-component-error> -->\r\n\r\n<!-- <ng-container *ngSwitchCase=\"inputTypeMap.DATE\">\r\n\r\n    </ng-container> -->\r\n\r\n<!-- <ng-container *ngSwitchCase=\"inputTypeMap.DURATION\">\r\n\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"inputTypeMap.TIME\">\r\n\r\n    </ng-container> -->\r\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return FnInputComponent; })),
                            multi: true
                        }
                    ],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FnInputComponent.ctorParameters = function () { return [
        { type: FnUiFieldMetaDataService }
    ]; };
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
    return FnInputComponent;
}(FnInputValueAccessor));
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
var FnInputErrorComponent = /** @class */ (function () {
    function FnInputErrorComponent() {
    }
    /**
     * @return {?}
     */
    FnInputErrorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FnInputErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-input-error',
                    template: "<span class=\"fn-msg-err\" [ngClass]=\"position\"\r\n  *ngIf=\"submitted && control.invalid\">{{control.errors.message ||'Invalid '}}</span>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".fn-msg-err{color:#fff;position:absolute;z-index:1;background:#e74c3c;padding:6px 10px;margin:0;width:-webkit-max-content;width:-moz-max-content;width:max-content;border-radius:4px;box-shadow:0 1px 4px 0 rgba(0,0,0,.35);font-size:11px}.fn-msg-err::before{content:\"\";display:block;position:absolute;border-style:solid}.fn-msg-err.bottom::before{bottom:100%;left:10px;border-width:0 8px 8px;border-color:transparent transparent #e74c3c}.fn-msg-err.top{bottom:calc(100% + 7px);left:0}.fn-msg-err.top::before{top:100%;left:10px;border-width:8px 8px 0;border-color:#e74c3c transparent transparent}.fn-msg-err.left{top:0;right:calc(100% + 7px)}.fn-msg-err.left::before{top:5px;right:-7px;border-width:8px 0 8px 8px;border-color:transparent #e74c3c}.fn-msg-err.right{top:0;left:calc(100% + 7px)}.fn-msg-err.right::before{top:5px;left:-7px;border-width:8px 8px 8px 0;border-color:transparent #e74c3c}.fn-input-error{background:#e74c3c;padding:10px;width:150px;margin-top:2;color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    FnInputErrorComponent.ctorParameters = function () { return []; };
    FnInputErrorComponent.propDecorators = {
        submitted: [{ type: Input }],
        control: [{ type: Input }],
        position: [{ type: Input }]
    };
    return FnInputErrorComponent;
}());
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
var FnInputModule = /** @class */ (function () {
    function FnInputModule() {
    }
    /**
     * @return {?}
     */
    FnInputModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FnInputModule,
            providers: [FnUiFieldMetaDataService]
        };
    };
    FnInputModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FnBaseInputComponent, FnInputComponent, FnInputErrorComponent],
                    imports: [FormsModule, CommonModule, FnCoreModule.forRoot()],
                    exports: [FnBaseInputComponent, FnInputComponent, FnInputErrorComponent],
                    providers: [FnUiFieldMetaDataService]
                },] }
    ];
    return FnInputModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnSelectComponent = /** @class */ (function (_super) {
    __extends(FnSelectComponent, _super);
    function FnSelectComponent() {
        var _this = _super.call(this) || this;
        _this.isErrorBox = true;
        _this.optionList = [];
        _this.isRequired = false;
        _this.tabIndex = 0;
        _this.changeEvent = new EventEmitter();
        _this.closeEvent = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FnSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setOption();
    };
    /**
     * @return {?}
     */
    FnSelectComponent.prototype.setOption = /**
     * @return {?}
     */
    function () {
        this.placeholder = this.placeholder || this.name;
    };
    FnSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-select',
                    template: "<ng-container *ngIf=\"labelKey\">\r\n  <ng-container *ngIf=\"!groupBy\">\r\n    <ng-select [items]=\"optionList\" [bindLabel]=\"labelKey\" [bindValue]=\"inputKey\" [(ngModel)]=\"value\"\r\n      [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\" (change)=\"changeEvent.emit($event)\">\r\n    </ng-select>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"groupBy\">\r\n\r\n    <ng-select [items]=\"optionList\" [bindLabel]=\"labelKey\" [bindValue]=\"inputKey\" [groupBy]=\"groupBy\"\r\n      [(ngModel)]=\"value\" [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\" (change)=\"changeEvent.emit($event)\">\r\n      <ng-template ng-optgroup-tmp let-item=\"item\">\r\n        {{item[groupBy] || 'Unnamed group'}}\r\n      </ng-template>\r\n    </ng-select>\r\n  </ng-container>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"!labelKey\">\r\n  <ng-select [items]=\"optionList\" [(ngModel)]=\"value\" [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\"\r\n    (change)=\"changeEvent.emit($event)\">\r\n  </ng-select>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"parentForm\">\r\n  <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\"\r\n    [tabIndex]=\"tabIndex\">\r\n  </fn-input-error>\r\n</ng-container>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return FnSelectComponent; })),
                            multi: true
                        }
                    ],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FnSelectComponent.ctorParameters = function () { return []; };
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
    return FnSelectComponent;
}(FnInputValueAccessor));
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
var FnMultiSelectComponent = /** @class */ (function (_super) {
    __extends(FnMultiSelectComponent, _super);
    function FnMultiSelectComponent() {
        var _this = _super.call(this) || this;
        _this.isErrorBox = true;
        _this.optionList = [];
        _this.isRequired = false;
        _this.tabIndex = 0;
        _this.maxSelectedItems = 0;
        _this.changeEvent = new EventEmitter();
        _this.closeEvent = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FnMultiSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setOption();
    };
    /**
     * @return {?}
     */
    FnMultiSelectComponent.prototype.setOption = /**
     * @return {?}
     */
    function () {
        this.placeholder = this.placeholder || this.name;
    };
    FnMultiSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-multi-select',
                    template: "<ng-container>\r\n  <ng-container *ngIf=\"!groupBy\">\r\n    <ng-select [items]=\"optionList\" [multiple]=\"true\" [maxSelectedItems]=\"\" [bindLabel]=\"labelKey\" [(ngModel)]=\"value\"\r\n      [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\" (change)=\"changeEvent.emit($event)\">\r\n    </ng-select>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"groupBy\">\r\n\r\n    <ng-select [items]=\"optionList\" [multiple]=\"true\" [groupBy]=\"groupBy\" [maxSelectedItems]=\"\" [bindLabel]=\"labelKey\"\r\n      [(ngModel)]=\"value\" [placeholder]=\"placeholder\" [tabIndex]=\"tabIndex\" (change)=\"changeEvent.emit($event)\">\r\n\r\n      <ng-template ng-optgroup-tmp let-item=\"item\">\r\n        {{item[groupBy] || 'Unnamed group'}}\r\n      </ng-template>\r\n    </ng-select>\r\n  </ng-container>\r\n</ng-container>\r\n\r\n\r\n<ng-container *ngIf=\"parentForm\">\r\n  <fn-input-error [position]=\"'bottom'\" [submitted]=\"parentForm.submitted\" [control]=\"parentForm.form.controls[name]\"\r\n    [tabIndex]=\"tabIndex\">\r\n  </fn-input-error>\r\n</ng-container>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return FnMultiSelectComponent; })),
                            multi: true
                        }
                    ],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FnMultiSelectComponent.ctorParameters = function () { return []; };
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
    return FnMultiSelectComponent;
}(FnInputValueAccessor));
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
var FnSelectModule = /** @class */ (function () {
    function FnSelectModule() {
    }
    FnSelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, NgSelectModule, FnCoreModule],
                    declarations: [FnSelectComponent, FnMultiSelectComponent],
                    exports: [FnSelectComponent, FnMultiSelectComponent],
                    providers: [],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA
                    ],
                },] }
    ];
    return FnSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnConfirmModalComponent = /** @class */ (function () {
    function FnConfirmModalComponent(dialogRef, dialogData) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
    }
    /**
     * @param {?=} isOkey
     * @return {?}
     */
    FnConfirmModalComponent.prototype.close = /**
     * @param {?=} isOkey
     * @return {?}
     */
    function (isOkey) {
        if (isOkey === void 0) { isOkey = false; }
        this.dialogRef.close(isOkey);
    };
    FnConfirmModalComponent.decorators = [
        { type: Component, args: [{
                    template: "<h2 mat-dialog-title>{{dialogData.title}}</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  {{dialogData.content}}\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button class=\"btn btn-danger\" (click)=\"close()\">Cancel</button>\r\n  <button class=\"btn btn-sucess\" (click)=\"close(true)\" cdkFocusInitial>Okey</button>\r\n</mat-dialog-actions>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    FnConfirmModalComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return FnConfirmModalComponent;
}());
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
var FnModalService = /** @class */ (function () {
    function FnModalService(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?=} dialogData
     * @return {?}
     */
    FnModalService.prototype.openConfirmModal = /**
     * @param {?=} dialogData
     * @return {?}
     */
    function (dialogData) {
        if (dialogData === void 0) { dialogData = { title: 'Confirmation', content: 'Do you want to delete this?' }; }
        /** @type {?} */
        var confirmDialogRef = this.dialog.open(FnConfirmModalComponent, {
            data: dialogData
        });
        // confirmDialogRef.afterClosed().subscribe(result => {
        // });
        return confirmDialogRef;
    };
    /**
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    FnModalService.prototype.openCustomModal = /**
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    function (componentOrTemplateRef, config) {
        /** @type {?} */
        var dialogRef = this.dialog.open(componentOrTemplateRef, config);
        return dialogRef;
    };
    /**
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    FnModalService.prototype.openModal = /**
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    function (componentOrTemplateRef, config) {
        /** @type {?} */
        var dialogRef = this.dialog.open(componentOrTemplateRef, {
            data: config.data,
            width: '500px',
            hasBackdrop: config.hasBackdrop
        });
        return dialogRef;
    };
    FnModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FnModalService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    return FnModalService;
}());
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
var FnDialogModule = /** @class */ (function () {
    function FnDialogModule() {
    }
    /**
     * @return {?}
     */
    FnDialogModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FnDialogModule,
            providers: [FnModalService]
        };
    };
    FnDialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FormsModule, CommonModule, A11yModule, MatDialogModule, FnCoreModule],
                    declarations: [FnConfirmModalComponent],
                    exports: [FnConfirmModalComponent],
                    providers: [FnModalService],
                    entryComponents: [FnConfirmModalComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] }
    ];
    return FnDialogModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnTimepickerService = /** @class */ (function () {
    function FnTimepickerService() {
        this.KEY_CODES = {
            BACKSPACE: 8,
            ENTER: 13,
            ARROW_DOWN: 'ArrowDown',
            ARROW_UP: 'ArrowUp'
        };
        this.regex12a = new RegExp("^([1-9]|1[012])(a)$");
        this.regex12p = new RegExp("^([1-9]|1[012])(p)$");
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
    FnTimepickerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ FnTimepickerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FnTimepickerService_Factory() { return new FnTimepickerService(); }, token: FnTimepickerService, providedIn: "root" });
    return FnTimepickerService;
}());
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
var FnTimePickerComponent = /** @class */ (function () {
    function FnTimePickerComponent(timePickerSvcs) {
        this.timePickerSvcs = timePickerSvcs;
        this.mainItemArray = [];
        this.uiItemArray = [];
        this.searchTerm = "1";
        this.showDropDown = true;
        this.activeItem = -1;
    }
    /**
     * @return {?}
     */
    FnTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isMilitryTime) {
            this.mainItemArray = this.timePickerSvcs.Hour24Format;
        }
        else {
            this.mainItemArray = this.timePickerSvcs.Hour12Format;
        }
        this.searchTerm = this.mainItemArray[this.index];
    };
    // this filter function call on keypress on input box for filter data in array
    // this filter function call on keypress on input box for filter data in array
    /**
     * @param {?} event
     * @return {?}
     */
    FnTimePickerComponent.prototype.filterValue = 
    // this filter function call on keypress on input box for filter data in array
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.showDropDown = true;
        if (typeof (this.searchTerm) !== "undefined") {
            // this code is written for matching From time
            if (this.timePickerSvcs.regex12a.test(this.searchTerm)) {
                /** @type {?} */
                var timeStringSplit_1 = this.searchTerm.split('a');
                this.uiItemArray = this.mainItemArray.filter((/**
                 * @param {?} items
                 * @return {?}
                 */
                function (items) { return items.includes(timeStringSplit_1[0]) && items.includes('a'); }));
            }
            else if (this.timePickerSvcs.regex12p.test(this.searchTerm)) {
                /** @type {?} */
                var timeStringSplit_2 = this.searchTerm.split('p');
                this.uiItemArray = this.mainItemArray.filter((/**
                 * @param {?} items
                 * @return {?}
                 */
                function (items) { return items.includes(timeStringSplit_2[0]) && items.includes('p'); }));
            }
            else {
                if (this.isMilitryTime) {
                    /** @type {?} */
                    var term = this.searchTerm.toString().split(":");
                    /** @type {?} */
                    var modifiedTerm_1 = parseInt(term[0]) < 10 && !term[0].toString().startsWith("0") ? '0' + term[0] + (term.length > 1 ? ":" + term[1] : '') : this.searchTerm;
                    this.uiItemArray = this.mainItemArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    function (items) { return items.toString().startsWith(modifiedTerm_1); }));
                }
                else {
                    this.uiItemArray = this.mainItemArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    function (items) { return items.toString().startsWith(_this.searchTerm); }));
                }
            }
            // this function call on backspce
            if (event.keyCode == this.timePickerSvcs.KEY_CODES.BACKSPACE) {
                this.activeItem = 0;
                if (this.uiItemArray.length > 0) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return document.getElementsByClassName('.fn-time-picker-ul')[0].scrollTop = 0; }));
                }
            }
            // this function call on enter after select value in dropdown list
            if (event.keyCode == this.timePickerSvcs.KEY_CODES.ENTER && this.uiItemArray.length > 0) {
                /** @type {?} */
                var liVal = document.querySelector("li.active").textContent;
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
    };
    // onSelectEvent is call after click on li option in ul after apply filter
    // onSelectEvent is call after click on li option in ul after apply filter
    /**
     * @param {?} indexVal
     * @return {?}
     */
    FnTimePickerComponent.prototype.onItemClick = 
    // onSelectEvent is call after click on li option in ul after apply filter
    /**
     * @param {?} indexVal
     * @return {?}
     */
    function (indexVal) {
        this.activeItem = 0;
        this.searchTerm = indexVal;
        this.index = this.mainItemArray.indexOf(indexVal);
        this.uiItemArray = [];
        console.log(this.index);
    };
    /**
     * @return {?}
     */
    FnTimePickerComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        this.showDropDown = false;
    };
    // Open Dropdown by default value
    // Open Dropdown by default value
    /**
     * @param {?} event
     * @return {?}
     */
    FnTimePickerComponent.prototype.clickEvent = 
    // Open Dropdown by default value
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.showDropDown = true;
        if (this.activeItem < 1) {
            this.filterValue(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FnTimePickerComponent.prototype.keydownEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.code == "ArrowUp" && this.activeItem > 0) {
            this.activeItem--;
            document.getElementById('.fn-time-picker-ul').scrollTop -= 35;
        }
        if (event.code == "ArrowDown" && this.activeItem < this.uiItemArray.length - 1) {
            this.activeItem++;
            document.getElementById('.fn-time-picker-ul').scrollTop += 35;
        }
    };
    FnTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-time-picker',
                    template: " <div class=\"fn-time-picker-search\">\n   <input [(ngModel)]=\"searchTerm\" (click)=\"clickEvent($event)\" (keydown)=\"keydownEvent($event)\" maxlength=\"17\"\n     (keyup)=\"filterValue($event)\" />\n\n   <div (click)=\"closeDropDown()\">\n     <ul *ngIf=\"(uiItemArray && uiItemArray.length > 0) && showDropDown\" class=\"fn-time-picker-ul\">\n       <li *ngFor=\"let item of uiItemArray; let i = index\" tabindex=\"{{i}}\" [ngClass]=\"{'active': activeItem === i  }\"\n         (click)=\"onItemClick(item)\">{{item}}</li>\n     </ul>\n   </div>\n </div>\n",
                    styles: [".fn-time-picker-ul{list-style:none;border:1px solid #ccc;max-height:160px;overflow-x:hidden;scroll-behavior:smooth;padding:0;margin:0;top:0;width:182px;max-height:160px;overflow-y:scroll}.fn-time-picker-ul li{margin-bottom:3px;cursor:pointer;padding:5px;background-color:#f3f3f3}.fn-time-picker-ul li:last-child{margin-bottom:0}.fn-time-picker-ul li:hover{background-color:#77b0f1;color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    FnTimePickerComponent.ctorParameters = function () { return [
        { type: FnTimepickerService }
    ]; };
    FnTimePickerComponent.propDecorators = {
        index: [{ type: Input }],
        placeHolder: [{ type: Input }],
        isMilitryTime: [{ type: Input }]
    };
    return FnTimePickerComponent;
}());
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
var FnMultiTimePickerComponent = /** @class */ (function () {
    function FnMultiTimePickerComponent(service) {
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
        this.searchTerm = "";
        this.KEY_CODES = service.KEY_CODES;
    }
    /**
     * @return {?}
     */
    FnMultiTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isMilitryTime) {
            this.timeStoredArray = this.service.Hour24Format;
        }
        else {
            this.timeStoredArray = this.service.Hour12Format;
        }
        this.searchTerm = this.timeStoredArray[this.startIndex] + '-' + this.timeStoredArray[this.lastIndex];
        this.selectIndex = this.startIndex;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FnMultiTimePickerComponent.prototype.filterValue = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.showDropDown = true;
        if (typeof (this.searchTerm) !== "undefined") {
            this.checkEmpty = false;
            this.splitTimeVal = this.searchTerm.split('-');
            if (this.splitTimeVal[1]) {
                /** @type {?} */
                var inputVal_1 = this.splitTimeVal[1];
                if (this.selectIndex) {
                    /** @type {?} */
                    var splitFromTime = this.splitTimeVal[0].split(':');
                    if (this.isMilitryTime) {
                        if (this.militryHourArray.includes(splitFromTime[0]) && this.militryMinuteArray.includes(splitFromTime[1])) {
                            this.uiItemArray = this.service.Hour24NextFormat.filter((/**
                             * @param {?} items
                             * @return {?}
                             */
                            function (items) { return items.toString().startsWith(inputVal_1) && _this.service.Hour24NextFormat.indexOf(items) > _this.selectIndex; }));
                        }
                        else {
                            this.activeIndex = 0;
                            this.uiItemArray = [];
                        }
                    }
                    else {
                        // this code written for matching regex for To time
                        if (this.service.regex12a.test(inputVal_1)) {
                            /** @type {?} */
                            var timeStringSplit = inputVal_1.split('a');
                            if (this.nonMilitryHourArray.includes(splitFromTime[0]) && this.nonMilitryMinuteArray.includes(splitFromTime[1])) {
                                this.uiItemArray = this.service.Hour12NextFormat.filter((/**
                                 * @param {?} items
                                 * @return {?}
                                 */
                                function (items) { return (items.toString().startsWith(timeStringSplit[0]) && items.includes('a')) && _this.service.Hour12NextFormat.indexOf(items) > _this.selectIndex; }));
                            }
                            else {
                                this.activeIndex = 0;
                                this.uiItemArray = [];
                            }
                        }
                        else if (this.service.regex12p.test(inputVal_1)) {
                            /** @type {?} */
                            var timeStringSplit = inputVal_1.split('p');
                            if (this.nonMilitryHourArray.includes(splitFromTime[0]) && this.nonMilitryMinuteArray.includes(splitFromTime[1])) {
                                this.uiItemArray = this.service.Hour12NextFormat.filter((/**
                                 * @param {?} items
                                 * @return {?}
                                 */
                                function (items) { return (items.toString().startsWith(timeStringSplit[0]) && items.includes('p')) && _this.service.Hour12NextFormat.indexOf(items) > _this.selectIndex; }));
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
                                function (items) { return items.toString().startsWith(inputVal_1) && _this.service.Hour12NextFormat.indexOf(items) > _this.selectIndex; }));
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
                    var timeStringSplit_1 = this.searchTerm.split('a');
                    this.uiItemArray = this.timeStoredArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    function (items) { return items.includes(timeStringSplit_1[0]) && items.includes('a'); }));
                }
                else if (this.service.regex12p.test(this.searchTerm)) {
                    /** @type {?} */
                    var timeStringSplit_2 = this.searchTerm.split('p');
                    this.uiItemArray = this.timeStoredArray.filter((/**
                     * @param {?} items
                     * @return {?}
                     */
                    function (items) { return items.includes(timeStringSplit_2[0]) && items.includes('p'); }));
                }
                else {
                    if (this.isMilitryTime) {
                        /** @type {?} */
                        var term = this.searchTerm.toString().split(":");
                        /** @type {?} */
                        var modifiedTerm_1 = parseInt(term[0]) < 10 && !term[0].toString().startsWith("0") ? '0' + term[0] + (term.length > 1 ? ":" + term[1] : '') : this.searchTerm;
                        this.uiItemArray = this.timeStoredArray.filter((/**
                         * @param {?} items
                         * @return {?}
                         */
                        function (items) { return items.toString().startsWith(modifiedTerm_1); }));
                    }
                    else {
                        this.uiItemArray = this.timeStoredArray.filter((/**
                         * @param {?} items
                         * @return {?}
                         */
                        function (items) { return items.toString().startsWith(_this.searchTerm); }));
                    }
                }
            }
            if (event.keyCode == this.KEY_CODES.BACKSPACE) {
                this.activeIndex = 0;
                if (this.uiItemArray.length > 0) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return document.getElementsByClassName("fn-time-picker-ul")[0].scrollTop = 0; }));
                }
            }
            if (event.keyCode == this.KEY_CODES.ENTER && this.uiItemArray.length > 0) {
                /** @type {?} */
                var liVal = document.querySelector("li.active").textContent;
                this.onItemClick(liVal);
                this.activeIndex = 0;
                this.uiItemArray = [];
                document.getElementsByClassName("fn-time-picker-ul")[0].scrollTop = 0;
                this.checkEmpty == false;
            }
        }
        else {
            this.activeIndex = 0;
            this.checkEmpty = true;
            this.uiItemArray = [];
        }
    };
    /**
     * @param {?} param
     * @return {?}
     */
    FnMultiTimePickerComponent.prototype.onItemClick = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        if (this.splitTimeVal[1]) {
            this.activeIndex = 0;
            /** @type {?} */
            var newToTimeString = this.searchTerm.split('-')[0];
            this.searchTerm = newToTimeString + '-' + param;
            this.uiItemArray = [];
        }
        else {
            this.activeIndex = 0;
            this.searchTerm = param + '-';
            this.selectIndex = this.timeStoredArray.indexOf(param);
            this.uiItemArray = [];
        }
    };
    /**
     * @return {?}
     */
    FnMultiTimePickerComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        this.showDropDown = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FnMultiTimePickerComponent.prototype.openDropDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.showDropDown = true;
        if (this.checkEmpty) {
            this.filterValue(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FnMultiTimePickerComponent.prototype.keyDownChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.code == this.KEY_CODES.ARROW_UP && this.activeIndex > 0) {
            this.activeIndex--;
            document.getElementsByClassName("fn-time-picker-ul")[0].scrollTop -= 35;
        }
        if (event.code == this.KEY_CODES.ARROW_DOWN && this.activeIndex < this.uiItemArray.length - 1) {
            this.activeIndex++;
            document.getElementsByClassName("fn-time-picker-ul")[0].scrollTop += 35;
        }
    };
    FnMultiTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-multi-time-picker',
                    template: "<div>\n  <input [(ngModel)]=\"searchTerm\" (click)=\"openDropDown($event)\" (keydown)=\"keyDownChange($event)\" maxlength=\"17\"\n    (keyup)=\"filterValue($event)\" />\n  <div (click)=\"closeDropDown()\">\n    <ul *ngIf=\"uiItemArray.length > 0 && showDropDown\" class=\"fn-time-picker-ul\">\n      <li *ngFor=\"let item of uiItemArray; let i = index\" tabindex=\"{{i}}\" [ngClass]=\"{'active': activeIndex === i  }\"\n        (click)=\"onItemClick(item)\">{{item}}</li>\n    </ul>\n  </div>\n</div>\n",
                    styles: [".fn-time-picker-ul{list-style:none;border:1px solid #ccc;max-height:160px;overflow-x:hidden;scroll-behavior:smooth;padding:0;margin:0;top:0;width:182px;max-height:160px;overflow-y:scroll}.fn-time-picker-ul li{margin-bottom:3px;cursor:pointer;padding:5px;background-color:#f3f3f3}.fn-time-picker-ul li:last-child{margin-bottom:0}.fn-time-picker-ul li.active,.fn-time-picker-ul li:hover{background-color:#77b0f1;color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    FnMultiTimePickerComponent.ctorParameters = function () { return [
        { type: FnTimepickerService }
    ]; };
    FnMultiTimePickerComponent.propDecorators = {
        startIndex: [{ type: Input }],
        lastIndex: [{ type: Input }],
        placeHolder: [{ type: Input }],
        isMilitryTime: [{ type: Input }]
    };
    return FnMultiTimePickerComponent;
}());
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
var FnTimePickerModule = /** @class */ (function () {
    function FnTimePickerModule() {
    }
    /**
     * @return {?}
     */
    FnTimePickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FnTimePickerModule,
            providers: [FnTimepickerService]
        };
    };
    FnTimePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FnCoreModule.forRoot(), CommonModule, FormsModule],
                    declarations: [FnTimePickerComponent, FnMultiTimePickerComponent],
                    providers: [FnTimepickerService],
                    exports: [FnTimePickerComponent, FnMultiTimePickerComponent]
                },] }
    ];
    return FnTimePickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnColorPickerComponent = /** @class */ (function (_super) {
    __extends(FnColorPickerComponent, _super);
    function FnColorPickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDisable = false;
        _this.isDisableInput = true;
        _this.showOkBtn = true;
        _this.showCancelBtn = true;
        _this.okButtonClass = "btn btn-primary btn-xs";
        _this.cancelButtonClass = "btn btn-danger btn-xs";
        _this.isSaveClkOutside = false;
        _this.outputFormat = "hex";
        _this.onChangeColor = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    FnColorPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.okButtonClass = this.okButtonClass + " ok-button";
        this.cancelButtonClass = this.cancelButtonClass + " cancel-button";
    };
    /**
     * @param {?} colorCode
     * @return {?}
     */
    FnColorPickerComponent.prototype.changeColor = /**
     * @param {?} colorCode
     * @return {?}
     */
    function (colorCode) {
        this.value = colorCode;
        this.onChangeColor.emit(colorCode);
    };
    FnColorPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-color-picker',
                    template: " <input class=\"fn-color-picker-border\" [colorPicker]=\"value\" [cpDisabled]=\"isDisable\" [style.background]=\"value\"\r\n   [cpOKButton]=\"showOkBtn\" [cpCancelButton]=\"showCancelBtn\" (colorPickerSelect)=\"changeColor($event)\"\r\n   [cpOutputFormat]=\"outputFormat\" [cpSaveClickOutside]=\"isSaveClkOutside\" [cpDisableInput]=\"isDisableInput\"\r\n   [cpOKButtonClass]=\"okButtonClass\" [cpCancelButtonClass]=\"cancelButtonClass\" />\r\n {{value}}\r\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return FnColorPickerComponent; })),
                            multi: true
                        }
                    ],
                    encapsulation: ViewEncapsulation.None,
                    styles: [".fn-color-picker-border{border:1px dotted #000;height:19px;width:19px;cursor:pointer}:host ::ng-deep .cancel-button{float:left;border-radius:5px}:host ::ng-deep .ok-button{float:right;border-radius:5px}"]
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
        onChangeColor: [{ type: Output }]
    };
    return FnColorPickerComponent;
}(FnInputValueAccessor));
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
    FnColorPickerComponent.prototype.onChangeColor;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnColorPickerModule = /** @class */ (function () {
    function FnColorPickerModule() {
    }
    FnColorPickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, ColorPickerModule, FnCoreModule],
                    declarations: [FnColorPickerComponent],
                    exports: [FnColorPickerComponent]
                },] }
    ];
    return FnColorPickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FnDatePickerComponent = /** @class */ (function () {
    function FnDatePickerComponent() {
        var _this = this;
        this.currentDate = new Date();
        this.isDisable = false;
        this.format = "d/M/Y";
        this.callback = new EventEmitter();
        this.nextDisabledCallback = new EventEmitter();
        this.prevDisabledCallback = new EventEmitter();
        this.nextPrevCallback = new EventEmitter();
        this.dateDisabled = new EventEmitter();
        this.startView = "month";
        this.datePickerFilter = (/**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            if (_this.globalConfig.maxDate !== null) {
                return;
            }
            if (_this.globalConfig.isAutoHandler && _this.globalConfig.isFutureDisable) {
                return new Date(date.toString()) < _this.globalConfig.disabledDate;
            }
            /** @type {?} */
            var returnVal = true;
            _this.dateDisabled.emit({
                date: new Date(date.toString()), callback: (/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    returnVal = val;
                })
            });
            return returnVal;
        });
    }
    /**
     * @return {?}
     */
    FnDatePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.globalConfig = this.globalConfig === undefined ? new FnDateConfig() : this.initGlbConfig(this.globalConfig);
        this.setDateModel(this.selectedDate || this.currentDate);
        this.customClass = this.customClass === undefined ? this.globalConfig.isMonthView ? "fn-date-month-picker" : '' : this.customClass;
        this.startView = this.globalConfig.isMonthView ? "year" : "month";
    };
    /**
     * @return {?}
     */
    FnDatePickerComponent.prototype.getFormattedDate = /**
     * @return {?}
     */
    function () {
        return new FnDateFormatter().format(this.getDateObj(), this.format);
    };
    /**
     * @return {?}
     */
    FnDatePickerComponent.prototype.getDateObj = /**
     * @return {?}
     */
    function () {
        return new Date(this.selectedDate);
    };
    /**
     * @return {?}
     */
    FnDatePickerComponent.prototype.setDate = /**
     * @return {?}
     */
    function () {
        this.callback.emit(this.getDateObj());
    };
    /**
     * @param {?} isNext
     * @return {?}
     */
    FnDatePickerComponent.prototype.nextPrevHandler = /**
     * @param {?} isNext
     * @return {?}
     */
    function (isNext) {
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
        this.nextPrevCallback.emit({ date: this.getDateObj(), isNext: isNext });
    };
    /**
     * @return {?}
     */
    FnDatePickerComponent.prototype.nextDisable = /**
     * @return {?}
     */
    function () {
        if (this.globalConfig.isAutoHandler && this.globalConfig.isFutureDisable) {
            if (this.selectedDate !== undefined) {
                return new Date(this.getNextDate(this.globalConfig.noOfNavDay)) >= this.globalConfig.disabledDate;
            }
        }
        else if (this.globalConfig.isFutureDisable) {
            /** @type {?} */
            var isDisable_1;
            this.nextDisabledCallback.emit({
                date: this.getDateObj(),
                callback: (/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    isDisable_1 = value;
                })
            });
            return isDisable_1;
        }
        return false;
    };
    /**
     * @return {?}
     */
    FnDatePickerComponent.prototype.prevDisable = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isDisable;
        this.prevDisabledCallback.emit({
            date: this.getDateObj(),
            callback: (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                isDisable = value;
            })
        });
        return isDisable;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    FnDatePickerComponent.prototype.setDateModel = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.selectedDate = date;
    };
    /**
     * @param {?} noOfNavDay
     * @return {?}
     */
    FnDatePickerComponent.prototype.getNextDate = /**
     * @param {?} noOfNavDay
     * @return {?}
     */
    function (noOfNavDay) {
        /** @type {?} */
        var date = this.getDateObj();
        return new Date(date.setDate(date.getDate() + noOfNavDay));
    };
    /**
     * @param {?} noOfNavDay
     * @return {?}
     */
    FnDatePickerComponent.prototype.getPrevDate = /**
     * @param {?} noOfNavDay
     * @return {?}
     */
    function (noOfNavDay) {
        /** @type {?} */
        var date = this.getDateObj();
        return new Date(date.setDate(date.getDate() - noOfNavDay));
    };
    /**
     * @return {?}
     */
    FnDatePickerComponent.prototype.getNextMonth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var date = this.getDateObj();
        return new Date(date.getFullYear(), date.getMonth() + 1, 1);
    };
    /**
     * @return {?}
     */
    FnDatePickerComponent.prototype.getPrevMonth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var date = this.getDateObj();
        return new Date(date.getFullYear(), date.getMonth() - 1, 1);
    };
    /**
     * @param {?} event
     * @param {?} datePicker
     * @return {?}
     */
    FnDatePickerComponent.prototype._monthSelectedHandler = /**
     * @param {?} event
     * @param {?} datePicker
     * @return {?}
     */
    function (event, datePicker) {
        if (this.globalConfig.isMonthView) {
            this.setDateModel(new Date(event));
            this.setDate();
            datePicker.close();
        }
    };
    /**
     * @param {?} configHash
     * @return {?}
     */
    FnDatePickerComponent.prototype.initGlbConfig = /**
     * @param {?} configHash
     * @return {?}
     */
    function (configHash) {
        /** @type {?} */
        var returnGlbHash = Object.assign(configHash, {});
        /** @type {?} */
        var defaultCnfHash = new FnDateConfig();
        Object.keys(defaultCnfHash).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (!returnGlbHash.hasOwnProperty(key)) {
                returnGlbHash[key] = defaultCnfHash[key];
            }
            else if (key == "type") {
                if (returnGlbHash[key] == "month") {
                    returnGlbHash.isMonthView = true;
                }
            }
        }));
        return returnGlbHash;
    };
    FnDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-date-picker',
                    template: "<div style=\"padding-top: 40px;\">\n  <div style=\"visibility: hidden;\">\n    <input matInput [matDatepicker]=\"picker\" (dateChange)=\"setDate()\" [matDatepickerFilter]=\"datePickerFilter\"\n      placeholder=\"Choose a date\" [(ngModel)]=\"selectedDate\">\n    <mat-datepicker #picker [startView]=\"startView\" [panelClass]=\"customClass\"\n      (monthSelected)=\"_monthSelectedHandler($event,picker)\"></mat-datepicker>\n  </div>\n  <button mat-raised-button [disabled]=\"prevDisable()\" (click)=\"nextPrevHandler(false)\">Prev</button>\n  <button mat-raised-button (click)=\"picker.open()\">{{getFormattedDate()}}</button>\n  <button mat-raised-button [disabled]=\"nextDisable()\" (click)=\"nextPrevHandler(true)\">Next</button>\n</div>\n",
                    styles: ["::ng-deep .fn-date-month-picker .mat-calendar-period-button{pointer-events:none}::ng-deep .fn-date-month-picker .mat-calendar-arrow{display:none}"]
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
    return FnDatePickerComponent;
}());
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
var FnDateConfig = /** @class */ (function () {
    function FnDateConfig() {
        this.minDate = new Date("1-1-1990");
        this.maxDate = null;
        this.navigation = "select";
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
    return FnDateConfig;
}());
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
var FnDatePickerModule = /** @class */ (function () {
    function FnDatePickerModule() {
    }
    FnDatePickerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FnDatePickerComponent],
                    imports: [CommonModule, FormsModule, MatDatepickerModule, MatNativeDateModule, FoundationModule],
                    exports: [FnDatePickerComponent]
                },] }
    ];
    return FnDatePickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CURRENCY_REGEX, DEFAULT_MENU_STATE, EMAIL_REGEX, FLOAT_NUM_REGEX, FLOAT_NUM_WITH_NEG_REGEX, FNConstant, FNErrorHandler, FNErrorLogSvcs, FNExceptionJson, FN_INPUT_TYPES, FULL_NAME_REGX, FnApplication, FnApplicationHelper, FnBrowserDetail, FnButtonModule, FnClickListner, FnColorPickerModule, FnConfirmModalComponent, FnCookieService, FnCoreModule, FnDateFormatConstant, FnDateFormatter, FnDatePickerModule, FnDeviceConstant, FnDialogModule, FnEmailValidator, FnExceptionService, FnIconModule, FnInputModel, FnInputModule, FnInputValueAccessor, FnLangConstant, FnMaxValidator, FnMenuActionType, FnMenuEffects, FnMenuItemComponent, FnMenuLandingComponent, FnMenuReducer, FnMenuSidebarComponent, FnMinValidator, FnModalService, FnPatternValidator, FnRequireValidator, FnSelectModule, FnSessionActionType, FnSessionEffect, FnSessionStorage, FnSwitchModule, FnTableConfig, FnTableMetaData, FnTimePickerModule, FnUiFieldMetaDataService, FnUtilService, FnWeatherConstatnt, FoundationModule, InitMenuState, InitialzeCurrentSession, LoadMenuData, LoadMenuDataError, LoadMenuDataSucess, LoadSession, LoadSessionError, LoadSessionSuccess, NAME_REGEX, SetActiveMenuId, VALIDATOR_MAP, arraysEqual, compare, ensureNumberInRange, fnSessionReducer, getActiveMenuId, getActiveMenuItem, getCurrentSession, getCurrent_baseUrl, getCurrent_mid, getCurrent_pid, getCurrent_pmid, getCurrent_saPK, getCurrent_sauPK, getCurrent_scPK, getCurrent_scaPK, getCurrent_scuPK, getCurrent_sgaPK, getCurrent_ssPK, getCurrent_wIndex, getCurretn_sccPK, getMenuData, getMenuDetailItemMap, getMenuItemById, getMenuItemMap, getMenuStatus, getPercent, getPrecision, getRooMenuId, isEmptyObject, isEmptyString, isFloat, isInt, isInteger, isNonEmptyString, isNotNull, isNull, isString, shallowCopyArray, shallowEqual, sortArray, toArray, typeofArray, typeofBoolean, typeofFunction, typeofNumber, typeofObject, typeofString, typeofUndefined, FnTableComponent as ɵa, FnPaginationComponent as ɵb, FnTableSearchComponent as ɵc, FnMenuService as ɵd, FnMenuStoreService as ɵe, FnNumberDirective as ɵf, FnCurrencyDirective as ɵg, FnTranslatePipe as ɵh, FnI18nService as ɵi, FnInputValidator as ɵj, FnIconComponent as ɵk, FnFaIconComponent as ɵl, FnButtonComponent as ɵm, FnSwitchComponent as ɵn, FnBaseInputComponent as ɵo, FnInputComponent as ɵp, FnInputErrorComponent as ɵq, FnSelectComponent as ɵr, FnInputValueAccessor as ɵs, FnMultiSelectComponent as ɵt, FnTimePickerComponent as ɵv, FnTimepickerService as ɵw, FnMultiTimePickerComponent as ɵx, FnColorPickerComponent as ɵy, FnDatePickerComponent as ɵz };
//# sourceMappingURL=foundation.js.map
