/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, TemplateRef, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { ContentObserver } from '@angular/cdk/observers';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
export class FnButtonComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} contentObserver
     */
    constructor(elementRef, cdr, contentObserver) {
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
    /**
     * @param {?} text
     * @return {?}
     */
    set textLoading(text) {
        this._textLoading = text;
    }
    /**
     * @return {?}
     */
    get textLoading() {
        return this._textLoading;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.contentObserver
            .observe(this.buttonElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.checkContent()));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @return {?}
     */
    checkContent() {
        if (!((/** @type {?} */ (this.cdr))).destroyed) {
            this.cdr.detectChanges();
        }
    }
}
FnButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'fn-button',
                template: "<!-- [ngStyle]=\"{'min-width': width, 'height': height, 'border-radius': flatBorder ? '0' : '3px', 'line-height': height }\" -->\n<button #fnbutton [id]=\"id\" cdkTrapFocus attr.tabindex=\"-1\" [ngClass]=\"{'disabled ': disabled, 'outline': outline}\"\n  [class]=\"'fn-button btn  btn-'+ type+' '+shape\" [disabled]=\"( disabled || isLoading ) ? true : null\"\n  attr.fnId=\"{{id}}\">\n  <ng-container *ngTemplateOutlet=\"template ? template : templateContent\"></ng-container>\n</button>\n<ng-template #templateContent>\n  <fn-icon *ngIf=\"iconAddonBefore\" [id]=\"'iconAddonBefore_'+id\" attr.fnId=\"{{id}}\" [class]=\"type + ' iconAddonBefore'\">\n    {{ iconAddonBefore }}\n  </fn-icon>\n  <div class=\"button-content\" [style.lineHeight]=\"height\" [id]=\"'button-content_'+id\" attr.fnId=\"{{id}}\">\n    <span class=\"label\" *ngIf=\"!isLoading\" attr.fnId=\"{{id}}\">{{ text }}</span>\n    <span class=\"label\" *ngIf=\"isLoading\" attr.fnId=\"{{id}}\">{{ textLoading }}</span>\n  </div>\n  <fn-icon *ngIf=\"iconAddonAfter\" attr.fnId=\"{{id}}\" [id]=\"'iconAddonAfter_'+id\" [class]=\"type + ' iconAddonAfter'\"\n    [ngStyle]=\"{'line-height': 'calc(' + height + ' - 1px)'}\">{{ iconAddonAfter }}\n  </fn-icon>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["fn-button{display:inline-block}fn-button .fn-button{outline:0;cursor:pointer;box-sizing:border-box;display:inline-flex}fn-button .fn-button .iconAddonBefore{box-sizing:border-box;padding:0 5px 0 0!important;pointer-events:none}fn-button .fn-button .iconAddonAfter{box-sizing:border-box;padding:0 0 0 5px!important;pointer-events:none}fn-button .fn-button .button-content{display:flex;padding:0;align-items:center;margin:auto;place-content:center}fn-button .fn-button .button-content .label{padding:0}"]
            }] }
];
/** @nocollapse */
FnButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: ContentObserver }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tYnV0dG9uLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2J1dHRvbi9mbi1idXR0b24tY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBSWpCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBYXBELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQWdDNUIsWUFBb0IsVUFBc0IsRUFBVSxHQUFzQixFQUFVLGVBQWdDO1FBQWhHLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQTlCM0csT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLFNBQUksR0FBaUIsU0FBUyxDQUFDO1FBQy9CLFVBQUssR0FBa0IsSUFBSSxDQUFDO1FBQzVCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixXQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLFVBQUssR0FBRyxNQUFNLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBZW5CLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBR2pDLENBQUM7Ozs7O0lBaEJELElBQWEsV0FBVyxDQUFDLElBQUk7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBWUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxlQUFlO2FBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQzNCLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ2YsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7YUFDQSxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFDLENBQUM7UUFDcEQsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxHQUFHLEVBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7O1lBL0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsa3VDQUF5QztnQkFFekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQXpCQyxVQUFVO1lBS1YsaUJBQWlCO1lBTVgsZUFBZTs7O2lCQWlCcEIsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUVMLEtBQUs7NEJBVUwsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7Ozs7SUF6QnJDLCtCQUFpQjs7SUFDakIsaUNBQXdDOztJQUN4QyxrQ0FBcUM7O0lBQ3JDLGlDQUFtQjs7SUFDbkIsNENBQThCOztJQUM5QiwyQ0FBNkI7O0lBQzdCLG1DQUF5Qjs7SUFDekIsa0NBQXdCOztJQUN4QixxQ0FBeUI7O0lBQ3pCLHVDQUE0Qjs7SUFDNUIscUNBQW9DOztJQUNwQyxvQ0FBeUI7O0lBQ3pCLHNDQUEyQjs7SUFDM0IsMENBQTJCOztJQVkzQiwwQ0FBaUU7Ozs7O0lBRWpFLHlDQUE2Qjs7Ozs7SUFDN0IscUNBQWlDOzs7OztJQUVyQix1Q0FBOEI7Ozs7O0lBQUUsZ0NBQThCOzs7OztJQUFFLDRDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld1JlZixcbiAgT25EZXN0cm95LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udGVudE9ic2VydmVyfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3N0YXJ0V2l0aCwgdGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuZXhwb3J0IHR5cGUgRm5CdXR0b25UeXBlID0gJ3ByaW1hcnknIHwgJ3N1Y2Nlc3MnIHwgJ2RhbmdlcicgfCAnZGVmYXVsdCcgfCAnbGluayc7XG5leHBvcnQgdHlwZSBGbkJ1dHRvblNoYXBlID0gJ2NpcmNsZScgfCAncm91bmQnIHwgbnVsbDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm4tYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZuLWJ1dHRvbi1jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmbi1idXR0b24tY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRm5CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBJbnB1dCgpIGlkID0gJyc7XG4gIEBJbnB1dCgpIHR5cGU6IEZuQnV0dG9uVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgc2hhcGU6IEZuQnV0dG9uU2hhcGUgPSBudWxsO1xuICBASW5wdXQoKSB0ZXh0ID0gJyc7XG4gIEBJbnB1dCgpIGljb25BZGRvbkJlZm9yZSA9ICcnO1xuICBASW5wdXQoKSBpY29uQWRkb25BZnRlciA9ICcnO1xuICBASW5wdXQoKSBoZWlnaHQgPSAnYXV0byc7XG4gIEBJbnB1dCgpIHdpZHRoID0gJ2F1dG8nO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IG51bGw7XG4gIEBJbnB1dCgpIGZsYXRCb3JkZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIG91dGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgaXNMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIGluZGV4U2hvcnRjdXQgPSAwO1xuXG4gIEBJbnB1dCgpIHNldCB0ZXh0TG9hZGluZyh0ZXh0KSB7XG4gICAgdGhpcy5fdGV4dExvYWRpbmcgPSB0ZXh0O1xuICB9XG5cbiAgZ2V0IHRleHRMb2FkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0TG9hZGluZztcbiAgfVxuXG4gIC8vIEBPdXRwdXQoKSBjbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKCdmbmJ1dHRvbicsIHtzdGF0aWM6IHRydWV9KSBidXR0b25FbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgX3RleHRMb2FkaW5nOiBzdHJpbmc7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGNvbnRlbnRPYnNlcnZlcjogQ29udGVudE9ic2VydmVyKSB7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5jb250ZW50T2JzZXJ2ZXJcbiAgICAgIC5vYnNlcnZlKHRoaXMuYnV0dG9uRWxlbWVudClcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5jaGVja0NvbnRlbnQoKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICBpZiAoISh0aGlzLmNkciBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cbn1cblxuIl19