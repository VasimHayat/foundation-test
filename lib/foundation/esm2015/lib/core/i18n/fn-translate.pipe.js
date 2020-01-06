/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe, Renderer2 } from '@angular/core';
import { FnI18nService } from './fn-i18.service';
export class FnTranslatePipe {
    /**
     * @param {?} i18n
     * @param {?} render
     */
    constructor(i18n, render) {
        this.i18n = i18n;
        this.render = render;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    transform(key) {
        /** @type {?} */
        const _span = this.render.createElement('span');
        this.render.setProperty(_span, 'innerHTML', this.i18n.translate(key));
        return _span.textContent;
    }
}
FnTranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'fnTranslate'
            },] }
];
/** @nocollapse */
FnTranslatePipe.ctorParameters = () => [
    { type: FnI18nService },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaTE4bi9mbi10cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUtqRCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFFeEIsWUFBb0IsSUFBbUIsRUFBVSxNQUFpQjtRQUE5QyxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7Ozs7O0lBRXRFLFNBQVMsQ0FBQyxHQUFXOztjQUNYLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUM3QixDQUFDOzs7WUFYSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLGFBQWE7YUFDdEI7Ozs7WUFKUSxhQUFhO1lBRFEsU0FBUzs7Ozs7OztJQVF2QiwrQkFBMkI7Ozs7O0lBQUUsaUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZuSTE4blNlcnZpY2UgfSBmcm9tICcuL2ZuLWkxOC5zZXJ2aWNlJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdmblRyYW5zbGF0ZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZuVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogRm5JMThuU2VydmljZSwgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMikge31cclxuXHJcbiAgICB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBfc3BhbiA9IHRoaXMucmVuZGVyLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB0aGlzLnJlbmRlci5zZXRQcm9wZXJ0eShfc3BhbiwgJ2lubmVySFRNTCcsIHRoaXMuaTE4bi50cmFuc2xhdGUoa2V5KSk7XHJcbiAgICAgICAgcmV0dXJuIF9zcGFuLnRleHRDb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==