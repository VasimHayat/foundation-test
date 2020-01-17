/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
export class FnIconComponent {
    /**
     * @param {?} change
     */
    constructor(change) {
        this.change = change;
        // tslint:disable-next-line: no-inferrable-types
        this.lib = 'fa';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.contentIconCode();
    }
    /**
     * @return {?}
     */
    contentIconCode() {
        if (this.content.nativeElement.innerText) {
            this.icon = this.content.nativeElement.innerText;
            if (this.isFullCode()) {
                this.lib = this.icon.substr(0, 2);
                this.getStyle();
            }
            this.change.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    isFullCode() {
        /** @type {?} */
        const space = this.icon.indexOf(' ');
        return space !== -1;
    }
    /**
     * @return {?}
     */
    getStyle() {
        /** @type {?} */
        let fistSplit;
        /** @type {?} */
        let secondSplit;
        if (this.lib === 'fa') {
            fistSplit = 0;
            secondSplit = this.icon.indexOf(' ');
        }
        if (this.lib === 'ion') {
            fistSplit = this.icon.indexOf('-') + 1;
            secondSplit = this.icon.indexOf('-', fistSplit) - fistSplit;
        }
        this.setStyle(fistSplit, secondSplit);
    }
    /**
     * @param {?} start
     * @param {?} length
     * @return {?}
     */
    setStyle(start, length) {
        this.style = this.icon.substr(start, length);
        switch (this.lib) {
            case 'dx':
                this.setIcon(16);
                break;
            case 'fa':
                /** @type {?} */
                const fistSplit = this.icon.indexOf('-') + 1;
                this.setIcon(fistSplit);
                break;
            case 'other':
                this.setIcon((start + length) + 1);
                break;
        }
    }
    /**
     * @param {?} start
     * @return {?}
     */
    setIcon(start) {
        this.icon = this.icon.substr(start);
    }
}
FnIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-icon',
                template: " <fa-icon [icon]=\"icon\" [style]=\"style\" [size]=\"size\" [animation]=\"animation\" [color]=\"color\" [align]=\"align\"\n   *ngIf=\"lib === 'fa'\"></fa-icon>\n <div  #content>\n   <ng-content></ng-content>\n </div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
FnIconComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
FnIconComponent.propDecorators = {
    icon: [{ type: Input }],
    lib: [{ type: Input }],
    style: [{ type: Input }],
    size: [{ type: Input }],
    animation: [{ type: Input }],
    color: [{ type: Input }],
    align: [{ type: Input }],
    content: [{ type: ViewChild, args: ['content', { static: true },] }],
    template: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
};
if (false) {
    /** @type {?} */
    FnIconComponent.prototype.icon;
    /** @type {?} */
    FnIconComponent.prototype.lib;
    /** @type {?} */
    FnIconComponent.prototype.style;
    /** @type {?} */
    FnIconComponent.prototype.size;
    /** @type {?} */
    FnIconComponent.prototype.animation;
    /** @type {?} */
    FnIconComponent.prototype.color;
    /** @type {?} */
    FnIconComponent.prototype.align;
    /** @type {?} */
    FnIconComponent.prototype.content;
    /** @type {?} */
    FnIconComponent.prototype.template;
    /**
     * @type {?}
     * @private
     */
    FnIconComponent.prototype.change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9pY29ucy9mbi1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQVF2QixNQUFNLE9BQU8sZUFBZTs7OztJQXFCMUIsWUFBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7O1FBaEJwQyxRQUFHLEdBQUcsSUFBSSxDQUFDO0lBaUJwQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1lBRWpELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFbEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2pCO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7SUFFRCxVQUFVOztjQUNGLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDcEMsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFFBQVE7O1lBQ0YsU0FBaUI7O1lBQ2pCLFdBQW1CO1FBRXZCLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDckIsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNkLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QztRQUVELElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7WUFDdEIsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUM3RDtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUFhLEVBQUUsTUFBYztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU3QyxRQUFRLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDaEIsS0FBSyxJQUFJO2dCQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07WUFDUixLQUFLLElBQUk7O3NCQUNELFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN4QixNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU07U0FDVDtJQUNILENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUF4RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixzT0FBdUM7Z0JBRXZDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQWRDLGlCQUFpQjs7O21CQWlCaEIsS0FBSztrQkFHTCxLQUFLO29CQUVMLEtBQUs7bUJBRUwsS0FBSzt3QkFFTCxLQUFLO29CQUVMLEtBQUs7b0JBRUwsS0FBSztzQkFFTCxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzt1QkFFbkMsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7Ozs7SUFqQnRDLCtCQUFzQjs7SUFHdEIsOEJBQW9COztJQUVwQixnQ0FBdUI7O0lBRXZCLCtCQUFzQjs7SUFFdEIsb0NBQTJCOztJQUUzQixnQ0FBdUI7O0lBRXZCLGdDQUF1Qjs7SUFFdkIsa0NBQStEOztJQUUvRCxtQ0FBbUU7Ozs7O0lBRXZELGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm4taWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mbi1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm4taWNvbi5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZuSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWluZmVycmFibGUtdHlwZXNcbiAgQElucHV0KCkgbGliID0gJ2ZhJztcblxuICBASW5wdXQoKSBzdHlsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcblxuICBASW5wdXQoKSBhbmltYXRpb246IHN0cmluZztcblxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGFsaWduOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnY29udGVudCcsIHtzdGF0aWM6IHRydWV9KSBjb250ZW50OiBFbGVtZW50UmVmPGFueT47XG5cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwge3N0YXRpYzogdHJ1ZX0pIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY29udGVudEljb25Db2RlKCk7XG4gIH1cblxuICBjb250ZW50SWNvbkNvZGUoKSB7XG4gICAgaWYgKHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50LmlubmVyVGV4dCkge1xuICAgICAgdGhpcy5pY29uID0gdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0O1xuXG4gICAgICBpZiAodGhpcy5pc0Z1bGxDb2RlKCkpIHtcbiAgICAgICAgdGhpcy5saWIgPSB0aGlzLmljb24uc3Vic3RyKDAsIDIpO1xuXG4gICAgICAgIHRoaXMuZ2V0U3R5bGUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBpc0Z1bGxDb2RlKCkge1xuICAgIGNvbnN0IHNwYWNlID0gdGhpcy5pY29uLmluZGV4T2YoJyAnKTtcbiAgICByZXR1cm4gc3BhY2UgIT09IC0xO1xuICB9XG5cbiAgZ2V0U3R5bGUoKSB7XG4gICAgbGV0IGZpc3RTcGxpdDogbnVtYmVyO1xuICAgIGxldCBzZWNvbmRTcGxpdDogbnVtYmVyO1xuXG4gICAgaWYgKHRoaXMubGliID09PSAnZmEnKSB7XG4gICAgICBmaXN0U3BsaXQgPSAwO1xuICAgICAgc2Vjb25kU3BsaXQgPSB0aGlzLmljb24uaW5kZXhPZignICcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxpYiA9PT0gJ2lvbicpIHtcbiAgICAgIGZpc3RTcGxpdCA9IHRoaXMuaWNvbi5pbmRleE9mKCctJykgKyAxO1xuICAgICAgc2Vjb25kU3BsaXQgPSB0aGlzLmljb24uaW5kZXhPZignLScsIGZpc3RTcGxpdCkgLSBmaXN0U3BsaXQ7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdHlsZShmaXN0U3BsaXQsIHNlY29uZFNwbGl0KTtcbiAgfVxuXG4gIHNldFN0eWxlKHN0YXJ0OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdHlsZSA9IHRoaXMuaWNvbi5zdWJzdHIoc3RhcnQsIGxlbmd0aCk7XG5cbiAgICBzd2l0Y2ggKHRoaXMubGliKSB7XG4gICAgICBjYXNlICdkeCc6XG4gICAgICAgIHRoaXMuc2V0SWNvbigxNik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmEnOlxuICAgICAgICBjb25zdCBmaXN0U3BsaXQgPSB0aGlzLmljb24uaW5kZXhPZignLScpICsgMTtcbiAgICAgICAgdGhpcy5zZXRJY29uKGZpc3RTcGxpdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb3RoZXInOlxuICAgICAgICB0aGlzLnNldEljb24oKHN0YXJ0ICsgbGVuZ3RoKSArIDEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzZXRJY29uKHN0YXJ0OiBudW1iZXIpIHtcbiAgICB0aGlzLmljb24gPSB0aGlzLmljb24uc3Vic3RyKHN0YXJ0KTtcbiAgfVxuXG59XG4iXX0=