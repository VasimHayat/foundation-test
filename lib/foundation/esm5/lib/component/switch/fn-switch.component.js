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
        this.fnSize = '';
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
                    template: "<button type=\"button\" class=\"fn-switch\"\n        [disabled]=\"isDisabled\"\n        [class.fn-switch-checked]=\"checked\"\n        [class.ant-switch-disabled]=\"isDisabled\"\n        [class.fn-switch-small]=\"fnSize === 'small'\"\n        [class.fn-switch-large]=\"fnSize === 'large'\"\n        (click)=\"clickEvent($event)\"\n        (keydown)=\"onKeyDown($event)\">\n\n  <span class=\"fn-switch-inner\">\n    <span>\n      <ng-container *ngIf=\"checked\">\n        <ng-container *ngTemplateOutlet=\"checkedTemplate || defaultTemplate\"> </ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"!checked\">\n        <ng-container *ngTemplateOutlet=\"unCheckedTemplate || defaultTemplate\"> </ng-container>\n      </ng-container>\n      <ng-template #defaultTemplate>\n        {{checked ? 'Yes' : 'No'}}\n      </ng-template>\n    </span>\n  </span>\n</button>\n",
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
                    styles: ["fn-switch button.fn-switch{margin:0;padding:0;color:#fff;font-size:14px;list-style:none;position:relative;display:inline-block;box-sizing:border-box;min-width:44px;height:30px;line-height:28px;vertical-align:middle;background-color:#fd5969;border:1px solid transparent;border-radius:100px;cursor:pointer;transition:.36s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}fn-switch button.fn-switch.disabled,fn-switch button.fn-switch:disabled{background-color:rgba(0,0,0,.25);pointer-events:none}fn-switch button.fn-switch .checked-text{display:none}fn-switch button.fn-switch .unchecked-text{display:block}fn-switch button.fn-switch:after{position:absolute;top:1px;left:1px;width:26px;height:26px;background-color:#fff;border-radius:26px;cursor:pointer;transition:.36s cubic-bezier(.78,.14,.15,.86);content:\"|||\";box-shadow:0 2px 4px 0 rgba(0,35,11,.2);font-size:9px;line-height:25px;letter-spacing:2px;text-indent:2px;color:#ccc}fn-switch button.fn-switch span.fn-switch-inner{display:block;margin-right:12px;margin-left:34px;color:#fff;font-size:14px}fn-switch button.fn-switch.fn-switch-checked{background-color:#3bbbef}fn-switch button.fn-switch.fn-switch-checked:after{left:100%;margin-left:-1px;transform:translateX(-100%)}fn-switch button.fn-switch.fn-switch-checked span.fn-switch-inner{margin-right:34px;margin-left:12px}fn-switch button.fn-switch.fn-switch-checked .checked-text{display:block}fn-switch button.fn-switch.fn-switch-checked .unchecked-text{display:none}fn-switch button.fn-switch.fn-switch-large{min-width:48px;height:36px;line-height:14px}fn-switch button.fn-switch.fn-switch-large .fn-switch-inner{margin-right:14px;margin-left:42px;font-size:16px}fn-switch button.fn-switch.fn-switch-large.fn-switch-checked .fn-switch-inner{margin-right:42px;margin-left:14px}fn-switch button.fn-switch.fn-switch-large:after{width:32px;height:32px;font-size:10px;line-height:31px}fn-switch button.fn-switch.fn-switch-small{min-width:38px;height:24px;line-height:18px}fn-switch button.fn-switch.fn-switch-small .fn-switch-inner{margin-right:10px;margin-left:25px;font-size:12px}fn-switch button.fn-switch.fn-switch-small.fn-switch-checked .fn-switch-inner{margin-right:25px;margin-left:10px}fn-switch button.fn-switch.fn-switch-small:after{width:20px;height:20px;font-size:6px;line-height:20px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L3N3aXRjaC9mbi1zd2l0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUVqQixVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzVFLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RTtJQWdCRSwyQkFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFHMUMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNQLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSzVCLGFBQVE7OztRQUE2QixjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQztJQVRoRCxDQUFDOzs7OztJQVdELHNDQUFVOzs7O0lBQVYsVUFBVyxDQUFhO1FBQ3RCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksS0FBYztRQUN4QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxxQ0FBUzs7OztJQUFULFVBQVUsQ0FBZ0I7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7OztnQkFFZCxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU87WUFDekIsSUFBSSxPQUFPLEtBQUssVUFBVSxFQUFFO2dCQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDcEI7aUJBQU0sSUFBSSxPQUFPLEtBQUssV0FBVyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDcEI7aUJBQU0sSUFBSSxPQUFPLEtBQUssS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUNwQjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFHRCxzQ0FBVTs7OztJQUFWLFVBQVcsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsNENBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQXdCO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsNkNBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkE1RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQix5M0JBQXVDO29CQUV2QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixFQUFDOzRCQUNoRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs7aUJBQ0Y7Ozs7Z0JBbkJDLGlCQUFpQjs7O3lCQTJCaEIsS0FBSzs2QkFDTCxLQUFLO2tDQUNMLEtBQUs7b0NBQ0wsS0FBSzs7SUF3RFIsd0JBQUM7Q0FBQSxBQS9FRCxJQStFQztTQWxFWSxpQkFBaUI7OztJQU01QixvQ0FBZ0I7O0lBQ2hCLG1DQUFxQjs7SUFDckIsdUNBQTRCOztJQUM1Qiw0Q0FBNEM7O0lBQzVDLDhDQUE4Qzs7SUFFOUMsc0NBQXNCOztJQUN0QixxQ0FBZ0Q7Ozs7O0lBVnBDLGdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9uRGVzdHJveSxcbiAgZm9yd2FyZFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RU5URVIsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBTUEFDRX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZuLXN3aXRjaCcsXG4gIHRlbXBsYXRlVXJsOiAnZm4tc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZuLXN3aXRjaC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZuU3dpdGNoQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZuU3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBjaGVja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZuU2l6ZSA9ICcnO1xuICBASW5wdXQoKSBpc0Rpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNoZWNrZWRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHVuQ2hlY2tlZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQ7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuXG4gIGNsaWNrRXZlbnQoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZSghdGhpcy5jaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoZWNrZWQgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5jaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgICAgaWYgKGtleUNvZGUgPT09IExFRlRfQVJST1cpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShmYWxzZSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0cnVlKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBTUEFDRSB8fCBrZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCF0aGlzLmNoZWNrZWQpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkID0gdmFsdWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuXG59XG4iXX0=