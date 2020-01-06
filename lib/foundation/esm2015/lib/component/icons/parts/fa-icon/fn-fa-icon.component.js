/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
export class FnFaIconComponent {
    constructor() {
        this.size = '11px';
        this.PREFIX = 'fa-';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formatClass();
    }
    /**
     * @private
     * @return {?}
     */
    formatClass() {
        if (this.style === undefined) {
            this.style = 'fas';
        }
        this.format = this.style + ' ';
        this.format += this.PREFIX + this.icon;
        this.format += (this.animation) ? ' anim-' + this.animation + ' animated' : '';
        this.format += (this.align) ? ' pull-' + this.align : '';
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.formatClass();
    }
}
FnFaIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-fa-icon',
                template: "<i class=\"{{ format }}\" [ngStyle]=\"{'font-size': size, 'color': color}\"></i>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
FnFaIconComponent.ctorParameters = () => [];
FnFaIconComponent.propDecorators = {
    icon: [{ type: Input }],
    style: [{ type: Input }],
    size: [{ type: Input }],
    animation: [{ type: Input }],
    color: [{ type: Input }],
    align: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FnFaIconComponent.prototype.icon;
    /** @type {?} */
    FnFaIconComponent.prototype.style;
    /** @type {?} */
    FnFaIconComponent.prototype.size;
    /** @type {?} */
    FnFaIconComponent.prototype.animation;
    /** @type {?} */
    FnFaIconComponent.prototype.color;
    /** @type {?} */
    FnFaIconComponent.prototype.align;
    /** @type {?} */
    FnFaIconComponent.prototype.format;
    /** @type {?} */
    FnFaIconComponent.prototype.PREFIX;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tZmEtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9pY29ucy9wYXJ0cy9mYS1pY29uL2ZuLWZhLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFHTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFRdkIsTUFBTSxPQUFPLGlCQUFpQjtJQWtCNUI7UUFaUyxTQUFJLEdBQUcsTUFBTSxDQUFDO1FBVXZCLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFFQyxDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTyxXQUFXO1FBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQy9FLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsOEZBQTBDO2dCQUUxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7O21CQUdFLEtBQUs7b0JBRUwsS0FBSzttQkFFTCxLQUFLO3dCQUVMLEtBQUs7b0JBRUwsS0FBSztvQkFFTCxLQUFLOzs7O0lBVk4saUNBQXNCOztJQUV0QixrQ0FBdUI7O0lBRXZCLGlDQUF1Qjs7SUFFdkIsc0NBQTJCOztJQUUzQixrQ0FBdUI7O0lBRXZCLGtDQUF1Qjs7SUFFdkIsbUNBQXNCOztJQUV0QixtQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm4tZmEtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mbi1mYS1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm4tZmEtaWNvbi5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZuRmFJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICBASW5wdXQoKSBzdHlsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNpemUgPSAnMTFweCc7XG5cbiAgQElucHV0KCkgYW5pbWF0aW9uOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcblxuICBASW5wdXQoKSBhbGlnbjogc3RyaW5nO1xuXG4gIHB1YmxpYyBmb3JtYXQ6IHN0cmluZztcblxuICBQUkVGSVggPSAnZmEtJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybWF0Q2xhc3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0Q2xhc3MoKSB7XG4gICAgaWYgKHRoaXMuc3R5bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zdHlsZSA9ICdmYXMnO1xuICAgIH1cblxuICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5zdHlsZSArICcgJztcbiAgICB0aGlzLmZvcm1hdCArPSB0aGlzLlBSRUZJWCArIHRoaXMuaWNvbjtcbiAgICB0aGlzLmZvcm1hdCArPSAodGhpcy5hbmltYXRpb24pID8gJyBhbmltLScgKyB0aGlzLmFuaW1hdGlvbiArICcgYW5pbWF0ZWQnIDogJyc7XG4gICAgdGhpcy5mb3JtYXQgKz0gKHRoaXMuYWxpZ24pID8gJyBwdWxsLScgKyB0aGlzLmFsaWduIDogJyc7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmZvcm1hdENsYXNzKCk7XG4gIH1cblxufVxuIl19