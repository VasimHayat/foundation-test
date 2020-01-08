/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FnUiFieldMetaDataService } from './service/fn-ui-field-metadata.service';
import { FnBaseInputComponent } from './base/fn-base-input.component';
import { FnInputComponent } from './fn-input.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FnInputErrorComponent } from './error-box/fn-input-error.component';
import { FnCoreModule } from '../../core/index';
export { FnUiFieldMetaDataService } from './service/fn-ui-field-metadata.service';
var FnInputModule = /** @class */ (function () {
    function FnInputModule() {
    }
    /**
     * @return {?}
     */
    FnInputModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FnInputModule,
            providers: [FnUiFieldMetaDataService]
        };
    };
    FnInputModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FnBaseInputComponent, FnInputComponent, FnInputErrorComponent],
                    imports: [FormsModule, CommonModule, FnCoreModule.forRoot()],
                    exports: [FnBaseInputComponent, FnInputComponent, FnInputErrorComponent],
                    providers: [FnUiFieldMetaDataService]
                },] }
    ];
    return FnInputModule;
}());
export { FnInputModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9pbnB1dC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRCx5Q0FBYyx3Q0FBd0MsQ0FBQztBQUd2RDtJQUFBO0lBZUEsQ0FBQzs7OztJQVBVLHFCQUFPOzs7SUFBZDtRQUNJLE9BQU87WUFDSCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDO0lBRU4sQ0FBQzs7Z0JBZEosUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixDQUFDO29CQUM3RSxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDNUQsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLENBQUM7b0JBQ3hFLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2lCQUN4Qzs7SUFVRCxvQkFBQztDQUFBLEFBZkQsSUFlQztTQVRZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGblVpRmllbGRNZXRhRGF0YVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvZm4tdWktZmllbGQtbWV0YWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEZuQmFzZUlucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9iYXNlL2ZuLWJhc2UtaW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm5JbnB1dENvbXBvbmVudCB9IGZyb20gJy4vZm4taW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZuSW5wdXRFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vZXJyb3ItYm94L2ZuLWlucHV0LWVycm9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZuQ29yZU1vZHVsZSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlL2ZuLXVpLWZpZWxkLW1ldGFkYXRhLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtGbkJhc2VJbnB1dENvbXBvbmVudCwgRm5JbnB1dENvbXBvbmVudCwgRm5JbnB1dEVycm9yQ29tcG9uZW50XSxcclxuICAgIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlLCBGbkNvcmVNb2R1bGUuZm9yUm9vdCgpXSxcclxuICAgIGV4cG9ydHM6IFtGbkJhc2VJbnB1dENvbXBvbmVudCwgRm5JbnB1dENvbXBvbmVudCwgRm5JbnB1dEVycm9yQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW0ZuVWlGaWVsZE1ldGFEYXRhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZuSW5wdXRNb2R1bGUge1xyXG5cclxuICAgIHN0YXRpYyBmb3JSb290KCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBGbklucHV0TW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtGblVpRmllbGRNZXRhRGF0YVNlcnZpY2VdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19