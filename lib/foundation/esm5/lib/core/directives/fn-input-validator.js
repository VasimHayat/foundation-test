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
var FnInputValidator = /** @class */ (function () {
    function FnInputValidator(i18nSvcs) {
        this.i18nSvcs = i18nSvcs;
        console.log("DONGGGGGGGGGGGGGGGGGGGGGGG");
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
        console.log("DKSSSSSSSSSSSSSS");
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
        console.log("VALIDATE>>>>>>>>......");
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
            console.log(validatorResp);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4taW5wdXQtdmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2RpcmVjdGl2ZXMvZm4taW5wdXQtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUEyQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqSSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0Q7SUFPSSwwQkFBb0IsUUFBdUI7UUFBdkIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUE7SUFDN0MsQ0FBQzs7Ozs7SUFJRCxtQ0FBUTs7OztJQUFSLFVBQVMsT0FBd0I7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRUQsNENBQWlCOzs7OztJQUFqQixVQUFrQixPQUF3QixFQUFFLEtBQVU7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBOztZQUNqQyxhQUFhLEdBQTJCLElBQUk7UUFDaEQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRTtZQUM3QixhQUFhLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFN0UsSUFBSSxhQUFhLElBQUksSUFBSSxFQUFFO2dCQUN2QixPQUFPLGFBQWEsQ0FBQzthQUN4QjtTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUM1QixhQUFhLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pFLElBQUksYUFBYSxJQUFJLElBQUksRUFBRTtnQkFDdkIsT0FBTyxhQUFhLENBQUM7YUFDeEI7U0FDSjtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsYUFBYSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6RSxJQUFJLGFBQWEsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLE9BQU8sYUFBYSxDQUFDO2FBQ3hCO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQzFCLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3RSxJQUFJLGFBQWEsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLE9BQU8sYUFBYSxDQUFDO2FBQ3hCO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxjQUFjLENBQUMsS0FBSyxFQUFFO1lBQ3RELGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQzFCLElBQUksYUFBYSxJQUFJLElBQUksRUFBRTtnQkFDdkIsT0FBTyxhQUFhLENBQUM7YUFDeEI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7O2dCQXZESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7aUJBQ3RGOzs7O2dCQU5RLGFBQWE7Ozs4QkFTakIsS0FBSzs7SUFrRFYsdUJBQUM7Q0FBQSxBQXhERCxJQXdEQztTQW5EWSxnQkFBZ0I7OztJQUN6Qix1Q0FBbUM7Ozs7O0lBQ3ZCLG9DQUErQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm5JbnB1dE1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvZm4taW5wdXQubW9kZWwnO1xyXG5pbXBvcnQgeyBGbkkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9mbi1pMTguc2VydmljZSc7XHJcbmltcG9ydCB7IEZuUmVxdWlyZVZhbGlkYXRvciwgRm5NaW5WYWxpZGF0b3IsIEZuTWF4VmFsaWRhdG9yLCBGblBhdHRlcm5WYWxpZGF0b3IsIEZuRW1haWxWYWxpZGF0b3IgfSBmcm9tICcuLi9tb2RlbC9mbi12YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBGTl9JTlBVVF9UWVBFUyB9IGZyb20gJy4uL21vZGVsL2ZuLWZvcm0uY29uc3RhbnQnO1xyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2ZuSW5wdXRWYWxpZGF0b3JdJyxcclxuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IEZuSW5wdXRWYWxpZGF0b3IsIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm5JbnB1dFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgICBASW5wdXQoKSBmaWVsZENvbmZpZzogRm5JbnB1dE1vZGVsO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuU3ZjczogRm5JMThuU2VydmljZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRE9OR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dcIilcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiREtTU1NTU1NTU1NTU1NTU1wiKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVWYWxpZGF0aW9uKGNvbnRyb2wsIGNvbnRyb2wudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGVWYWxpZGF0aW9uKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgdmFsdWU6IGFueSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVkFMSURBVEU+Pj4+Pj4+Pi4uLi4uLlwiKVxyXG4gICAgICAgIGxldCB2YWxpZGF0b3JSZXNwOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5maWVsZENvbmZpZy5pc1JlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvclJlc3AgPSBGblJlcXVpcmVWYWxpZGF0b3IodGhpcy5pMThuU3ZjcywgdGhpcy5maWVsZENvbmZpZykoY29udHJvbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yUmVzcCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yUmVzcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5maWVsZENvbmZpZy5taW5MZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yUmVzcCA9IEZuTWluVmFsaWRhdG9yKHRoaXMuaTE4blN2Y3MsIHRoaXMuZmllbGRDb25maWcpKGNvbnRyb2wpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yUmVzcCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yUmVzcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGRDb25maWcubWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvclJlc3AgPSBGbk1heFZhbGlkYXRvcih0aGlzLmkxOG5TdmNzLCB0aGlzLmZpZWxkQ29uZmlnKShjb250cm9sKTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRvclJlc3AgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvclJlc3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGRDb25maWcucGF0dGVybikge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3JSZXNwID0gRm5QYXR0ZXJuVmFsaWRhdG9yKHRoaXMuaTE4blN2Y3MsIHRoaXMuZmllbGRDb25maWcpKGNvbnRyb2wpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yUmVzcCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yUmVzcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5maWVsZENvbmZpZy50eXBlSUQuaWlkID09PSBGTl9JTlBVVF9UWVBFUy5FTUFJTCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3JSZXNwID0gRm5FbWFpbFZhbGlkYXRvcih0aGlzLmkxOG5TdmNzLCB0aGlzLmZpZWxkQ29uZmlnKShjb250cm9sKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsaWRhdG9yUmVzcClcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRvclJlc3AgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvclJlc3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==