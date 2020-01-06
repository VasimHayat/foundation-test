/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Vasim Hayat @ 1/24/2018
 */
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { sortArray } from '../util/array';
import { isNull, typeofObject, isEmptyObject, typeofArray, isString, isNotNull, typeofString, isEmptyString } from '../util/check';
import { CURRENCY_REGEX } from '../constant/fn.constant';
export class FnUtilService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9mbi11dGlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFDSCxNQUFNLEVBQ04sWUFBWSxFQUNaLGFBQWEsRUFDYixXQUFXLEVBQ1gsUUFBUSxFQUNSLFNBQVMsRUFDVCxZQUFZLEVBQ1osYUFBYSxFQUNoQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFPekQsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBRXRCLFlBQW9CLGFBQXVCLEVBQVUsU0FBdUI7UUFBeEQsa0JBQWEsR0FBYixhQUFhLENBQVU7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFjOztRQXVJNUUsWUFBTzs7OztRQUFHLENBQUMsR0FBVyxFQUFFLEVBQUU7O2tCQUNoQixTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQztZQUMvRCxPQUFPLEdBQUc7Z0JBQ04sQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FB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Q0FnQkM7O0lBRUQsK0NBUUM7O0lBRUQsNkNBWUM7O0lBRUQsNENBZUM7O0lBRUQsNENBU0M7O0lBR0QsK0NBYUM7O0lBRUQsb0NBWUM7Ozs7O0lBcFRXLHNDQUErQjs7Ozs7SUFBRSxrQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVmFzaW0gSGF5YXQgQCAxLzI0LzIwMThcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IHNvcnRBcnJheSB9IGZyb20gJy4uL3V0aWwvYXJyYXknO1xyXG5pbXBvcnQge1xyXG4gICAgaXNOdWxsLFxyXG4gICAgdHlwZW9mT2JqZWN0LFxyXG4gICAgaXNFbXB0eU9iamVjdCxcclxuICAgIHR5cGVvZkFycmF5LFxyXG4gICAgaXNTdHJpbmcsXHJcbiAgICBpc05vdE51bGwsXHJcbiAgICB0eXBlb2ZTdHJpbmcsXHJcbiAgICBpc0VtcHR5U3RyaW5nXHJcbn0gZnJvbSAnLi4vdXRpbC9jaGVjayc7XHJcbmltcG9ydCB7IEZuRGF0ZSB9IGZyb20gJy4uL3V0aWwvdHlwZXMnO1xyXG5pbXBvcnQgeyBDVVJSRU5DWV9SRUdFWCB9IGZyb20gJy4uL2NvbnN0YW50L2ZuLmNvbnN0YW50JztcclxuXHJcblxyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGblV0aWxTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVGb3JtYXR0ZXI6IERhdGVQaXBlLCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGZvcm1hdD86IHN0cmluZywgdGltZXpvbmU/OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVGb3JtYXR0ZXIudHJhbnNmb3JtKHZhbHVlLCBmb3JtYXQsIHRpbWV6b25lLCBsb2NhbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGVIdG1sKGh0bWxTdHI6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sU3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0SHRtbFRvU3RyaW5nKGh0bWxTdHI6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWxTdHIgPyBTdHJpbmcoaHRtbFN0cikucmVwbGFjZSgvPFtePl0rPi9nbSwgJycpIDogJyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNvcnRBcnJheShvYmplY3RBcnJheTogQXJyYXk8YW55Piwga2V5OiBzdHJpbmcsIGlzRGVzYz86IGJvb2xlYW4pIHtcclxuICAgICAgICByZXR1cm4gc29ydEFycmF5KG9iamVjdEFycmF5LCBrZXksIGlzRGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2VlayhidXNpRGF0ZTogYW55KSB7XHJcbiAgICAgICAgY29uc3QgZkRhdGUgPSBuZXcgRGF0ZShidXNpRGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKCgoKGJ1c2lEYXRlLmdldFRpbWUoKSAtIGZEYXRlLmdldFRpbWUoKSkgLyA4NjQwMDAwMCkgKyBmRGF0ZS5nZXREYXkoKSArIDEpIC8gNyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0ZUJ5SW5kZXgoaW5kZXg6IG51bWJlciwgZGF0ZU9iOiBGbkRhdGUsIGlzRmlyc3REYXk6IGJvb2xlYW4sIGlzTGFzdERheT86IGJvb2xlYW4pOiBEYXRlIHtcclxuXHJcbiAgICAgICAgbGV0IGRhdGUgPSAwO1xyXG4gICAgICAgIGNvbnN0IF9kYXRlT2JqID0gbmV3IERhdGUoZGF0ZU9iKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID4gX2RhdGVPYmouZ2V0RGF5KCkpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IChfZGF0ZU9iai5nZXREYXRlKCkgKyBpbmRleCAtIF9kYXRlT2JqLmdldERheSgpKSAtIDc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0ZSA9IF9kYXRlT2JqLmdldERhdGUoKSArIChpbmRleCAtIF9kYXRlT2JqLmdldERheSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0ZpcnN0RGF5KSB7XHJcbiAgICAgICAgICAgIF9kYXRlT2JqLnNldERhdGUoZGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0xhc3REYXkpIHtcclxuICAgICAgICAgICAgX2RhdGVPYmouc2V0RGF0ZShkYXRlICsgNyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gX2RhdGVPYmo7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFdlZWtEaWZmKHN0YXJ0SW5kZXg6IG51bWJlciwgc3RhcnREYXRlOiBGbkRhdGUsIGVuZERhdGU6IEZuRGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3Qgd2VlazEgPSB0aGlzLmdldERhdGVCeUluZGV4KHN0YXJ0SW5kZXgsIHN0YXJ0RGF0ZSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IHdlZWsyID0gdGhpcy5nZXREYXRlQnlJbmRleChzdGFydEluZGV4LCBlbmREYXRlLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgY29uc3Qgd2Vla0NvdW50MSA9IHRoaXMuZ2V0V2Vlayh3ZWVrMSk7XHJcbiAgICAgICAgbGV0IHdlZWtDb3VudDIgPSB0aGlzLmdldFdlZWsod2VlazIpO1xyXG4gICAgICAgIGlmICh3ZWVrQ291bnQyIDwgd2Vla0NvdW50MSkge1xyXG4gICAgICAgICAgICB3ZWVrQ291bnQyICs9IDUyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBub09mV2VlayA9ICh3ZWVrQ291bnQyIC0gd2Vla0NvdW50MSArIDEpO1xyXG4gICAgICAgIHJldHVybiBub09mV2VlaztcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWVrQXJyYXlGb3JEYXRlcyhfc3RhcnRJbmRleDogbnVtYmVyLCBfc3RhcnREYXRlOiBGbkRhdGUsIF9lbmREYXRlOiBGbkRhdGUpOiBBcnJheTxEYXRlPiB7XHJcbiAgICAgICAgY29uc3Qgbm9PZldlZWsgPSB0aGlzLmdldFdlZWtEaWZmKF9zdGFydEluZGV4LCBfc3RhcnREYXRlLCBfZW5kRGF0ZSk7XHJcbiAgICAgICAgY29uc3QgbmV3U3RhcnREYXRlID0gdGhpcy5nZXREYXRlQnlJbmRleChfc3RhcnRJbmRleCwgX3N0YXJ0RGF0ZSwgdHJ1ZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdCB3ZWVrQXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vT2ZXZWVrOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgX3dlZWtEYXRlID0gdGhpcy5nZXREYXRlQnlJbmRleChfc3RhcnRJbmRleCwgbmV3U3RhcnREYXRlLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHdlZWtBcnJheS5wdXNoKHRoaXMuZGF0ZUZvcm1hdHRlci50cmFuc2Zvcm0oX3dlZWtEYXRlLCAnTU0vZGQveXl5eScpKTtcclxuICAgICAgICAgICAgbmV3U3RhcnREYXRlLnNldERhdGUobmV3U3RhcnREYXRlLmdldERhdGUoKSArIDcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2Vla0FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdlZWtBcnJheShzdGFydERhdGU6IEZuRGF0ZSwgbm9PZldlZWs6IG51bWJlcik6IEFycmF5PERhdGU+IHtcclxuICAgICAgICBjb25zdCB3ZWVrQXJyYXkgPSBbXTtcclxuICAgICAgICBjb25zdCBuZXdTdGFydERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9PZldlZWs7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdXZWVrSGFzaCA9IHsgc3RhcnREYXRlOiBudWxsLCBlbmREYXRlOiBudWxsLCBmb3JtYXR0ZWRFbmREYXRlOiBudWxsIH07XHJcbiAgICAgICAgICAgIG5ld1dlZWtIYXNoLnN0YXJ0RGF0ZSA9IG5ld1N0YXJ0RGF0ZTtcclxuICAgICAgICAgICAgbmV3V2Vla0hhc2guZW5kRGF0ZSA9IG5ldyBEYXRlKG5ld1N0YXJ0RGF0ZS5zZXREYXRlKG5ld1N0YXJ0RGF0ZS5nZXREYXRlKCkgKyA2KSk7XHJcbiAgICAgICAgICAgIG5ld1dlZWtIYXNoLmZvcm1hdHRlZEVuZERhdGUgPSB0aGlzLmRhdGVGb3JtYXR0ZXIudHJhbnNmb3JtKG5ld1dlZWtIYXNoLmVuZERhdGUsICd5eXl5TU1kZCcpO1xyXG4gICAgICAgICAgICB3ZWVrQXJyYXkucHVzaChuZXdXZWVrSGFzaCk7XHJcbiAgICAgICAgICAgIG5ld1N0YXJ0RGF0ZS5zZXREYXRlKG5ld1N0YXJ0RGF0ZS5nZXREYXRlKCkgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdlZWtBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWVrQXJyYXlPbkluZGV4KGluZGV4OiBudW1iZXIsIGRhdGVPYiwgaXNGaXJzdERheSwgaXNMYXN0RGF5KSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZU9iakFycmF5ID0gW107XHJcbiAgICAgICAgbGV0IGRhdGUgPSAwO1xyXG4gICAgICAgIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZShkYXRlT2IpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IGRhdGVPYmouZ2V0RGF5KCkpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IChkYXRlT2JqLmdldERhdGUoKSArIGluZGV4IC0gZGF0ZU9iai5nZXREYXkoKSkgLSA3O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlT2JqLmdldERhdGUoKSArIChpbmRleCAtIGRhdGVPYmouZ2V0RGF5KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNGaXJzdERheSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlT2JqZWN0ID0gbmV3IERhdGUoZGF0ZU9iKTtcclxuICAgICAgICAgICAgZGF0ZU9iamVjdC5zZXREYXRlKGRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZU9iamVjdDtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzTGFzdERheSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlT2JqZWN0ID0gbmV3IERhdGUoZGF0ZU9iKTtcclxuICAgICAgICAgICAgZGF0ZU9iamVjdC5zZXREYXRlKGRhdGUgKyA3KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGVPYmplY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVPYmplY3QgPSBuZXcgRGF0ZShkYXRlT2IpO1xyXG5cclxuICAgICAgICAgICAgZGF0ZU9iamVjdC5zZXREYXRlKGRhdGUpO1xyXG4gICAgICAgICAgICBkYXRlT2JqQXJyYXkucHVzaChkYXRlT2JqZWN0KTtcclxuICAgICAgICAgICAgZGF0ZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0ZU9iakFycmF5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjdXJyZW5jeUZvcm1hdHRlcih2YWw6IGFueSwgY3VycmVuY3lTdHJpbmc/OiBhbnkpIHtcclxuICAgICAgICB2YWwgPSB0aGlzLnJldmVyc2VTdHJpbmcodmFsKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgJSAzID09PSAwICYmIGkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLCcgKyB2YWwuY2hhckF0KGkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IHZhbC5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZVN0cmluZyhyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbmN5Umd4Rm9ybWF0KG46IG51bWJlciwgY3VycmVuY3k6IGFueSwgZml4ZWREZWNpbWFsOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW5jeVZhbCA9IGN1cnJlbmN5ICsgJyAnICsgbi50b0ZpeGVkKGZpeGVkRGVjaW1hbCkucmVwbGFjZShDVVJSRU5DWV9SRUdFWCwgJyQxLCcpO1xyXG4gICAgICAgIC8vIGN1cnJlbmN5VmFsID0gY3VycmVuY3lWYWwucmVwbGFjZUFsbChcIiBcIiwgXCJcIik7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbmN5VmFsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBjb252ZXJ0aW5nIHJnYiB2YWx1ZSB0byBoZXggdmFsdWVcclxuICAgIHJnYjJoZXggPSAocmdiOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBfaXRlbUxpc3QgPSByZ2IubWF0Y2goL15yZ2JcXCgoXFxkKyksXFxzKihcXGQrKSxcXHMqKFxcZCspXFwpJC8pO1xyXG4gICAgICAgIHJldHVybiAnIycgK1xyXG4gICAgICAgICAgICAoJzAnICsgcGFyc2VJbnQoX2l0ZW1MaXN0WzFdLCAxMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICAgICAoJzAnICsgcGFyc2VJbnQoX2l0ZW1MaXN0WzJdLCAxMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICAgICAoJzAnICsgcGFyc2VJbnQoX2l0ZW1MaXN0WzNdLCAxMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlzRW1wdHlPYmplY3QgPSAoX3ZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mT2JqZWN0KF92YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRW1wdHlPYmplY3QoX3ZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZkFycmF5KF92YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF92YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2ZTdHJpbmcoX3ZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNFbXB0eVN0cmluZyhfdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc051bGwoX3ZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc29ydE9yZGVyaW5nQ29tcGFyYXRvciA9IChmaWVsZHM6IEFycmF5PG9iamVjdD4sIGlzSWdub3JlQ2FzZT86IGJvb2xlYW4pID0+IHtcclxuICAgICAgICByZXR1cm4gKGE6IG9iamVjdCwgYjogb2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWVsZHMubWFwKChvYmo6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpciA9IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqWzBdID09PSAnLScpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXIgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICBvYmogPSBvYmouc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzSWdub3JlQ2FzZSAmJiBpc1N0cmluZyhhW29ial0pICYmIGlzU3RyaW5nKGJbb2JqXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhW29ial0gPSBhW29ial0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBiW29ial0gPSBiW29ial0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhW29ial0gPiBiW29ial0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGFbb2JqXSA8IGJbb2JqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtKGRpcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHAsIG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcCA/IHAgOiBuO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzb3J0T2JqZWN0T25LZXlzID0gKG9iakFycmF5OiBBcnJheTxvYmplY3Q+LCBzb3J0S2V5U3RyOiBzdHJpbmcsIGlzSWdub3JlQ2FzZT86IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNFbXB0eU9iamVjdChzb3J0S2V5U3RyKSAmJiAhdGhpcy5pc0VtcHR5T2JqZWN0KG9iakFycmF5KSAmJiBBcnJheS5pc0FycmF5KG9iakFycmF5KSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJldHVybiBvYmpBcnJheS5zb3J0KHRoaXMuc29ydE9yZGVyaW5nQ29tcGFyYXRvcihzb3J0S2V5U3RyLnNwbGl0KCd+JyksIGlzSWdub3JlQ2FzZSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmpBcnJheTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmdWYWwgPSAob2JqVmFsOiBvYmplY3QpID0+IG9ialZhbCArICcnO1xyXG4gICAgcmV2ZXJzZVN0cmluZyA9IChzdHJWYWw6IHN0cmluZykgPT4gc3RyVmFsLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XHJcbiAgICByZXZlcnNlID0gKG9ialZhbDogb2JqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzU3RyaW5nKG9ialZhbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZVN0cmluZyh0aGlzLnRvU3RyaW5nVmFsKG9ialZhbCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXkob2JqVmFsKS5yZXZlcnNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFN1bU9uS2V5ID0gKG9iakFycmF5OiBBcnJheTxvYmplY3Q+LCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgIG9iakFycmF5LmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBzdW0gKz0gcGFyc2VGbG9hdCh2YWx1ZVtrZXldKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc3VtO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtYXBGcm9tQXJyYXkgPSA8VD4oX2FycmF5OiBBcnJheTxUPiwgX2tleTogc3RyaW5nLCBpc0xvd2VyY2FzZT86IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBpZiAoaXNOdWxsKF9hcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsga2V5TmFtZTogbmV3IEFycmF5PFQ+KCkgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IF9tYXAgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9hcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaXNOb3ROdWxsKF9hcnJheVtpXVtfa2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0xvd2VyY2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9tYXBbX2FycmF5W2ldW19rZXldLnRvTG93ZXJDYXNlKCldID0gX2FycmF5W2ldO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfbWFwW19hcnJheVtpXVtfa2V5XV0gPSBfYXJyYXlbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9tYXA7XHJcbiAgICB9XHJcblxyXG4gICAgbWFwRnJvbUFycmF5T25Jbm5lcktleSA9IChvYmpBcnJheTogQXJyYXk8b2JqZWN0Piwgb3V0ZXJLZXk6IHN0cmluZywgaW5uZXJLZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9yZXR1cm5IYXNoID0ge307XHJcbiAgICAgICAgb2JqQXJyYXkuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKGlzTnVsbCh2YWx1ZVtvdXRlcktleV0pKSAmJiAoaXNOdWxsKHZhbHVlW291dGVyS2V5XVtpbm5lcktleV0pKSkge1xyXG4gICAgICAgICAgICAgICAgX3JldHVybkhhc2hbdmFsdWVbb3V0ZXJLZXldW2lubmVyS2V5XV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBfcmV0dXJuSGFzaDtcclxuICAgIH1cclxuXHJcbiAgICBtYXBGcm9tVHdvTGV2ZWxBcnJheSA9IChvYmpBcnJheTogQXJyYXk8b2JqZWN0PiwgcmVsQXJyYXlLZXk6IHN0cmluZywgcmVsS2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCByZXR1cm5IYXNoID0ge307XHJcbiAgICAgICAgb2JqQXJyYXkuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc05vdE51bGwodmFsdWUpICYmIGlzTm90TnVsbCh2YWx1ZVtyZWxBcnJheUtleV0pKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVtyZWxBcnJheUtleV0uZm9yRWFjaCgoY2hpbGRWYWw6IG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05vdE51bGwoY2hpbGRWYWxbcmVsS2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuSGFzaFtjaGlsZFZhbFtyZWxLZXldXSA9IGNoaWxkVmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgbWFwRnJvbVR3b0xldmVsSGFzaCA9IChvYmpBcnJheTogQXJyYXk8b2JqZWN0Piwga2V5TmFtZTogc3RyaW5nLCByZWxBcnJheWtleTogc3RyaW5nLCByZWxLZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJldHVybkhhc2ggPSB7fTtcclxuICAgICAgICBvYmpBcnJheS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzTm90TnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBqIGluIHZhbHVlW2ldW3JlbEFycmF5a2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOb3ROdWxsKHZhbHVlW2ldW3JlbEFycmF5a2V5XVtqXVtyZWxLZXldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuSGFzaFt2YWx1ZVtpXVtyZWxBcnJheWtleV1bal1bcmVsS2V5XV0gPSB2YWx1ZVtpXVtyZWxBcnJheWtleV1bal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuSGFzaDtcclxuICAgIH1cclxuXHJcbiAgICBtYXBGcm9tQXJyYXlXaXRoUmVsID0gKG9iakFycmF5OiBBcnJheTxvYmplY3Q+LCBrZXk6IHN0cmluZywgcmVsQXJyYXlLZXk6IHN0cmluZywgcmVsS2V5OiBzdHJpbmcpID0+IHtcclxuXHJcblxyXG4gICAgICAgIG9iakFycmF5LmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNOb3ROdWxsKHZhbHVlW3JlbEFycmF5S2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlW3JlbEFycmF5S2V5ICsgJ01hcCddID0gdGhpcy5tYXBGcm9tQXJyYXkodmFsdWVbcmVsQXJyYXlLZXldLCByZWxLZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwRnJvbUFycmF5KG9iakFycmF5LCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdpbGwgcmV0dXJuIHRoZSBzdHJpbmcgdmFsdWUgb24gb2JqZWN0cyB2YWx1ZXNcclxuICAgIGdldFN0cmluZ09mT2JqZWN0T25LZXkgPSAob2JqZWN0VmFsOiBvYmplY3QsIHNraXBLZXk/OiBib29sZWFuLCBrZXlBcnJheT86IEFycmF5PHN0cmluZz4pID0+IHtcclxuICAgICAgICBza2lwS2V5ID0gc2tpcEtleSB8fCBmYWxzZTtcclxuICAgICAgICBjb25zdCBfa2V5QXJyYXkgPSBza2lwS2V5ID8gW10gOiBrZXlBcnJheTtcclxuICAgICAgICBsZXQgX3JldHVyblN0ciA9ICcnO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdFZhbCkge1xyXG4gICAgICAgICAgICBpZiAoIXNraXBLZXkgJiYgIV9rZXlBcnJheS5pbmNsdWRlcyhrZXkudG9TdHJpbmcoKSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3JldHVyblN0ciArPSAnICcgKyBvYmplY3RWYWxba2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9yZXR1cm5TdHI7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyQXJyYXkgPSAoaW5wdXRBcnJheTogb2JqZWN0W10sIHNlYXJjaFRlcm06IHN0cmluZywgc2tpcEZpbHRlcktleT86IGJvb2xlYW4sIGZpbHRlcktleVN0cjogc3RyaW5nID0gJycpID0+IHtcclxuICAgICAgICBjb25zdCBfZmlsdGVyQXJyYXkgPSBuZXcgQXJyYXk8b2JqZWN0PigpO1xyXG4gICAgICAgIGNvbnN0IF9zZXJjaFRlcm0gPSBzZWFyY2hUZXJtLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgX2tleUFycmF5ID0gZmlsdGVyS2V5U3RyLnNwbGl0KCd+Jyk7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgPSAwOyBfaSA8IGlucHV0QXJyYXkubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IF9pdGVtID0gaW5wdXRBcnJheVtfaV07XHJcbiAgICAgICAgICAgIGNvbnN0IF9vYmplY3RWYWxTdHIgPSB0aGlzLmdldFN0cmluZ09mT2JqZWN0T25LZXkoX2l0ZW0sIHNraXBGaWx0ZXJLZXksIF9rZXlBcnJheSk7XHJcbiAgICAgICAgICAgIGlmIChfb2JqZWN0VmFsU3RyLnRvTG9jYWxlTG93ZXJDYXNlKCkubWF0Y2goX3NlcmNoVGVybSkpIHtcclxuICAgICAgICAgICAgICAgIF9maWx0ZXJBcnJheS5wdXNoKF9pdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX2ZpbHRlckFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHJlcGxhY2VBbGwoc3RyaW5nT2JqOiBzdHJpbmcsIGlucHV0U3RyOiBzdHJpbmcsIG91dFB1dFN0cjogc3RyaW5nLCBpZ25vcmU/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nT2JqLnJlcGxhY2UobmV3IFJlZ0V4cChpbnB1dFN0ci5yZXBsYWNlKC8oW1xcL1xcLFxcIVxcXFxcXF5cXCRcXHtcXH1cXFtcXF1cXChcXClcXC5cXCpcXCtcXD9cXHxcXDxcXD5cXC1cXCZdKS9nLFxyXG4gICAgICAgICAgICAnXFxcXCQmJyksIChpZ25vcmUgPyAnZ2knIDogJ2cnKSksICh0eXBlb2YgKG91dFB1dFN0cikgPT09ICdzdHJpbmcnKSA/XHJcbiAgICAgICAgICAgIG91dFB1dFN0ci5yZXBsYWNlKC9cXCQvZywgJyQkJCQnKSA6IG91dFB1dFN0cik7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtYXBGcm9tQXJyYXlPZkFycmF5T2JqZWN0cyhvYmplY3Q6IG9iamVjdCwgYXJyYXlPYmplY3Q6IEFycmF5PG9iamVjdD4sIGtleU5hbWU6IHN0cmluZywgYXJyYXlOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyAnaWQnLCAnbWVudUl0ZW1BcnJheScgdGhpcy5tZW51RGF0YUhhc2gsIHRoaXMubWVudURhdGEubWVudUl0ZW1BcnJheVxyXG4gICAgICAgIGlmIChhcnJheU9iamVjdCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2JqZWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOb3ROdWxsKGFycmF5T2JqZWN0W2ldW2tleU5hbWVdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFthcnJheU9iamVjdFtpXVtrZXlOYW1lXV0gPSBhcnJheU9iamVjdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlOYW1lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBGcm9tQXJyYXlPZkFycmF5T2JqZWN0cyhvYmplY3QsIGFycmF5T2JqZWN0W2ldW2FycmF5TmFtZV0sIGtleU5hbWUsIGFycmF5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvcHkob2JqZWN0OiBvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0VtcHR5T2JqZWN0KG9iamVjdCkgPyBvYmplY3QgOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvQm9vbGVhbihib2xTdHI6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChpc05vdE51bGwoYm9sU3RyKSAmJiAoYm9sU3RyID09PSB0cnVlIHx8IGJvbFN0ciA9PT0gJ3RydWUnIHx8IGJvbFN0ciA9PT0gMSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYXJyYXlGcm9tTWFwKG9iamVjdE1hcDogb2JqZWN0KSB7XHJcbiAgICAgICAgY29uc3QgcmV0dXJuQXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3RNYXApIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdE1hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKG9iamVjdE1hcFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgYXJyYXlGcm9tQXJyYXlPZk1hcChvYmplY3RBcnJheTogQXJyYXk8b2JqZWN0Piwga2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGlzTm90TnVsbChvYmplY3RBcnJheVtpXVtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaChvYmplY3RBcnJheVtpXVtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgc2luZ2xlS2V5QXJyYXlGcm9tTWFwKGFycmF5T2JqZWN0OiBBcnJheTxvYmplY3Q+LCBrZXlOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBhcnJheUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2JqZWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpc05vdE51bGwoYXJyYXlPYmplY3RbaV1ba2V5TmFtZV0pKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJheUxpc3QucHVzaChhcnJheU9iamVjdFtpXVtrZXlOYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnJheUxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgYWx0YUZvcm1hdHRlcih2YWw6IGFueSwgcHJlZml4OiBhbnksIGRlY2ltYWxWYWxTdHJlbmd0aDogYW55LCBzdWZmaXg6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsID0gdmFsO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiByZXNwb25zZU9iamVjdChfdmFsOiBhbnksIGZvcm1hdENhbGw6IGJvb2xlYW4sIG5vRm9ybWF0OiBib29sZWFuLCBvcmlnaW5hbHZhbDogYW55KSB7XHJcbiAgICAgICAgICAgIGxldCBfZXNwID0geyB2YWx1ZTogJycsIG9sZHZhbHVlOiAnJywgZm9ybWF0Y2FsbGluZzogbnVsbCwgbm9mb3JtYXQ6IG51bGwgfTtcclxuICAgICAgICAgICAgX2VzcC52YWx1ZSA9IF92YWw7XHJcbiAgICAgICAgICAgIF9lc3Aub2xkdmFsdWUgPSBvcmlnaW5hbHZhbDtcclxuICAgICAgICAgICAgX2VzcC5mb3JtYXRjYWxsaW5nID0gZm9ybWF0Q2FsbDtcclxuICAgICAgICAgICAgX2VzcC5ub2Zvcm1hdCA9IG5vRm9ybWF0O1xyXG4gICAgICAgICAgICByZXR1cm4gX2VzcDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgY2FsbGluZ1N0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgbGV0IG5vU3RhdHVzID0gdHJ1ZTsgLy8gaWYgaXRzIHRydWUgbnVtYmVyIGlzIGluIHJpZ2h0IGZvcm1hdCBlbHNlIG51bWJlciBpcyBpbiB3cm9uZyBmb3JtYXRcclxuICAgICAgICBpZiAoaXNOdWxsKHByZWZpeCkgfHwgaXNOYU4ocHJlZml4KSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY2FsbGluZ1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwcmVmaXggPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTnVsbChzdWZmaXgpIHx8IGlzTmFOKHN1ZmZpeCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNhbGxpbmdTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgc3VmZml4ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc051bGwoZGVjaW1hbFZhbFN0cmVuZ3RoKSB8fCBkZWNpbWFsVmFsU3RyZW5ndGggPT09ICcnIHx8IGlzTmFOKGRlY2ltYWxWYWxTdHJlbmd0aCkpIHtcclxuICAgICAgICAgICAgY2FsbGluZ1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkZWNpbWFsVmFsU3RyZW5ndGggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzTm90TnVsbCh2YWwpICYmICFpc05hTih2YWwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZU9iamVjdCh0aGlzLmN1cnJlbmN5Umd4Rm9ybWF0KHBhcnNlRmxvYXQodmFsKSwgcHJlZml4LCBkZWNpbWFsVmFsU3RyZW5ndGgpICsgJycgKyBzdWZmaXgsXHJcbiAgICAgICAgICAgICAgICBjYWxsaW5nU3RhdHVzLCBub1N0YXR1cywgdmFsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VPYmplY3QodmFsLCBjYWxsaW5nU3RhdHVzLCBub1N0YXR1cywgb3JpZ2luYWxWYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZm9ybWF0KHZhbHVlOiBhbnksIElJRDogc3RyaW5nLCBjb3VudHJ5Rm9ybWF0Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGlzTnVsbChjb3VudHJ5Rm9ybWF0KSkge1xyXG4gICAgICAgICAgICBjb3VudHJ5Rm9ybWF0ID0gJyQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSUlEID09PSAnJCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgY291bnRyeUZvcm1hdCwgMCwgJycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoSUlEID09PSAnTicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgJycsIDAsICcnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKElJRCA9PT0gJyQxRCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgY291bnRyeUZvcm1hdCwgMSwgJycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoSUlEID09PSAnJDJEJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbHRhRm9ybWF0dGVyKHZhbHVlLCBjb3VudHJ5Rm9ybWF0LCAyLCAnJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChJSUQgPT09ICckM0QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFsdGFGb3JtYXR0ZXIodmFsdWUsIGNvdW50cnlGb3JtYXQsIDMsICcnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKElJRCA9PT0gJyQ0RCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgY291bnRyeUZvcm1hdCwgNCwgJycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoSUlEID09PSAnMUQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFsdGFGb3JtYXR0ZXIodmFsdWUsICcnLCAxLCAnJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChJSUQgPT09ICcyRCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgJycsIDIsICcnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKElJRCA9PT0gJzNEJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbHRhRm9ybWF0dGVyKHZhbHVlLCAnJywgMywgJycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoSUlEID09PSAnJScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgJycsIDIsICclJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1lcmdlSGFzaChkZXN0aW5hdGlvbjogYW55LCBzcmM6IGFueSkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNyYykge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcmNba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc051bGwoZGVzdGluYXRpb25ba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gZGVzdGluYXRpb25ba2V5XS5jb25jYXQoc3JjW2tleV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IHNyY1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyBlbmQgb2YgZm9yIGxvb3BcclxuICAgICAgICByZXR1cm4gZGVzdGluYXRpb247XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFN1bU9uVGhlQmFzaXNPZktleShhcnJheU9iamVjdDogYW55LCBrZXkxOiBhbnksIGtleTI6IGFueSkge1xyXG4gICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc3VtICs9IHBhcnNlRmxvYXQoYXJyYXlPYmplY3RbaV1ba2V5MV1ba2V5Ml0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VtO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRTaW1wbGVIYXNoKGFycmF5T2ZPYmplY3Q6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IF9yZXR1cm5PYmogPSB7fTtcclxuICAgICAgICBhcnJheU9mT2JqZWN0LmZvckVhY2goKG9iajogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIF9yZXR1cm5PYmpbb2JqXSA9IG9iajtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gX3JldHVybk9iajtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY291bnRPY2N1cmVuY2Uoc3RyaW5ndmFsdWU6IGFueSwgY2hhcnZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5ndmFsdWUubWF0Y2gobmV3IFJlZ0V4cChjaGFydmFsdWUsICdnJykgfHwgW10pLmxlbmd0aDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVwbGFjZURvdFRvVW5kZXJzY29yZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlQWxsKCcuJywgJ18nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjaGVja0NvbGxlY3Rpb25MZW5ndGgob2JqOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VtcHR5T2JqZWN0KG9iaikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mT2JqZWN0KG9iaikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmoubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBoYXNoRnJvbUFycmF5V2l0aFJkKGFycmF5T2JqZWN0czogQXJyYXk8YW55Piwga2V5TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgX3JldHVybkhhc2ggPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhcnJheU9iamVjdHNbaV1ba2V5TmFtZV07XHJcbiAgICAgICAgICAgIGlmIChpc05vdE51bGwoX3JldHVybkhhc2hba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIF9yZXR1cm5IYXNoW2tleV0ucHVzaChhcnJheU9iamVjdHNbaV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3JldHVybkhhc2hba2V5XSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgX3JldHVybkhhc2hba2V5XS5wdXNoKGFycmF5T2JqZWN0c1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9yZXR1cm5IYXNoO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdFNoaWZ0VGltZSh0aW1lOiBhbnksIHNoaWZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgdGltZUFyciA9IHRpbWUuc3BsaXQoJyAtICcpO1xyXG4gICAgICAgIGlmICh0aW1lQXJyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGltZUFyciA9IHRpbWUuc3BsaXQoJyAtJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lQXJyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGltZUFyciA9IHRpbWUuc3BsaXQoJy0nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpbWVBcnIubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aW1lQXJyID0gdGltZS5zcGxpdCgnLSAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gdGltZUFyclswXS50cmltKCkuc3Vic3RyKDAsIHRpbWVBcnJbMF0udHJpbSgpLmxlbmd0aCAtIDIpO1xyXG4gICAgICAgIGNvbnN0IGVuZFRpbWUgPSB0aW1lQXJyWzFdLnRyaW0oKS5zdWJzdHIoMCwgdGltZUFyclsxXS50cmltKCkubGVuZ3RoIC0gMik7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lQXJyID0gc3RhcnRUaW1lLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgaWYgKHN0YXJ0VGltZUFyci5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyYWRpeFxyXG4gICAgICAgICAgICBzaGlmdC5zdGFydFRpbWUgPSBwYXJzZUludChzdGFydFRpbWVBcnJbMF0pICogNjAgKyBwYXJzZUludChzdGFydFRpbWVBcnJbMV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyYWRpeFxyXG4gICAgICAgICAgICBzaGlmdC5zdGFydFRpbWUgPSBwYXJzZUludChzdGFydFRpbWVBcnJbMF0pICogNjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGVuZFRpbWVBcnIgPSBlbmRUaW1lLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgaWYgKGVuZFRpbWVBcnIubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmFkaXhcclxuICAgICAgICAgICAgc2hpZnQuZW5kVGltZSA9IHBhcnNlSW50KGVuZFRpbWVBcnJbMF0pICogNjAgKyBwYXJzZUludChlbmRUaW1lQXJyWzFdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmFkaXhcclxuICAgICAgICAgICAgc2hpZnQuZW5kVGltZSA9IHBhcnNlSW50KGVuZFRpbWVBcnJbMF0pICogNjA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEluZGV4V2l0aFR3b0tleXMoYXJyYXk6IEFycmF5PGFueT4sIGZpcnN0S2V5OiBzdHJpbmcsIGZpcnN0VmFsdWU6IGFueSwgc2Vjb25kS2V5OiBzdHJpbmcsIHNlY29uZFZhbDogYW55KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoKGFycmF5W2ldW2ZpcnN0S2V5XSA9PT0gZmlyc3RWYWx1ZSkgJiYgKGFycmF5W2ldW3NlY29uZEtleV0gPT09IHNlY29uZFZhbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmRleElmT2JqV2l0aEF0dHIoYXJyYXk6IEFycmF5PGFueT4sIGF0dHI6IGFueSwgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFycmF5W2ldW2F0dHJdID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWRPYmplY3RzKG9iajE6IGFueSwgb2JqMjogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIGlzTnVsbChvYmoxKSAmJiBpc051bGwob2JqMik7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTYW1lT2JqZWN0cyhoYXNoT2JqZWN0MTogYW55LCBoYXNoT2JqZWN0MjogYW55KSB7XHJcbiAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jaGVja0NvbGxlY3Rpb25MZW5ndGgoaGFzaE9iamVjdDEpID4gMCAmJiB0aGlzLmNoZWNrQ29sbGVjdGlvbkxlbmd0aChoYXNoT2JqZWN0MikgPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGhhc2hPYmplY3QxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZE9iamVjdHMoaGFzaE9iamVjdDFba2V5XSwgaGFzaE9iamVjdDJba2V5XSkgJiYgaGFzaE9iamVjdDFba2V5XSAhPT0gaGFzaE9iamVjdDJba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZsYWc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvcHlPYmplY3Qob2JqOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0VtcHR5T2JqZWN0KG9iaikgPyBvYmogOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG4gICAgfVxyXG5cclxuICAgIG9iamVjdEVxdWFscyh4OiBhbnksIHk6IGFueSkge1xyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAgICAgaWYgKHggPT09IG51bGwgfHwgeCA9PT0gdW5kZWZpbmVkIHx8IHkgPT09IG51bGwgfHwgeSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB4ID09PSB5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhZnRlciB0aGlzIGp1c3QgY2hlY2tpbmcgdHlwZSBvZiBvbmUgd291bGQgYmUgZW5vdWdoXHJcbiAgICAgICAgaWYgKHguY29uc3RydWN0b3IgIT09IHkuY29uc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiB0aGV5IGFyZSBmdW5jdGlvbnMsIHRoZXkgc2hvdWxkIGV4YWN0bHkgcmVmZXIgdG8gc2FtZSBvbmUgKGJlY2F1c2Ugb2YgY2xvc3VyZXMpXHJcbiAgICAgICAgaWYgKHggaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4geCA9PT0geTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgdGhleSBhcmUgcmVnZXhwcywgdGhleSBzaG91bGQgZXhhY3RseSByZWZlciB0byBzYW1lIG9uZSAoaXQgaXMgaGFyZCB0byBiZXR0ZXIgZXF1YWxpdHkgY2hlY2sgb24gY3VycmVudCBFUylcclxuICAgICAgICBpZiAoeCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG4gICAgICAgICAgICByZXR1cm4geCA9PT0geTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHggPT09IHkgfHwgeC52YWx1ZU9mKCkgPT09IHkudmFsdWVPZigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSAmJiB4Lmxlbmd0aCAhPT0geS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgdGhleSBhcmUgZGF0ZXMsIHRoZXkgbXVzdCBoYWQgZXF1YWwgdmFsdWVPZlxyXG4gICAgICAgIGlmICh4IGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB0aGV5IGFyZSBzdHJpY3RseSBlcXVhbCwgdGhleSBib3RoIG5lZWQgdG8gYmUgb2JqZWN0IGF0IGxlYXN0XHJcbiAgICAgICAgaWYgKCEoeCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh5IGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZWN1cnNpdmUgb2JqZWN0IGVxdWFsaXR5IGNoZWNrXHJcbiAgICAgICAgY29uc3QgcCA9IE9iamVjdC5rZXlzKHgpO1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh5KS5ldmVyeSgoaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcC5pbmRleE9mKGkpICE9PSAtMTtcclxuICAgICAgICB9KSAmJlxyXG4gICAgICAgICAgICBwLmV2ZXJ5KChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RFcXVhbHMoeFtpXSwgeVtpXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGR1bW15QXJyYXlPZkxlbmd0aChsZW5ndGg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzLnB1c2goaSArIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0Q2xlYW5YTUwoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoaXNOdWxsKHN0cikpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHN0ci5pbmRleE9mKCcmJykgPT09IC0xKSAmJiAoc3RyLmluZGV4T2YoJzwnKSA9PT0gLTEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHIgPT09ICcmbmJzcDsnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdHJCdWYgPSAnJztcclxuICAgICAgICBjb25zdCBjaGFyQXJyYXkgPSBzdHIuc3BsaXQoJycpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhckFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGFyQXJyYXlbaV0gPT09ICcmJykge1xyXG4gICAgICAgICAgICAgICAgc3RyQnVmICs9ICcmYW1wOyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhckFycmF5W2ldID09PSAnPCcpIHtcclxuICAgICAgICAgICAgICAgIHN0ckJ1ZiArPSAnJmx0Oyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhckFycmF5W2ldID09PSAnPicpIHtcclxuICAgICAgICAgICAgICAgIHN0ckJ1ZiArPSAnJmd0Oyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdHJCdWYgKz0gKGNoYXJBcnJheVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0ckJ1Zi50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXBsYWNlU3RyaW5nQXQoc291cmNlU3RyOiBzdHJpbmcsIHNJbmRleDogbnVtYmVyLCBlbmRJbmRleDogbnVtYmVyLCB0b1N0cmluZzogYW55KSB7XHJcbiAgICAgICAgbGV0IF9yZXR1cm5TdHIgPSAnJztcclxuICAgICAgICBfcmV0dXJuU3RyICs9IHNvdXJjZVN0ci5zdWJzdHJpbmcoMCwgc0luZGV4KTtcclxuICAgICAgICBfcmV0dXJuU3RyICs9IHRvU3RyaW5nO1xyXG4gICAgICAgIF9yZXR1cm5TdHIgKz0gKHNvdXJjZVN0ci5zdWJzdHJpbmcoZW5kSW5kZXgsIHNvdXJjZVN0ci5sZW5ndGgpKTtcclxuICAgICAgICByZXR1cm4gX3JldHVyblN0cjtcclxuICAgIH1cclxuXHJcbiAgICBtZXJnZU9iamVjdChkZXN0T2JqOiBhbnksIHNvdXJjZU9iajogYW55KSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlT2JqKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0VtcHR5T2JqZWN0KHNvdXJjZU9ialtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgZGVzdE9ialtrZXldID0gc291cmNlT2JqW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlc3RPYmo7XHJcbiAgICB9XHJcblxyXG4gICAgaXNOdW1iZXJTdHIobnVtU3RyOiBhbnkpIHtcclxuICAgICAgICBudW1TdHIgPSBudW1TdHIudHJpbSgnICcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRW1wdHlPYmplY3QobnVtU3RyKSA/IGZhbHNlIDogbnVtU3RyLm1hdGNoKC9eXFxzKihcXC18XFwrKT8oXFxkK3woXFxkKihcXC5cXGQqKSkpXFxzKiQvKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaXNJbnRlZ2VyTnVtYmVyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKC9eWzAtOV0qJC8pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0cmluZ1NvcnRBcnJheShhcnJheU9iamVjdDogYW55LCBrZXlOYW1lOiBzdHJpbmcsIGlzUmV2ZXJzZT86IGJvb2xlYW4pIHtcclxuICAgICAgICBhcnJheU9iamVjdC5zb3J0KChvYmplY3QxOiBhbnksIG9iamVjdDI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNSZXZlcnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0MltrZXlOYW1lXS5sb2NhbGVDb21wYXJlKG9iamVjdDFba2V5TmFtZV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDFba2V5TmFtZV0ubG9jYWxlQ29tcGFyZShvYmplY3QyW2tleU5hbWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBhcnJheU9iamVjdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0RGlmZmVyZW5jZShhcnJheTE6IEFycmF5PGFueT4sIGFycmF5MjogQXJyYXk8YW55Piwga2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCB0ZW1wQXJyYXkgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheTEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXJyYXkxW2luZGV4XVtrZXldO1xyXG4gICAgICAgICAgICBjb25zdCBhbm90aGVyQXJyYXkgPSBhcnJheTIuZmlsdGVyKChkYXRhT2JqOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhT2JqW2tleV0gPT09IHZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGFub3RoZXJBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRlbXBBcnJheS5wdXNoKGFycmF5MVtpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5ldGVyc2VjdGlvbihhcnJheTE6IEFycmF5PGFueT4sIGFycmF5MjogQXJyYXk8YW55Piwga2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCB0ZW1wQXJyYXkgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheTEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXJyYXkxW2luZGV4XVtrZXldO1xyXG4gICAgICAgICAgICBjb25zdCBhbm90aGVyQXJyYXkgPSBhcnJheTIuZmlsdGVyKChkYXRhT2JqOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhT2JqW2tleV0gPT09IHZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGFub3RoZXJBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wQXJyYXkucHVzaChhcnJheTFbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcEFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJvb2xWYWx1ZShib29sKSB7XHJcbiAgICAgICAgaWYgKGlzTm90TnVsbChib29sKSAmJiAoYm9vbCA9PT0gdHJ1ZSB8fCBib29sID09PSAndHJ1ZScgfHwgYm9vbCA9PT0gMSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3luY0xvb3AoaXRlcmF0aW9ucywgZG9Qcm9jZXNzLCBleGl0KSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBsZXQgZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzaG91bGRFeGl0ID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgbG9vcE9iamVjdCA9IHtcclxuICAgICAgICAgICAgbmV4dCgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZEV4aXQgJiYgZXhpdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhpdCgpOyAvLyBFeGl0IHRoZSBsb29wXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZG8gaXRlYXRpb25cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IGl0ZXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCsrOyAvLyBpbmNyZWFzZSBJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIGRvUHJvY2Vzcyhsb29wT2JqZWN0KTsgLy8gUnVuIG91ciBwcm9jZXNzLCBwYXNzIGluIHRoZSBsb29wXHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTsgLy8gTWFrZSBzdXJlIHdlIHNheSB3ZSdyZSBkb25lXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gLy8gQ2FsbCB0aGUgY2FsbGJhY2sgb24gZXhpdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpdGVyYXRpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggLSAxOyAvLyBSZXR1cm4gdGhlIGN1cnJlbnQgaW5kZXggY291bnRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnJlYWsoZW5kKSB7XHJcbiAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTsgLy8gRW5kIHRoZSBsb29wXHJcbiAgICAgICAgICAgICAgICBzaG91bGRFeGl0ID0gZW5kOyAvLyBQYXNzaW5nIGVuZCBhcyB0cnVlIG1lYW5zIHdlIHN0aWxsIGNhbGwgdGhlIGV4aXQgY2FsbGJhY2tcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbG9vcE9iamVjdC5uZXh0KCk7IC8vIHJ1biBmb3IgZmlyc3QgdGltZS4uLlxyXG4gICAgICAgIHJldHVybiBsb29wT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4iXX0=