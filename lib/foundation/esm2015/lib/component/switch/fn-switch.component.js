/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, forwardRef, ChangeDetectorRef, Input, TemplateRef } from '@angular/core';
import { ENTER, LEFT_ARROW, RIGHT_ARROW, SPACE } from '@angular/cdk/keycodes';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class FnSwitchComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.checked = false;
        this.isDisabled = false;
        this.onChange = (/**
         * @return {?}
         */
        () => null);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    clickEvent(e) {
        e.preventDefault();
        if (!this.isDisabled) {
            this.updateValue(!this.checked);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateValue(value) {
        if (this.checked !== value) {
            this.checked = value;
            this.onChange(this.checked);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (!this.isDisabled) {
            // tslint:disable-next-line: deprecation
            /** @type {?} */
            const keyCode = e.keyCode;
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.checked = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
        this.cdr.markForCheck();
    }
}
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
                        () => FnSwitchComponent)),
                        multi: true
                    }
                ],
                styles: [".fn-switch{margin:0;padding:0;color:rgba(0,0,0,.65);font-size:14px;list-style:none;position:relative;display:inline-block;box-sizing:border-box;min-width:44px;height:30px;line-height:28px;vertical-align:middle;background-color:rgba(0,0,0,.25);border:1px solid transparent;border-radius:100px;cursor:pointer;transition:.36s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}button,input{overflow:visible}button,select{text-transform:none}.fn-switch-inner{display:block;margin-right:12px;margin-left:34px;color:#fff;font-size:14px}.fn-switch-checked{background-color:#1890ff}.fn-switch-checked .fn-switch-inner{margin-right:34px;margin-left:12px}.fn-switch::after{position:absolute;top:1px;left:1px;width:26px;height:26px;background-color:#fff;border-radius:26px;cursor:pointer;transition:.36s cubic-bezier(.78,.14,.15,.86);content:\"|||\";box-shadow:0 2px 4px 0 rgba(0,35,11,.2);font-size:9px;line-height:25px;letter-spacing:2px;text-indent:2px}.fn-switch-checked::after{left:100%;margin-left:-1px;transform:translateX(-100%)}.fn-switch-large{min-width:48px;height:36px;line-height:14px}.fn-switch-large .fn-switch-inner{margin-right:14px;margin-left:42px;font-size:16px}.fn-switch-large.fn-switch-checked .fn-switch-inner{margin-right:42px;margin-left:14px}.fn-switch-large::after{width:32px;height:32px;font-size:15px;line-height:28px}.fn-switch-small{min-width:38px;height:24px;line-height:18px}.fn-switch-small .fn-switch-inner{margin-right:10px;margin-left:25px;font-size:12px}.fn-switch-small.fn-switch-checked .fn-switch-inner{margin-right:25px;margin-left:10px}.fn-switch-small::after{width:20px;height:20px;font-size:11px;line-height:18px}.fn-switch .checked-text{display:none}.fn-switch .unchecked-text,.fn-switch.fn-switch-checked .checked-text{display:block}.fn-switch.fn-switch-checked .unchecked-text{display:none}"]
            }] }
];
/** @nocollapse */
FnSwitchComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
FnSwitchComponent.propDecorators = {
    fnSize: [{ type: Input }],
    isDisabled: [{ type: Input }],
    checkedTemplate: [{ type: Input }],
    unCheckedTemplate: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L3N3aXRjaC9mbi1zd2l0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFhLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNILE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFlekUsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUcxQixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUUxQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRVAsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUs1QixhQUFROzs7UUFBNkIsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFDO0lBVEYsQ0FBQzs7Ozs7SUFXL0MsVUFBVSxDQUFDLENBQWE7UUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFjO1FBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDL0I7SUFDTCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxDQUFnQjtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTs7O2tCQUVaLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTztZQUN6QixJQUFJLE9BQU8sS0FBSyxVQUFVLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN0QjtpQkFBTSxJQUFJLE9BQU8sS0FBSyxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN0QjtpQkFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssRUFBRTtnQkFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3RCO1NBQ0o7SUFDTCxDQUFDOzs7OztJQUlELFVBQVUsQ0FBQyxLQUFjO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUF3QjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7OztZQTVFSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDR6QkFBdUM7Z0JBRXZDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1A7d0JBQ0ksT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBQzt3QkFDaEQsS0FBSyxFQUFFLElBQUk7cUJBQ2Q7aUJBQ0o7O2FBQ0o7Ozs7WUFoQjZELGlCQUFpQjs7O3FCQXVCMUUsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs7OztJQUpOLG9DQUFnQjs7SUFDaEIsbUNBQXdCOztJQUN4Qix1Q0FBNEI7O0lBQzVCLDRDQUE0Qzs7SUFDNUMsOENBQThDOztJQUU5QyxzQ0FBc0I7O0lBQ3RCLHFDQUFnRDs7Ozs7SUFUcEMsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95LCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFTlRFUiwgTEVGVF9BUlJPVywgUklHSFRfQVJST1csIFNQQUNFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmbi1zd2l0Y2gnLFxuICAgIHRlbXBsYXRlVXJsOiAnZm4tc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnZm4tc3dpdGNoLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGblN3aXRjaENvbXBvbmVudCksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBGblN3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgIGNoZWNrZWQgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBmblNpemU6IHN0cmluZztcbiAgICBASW5wdXQoKSBpc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgQElucHV0KCkgY2hlY2tlZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgICBASW5wdXQoKSB1bkNoZWNrZWRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgICBvblRvdWNoZWQ6ICgpID0+IHZvaWQ7XG4gICAgb25DaGFuZ2U6ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgICBjbGlja0V2ZW50KGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSghdGhpcy5jaGVja2VkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5jaGVja2VkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgICAgICAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgICAgICAgICAgaWYgKGtleUNvZGUgPT09IExFRlRfQVJST1cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFNQQUNFIHx8IGtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSghdGhpcy5jaGVja2VkKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuXG59XG4iXX0=