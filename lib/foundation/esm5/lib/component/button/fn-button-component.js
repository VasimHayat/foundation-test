/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, TemplateRef, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { ContentObserver } from '@angular/cdk/observers';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
var FnButtonComponent = /** @class */ (function () {
    function FnButtonComponent(elementRef, cdr, contentObserver) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.contentObserver = contentObserver;
        this.id = '';
        this.type = 'default';
        this.shape = null;
        this.text = '';
        this.iconAddonBefore = '';
        this.iconAddonAfter = '';
        this.height = 'auto';
        this.width = 'auto';
        this.disabled = null;
        this.flatBorder = false;
        this.outline = false;
        this.isLoading = false;
        this.indexShortcut = 0;
        this.destroy$ = new Subject();
    }
    Object.defineProperty(FnButtonComponent.prototype, "textLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._textLoading;
        },
        set: /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            this._textLoading = text;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FnButtonComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.contentObserver
            .observe(this.buttonElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this.checkContent(); }));
        }));
    };
    /**
     * @return {?}
     */
    FnButtonComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    // ngOnChanges(changes: SimpleChanges): void {
    // }
    // ngOnChanges(changes: SimpleChanges): void {
    // }
    /**
     * @return {?}
     */
    FnButtonComponent.prototype.checkContent = 
    // ngOnChanges(changes: SimpleChanges): void {
    // }
    /**
     * @return {?}
     */
    function () {
        if (!((/** @type {?} */ (this.cdr))).destroyed) {
            this.cdr.detectChanges();
        }
    };
    FnButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-button',
                    template: "<button #fnbutton [id]=\"id\" cdkTrapFocus attr.tabindex=\"-1\"\n  [ngStyle]=\"{'min-width': width, 'height': height, 'border-radius': flatBorder ? '0' : '3px', 'line-height': height }\"\n  [ngClass]=\"{'disabled ': disabled, 'outline': outline}\" [class]=\"'fn-button btn  btn-'+ type+' '+shape\"\n  [disabled]=\"( disabled || isLoading ) ? true : null\" attr.fnId=\"{{id}}\">\n  <ng-container *ngTemplateOutlet=\"template ? template : templateContent\"></ng-container>\n</button>\n<ng-template #templateContent>\n  <fn-icon *ngIf=\"iconAddonBefore\" [id]=\"'iconAddonBefore_'+id\" attr.fnId=\"{{id}}\" [class]=\"type + ' iconAddonBefore'\">\n    {{ iconAddonBefore }}\n  </fn-icon>\n  <div class=\"button-content\" [style.lineHeight]=\"height\" [id]=\"'button-content_'+id\" attr.fnId=\"{{id}}\">\n    <span class=\"label\" *ngIf=\"!isLoading\" attr.fnId=\"{{id}}\">{{ text }}</span>\n    <span class=\"label\" *ngIf=\"isLoading\" attr.fnId=\"{{id}}\">{{ textLoading }}</span>\n  </div>\n  <fn-icon *ngIf=\"iconAddonAfter\" attr.fnId=\"{{id}}\" [id]=\"'iconAddonAfter_'+id\" [class]=\"type + ' iconAddonAfter'\"\n    [ngStyle]=\"{'line-height': 'calc(' + height + ' - 1px)'}\">{{ iconAddonAfter }}\n  </fn-icon>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".fn-button{font-family:\"Segoe UI\",Lato,sans-serif,Arial;font-size:.9em;padding:0;margin:0;outline:0;cursor:pointer;box-sizing:border-box}.fn-button .iconAddonAfter,.fn-button .iconAddonBefore{box-sizing:border-box;padding:0 15px;pointer-events:none}.fn-button .button-content{display:flex;padding:.375rem .75rem;align-items:center;margin:auto;place-content:center;width:100%}fn-button .button-content .label{padding:0 10px}"]
                }] }
    ];
    /** @nocollapse */
    FnButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: ContentObserver }
    ]; };
    FnButtonComponent.propDecorators = {
        id: [{ type: Input }],
        type: [{ type: Input }],
        shape: [{ type: Input }],
        text: [{ type: Input }],
        iconAddonBefore: [{ type: Input }],
        iconAddonAfter: [{ type: Input }],
        height: [{ type: Input }],
        width: [{ type: Input }],
        disabled: [{ type: Input }],
        flatBorder: [{ type: Input }],
        template: [{ type: Input }],
        outline: [{ type: Input }],
        isLoading: [{ type: Input }],
        indexShortcut: [{ type: Input }],
        textLoading: [{ type: Input }],
        buttonElement: [{ type: ViewChild, args: ['fnbutton', { static: true },] }]
    };
    return FnButtonComponent;
}());
export { FnButtonComponent };
if (false) {
    /** @type {?} */
    FnButtonComponent.prototype.id;
    /** @type {?} */
    FnButtonComponent.prototype.type;
    /** @type {?} */
    FnButtonComponent.prototype.shape;
    /** @type {?} */
    FnButtonComponent.prototype.text;
    /** @type {?} */
    FnButtonComponent.prototype.iconAddonBefore;
    /** @type {?} */
    FnButtonComponent.prototype.iconAddonAfter;
    /** @type {?} */
    FnButtonComponent.prototype.height;
    /** @type {?} */
    FnButtonComponent.prototype.width;
    /** @type {?} */
    FnButtonComponent.prototype.disabled;
    /** @type {?} */
    FnButtonComponent.prototype.flatBorder;
    /** @type {?} */
    FnButtonComponent.prototype.template;
    /** @type {?} */
    FnButtonComponent.prototype.outline;
    /** @type {?} */
    FnButtonComponent.prototype.isLoading;
    /** @type {?} */
    FnButtonComponent.prototype.indexShortcut;
    /** @type {?} */
    FnButtonComponent.prototype.buttonElement;
    /**
     * @type {?}
     * @private
     */
    FnButtonComponent.prototype._textLoading;
    /**
     * @type {?}
     * @private
     */
    FnButtonComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    FnButtonComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FnButtonComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    FnButtonComponent.prototype.contentObserver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tYnV0dG9uLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2J1dHRvbi9mbi1idXR0b24tY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBSWpCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXREO0lBb0RFLDJCQUFvQixVQUFzQixFQUFVLEdBQXNCLEVBQVUsZUFBZ0M7UUFBaEcsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBM0MzRyxPQUFFLEdBQUcsRUFBRSxDQUFDO1FBRVIsU0FBSSxHQUFpQixTQUFTLENBQUM7UUFDL0IsVUFBSyxHQUFrQixJQUFJLENBQUM7UUFFNUIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVWLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBRXJCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXBCLFdBQU0sR0FBRyxNQUFNLENBQUM7UUFFaEIsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUVmLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFnQm5CLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBR2pDLENBQUM7SUFqQkQsc0JBQWEsMENBQVc7Ozs7UUFJeEI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7Ozs7UUFORCxVQUF5QixJQUFJO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUM7OztPQUFBOzs7O0lBaUJELDhDQUFrQjs7O0lBQWxCO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsZUFBZTthQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUMzQixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0EsU0FBUzs7O1FBQUM7WUFDVCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7O1lBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsRUFBQyxDQUFDO1FBQ3BELENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsOENBQThDO0lBRTlDLElBQUk7Ozs7OztJQUVKLHdDQUFZOzs7Ozs7SUFBWjtRQUNFLElBQUksQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxHQUFHLEVBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Z0JBaEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsMnRDQUF5QztvQkFFekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBekJDLFVBQVU7Z0JBS1YsaUJBQWlCO2dCQU1WLGVBQWU7OztxQkFpQnJCLEtBQUs7dUJBRUwsS0FBSzt3QkFDTCxLQUFLO3VCQUVMLEtBQUs7a0NBRUwsS0FBSztpQ0FFTCxLQUFLO3lCQUVMLEtBQUs7d0JBRUwsS0FBSzsyQkFFTCxLQUFLOzZCQUVMLEtBQUs7MkJBRUwsS0FBSzswQkFFTCxLQUFLOzRCQUVMLEtBQUs7Z0NBRUwsS0FBSzs4QkFFTCxLQUFLO2dDQVdMLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQXNDekMsd0JBQUM7Q0FBQSxBQXJGRCxJQXFGQztTQTlFWSxpQkFBaUI7OztJQUU1QiwrQkFBaUI7O0lBRWpCLGlDQUF3Qzs7SUFDeEMsa0NBQXFDOztJQUVyQyxpQ0FBbUI7O0lBRW5CLDRDQUE4Qjs7SUFFOUIsMkNBQTZCOztJQUU3QixtQ0FBeUI7O0lBRXpCLGtDQUF3Qjs7SUFFeEIscUNBQXlCOztJQUV6Qix1Q0FBNEI7O0lBRTVCLHFDQUFvQzs7SUFFcEMsb0NBQXlCOztJQUV6QixzQ0FBMkI7O0lBRTNCLDBDQUEyQjs7SUFhM0IsMENBQW1FOzs7OztJQUVuRSx5Q0FBNkI7Ozs7O0lBQzdCLHFDQUFpQzs7Ozs7SUFFckIsdUNBQThCOzs7OztJQUFFLGdDQUE4Qjs7Ozs7SUFBRSw0Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdSZWYsXG4gIE9uRGVzdHJveSxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250ZW50T2JzZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbmV4cG9ydCB0eXBlIEZuQnV0dG9uVHlwZSA9ICdwcmltYXJ5JyB8ICdzdWNjZXNzJyB8ICdkYW5nZXInIHwgJ2RlZmF1bHQnIHwgJ2xpbmsnO1xuZXhwb3J0IHR5cGUgRm5CdXR0b25TaGFwZSA9ICdjaXJjbGUnIHwgJ3JvdW5kJyB8IG51bGw7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZuLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mbi1idXR0b24tY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mbi1idXR0b24tY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRm5CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBJbnB1dCgpIGlkID0gJyc7XG5cbiAgQElucHV0KCkgdHlwZTogRm5CdXR0b25UeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBzaGFwZTogRm5CdXR0b25TaGFwZSA9IG51bGw7XG5cbiAgQElucHV0KCkgdGV4dCA9ICcnO1xuXG4gIEBJbnB1dCgpIGljb25BZGRvbkJlZm9yZSA9ICcnO1xuXG4gIEBJbnB1dCgpIGljb25BZGRvbkFmdGVyID0gJyc7XG5cbiAgQElucHV0KCkgaGVpZ2h0ID0gJ2F1dG8nO1xuXG4gIEBJbnB1dCgpIHdpZHRoID0gJ2F1dG8nO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gbnVsbDtcblxuICBASW5wdXQoKSBmbGF0Qm9yZGVyID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgb3V0bGluZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGlzTG9hZGluZyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGluZGV4U2hvcnRjdXQgPSAwO1xuXG4gIEBJbnB1dCgpIHNldCB0ZXh0TG9hZGluZyh0ZXh0KSB7XG4gICAgdGhpcy5fdGV4dExvYWRpbmcgPSB0ZXh0O1xuICB9XG5cbiAgZ2V0IHRleHRMb2FkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0TG9hZGluZztcbiAgfVxuXG5cbiAgLy8gQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZuYnV0dG9uJywgeyBzdGF0aWM6IHRydWUgfSkgYnV0dG9uRWxlbWVudDogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIF90ZXh0TG9hZGluZzogc3RyaW5nO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBjb250ZW50T2JzZXJ2ZXI6IENvbnRlbnRPYnNlcnZlcikge1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuY29udGVudE9ic2VydmVyXG4gICAgICAub2JzZXJ2ZSh0aGlzLmJ1dHRvbkVsZW1lbnQpXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2hlY2tDb250ZW50KCkpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvLyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cbiAgLy8gfVxuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICBpZiAoISh0aGlzLmNkciBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICAvLyBzZXRGb2N1cygpIHtcbiAgLy8gICB0aGlzLmJ1dHRvbkVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAvLyB9XG59XG5cbiJdfQ==