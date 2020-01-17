/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5zdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbWVudS9mbi1zdG9yZXMvc2VydmljZS9mbi1tZW51LnN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUF1QixVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHakQsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUM3QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBR25CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLG1CQUFjLEdBQUcsZUFBZSxDQUFDO1FBQ2pDLGtCQUFhLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLDBCQUFxQixHQUFHLGFBQWEsQ0FBQztJQUx2RCxDQUFDOzs7Ozs7SUFPRCxjQUFjLENBQUMsT0FBZSxFQUFFLFdBQWtCO1FBQ2hELElBQUksV0FBVyxFQUFFO1lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxXQUFXLEVBQUU7b0JBQ3BELE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxXQUFXLENB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Y3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgRm5NZW51SXRlbVN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL2ZuLW1lbnUuc3RhdGUnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGbk1lbnVTdG9yZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBNRU5VX0lEX0tFWSA9ICdpZCc7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBNRU5VX0FSUkFZX0tFWSA9ICdtZW51SXRlbUFycmF5JztcclxuICBwcml2YXRlIHJlYWRvbmx5IE1FTlVfSU5GT19LRVkgPSAnZGV0YWlsJztcclxuICBwcml2YXRlIHJlYWRvbmx5IE1FTlVfUEFSRU5UX0FSUkFZX0tFWSA9ICdwYXJlbnRBcnJheSc7XHJcblxyXG4gIGdldE1lbnVNYXBPbklkKHJvb3RNYXA6IG9iamVjdCwgYXJyYXlPYmplY3Q6IGFueVtdKSB7XHJcbiAgICBpZiAoYXJyYXlPYmplY3QpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheU9iamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhcnJheU9iamVjdFtpXVt0aGlzLk1FTlVfSURfS0VZXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHJvb3RNYXBbYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0lEX0tFWV1dID0gYXJyYXlPYmplY3RbaV07XHJcbiAgICAgICAgICB0aGlzLmdldE1lbnVNYXBPbklkKHJvb3RNYXAsIGFycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9BUlJBWV9LRVldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNpbXBsZU1lbnVNYXBPbklkKHJvb3RNYXA6IG9iamVjdCwgYXJyYXlPYmplY3Q6IGFueVtdLCBwYXJlbnRLZXk/OiBzdHJpbmcpIHtcclxuICAgIGlmIChhcnJheU9iamVjdCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2JqZWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9JRF9LRVldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGNvbnN0IG1lbnVBcnJheSA9IFtdO1xyXG4gICAgICAgICAgaWYgKHBhcmVudEtleSAhPT0gdW5kZWZpbmVkICYmIHJvb3RNYXBbcGFyZW50S2V5XVt0aGlzLk1FTlVfUEFSRU5UX0FSUkFZX0tFWV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByb290TWFwW3BhcmVudEtleV1bdGhpcy5NRU5VX1BBUkVOVF9BUlJBWV9LRVldLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICBtZW51QXJyYXkucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IHRlbXBPYmogPSB7XHJcbiAgICAgICAgICAgIGlkOiBhcnJheU9iamVjdFtpXVt0aGlzLk1FTlVfSURfS0VZXSwgbmFtZTogYXJyYXlPYmplY3RbaV0ubmFtZSwgdXJsOiBhcnJheU9iamVjdFtpXS51cmwsXHJcbiAgICAgICAgICAgIGxlbjogYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0FSUkFZX0tFWV0ubGVuZ3RoLCBzaG93QnJlYWRjcnVtOiBhcnJheU9iamVjdFtpXS5zaG93QnJlYWRjcnVtXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgbWVudUFycmF5LnB1c2godGVtcE9iaik7XHJcblxyXG4gICAgICAgICAgcm9vdE1hcFthcnJheU9iamVjdFtpXVt0aGlzLk1FTlVfSURfS0VZXV0gPSB7fTtcclxuICAgICAgICAgIC8vICByb290TWFwW2FycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9JRF9LRVldXSA9IG1lbnVBcnJheTtcclxuICAgICAgICAgIHJvb3RNYXBbYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0lEX0tFWV1dW3RoaXMuTUVOVV9JTkZPX0tFWV0gPSB0ZW1wT2JqO1xyXG4gICAgICAgICAgcm9vdE1hcFthcnJheU9iamVjdFtpXVt0aGlzLk1FTlVfSURfS0VZXV1bdGhpcy5NRU5VX1BBUkVOVF9BUlJBWV9LRVldID0gbWVudUFycmF5O1xyXG5cclxuICAgICAgICAgIHRoaXMuc2ltcGxlTWVudU1hcE9uSWQocm9vdE1hcCwgYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0FSUkFZX0tFWV0sIGFycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9JRF9LRVldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE1lbnVEYXRhKG1lbnVJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGbk1lbnVJdGVtU3RhdGU+KCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vVmFzaW1IYXlhdC9tb2NrX2RhdGEvbWFzdGVyL21lbnUuanNvbicpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc3RyaW5nLWxpdGVyYWxcclxuICAgICAgICBtYXAoKG1lbnVEYXRhOiBhbnkpID0+IG1lbnVEYXRhLm1lbnVEYXRhSGFzaC5tZW51RGF0YSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aHJvd0Vycm9yKGVycm9yKSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG5cclxuICAvLyBnZXRNZW51RGF0YShtZW51SWQ6IHN0cmluZykge1xyXG4gIC8vICAgICBjb25zdCByZXR1cm5PYnMgPSBuZXcgU3ViamVjdCgpO1xyXG4gIC8vICAgICB0aGlzLmh0dHAuZ2V0KCdkdW1teS5tZW51Lmpzb24nKS5zdWJzY3JpYmUoXHJcbiAgLy8gICAgICAgICAocmVzcDogRm5NZW51SXRlbVN0YXRlKSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgcmV0dXJuT2JzLm5leHQocmVzcCk7XHJcbiAgLy8gICAgICAgICAgICAgcmV0dXJuT2JzLmNvbXBsZXRlKCk7XHJcbiAgLy8gICAgICAgICB9LFxyXG4gIC8vICAgICAgICAgZXJyb3IgPT4ge1xyXG4gIC8vICAgICAgICAgICAgIHJldHVybk9icy5lcnJvcihlcnJvcik7XHJcbiAgLy8gICAgICAgICAgICAgcmV0dXJuT2JzLmNvbXBsZXRlKCk7XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICk7XHJcblxyXG5cclxuICAvLyB9XHJcbn1cclxuIl19