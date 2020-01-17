/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
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
        { type: Injectable }
    ];
    /** @nocollapse */
    FnMenuStoreService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tbWVudS5zdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvbWVudS9mbi1zdG9yZXMvc2VydmljZS9mbi1tZW51LnN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUF1QixVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQ7SUFFRSw0QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUduQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixtQkFBYyxHQUFHLGVBQWUsQ0FBQztRQUNqQyxrQkFBYSxHQUFHLFFBQVEsQ0FBQztRQUN6QiwwQkFBcUIsR0FBRyxhQUFhLENBQUM7SUFMdkQsQ0FBQzs7Ozs7O0lBT0QsMkNBQWM7Ozs7O0lBQWQsVUFBZSxPQUFlLEVBQUUsV0FBa0I7UUFDaEQsSUFBSSxXQUFXLEVBQUU7WUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0MsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLFdBQVcsRUFBRTtvQkFDcEQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENB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ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBGbk1lbnVJdGVtU3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvZm4tbWVudS5zdGF0ZSc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZuTWVudVN0b3JlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IE1FTlVfSURfS0VZID0gJ2lkJztcclxuICBwcml2YXRlIHJlYWRvbmx5IE1FTlVfQVJSQVlfS0VZID0gJ21lbnVJdGVtQXJyYXknO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgTUVOVV9JTkZPX0tFWSA9ICdkZXRhaWwnO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgTUVOVV9QQVJFTlRfQVJSQVlfS0VZID0gJ3BhcmVudEFycmF5JztcclxuXHJcbiAgZ2V0TWVudU1hcE9uSWQocm9vdE1hcDogb2JqZWN0LCBhcnJheU9iamVjdDogYW55W10pIHtcclxuICAgIGlmIChhcnJheU9iamVjdCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5T2JqZWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9JRF9LRVldICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgcm9vdE1hcFthcnJheU9iamVjdFtpXVt0aGlzLk1FTlVfSURfS0VZXV0gPSBhcnJheU9iamVjdFtpXTtcclxuICAgICAgICAgIHRoaXMuZ2V0TWVudU1hcE9uSWQocm9vdE1hcCwgYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0FSUkFZX0tFWV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2ltcGxlTWVudU1hcE9uSWQocm9vdE1hcDogb2JqZWN0LCBhcnJheU9iamVjdDogYW55W10sIHBhcmVudEtleT86IHN0cmluZykge1xyXG4gICAgaWYgKGFycmF5T2JqZWN0KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0lEX0tFWV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgY29uc3QgbWVudUFycmF5ID0gW107XHJcbiAgICAgICAgICBpZiAocGFyZW50S2V5ICE9PSB1bmRlZmluZWQgJiYgcm9vdE1hcFtwYXJlbnRLZXldW3RoaXMuTUVOVV9QQVJFTlRfQVJSQVlfS0VZXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJvb3RNYXBbcGFyZW50S2V5XVt0aGlzLk1FTlVfUEFSRU5UX0FSUkFZX0tFWV0uZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIG1lbnVBcnJheS5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgdGVtcE9iaiA9IHtcclxuICAgICAgICAgICAgaWQ6IGFycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9JRF9LRVldLCBuYW1lOiBhcnJheU9iamVjdFtpXS5uYW1lLCB1cmw6IGFycmF5T2JqZWN0W2ldLnVybCxcclxuICAgICAgICAgICAgbGVuOiBhcnJheU9iamVjdFtpXVt0aGlzLk1FTlVfQVJSQVlfS0VZXS5sZW5ndGgsIHNob3dCcmVhZGNydW06IGFycmF5T2JqZWN0W2ldLnNob3dCcmVhZGNydW1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBtZW51QXJyYXkucHVzaCh0ZW1wT2JqKTtcclxuXHJcbiAgICAgICAgICByb290TWFwW2FycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9JRF9LRVldXSA9IHt9O1xyXG4gICAgICAgICAgLy8gIHJvb3RNYXBbYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0lEX0tFWV1dID0gbWVudUFycmF5O1xyXG4gICAgICAgICAgcm9vdE1hcFthcnJheU9iamVjdFtpXVt0aGlzLk1FTlVfSURfS0VZXV1bdGhpcy5NRU5VX0lORk9fS0VZXSA9IHRlbXBPYmo7XHJcbiAgICAgICAgICByb290TWFwW2FycmF5T2JqZWN0W2ldW3RoaXMuTUVOVV9JRF9LRVldXVt0aGlzLk1FTlVfUEFSRU5UX0FSUkFZX0tFWV0gPSBtZW51QXJyYXk7XHJcblxyXG4gICAgICAgICAgdGhpcy5zaW1wbGVNZW51TWFwT25JZChyb290TWFwLCBhcnJheU9iamVjdFtpXVt0aGlzLk1FTlVfQVJSQVlfS0VZXSwgYXJyYXlPYmplY3RbaV1bdGhpcy5NRU5VX0lEX0tFWV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TWVudURhdGEobWVudUlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZuTWVudUl0ZW1TdGF0ZT4oJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9WYXNpbUhheWF0L21vY2tfZGF0YS9tYXN0ZXIvbWVudS5qc29uJylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zdHJpbmctbGl0ZXJhbFxyXG4gICAgICAgIG1hcCgobWVudURhdGE6IGFueSkgPT4gbWVudURhdGEubWVudURhdGFIYXNoLm1lbnVEYXRhKSxcclxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRocm93RXJyb3IoZXJyb3IpKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIGdldE1lbnVEYXRhKG1lbnVJZDogc3RyaW5nKSB7XHJcbiAgLy8gICAgIGNvbnN0IHJldHVybk9icyA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgLy8gICAgIHRoaXMuaHR0cC5nZXQoJ2R1bW15Lm1lbnUuanNvbicpLnN1YnNjcmliZShcclxuICAvLyAgICAgICAgIChyZXNwOiBGbk1lbnVJdGVtU3RhdGUpID0+IHtcclxuICAvLyAgICAgICAgICAgICByZXR1cm5PYnMubmV4dChyZXNwKTtcclxuICAvLyAgICAgICAgICAgICByZXR1cm5PYnMuY29tcGxldGUoKTtcclxuICAvLyAgICAgICAgIH0sXHJcbiAgLy8gICAgICAgICBlcnJvciA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgcmV0dXJuT2JzLmVycm9yKGVycm9yKTtcclxuICAvLyAgICAgICAgICAgICByZXR1cm5PYnMuY29tcGxldGUoKTtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgKTtcclxuXHJcblxyXG4gIC8vIH1cclxufVxyXG4iXX0=