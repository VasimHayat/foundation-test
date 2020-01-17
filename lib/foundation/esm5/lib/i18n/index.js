/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { FnI18nService } from './fn-i18.service';
import { FnTranslatePipe } from './fn-translate.pipe';
import { HttpClientModule } from '@angular/common/http';
var FnTranslateModule = /** @class */ (function () {
    function FnTranslateModule() {
    }
    /**
     * @return {?}
     */
    FnTranslateModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FnTranslateModule,
            providers: TranslateModule.forRoot().providers
        };
    };
    /**
     * @return {?}
     */
    FnTranslateModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FnTranslateModule,
            providers: TranslateModule.forChild().providers
        };
    };
    FnTranslateModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        FnTranslatePipe
                    ],
                    imports: [
                        TranslateModule,
                        HttpClientModule
                    ],
                    exports: [
                        TranslateModule,
                        HttpClientModule,
                        FnTranslatePipe
                    ],
                    schemas: [],
                    providers: [FnI18nService, TranslatePipe]
                },] }
    ];
    return FnTranslateModule;
}());
export { FnTranslateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2kxOG4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQTBDLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd4RDtJQUFBO0lBOEJBLENBQUM7Ozs7SUFiVSx5QkFBTzs7O0lBQWQ7UUFDSSxPQUFPO1lBQ0gsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVM7U0FDakQsQ0FBQTtJQUNMLENBQUM7Ozs7SUFFTSwwQkFBUTs7O0lBQWY7UUFDSSxPQUFPO1lBQ0gsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVM7U0FDbEQsQ0FBQTtJQUNMLENBQUM7O2dCQTdCSixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLGVBQWU7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxlQUFlO3dCQUNmLGdCQUFnQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixlQUFlO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUUsRUFBRTtvQkFDWCxTQUFTLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO2lCQUM1Qzs7SUFlRCx3QkFBQztDQUFBLEFBOUJELElBOEJDO1NBZFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBGbkkxOG5TZXJ2aWNlIH0gZnJvbSAnLi9mbi1pMTguc2VydmljZSc7XHJcbmltcG9ydCB7IEZuVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vZm4tdHJhbnNsYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBGblRyYW5zbGF0ZVBpcGVcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgVHJhbnNsYXRlTW9kdWxlLFxyXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgVHJhbnNsYXRlTW9kdWxlLFxyXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgRm5UcmFuc2xhdGVQaXBlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW10sXHJcbiAgICBwcm92aWRlcnM6IFtGbkkxOG5TZXJ2aWNlLCBUcmFuc2xhdGVQaXBlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5UcmFuc2xhdGVNb2R1bGUge1xyXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IEZuVHJhbnNsYXRlTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KCkucHJvdmlkZXJzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogRm5UcmFuc2xhdGVNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogVHJhbnNsYXRlTW9kdWxlLmZvckNoaWxkKCkucHJvdmlkZXJzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19