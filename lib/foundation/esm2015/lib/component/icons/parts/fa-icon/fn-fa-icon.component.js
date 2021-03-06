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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tZmEtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9pY29ucy9wYXJ0cy9mYS1pY29uL2ZuLWZhLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFHTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFRdkIsTUFBTSxPQUFPLGlCQUFpQjtJQWtCNUI7UUFaUyxTQUFJLEdBQUcsTUFBTSxDQUFDO1FBVXZCLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFHZixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLFdBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNwQjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0UsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7WUE1Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0Qiw4RkFBMEM7Z0JBRTFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7Ozs7bUJBR0UsS0FBSztvQkFFTCxLQUFLO21CQUVMLEtBQUs7d0JBRUwsS0FBSztvQkFFTCxLQUFLO29CQUVMLEtBQUs7Ozs7SUFWTixpQ0FBc0I7O0lBRXRCLGtDQUF1Qjs7SUFFdkIsaUNBQXVCOztJQUV2QixzQ0FBMkI7O0lBRTNCLGtDQUF1Qjs7SUFFdkIsa0NBQXVCOztJQUV2QixtQ0FBc0I7O0lBRXRCLG1DQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmbi1mYS1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZuLWZhLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mbi1mYS1pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRm5GYUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHN0eWxlOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc2l6ZSA9ICcxMXB4JztcblxuICBASW5wdXQoKSBhbmltYXRpb246IHN0cmluZztcblxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGFsaWduOiBzdHJpbmc7XG5cbiAgcHVibGljIGZvcm1hdDogc3RyaW5nO1xuXG4gIFBSRUZJWCA9ICdmYS0nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3JtYXRDbGFzcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRDbGFzcygpIHtcbiAgICBpZiAodGhpcy5zdHlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN0eWxlID0gJ2Zhcyc7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtYXQgPSB0aGlzLnN0eWxlICsgJyAnO1xuICAgIHRoaXMuZm9ybWF0ICs9IHRoaXMuUFJFRklYICsgdGhpcy5pY29uO1xuICAgIHRoaXMuZm9ybWF0ICs9ICh0aGlzLmFuaW1hdGlvbikgPyAnIGFuaW0tJyArIHRoaXMuYW5pbWF0aW9uICsgJyBhbmltYXRlZCcgOiAnJztcbiAgICB0aGlzLmZvcm1hdCArPSAodGhpcy5hbGlnbikgPyAnIHB1bGwtJyArIHRoaXMuYWxpZ24gOiAnJztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuZm9ybWF0Q2xhc3MoKTtcbiAgfVxuXG59XG4iXX0=