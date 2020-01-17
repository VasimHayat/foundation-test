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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9mbi11dGlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGFBQWEsRUFDYixXQUFXLEVBQ1gsUUFBUSxFQUNSLFNBQVMsRUFDVCxZQUFZLEVBQ1osYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUl2RCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFFeEIsWUFBb0IsYUFBdUIsRUFBVSxTQUF1QjtRQUF4RCxrQkFBYSxHQUFiLGFBQWEsQ0FBVTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWM7O1FBdUk1RSxZQUFPOzs7O1FBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTs7a0JBQ2xCLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDO1lBQy9ELE9BQU8sR0FBRztnQkFDUixDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFD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LCtDQVFDOztJQUVELDZDQVlDOztJQUVELDRDQWVDOztJQUVELDRDQVNDOztJQUdELCtDQWFDOztJQUVELG9DQVlDOzs7OztJQXBUVyxzQ0FBK0I7Ozs7O0lBQUUsa0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFZhc2ltIEhheWF0IEAgMS8yNC8yMDE4XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEYXRlUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQge3NvcnRBcnJheX0gZnJvbSAnLi4vdXRpbC9hcnJheSc7XHJcbmltcG9ydCB7XHJcbiAgaXNOdWxsLFxyXG4gIHR5cGVvZk9iamVjdCxcclxuICBpc0VtcHR5T2JqZWN0LFxyXG4gIHR5cGVvZkFycmF5LFxyXG4gIGlzU3RyaW5nLFxyXG4gIGlzTm90TnVsbCxcclxuICB0eXBlb2ZTdHJpbmcsXHJcbiAgaXNFbXB0eVN0cmluZ1xyXG59IGZyb20gJy4uL3V0aWwvY2hlY2snO1xyXG5pbXBvcnQge0ZuRGF0ZX0gZnJvbSAnLi4vdXRpbC90eXBlcyc7XHJcbmltcG9ydCB7Q1VSUkVOQ1lfUkVHRVh9IGZyb20gJy4uL2NvbnN0YW50L2ZuLmNvbnN0YW50JztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGblV0aWxTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlRm9ybWF0dGVyOiBEYXRlUGlwZSwgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGZvcm1hdD86IHN0cmluZywgdGltZXpvbmU/OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0ZUZvcm1hdHRlci50cmFuc2Zvcm0odmFsdWUsIGZvcm1hdCwgdGltZXpvbmUsIGxvY2FsZSk7XHJcbiAgfVxyXG5cclxuICBjb21waWxlSHRtbChodG1sU3RyOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sU3RyKTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRIdG1sVG9TdHJpbmcoaHRtbFN0cjogYW55KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBodG1sU3RyID8gU3RyaW5nKGh0bWxTdHIpLnJlcGxhY2UoLzxbXj5dKz4vZ20sICcnKSA6ICcnO1xyXG4gIH1cclxuXHJcblxyXG4gIHNvcnRBcnJheShvYmplY3RBcnJheTogQXJyYXk8YW55Piwga2V5OiBzdHJpbmcsIGlzRGVzYz86IGJvb2xlYW4pIHtcclxuICAgIHJldHVybiBzb3J0QXJyYXkob2JqZWN0QXJyYXksIGtleSwgaXNEZXNjKTtcclxuICB9XHJcblxyXG4gIGdldFdlZWsoYnVzaURhdGU6IGFueSkge1xyXG4gICAgY29uc3QgZkRhdGUgPSBuZXcgRGF0ZShidXNpRGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgIHJldHVybiBNYXRoLmNlaWwoKCgoYnVzaURhdGUuZ2V0VGltZSgpIC0gZkRhdGUuZ2V0VGltZSgpKSAvIDg2NDAwMDAwKSArIGZEYXRlLmdldERheSgpICsgMSkgLyA3KTtcclxuICB9XHJcblxyXG4gIGdldERhdGVCeUluZGV4KGluZGV4OiBudW1iZXIsIGRhdGVPYjogRm5EYXRlLCBpc0ZpcnN0RGF5OiBib29sZWFuLCBpc0xhc3REYXk/OiBib29sZWFuKTogRGF0ZSB7XHJcblxyXG4gICAgbGV0IGRhdGUgPSAwO1xyXG4gICAgY29uc3QgX2RhdGVPYmogPSBuZXcgRGF0ZShkYXRlT2IpO1xyXG5cclxuICAgIGlmIChpbmRleCA+IF9kYXRlT2JqLmdldERheSgpKSB7XHJcbiAgICAgIGRhdGUgPSAoX2RhdGVPYmouZ2V0RGF0ZSgpICsgaW5kZXggLSBfZGF0ZU9iai5nZXREYXkoKSkgLSA3O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF0ZSA9IF9kYXRlT2JqLmdldERhdGUoKSArIChpbmRleCAtIF9kYXRlT2JqLmdldERheSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNGaXJzdERheSkge1xyXG4gICAgICBfZGF0ZU9iai5zZXREYXRlKGRhdGUpO1xyXG4gICAgfSBlbHNlIGlmIChpc0xhc3REYXkpIHtcclxuICAgICAgX2RhdGVPYmouc2V0RGF0ZShkYXRlICsgNyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIF9kYXRlT2JqO1xyXG5cclxuICB9XHJcblxyXG4gIGdldFdlZWtEaWZmKHN0YXJ0SW5kZXg6IG51bWJlciwgc3RhcnREYXRlOiBGbkRhdGUsIGVuZERhdGU6IEZuRGF0ZSk6IG51bWJlciB7XHJcbiAgICBjb25zdCB3ZWVrMSA9IHRoaXMuZ2V0RGF0ZUJ5SW5kZXgoc3RhcnRJbmRleCwgc3RhcnREYXRlLCB0cnVlLCBmYWxzZSk7XHJcbiAgICBjb25zdCB3ZWVrMiA9IHRoaXMuZ2V0RGF0ZUJ5SW5kZXgoc3RhcnRJbmRleCwgZW5kRGF0ZSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgY29uc3Qgd2Vla0NvdW50MSA9IHRoaXMuZ2V0V2Vlayh3ZWVrMSk7XHJcbiAgICBsZXQgd2Vla0NvdW50MiA9IHRoaXMuZ2V0V2Vlayh3ZWVrMik7XHJcbiAgICBpZiAod2Vla0NvdW50MiA8IHdlZWtDb3VudDEpIHtcclxuICAgICAgd2Vla0NvdW50MiArPSA1MjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5vT2ZXZWVrID0gKHdlZWtDb3VudDIgLSB3ZWVrQ291bnQxICsgMSk7XHJcbiAgICByZXR1cm4gbm9PZldlZWs7XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrQXJyYXlGb3JEYXRlcyhfc3RhcnRJbmRleDogbnVtYmVyLCBfc3RhcnREYXRlOiBGbkRhdGUsIF9lbmREYXRlOiBGbkRhdGUpOiBBcnJheTxEYXRlPiB7XHJcbiAgICBjb25zdCBub09mV2VlayA9IHRoaXMuZ2V0V2Vla0RpZmYoX3N0YXJ0SW5kZXgsIF9zdGFydERhdGUsIF9lbmREYXRlKTtcclxuICAgIGNvbnN0IG5ld1N0YXJ0RGF0ZSA9IHRoaXMuZ2V0RGF0ZUJ5SW5kZXgoX3N0YXJ0SW5kZXgsIF9zdGFydERhdGUsIHRydWUsIGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB3ZWVrQXJyYXkgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9PZldlZWs7IGkrKykge1xyXG4gICAgICBjb25zdCBfd2Vla0RhdGUgPSB0aGlzLmdldERhdGVCeUluZGV4KF9zdGFydEluZGV4LCBuZXdTdGFydERhdGUsIHRydWUsIGZhbHNlKTtcclxuICAgICAgd2Vla0FycmF5LnB1c2godGhpcy5kYXRlRm9ybWF0dGVyLnRyYW5zZm9ybShfd2Vla0RhdGUsICdNTS9kZC95eXl5JykpO1xyXG4gICAgICBuZXdTdGFydERhdGUuc2V0RGF0ZShuZXdTdGFydERhdGUuZ2V0RGF0ZSgpICsgNyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2Vla0FycmF5O1xyXG4gIH1cclxuXHJcbiAgZ2V0V2Vla0FycmF5KHN0YXJ0RGF0ZTogRm5EYXRlLCBub09mV2VlazogbnVtYmVyKTogQXJyYXk8RGF0ZT4ge1xyXG4gICAgY29uc3Qgd2Vla0FycmF5ID0gW107XHJcbiAgICBjb25zdCBuZXdTdGFydERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub09mV2VlazsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG5ld1dlZWtIYXNoID0ge3N0YXJ0RGF0ZTogbnVsbCwgZW5kRGF0ZTogbnVsbCwgZm9ybWF0dGVkRW5kRGF0ZTogbnVsbH07XHJcbiAgICAgIG5ld1dlZWtIYXNoLnN0YXJ0RGF0ZSA9IG5ld1N0YXJ0RGF0ZTtcclxuICAgICAgbmV3V2Vla0hhc2guZW5kRGF0ZSA9IG5ldyBEYXRlKG5ld1N0YXJ0RGF0ZS5zZXREYXRlKG5ld1N0YXJ0RGF0ZS5nZXREYXRlKCkgKyA2KSk7XHJcbiAgICAgIG5ld1dlZWtIYXNoLmZvcm1hdHRlZEVuZERhdGUgPSB0aGlzLmRhdGVGb3JtYXR0ZXIudHJhbnNmb3JtKG5ld1dlZWtIYXNoLmVuZERhdGUsICd5eXl5TU1kZCcpO1xyXG4gICAgICB3ZWVrQXJyYXkucHVzaChuZXdXZWVrSGFzaCk7XHJcbiAgICAgIG5ld1N0YXJ0RGF0ZS5zZXREYXRlKG5ld1N0YXJ0RGF0ZS5nZXREYXRlKCkgKyAxKTtcclxuICAgIH1cclxuICAgIHJldHVybiB3ZWVrQXJyYXk7XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrQXJyYXlPbkluZGV4KGluZGV4OiBudW1iZXIsIGRhdGVPYiwgaXNGaXJzdERheSwgaXNMYXN0RGF5KSB7XHJcbiAgICBjb25zdCBkYXRlT2JqQXJyYXkgPSBbXTtcclxuICAgIGxldCBkYXRlID0gMDtcclxuICAgIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZShkYXRlT2IpO1xyXG4gICAgaWYgKGluZGV4ID4gZGF0ZU9iai5nZXREYXkoKSkge1xyXG4gICAgICBkYXRlID0gKGRhdGVPYmouZ2V0RGF0ZSgpICsgaW5kZXggLSBkYXRlT2JqLmdldERheSgpKSAtIDc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYXRlID0gZGF0ZU9iai5nZXREYXRlKCkgKyAoaW5kZXggLSBkYXRlT2JqLmdldERheSgpKTtcclxuICAgIH1cclxuICAgIGlmIChpc0ZpcnN0RGF5KSB7XHJcbiAgICAgIGNvbnN0IGRhdGVPYmplY3QgPSBuZXcgRGF0ZShkYXRlT2IpO1xyXG4gICAgICBkYXRlT2JqZWN0LnNldERhdGUoZGF0ZSk7XHJcbiAgICAgIHJldHVybiBkYXRlT2JqZWN0O1xyXG4gICAgfSBlbHNlIGlmIChpc0xhc3REYXkpIHtcclxuICAgICAgY29uc3QgZGF0ZU9iamVjdCA9IG5ldyBEYXRlKGRhdGVPYik7XHJcbiAgICAgIGRhdGVPYmplY3Quc2V0RGF0ZShkYXRlICsgNyk7XHJcbiAgICAgIHJldHVybiBkYXRlT2JqZWN0O1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgY29uc3QgZGF0ZU9iamVjdCA9IG5ldyBEYXRlKGRhdGVPYik7XHJcblxyXG4gICAgICBkYXRlT2JqZWN0LnNldERhdGUoZGF0ZSk7XHJcbiAgICAgIGRhdGVPYmpBcnJheS5wdXNoKGRhdGVPYmplY3QpO1xyXG4gICAgICBkYXRlKys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0ZU9iakFycmF5O1xyXG4gIH1cclxuXHJcblxyXG4gIGN1cnJlbmN5Rm9ybWF0dGVyKHZhbDogYW55LCBjdXJyZW5jeVN0cmluZz86IGFueSkge1xyXG4gICAgdmFsID0gdGhpcy5yZXZlcnNlU3RyaW5nKHZhbCk7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaSAlIDMgPT09IDAgJiYgaSAhPT0gMCkge1xyXG4gICAgICAgIHJlc3VsdCArPSAnLCcgKyB2YWwuY2hhckF0KGkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCArPSB2YWwuY2hhckF0KGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXZlcnNlU3RyaW5nKHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBjdXJyZW5jeVJneEZvcm1hdChuOiBudW1iZXIsIGN1cnJlbmN5OiBhbnksIGZpeGVkRGVjaW1hbDogYW55KSB7XHJcbiAgICBjb25zdCBjdXJyZW5jeVZhbCA9IGN1cnJlbmN5ICsgJyAnICsgbi50b0ZpeGVkKGZpeGVkRGVjaW1hbCkucmVwbGFjZShDVVJSRU5DWV9SRUdFWCwgJyQxLCcpO1xyXG4gICAgLy8gY3VycmVuY3lWYWwgPSBjdXJyZW5jeVZhbC5yZXBsYWNlQWxsKFwiIFwiLCBcIlwiKTtcclxuICAgIHJldHVybiBjdXJyZW5jeVZhbDtcclxuICB9XHJcblxyXG5cclxuICAvLyBjb252ZXJ0aW5nIHJnYiB2YWx1ZSB0byBoZXggdmFsdWVcclxuICByZ2IyaGV4ID0gKHJnYjogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBfaXRlbUxpc3QgPSByZ2IubWF0Y2goL15yZ2JcXCgoXFxkKyksXFxzKihcXGQrKSxcXHMqKFxcZCspXFwpJC8pO1xyXG4gICAgcmV0dXJuICcjJyArXHJcbiAgICAgICgnMCcgKyBwYXJzZUludChfaXRlbUxpc3RbMV0sIDEwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKSArXHJcbiAgICAgICgnMCcgKyBwYXJzZUludChfaXRlbUxpc3RbMl0sIDEwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKSArXHJcbiAgICAgICgnMCcgKyBwYXJzZUludChfaXRlbUxpc3RbM10sIDEwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcclxuICB9XHJcblxyXG5cclxuICBpc0VtcHR5T2JqZWN0ID0gKF92YWx1ZTogYW55KSA9PiB7XHJcbiAgICBpZiAodHlwZW9mT2JqZWN0KF92YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIGlzRW1wdHlPYmplY3QoX3ZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mQXJyYXkoX3ZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gX3ZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mU3RyaW5nKF92YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIGlzRW1wdHlTdHJpbmcoX3ZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBpc051bGwoX3ZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNvcnRPcmRlcmluZ0NvbXBhcmF0b3IgPSAoZmllbGRzOiBBcnJheTxvYmplY3Q+LCBpc0lnbm9yZUNhc2U/OiBib29sZWFuKSA9PiB7XHJcbiAgICByZXR1cm4gKGE6IG9iamVjdCwgYjogb2JqZWN0KSA9PiB7XHJcbiAgICAgIHJldHVybiBmaWVsZHMubWFwKChvYmo6IGFueSkgPT4ge1xyXG4gICAgICAgIGxldCBkaXIgPSAxO1xyXG4gICAgICAgIGlmIChvYmpbMF0gPT09ICctJykge1xyXG4gICAgICAgICAgZGlyID0gLTE7XHJcbiAgICAgICAgICBvYmogPSBvYmouc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNJZ25vcmVDYXNlICYmIGlzU3RyaW5nKGFbb2JqXSkgJiYgaXNTdHJpbmcoYltvYmpdKSkge1xyXG4gICAgICAgICAgYVtvYmpdID0gYVtvYmpdLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICBiW29ial0gPSBiW29ial0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFbb2JqXSA+IGJbb2JqXSkge1xyXG4gICAgICAgICAgcmV0dXJuIGRpcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFbb2JqXSA8IGJbb2JqXSkge1xyXG4gICAgICAgICAgcmV0dXJuIC0oZGlyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnJlZHVjZSgocCwgbikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHAgPyBwIDogbjtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzb3J0T2JqZWN0T25LZXlzID0gKG9iakFycmF5OiBBcnJheTxvYmplY3Q+LCBzb3J0S2V5U3RyOiBzdHJpbmcsIGlzSWdub3JlQ2FzZT86IGJvb2xlYW4pID0+IHtcclxuICAgIGlmICghdGhpcy5pc0VtcHR5T2JqZWN0KHNvcnRLZXlTdHIpICYmICF0aGlzLmlzRW1wdHlPYmplY3Qob2JqQXJyYXkpICYmIEFycmF5LmlzQXJyYXkob2JqQXJyYXkpKSB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgcmV0dXJuIG9iakFycmF5LnNvcnQodGhpcy5zb3J0T3JkZXJpbmdDb21wYXJhdG9yKHNvcnRLZXlTdHIuc3BsaXQoJ34nKSwgaXNJZ25vcmVDYXNlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gb2JqQXJyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b1N0cmluZ1ZhbCA9IChvYmpWYWw6IG9iamVjdCkgPT4gb2JqVmFsICsgJyc7XHJcbiAgcmV2ZXJzZVN0cmluZyA9IChzdHJWYWw6IHN0cmluZykgPT4gc3RyVmFsLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XHJcbiAgcmV2ZXJzZSA9IChvYmpWYWw6IG9iamVjdCkgPT4ge1xyXG4gICAgaWYgKGlzU3RyaW5nKG9ialZhbCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZVN0cmluZyh0aGlzLnRvU3RyaW5nVmFsKG9ialZhbCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG5ldyBBcnJheShvYmpWYWwpLnJldmVyc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFN1bU9uS2V5ID0gKG9iakFycmF5OiBBcnJheTxvYmplY3Q+LCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcbiAgICBvYmpBcnJheS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgc3VtICs9IHBhcnNlRmxvYXQodmFsdWVba2V5XSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzdW07XHJcbiAgfVxyXG5cclxuXHJcbiAgbWFwRnJvbUFycmF5ID0gPFQ+KF9hcnJheTogQXJyYXk8VD4sIF9rZXk6IHN0cmluZywgaXNMb3dlcmNhc2U/OiBib29sZWFuKSA9PiB7XHJcbiAgICBpZiAoaXNOdWxsKF9hcnJheSkpIHtcclxuICAgICAgcmV0dXJuIHtrZXlOYW1lOiBuZXcgQXJyYXk8VD4oKX07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX21hcCA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGlzTm90TnVsbChfYXJyYXlbaV1bX2tleV0pKSB7XHJcbiAgICAgICAgaWYgKGlzTG93ZXJjYXNlKSB7XHJcbiAgICAgICAgICBfbWFwW19hcnJheVtpXVtfa2V5XS50b0xvd2VyQ2FzZSgpXSA9IF9hcnJheVtpXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgX21hcFtfYXJyYXlbaV1bX2tleV1dID0gX2FycmF5W2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9tYXA7XHJcbiAgfVxyXG5cclxuICBtYXBGcm9tQXJyYXlPbklubmVyS2V5ID0gKG9iakFycmF5OiBBcnJheTxvYmplY3Q+LCBvdXRlcktleTogc3RyaW5nLCBpbm5lcktleTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBfcmV0dXJuSGFzaCA9IHt9O1xyXG4gICAgb2JqQXJyYXkuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICghKGlzTnVsbCh2YWx1ZVtvdXRlcktleV0pKSAmJiAoaXNOdWxsKHZhbHVlW291dGVyS2V5XVtpbm5lcktleV0pKSkge1xyXG4gICAgICAgIF9yZXR1cm5IYXNoW3ZhbHVlW291dGVyS2V5XVtpbm5lcktleV1dID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIF9yZXR1cm5IYXNoO1xyXG4gIH1cclxuXHJcbiAgbWFwRnJvbVR3b0xldmVsQXJyYXkgPSAob2JqQXJyYXk6IEFycmF5PG9iamVjdD4sIHJlbEFycmF5S2V5OiBzdHJpbmcsIHJlbEtleTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByZXR1cm5IYXNoID0ge307XHJcbiAgICBvYmpBcnJheS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGlzTm90TnVsbCh2YWx1ZSkgJiYgaXNOb3ROdWxsKHZhbHVlW3JlbEFycmF5S2V5XSkpIHtcclxuICAgICAgICB2YWx1ZVtyZWxBcnJheUtleV0uZm9yRWFjaCgoY2hpbGRWYWw6IG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGlzTm90TnVsbChjaGlsZFZhbFtyZWxLZXldKSkge1xyXG4gICAgICAgICAgICByZXR1cm5IYXNoW2NoaWxkVmFsW3JlbEtleV1dID0gY2hpbGRWYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJldHVybkhhc2g7XHJcbiAgfVxyXG5cclxuICBtYXBGcm9tVHdvTGV2ZWxIYXNoID0gKG9iakFycmF5OiBBcnJheTxvYmplY3Q+LCBrZXlOYW1lOiBzdHJpbmcsIHJlbEFycmF5a2V5OiBzdHJpbmcsIHJlbEtleTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByZXR1cm5IYXNoID0ge307XHJcbiAgICBvYmpBcnJheS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGlzTm90TnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cclxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdmFsdWUpIHtcclxuICAgICAgICAgIGZvciAoY29uc3QgaiBpbiB2YWx1ZVtpXVtyZWxBcnJheWtleV0pIHtcclxuICAgICAgICAgICAgaWYgKGlzTm90TnVsbCh2YWx1ZVtpXVtyZWxBcnJheWtleV1bal1bcmVsS2V5XSkpIHtcclxuICAgICAgICAgICAgICByZXR1cm5IYXNoW3ZhbHVlW2ldW3JlbEFycmF5a2V5XVtqXVtyZWxLZXldXSA9IHZhbHVlW2ldW3JlbEFycmF5a2V5XVtqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmV0dXJuSGFzaDtcclxuICB9XHJcblxyXG4gIG1hcEZyb21BcnJheVdpdGhSZWwgPSAob2JqQXJyYXk6IEFycmF5PG9iamVjdD4sIGtleTogc3RyaW5nLCByZWxBcnJheUtleTogc3RyaW5nLCByZWxLZXk6IHN0cmluZykgPT4ge1xyXG5cclxuXHJcbiAgICBvYmpBcnJheS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGlzTm90TnVsbCh2YWx1ZVtyZWxBcnJheUtleV0pKSB7XHJcbiAgICAgICAgdmFsdWVbcmVsQXJyYXlLZXkgKyAnTWFwJ10gPSB0aGlzLm1hcEZyb21BcnJheSh2YWx1ZVtyZWxBcnJheUtleV0sIHJlbEtleSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMubWFwRnJvbUFycmF5KG9iakFycmF5LCBrZXkpO1xyXG4gIH1cclxuXHJcbiAgLy8gV2lsbCByZXR1cm4gdGhlIHN0cmluZyB2YWx1ZSBvbiBvYmplY3RzIHZhbHVlc1xyXG4gIGdldFN0cmluZ09mT2JqZWN0T25LZXkgPSAob2JqZWN0VmFsOiBvYmplY3QsIHNraXBLZXk/OiBib29sZWFuLCBrZXlBcnJheT86IEFycmF5PHN0cmluZz4pID0+IHtcclxuICAgIHNraXBLZXkgPSBza2lwS2V5IHx8IGZhbHNlO1xyXG4gICAgY29uc3QgX2tleUFycmF5ID0gc2tpcEtleSA/IFtdIDoga2V5QXJyYXk7XHJcbiAgICBsZXQgX3JldHVyblN0ciA9ICcnO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0VmFsKSB7XHJcbiAgICAgIGlmICghc2tpcEtleSAmJiAhX2tleUFycmF5LmluY2x1ZGVzKGtleS50b1N0cmluZygpKSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIF9yZXR1cm5TdHIgKz0gJyAnICsgb2JqZWN0VmFsW2tleV07XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gX3JldHVyblN0cjtcclxuICB9XHJcblxyXG4gIGZpbHRlckFycmF5ID0gKGlucHV0QXJyYXk6IG9iamVjdFtdLCBzZWFyY2hUZXJtOiBzdHJpbmcsIHNraXBGaWx0ZXJLZXk/OiBib29sZWFuLCBmaWx0ZXJLZXlTdHI6IHN0cmluZyA9ICcnKSA9PiB7XHJcbiAgICBjb25zdCBfZmlsdGVyQXJyYXkgPSBuZXcgQXJyYXk8b2JqZWN0PigpO1xyXG4gICAgY29uc3QgX3NlcmNoVGVybSA9IHNlYXJjaFRlcm0udG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IF9rZXlBcnJheSA9IGZpbHRlcktleVN0ci5zcGxpdCgnficpO1xyXG4gICAgZm9yIChsZXQgX2kgPSAwOyBfaSA8IGlucHV0QXJyYXkubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgIGNvbnN0IF9pdGVtID0gaW5wdXRBcnJheVtfaV07XHJcbiAgICAgIGNvbnN0IF9vYmplY3RWYWxTdHIgPSB0aGlzLmdldFN0cmluZ09mT2JqZWN0T25LZXkoX2l0ZW0sIHNraXBGaWx0ZXJLZXksIF9rZXlBcnJheSk7XHJcbiAgICAgIGlmIChfb2JqZWN0VmFsU3RyLnRvTG9jYWxlTG93ZXJDYXNlKCkubWF0Y2goX3NlcmNoVGVybSkpIHtcclxuICAgICAgICBfZmlsdGVyQXJyYXkucHVzaChfaXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBfZmlsdGVyQXJyYXk7XHJcbiAgfVxyXG5cclxuICByZXBsYWNlQWxsKHN0cmluZ09iajogc3RyaW5nLCBpbnB1dFN0cjogc3RyaW5nLCBvdXRQdXRTdHI6IHN0cmluZywgaWdub3JlPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gc3RyaW5nT2JqLnJlcGxhY2UobmV3IFJlZ0V4cChpbnB1dFN0ci5yZXBsYWNlKC8oW1xcL1xcLFxcIVxcXFxcXF5cXCRcXHtcXH1cXFtcXF1cXChcXClcXC5cXCpcXCtcXD9cXHxcXDxcXD5cXC1cXCZdKS9nLFxyXG4gICAgICAnXFxcXCQmJyksIChpZ25vcmUgPyAnZ2knIDogJ2cnKSksICh0eXBlb2YgKG91dFB1dFN0cikgPT09ICdzdHJpbmcnKSA/XHJcbiAgICAgIG91dFB1dFN0ci5yZXBsYWNlKC9cXCQvZywgJyQkJCQnKSA6IG91dFB1dFN0cik7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG1hcEZyb21BcnJheU9mQXJyYXlPYmplY3RzKG9iamVjdDogb2JqZWN0LCBhcnJheU9iamVjdDogQXJyYXk8b2JqZWN0Piwga2V5TmFtZTogc3RyaW5nLCBhcnJheU5hbWU6IHN0cmluZykge1xyXG4gICAgLy8gJ2lkJywgJ21lbnVJdGVtQXJyYXknIHRoaXMubWVudURhdGFIYXNoLCB0aGlzLm1lbnVEYXRhLm1lbnVJdGVtQXJyYXlcclxuICAgIGlmIChhcnJheU9iamVjdCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2JqZWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGlzTm90TnVsbChhcnJheU9iamVjdFtpXVtrZXlOYW1lXSkpIHtcclxuICAgICAgICAgIG9iamVjdFthcnJheU9iamVjdFtpXVtrZXlOYW1lXV0gPSBhcnJheU9iamVjdFtpXTtcclxuICAgICAgICAgIGlmIChhcnJheU5hbWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLm1hcEZyb21BcnJheU9mQXJyYXlPYmplY3RzKG9iamVjdCwgYXJyYXlPYmplY3RbaV1bYXJyYXlOYW1lXSwga2V5TmFtZSwgYXJyYXlOYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvcHkob2JqZWN0OiBvYmplY3QpIHtcclxuICAgIHJldHVybiB0aGlzLmlzRW1wdHlPYmplY3Qob2JqZWN0KSA/IG9iamVjdCA6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XHJcbiAgfVxyXG5cclxuICB0b0Jvb2xlYW4oYm9sU3RyOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmIChpc05vdE51bGwoYm9sU3RyKSAmJiAoYm9sU3RyID09PSB0cnVlIHx8IGJvbFN0ciA9PT0gJ3RydWUnIHx8IGJvbFN0ciA9PT0gMSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgYXJyYXlGcm9tTWFwKG9iamVjdE1hcDogb2JqZWN0KSB7XHJcbiAgICBjb25zdCByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0TWFwKSB7XHJcbiAgICAgIGlmIChvYmplY3RNYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHJldHVybkFycmF5LnB1c2gob2JqZWN0TWFwW2tleV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0dXJuQXJyYXk7XHJcbiAgfVxyXG5cclxuICBhcnJheUZyb21BcnJheU9mTWFwKG9iamVjdEFycmF5OiBBcnJheTxvYmplY3Q+LCBrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmV0dXJuQXJyYXkgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGlzTm90TnVsbChvYmplY3RBcnJheVtpXVtrZXldKSkge1xyXG4gICAgICAgIHJldHVybkFycmF5LnB1c2gob2JqZWN0QXJyYXlbaV1ba2V5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXR1cm5BcnJheTtcclxuICB9XHJcblxyXG4gIHNpbmdsZUtleUFycmF5RnJvbU1hcChhcnJheU9iamVjdDogQXJyYXk8b2JqZWN0Piwga2V5TmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBhcnJheUxpc3QgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGlzTm90TnVsbChhcnJheU9iamVjdFtpXVtrZXlOYW1lXSkpIHtcclxuICAgICAgICBhcnJheUxpc3QucHVzaChhcnJheU9iamVjdFtpXVtrZXlOYW1lXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXlMaXN0O1xyXG4gIH1cclxuXHJcbiAgYWx0YUZvcm1hdHRlcih2YWw6IGFueSwgcHJlZml4OiBhbnksIGRlY2ltYWxWYWxTdHJlbmd0aDogYW55LCBzdWZmaXg6IGFueSkge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWwgPSB2YWw7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzcG9uc2VPYmplY3QoX3ZhbDogYW55LCBmb3JtYXRDYWxsOiBib29sZWFuLCBub0Zvcm1hdDogYm9vbGVhbiwgb3JpZ2luYWx2YWw6IGFueSkge1xyXG4gICAgICBsZXQgX2VzcCA9IHt2YWx1ZTogJycsIG9sZHZhbHVlOiAnJywgZm9ybWF0Y2FsbGluZzogbnVsbCwgbm9mb3JtYXQ6IG51bGx9O1xyXG4gICAgICBfZXNwLnZhbHVlID0gX3ZhbDtcclxuICAgICAgX2VzcC5vbGR2YWx1ZSA9IG9yaWdpbmFsdmFsO1xyXG4gICAgICBfZXNwLmZvcm1hdGNhbGxpbmcgPSBmb3JtYXRDYWxsO1xyXG4gICAgICBfZXNwLm5vZm9ybWF0ID0gbm9Gb3JtYXQ7XHJcbiAgICAgIHJldHVybiBfZXNwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsZXQgY2FsbGluZ1N0YXR1cyA9IHRydWU7XHJcbiAgICBsZXQgbm9TdGF0dXMgPSB0cnVlOyAvLyBpZiBpdHMgdHJ1ZSBudW1iZXIgaXMgaW4gcmlnaHQgZm9ybWF0IGVsc2UgbnVtYmVyIGlzIGluIHdyb25nIGZvcm1hdFxyXG4gICAgaWYgKGlzTnVsbChwcmVmaXgpIHx8IGlzTmFOKHByZWZpeCkgPT09IGZhbHNlKSB7XHJcbiAgICAgIGNhbGxpbmdTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgcHJlZml4ID0gJyc7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNOdWxsKHN1ZmZpeCkgfHwgaXNOYU4oc3VmZml4KSA9PT0gZmFsc2UpIHtcclxuICAgICAgY2FsbGluZ1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICBzdWZmaXggPSAnJztcclxuICAgIH1cclxuICAgIGlmIChpc051bGwoZGVjaW1hbFZhbFN0cmVuZ3RoKSB8fCBkZWNpbWFsVmFsU3RyZW5ndGggPT09ICcnIHx8IGlzTmFOKGRlY2ltYWxWYWxTdHJlbmd0aCkpIHtcclxuICAgICAgY2FsbGluZ1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICBkZWNpbWFsVmFsU3RyZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05vdE51bGwodmFsKSAmJiAhaXNOYU4odmFsKSkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VPYmplY3QodGhpcy5jdXJyZW5jeVJneEZvcm1hdChwYXJzZUZsb2F0KHZhbCksIHByZWZpeCwgZGVjaW1hbFZhbFN0cmVuZ3RoKSArICcnICsgc3VmZml4LFxyXG4gICAgICAgIGNhbGxpbmdTdGF0dXMsIG5vU3RhdHVzLCB2YWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbm9TdGF0dXMgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlT2JqZWN0KHZhbCwgY2FsbGluZ1N0YXR1cywgbm9TdGF0dXMsIG9yaWdpbmFsVmFsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBmb3JtYXQodmFsdWU6IGFueSwgSUlEOiBzdHJpbmcsIGNvdW50cnlGb3JtYXQ/OiBzdHJpbmcpIHtcclxuICAgIGlmIChpc051bGwoY291bnRyeUZvcm1hdCkpIHtcclxuICAgICAgY291bnRyeUZvcm1hdCA9ICckJztcclxuICAgIH1cclxuICAgIGlmIChJSUQgPT09ICckJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5hbHRhRm9ybWF0dGVyKHZhbHVlLCBjb3VudHJ5Rm9ybWF0LCAwLCAnJyk7XHJcbiAgICB9IGVsc2UgaWYgKElJRCA9PT0gJ04nKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFsdGFGb3JtYXR0ZXIodmFsdWUsICcnLCAwLCAnJyk7XHJcbiAgICB9IGVsc2UgaWYgKElJRCA9PT0gJyQxRCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgY291bnRyeUZvcm1hdCwgMSwgJycpO1xyXG4gICAgfSBlbHNlIGlmIChJSUQgPT09ICckMkQnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFsdGFGb3JtYXR0ZXIodmFsdWUsIGNvdW50cnlGb3JtYXQsIDIsICcnKTtcclxuICAgIH0gZWxzZSBpZiAoSUlEID09PSAnJDNEJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5hbHRhRm9ybWF0dGVyKHZhbHVlLCBjb3VudHJ5Rm9ybWF0LCAzLCAnJyk7XHJcbiAgICB9IGVsc2UgaWYgKElJRCA9PT0gJyQ0RCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgY291bnRyeUZvcm1hdCwgNCwgJycpO1xyXG4gICAgfSBlbHNlIGlmIChJSUQgPT09ICcxRCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgJycsIDEsICcnKTtcclxuICAgIH0gZWxzZSBpZiAoSUlEID09PSAnMkQnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFsdGFGb3JtYXR0ZXIodmFsdWUsICcnLCAyLCAnJyk7XHJcbiAgICB9IGVsc2UgaWYgKElJRCA9PT0gJzNEJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5hbHRhRm9ybWF0dGVyKHZhbHVlLCAnJywgMywgJycpO1xyXG4gICAgfSBlbHNlIGlmIChJSUQgPT09ICclJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5hbHRhRm9ybWF0dGVyKHZhbHVlLCAnJywgMiwgJyUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1lcmdlSGFzaChkZXN0aW5hdGlvbjogYW55LCBzcmM6IGFueSkge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc3JjKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNyY1trZXldKSkge1xyXG4gICAgICAgIGlmIChpc051bGwoZGVzdGluYXRpb25ba2V5XSkpIHtcclxuICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGRlc3RpbmF0aW9uW2tleV0uY29uY2F0KHNyY1trZXldKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gc3JjW2tleV07XHJcbiAgICAgIH1cclxuICAgIH0gLy8gZW5kIG9mIGZvciBsb29wXHJcbiAgICByZXR1cm4gZGVzdGluYXRpb247XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0U3VtT25UaGVCYXNpc09mS2V5KGFycmF5T2JqZWN0OiBhbnksIGtleTE6IGFueSwga2V5MjogYW55KSB7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc3VtICs9IHBhcnNlRmxvYXQoYXJyYXlPYmplY3RbaV1ba2V5MV1ba2V5Ml0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1bTtcclxuICB9XHJcblxyXG5cclxuICBnZXRTaW1wbGVIYXNoKGFycmF5T2ZPYmplY3Q6IGFueSkge1xyXG4gICAgY29uc3QgX3JldHVybk9iaiA9IHt9O1xyXG4gICAgYXJyYXlPZk9iamVjdC5mb3JFYWNoKChvYmo6IGFueSkgPT4ge1xyXG4gICAgICBfcmV0dXJuT2JqW29ial0gPSBvYmo7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBfcmV0dXJuT2JqO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvdW50T2NjdXJlbmNlKHN0cmluZ3ZhbHVlOiBhbnksIGNoYXJ2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyaW5ndmFsdWUubWF0Y2gobmV3IFJlZ0V4cChjaGFydmFsdWUsICdnJykgfHwgW10pLmxlbmd0aDtcclxuICB9XHJcblxyXG5cclxuICByZXBsYWNlRG90VG9VbmRlcnNjb3JlKHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICh2YWx1ZS5pbmRleE9mKCcuJykgIT09IC0xKSB7XHJcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZUFsbCgnLicsICdfJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgY2hlY2tDb2xsZWN0aW9uTGVuZ3RoKG9iajogYW55KSB7XHJcbiAgICBpZiAodGhpcy5pc0VtcHR5T2JqZWN0KG9iaikpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZk9iamVjdChvYmopKSB7XHJcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcclxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XHJcbiAgICAgIHJldHVybiBvYmoubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iai5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBoYXNoRnJvbUFycmF5V2l0aFJkKGFycmF5T2JqZWN0czogQXJyYXk8YW55Piwga2V5TmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBfcmV0dXJuSGFzaCA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheU9iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0gYXJyYXlPYmplY3RzW2ldW2tleU5hbWVdO1xyXG4gICAgICBpZiAoaXNOb3ROdWxsKF9yZXR1cm5IYXNoW2tleV0pKSB7XHJcbiAgICAgICAgX3JldHVybkhhc2hba2V5XS5wdXNoKGFycmF5T2JqZWN0c1tpXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgX3JldHVybkhhc2hba2V5XSA9IFtdO1xyXG4gICAgICAgIF9yZXR1cm5IYXNoW2tleV0ucHVzaChhcnJheU9iamVjdHNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX3JldHVybkhhc2g7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRTaGlmdFRpbWUodGltZTogYW55LCBzaGlmdDogYW55KSB7XHJcbiAgICBsZXQgdGltZUFyciA9IHRpbWUuc3BsaXQoJyAtICcpO1xyXG4gICAgaWYgKHRpbWVBcnIubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aW1lQXJyID0gdGltZS5zcGxpdCgnIC0nKTtcclxuICAgIH1cclxuICAgIGlmICh0aW1lQXJyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGltZUFyciA9IHRpbWUuc3BsaXQoJy0nKTtcclxuICAgIH1cclxuICAgIGlmICh0aW1lQXJyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGltZUFyciA9IHRpbWUuc3BsaXQoJy0gJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSB0aW1lQXJyWzBdLnRyaW0oKS5zdWJzdHIoMCwgdGltZUFyclswXS50cmltKCkubGVuZ3RoIC0gMik7XHJcbiAgICBjb25zdCBlbmRUaW1lID0gdGltZUFyclsxXS50cmltKCkuc3Vic3RyKDAsIHRpbWVBcnJbMV0udHJpbSgpLmxlbmd0aCAtIDIpO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lQXJyID0gc3RhcnRUaW1lLnNwbGl0KCc6Jyk7XHJcbiAgICBpZiAoc3RhcnRUaW1lQXJyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJhZGl4XHJcbiAgICAgIHNoaWZ0LnN0YXJ0VGltZSA9IHBhcnNlSW50KHN0YXJ0VGltZUFyclswXSkgKiA2MCArIHBhcnNlSW50KHN0YXJ0VGltZUFyclsxXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmFkaXhcclxuICAgICAgc2hpZnQuc3RhcnRUaW1lID0gcGFyc2VJbnQoc3RhcnRUaW1lQXJyWzBdKSAqIDYwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZW5kVGltZUFyciA9IGVuZFRpbWUuc3BsaXQoJzonKTtcclxuICAgIGlmIChlbmRUaW1lQXJyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJhZGl4XHJcbiAgICAgIHNoaWZ0LmVuZFRpbWUgPSBwYXJzZUludChlbmRUaW1lQXJyWzBdKSAqIDYwICsgcGFyc2VJbnQoZW5kVGltZUFyclsxXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmFkaXhcclxuICAgICAgc2hpZnQuZW5kVGltZSA9IHBhcnNlSW50KGVuZFRpbWVBcnJbMF0pICogNjA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleFdpdGhUd29LZXlzKGFycmF5OiBBcnJheTxhbnk+LCBmaXJzdEtleTogc3RyaW5nLCBmaXJzdFZhbHVlOiBhbnksIHNlY29uZEtleTogc3RyaW5nLCBzZWNvbmRWYWw6IGFueSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoKGFycmF5W2ldW2ZpcnN0S2V5XSA9PT0gZmlyc3RWYWx1ZSkgJiYgKGFycmF5W2ldW3NlY29uZEtleV0gPT09IHNlY29uZFZhbCkpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXhJZk9ialdpdGhBdHRyKGFycmF5OiBBcnJheTxhbnk+LCBhdHRyOiBhbnksIHZhbHVlOiBhbnkpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGFycmF5W2ldW2F0dHJdID09PSB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkT2JqZWN0cyhvYmoxOiBhbnksIG9iajI6IGFueSkge1xyXG4gICAgcmV0dXJuIGlzTnVsbChvYmoxKSAmJiBpc051bGwob2JqMik7XHJcbiAgfVxyXG5cclxuICBpc1NhbWVPYmplY3RzKGhhc2hPYmplY3QxOiBhbnksIGhhc2hPYmplY3QyOiBhbnkpIHtcclxuICAgIGxldCBmbGFnID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5jaGVja0NvbGxlY3Rpb25MZW5ndGgoaGFzaE9iamVjdDEpID4gMCAmJiB0aGlzLmNoZWNrQ29sbGVjdGlvbkxlbmd0aChoYXNoT2JqZWN0MikgPiAwKSB7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGhhc2hPYmplY3QxKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRPYmplY3RzKGhhc2hPYmplY3QxW2tleV0sIGhhc2hPYmplY3QyW2tleV0pICYmIGhhc2hPYmplY3QxW2tleV0gIT09IGhhc2hPYmplY3QyW2tleV0pIHtcclxuICAgICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZsYWc7XHJcbiAgfVxyXG5cclxuXHJcbiAgY29weU9iamVjdChvYmo6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNFbXB0eU9iamVjdChvYmopID8gb2JqIDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcclxuICB9XHJcblxyXG4gIG9iamVjdEVxdWFscyh4OiBhbnksIHk6IGFueSkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGlmICh4ID09PSBudWxsIHx8IHggPT09IHVuZGVmaW5lZCB8fCB5ID09PSBudWxsIHx8IHkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4geCA9PT0geTtcclxuICAgIH1cclxuICAgIC8vIGFmdGVyIHRoaXMganVzdCBjaGVja2luZyB0eXBlIG9mIG9uZSB3b3VsZCBiZSBlbm91Z2hcclxuICAgIGlmICh4LmNvbnN0cnVjdG9yICE9PSB5LmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIGlmIHRoZXkgYXJlIGZ1bmN0aW9ucywgdGhleSBzaG91bGQgZXhhY3RseSByZWZlciB0byBzYW1lIG9uZSAoYmVjYXVzZSBvZiBjbG9zdXJlcylcclxuICAgIGlmICh4IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHggPT09IHk7XHJcbiAgICB9XHJcbiAgICAvLyBpZiB0aGV5IGFyZSByZWdleHBzLCB0aGV5IHNob3VsZCBleGFjdGx5IHJlZmVyIHRvIHNhbWUgb25lIChpdCBpcyBoYXJkIHRvIGJldHRlciBlcXVhbGl0eSBjaGVjayBvbiBjdXJyZW50IEVTKVxyXG4gICAgaWYgKHggaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgcmV0dXJuIHggPT09IHk7XHJcbiAgICB9XHJcbiAgICBpZiAoeCA9PT0geSB8fCB4LnZhbHVlT2YoKSA9PT0geS52YWx1ZU9mKCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSAmJiB4Lmxlbmd0aCAhPT0geS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIHRoZXkgYXJlIGRhdGVzLCB0aGV5IG11c3QgaGFkIGVxdWFsIHZhbHVlT2ZcclxuICAgIGlmICh4IGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgdGhleSBhcmUgc3RyaWN0bHkgZXF1YWwsIHRoZXkgYm90aCBuZWVkIHRvIGJlIG9iamVjdCBhdCBsZWFzdFxyXG4gICAgaWYgKCEoeCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCEoeSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlY3Vyc2l2ZSBvYmplY3QgZXF1YWxpdHkgY2hlY2tcclxuICAgIGNvbnN0IHAgPSBPYmplY3Qua2V5cyh4KTtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh5KS5ldmVyeSgoaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwLmluZGV4T2YoaSkgIT09IC0xO1xyXG4gICAgICB9KSAmJlxyXG4gICAgICBwLmV2ZXJ5KChpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0RXF1YWxzKHhbaV0sIHlbaV0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGR1bW15QXJyYXlPZkxlbmd0aChsZW5ndGg6IG51bWJlcikge1xyXG4gICAgY29uc3QgcmVzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHJlcy5wdXNoKGkgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcblxyXG4gIGdldENsZWFuWE1MKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoaXNOdWxsKHN0cikpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgaWYgKChzdHIuaW5kZXhPZignJicpID09PSAtMSkgJiYgKHN0ci5pbmRleE9mKCc8JykgPT09IC0xKSkge1xyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0ciA9PT0gJyZuYnNwOycpIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIGxldCBzdHJCdWYgPSAnJztcclxuICAgIGNvbnN0IGNoYXJBcnJheSA9IHN0ci5zcGxpdCgnJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYXJBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoY2hhckFycmF5W2ldID09PSAnJicpIHtcclxuICAgICAgICBzdHJCdWYgKz0gJyZhbXA7JztcclxuICAgICAgfSBlbHNlIGlmIChjaGFyQXJyYXlbaV0gPT09ICc8Jykge1xyXG4gICAgICAgIHN0ckJ1ZiArPSAnJmx0Oyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2hhckFycmF5W2ldID09PSAnPicpIHtcclxuICAgICAgICBzdHJCdWYgKz0gJyZndDsnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0ckJ1ZiArPSAoY2hhckFycmF5W2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ckJ1Zi50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJlcGxhY2VTdHJpbmdBdChzb3VyY2VTdHI6IHN0cmluZywgc0luZGV4OiBudW1iZXIsIGVuZEluZGV4OiBudW1iZXIsIHRvU3RyaW5nOiBhbnkpIHtcclxuICAgIGxldCBfcmV0dXJuU3RyID0gJyc7XHJcbiAgICBfcmV0dXJuU3RyICs9IHNvdXJjZVN0ci5zdWJzdHJpbmcoMCwgc0luZGV4KTtcclxuICAgIF9yZXR1cm5TdHIgKz0gdG9TdHJpbmc7XHJcbiAgICBfcmV0dXJuU3RyICs9IChzb3VyY2VTdHIuc3Vic3RyaW5nKGVuZEluZGV4LCBzb3VyY2VTdHIubGVuZ3RoKSk7XHJcbiAgICByZXR1cm4gX3JldHVyblN0cjtcclxuICB9XHJcblxyXG4gIG1lcmdlT2JqZWN0KGRlc3RPYmo6IGFueSwgc291cmNlT2JqOiBhbnkpIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZU9iaikge1xyXG4gICAgICBpZiAoIXRoaXMuaXNFbXB0eU9iamVjdChzb3VyY2VPYmpba2V5XSkpIHtcclxuICAgICAgICBkZXN0T2JqW2tleV0gPSBzb3VyY2VPYmpba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlc3RPYmo7XHJcbiAgfVxyXG5cclxuICBpc051bWJlclN0cihudW1TdHI6IGFueSkge1xyXG4gICAgbnVtU3RyID0gbnVtU3RyLnRyaW0oJyAnKTtcclxuICAgIHJldHVybiB0aGlzLmlzRW1wdHlPYmplY3QobnVtU3RyKSA/IGZhbHNlIDogbnVtU3RyLm1hdGNoKC9eXFxzKihcXC18XFwrKT8oXFxkK3woXFxkKihcXC5cXGQqKSkpXFxzKiQvKTtcclxuICB9XHJcblxyXG5cclxuICBpc0ludGVnZXJOdW1iZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgvXlswLTldKiQvKTtcclxuICB9XHJcblxyXG4gIHN0cmluZ1NvcnRBcnJheShhcnJheU9iamVjdDogYW55LCBrZXlOYW1lOiBzdHJpbmcsIGlzUmV2ZXJzZT86IGJvb2xlYW4pIHtcclxuICAgIGFycmF5T2JqZWN0LnNvcnQoKG9iamVjdDE6IGFueSwgb2JqZWN0MjogYW55KSA9PiB7XHJcbiAgICAgIGlmIChpc1JldmVyc2UpIHtcclxuICAgICAgICByZXR1cm4gb2JqZWN0MltrZXlOYW1lXS5sb2NhbGVDb21wYXJlKG9iamVjdDFba2V5TmFtZV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBvYmplY3QxW2tleU5hbWVdLmxvY2FsZUNvbXBhcmUob2JqZWN0MltrZXlOYW1lXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFycmF5T2JqZWN0O1xyXG4gIH1cclxuXHJcblxyXG4gIHNldERpZmZlcmVuY2UoYXJyYXkxOiBBcnJheTxhbnk+LCBhcnJheTI6IEFycmF5PGFueT4sIGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB0ZW1wQXJyYXkgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5MS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBhcnJheTFbaW5kZXhdW2tleV07XHJcbiAgICAgIGNvbnN0IGFub3RoZXJBcnJheSA9IGFycmF5Mi5maWx0ZXIoKGRhdGFPYmo6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYXRhT2JqW2tleV0gPT09IHZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGFub3RoZXJBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0ZW1wQXJyYXkucHVzaChhcnJheTFbaW5kZXhdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXBBcnJheTtcclxuICB9XHJcblxyXG4gIGluZXRlcnNlY3Rpb24oYXJyYXkxOiBBcnJheTxhbnk+LCBhcnJheTI6IEFycmF5PGFueT4sIGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB0ZW1wQXJyYXkgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5MS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBhcnJheTFbaW5kZXhdW2tleV07XHJcbiAgICAgIGNvbnN0IGFub3RoZXJBcnJheSA9IGFycmF5Mi5maWx0ZXIoKGRhdGFPYmo6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYXRhT2JqW2tleV0gPT09IHZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGFub3RoZXJBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGVtcEFycmF5LnB1c2goYXJyYXkxW2luZGV4XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0ZW1wQXJyYXk7XHJcbiAgfVxyXG5cclxuICBnZXRCb29sVmFsdWUoYm9vbCkge1xyXG4gICAgaWYgKGlzTm90TnVsbChib29sKSAmJiAoYm9vbCA9PT0gdHJ1ZSB8fCBib29sID09PSAndHJ1ZScgfHwgYm9vbCA9PT0gMSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgc3luY0xvb3AoaXRlcmF0aW9ucywgZG9Qcm9jZXNzLCBleGl0KSB7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgbGV0IGRvbmUgPSBmYWxzZTtcclxuICAgIGxldCBzaG91bGRFeGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdCBsb29wT2JqZWN0ID0ge1xyXG4gICAgICBuZXh0KCkge1xyXG4gICAgICAgIGlmIChkb25lKSB7XHJcbiAgICAgICAgICBpZiAoc2hvdWxkRXhpdCAmJiBleGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleGl0KCk7IC8vIEV4aXQgdGhlIGxvb3BcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZG8gaXRlYXRpb25cclxuICAgICAgICBpZiAoaW5kZXggPCBpdGVyYXRpb25zKSB7XHJcbiAgICAgICAgICBpbmRleCsrOyAvLyBpbmNyZWFzZSBJbmRleFxyXG4gICAgICAgICAgZG9Qcm9jZXNzKGxvb3BPYmplY3QpOyAvLyBSdW4gb3VyIHByb2Nlc3MsIHBhc3MgaW4gdGhlIGxvb3BcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRvbmUgPSB0cnVlOyAvLyBNYWtlIHN1cmUgd2Ugc2F5IHdlJ3JlIGRvbmVcclxuICAgICAgICAgIGlmIChleGl0KSB7XHJcbiAgICAgICAgICAgIGV4aXQoKTtcclxuICAgICAgICAgIH0gLy8gQ2FsbCB0aGUgY2FsbGJhY2sgb24gZXhpdFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgaXRlcmF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBpbmRleCAtIDE7IC8vIFJldHVybiB0aGUgY3VycmVudCBpbmRleCBjb3VudFxyXG4gICAgICB9LFxyXG4gICAgICBicmVhayhlbmQpIHtcclxuICAgICAgICBkb25lID0gdHJ1ZTsgLy8gRW5kIHRoZSBsb29wXHJcbiAgICAgICAgc2hvdWxkRXhpdCA9IGVuZDsgLy8gUGFzc2luZyBlbmQgYXMgdHJ1ZSBtZWFucyB3ZSBzdGlsbCBjYWxsIHRoZSBleGl0IGNhbGxiYWNrXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBsb29wT2JqZWN0Lm5leHQoKTsgLy8gcnVuIGZvciBmaXJzdCB0aW1lLi4uXHJcbiAgICByZXR1cm4gbG9vcE9iamVjdDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ==