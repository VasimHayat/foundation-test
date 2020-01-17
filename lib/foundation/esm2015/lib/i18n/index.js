/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { FnI18nService } from './fn-i18.service';
import { FnTranslatePipe } from './fn-translate.pipe';
import { HttpClientModule } from '@angular/common/http';
export class FnTranslateModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FnTranslateModule,
            providers: TranslateModule.forRoot().providers
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: FnTranslateModule,
            providers: TranslateModule.forChild().providers
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2kxOG4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQTBDLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQW1CeEQsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUMxQixNQUFNLENBQUMsT0FBTztRQUNWLE9BQU87WUFDSCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRSxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUztTQUNqRCxDQUFBO0lBQ0wsQ0FBQzs7OztJQUVELE1BQU0sQ0FBQyxRQUFRO1FBQ1gsT0FBTztZQUNILFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTO1NBQ2xELENBQUE7SUFDTCxDQUFDOzs7WUE3QkosUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixlQUFlO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsZUFBZTtvQkFDZixnQkFBZ0I7aUJBQ25CO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsZUFBZTtpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsU0FBUyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgRm5JMThuU2VydmljZSB9IGZyb20gJy4vZm4taTE4LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGblRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL2ZuLXRyYW5zbGF0ZS5waXBlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgRm5UcmFuc2xhdGVQaXBlXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFRyYW5zbGF0ZU1vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFRyYW5zbGF0ZU1vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIEZuVHJhbnNsYXRlUGlwZVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtdLFxyXG4gICAgcHJvdmlkZXJzOiBbRm5JMThuU2VydmljZSwgVHJhbnNsYXRlUGlwZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZuVHJhbnNsYXRlTW9kdWxlIHtcclxuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBGblRyYW5zbGF0ZU1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCgpLnByb3ZpZGVyc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IEZuVHJhbnNsYXRlTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFRyYW5zbGF0ZU1vZHVsZS5mb3JDaGlsZCgpLnByb3ZpZGVyc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==