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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdXRpbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9mbi11dGlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGFBQWEsRUFDYixXQUFXLEVBQ1gsUUFBUSxFQUNSLFNBQVMsRUFDVCxZQUFZLEVBQ1osYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUd2RDtJQUdFLHVCQUFvQixhQUF1QixFQUFVLFNBQXVCO1FBQTVFLGlCQUNDO1FBRG1CLGtCQUFhLEdBQWIsYUFBYSxDQUFVO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBYzs7UUF1STVFLFlBQU87Ozs7UUFBRyxVQUFDLEdBQVc7O2dCQUNkLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDO1lBQy9ELE9BQU8sR0FBRztnQkFDUixDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENB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QUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsNERBQTREO1lBQ2hGLENBQUM7U0FDRjtRQUNELFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QjtRQUMzQyxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOztnQkEvd0JGLFVBQVU7Ozs7Z0JBakJILFFBQVE7Z0JBQ1IsWUFBWTs7SUFreUJwQixvQkFBQztDQUFBLEFBbHhCRCxJQWt4QkM7U0FqeEJZLGFBQWE7OztJQXlJeEIsZ0NBTUM7O0lBR0Qsc0NBVUM7O0lBRUQsK0NBd0JDOztJQUVELHlDQU9DOztJQUVELG9DQUE4Qzs7SUFDOUMsc0NBQXdFOztJQUN4RSxnQ0FNQzs7SUFFRCxvQ0FNQzs7SUFHRCxxQ0FnQkM7O0lBRUQsK0NBUUM7O0lBRUQsNkNBWUM7O0lBRUQsNENBZUM7O0lBRUQsNENBU0M7O0lBR0QsK0NBYUM7O0lBRUQsb0NBWUM7Ozs7O0lBcFRXLHNDQUErQjs7Ozs7SUFBRSxrQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVmFzaW0gSGF5YXQgQCAxLzI0LzIwMThcclxuICovXHJcblxyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7c29ydEFycmF5fSBmcm9tICcuLi91dGlsL2FycmF5JztcclxuaW1wb3J0IHtcclxuICBpc051bGwsXHJcbiAgdHlwZW9mT2JqZWN0LFxyXG4gIGlzRW1wdHlPYmplY3QsXHJcbiAgdHlwZW9mQXJyYXksXHJcbiAgaXNTdHJpbmcsXHJcbiAgaXNOb3ROdWxsLFxyXG4gIHR5cGVvZlN0cmluZyxcclxuICBpc0VtcHR5U3RyaW5nXHJcbn0gZnJvbSAnLi4vdXRpbC9jaGVjayc7XHJcbmltcG9ydCB7Rm5EYXRlfSBmcm9tICcuLi91dGlsL3R5cGVzJztcclxuaW1wb3J0IHtDVVJSRU5DWV9SRUdFWH0gZnJvbSAnLi4vY29uc3RhbnQvZm4uY29uc3RhbnQnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZuVXRpbFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVGb3JtYXR0ZXI6IERhdGVQaXBlLCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgZm9ybWF0Pzogc3RyaW5nLCB0aW1lem9uZT86IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRlRm9ybWF0dGVyLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0LCB0aW1lem9uZSwgbG9jYWxlKTtcclxuICB9XHJcblxyXG4gIGNvbXBpbGVIdG1sKGh0bWxTdHI6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWxTdHIpO1xyXG4gIH1cclxuXHJcbiAgY29udmVydEh0bWxUb1N0cmluZyhodG1sU3RyOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGh0bWxTdHIgPyBTdHJpbmcoaHRtbFN0cikucmVwbGFjZSgvPFtePl0rPi9nbSwgJycpIDogJyc7XHJcbiAgfVxyXG5cclxuXHJcbiAgc29ydEFycmF5KG9iamVjdEFycmF5OiBBcnJheTxhbnk+LCBrZXk6IHN0cmluZywgaXNEZXNjPzogYm9vbGVhbikge1xyXG4gICAgcmV0dXJuIHNvcnRBcnJheShvYmplY3RBcnJheSwga2V5LCBpc0Rlc2MpO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2VlayhidXNpRGF0ZTogYW55KSB7XHJcbiAgICBjb25zdCBmRGF0ZSA9IG5ldyBEYXRlKGJ1c2lEYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbCgoKChidXNpRGF0ZS5nZXRUaW1lKCkgLSBmRGF0ZS5nZXRUaW1lKCkpIC8gODY0MDAwMDApICsgZkRhdGUuZ2V0RGF5KCkgKyAxKSAvIDcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZUJ5SW5kZXgoaW5kZXg6IG51bWJlciwgZGF0ZU9iOiBGbkRhdGUsIGlzRmlyc3REYXk6IGJvb2xlYW4sIGlzTGFzdERheT86IGJvb2xlYW4pOiBEYXRlIHtcclxuXHJcbiAgICBsZXQgZGF0ZSA9IDA7XHJcbiAgICBjb25zdCBfZGF0ZU9iaiA9IG5ldyBEYXRlKGRhdGVPYik7XHJcblxyXG4gICAgaWYgKGluZGV4ID4gX2RhdGVPYmouZ2V0RGF5KCkpIHtcclxuICAgICAgZGF0ZSA9IChfZGF0ZU9iai5nZXREYXRlKCkgKyBpbmRleCAtIF9kYXRlT2JqLmdldERheSgpKSAtIDc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYXRlID0gX2RhdGVPYmouZ2V0RGF0ZSgpICsgKGluZGV4IC0gX2RhdGVPYmouZ2V0RGF5KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0ZpcnN0RGF5KSB7XHJcbiAgICAgIF9kYXRlT2JqLnNldERhdGUoZGF0ZSk7XHJcbiAgICB9IGVsc2UgaWYgKGlzTGFzdERheSkge1xyXG4gICAgICBfZGF0ZU9iai5zZXREYXRlKGRhdGUgKyA3KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gX2RhdGVPYmo7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0V2Vla0RpZmYoc3RhcnRJbmRleDogbnVtYmVyLCBzdGFydERhdGU6IEZuRGF0ZSwgZW5kRGF0ZTogRm5EYXRlKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHdlZWsxID0gdGhpcy5nZXREYXRlQnlJbmRleChzdGFydEluZGV4LCBzdGFydERhdGUsIHRydWUsIGZhbHNlKTtcclxuICAgIGNvbnN0IHdlZWsyID0gdGhpcy5nZXREYXRlQnlJbmRleChzdGFydEluZGV4LCBlbmREYXRlLCB0cnVlLCBmYWxzZSk7XHJcbiAgICBjb25zdCB3ZWVrQ291bnQxID0gdGhpcy5nZXRXZWVrKHdlZWsxKTtcclxuICAgIGxldCB3ZWVrQ291bnQyID0gdGhpcy5nZXRXZWVrKHdlZWsyKTtcclxuICAgIGlmICh3ZWVrQ291bnQyIDwgd2Vla0NvdW50MSkge1xyXG4gICAgICB3ZWVrQ291bnQyICs9IDUyO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgbm9PZldlZWsgPSAod2Vla0NvdW50MiAtIHdlZWtDb3VudDEgKyAxKTtcclxuICAgIHJldHVybiBub09mV2VlaztcclxuICB9XHJcblxyXG4gIGdldFdlZWtBcnJheUZvckRhdGVzKF9zdGFydEluZGV4OiBudW1iZXIsIF9zdGFydERhdGU6IEZuRGF0ZSwgX2VuZERhdGU6IEZuRGF0ZSk6IEFycmF5PERhdGU+IHtcclxuICAgIGNvbnN0IG5vT2ZXZWVrID0gdGhpcy5nZXRXZWVrRGlmZihfc3RhcnRJbmRleCwgX3N0YXJ0RGF0ZSwgX2VuZERhdGUpO1xyXG4gICAgY29uc3QgbmV3U3RhcnREYXRlID0gdGhpcy5nZXREYXRlQnlJbmRleChfc3RhcnRJbmRleCwgX3N0YXJ0RGF0ZSwgdHJ1ZSwgZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHdlZWtBcnJheSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub09mV2VlazsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IF93ZWVrRGF0ZSA9IHRoaXMuZ2V0RGF0ZUJ5SW5kZXgoX3N0YXJ0SW5kZXgsIG5ld1N0YXJ0RGF0ZSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICB3ZWVrQXJyYXkucHVzaCh0aGlzLmRhdGVGb3JtYXR0ZXIudHJhbnNmb3JtKF93ZWVrRGF0ZSwgJ01NL2RkL3l5eXknKSk7XHJcbiAgICAgIG5ld1N0YXJ0RGF0ZS5zZXREYXRlKG5ld1N0YXJ0RGF0ZS5nZXREYXRlKCkgKyA3KTtcclxuICAgIH1cclxuICAgIHJldHVybiB3ZWVrQXJyYXk7XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrQXJyYXkoc3RhcnREYXRlOiBGbkRhdGUsIG5vT2ZXZWVrOiBudW1iZXIpOiBBcnJheTxEYXRlPiB7XHJcbiAgICBjb25zdCB3ZWVrQXJyYXkgPSBbXTtcclxuICAgIGNvbnN0IG5ld1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vT2ZXZWVrOyBpKyspIHtcclxuICAgICAgY29uc3QgbmV3V2Vla0hhc2ggPSB7c3RhcnREYXRlOiBudWxsLCBlbmREYXRlOiBudWxsLCBmb3JtYXR0ZWRFbmREYXRlOiBudWxsfTtcclxuICAgICAgbmV3V2Vla0hhc2guc3RhcnREYXRlID0gbmV3U3RhcnREYXRlO1xyXG4gICAgICBuZXdXZWVrSGFzaC5lbmREYXRlID0gbmV3IERhdGUobmV3U3RhcnREYXRlLnNldERhdGUobmV3U3RhcnREYXRlLmdldERhdGUoKSArIDYpKTtcclxuICAgICAgbmV3V2Vla0hhc2guZm9ybWF0dGVkRW5kRGF0ZSA9IHRoaXMuZGF0ZUZvcm1hdHRlci50cmFuc2Zvcm0obmV3V2Vla0hhc2guZW5kRGF0ZSwgJ3l5eXlNTWRkJyk7XHJcbiAgICAgIHdlZWtBcnJheS5wdXNoKG5ld1dlZWtIYXNoKTtcclxuICAgICAgbmV3U3RhcnREYXRlLnNldERhdGUobmV3U3RhcnREYXRlLmdldERhdGUoKSArIDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdlZWtBcnJheTtcclxuICB9XHJcblxyXG4gIGdldFdlZWtBcnJheU9uSW5kZXgoaW5kZXg6IG51bWJlciwgZGF0ZU9iLCBpc0ZpcnN0RGF5LCBpc0xhc3REYXkpIHtcclxuICAgIGNvbnN0IGRhdGVPYmpBcnJheSA9IFtdO1xyXG4gICAgbGV0IGRhdGUgPSAwO1xyXG4gICAgY29uc3QgZGF0ZU9iaiA9IG5ldyBEYXRlKGRhdGVPYik7XHJcbiAgICBpZiAoaW5kZXggPiBkYXRlT2JqLmdldERheSgpKSB7XHJcbiAgICAgIGRhdGUgPSAoZGF0ZU9iai5nZXREYXRlKCkgKyBpbmRleCAtIGRhdGVPYmouZ2V0RGF5KCkpIC0gNztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRhdGUgPSBkYXRlT2JqLmdldERhdGUoKSArIChpbmRleCAtIGRhdGVPYmouZ2V0RGF5KCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzRmlyc3REYXkpIHtcclxuICAgICAgY29uc3QgZGF0ZU9iamVjdCA9IG5ldyBEYXRlKGRhdGVPYik7XHJcbiAgICAgIGRhdGVPYmplY3Quc2V0RGF0ZShkYXRlKTtcclxuICAgICAgcmV0dXJuIGRhdGVPYmplY3Q7XHJcbiAgICB9IGVsc2UgaWYgKGlzTGFzdERheSkge1xyXG4gICAgICBjb25zdCBkYXRlT2JqZWN0ID0gbmV3IERhdGUoZGF0ZU9iKTtcclxuICAgICAgZGF0ZU9iamVjdC5zZXREYXRlKGRhdGUgKyA3KTtcclxuICAgICAgcmV0dXJuIGRhdGVPYmplY3Q7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICBjb25zdCBkYXRlT2JqZWN0ID0gbmV3IERhdGUoZGF0ZU9iKTtcclxuXHJcbiAgICAgIGRhdGVPYmplY3Quc2V0RGF0ZShkYXRlKTtcclxuICAgICAgZGF0ZU9iakFycmF5LnB1c2goZGF0ZU9iamVjdCk7XHJcbiAgICAgIGRhdGUrKztcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRlT2JqQXJyYXk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY3VycmVuY3lGb3JtYXR0ZXIodmFsOiBhbnksIGN1cnJlbmN5U3RyaW5nPzogYW55KSB7XHJcbiAgICB2YWwgPSB0aGlzLnJldmVyc2VTdHJpbmcodmFsKTtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChpICUgMyA9PT0gMCAmJiBpICE9PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9ICcsJyArIHZhbC5jaGFyQXQoaSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHZhbC5jaGFyQXQoaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJldmVyc2VTdHJpbmcocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIGN1cnJlbmN5Umd4Rm9ybWF0KG46IG51bWJlciwgY3VycmVuY3k6IGFueSwgZml4ZWREZWNpbWFsOiBhbnkpIHtcclxuICAgIGNvbnN0IGN1cnJlbmN5VmFsID0gY3VycmVuY3kgKyAnICcgKyBuLnRvRml4ZWQoZml4ZWREZWNpbWFsKS5yZXBsYWNlKENVUlJFTkNZX1JFR0VYLCAnJDEsJyk7XHJcbiAgICAvLyBjdXJyZW5jeVZhbCA9IGN1cnJlbmN5VmFsLnJlcGxhY2VBbGwoXCIgXCIsIFwiXCIpO1xyXG4gICAgcmV0dXJuIGN1cnJlbmN5VmFsO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIGNvbnZlcnRpbmcgcmdiIHZhbHVlIHRvIGhleCB2YWx1ZVxyXG4gIHJnYjJoZXggPSAocmdiOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IF9pdGVtTGlzdCA9IHJnYi5tYXRjaCgvXnJnYlxcKChcXGQrKSxcXHMqKFxcZCspLFxccyooXFxkKylcXCkkLyk7XHJcbiAgICByZXR1cm4gJyMnICtcclxuICAgICAgKCcwJyArIHBhcnNlSW50KF9pdGVtTGlzdFsxXSwgMTApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpICtcclxuICAgICAgKCcwJyArIHBhcnNlSW50KF9pdGVtTGlzdFsyXSwgMTApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpICtcclxuICAgICAgKCcwJyArIHBhcnNlSW50KF9pdGVtTGlzdFszXSwgMTApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xyXG4gIH1cclxuXHJcblxyXG4gIGlzRW1wdHlPYmplY3QgPSAoX3ZhbHVlOiBhbnkpID0+IHtcclxuICAgIGlmICh0eXBlb2ZPYmplY3QoX3ZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gaXNFbXB0eU9iamVjdChfdmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2ZBcnJheShfdmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiBfdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2ZTdHJpbmcoX3ZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gaXNFbXB0eVN0cmluZyhfdmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGlzTnVsbChfdmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc29ydE9yZGVyaW5nQ29tcGFyYXRvciA9IChmaWVsZHM6IEFycmF5PG9iamVjdD4sIGlzSWdub3JlQ2FzZT86IGJvb2xlYW4pID0+IHtcclxuICAgIHJldHVybiAoYTogb2JqZWN0LCBiOiBvYmplY3QpID0+IHtcclxuICAgICAgcmV0dXJuIGZpZWxkcy5tYXAoKG9iajogYW55KSA9PiB7XHJcbiAgICAgICAgbGV0IGRpciA9IDE7XHJcbiAgICAgICAgaWYgKG9ialswXSA9PT0gJy0nKSB7XHJcbiAgICAgICAgICBkaXIgPSAtMTtcclxuICAgICAgICAgIG9iaiA9IG9iai5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0lnbm9yZUNhc2UgJiYgaXNTdHJpbmcoYVtvYmpdKSAmJiBpc1N0cmluZyhiW29ial0pKSB7XHJcbiAgICAgICAgICBhW29ial0gPSBhW29ial0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIGJbb2JqXSA9IGJbb2JqXS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYVtvYmpdID4gYltvYmpdKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGlyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYVtvYmpdIDwgYltvYmpdKSB7XHJcbiAgICAgICAgICByZXR1cm4gLShkaXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSlcclxuICAgICAgICAucmVkdWNlKChwLCBuKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcCA/IHAgOiBuO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNvcnRPYmplY3RPbktleXMgPSAob2JqQXJyYXk6IEFycmF5PG9iamVjdD4sIHNvcnRLZXlTdHI6IHN0cmluZywgaXNJZ25vcmVDYXNlPzogYm9vbGVhbikgPT4ge1xyXG4gICAgaWYgKCF0aGlzLmlzRW1wdHlPYmplY3Qoc29ydEtleVN0cikgJiYgIXRoaXMuaXNFbXB0eU9iamVjdChvYmpBcnJheSkgJiYgQXJyYXkuaXNBcnJheShvYmpBcnJheSkpIHtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICByZXR1cm4gb2JqQXJyYXkuc29ydCh0aGlzLnNvcnRPcmRlcmluZ0NvbXBhcmF0b3Ioc29ydEtleVN0ci5zcGxpdCgnficpLCBpc0lnbm9yZUNhc2UpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBvYmpBcnJheTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvU3RyaW5nVmFsID0gKG9ialZhbDogb2JqZWN0KSA9PiBvYmpWYWwgKyAnJztcclxuICByZXZlcnNlU3RyaW5nID0gKHN0clZhbDogc3RyaW5nKSA9PiBzdHJWYWwuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcclxuICByZXZlcnNlID0gKG9ialZhbDogb2JqZWN0KSA9PiB7XHJcbiAgICBpZiAoaXNTdHJpbmcob2JqVmFsKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZXZlcnNlU3RyaW5nKHRoaXMudG9TdHJpbmdWYWwob2JqVmFsKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IEFycmF5KG9ialZhbCkucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U3VtT25LZXkgPSAob2JqQXJyYXk6IEFycmF5PG9iamVjdD4sIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuICAgIG9iakFycmF5LmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICBzdW0gKz0gcGFyc2VGbG9hdCh2YWx1ZVtrZXldKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHN1bTtcclxuICB9XHJcblxyXG5cclxuICBtYXBGcm9tQXJyYXkgPSA8VD4oX2FycmF5OiBBcnJheTxUPiwgX2tleTogc3RyaW5nLCBpc0xvd2VyY2FzZT86IGJvb2xlYW4pID0+IHtcclxuICAgIGlmIChpc051bGwoX2FycmF5KSkge1xyXG4gICAgICByZXR1cm4ge2tleU5hbWU6IG5ldyBBcnJheTxUPigpfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfbWFwID0ge307XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9hcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaXNOb3ROdWxsKF9hcnJheVtpXVtfa2V5XSkpIHtcclxuICAgICAgICBpZiAoaXNMb3dlcmNhc2UpIHtcclxuICAgICAgICAgIF9tYXBbX2FycmF5W2ldW19rZXldLnRvTG93ZXJDYXNlKCldID0gX2FycmF5W2ldO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBfbWFwW19hcnJheVtpXVtfa2V5XV0gPSBfYXJyYXlbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX21hcDtcclxuICB9XHJcblxyXG4gIG1hcEZyb21BcnJheU9uSW5uZXJLZXkgPSAob2JqQXJyYXk6IEFycmF5PG9iamVjdD4sIG91dGVyS2V5OiBzdHJpbmcsIGlubmVyS2V5OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IF9yZXR1cm5IYXNoID0ge307XHJcbiAgICBvYmpBcnJheS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKCEoaXNOdWxsKHZhbHVlW291dGVyS2V5XSkpICYmIChpc051bGwodmFsdWVbb3V0ZXJLZXldW2lubmVyS2V5XSkpKSB7XHJcbiAgICAgICAgX3JldHVybkhhc2hbdmFsdWVbb3V0ZXJLZXldW2lubmVyS2V5XV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gX3JldHVybkhhc2g7XHJcbiAgfVxyXG5cclxuICBtYXBGcm9tVHdvTGV2ZWxBcnJheSA9IChvYmpBcnJheTogQXJyYXk8b2JqZWN0PiwgcmVsQXJyYXlLZXk6IHN0cmluZywgcmVsS2V5OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJldHVybkhhc2ggPSB7fTtcclxuICAgIG9iakFycmF5LmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaXNOb3ROdWxsKHZhbHVlKSAmJiBpc05vdE51bGwodmFsdWVbcmVsQXJyYXlLZXldKSkge1xyXG4gICAgICAgIHZhbHVlW3JlbEFycmF5S2V5XS5mb3JFYWNoKChjaGlsZFZhbDogb2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXNOb3ROdWxsKGNoaWxkVmFsW3JlbEtleV0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybkhhc2hbY2hpbGRWYWxbcmVsS2V5XV0gPSBjaGlsZFZhbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmV0dXJuSGFzaDtcclxuICB9XHJcblxyXG4gIG1hcEZyb21Ud29MZXZlbEhhc2ggPSAob2JqQXJyYXk6IEFycmF5PG9iamVjdD4sIGtleU5hbWU6IHN0cmluZywgcmVsQXJyYXlrZXk6IHN0cmluZywgcmVsS2V5OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJldHVybkhhc2ggPSB7fTtcclxuICAgIG9iakFycmF5LmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaXNOb3ROdWxsKHZhbHVlKSkge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG4gICAgICAgIGZvciAoY29uc3QgaSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBqIGluIHZhbHVlW2ldW3JlbEFycmF5a2V5XSkge1xyXG4gICAgICAgICAgICBpZiAoaXNOb3ROdWxsKHZhbHVlW2ldW3JlbEFycmF5a2V5XVtqXVtyZWxLZXldKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybkhhc2hbdmFsdWVbaV1bcmVsQXJyYXlrZXldW2pdW3JlbEtleV1dID0gdmFsdWVbaV1bcmVsQXJyYXlrZXldW2pdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXR1cm5IYXNoO1xyXG4gIH1cclxuXHJcbiAgbWFwRnJvbUFycmF5V2l0aFJlbCA9IChvYmpBcnJheTogQXJyYXk8b2JqZWN0Piwga2V5OiBzdHJpbmcsIHJlbEFycmF5S2V5OiBzdHJpbmcsIHJlbEtleTogc3RyaW5nKSA9PiB7XHJcblxyXG5cclxuICAgIG9iakFycmF5LmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaXNOb3ROdWxsKHZhbHVlW3JlbEFycmF5S2V5XSkpIHtcclxuICAgICAgICB2YWx1ZVtyZWxBcnJheUtleSArICdNYXAnXSA9IHRoaXMubWFwRnJvbUFycmF5KHZhbHVlW3JlbEFycmF5S2V5XSwgcmVsS2V5KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5tYXBGcm9tQXJyYXkob2JqQXJyYXksIGtleSk7XHJcbiAgfVxyXG5cclxuICAvLyBXaWxsIHJldHVybiB0aGUgc3RyaW5nIHZhbHVlIG9uIG9iamVjdHMgdmFsdWVzXHJcbiAgZ2V0U3RyaW5nT2ZPYmplY3RPbktleSA9IChvYmplY3RWYWw6IG9iamVjdCwgc2tpcEtleT86IGJvb2xlYW4sIGtleUFycmF5PzogQXJyYXk8c3RyaW5nPikgPT4ge1xyXG4gICAgc2tpcEtleSA9IHNraXBLZXkgfHwgZmFsc2U7XHJcbiAgICBjb25zdCBfa2V5QXJyYXkgPSBza2lwS2V5ID8gW10gOiBrZXlBcnJheTtcclxuICAgIGxldCBfcmV0dXJuU3RyID0gJyc7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3RWYWwpIHtcclxuICAgICAgaWYgKCFza2lwS2V5ICYmICFfa2V5QXJyYXkuaW5jbHVkZXMoa2V5LnRvU3RyaW5nKCkpKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgX3JldHVyblN0ciArPSAnICcgKyBvYmplY3RWYWxba2V5XTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBfcmV0dXJuU3RyO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyQXJyYXkgPSAoaW5wdXRBcnJheTogb2JqZWN0W10sIHNlYXJjaFRlcm06IHN0cmluZywgc2tpcEZpbHRlcktleT86IGJvb2xlYW4sIGZpbHRlcktleVN0cjogc3RyaW5nID0gJycpID0+IHtcclxuICAgIGNvbnN0IF9maWx0ZXJBcnJheSA9IG5ldyBBcnJheTxvYmplY3Q+KCk7XHJcbiAgICBjb25zdCBfc2VyY2hUZXJtID0gc2VhcmNoVGVybS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgY29uc3QgX2tleUFycmF5ID0gZmlsdGVyS2V5U3RyLnNwbGl0KCd+Jyk7XHJcbiAgICBmb3IgKGxldCBfaSA9IDA7IF9pIDwgaW5wdXRBcnJheS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgY29uc3QgX2l0ZW0gPSBpbnB1dEFycmF5W19pXTtcclxuICAgICAgY29uc3QgX29iamVjdFZhbFN0ciA9IHRoaXMuZ2V0U3RyaW5nT2ZPYmplY3RPbktleShfaXRlbSwgc2tpcEZpbHRlcktleSwgX2tleUFycmF5KTtcclxuICAgICAgaWYgKF9vYmplY3RWYWxTdHIudG9Mb2NhbGVMb3dlckNhc2UoKS5tYXRjaChfc2VyY2hUZXJtKSkge1xyXG4gICAgICAgIF9maWx0ZXJBcnJheS5wdXNoKF9pdGVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9maWx0ZXJBcnJheTtcclxuICB9XHJcblxyXG4gIHJlcGxhY2VBbGwoc3RyaW5nT2JqOiBzdHJpbmcsIGlucHV0U3RyOiBzdHJpbmcsIG91dFB1dFN0cjogc3RyaW5nLCBpZ25vcmU/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzdHJpbmdPYmoucmVwbGFjZShuZXcgUmVnRXhwKGlucHV0U3RyLnJlcGxhY2UoLyhbXFwvXFwsXFwhXFxcXFxcXlxcJFxce1xcfVxcW1xcXVxcKFxcKVxcLlxcKlxcK1xcP1xcfFxcPFxcPlxcLVxcJl0pL2csXHJcbiAgICAgICdcXFxcJCYnKSwgKGlnbm9yZSA/ICdnaScgOiAnZycpKSwgKHR5cGVvZiAob3V0UHV0U3RyKSA9PT0gJ3N0cmluZycpID9cclxuICAgICAgb3V0UHV0U3RyLnJlcGxhY2UoL1xcJC9nLCAnJCQkJCcpIDogb3V0UHV0U3RyKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbWFwRnJvbUFycmF5T2ZBcnJheU9iamVjdHMob2JqZWN0OiBvYmplY3QsIGFycmF5T2JqZWN0OiBBcnJheTxvYmplY3Q+LCBrZXlOYW1lOiBzdHJpbmcsIGFycmF5TmFtZTogc3RyaW5nKSB7XHJcbiAgICAvLyAnaWQnLCAnbWVudUl0ZW1BcnJheScgdGhpcy5tZW51RGF0YUhhc2gsIHRoaXMubWVudURhdGEubWVudUl0ZW1BcnJheVxyXG4gICAgaWYgKGFycmF5T2JqZWN0KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaXNOb3ROdWxsKGFycmF5T2JqZWN0W2ldW2tleU5hbWVdKSkge1xyXG4gICAgICAgICAgb2JqZWN0W2FycmF5T2JqZWN0W2ldW2tleU5hbWVdXSA9IGFycmF5T2JqZWN0W2ldO1xyXG4gICAgICAgICAgaWYgKGFycmF5TmFtZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFwRnJvbUFycmF5T2ZBcnJheU9iamVjdHMob2JqZWN0LCBhcnJheU9iamVjdFtpXVthcnJheU5hbWVdLCBrZXlOYW1lLCBhcnJheU5hbWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29weShvYmplY3Q6IG9iamVjdCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNFbXB0eU9iamVjdChvYmplY3QpID8gb2JqZWN0IDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcclxuICB9XHJcblxyXG4gIHRvQm9vbGVhbihib2xTdHI6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGlzTm90TnVsbChib2xTdHIpICYmIChib2xTdHIgPT09IHRydWUgfHwgYm9sU3RyID09PSAndHJ1ZScgfHwgYm9sU3RyID09PSAxKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBhcnJheUZyb21NYXAob2JqZWN0TWFwOiBvYmplY3QpIHtcclxuICAgIGNvbnN0IHJldHVybkFycmF5ID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3RNYXApIHtcclxuICAgICAgaWYgKG9iamVjdE1hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgcmV0dXJuQXJyYXkucHVzaChvYmplY3RNYXBba2V5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXR1cm5BcnJheTtcclxuICB9XHJcblxyXG4gIGFycmF5RnJvbUFycmF5T2ZNYXAob2JqZWN0QXJyYXk6IEFycmF5PG9iamVjdD4sIGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaXNOb3ROdWxsKG9iamVjdEFycmF5W2ldW2tleV0pKSB7XHJcbiAgICAgICAgcmV0dXJuQXJyYXkucHVzaChvYmplY3RBcnJheVtpXVtrZXldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldHVybkFycmF5O1xyXG4gIH1cclxuXHJcbiAgc2luZ2xlS2V5QXJyYXlGcm9tTWFwKGFycmF5T2JqZWN0OiBBcnJheTxvYmplY3Q+LCBrZXlOYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGFycmF5TGlzdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheU9iamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaXNOb3ROdWxsKGFycmF5T2JqZWN0W2ldW2tleU5hbWVdKSkge1xyXG4gICAgICAgIGFycmF5TGlzdC5wdXNoKGFycmF5T2JqZWN0W2ldW2tleU5hbWVdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheUxpc3Q7XHJcbiAgfVxyXG5cclxuICBhbHRhRm9ybWF0dGVyKHZhbDogYW55LCBwcmVmaXg6IGFueSwgZGVjaW1hbFZhbFN0cmVuZ3RoOiBhbnksIHN1ZmZpeDogYW55KSB7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbCA9IHZhbDtcclxuXHJcbiAgICBmdW5jdGlvbiByZXNwb25zZU9iamVjdChfdmFsOiBhbnksIGZvcm1hdENhbGw6IGJvb2xlYW4sIG5vRm9ybWF0OiBib29sZWFuLCBvcmlnaW5hbHZhbDogYW55KSB7XHJcbiAgICAgIGxldCBfZXNwID0ge3ZhbHVlOiAnJywgb2xkdmFsdWU6ICcnLCBmb3JtYXRjYWxsaW5nOiBudWxsLCBub2Zvcm1hdDogbnVsbH07XHJcbiAgICAgIF9lc3AudmFsdWUgPSBfdmFsO1xyXG4gICAgICBfZXNwLm9sZHZhbHVlID0gb3JpZ2luYWx2YWw7XHJcbiAgICAgIF9lc3AuZm9ybWF0Y2FsbGluZyA9IGZvcm1hdENhbGw7XHJcbiAgICAgIF9lc3Aubm9mb3JtYXQgPSBub0Zvcm1hdDtcclxuICAgICAgcmV0dXJuIF9lc3A7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxldCBjYWxsaW5nU3RhdHVzID0gdHJ1ZTtcclxuICAgIGxldCBub1N0YXR1cyA9IHRydWU7IC8vIGlmIGl0cyB0cnVlIG51bWJlciBpcyBpbiByaWdodCBmb3JtYXQgZWxzZSBudW1iZXIgaXMgaW4gd3JvbmcgZm9ybWF0XHJcbiAgICBpZiAoaXNOdWxsKHByZWZpeCkgfHwgaXNOYU4ocHJlZml4KSA9PT0gZmFsc2UpIHtcclxuICAgICAgY2FsbGluZ1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICBwcmVmaXggPSAnJztcclxuICAgIH1cclxuICAgIGlmIChpc051bGwoc3VmZml4KSB8fCBpc05hTihzdWZmaXgpID09PSBmYWxzZSkge1xyXG4gICAgICBjYWxsaW5nU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgIHN1ZmZpeCA9ICcnO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTnVsbChkZWNpbWFsVmFsU3RyZW5ndGgpIHx8IGRlY2ltYWxWYWxTdHJlbmd0aCA9PT0gJycgfHwgaXNOYU4oZGVjaW1hbFZhbFN0cmVuZ3RoKSkge1xyXG4gICAgICBjYWxsaW5nU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgIGRlY2ltYWxWYWxTdHJlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTm90TnVsbCh2YWwpICYmICFpc05hTih2YWwpKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZU9iamVjdCh0aGlzLmN1cnJlbmN5Umd4Rm9ybWF0KHBhcnNlRmxvYXQodmFsKSwgcHJlZml4LCBkZWNpbWFsVmFsU3RyZW5ndGgpICsgJycgKyBzdWZmaXgsXHJcbiAgICAgICAgY2FsbGluZ1N0YXR1cywgbm9TdGF0dXMsIHZhbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub1N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2VPYmplY3QodmFsLCBjYWxsaW5nU3RhdHVzLCBub1N0YXR1cywgb3JpZ2luYWxWYWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGZvcm1hdCh2YWx1ZTogYW55LCBJSUQ6IHN0cmluZywgY291bnRyeUZvcm1hdD86IHN0cmluZykge1xyXG4gICAgaWYgKGlzTnVsbChjb3VudHJ5Rm9ybWF0KSkge1xyXG4gICAgICBjb3VudHJ5Rm9ybWF0ID0gJyQnO1xyXG4gICAgfVxyXG4gICAgaWYgKElJRCA9PT0gJyQnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFsdGFGb3JtYXR0ZXIodmFsdWUsIGNvdW50cnlGb3JtYXQsIDAsICcnKTtcclxuICAgIH0gZWxzZSBpZiAoSUlEID09PSAnTicpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgJycsIDAsICcnKTtcclxuICAgIH0gZWxzZSBpZiAoSUlEID09PSAnJDFEJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5hbHRhRm9ybWF0dGVyKHZhbHVlLCBjb3VudHJ5Rm9ybWF0LCAxLCAnJyk7XHJcbiAgICB9IGVsc2UgaWYgKElJRCA9PT0gJyQyRCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgY291bnRyeUZvcm1hdCwgMiwgJycpO1xyXG4gICAgfSBlbHNlIGlmIChJSUQgPT09ICckM0QnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFsdGFGb3JtYXR0ZXIodmFsdWUsIGNvdW50cnlGb3JtYXQsIDMsICcnKTtcclxuICAgIH0gZWxzZSBpZiAoSUlEID09PSAnJDREJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5hbHRhRm9ybWF0dGVyKHZhbHVlLCBjb3VudHJ5Rm9ybWF0LCA0LCAnJyk7XHJcbiAgICB9IGVsc2UgaWYgKElJRCA9PT0gJzFEJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5hbHRhRm9ybWF0dGVyKHZhbHVlLCAnJywgMSwgJycpO1xyXG4gICAgfSBlbHNlIGlmIChJSUQgPT09ICcyRCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYWx0YUZvcm1hdHRlcih2YWx1ZSwgJycsIDIsICcnKTtcclxuICAgIH0gZWxzZSBpZiAoSUlEID09PSAnM0QnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFsdGFGb3JtYXR0ZXIodmFsdWUsICcnLCAzLCAnJyk7XHJcbiAgICB9IGVsc2UgaWYgKElJRCA9PT0gJyUnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFsdGFGb3JtYXR0ZXIodmFsdWUsICcnLCAyLCAnJScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWVyZ2VIYXNoKGRlc3RpbmF0aW9uOiBhbnksIHNyYzogYW55KSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzcmMpIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjW2tleV0pKSB7XHJcbiAgICAgICAgaWYgKGlzTnVsbChkZXN0aW5hdGlvbltrZXldKSkge1xyXG4gICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gZGVzdGluYXRpb25ba2V5XS5jb25jYXQoc3JjW2tleV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBzcmNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfSAvLyBlbmQgb2YgZm9yIGxvb3BcclxuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcclxuICB9XHJcblxyXG5cclxuICBnZXRTdW1PblRoZUJhc2lzT2ZLZXkoYXJyYXlPYmplY3Q6IGFueSwga2V5MTogYW55LCBrZXkyOiBhbnkpIHtcclxuICAgIGxldCBzdW0gPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheU9iamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzdW0gKz0gcGFyc2VGbG9hdChhcnJheU9iamVjdFtpXVtrZXkxXVtrZXkyXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VtO1xyXG4gIH1cclxuXHJcblxyXG4gIGdldFNpbXBsZUhhc2goYXJyYXlPZk9iamVjdDogYW55KSB7XHJcbiAgICBjb25zdCBfcmV0dXJuT2JqID0ge307XHJcbiAgICBhcnJheU9mT2JqZWN0LmZvckVhY2goKG9iajogYW55KSA9PiB7XHJcbiAgICAgIF9yZXR1cm5PYmpbb2JqXSA9IG9iajtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIF9yZXR1cm5PYmo7XHJcbiAgfVxyXG5cclxuXHJcbiAgY291bnRPY2N1cmVuY2Uoc3RyaW5ndmFsdWU6IGFueSwgY2hhcnZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHJpbmd2YWx1ZS5tYXRjaChuZXcgUmVnRXhwKGNoYXJ2YWx1ZSwgJ2cnKSB8fCBbXSkubGVuZ3RoO1xyXG4gIH1cclxuXHJcblxyXG4gIHJlcGxhY2VEb3RUb1VuZGVyc2NvcmUodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcclxuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlQWxsKCcuJywgJ18nKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG5cclxuICBjaGVja0NvbGxlY3Rpb25MZW5ndGgob2JqOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLmlzRW1wdHlPYmplY3Qob2JqKSkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mT2JqZWN0KG9iaikpIHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xyXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcclxuICAgICAgcmV0dXJuIG9iai5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGhhc2hGcm9tQXJyYXlXaXRoUmQoYXJyYXlPYmplY3RzOiBBcnJheTxhbnk+LCBrZXlOYW1lOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IF9yZXR1cm5IYXNoID0ge307XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBrZXkgPSBhcnJheU9iamVjdHNbaV1ba2V5TmFtZV07XHJcbiAgICAgIGlmIChpc05vdE51bGwoX3JldHVybkhhc2hba2V5XSkpIHtcclxuICAgICAgICBfcmV0dXJuSGFzaFtrZXldLnB1c2goYXJyYXlPYmplY3RzW2ldKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBfcmV0dXJuSGFzaFtrZXldID0gW107XHJcbiAgICAgICAgX3JldHVybkhhc2hba2V5XS5wdXNoKGFycmF5T2JqZWN0c1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBfcmV0dXJuSGFzaDtcclxuICB9XHJcblxyXG4gIGZvcm1hdFNoaWZ0VGltZSh0aW1lOiBhbnksIHNoaWZ0OiBhbnkpIHtcclxuICAgIGxldCB0aW1lQXJyID0gdGltZS5zcGxpdCgnIC0gJyk7XHJcbiAgICBpZiAodGltZUFyci5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHRpbWVBcnIgPSB0aW1lLnNwbGl0KCcgLScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRpbWVBcnIubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aW1lQXJyID0gdGltZS5zcGxpdCgnLScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRpbWVBcnIubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aW1lQXJyID0gdGltZS5zcGxpdCgnLSAnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IHRpbWVBcnJbMF0udHJpbSgpLnN1YnN0cigwLCB0aW1lQXJyWzBdLnRyaW0oKS5sZW5ndGggLSAyKTtcclxuICAgIGNvbnN0IGVuZFRpbWUgPSB0aW1lQXJyWzFdLnRyaW0oKS5zdWJzdHIoMCwgdGltZUFyclsxXS50cmltKCkubGVuZ3RoIC0gMik7XHJcbiAgICBjb25zdCBzdGFydFRpbWVBcnIgPSBzdGFydFRpbWUuc3BsaXQoJzonKTtcclxuICAgIGlmIChzdGFydFRpbWVBcnIubGVuZ3RoID4gMSkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmFkaXhcclxuICAgICAgc2hpZnQuc3RhcnRUaW1lID0gcGFyc2VJbnQoc3RhcnRUaW1lQXJyWzBdKSAqIDYwICsgcGFyc2VJbnQoc3RhcnRUaW1lQXJyWzFdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyYWRpeFxyXG4gICAgICBzaGlmdC5zdGFydFRpbWUgPSBwYXJzZUludChzdGFydFRpbWVBcnJbMF0pICogNjA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbmRUaW1lQXJyID0gZW5kVGltZS5zcGxpdCgnOicpO1xyXG4gICAgaWYgKGVuZFRpbWVBcnIubGVuZ3RoID4gMSkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmFkaXhcclxuICAgICAgc2hpZnQuZW5kVGltZSA9IHBhcnNlSW50KGVuZFRpbWVBcnJbMF0pICogNjAgKyBwYXJzZUludChlbmRUaW1lQXJyWzFdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyYWRpeFxyXG4gICAgICBzaGlmdC5lbmRUaW1lID0gcGFyc2VJbnQoZW5kVGltZUFyclswXSkgKiA2MDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEluZGV4V2l0aFR3b0tleXMoYXJyYXk6IEFycmF5PGFueT4sIGZpcnN0S2V5OiBzdHJpbmcsIGZpcnN0VmFsdWU6IGFueSwgc2Vjb25kS2V5OiBzdHJpbmcsIHNlY29uZFZhbDogYW55KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICgoYXJyYXlbaV1bZmlyc3RLZXldID09PSBmaXJzdFZhbHVlKSAmJiAoYXJyYXlbaV1bc2Vjb25kS2V5XSA9PT0gc2Vjb25kVmFsKSkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleElmT2JqV2l0aEF0dHIoYXJyYXk6IEFycmF5PGFueT4sIGF0dHI6IGFueSwgdmFsdWU6IGFueSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoYXJyYXlbaV1bYXR0cl0gPT09IHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWRPYmplY3RzKG9iajE6IGFueSwgb2JqMjogYW55KSB7XHJcbiAgICByZXR1cm4gaXNOdWxsKG9iajEpICYmIGlzTnVsbChvYmoyKTtcclxuICB9XHJcblxyXG4gIGlzU2FtZU9iamVjdHMoaGFzaE9iamVjdDE6IGFueSwgaGFzaE9iamVjdDI6IGFueSkge1xyXG4gICAgbGV0IGZsYWcgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrQ29sbGVjdGlvbkxlbmd0aChoYXNoT2JqZWN0MSkgPiAwICYmIHRoaXMuY2hlY2tDb2xsZWN0aW9uTGVuZ3RoKGhhc2hPYmplY3QyKSA+IDApIHtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gaGFzaE9iamVjdDEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZE9iamVjdHMoaGFzaE9iamVjdDFba2V5XSwgaGFzaE9iamVjdDJba2V5XSkgJiYgaGFzaE9iamVjdDFba2V5XSAhPT0gaGFzaE9iamVjdDJba2V5XSkge1xyXG4gICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmxhZztcclxuICB9XHJcblxyXG5cclxuICBjb3B5T2JqZWN0KG9iajogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0VtcHR5T2JqZWN0KG9iaikgPyBvYmogOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG4gIH1cclxuXHJcbiAgb2JqZWN0RXF1YWxzKHg6IGFueSwgeTogYW55KSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgaWYgKHggPT09IG51bGwgfHwgeCA9PT0gdW5kZWZpbmVkIHx8IHkgPT09IG51bGwgfHwgeSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB4ID09PSB5O1xyXG4gICAgfVxyXG4gICAgLy8gYWZ0ZXIgdGhpcyBqdXN0IGNoZWNraW5nIHR5cGUgb2Ygb25lIHdvdWxkIGJlIGVub3VnaFxyXG4gICAgaWYgKHguY29uc3RydWN0b3IgIT09IHkuY29uc3RydWN0b3IpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgdGhleSBhcmUgZnVuY3Rpb25zLCB0aGV5IHNob3VsZCBleGFjdGx5IHJlZmVyIHRvIHNhbWUgb25lIChiZWNhdXNlIG9mIGNsb3N1cmVzKVxyXG4gICAgaWYgKHggaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICByZXR1cm4geCA9PT0geTtcclxuICAgIH1cclxuICAgIC8vIGlmIHRoZXkgYXJlIHJlZ2V4cHMsIHRoZXkgc2hvdWxkIGV4YWN0bHkgcmVmZXIgdG8gc2FtZSBvbmUgKGl0IGlzIGhhcmQgdG8gYmV0dGVyIGVxdWFsaXR5IGNoZWNrIG9uIGN1cnJlbnQgRVMpXHJcbiAgICBpZiAoeCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG4gICAgICByZXR1cm4geCA9PT0geTtcclxuICAgIH1cclxuICAgIGlmICh4ID09PSB5IHx8IHgudmFsdWVPZigpID09PSB5LnZhbHVlT2YoKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHgpICYmIHgubGVuZ3RoICE9PSB5Lmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgdGhleSBhcmUgZGF0ZXMsIHRoZXkgbXVzdCBoYWQgZXF1YWwgdmFsdWVPZlxyXG4gICAgaWYgKHggaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiB0aGV5IGFyZSBzdHJpY3RseSBlcXVhbCwgdGhleSBib3RoIG5lZWQgdG8gYmUgb2JqZWN0IGF0IGxlYXN0XHJcbiAgICBpZiAoISh4IGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoISh5IGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVjdXJzaXZlIG9iamVjdCBlcXVhbGl0eSBjaGVja1xyXG4gICAgY29uc3QgcCA9IE9iamVjdC5rZXlzKHgpO1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHkpLmV2ZXJ5KChpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHAuaW5kZXhPZihpKSAhPT0gLTE7XHJcbiAgICAgIH0pICYmXHJcbiAgICAgIHAuZXZlcnkoKGkpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RFcXVhbHMoeFtpXSwgeVtpXSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZHVtbXlBcnJheU9mTGVuZ3RoKGxlbmd0aDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgcmVzLnB1c2goaSArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0Q2xlYW5YTUwoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmIChpc051bGwoc3RyKSkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBpZiAoKHN0ci5pbmRleE9mKCcmJykgPT09IC0xKSAmJiAoc3RyLmluZGV4T2YoJzwnKSA9PT0gLTEpKSB7XHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RyID09PSAnJm5ic3A7Jykge1xyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG4gICAgbGV0IHN0ckJ1ZiA9ICcnO1xyXG4gICAgY29uc3QgY2hhckFycmF5ID0gc3RyLnNwbGl0KCcnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhckFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChjaGFyQXJyYXlbaV0gPT09ICcmJykge1xyXG4gICAgICAgIHN0ckJ1ZiArPSAnJmFtcDsnO1xyXG4gICAgICB9IGVsc2UgaWYgKGNoYXJBcnJheVtpXSA9PT0gJzwnKSB7XHJcbiAgICAgICAgc3RyQnVmICs9ICcmbHQ7JztcclxuICAgICAgfSBlbHNlIGlmIChjaGFyQXJyYXlbaV0gPT09ICc+Jykge1xyXG4gICAgICAgIHN0ckJ1ZiArPSAnJmd0Oyc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RyQnVmICs9IChjaGFyQXJyYXlbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyQnVmLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmVwbGFjZVN0cmluZ0F0KHNvdXJjZVN0cjogc3RyaW5nLCBzSW5kZXg6IG51bWJlciwgZW5kSW5kZXg6IG51bWJlciwgdG9TdHJpbmc6IGFueSkge1xyXG4gICAgbGV0IF9yZXR1cm5TdHIgPSAnJztcclxuICAgIF9yZXR1cm5TdHIgKz0gc291cmNlU3RyLnN1YnN0cmluZygwLCBzSW5kZXgpO1xyXG4gICAgX3JldHVyblN0ciArPSB0b1N0cmluZztcclxuICAgIF9yZXR1cm5TdHIgKz0gKHNvdXJjZVN0ci5zdWJzdHJpbmcoZW5kSW5kZXgsIHNvdXJjZVN0ci5sZW5ndGgpKTtcclxuICAgIHJldHVybiBfcmV0dXJuU3RyO1xyXG4gIH1cclxuXHJcbiAgbWVyZ2VPYmplY3QoZGVzdE9iajogYW55LCBzb3VyY2VPYmo6IGFueSkge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlT2JqKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc0VtcHR5T2JqZWN0KHNvdXJjZU9ialtrZXldKSkge1xyXG4gICAgICAgIGRlc3RPYmpba2V5XSA9IHNvdXJjZU9ialtrZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVzdE9iajtcclxuICB9XHJcblxyXG4gIGlzTnVtYmVyU3RyKG51bVN0cjogYW55KSB7XHJcbiAgICBudW1TdHIgPSBudW1TdHIudHJpbSgnICcpO1xyXG4gICAgcmV0dXJuIHRoaXMuaXNFbXB0eU9iamVjdChudW1TdHIpID8gZmFsc2UgOiBudW1TdHIubWF0Y2goL15cXHMqKFxcLXxcXCspPyhcXGQrfChcXGQqKFxcLlxcZCopKSlcXHMqJC8pO1xyXG4gIH1cclxuXHJcblxyXG4gIGlzSW50ZWdlck51bWJlcigpIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKC9eWzAtOV0qJC8pO1xyXG4gIH1cclxuXHJcbiAgc3RyaW5nU29ydEFycmF5KGFycmF5T2JqZWN0OiBhbnksIGtleU5hbWU6IHN0cmluZywgaXNSZXZlcnNlPzogYm9vbGVhbikge1xyXG4gICAgYXJyYXlPYmplY3Quc29ydCgob2JqZWN0MTogYW55LCBvYmplY3QyOiBhbnkpID0+IHtcclxuICAgICAgaWYgKGlzUmV2ZXJzZSkge1xyXG4gICAgICAgIHJldHVybiBvYmplY3QyW2tleU5hbWVdLmxvY2FsZUNvbXBhcmUob2JqZWN0MVtrZXlOYW1lXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDFba2V5TmFtZV0ubG9jYWxlQ29tcGFyZShvYmplY3QyW2tleU5hbWVdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXJyYXlPYmplY3Q7XHJcbiAgfVxyXG5cclxuXHJcbiAgc2V0RGlmZmVyZW5jZShhcnJheTE6IEFycmF5PGFueT4sIGFycmF5MjogQXJyYXk8YW55Piwga2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHRlbXBBcnJheSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkxLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGFycmF5MVtpbmRleF1ba2V5XTtcclxuICAgICAgY29uc3QgYW5vdGhlckFycmF5ID0gYXJyYXkyLmZpbHRlcigoZGF0YU9iajogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFPYmpba2V5XSA9PT0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoYW5vdGhlckFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRlbXBBcnJheS5wdXNoKGFycmF5MVtpbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGVtcEFycmF5O1xyXG4gIH1cclxuXHJcbiAgaW5ldGVyc2VjdGlvbihhcnJheTE6IEFycmF5PGFueT4sIGFycmF5MjogQXJyYXk8YW55Piwga2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHRlbXBBcnJheSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkxLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGFycmF5MVtpbmRleF1ba2V5XTtcclxuICAgICAgY29uc3QgYW5vdGhlckFycmF5ID0gYXJyYXkyLmZpbHRlcigoZGF0YU9iajogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFPYmpba2V5XSA9PT0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoYW5vdGhlckFycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0ZW1wQXJyYXkucHVzaChhcnJheTFbaW5kZXhdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXBBcnJheTtcclxuICB9XHJcblxyXG4gIGdldEJvb2xWYWx1ZShib29sKSB7XHJcbiAgICBpZiAoaXNOb3ROdWxsKGJvb2wpICYmIChib29sID09PSB0cnVlIHx8IGJvb2wgPT09ICd0cnVlJyB8fCBib29sID09PSAxKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBzeW5jTG9vcChpdGVyYXRpb25zLCBkb1Byb2Nlc3MsIGV4aXQpIHtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xyXG4gICAgbGV0IHNob3VsZEV4aXQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGxvb3BPYmplY3QgPSB7XHJcbiAgICAgIG5leHQoKSB7XHJcbiAgICAgICAgaWYgKGRvbmUpIHtcclxuICAgICAgICAgIGlmIChzaG91bGRFeGl0ICYmIGV4aXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4aXQoKTsgLy8gRXhpdCB0aGUgbG9vcFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkbyBpdGVhdGlvblxyXG4gICAgICAgIGlmIChpbmRleCA8IGl0ZXJhdGlvbnMpIHtcclxuICAgICAgICAgIGluZGV4Kys7IC8vIGluY3JlYXNlIEluZGV4XHJcbiAgICAgICAgICBkb1Byb2Nlc3MobG9vcE9iamVjdCk7IC8vIFJ1biBvdXIgcHJvY2VzcywgcGFzcyBpbiB0aGUgbG9vcFxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZG9uZSA9IHRydWU7IC8vIE1ha2Ugc3VyZSB3ZSBzYXkgd2UncmUgZG9uZVxyXG4gICAgICAgICAgaWYgKGV4aXQpIHtcclxuICAgICAgICAgICAgZXhpdCgpO1xyXG4gICAgICAgICAgfSAvLyBDYWxsIHRoZSBjYWxsYmFjayBvbiBleGl0XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBpdGVyYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4IC0gMTsgLy8gUmV0dXJuIHRoZSBjdXJyZW50IGluZGV4IGNvdW50XHJcbiAgICAgIH0sXHJcbiAgICAgIGJyZWFrKGVuZCkge1xyXG4gICAgICAgIGRvbmUgPSB0cnVlOyAvLyBFbmQgdGhlIGxvb3BcclxuICAgICAgICBzaG91bGRFeGl0ID0gZW5kOyAvLyBQYXNzaW5nIGVuZCBhcyB0cnVlIG1lYW5zIHdlIHN0aWxsIGNhbGwgdGhlIGV4aXQgY2FsbGJhY2tcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGxvb3BPYmplY3QubmV4dCgpOyAvLyBydW4gZm9yIGZpcnN0IHRpbWUuLi5cclxuICAgIHJldHVybiBsb29wT2JqZWN0O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuIl19