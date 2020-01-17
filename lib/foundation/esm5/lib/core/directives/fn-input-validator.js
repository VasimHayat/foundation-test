/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NG_VALIDATORS } from '@angular/forms';
import { Input, Directive } from '@angular/core';
import { FnInputModel } from '../model/fn-input.model';
import { FnI18nService } from '../../i18n/fn-i18.service';
import { FnRequireValidator, FnMinValidator, FnMaxValidator, FnPatternValidator, FnEmailValidator } from '../model/fn-validator';
import { FN_INPUT_TYPES } from '../model/fn-form.constant';
var FnInputValidator = /** @class */ (function () {
    function FnInputValidator(i18nSvcs) {
        this.i18nSvcs = i18nSvcs;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    FnInputValidator.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return this.executeValidation(control, control.value);
    };
    /**
     * @param {?} control
     * @param {?} value
     * @return {?}
     */
    FnInputValidator.prototype.executeValidation = /**
     * @param {?} control
     * @param {?} value
     * @return {?}
     */
    function (control, value) {
        /** @type {?} */
        var validatorResp = null;
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
    };
    FnInputValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[fnInputValidator]',
                    providers: [{ provide: NG_VALIDATORS, useExisting: FnInputValidator, multi: true }]
                },] }
    ];
    /** @nocollapse */
    FnInputValidator.ctorParameters = function () { return [
        { type: FnI18nService }
    ]; };
    FnInputValidator.propDecorators = {
        fieldConfig: [{ type: Input }]
    };
    return FnInputValidator;
}());
export { FnInputValidator };
if (false) {
    /** @type {?} */
    FnInputValidator.prototype.fieldConfig;
    /**
     * @type {?}
     * @private
     */
    FnInputValidator.prototype.i18nSvcs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taW5wdXQtdmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2RpcmVjdGl2ZXMvZm4taW5wdXQtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUEyQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDakIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFM0Q7SUFRRSwwQkFBb0IsUUFBdUI7UUFBdkIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtJQUMzQyxDQUFDOzs7OztJQUdELG1DQUFROzs7O0lBQVIsVUFBUyxPQUF3QjtRQUMvQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7OztJQUVELDRDQUFpQjs7Ozs7SUFBakIsVUFBa0IsT0FBd0IsRUFBRSxLQUFVOztZQUNoRCxhQUFhLEdBQTJCLElBQUk7UUFDaEQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRTtZQUMvQixhQUFhLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFN0UsSUFBSSxhQUFhLElBQUksSUFBSSxFQUFFO2dCQUN6QixPQUFPLGFBQWEsQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUM5QixhQUFhLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pFLElBQUksYUFBYSxJQUFJLElBQUksRUFBRTtnQkFDekIsT0FBTyxhQUFhLENBQUM7YUFDdEI7U0FDRjtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDOUIsYUFBYSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6RSxJQUFJLGFBQWEsSUFBSSxJQUFJLEVBQUU7Z0JBQ3pCLE9BQU8sYUFBYSxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQzVCLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3RSxJQUFJLGFBQWEsSUFBSSxJQUFJLEVBQUU7Z0JBQ3pCLE9BQU8sYUFBYSxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxjQUFjLENBQUMsS0FBSyxFQUFFO1lBQ3hELGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzRSxJQUFJLGFBQWEsSUFBSSxJQUFJLEVBQUU7Z0JBQ3pCLE9BQU8sYUFBYSxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O2dCQW5ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7aUJBQ3BGOzs7O2dCQWJRLGFBQWE7Ozs4QkFnQm5CLEtBQUs7O0lBOENSLHVCQUFDO0NBQUEsQUFwREQsSUFvREM7U0EvQ1ksZ0JBQWdCOzs7SUFDM0IsdUNBQW1DOzs7OztJQUV2QixvQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm5JbnB1dE1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvZm4taW5wdXQubW9kZWwnO1xyXG5pbXBvcnQgeyBGbkkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi9mbi1pMTguc2VydmljZSc7XHJcbmltcG9ydCB7XHJcbiAgRm5SZXF1aXJlVmFsaWRhdG9yLFxyXG4gIEZuTWluVmFsaWRhdG9yLFxyXG4gIEZuTWF4VmFsaWRhdG9yLFxyXG4gIEZuUGF0dGVyblZhbGlkYXRvcixcclxuICBGbkVtYWlsVmFsaWRhdG9yXHJcbn0gZnJvbSAnLi4vbW9kZWwvZm4tdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgRk5fSU5QVVRfVFlQRVMgfSBmcm9tICcuLi9tb2RlbC9mbi1mb3JtLmNvbnN0YW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2ZuSW5wdXRWYWxpZGF0b3JdJyxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBGbklucHV0VmFsaWRhdG9yLCBtdWx0aTogdHJ1ZSB9XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZuSW5wdXRWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gIEBJbnB1dCgpIGZpZWxkQ29uZmlnOiBGbklucHV0TW9kZWw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4blN2Y3M6IEZuSTE4blNlcnZpY2UpIHtcclxuICB9XHJcblxyXG5cclxuICB2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcclxuICAgIHJldHVybiB0aGlzLmV4ZWN1dGVWYWxpZGF0aW9uKGNvbnRyb2wsIGNvbnRyb2wudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZVZhbGlkYXRpb24oY29udHJvbDogQWJzdHJhY3RDb250cm9sLCB2YWx1ZTogYW55KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XHJcbiAgICBsZXQgdmFsaWRhdG9yUmVzcDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IG51bGw7XHJcbiAgICBpZiAodGhpcy5maWVsZENvbmZpZy5pc1JlcXVpcmVkKSB7XHJcbiAgICAgIHZhbGlkYXRvclJlc3AgPSBGblJlcXVpcmVWYWxpZGF0b3IodGhpcy5pMThuU3ZjcywgdGhpcy5maWVsZENvbmZpZykoY29udHJvbCk7XHJcblxyXG4gICAgICBpZiAodmFsaWRhdG9yUmVzcCAhPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvclJlc3A7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZpZWxkQ29uZmlnLm1pbkxlbmd0aCkge1xyXG4gICAgICB2YWxpZGF0b3JSZXNwID0gRm5NaW5WYWxpZGF0b3IodGhpcy5pMThuU3ZjcywgdGhpcy5maWVsZENvbmZpZykoY29udHJvbCk7XHJcbiAgICAgIGlmICh2YWxpZGF0b3JSZXNwICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdmFsaWRhdG9yUmVzcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmZpZWxkQ29uZmlnLm1heExlbmd0aCkge1xyXG4gICAgICB2YWxpZGF0b3JSZXNwID0gRm5NYXhWYWxpZGF0b3IodGhpcy5pMThuU3ZjcywgdGhpcy5maWVsZENvbmZpZykoY29udHJvbCk7XHJcbiAgICAgIGlmICh2YWxpZGF0b3JSZXNwICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdmFsaWRhdG9yUmVzcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmllbGRDb25maWcucGF0dGVybikge1xyXG4gICAgICB2YWxpZGF0b3JSZXNwID0gRm5QYXR0ZXJuVmFsaWRhdG9yKHRoaXMuaTE4blN2Y3MsIHRoaXMuZmllbGRDb25maWcpKGNvbnRyb2wpO1xyXG4gICAgICBpZiAodmFsaWRhdG9yUmVzcCAhPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvclJlc3A7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZpZWxkQ29uZmlnLnR5cGVJRC5paWQgPT09IEZOX0lOUFVUX1RZUEVTLkVNQUlMKSB7XHJcbiAgICAgIHZhbGlkYXRvclJlc3AgPSBGbkVtYWlsVmFsaWRhdG9yKHRoaXMuaTE4blN2Y3MsIHRoaXMuZmllbGRDb25maWcpKGNvbnRyb2wpO1xyXG4gICAgICBpZiAodmFsaWRhdG9yUmVzcCAhPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvclJlc3A7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuIl19