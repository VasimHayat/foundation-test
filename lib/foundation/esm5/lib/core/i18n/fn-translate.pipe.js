/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe, Renderer2 } from '@angular/core';
import { FnI18nService } from './fn-i18.service';
var FnTranslatePipe = /** @class */ (function () {
    function FnTranslatePipe(i18n, render) {
        this.i18n = i18n;
        this.render = render;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    FnTranslatePipe.prototype.transform = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var _span = this.render.createElement('span');
        this.render.setProperty(_span, 'innerHTML', this.i18n.translate(key));
        return _span.textContent;
    };
    FnTranslatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'fnTranslate'
                },] }
    ];
    /** @nocollapse */
    FnTranslatePipe.ctorParameters = function () { return [
        { type: FnI18nService },
        { type: Renderer2 }
    ]; };
    return FnTranslatePipe;
}());
export { FnTranslatePipe };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaTE4bi9mbi10cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRDtJQUtJLHlCQUFvQixJQUFtQixFQUFVLE1BQWlCO1FBQTlDLFNBQUksR0FBSixJQUFJLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQzs7Ozs7SUFFdEUsbUNBQVM7Ozs7SUFBVCxVQUFVLEdBQVc7O1lBQ1gsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEUsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQzdCLENBQUM7O2dCQVhKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsYUFBYTtpQkFDdEI7Ozs7Z0JBSlEsYUFBYTtnQkFEUSxTQUFTOztJQWV2QyxzQkFBQztDQUFBLEFBWkQsSUFZQztTQVRZLGVBQWU7Ozs7OztJQUVaLCtCQUEyQjs7Ozs7SUFBRSxpQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm5JMThuU2VydmljZSB9IGZyb20gJy4vZm4taTE4LnNlcnZpY2UnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2ZuVHJhbnNsYXRlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5UcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBGbkkxOG5TZXJ2aWNlLCBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyKSB7fVxyXG5cclxuICAgIHRyYW5zZm9ybShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IF9zcGFuID0gdGhpcy5yZW5kZXIuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyLnNldFByb3BlcnR5KF9zcGFuLCAnaW5uZXJIVE1MJywgdGhpcy5pMThuLnRyYW5zbGF0ZShrZXkpKTtcclxuICAgICAgICByZXR1cm4gX3NwYW4udGV4dENvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19