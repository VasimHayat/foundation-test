/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
    /** @nocollapse */ FnMenuStoreService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FnMenuStoreService_Factory() { return new FnMenuStoreService(i0.ɵɵinject(i1.HttpClient)); }, token: FnMenuStoreService, providedIn: "root" });
    return FnMenuStoreService;
}());
export { FnMenuStoreService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5zdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbWVudS9mbi1zdG9yZXMvc2VydmljZS9mbi1tZW51LnN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUF1QixVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBTyxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUV0RDtJQUlJLDRCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ25CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLG1CQUFjLEdBQUcsZUFBZSxDQUFDO1FBQ2pDLGtCQUFhLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLDBCQUFxQixHQUFHLGFBQWEsQ0FBQztJQUpmLENBQUM7Ozs7OztJQU16QywyQ0FBYzs7Ozs7SUFBZCxVQUFlLE9BQWUsRUFBRSxXQUFrQjtRQUM5QyxJQUFJLFdBQVcsRUFBRTtZQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssV0FBVyxFQUFFO29CQUNsRCxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMs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Ozs7OztJQUozQyxrQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgRm5NZW51SXRlbVN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL2ZuLW1lbnUuc3RhdGUnO1xyXG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5NZW51U3RvcmVTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE1FTlVfSURfS0VZID0gJ2lkJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgTUVOVV9BUlJBWV9LRVkgPSAnbWVudUl0ZW1BcnJheSc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE1FTlVfSU5GT19LRVkgPSAnZGV0YWlsJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgTUVOVV9QQVJFTlRfQVJSQVlfS0VZID0gJ3BhcmVudEFycmF5JztcclxuXHJcbiAgICBnZXRNZW51TWFwT25JZChyb290TWFwOiBvYmplY3QsIGFycmF5T2JqZWN0OiBhbnlbXSkge1xyXG4gICAgICAgIGlmIChhcnJheU9iamVjdCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2JqZWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0lEX0tFWV0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdE1hcFthcnJheU9iamVjdFtpXVt0aGlzLk1FTlVfSURfS0VZXV0gPSBhcnJheU9iamVjdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE1lbnVNYXBPbklkKHJvb3RNYXAsIGFycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9BUlJBWV9LRVldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaW1wbGVNZW51TWFwT25JZChyb290TWFwOiBvYmplY3QsIGFycmF5T2JqZWN0OiBhbnlbXSwgcGFyZW50S2V5Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGFycmF5T2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcnJheU9iamVjdFtpXVt0aGlzLk1FTlVfSURfS0VZXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVudUFycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudEtleSAhPT0gdW5kZWZpbmVkICYmIHJvb3RNYXBbcGFyZW50S2V5XVt0aGlzLk1FTlVfUEFSRU5UX0FSUkFZX0tFWV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb290TWFwW3BhcmVudEtleV1bdGhpcy5NRU5VX1BBUkVOVF9BUlJBWV9LRVldLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVBcnJheS5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wT2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0lEX0tFWV0sIG5hbWU6IGFycmF5T2JqZWN0W2ldLm5hbWUsIHVybDogYXJyYXlPYmplY3RbaV0udXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW46IGFycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9BUlJBWV9LRVldLmxlbmd0aCwgc2hvd0JyZWFkY3J1bTogYXJyYXlPYmplY3RbaV0uc2hvd0JyZWFkY3J1bVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUFycmF5LnB1c2godGVtcE9iaik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RNYXBbYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0lEX0tFWV1dID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIHJvb3RNYXBbYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0lEX0tFWV1dID0gbWVudUFycmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RNYXBbYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0lEX0tFWV1dW3RoaXMuTUVOVV9JTkZPX0tFWV0gPSB0ZW1wT2JqO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RNYXBbYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0lEX0tFWV1dW3RoaXMuTUVOVV9QQVJFTlRfQVJSQVlfS0VZXSA9IG1lbnVBcnJheTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW1wbGVNZW51TWFwT25JZChyb290TWFwLCBhcnJheU9iamVjdFtpXVt0aGlzLk1FTlVfQVJSQVlfS0VZXSwgYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0lEX0tFWV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1lbnVEYXRhKG1lbnVJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Rm5NZW51SXRlbVN0YXRlPignaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Zhc2ltSGF5YXQvbW9ja19kYXRhL21hc3Rlci9tZW51Lmpzb24nKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc3RyaW5nLWxpdGVyYWxcclxuICAgICAgICAgICAgICAgIG1hcCgobWVudURhdGE6IGFueSkgPT4gbWVudURhdGEubWVudURhdGFIYXNoLm1lbnVEYXRhKSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhyb3dFcnJvcihlcnJvcikpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGdldE1lbnVEYXRhKG1lbnVJZDogc3RyaW5nKSB7XHJcbiAgICAvLyAgICAgY29uc3QgcmV0dXJuT2JzID0gbmV3IFN1YmplY3QoKTtcclxuICAgIC8vICAgICB0aGlzLmh0dHAuZ2V0KCdkdW1teS5tZW51Lmpzb24nKS5zdWJzY3JpYmUoXHJcbiAgICAvLyAgICAgICAgIChyZXNwOiBGbk1lbnVJdGVtU3RhdGUpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybk9icy5uZXh0KHJlc3ApO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuT2JzLmNvbXBsZXRlKCk7XHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIGVycm9yID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybk9icy5lcnJvcihlcnJvcik7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm5PYnMuY29tcGxldGUoKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICk7XHJcblxyXG5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=