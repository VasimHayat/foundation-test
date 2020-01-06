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
export { FnUtilService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9mbi11dGlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFDSCxNQUFNLEVBQ04sWUFBWSxFQUNaLGFBQWEsRUFDYixXQUFXLEVBQ1gsUUFBUSxFQUNSLFNBQVMsRUFDVCxZQUFZLEVBQ1osYUFBYSxFQUNoQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNekQ7SUFHSSx1QkFBb0IsYUFBdUIsRUFBVSxTQUF1QjtRQUE1RSxpQkFDQztRQURtQixrQkFBYSxHQUFiLGFBQWEsQ0FBVTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWM7O1FBdUk1RSxZQUFPOzs7O1FBQUcsVUFBQyxHQUFXOztnQkFDWixTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQztZQUMvRCxPQUFPLEdBQUc7Z0JBQ04sQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxD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QUFlO2dCQUM1QixVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsNERBQTREO1lBQ2xGLENBQUM7U0FDSjtRQUNELFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QjtRQUMzQyxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDOztnQkEvd0JKLFVBQVU7Ozs7Z0JBcEJGLFFBQVE7Z0JBQ1IsWUFBWTs7SUFxeUJyQixvQkFBQztDQUFBLEFBbHhCRCxJQWt4QkM7U0FqeEJZLGFBQWE7OztJQXlJdEIsZ0NBTUM7O0lBR0Qsc0NBVUM7O0lBRUQsK0NBd0JDOztJQUVELHlDQU9DOztJQUVELG9DQUE4Qzs7SUFDOUMsc0NBQXdFOztJQUN4RSxnQ0FNQzs7SUFFRCxvQ0FNQzs7SUFHRCxxQ0FnQkM7O0lBRUQsK0NBUUM7O0lBRUQsNkNBWUM7O0lBRUQsNENBZUM7O0lBRUQsNENBU0M7O0lBR0QsK0NBYUM7O0lBRUQsb0NBWUM7Ozs7O0lBcFRXLHNDQUErQjs7Ozs7SUFBRSxrQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVmFzaW0gSGF5YXQgQCAxLzI0LzIwMThcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IHNvcnRBcnJheSB9IGZyb20gJy4uL3V0aWwvYXJyYXknO1xyXG5pbXBvcnQge1xyXG4gICAgaXNOdWxsLFxyXG4gICAgdHlwZW9mT2JqZWN0LFxyXG4gICAgaXNFbXB0eU9iamVjdCxcclxuICAgIHR5cGVvZkFycmF5LFxyXG4gICAgaXNTdHJpbmcsXHJcbiAgICBpc05vdE51bGwsXHJcbiAgICB0eXBlb2ZTdHJpbmcsXHJcbiAgICBpc0VtcHR5U3RyaW5nXHJcbn0gZnJvbSAnLi4vdXRpbC9jaGVjayc7XHJcbmltcG9ydCB7IEZuRGF0ZSB9IGZyb20gJy4uL3V0aWwvdHlwZXMnO1xyXG5pbXBvcnQgeyBDVVJSRU5DWV9SRUdFWCB9IGZyb20gJy4uL2NvbnN0YW50L2ZuLmNvbnN0YW50JztcclxuXHJcblxyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGblV0aWxTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVGb3JtYXR0ZXI6IERhdGVQaXBlLCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGZvcm1hdD86IHN0cmluZywgdGltZXpvbmU/OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVGb3JtYXR0ZXIudHJhbnNmb3JtKHZhbHVlLCBmb3JtYXQsIHRpbWV6b25lLCBsb2NhbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGVIdG1sKGh0bWxTdHI6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sU3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0SHRtbFRvU3RyaW5nKGh0bWxTdHI6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWxTdHIgPyBTdHJpbmcoaHRtbFN0cikucmVwbGFjZSgvPFtePl0rPi9nbSwgJycpIDogJyc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNvcnRBcnJheShvYmplY3RBcnJheTogQXJyYXk8YW55Piwga2V5OiBzdHJpbmcsIGlzRGVzYz86IGJvb2xlYW4pIHtcclxuICAgICAgICByZXR1cm4gc29ydEFycmF5KG9iamVjdEFycmF5LCBrZXksIGlzRGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2VlayhidXNpRGF0ZTogYW55KSB7XHJcbiAgICAgICAgY29uc3QgZkRhdGUgPSBuZXcgRGF0ZShidXNpRGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKCgoKGJ1c2lEYXRlLmdldFRpbWUoKSAtIGZEYXRlLmdldFRpbWUoKSkgLyA4NjQwMDAwMCkgKyBmRGF0ZS5nZXREYXkoKSArIDEpIC8gNyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0ZUJ5SW5kZXgoaW5kZXg6IG51bWJlciwgZGF0ZU9iOiBGbkRhdGUsIGlzRmlyc3REYXk6IGJvb2xlYW4sIGlzTGFzdERheT86IGJvb2xlYW4pOiBEYXRlIHtcclxuXHJcbiAgICAgICAgbGV0IGRhdGUgPSAwO1xyXG4gICAgICAgIGNvbnN0IF9kYXRlT2JqID0gbmV3IERhdGUoZGF0ZU9iKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID4gX2RhdGVPYmouZ2V0RGF5KCkpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IChfZGF0ZU9iai5nZXREYXRlKCkgKyBpbmRleCAtIF9kYXRlT2JqLmdldERheSgpKSAtIDc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0ZSA9IF9kYXRlT2JqLmdldERhdGUoKSArIChpbmRleCAtIF9kYXRlT2JqLmdldERheSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0ZpcnN0RGF5KSB7XHJcbiAgICAgICAgICAgIF9kYXRlT2JqLnNldERhdGUoZGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0xhc3REYXkpIHtcclxuICAgICAgICAgICAgX2RhdGVPYmouc2V0RGF0ZShkYXRlICsgNyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gX2RhdGVPYmo7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFdlZWtEaWZmKHN0YXJ0SW5kZXg6IG51bWJlciwgc3RhcnREYXRlOiBGbkRhdGUsIGVuZERhdGU6IEZuRGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3Qgd2VlazEgPSB0aGlzLmdldERhdGVCeUluZGV4KHN0YXJ0SW5kZXgsIHN0YXJ0RGF0ZSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IHdlZWsyID0gdGhpcy5nZXREYXRlQnlJbmRleChzdGFydEluZGV4LCBlbmREYXRlLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgY29uc3Qgd2Vla0NvdW50MSA9IHRoaXMuZ2V0V2Vlayh3ZWVrMSk7XHJcbiAgICAgICAgbGV0IHdlZWtDb3VudDIgPSB0aGlzLmdldFdlZWsod2VlazIpO1xyXG4gICAgICAgIGlmICh3ZWVrQ291bnQyIDwgd2Vla0NvdW50MSkge1xyXG4gICAgICAgICAgICB3ZWVrQ291bnQyICs9IDUyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBub09mV2VlayA9ICh3ZWVrQ291bnQyIC0gd2Vla0NvdW50MSArIDEpO1xyXG4gICAgICAgIHJldHVybiBub09mV2VlaztcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWVrQXJyYXlGb3JEYXRlcyhfc3RhcnRJbmRleDogbnVtYmVyLCBfc3RhcnREYXRlOiBGbkRhdGUsIF9lbmREYXRlOiBGbkRhdGUpOiBBcnJheTxEYXRlPiB7XHJcbiAgICAgICAgY29uc3Qgbm9PZldlZWsgPSB0aGlzLmdldFdlZWtEaWZmKF9zdGFydEluZGV4LCBfc3RhcnREYXRlLCBfZW5kRGF0ZSk7XHJcbiAgICAgICAgY29uc3QgbmV3U3RhcnREYXRlID0gdGhpcy5nZXREYXRlQnlJbmRleChfc3RhcnRJbmRleCwgX3N0YXJ0RGF0ZSwgdHJ1ZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdCB3ZWVrQXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vT2ZXZWVrOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgX3dlZWtEYXRlID0gdGhpcy5nZXREYXRlQnlJbmRleChfc3RhcnRJbmRleCwgbmV3U3RhcnREYXRlLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHdlZWtBcnJheS5wdXNoKHRoaXMuZGF0ZUZvcm1hdHRlci50cmFuc2Zvcm0oX3dlZWtEYXRlLCAnTU0vZGQveXl5eScpKTtcclxuICAgICAgICAgICAgbmV3U3RhcnREYXRlLnNldERhdGUobmV3U3RhcnREYXRlLmdldERhdGUoKSArIDcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2Vla0FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdlZWtBcnJheShzdGFydERhdGU6IEZuRGF0ZSwgbm9PZldlZWs6IG51bWJlcik6IEFycmF5PERhdGU+IHtcclxuICAgICAgICBjb25zdCB3ZWVrQXJyYXkgPSBbXTtcclxuICAgICAgICBjb25zdCBuZXdTdGFydERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9PZldlZWs7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdXZWVrSGFzaCA9IHsgc3RhcnREYXRlOiBudWxsLCBlbmREYXRlOiBudWxsLCBmb3JtYXR0ZWRFbmREYXRlOiBudWxsIH07XHJcbiAgICAgICAgICAgIG5ld1dlZWtIYXNoLnN0YXJ0RGF0ZSA9IG5ld1N0YXJ0RGF0ZTtcclxuICAgICAgICAgICAgbmV3V2Vla0hhc2guZW5kRGF0ZSA9IG5ldyBEYXRlKG5ld1N0YXJ0RGF0ZS5zZXREYXRlKG5ld1N0YXJ0RGF0ZS5nZXREYXRlKCkgKyA2KSk7XHJcbiAgICAgICAgICAgIG5ld1dlZWtIYXNoLmZvcm1hdHRlZEVuZERhdGUgPSB0aGlzLmRhdGVGb3JtYXR0ZXIudHJhbnNmb3JtKG5ld1dlZWtIYXNoLmVuZERhdGUsICd5eXl5TU1kZCcpO1xyXG4gICAgICAgICAgICB3ZWVrQXJyYXkucHVzaChuZXdXZWVrSGFzaCk7XHJcbiAgICAgICAgICAgIG5ld1N0YXJ0RGF0ZS5zZXREYXRlKG5ld1N0YXJ0RGF0ZS5nZXREYXRlKCkgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdlZWtBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWVrQXJyYXlPbkluZGV4KGluZGV4OiBudW1iZXIsIGRhdGVPYiwgaXNGaXJzdERheSwgaXNMYXN0RGF5KSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZU9iakFycmF5ID0gW107XHJcbiAgICAgICAgbGV0IGRhdGUgPSAwO1xyXG4gICAgICAgIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZShkYXRlT2IpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IGRhdGVPYmouZ2V0RGF5KCkpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IChkYXRlT2JqLmdldERhdGUoKSArIGluZGV4IC0gZGF0ZU9iai5nZXREYXkoKSkgLSA3O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlT2JqLmdldERhdGUoKSArIChpbmRleCAtIGRhdGVPYmouZ2V0RGF5KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNGaXJzdERheSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlT2JqZWN0ID0gbmV3IERhdGUoZGF0ZU9iKTtcclxuICAgICAgICAgICAgZGF0ZU9iamVjdC5zZXREYXRlKGRhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZU9iamVjdDtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzTGFzdERheSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlT2JqZWN0ID0gbmV3IERhdGUoZGF0ZU9iKTtcclxuICAgICAgICAgICAgZGF0ZU9iamVjdC5zZXREYXRlKGRhdGUgKyA3KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGVPYmplY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVPYmplY3QgPSBuZXcgRGF0ZShkYXRlT2IpO1xyXG5cclxuICAgICAgICAgICAgZGF0ZU9iamVjdC5zZXREYXRlKGRhdGUpO1xyXG4gICAgICAgICAgICBkYXRlT2JqQXJyYXkucHVzaChkYXRlT2JqZWN0KTtcclxuICAgICAgICAgICAgZGF0ZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0ZU9iakFycmF5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjdXJyZW5jeUZvcm1hdHRlcih2YWw6IGFueSwgY3VycmVuY3lTdHJpbmc/OiBhbnkpIHtcclxuICAgICAgICB2YWwgPSB0aGlzLnJldmVyc2VTdHJpbmcodmFsKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgJSAzID09PSAwICYmIGkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLCcgKyB2YWwuY2hhckF0KGkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IHZhbC5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZVN0cmluZyhyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbmN5Umd4Rm9ybWF0KG46IG51bWJlciwgY3VycmVuY3k6IGFueSwgZml4ZWREZWNpbWFsOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW5jeVZhbCA9IGN1cnJlbmN5ICsgJyAnICsgbi50b0ZpeGVkKGZpeGVkRGVjaW1hbCkucmVwbGFjZShDVVJSRU5DWV9SRUdFWCwgJyQxLCcpO1xyXG4gICAgICAgIC8vIGN1cnJlbmN5VmFsID0gY3VycmVuY3lWYWwucmVwbGFjZUFsbChcIiBcIiwgXCJcIik7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbmN5VmFsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBjb252ZXJ0aW5nIHJnYiB2YWx1ZSB0byBoZXggdmFsdWVcclxuICAgIHJnYjJoZXggPSAocmdiOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBfaXRlbUxpc3QgPSByZ2IubWF0Y2goL15yZ2JcXCgoXFxkKyksXFxzKihcXGQrKSxcXHMqKFxcZCspXFwpJC8pO1xyXG4gICAgICAgIHJldHVybiAnIycgK1xyXG4gICAgICAgICAgICAoJzAnICsgcGFyc2VJbnQoX2l0ZW1MaXN0WzFdLCAxMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICAgICAoJzAnICsgcGFyc2VJbnQoX2l0ZW1MaXN0WzJdLCAxMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICAgICAoJzAnICsgcGFyc2VJbnQoX2l0ZW1MaXN0WzNdLCAxMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlzRW1wdHlPYmplY3QgPSAoX3ZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mT2JqZWN0KF92YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRW1wdHlPYmplY3QoX3ZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZkFycmF5KF92YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF92YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2ZTdHJpbmcoX3ZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNFbXB0eVN0cmluZyhfdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc051bGwoX3ZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc29ydE9yZGVyaW5nQ29tcGFyYXRvciA9IChmaWVsZHM6IEFycmF5PG9iamVjdD4sIGlzSWdub3JlQ2FzZT86IGJvb2xlYW4pID0+IHtcclxuICAgICAgICByZXR1cm4gKGE6IG9iamVjdCwgYjogb2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWVsZHMubWFwKChvYmo6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpciA9IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqWzBdID09PSAnLScpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXIgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICBvYmogPSBvYmouc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzSWdub3JlQ2FzZSAmJiBpc1N0cmluZyhhW29ial0pICYmIGlzU3RyaW5nKGJbb2JqXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhW29ial0gPSBhW29ial0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBiW29ial0gPSBiW29ial0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhW29ial0gPiBiW29ial0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGFbb2JqXSA8IGJbb2JqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtKGRpcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHAsIG4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcCA/IHAgOiBuO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzb3J0T2JqZWN0T25LZXlzID0gKG9iakFycmF5OiBBcnJheTxvYmplY3Q+LCBzb3J0S2V5U3RyOiBzdHJpbmcsIGlzSWdub3JlQ2FzZT86IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNFbXB0eU9iamVjdChzb3J0S2V5U3RyKSAmJiAhdGhpcy5pc0VtcHR5T2JqZWN0KG9iakFycmF5KSAmJiBBcnJheS5pc0FycmF5KG9iakFycmF5KSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHJldHVybiBvYmpBcnJheS5zb3J0KHRoaXMuc29ydE9yZGVyaW5nQ29tcGFyYXRvcihzb3J0S2V5U3RyLnNwbGl0KCd+JyksIGlzSWdub3JlQ2FzZSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmpBcnJheTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmdWYWwgPSAob2JqVmFsOiBvYmplY3QpID0+IG9ialZhbCArICcnO1xyXG4gICAgcmV2ZXJzZVN0cmluZyA9IChzdHJWYWw6IHN0cmluZykgPT4gc3RyVmFsLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XHJcbiAgICByZXZlcnNlID0gKG9ialZhbDogb2JqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzU3RyaW5nKG9ialZhbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZVN0cmluZyh0aGlzLnRvU3RyaW5nVmFsKG9ialZhbCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXkob2JqVmFsKS5yZXZlcnNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFN1bU9uS2V5ID0gKG9iakFycmF5OiBBcnJheTxvYmplY3Q+LCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgIG9iakFycmF5LmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBzdW0gKz0gcGFyc2VGbG9hdCh2YWx1ZVtrZXldKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc3VtO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtYXBGcm9tQXJyYXkgPSA8VD4oX2FycmF5OiBBcnJheTxUPiwgX2tleTogc3RyaW5nLCBpc0xvd2VyY2FzZT86IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBpZiAoaXNOdWxsKF9hcnJheSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsga2V5TmFtZTogbmV3IEFycmF5PFQ+KCkgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IF9tYXAgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9hcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaXNOb3ROdWxsKF9hcnJheVtpXVtfa2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0xvd2VyY2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9tYXBbX2FycmF5W2ldW19rZXldLnRvTG93ZXJDYXNlKCldID0gX2FycmF5W2ldO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfbWFwW19hcnJheVtpXVtfa2V5XV0gPSBfYXJyYXlbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9tYXA7XHJcbiAgICB9XHJcblxyXG4gICAgbWFwRnJvbUFycmF5T25Jbm5lcktleSA9IChvYmpBcnJheTogQXJyYXk8b2JqZWN0Piwgb3V0ZXJLZXk6IHN0cmluZywgaW5uZXJLZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9yZXR1cm5IYXNoID0ge307XHJcbiAgICAgICAgb2JqQXJyYXkuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKGlzTnVsbCh2YWx1ZVtvdXRlcktleV0pKSAmJiAoaXNOdWxsKHZhbHVlW291dGVyS2V5XVtpbm5lcktleV0pKSkge1xyXG4gICAgICAgICAgICAgICAgX3JldHVybkhhc2hbdmFsdWVbb3V0ZXJLZXldW2lubmVyS2V5XV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBfcmV0dXJuSGFzaDtcclxuICAgIH1cclxuXHJcbiAgICBtYXBGcm9tVHdvTGV2ZWxBcnJheSA9IChvYmpBcnJheTogQXJyYXk8b2JqZWN0PiwgcmVsQXJyYXlLZXk6IHN0cmluZywgcmVsS2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCByZXR1cm5IYXNoID0ge307XHJcbiAgICAgICAgb2JqQXJyYXkuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc05vdE51bGwodmFsdWUpICYmIGlzTm90TnVsbCh2YWx1ZVtyZWxBcnJheUtleV0pKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVtyZWxBcnJheUtleV0uZm9yRWFjaCgoY2hpbGRWYWw6IG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05vdE51bGwoY2hpbGRWYWxbcmVsS2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuSGFzaFtjaGlsZFZhbFtyZWxLZXldXSA9IGNoaWxkVmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgbWFwRnJvbVR3b0xldmVsSGFzaCA9IChvYmpBcnJheTogQXJyYXk8b2JqZWN0Piwga2V5TmFtZTogc3RyaW5nLCByZWxBcnJheWtleTogc3RyaW5nLCByZWxLZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJldHVybkhhc2ggPSB7fTtcclxuICAgICAgICBvYmpBcnJheS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzTm90TnVsbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBqIGluIHZhbHVlW2ldW3JlbEFycmF5a2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOb3ROdWxsKHZhbHVlW2ldW3JlbEFycmF5a2V5XVtqXVtyZWxLZXldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuSGFzaFt2YWx1ZVtpXVtyZWxBcnJheWtleV1bal1bcmVsS2V5XV0gPSB2YWx1ZVtpXVtyZWxBcnJheWtleV1bal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuSGFzaDtcclxuICAgIH1cclxuXHJcbiAgICBtYXBGcm9tQXJyYXlXaXRoUmVsID0gKG9iakFycmF5OiBBcnJheTxvYmplY3Q+LCBrZXk6IHN0cmluZywgcmVsQXJyYXlLZXk6IHN0cmluZywgcmVsS2V5OiBzdHJpbmcpID0+IHtcclxuXHJcblxyXG4gICAgICAgIG9iakFycmF5LmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNOb3ROdWxsKHZhbHVlW3JlbEFycmF5S2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlW3JlbEFycmF5S2V5ICsgJ01hcCddID0gdGhpcy5tYXBGcm9tQXJyYXkodmFsdWVbcmVsQXJyYXlLZXldLCByZWxLZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwRnJvbUFycmF5KG9iakFycmF5LCBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdpbGwgcmV0dXJuIHRoZSBzdHJpbmcgdmFsdWUgb24gb2JqZWN0cyB2YWx1ZXNcclxuICAgIGdldFN0cmluZ09mT2JqZWN0T25LZXkgPSAob2JqZWN0VmFsOiBvYmplY3QsIHNraXBLZXk/OiBib29sZWFuLCBrZXlBcnJheT86IEFycmF5PHN0cmluZz4pID0+IHtcclxuICAgICAgICBza2lwS2V5ID0gc2tpcEtleSB8fCBmYWxzZTtcclxuICAgICAgICBjb25zdCBfa2V5QXJyYXkgPSBza2lwS2V5ID8gW10gOiBrZXlBcnJheTtcclxuICAgICAgICBsZXQgX3JldHVyblN0ciA9ICcnO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdFZhbCkge1xyXG4gICAgICAgICAgICBpZiAoIXNraXBLZXkgJiYgIV9rZXlBcnJheS5pbmNsdWRlcyhrZXkudG9TdHJpbmcoKSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3JldHVyblN0ciArPSAnICcgKyBvYmplY3RWYWxba2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9yZXR1cm5TdHI7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyQXJyYXkgPSAoaW5wdXRBcnJheTogb2JqZWN0W10sIHNlYXJjaFRlcm06IHN0cmluZywgc2tpcEZpbHRlcktleT86IGJvb2xlYW4sIGZpbHRlcktleVN0cjogc3RyaW5nID0gJycpID0+IHtcclxuICAgICAgICBjb25zdCBfZmlsdGVyQXJyYXkgPSBuZXcgQXJyYXk8b2JqZWN0PigpO1xyXG4gICAgICAgIGNvbnN0IF9zZXJjaFRlcm0gPSBzZWFyY2hUZXJtLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgX2tleUFycmF5ID0gZmlsdGVyS2V5U3RyLnNwbGl0KCd+Jyk7XHJcbiAgICAgICAgZm9yIChsZXQgX2kgPSAwOyBfaSA8IGlucHV0QXJyYXkubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IF9pdGVtID0gaW5wdXRBcnJheVtfaV07XHJcbiAgICAgICAgICAgIGNvbnN0IF9vYmplY3RWYWxTdHIgPSB0aGlzLmdldFN0cmluZ09mT2JqZWN0T25LZXkoX2l0ZW0sIHNraXBGaWx0ZXJLZXksIF9rZXlBcnJheSk7XHJcbiAgICAgICAgICAgIGlmIChfb2JqZWN0VmFsU3RyLnRvTG9jYWxlTG93ZXJDYXNlKCkubWF0Y2goX3NlcmNoVGVybSkpIHtcclxuICAgICAgICAgICAgICAgIF9maWx0ZXJBcnJheS5wdXNoKF9pdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX2ZpbHRlckFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHJlcGxhY2VBbGwoc3RyaW5nT2JqOiBzdHJpbmcsIGlucHV0U3RyOiBzdHJpbmcsIG91dFB1dFN0cjogc3RyaW5nLCBpZ25vcmU/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nT2JqLnJlcGxhY2UobmV3IFJlZ0V4cChpbnB1dFN0ci5yZXBsYWNlKC8oW1xcL1xcLFxcIVxcXFxcXF5cXCRcXHtcXH1cXFtcXF1cXChcXClcXC5cXCpcXCtcXD9cXHxcXDxcXD5cXC1cXCZdKS9nLFxyXG4gICAgICAgICAgICAnXFxcXCQmJyksIChpZ25vcmUgPyAnZ2knIDogJ2cnKSksICh0eXBlb2YgKG91dFB1dFN0cikgPT09ICdzdHJpbmcnKSA/XHJcbiAgICAgICAgICAgIG91dFB1dFN0ci5yZXBsYWNlKC9cXCQvZywgJyQkJCQnKSA6IG91dFB1dFN0cik7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtYXBGcm9tQXJyYXlPZkFycmF5T2JqZWN0cyhvYmplY3Q6IG9iamVjdCwgYXJyYXlPYmplY3Q6IEFycmF5PG9iamVjdD4sIGtleU5hbWU6IHN0cmluZywgYXJyYXlOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyAnaWQnLCAnbWVudUl0ZW1BcnJheScgdGhpcy5tZW51RGF0YUhhc2gsIHRoaXMubWVudURhdGEubWVudUl0ZW1BcnJheVxyXG4gICAgICAgIGlmIChhcnJheU9iamVjdCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2JqZWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOb3ROdWxsKGFycmF5T2JqZWN0W2ldW2tleU5hbWVdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFthcnJheU9iamVjdFtpXVtrZXlOYW1lXV0gPSBhcnJheU9iamVjdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlOYW1lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBGcm9tQXJyYXlPZkFycmF5T2JqZWN0cyhvYmplY3QsIGFycmF5T2JqZWN0W2ldW2FycmF5TmFtZV0sIGtleU5hbWUsIGFycmF5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvcHkob2JqZWN0OiBvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0VtcHR5T2JqZWN0KG9iamVjdCkgPyBvYmplY3QgOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvQm9vbGVhbihib2xTdHI6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChpc05vdE51bGwoYm9sU3RyKSAmJiAoYm9sU3RyID09PSB0cnVlIHx8IGJvbFN0ciA9PT0gJ3RydWUnIHx8IGJvbFN0ciA9PT0gMSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYXJyYXlGcm9tTWFwKG9iamVjdE1hcDogb2JqZWN0KSB7XHJcbiAgICAgICAgY29uc3QgcmV0dXJuQXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3RNYXApIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdE1hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKG9iamVjdE1hcFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgYXJyYXlGcm9tQXJyYXlPZk1hcChvYmplY3RBcnJheTogQXJyYXk8b2JqZWN0Piwga2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGlzTm90TnVsbChvYmplY3RBcnJheVtpXVtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaChvYmplY3RBcnJheVtpXVtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgc2luZ2xlS2V5QXJyYXlGcm9tTWFwKGFycmF5T2JqZWN0OiBBcnJheTxvYmplY3Q+LCBrZXlOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBhcnJheUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2JqZWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpc05vdE51bGwoYXJyYXlPYmplY3RbaV1ba2V5TmFtZV0pKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJheUxpc3QucHVzaChhcnJheU9iamVjdFtpXVtrZXlOYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnJheUxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgYWx0YUZvcm1hdHRlcih2YWw6IGFueSwgcHJlZml4OiBhbnksIGRlY2ltYWxWYWxTdHJlbmd0aDogYW55LCBzdWZmaXg6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsID0gdmFsO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiByZXNwb25zZU9iamVjdChfdmFsOiBhbnksIGZvcm1hdENhbGw6IGJvb2xlYW4sIG5vRm9ybWF0OiBib29sZWFuLCBvcmlnaW5hbHZhbDogYW55KSB7XHJcbiAgICAgICAgICAgIGxldCBfZXNwID0geyB2YWx1ZTogJycsIG9sZHZhbHVlOiAnJywgZm9ybWF0Y2FsbGluZzogbnVsbCwgbm9mb3JtYXQ6IG51bGwgfTtcclxuICAgICAgICAgICAgX2VzcC52YWx1ZSA9IF92YWw7XHJcbiAgICAgICAgICAgIF9lc3Aub2xkdmFsdWUgPSBvcmlnaW5hbHZhbDtcclxuICAgICAgICAgICAgX2VzcC5mb3JtYXRjYWxsaW5nID0gZm9ybWF0Q2FsbDtcclxuICAgICAgICAgICAgX2VzcC5ub2Zvcm1hdCA9IG5vRm9ybWF0O1xyXG4gICAgICAgICAgICByZXR1cm4gX2VzcDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgY2FsbGluZ1N0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgbGV0IG5vU3RhdHVzID0gdHJ1ZTsgLy8gaWYgaXRzIHRydWUgbnVtYmVyIGlzIGluIHJpZ2h0IGZvcm1hdCBlbHNlIG51bWJlciBpcyBpbiB3cm9uZyBmb3JtYXRcclxuICAgICAgICBpZiAoaXNOdWxsKHByZWZpeCkgfHwgaXNOYU4ocHJlZml4KSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY2FsbGluZ1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwcmVmaXggPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTnVsbChzdWZmaXgpIHx8IGlzTmFOKHN1ZmZpeCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNhbGxpbmdTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgc3VmZml4ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc051bGwoZGVjaW1hbFZhbFN0cmVuZ3RoKSB8fCBkZWNpbWFsVmFsU3RyZW5ndGggPT09ICcnIHx8IGlzTmFOKGRlY2ltYWxWYWxTdHJlbmd0aCkpIHtcclxuICAgICAgICAgICAgY2FsbGluZ1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkZWNpbWFsVmFsU3RyZW5ndGggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzTm90TnVsbCh2YWwpICYmICFpc05hTih2YWwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZU9iamVjdCh0aGlzLmN1cnJlbmN5Umd4Rm9ybWF0KHBhcnNlRmxvYXQodmFsKSwgcHJlZml4LCBkZWNpbWFsVmFsU3RyZW5ndGgpICsgJycgKyBzdWZmaXgsXHJcbiAgICAgICAgICAgICAgICBjYWxsaW5nU3RhdHVzLCBub1N0YXR1cywgdmFsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VPYmplY3QodmFsLCBjYWxsaW5nU3RhdHVzLCBub1N0YXR1cywgb3JpZ2luYWxWYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZm9ybWF0KHZhbHVlOiBhbnksIElJRDogc3RyaW5nLCBjb3VudHJ5Rm9ybWF0Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGlzTnVsbChjb3VudHJ5Rm9ybWF0KSkge1xyXG4gICAgICAgICAgICBjb3VudHJ5Rm9ybWF0ID0gJyQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSUlEID09PSAnJCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgY291bnRyeUZvcm1hdCwgMCwgJycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoSUlEID09PSAnTicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgJycsIDAsICcnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKElJRCA9PT0gJyQxRCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgY291bnRyeUZvcm1hdCwgMSwgJycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoSUlEID09PSAnJDJEJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbHRhRm9ybWF0dGVyKHZhbHVlLCBjb3VudHJ5Rm9ybWF0LCAyLCAnJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChJSUQgPT09ICckM0QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFsdGFGb3JtYXR0ZXIodmFsdWUsIGNvdW50cnlGb3JtYXQsIDMsICcnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKElJRCA9PT0gJyQ0RCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgY291bnRyeUZvcm1hdCwgNCwgJycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoSUlEID09PSAnMUQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFsdGFGb3JtYXR0ZXIodmFsdWUsICcnLCAxLCAnJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChJSUQgPT09ICcyRCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgJycsIDIsICcnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKElJRCA9PT0gJzNEJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbHRhRm9ybWF0dGVyKHZhbHVlLCAnJywgMywgJycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoSUlEID09PSAnJScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgJycsIDIsICclJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1lcmdlSGFzaChkZXN0aW5hdGlvbjogYW55LCBzcmM6IGFueSkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNyYykge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcmNba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc051bGwoZGVzdGluYXRpb25ba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gZGVzdGluYXRpb25ba2V5XS5jb25jYXQoc3JjW2tleV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IHNyY1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyBlbmQgb2YgZm9yIGxvb3BcclxuICAgICAgICByZXR1cm4gZGVzdGluYXRpb247XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFN1bU9uVGhlQmFzaXNPZktleShhcnJheU9iamVjdDogYW55LCBrZXkxOiBhbnksIGtleTI6IGFueSkge1xyXG4gICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc3VtICs9IHBhcnNlRmxvYXQoYXJyYXlPYmplY3RbaV1ba2V5MV1ba2V5Ml0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VtO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRTaW1wbGVIYXNoKGFycmF5T2ZPYmplY3Q6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IF9yZXR1cm5PYmogPSB7fTtcclxuICAgICAgICBhcnJheU9mT2JqZWN0LmZvckVhY2goKG9iajogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIF9yZXR1cm5PYmpbb2JqXSA9IG9iajtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gX3JldHVybk9iajtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY291bnRPY2N1cmVuY2Uoc3RyaW5ndmFsdWU6IGFueSwgY2hhcnZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5ndmFsdWUubWF0Y2gobmV3IFJlZ0V4cChjaGFydmFsdWUsICdnJykgfHwgW10pLmxlbmd0aDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVwbGFjZURvdFRvVW5kZXJzY29yZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlQWxsKCcuJywgJ18nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjaGVja0NvbGxlY3Rpb25MZW5ndGgob2JqOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VtcHR5T2JqZWN0KG9iaikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mT2JqZWN0KG9iaikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmoubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBoYXNoRnJvbUFycmF5V2l0aFJkKGFycmF5T2JqZWN0czogQXJyYXk8YW55Piwga2V5TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgX3JldHVybkhhc2ggPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhcnJheU9iamVjdHNbaV1ba2V5TmFtZV07XHJcbiAgICAgICAgICAgIGlmIChpc05vdE51bGwoX3JldHVybkhhc2hba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIF9yZXR1cm5IYXNoW2tleV0ucHVzaChhcnJheU9iamVjdHNbaV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3JldHVybkhhc2hba2V5XSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgX3JldHVybkhhc2hba2V5XS5wdXNoKGFycmF5T2JqZWN0c1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9yZXR1cm5IYXNoO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdFNoaWZ0VGltZSh0aW1lOiBhbnksIHNoaWZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgdGltZUFyciA9IHRpbWUuc3BsaXQoJyAtICcpO1xyXG4gICAgICAgIGlmICh0aW1lQXJyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGltZUFyciA9IHRpbWUuc3BsaXQoJyAtJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lQXJyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGltZUFyciA9IHRpbWUuc3BsaXQoJy0nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpbWVBcnIubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aW1lQXJyID0gdGltZS5zcGxpdCgnLSAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gdGltZUFyclswXS50cmltKCkuc3Vic3RyKDAsIHRpbWVBcnJbMF0udHJpbSgpLmxlbmd0aCAtIDIpO1xyXG4gICAgICAgIGNvbnN0IGVuZFRpbWUgPSB0aW1lQXJyWzFdLnRyaW0oKS5zdWJzdHIoMCwgdGltZUFyclsxXS50cmltKCkubGVuZ3RoIC0gMik7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lQXJyID0gc3RhcnRUaW1lLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgaWYgKHN0YXJ0VGltZUFyci5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyYWRpeFxyXG4gICAgICAgICAgICBzaGlmdC5zdGFydFRpbWUgPSBwYXJzZUludChzdGFydFRpbWVBcnJbMF0pICogNjAgKyBwYXJzZUludChzdGFydFRpbWVBcnJbMV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyYWRpeFxyXG4gICAgICAgICAgICBzaGlmdC5zdGFydFRpbWUgPSBwYXJzZUludChzdGFydFRpbWVBcnJbMF0pICogNjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGVuZFRpbWVBcnIgPSBlbmRUaW1lLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgaWYgKGVuZFRpbWVBcnIubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmFkaXhcclxuICAgICAgICAgICAgc2hpZnQuZW5kVGltZSA9IHBhcnNlSW50KGVuZFRpbWVBcnJbMF0pICogNjAgKyBwYXJzZUludChlbmRUaW1lQXJyWzFdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmFkaXhcclxuICAgICAgICAgICAgc2hpZnQuZW5kVGltZSA9IHBhcnNlSW50KGVuZFRpbWVBcnJbMF0pICogNjA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEluZGV4V2l0aFR3b0tleXMoYXJyYXk6IEFycmF5PGFueT4sIGZpcnN0S2V5OiBzdHJpbmcsIGZpcnN0VmFsdWU6IGFueSwgc2Vjb25kS2V5OiBzdHJpbmcsIHNlY29uZFZhbDogYW55KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoKGFycmF5W2ldW2ZpcnN0S2V5XSA9PT0gZmlyc3RWYWx1ZSkgJiYgKGFycmF5W2ldW3NlY29uZEtleV0gPT09IHNlY29uZFZhbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmRleElmT2JqV2l0aEF0dHIoYXJyYXk6IEFycmF5PGFueT4sIGF0dHI6IGFueSwgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFycmF5W2ldW2F0dHJdID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWRPYmplY3RzKG9iajE6IGFueSwgb2JqMjogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIGlzTnVsbChvYmoxKSAmJiBpc051bGwob2JqMik7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTYW1lT2JqZWN0cyhoYXNoT2JqZWN0MTogYW55LCBoYXNoT2JqZWN0MjogYW55KSB7XHJcbiAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jaGVja0NvbGxlY3Rpb25MZW5ndGgoaGFzaE9iamVjdDEpID4gMCAmJiB0aGlzLmNoZWNrQ29sbGVjdGlvbkxlbmd0aChoYXNoT2JqZWN0MikgPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGhhc2hPYmplY3QxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZE9iamVjdHMoaGFzaE9iamVjdDFba2V5XSwgaGFzaE9iamVjdDJba2V5XSkgJiYgaGFzaE9iamVjdDFba2V5XSAhPT0gaGFzaE9iamVjdDJba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZsYWc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvcHlPYmplY3Qob2JqOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0VtcHR5T2JqZWN0KG9iaikgPyBvYmogOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG4gICAgfVxyXG5cclxuICAgIG9iamVjdEVxdWFscyh4OiBhbnksIHk6IGFueSkge1xyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAgICAgaWYgKHggPT09IG51bGwgfHwgeCA9PT0gdW5kZWZpbmVkIHx8IHkgPT09IG51bGwgfHwgeSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB4ID09PSB5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhZnRlciB0aGlzIGp1c3QgY2hlY2tpbmcgdHlwZSBvZiBvbmUgd291bGQgYmUgZW5vdWdoXHJcbiAgICAgICAgaWYgKHguY29uc3RydWN0b3IgIT09IHkuY29uc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiB0aGV5IGFyZSBmdW5jdGlvbnMsIHRoZXkgc2hvdWxkIGV4YWN0bHkgcmVmZXIgdG8gc2FtZSBvbmUgKGJlY2F1c2Ugb2YgY2xvc3VyZXMpXHJcbiAgICAgICAgaWYgKHggaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4geCA9PT0geTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgdGhleSBhcmUgcmVnZXhwcywgdGhleSBzaG91bGQgZXhhY3RseSByZWZlciB0byBzYW1lIG9uZSAoaXQgaXMgaGFyZCB0byBiZXR0ZXIgZXF1YWxpdHkgY2hlY2sgb24gY3VycmVudCBFUylcclxuICAgICAgICBpZiAoeCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG4gICAgICAgICAgICByZXR1cm4geCA9PT0geTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHggPT09IHkgfHwgeC52YWx1ZU9mKCkgPT09IHkudmFsdWVPZigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSAmJiB4Lmxlbmd0aCAhPT0geS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgdGhleSBhcmUgZGF0ZXMsIHRoZXkgbXVzdCBoYWQgZXF1YWwgdmFsdWVPZlxyXG4gICAgICAgIGlmICh4IGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB0aGV5IGFyZSBzdHJpY3RseSBlcXVhbCwgdGhleSBib3RoIG5lZWQgdG8gYmUgb2JqZWN0IGF0IGxlYXN0XHJcbiAgICAgICAgaWYgKCEoeCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh5IGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZWN1cnNpdmUgb2JqZWN0IGVxdWFsaXR5IGNoZWNrXHJcbiAgICAgICAgY29uc3QgcCA9IE9iamVjdC5rZXlzKHgpO1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh5KS5ldmVyeSgoaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcC5pbmRleE9mKGkpICE9PSAtMTtcclxuICAgICAgICB9KSAmJlxyXG4gICAgICAgICAgICBwLmV2ZXJ5KChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RFcXVhbHMoeFtpXSwgeVtpXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGR1bW15QXJyYXlPZkxlbmd0aChsZW5ndGg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzLnB1c2goaSArIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0Q2xlYW5YTUwoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoaXNOdWxsKHN0cikpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHN0ci5pbmRleE9mKCcmJykgPT09IC0xKSAmJiAoc3RyLmluZGV4T2YoJzwnKSA9PT0gLTEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHIgPT09ICcmbmJzcDsnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdHJCdWYgPSAnJztcclxuICAgICAgICBjb25zdCBjaGFyQXJyYXkgPSBzdHIuc3BsaXQoJycpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhckFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGFyQXJyYXlbaV0gPT09ICcmJykge1xyXG4gICAgICAgICAgICAgICAgc3RyQnVmICs9ICcmYW1wOyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhckFycmF5W2ldID09PSAnPCcpIHtcclxuICAgICAgICAgICAgICAgIHN0ckJ1ZiArPSAnJmx0Oyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhckFycmF5W2ldID09PSAnPicpIHtcclxuICAgICAgICAgICAgICAgIHN0ckJ1ZiArPSAnJmd0Oyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdHJCdWYgKz0gKGNoYXJBcnJheVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0ckJ1Zi50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXBsYWNlU3RyaW5nQXQoc291cmNlU3RyOiBzdHJpbmcsIHNJbmRleDogbnVtYmVyLCBlbmRJbmRleDogbnVtYmVyLCB0b1N0cmluZzogYW55KSB7XHJcbiAgICAgICAgbGV0IF9yZXR1cm5TdHIgPSAnJztcclxuICAgICAgICBfcmV0dXJuU3RyICs9IHNvdXJjZVN0ci5zdWJzdHJpbmcoMCwgc0luZGV4KTtcclxuICAgICAgICBfcmV0dXJuU3RyICs9IHRvU3RyaW5nO1xyXG4gICAgICAgIF9yZXR1cm5TdHIgKz0gKHNvdXJjZVN0ci5zdWJzdHJpbmcoZW5kSW5kZXgsIHNvdXJjZVN0ci5sZW5ndGgpKTtcclxuICAgICAgICByZXR1cm4gX3JldHVyblN0cjtcclxuICAgIH1cclxuXHJcbiAgICBtZXJnZU9iamVjdChkZXN0T2JqOiBhbnksIHNvdXJjZU9iajogYW55KSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlT2JqKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0VtcHR5T2JqZWN0KHNvdXJjZU9ialtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgZGVzdE9ialtrZXldID0gc291cmNlT2JqW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlc3RPYmo7XHJcbiAgICB9XHJcblxyXG4gICAgaXNOdW1iZXJTdHIobnVtU3RyOiBhbnkpIHtcclxuICAgICAgICBudW1TdHIgPSBudW1TdHIudHJpbSgnICcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRW1wdHlPYmplY3QobnVtU3RyKSA/IGZhbHNlIDogbnVtU3RyLm1hdGNoKC9eXFxzKihcXC18XFwrKT8oXFxkK3woXFxkKihcXC5cXGQqKSkpXFxzKiQvKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaXNJbnRlZ2VyTnVtYmVyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKC9eWzAtOV0qJC8pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0cmluZ1NvcnRBcnJheShhcnJheU9iamVjdDogYW55LCBrZXlOYW1lOiBzdHJpbmcsIGlzUmV2ZXJzZT86IGJvb2xlYW4pIHtcclxuICAgICAgICBhcnJheU9iamVjdC5zb3J0KChvYmplY3QxOiBhbnksIG9iamVjdDI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNSZXZlcnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0MltrZXlOYW1lXS5sb2NhbGVDb21wYXJlKG9iamVjdDFba2V5TmFtZV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDFba2V5TmFtZV0ubG9jYWxlQ29tcGFyZShvYmplY3QyW2tleU5hbWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBhcnJheU9iamVjdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0RGlmZmVyZW5jZShhcnJheTE6IEFycmF5PGFueT4sIGFycmF5MjogQXJyYXk8YW55Piwga2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCB0ZW1wQXJyYXkgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheTEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXJyYXkxW2luZGV4XVtrZXldO1xyXG4gICAgICAgICAgICBjb25zdCBhbm90aGVyQXJyYXkgPSBhcnJheTIuZmlsdGVyKChkYXRhT2JqOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhT2JqW2tleV0gPT09IHZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGFub3RoZXJBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRlbXBBcnJheS5wdXNoKGFycmF5MVtpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5ldGVyc2VjdGlvbihhcnJheTE6IEFycmF5PGFueT4sIGFycmF5MjogQXJyYXk8YW55Piwga2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCB0ZW1wQXJyYXkgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheTEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXJyYXkxW2luZGV4XVtrZXldO1xyXG4gICAgICAgICAgICBjb25zdCBhbm90aGVyQXJyYXkgPSBhcnJheTIuZmlsdGVyKChkYXRhT2JqOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhT2JqW2tleV0gPT09IHZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGFub3RoZXJBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wQXJyYXkucHVzaChhcnJheTFbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcEFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJvb2xWYWx1ZShib29sKSB7XHJcbiAgICAgICAgaWYgKGlzTm90TnVsbChib29sKSAmJiAoYm9vbCA9PT0gdHJ1ZSB8fCBib29sID09PSAndHJ1ZScgfHwgYm9vbCA9PT0gMSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3luY0xvb3AoaXRlcmF0aW9ucywgZG9Qcm9jZXNzLCBleGl0KSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBsZXQgZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzaG91bGRFeGl0ID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgbG9vcE9iamVjdCA9IHtcclxuICAgICAgICAgICAgbmV4dCgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZEV4aXQgJiYgZXhpdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhpdCgpOyAvLyBFeGl0IHRoZSBsb29wXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZG8gaXRlYXRpb25cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IGl0ZXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCsrOyAvLyBpbmNyZWFzZSBJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIGRvUHJvY2Vzcyhsb29wT2JqZWN0KTsgLy8gUnVuIG91ciBwcm9jZXNzLCBwYXNzIGluIHRoZSBsb29wXHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTsgLy8gTWFrZSBzdXJlIHdlIHNheSB3ZSdyZSBkb25lXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gLy8gQ2FsbCB0aGUgY2FsbGJhY2sgb24gZXhpdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpdGVyYXRpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggLSAxOyAvLyBSZXR1cm4gdGhlIGN1cnJlbnQgaW5kZXggY291bnRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnJlYWsoZW5kKSB7XHJcbiAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTsgLy8gRW5kIHRoZSBsb29wXHJcbiAgICAgICAgICAgICAgICBzaG91bGRFeGl0ID0gZW5kOyAvLyBQYXNzaW5nIGVuZCBhcyB0cnVlIG1lYW5zIHdlIHN0aWxsIGNhbGwgdGhlIGV4aXQgY2FsbGJhY2tcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbG9vcE9iamVjdC5uZXh0KCk7IC8vIHJ1biBmb3IgZmlyc3QgdGltZS4uLlxyXG4gICAgICAgIHJldHVybiBsb29wT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4iXX0=