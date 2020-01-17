/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Theme Service
 * Service to manage theme globally
 */
import { Injectable } from '@angular/core';
export class FnThemeService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdGhlbWUtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZm4tdGhlbWUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHekMsTUFBTSxPQUFPLGNBQWM7SUFDekI7SUFDQSxDQUFDOzs7Ozs7SUFNTSxRQUFRLENBQUMsWUFBb0I7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDcEMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3RFLENBQUM7SUFDSixDQUFDOzs7WUFiRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGVtZSBTZXJ2aWNlXG4gKiBTZXJ2aWNlIHRvIG1hbmFnZSB0aGVtZSBnbG9iYWxseVxuICovXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm5UaGVtZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSBQcm92aWRlZCBUaGVtZSBQYWxsZXRlXG4gICAqIEBwYXJhbSB0aGVtZVBhbGxldGUgdGhlbWUgdmFyaWFibGVzIHRvIGJlIHJlcGxhY2VkLlxuICAgKi9cbiAgcHVibGljIHNldFRoZW1lKHRoZW1lUGFsbGV0ZTogb2JqZWN0KSB7XG4gICAgT2JqZWN0LmtleXModGhlbWVQYWxsZXRlKS5mb3JFYWNoKGsgPT5cbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke2t9YCwgdGhlbWVQYWxsZXRlW2tdKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==