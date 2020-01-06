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
    // ngOnChanges(changes: SimpleChanges): void {
    // }
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
                template: "<button #fnbutton [id]=\"id\" cdkTrapFocus attr.tabindex=\"-1\"\n  [ngStyle]=\"{'min-width': width, 'height': height, 'border-radius': flatBorder ? '0' : '3px', 'line-height': height }\"\n  [ngClass]=\"{'disabled ': disabled, 'outline': outline}\" [class]=\"'fn-button btn  btn-'+ type+' '+shape\"\n  [disabled]=\"( disabled || isLoading ) ? true : null\" attr.fnId=\"{{id}}\">\n  <ng-container *ngTemplateOutlet=\"template ? template : templateContent\"></ng-container>\n</button>\n<ng-template #templateContent>\n  <fn-icon *ngIf=\"iconAddonBefore\" [id]=\"'iconAddonBefore_'+id\" attr.fnId=\"{{id}}\" [class]=\"type + ' iconAddonBefore'\">\n    {{ iconAddonBefore }}\n  </fn-icon>\n  <div class=\"button-content\" [style.lineHeight]=\"height\" [id]=\"'button-content_'+id\" attr.fnId=\"{{id}}\">\n    <span class=\"label\" *ngIf=\"!isLoading\" attr.fnId=\"{{id}}\">{{ text }}</span>\n    <span class=\"label\" *ngIf=\"isLoading\" attr.fnId=\"{{id}}\">{{ textLoading }}</span>\n  </div>\n  <fn-icon *ngIf=\"iconAddonAfter\" attr.fnId=\"{{id}}\" [id]=\"'iconAddonAfter_'+id\" [class]=\"type + ' iconAddonAfter'\"\n    [ngStyle]=\"{'line-height': 'calc(' + height + ' - 1px)'}\">{{ iconAddonAfter }}\n  </fn-icon>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".fn-button{font-family:\"Segoe UI\",Lato,sans-serif,Arial;font-size:.9em;padding:0;margin:0;outline:0;cursor:pointer;box-sizing:border-box}.fn-button .iconAddonAfter,.fn-button .iconAddonBefore{box-sizing:border-box;padding:0 15px;pointer-events:none}.fn-button .button-content{display:flex;padding:.375rem .75rem;align-items:center;margin:auto;place-content:center;width:100%}fn-button .button-content .label{padding:0 10px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tYnV0dG9uLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2J1dHRvbi9mbi1idXR0b24tY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBSWpCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBYXRELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQTZDNUIsWUFBb0IsVUFBc0IsRUFBVSxHQUFzQixFQUFVLGVBQWdDO1FBQWhHLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQTNDM0csT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUVSLFNBQUksR0FBaUIsU0FBUyxDQUFDO1FBQy9CLFVBQUssR0FBa0IsSUFBSSxDQUFDO1FBRTVCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFFVixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUVyQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUVwQixXQUFNLEdBQUcsTUFBTSxDQUFDO1FBRWhCLFVBQUssR0FBRyxNQUFNLENBQUM7UUFFZixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJbkIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBZ0JuQixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUdqQyxDQUFDOzs7OztJQWpCRCxJQUFhLFdBQVcsQ0FBQyxJQUFJO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQWFELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsZUFBZTthQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUMzQixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0EsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUk7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQyxDQUFDO1FBQ3BELENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBTUQsWUFBWTtRQUNWLElBQUksQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxHQUFHLEVBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7O1lBaEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsMnRDQUF5QztnQkFFekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQXpCQyxVQUFVO1lBS1YsaUJBQWlCO1lBTVYsZUFBZTs7O2lCQWlCckIsS0FBSzttQkFFTCxLQUFLO29CQUNMLEtBQUs7bUJBRUwsS0FBSzs4QkFFTCxLQUFLOzZCQUVMLEtBQUs7cUJBRUwsS0FBSztvQkFFTCxLQUFLO3VCQUVMLEtBQUs7eUJBRUwsS0FBSzt1QkFFTCxLQUFLO3NCQUVMLEtBQUs7d0JBRUwsS0FBSzs0QkFFTCxLQUFLOzBCQUVMLEtBQUs7NEJBV0wsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUF0Q3ZDLCtCQUFpQjs7SUFFakIsaUNBQXdDOztJQUN4QyxrQ0FBcUM7O0lBRXJDLGlDQUFtQjs7SUFFbkIsNENBQThCOztJQUU5QiwyQ0FBNkI7O0lBRTdCLG1DQUF5Qjs7SUFFekIsa0NBQXdCOztJQUV4QixxQ0FBeUI7O0lBRXpCLHVDQUE0Qjs7SUFFNUIscUNBQW9DOztJQUVwQyxvQ0FBeUI7O0lBRXpCLHNDQUEyQjs7SUFFM0IsMENBQTJCOztJQWEzQiwwQ0FBbUU7Ozs7O0lBRW5FLHlDQUE2Qjs7Ozs7SUFDN0IscUNBQWlDOzs7OztJQUVyQix1Q0FBOEI7Ozs7O0lBQUUsZ0NBQThCOzs7OztJQUFFLDRDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld1JlZixcbiAgT25EZXN0cm95LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRlbnRPYnNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuZXhwb3J0IHR5cGUgRm5CdXR0b25UeXBlID0gJ3ByaW1hcnknIHwgJ3N1Y2Nlc3MnIHwgJ2RhbmdlcicgfCAnZGVmYXVsdCcgfCAnbGluayc7XG5leHBvcnQgdHlwZSBGbkJ1dHRvblNoYXBlID0gJ2NpcmNsZScgfCAncm91bmQnIHwgbnVsbDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm4tYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZuLWJ1dHRvbi1jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZuLWJ1dHRvbi1jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGbkJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQElucHV0KCkgaWQgPSAnJztcblxuICBASW5wdXQoKSB0eXBlOiBGbkJ1dHRvblR5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIHNoYXBlOiBGbkJ1dHRvblNoYXBlID0gbnVsbDtcblxuICBASW5wdXQoKSB0ZXh0ID0gJyc7XG5cbiAgQElucHV0KCkgaWNvbkFkZG9uQmVmb3JlID0gJyc7XG5cbiAgQElucHV0KCkgaWNvbkFkZG9uQWZ0ZXIgPSAnJztcblxuICBASW5wdXQoKSBoZWlnaHQgPSAnYXV0byc7XG5cbiAgQElucHV0KCkgd2lkdGggPSAnYXV0byc7XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBudWxsO1xuXG4gIEBJbnB1dCgpIGZsYXRCb3JkZXIgPSBmYWxzZTtcblxuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKSBvdXRsaW5lID0gZmFsc2U7XG5cbiAgQElucHV0KCkgaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgQElucHV0KCkgaW5kZXhTaG9ydGN1dCA9IDA7XG5cbiAgQElucHV0KCkgc2V0IHRleHRMb2FkaW5nKHRleHQpIHtcbiAgICB0aGlzLl90ZXh0TG9hZGluZyA9IHRleHQ7XG4gIH1cblxuICBnZXQgdGV4dExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHRMb2FkaW5nO1xuICB9XG5cblxuICAvLyBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZm5idXR0b24nLCB7IHN0YXRpYzogdHJ1ZSB9KSBidXR0b25FbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgX3RleHRMb2FkaW5nOiBzdHJpbmc7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGNvbnRlbnRPYnNlcnZlcjogQ29udGVudE9ic2VydmVyKSB7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5jb250ZW50T2JzZXJ2ZXJcbiAgICAgIC5vYnNlcnZlKHRoaXMuYnV0dG9uRWxlbWVudClcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5jaGVja0NvbnRlbnQoKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8vIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblxuICAvLyB9XG5cbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xuICAgIGlmICghKHRoaXMuY2RyIGFzIFZpZXdSZWYpLmRlc3Ryb3llZCkge1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNldEZvY3VzKCkge1xuICAvLyAgIHRoaXMuYnV0dG9uRWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIC8vIH1cbn1cblxuIl19