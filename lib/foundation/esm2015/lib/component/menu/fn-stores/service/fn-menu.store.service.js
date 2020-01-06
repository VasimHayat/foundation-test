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
export class FnMenuStoreService {
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FnMenuStoreService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ FnMenuStoreService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FnMenuStoreService_Factory() { return new FnMenuStoreService(i0.ɵɵinject(i1.HttpClient)); }, token: FnMenuStoreService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5zdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbWVudS9mbi1zdG9yZXMvc2VydmljZS9mbi1tZW51LnN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUF1QixVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBTyxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUt0RCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBQzNCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDbkIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxlQUFlLENBQUM7UUFDakMsa0JBQWEsR0FBRyxRQUFRLENBQUM7UUFDekIsMEJBQXFCLEdBQUcsYUFBYSxDQUFDO0lBSmYsQ0FBQzs7Ozs7O0lBTXpDLGNBQWMsQ0FBQyxPQUFlLEVBQUUsV0FBa0I7UUFDOUMsSUFBSSxXQUFXLEVBQUU7WUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLFdBQVcsRUFBRTtvQkFDbEQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFdBQVcs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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEZuTWVudUl0ZW1TdGF0ZSB9IGZyb20gJy4uL21vZGVscy9mbi1tZW51LnN0YXRlJztcclxuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZuTWVudVN0b3JlU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBNRU5VX0lEX0tFWSA9ICdpZCc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE1FTlVfQVJSQVlfS0VZID0gJ21lbnVJdGVtQXJyYXknO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBNRU5VX0lORk9fS0VZID0gJ2RldGFpbCc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE1FTlVfUEFSRU5UX0FSUkFZX0tFWSA9ICdwYXJlbnRBcnJheSc7XHJcblxyXG4gICAgZ2V0TWVudU1hcE9uSWQocm9vdE1hcDogb2JqZWN0LCBhcnJheU9iamVjdDogYW55W10pIHtcclxuICAgICAgICBpZiAoYXJyYXlPYmplY3QpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheU9iamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9JRF9LRVldICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RNYXBbYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0lEX0tFWV1dID0gYXJyYXlPYmplY3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNZW51TWFwT25JZChyb290TWFwLCBhcnJheU9iamVjdFtpXVt0aGlzLk1FTlVfQVJSQVlfS0VZXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2ltcGxlTWVudU1hcE9uSWQocm9vdE1hcDogb2JqZWN0LCBhcnJheU9iamVjdDogYW55W10sIHBhcmVudEtleT86IHN0cmluZykge1xyXG4gICAgICAgIGlmIChhcnJheU9iamVjdCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2JqZWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0lEX0tFWV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRLZXkgIT09IHVuZGVmaW5lZCAmJiByb290TWFwW3BhcmVudEtleV1bdGhpcy5NRU5VX1BBUkVOVF9BUlJBWV9LRVldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdE1hcFtwYXJlbnRLZXldW3RoaXMuTUVOVV9QQVJFTlRfQVJSQVlfS0VZXS5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51QXJyYXkucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcE9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGFycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9JRF9LRVldLCBuYW1lOiBhcnJheU9iamVjdFtpXS5uYW1lLCB1cmw6IGFycmF5T2JqZWN0W2ldLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuOiBhcnJheU9iamVjdFtpXVt0aGlzLk1FTlVfQVJSQVlfS0VZXS5sZW5ndGgsIHNob3dCcmVhZGNydW06IGFycmF5T2JqZWN0W2ldLnNob3dCcmVhZGNydW1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVBcnJheS5wdXNoKHRlbXBPYmopO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByb290TWFwW2FycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9JRF9LRVldXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICByb290TWFwW2FycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9JRF9LRVldXSA9IG1lbnVBcnJheTtcclxuICAgICAgICAgICAgICAgICAgICByb290TWFwW2FycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9JRF9LRVldXVt0aGlzLk1FTlVfSU5GT19LRVldID0gdGVtcE9iajtcclxuICAgICAgICAgICAgICAgICAgICByb290TWFwW2FycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9JRF9LRVldXVt0aGlzLk1FTlVfUEFSRU5UX0FSUkFZX0tFWV0gPSBtZW51QXJyYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2ltcGxlTWVudU1hcE9uSWQocm9vdE1hcCwgYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0FSUkFZX0tFWV0sIGFycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9JRF9LRVldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRNZW51RGF0YShtZW51SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZuTWVudUl0ZW1TdGF0ZT4oJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9WYXNpbUhheWF0L21vY2tfZGF0YS9tYXN0ZXIvbWVudS5qc29uJylcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXN0cmluZy1saXRlcmFsXHJcbiAgICAgICAgICAgICAgICBtYXAoKG1lbnVEYXRhOiBhbnkpID0+IG1lbnVEYXRhLm1lbnVEYXRhSGFzaC5tZW51RGF0YSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRocm93RXJyb3IoZXJyb3IpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBnZXRNZW51RGF0YShtZW51SWQ6IHN0cmluZykge1xyXG4gICAgLy8gICAgIGNvbnN0IHJldHVybk9icyA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICAvLyAgICAgdGhpcy5odHRwLmdldCgnZHVtbXkubWVudS5qc29uJykuc3Vic2NyaWJlKFxyXG4gICAgLy8gICAgICAgICAocmVzcDogRm5NZW51SXRlbVN0YXRlKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm5PYnMubmV4dChyZXNwKTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybk9icy5jb21wbGV0ZSgpO1xyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm5PYnMuZXJyb3IoZXJyb3IpO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuT2JzLmNvbXBsZXRlKCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICApO1xyXG5cclxuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19