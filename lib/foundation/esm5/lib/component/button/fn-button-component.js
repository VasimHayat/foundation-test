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
    /**
     * @return {?}
     */
    FnButtonComponent.prototype.checkContent = /**
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
                    template: "<!-- [ngStyle]=\"{'min-width': width, 'height': height, 'border-radius': flatBorder ? '0' : '3px', 'line-height': height }\" -->\n<button #fnbutton [id]=\"id\" cdkTrapFocus attr.tabindex=\"-1\" [ngClass]=\"{'disabled ': disabled, 'outline': outline}\"\n  [class]=\"'fn-button btn  btn-'+ type+' '+shape\" [disabled]=\"( disabled || isLoading ) ? true : null\"\n  attr.fnId=\"{{id}}\">\n  <ng-container *ngTemplateOutlet=\"template ? template : templateContent\"></ng-container>\n</button>\n<ng-template #templateContent>\n  <fn-icon *ngIf=\"iconAddonBefore\" [id]=\"'iconAddonBefore_'+id\" attr.fnId=\"{{id}}\" [class]=\"type + ' iconAddonBefore'\">\n    {{ iconAddonBefore }}\n  </fn-icon>\n  <div class=\"button-content\" [style.lineHeight]=\"height\" [id]=\"'button-content_'+id\" attr.fnId=\"{{id}}\">\n    <span class=\"label\" *ngIf=\"!isLoading\" attr.fnId=\"{{id}}\">{{ text }}</span>\n    <span class=\"label\" *ngIf=\"isLoading\" attr.fnId=\"{{id}}\">{{ textLoading }}</span>\n  </div>\n  <fn-icon *ngIf=\"iconAddonAfter\" attr.fnId=\"{{id}}\" [id]=\"'iconAddonAfter_'+id\" [class]=\"type + ' iconAddonAfter'\"\n    [ngStyle]=\"{'line-height': 'calc(' + height + ' - 1px)'}\">{{ iconAddonAfter }}\n  </fn-icon>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["fn-button{display:inline-block}fn-button .fn-button{outline:0;cursor:pointer;box-sizing:border-box;display:inline-flex}fn-button .fn-button .iconAddonBefore{box-sizing:border-box;padding:0 5px 0 0!important;pointer-events:none}fn-button .fn-button .iconAddonAfter{box-sizing:border-box;padding:0 0 0 5px!important;pointer-events:none}fn-button .fn-button .button-content{display:flex;padding:0;align-items:center;margin:auto;place-content:center}fn-button .fn-button .button-content .label{padding:0}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tYnV0dG9uLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2J1dHRvbi9mbi1idXR0b24tY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBSWpCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBTXBEO0lBdUNFLDJCQUFvQixVQUFzQixFQUFVLEdBQXNCLEVBQVUsZUFBZ0M7UUFBaEcsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBOUIzRyxPQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsU0FBSSxHQUFpQixTQUFTLENBQUM7UUFDL0IsVUFBSyxHQUFrQixJQUFJLENBQUM7UUFDNUIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFdBQU0sR0FBRyxNQUFNLENBQUM7UUFDaEIsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUNmLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFlbkIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFHakMsQ0FBQztJQWhCRCxzQkFBYSwwQ0FBVzs7OztRQUl4QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7OztRQU5ELFVBQXlCLElBQUk7WUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7Ozs7SUFnQkQsOENBQWtCOzs7SUFBbEI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxlQUFlO2FBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQzNCLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ2YsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7YUFDQSxTQUFTOzs7UUFBQztZQUNULE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJOzs7WUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixFQUFDLENBQUM7UUFDcEQsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCx3Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsR0FBRyxFQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7O2dCQS9ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGt1Q0FBeUM7b0JBRXpDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQXpCQyxVQUFVO2dCQUtWLGlCQUFpQjtnQkFNWCxlQUFlOzs7cUJBaUJwQixLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO2tDQUNMLEtBQUs7aUNBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLO2dDQUNMLEtBQUs7OEJBRUwsS0FBSztnQ0FVTCxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7SUE4QnZDLHdCQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0F6RFksaUJBQWlCOzs7SUFFNUIsK0JBQWlCOztJQUNqQixpQ0FBd0M7O0lBQ3hDLGtDQUFxQzs7SUFDckMsaUNBQW1COztJQUNuQiw0Q0FBOEI7O0lBQzlCLDJDQUE2Qjs7SUFDN0IsbUNBQXlCOztJQUN6QixrQ0FBd0I7O0lBQ3hCLHFDQUF5Qjs7SUFDekIsdUNBQTRCOztJQUM1QixxQ0FBb0M7O0lBQ3BDLG9DQUF5Qjs7SUFDekIsc0NBQTJCOztJQUMzQiwwQ0FBMkI7O0lBWTNCLDBDQUFpRTs7Ozs7SUFFakUseUNBQTZCOzs7OztJQUM3QixxQ0FBaUM7Ozs7O0lBRXJCLHVDQUE4Qjs7Ozs7SUFBRSxnQ0FBOEI7Ozs7O0lBQUUsNENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3UmVmLFxuICBPbkRlc3Ryb3ksXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250ZW50T2JzZXJ2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7c3RhcnRXaXRoLCB0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG5leHBvcnQgdHlwZSBGbkJ1dHRvblR5cGUgPSAncHJpbWFyeScgfCAnc3VjY2VzcycgfCAnZGFuZ2VyJyB8ICdkZWZhdWx0JyB8ICdsaW5rJztcbmV4cG9ydCB0eXBlIEZuQnV0dG9uU2hhcGUgPSAnY2lyY2xlJyB8ICdyb3VuZCcgfCBudWxsO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmbi1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZm4tYnV0dG9uLWNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZuLWJ1dHRvbi1jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGbkJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQElucHV0KCkgaWQgPSAnJztcbiAgQElucHV0KCkgdHlwZTogRm5CdXR0b25UeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBzaGFwZTogRm5CdXR0b25TaGFwZSA9IG51bGw7XG4gIEBJbnB1dCgpIHRleHQgPSAnJztcbiAgQElucHV0KCkgaWNvbkFkZG9uQmVmb3JlID0gJyc7XG4gIEBJbnB1dCgpIGljb25BZGRvbkFmdGVyID0gJyc7XG4gIEBJbnB1dCgpIGhlaWdodCA9ICdhdXRvJztcbiAgQElucHV0KCkgd2lkdGggPSAnYXV0byc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gbnVsbDtcbiAgQElucHV0KCkgZmxhdEJvcmRlciA9IGZhbHNlO1xuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgb3V0bGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgaW5kZXhTaG9ydGN1dCA9IDA7XG5cbiAgQElucHV0KCkgc2V0IHRleHRMb2FkaW5nKHRleHQpIHtcbiAgICB0aGlzLl90ZXh0TG9hZGluZyA9IHRleHQ7XG4gIH1cblxuICBnZXQgdGV4dExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHRMb2FkaW5nO1xuICB9XG5cbiAgLy8gQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZuYnV0dG9uJywge3N0YXRpYzogdHJ1ZX0pIGJ1dHRvbkVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBfdGV4dExvYWRpbmc6IHN0cmluZztcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgY29udGVudE9ic2VydmVyOiBDb250ZW50T2JzZXJ2ZXIpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmNvbnRlbnRPYnNlcnZlclxuICAgICAgLm9ic2VydmUodGhpcy5idXR0b25FbGVtZW50KVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNoZWNrQ29udGVudCgpKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xuICAgIGlmICghKHRoaXMuY2RyIGFzIFZpZXdSZWYpLmRlc3Ryb3llZCkge1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=