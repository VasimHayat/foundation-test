/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, forwardRef, ChangeDetectorRef, Input, TemplateRef } from '@angular/core';
import { ENTER, LEFT_ARROW, RIGHT_ARROW, SPACE } from '@angular/cdk/keycodes';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var FnSwitchComponent = /** @class */ (function () {
    function FnSwitchComponent(cdr) {
        this.cdr = cdr;
        this.checked = false;
        this.isDisabled = false;
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    FnSwitchComponent.prototype.clickEvent = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        if (!this.isDisabled) {
            this.updateValue(!this.checked);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FnSwitchComponent.prototype.updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.checked !== value) {
            this.checked = value;
            this.onChange(this.checked);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    FnSwitchComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.isDisabled) {
            // tslint:disable-next-line: deprecation
            /** @type {?} */
            var keyCode = e.keyCode;
            if (keyCode === LEFT_ARROW) {
                this.updateValue(false);
                e.preventDefault();
            }
            else if (keyCode === RIGHT_ARROW) {
                this.updateValue(true);
                e.preventDefault();
            }
            else if (keyCode === SPACE || keyCode === ENTER) {
                this.updateValue(!this.checked);
                e.preventDefault();
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FnSwitchComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FnSwitchComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FnSwitchComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    FnSwitchComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    FnSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fn-switch',
                    template: "<button type=\"button\" class=\"fn-switch\" [disabled]=\"isDisabled\" [class.fn-switch-checked]=\"checked\"\n  [class.ant-switch-disabled]=\"isDisabled\" [class.fn-switch-small]=\"fnSize === 'small'\" [class.fn-switch-large]=\"fnSize\n  === 'large'\" (click)=\"clickEvent($event)\" (keydown)=\"onKeyDown($event)\">\n\n  <span class=\"fn-switch-inner\">\n    <span>\n      <ng-container *ngIf=\"checked\">\n        <ng-container *ngTemplateOutlet=\"checkedTemplate || defaultTemplate\"> </ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"!checked\">\n        <ng-container *ngTemplateOutlet=\"unCheckedTemplate || defaultTemplate\"> </ng-container>\n      </ng-container>\n      <ng-template #defaultTemplate>\n        {{checked?'Yes':'No'}}\n      </ng-template>\n    </span>\n  </span>\n</button>\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return FnSwitchComponent; })),
                            multi: true
                        }
                    ],
                    styles: [".fn-switch{margin:0;padding:0;color:rgba(0,0,0,.65);font-size:14px;list-style:none;position:relative;display:inline-block;box-sizing:border-box;min-width:44px;height:30px;line-height:28px;vertical-align:middle;background-color:rgba(0,0,0,.25);border:1px solid transparent;border-radius:100px;cursor:pointer;transition:.36s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}button,input{overflow:visible}button,select{text-transform:none}.fn-switch-inner{display:block;margin-right:12px;margin-left:34px;color:#fff;font-size:14px}.fn-switch-checked{background-color:#1890ff}.fn-switch-checked .fn-switch-inner{margin-right:34px;margin-left:12px}.fn-switch::after{position:absolute;top:1px;left:1px;width:26px;height:26px;background-color:#fff;border-radius:26px;cursor:pointer;transition:.36s cubic-bezier(.78,.14,.15,.86);content:\"|||\";box-shadow:0 2px 4px 0 rgba(0,35,11,.2);font-size:9px;line-height:25px;letter-spacing:2px;text-indent:2px}.fn-switch-checked::after{left:100%;margin-left:-1px;transform:translateX(-100%)}.fn-switch-large{min-width:48px;height:36px;line-height:14px}.fn-switch-large .fn-switch-inner{margin-right:14px;margin-left:42px;font-size:16px}.fn-switch-large.fn-switch-checked .fn-switch-inner{margin-right:42px;margin-left:14px}.fn-switch-large::after{width:32px;height:32px;font-size:15px;line-height:28px}.fn-switch-small{min-width:38px;height:24px;line-height:18px}.fn-switch-small .fn-switch-inner{margin-right:10px;margin-left:25px;font-size:12px}.fn-switch-small.fn-switch-checked .fn-switch-inner{margin-right:25px;margin-left:10px}.fn-switch-small::after{width:20px;height:20px;font-size:11px;line-height:18px}.fn-switch .checked-text{display:none}.fn-switch .unchecked-text,.fn-switch.fn-switch-checked .checked-text{display:block}.fn-switch.fn-switch-checked .unchecked-text{display:none}"]
                }] }
    ];
    /** @nocollapse */
    FnSwitchComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    FnSwitchComponent.propDecorators = {
        fnSize: [{ type: Input }],
        isDisabled: [{ type: Input }],
        checkedTemplate: [{ type: Input }],
        unCheckedTemplate: [{ type: Input }]
    };
    return FnSwitchComponent;
}());
export { FnSwitchComponent };
if (false) {
    /** @type {?} */
    FnSwitchComponent.prototype.checked;
    /** @type {?} */
    FnSwitchComponent.prototype.fnSize;
    /** @type {?} */
    FnSwitchComponent.prototype.isDisabled;
    /** @type {?} */
    FnSwitchComponent.prototype.checkedTemplate;
    /** @type {?} */
    FnSwitchComponent.prototype.unCheckedTemplate;
    /** @type {?} */
    FnSwitchComponent.prototype.onTouched;
    /** @type {?} */
    FnSwitchComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    FnSwitchComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L3N3aXRjaC9mbi1zd2l0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFhLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNILE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekU7SUFnQkksMkJBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBRTFDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFUCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSzVCLGFBQVE7OztRQUE2QixjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQztJQVRGLENBQUM7Ozs7O0lBVy9DLHNDQUFVOzs7O0lBQVYsVUFBVyxDQUFhO1FBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQzs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksS0FBYztRQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxxQ0FBUzs7OztJQUFULFVBQVUsQ0FBZ0I7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7OztnQkFFWixPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU87WUFDekIsSUFBSSxPQUFPLEtBQUssVUFBVSxFQUFFO2dCQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDdEI7aUJBQU0sSUFBSSxPQUFPLEtBQUssV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDdEI7aUJBQU0sSUFBSSxPQUFPLEtBQUssS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN0QjtTQUNKO0lBQ0wsQ0FBQzs7Ozs7SUFJRCxzQ0FBVTs7OztJQUFWLFVBQVcsS0FBYztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsNENBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQXdCO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsNkNBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQWM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QixDQUFDOztnQkE1RUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQiw0ekJBQXVDO29CQUV2QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsU0FBUyxFQUFFO3dCQUNQOzRCQUNJLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixFQUFDOzRCQUNoRCxLQUFLLEVBQUUsSUFBSTt5QkFDZDtxQkFDSjs7aUJBQ0o7Ozs7Z0JBaEI2RCxpQkFBaUI7Ozt5QkF1QjFFLEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxLQUFLO29DQUNMLEtBQUs7O0lBeURWLHdCQUFDO0NBQUEsQUEvRUQsSUErRUM7U0FsRVksaUJBQWlCOzs7SUFLMUIsb0NBQWdCOztJQUNoQixtQ0FBd0I7O0lBQ3hCLHVDQUE0Qjs7SUFDNUIsNENBQTRDOztJQUM1Qyw4Q0FBOEM7O0lBRTlDLHNDQUFzQjs7SUFDdEIscUNBQWdEOzs7OztJQVRwQyxnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3ksIGZvcndhcmRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVOVEVSLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZuLXN3aXRjaCcsXG4gICAgdGVtcGxhdGVVcmw6ICdmbi1zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydmbi1zd2l0Y2guY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZuU3dpdGNoQ29tcG9uZW50KSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEZuU3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gICAgY2hlY2tlZCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGZuU2l6ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjaGVja2VkVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAgIEBJbnB1dCgpIHVuQ2hlY2tlZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICAgIG9uVG91Y2hlZDogKCkgPT4gdm9pZDtcbiAgICBvbkNoYW5nZTogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcblxuICAgIGNsaWNrRXZlbnQoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCF0aGlzLmNoZWNrZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmNoZWNrZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICAgICAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgICAgICAgICBpZiAoa2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRydWUpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gU1BBQ0UgfHwga2V5Q29kZSA9PT0gRU5URVIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCF0aGlzLmNoZWNrZWQpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==