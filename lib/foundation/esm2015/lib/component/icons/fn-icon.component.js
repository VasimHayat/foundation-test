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
                template: " <fa-icon [icon]=\"icon\" [style]=\"style\" [size]=\"size\" [animation]=\"animation\" [color]=\"color\" [align]=\"align\"\n   *ngIf=\"lib === 'fa'\"></fa-icon>\n <div hidden #content>\n   <ng-content></ng-content>\n </div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9pY29ucy9mbi1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQVF2QixNQUFNLE9BQU8sZUFBZTs7OztJQXFCMUIsWUFBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7O1FBaEJwQyxRQUFHLEdBQUcsSUFBSSxDQUFDO0lBZ0I2QixDQUFDOzs7O0lBRWxELGVBQWU7UUFDYixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTtZQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztZQUVqRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRWxDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNqQjtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7O0lBRUQsVUFBVTs7Y0FDRixLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3BDLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxRQUFROztZQUNGLFNBQWlCOztZQUNqQixXQUFtQjtRQUV2QixJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ3JCLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDZCxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEM7UUFFRCxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFFO1lBQ3RCLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUM7U0FDN0Q7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYSxFQUFFLE1BQWM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFN0MsUUFBUSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2hCLEtBQUssSUFBSTtnQkFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQixNQUFNO1lBQ1IsS0FBSyxJQUFJOztzQkFDRCxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDeEIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNO1NBQ1Q7SUFDSCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBdkZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsNE9BQXVDO2dCQUV2QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFkQyxpQkFBaUI7OzttQkFpQmhCLEtBQUs7a0JBR0wsS0FBSztvQkFFTCxLQUFLO21CQUVMLEtBQUs7d0JBRUwsS0FBSztvQkFFTCxLQUFLO29CQUVMLEtBQUs7c0JBRUwsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBRXJDLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBakJ4QywrQkFBc0I7O0lBR3RCLDhCQUFvQjs7SUFFcEIsZ0NBQXVCOztJQUV2QiwrQkFBc0I7O0lBRXRCLG9DQUEyQjs7SUFFM0IsZ0NBQXVCOztJQUV2QixnQ0FBdUI7O0lBRXZCLGtDQUFpRTs7SUFFakUsbUNBQXFFOzs7OztJQUV6RCxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm4taWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mbi1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm4taWNvbi5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZuSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWluZmVycmFibGUtdHlwZXNcbiAgQElucHV0KCkgbGliID0gJ2ZhJztcblxuICBASW5wdXQoKSBzdHlsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcblxuICBASW5wdXQoKSBhbmltYXRpb246IHN0cmluZztcblxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGFsaWduOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnY29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGNvbnRlbnQ6IEVsZW1lbnRSZWY8YW55PjtcblxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZTogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNvbnRlbnRJY29uQ29kZSgpO1xuICB9XG5cbiAgY29udGVudEljb25Db2RlKCkge1xuICAgIGlmICh0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC5pbm5lclRleHQpIHtcbiAgICAgIHRoaXMuaWNvbiA9IHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50LmlubmVyVGV4dDtcblxuICAgICAgaWYgKHRoaXMuaXNGdWxsQ29kZSgpKSB7XG4gICAgICAgIHRoaXMubGliID0gdGhpcy5pY29uLnN1YnN0cigwLCAyKTtcblxuICAgICAgICB0aGlzLmdldFN0eWxlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgaXNGdWxsQ29kZSgpIHtcbiAgICBjb25zdCBzcGFjZSA9IHRoaXMuaWNvbi5pbmRleE9mKCcgJyk7XG4gICAgcmV0dXJuIHNwYWNlICE9PSAtMTtcbiAgfVxuXG4gIGdldFN0eWxlKCkge1xuICAgIGxldCBmaXN0U3BsaXQ6IG51bWJlcjtcbiAgICBsZXQgc2Vjb25kU3BsaXQ6IG51bWJlcjtcblxuICAgIGlmICh0aGlzLmxpYiA9PT0gJ2ZhJykge1xuICAgICAgZmlzdFNwbGl0ID0gMDtcbiAgICAgIHNlY29uZFNwbGl0ID0gdGhpcy5pY29uLmluZGV4T2YoJyAnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5saWIgPT09ICdpb24nKSB7XG4gICAgICBmaXN0U3BsaXQgPSB0aGlzLmljb24uaW5kZXhPZignLScpICsgMTtcbiAgICAgIHNlY29uZFNwbGl0ID0gdGhpcy5pY29uLmluZGV4T2YoJy0nLCBmaXN0U3BsaXQpIC0gZmlzdFNwbGl0O1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3R5bGUoZmlzdFNwbGl0LCBzZWNvbmRTcGxpdCk7XG4gIH1cblxuICBzZXRTdHlsZShzdGFydDogbnVtYmVyLCBsZW5ndGg6IG51bWJlcikge1xuICAgIHRoaXMuc3R5bGUgPSB0aGlzLmljb24uc3Vic3RyKHN0YXJ0LCBsZW5ndGgpO1xuXG4gICAgc3dpdGNoICh0aGlzLmxpYikge1xuICAgICAgY2FzZSAnZHgnOlxuICAgICAgICB0aGlzLnNldEljb24oMTYpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ZhJzpcbiAgICAgICAgY29uc3QgZmlzdFNwbGl0ID0gdGhpcy5pY29uLmluZGV4T2YoJy0nKSArIDE7XG4gICAgICAgIHRoaXMuc2V0SWNvbihmaXN0U3BsaXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ290aGVyJzpcbiAgICAgICAgdGhpcy5zZXRJY29uKChzdGFydCArIGxlbmd0aCkgKyAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc2V0SWNvbihzdGFydDogbnVtYmVyKSB7XG4gICAgdGhpcy5pY29uID0gdGhpcy5pY29uLnN1YnN0cihzdGFydCk7XG4gIH1cblxufVxuIl19