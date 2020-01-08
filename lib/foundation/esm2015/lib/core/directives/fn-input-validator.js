/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NG_VALIDATORS } from '@angular/forms';
import { Input, Directive } from '@angular/core';
import { FnInputModel } from '../model/fn-input.model';
import { FnI18nService } from '../i18n/fn-i18.service';
import { FnRequireValidator, FnMinValidator, FnMaxValidator, FnPatternValidator, FnEmailValidator } from '../model/fn-validator';
import { FN_INPUT_TYPES } from '../model/fn-form.constant';
export class FnInputValidator {
    /**
     * @param {?} i18nSvcs
     */
    constructor(i18nSvcs) {
        this.i18nSvcs = i18nSvcs;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this.executeValidation(control, control.value);
    }
    /**
     * @param {?} control
     * @param {?} value
     * @return {?}
     */
    executeValidation(control, value) {
        /** @type {?} */
        let validatorResp = null;
        if (this.fieldConfig.isRequired) {
            validatorResp = FnRequireValidator(this.i18nSvcs, this.fieldConfig)(control);
            if (validatorResp != null) {
                return validatorResp;
            }
        }
        if (this.fieldConfig.minLength) {
            validatorResp = FnMinValidator(this.i18nSvcs, this.fieldConfig)(control);
            if (validatorResp != null) {
                return validatorResp;
            }
        }
        if (this.fieldConfig.maxLength) {
            validatorResp = FnMaxValidator(this.i18nSvcs, this.fieldConfig)(control);
            if (validatorResp != null) {
                return validatorResp;
            }
        }
        if (this.fieldConfig.pattern) {
            validatorResp = FnPatternValidator(this.i18nSvcs, this.fieldConfig)(control);
            if (validatorResp != null) {
                return validatorResp;
            }
        }
        if (this.fieldConfig.typeID.iid === FN_INPUT_TYPES.EMAIL) {
            validatorResp = FnEmailValidator(this.i18nSvcs, this.fieldConfig)(control);
            if (validatorResp != null) {
                return validatorResp;
            }
        }
        return null;
    }
}
FnInputValidator.decorators = [
    { type: Directive, args: [{
                selector: '[fnInputValidator]',
                providers: [{ provide: NG_VALIDATORS, useExisting: FnInputValidator, multi: true }]
            },] }
];
/** @nocollapse */
FnInputValidator.ctorParameters = () => [
    { type: FnI18nService }
];
FnInputValidator.propDecorators = {
    fieldConfig: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FnInputValidator.prototype.fieldConfig;
    /**
     * @type {?}
     * @private
     */
    FnInputValidator.prototype.i18nSvcs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taW5wdXQtdmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2RpcmVjdGl2ZXMvZm4taW5wdXQtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUEyQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqSSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFNM0QsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUV6QixZQUFvQixRQUF1QjtRQUF2QixhQUFRLEdBQVIsUUFBUSxDQUFlO0lBQUksQ0FBQzs7Ozs7SUFJaEQsUUFBUSxDQUFDLE9BQXdCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsT0FBd0IsRUFBRSxLQUFVOztZQUM5QyxhQUFhLEdBQTJCLElBQUk7UUFDaEQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRTtZQUM3QixhQUFhLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFN0UsSUFBSSxhQUFhLElBQUksSUFBSSxFQUFFO2dCQUN2QixPQUFPLGFBQWEsQ0FBQzthQUN4QjtTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUM1QixhQUFhLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pFLElBQUksYUFBYSxJQUFJLElBQUksRUFBRTtnQkFDdkIsT0FBTyxhQUFhLENBQUM7YUFDeEI7U0FDSjtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsYUFBYSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6RSxJQUFJLGFBQWEsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLE9BQU8sYUFBYSxDQUFDO2FBQ3hCO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQzFCLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3RSxJQUFJLGFBQWEsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLE9BQU8sYUFBYSxDQUFDO2FBQ3hCO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxjQUFjLENBQUMsS0FBSyxFQUFFO1lBQ3RELGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzRSxJQUFJLGFBQWEsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLE9BQU8sYUFBYSxDQUFDO2FBQ3hCO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7WUFsREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3RGOzs7O1lBTlEsYUFBYTs7OzBCQVNqQixLQUFLOzs7O0lBQU4sdUNBQW1DOzs7OztJQUN2QixvQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZuSW5wdXRNb2RlbCB9IGZyb20gJy4uL21vZGVsL2ZuLWlucHV0Lm1vZGVsJztcclxuaW1wb3J0IHsgRm5JMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vZm4taTE4LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGblJlcXVpcmVWYWxpZGF0b3IsIEZuTWluVmFsaWRhdG9yLCBGbk1heFZhbGlkYXRvciwgRm5QYXR0ZXJuVmFsaWRhdG9yLCBGbkVtYWlsVmFsaWRhdG9yIH0gZnJvbSAnLi4vbW9kZWwvZm4tdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgRk5fSU5QVVRfVFlQRVMgfSBmcm9tICcuLi9tb2RlbC9mbi1mb3JtLmNvbnN0YW50JztcclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tmbklucHV0VmFsaWRhdG9yXScsXHJcbiAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBGbklucHV0VmFsaWRhdG9yLCBtdWx0aTogdHJ1ZSB9XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZuSW5wdXRWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gICAgQElucHV0KCkgZmllbGRDb25maWc6IEZuSW5wdXRNb2RlbDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4blN2Y3M6IEZuSTE4blNlcnZpY2UpIHsgfVxyXG5cclxuXHJcblxyXG4gICAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVZhbGlkYXRpb24oY29udHJvbCwgY29udHJvbC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZVZhbGlkYXRpb24oY29udHJvbDogQWJzdHJhY3RDb250cm9sLCB2YWx1ZTogYW55KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRvclJlc3A6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkQ29uZmlnLmlzUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yUmVzcCA9IEZuUmVxdWlyZVZhbGlkYXRvcih0aGlzLmkxOG5TdmNzLCB0aGlzLmZpZWxkQ29uZmlnKShjb250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3JSZXNwICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3JSZXNwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkQ29uZmlnLm1pbkxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3JSZXNwID0gRm5NaW5WYWxpZGF0b3IodGhpcy5pMThuU3ZjcywgdGhpcy5maWVsZENvbmZpZykoY29udHJvbCk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3JSZXNwICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3JSZXNwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5maWVsZENvbmZpZy5tYXhMZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yUmVzcCA9IEZuTWF4VmFsaWRhdG9yKHRoaXMuaTE4blN2Y3MsIHRoaXMuZmllbGRDb25maWcpKGNvbnRyb2wpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yUmVzcCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yUmVzcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5maWVsZENvbmZpZy5wYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvclJlc3AgPSBGblBhdHRlcm5WYWxpZGF0b3IodGhpcy5pMThuU3ZjcywgdGhpcy5maWVsZENvbmZpZykoY29udHJvbCk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3JSZXNwICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3JSZXNwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkQ29uZmlnLnR5cGVJRC5paWQgPT09IEZOX0lOUFVUX1RZUEVTLkVNQUlMKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvclJlc3AgPSBGbkVtYWlsVmFsaWRhdG9yKHRoaXMuaTE4blN2Y3MsIHRoaXMuZmllbGRDb25maWcpKGNvbnRyb2wpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yUmVzcCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yUmVzcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuIl19