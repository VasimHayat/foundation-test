/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FnCoreModule } from '../../core/index';
import { FnTimePickerComponent } from './time-picker/fn-time-picker.component';
import { FnMultiTimePickerComponent } from './multi-time-picker/fn-multi-time-picker.component';
import { FnTimepickerService } from './services/timepicker.service';
export class FnTimePickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FnTimePickerModule,
            providers: [FnTimepickerService]
        };
    }
}
FnTimePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [FnCoreModule.forRoot(), CommonModule, FormsModule],
                declarations: [FnTimePickerComponent, FnMultiTimePickerComponent],
                providers: [FnTimepickerService],
                exports: [FnTimePickerComponent, FnMultiTimePickerComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC90aW1lL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBQzlGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBUWxFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFDN0IsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFBO0lBRUgsQ0FBQzs7O1lBYkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDO2dCQUM1RCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQztnQkFDakUsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDO2FBQzdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQge0ZuQ29yZU1vZHVsZX0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7Rm5UaW1lUGlja2VyQ29tcG9uZW50fSBmcm9tICcuL3RpbWUtcGlja2VyL2ZuLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Rm5NdWx0aVRpbWVQaWNrZXJDb21wb25lbnR9IGZyb20gJy4vbXVsdGktdGltZS1waWNrZXIvZm4tbXVsdGktdGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtGblRpbWVwaWNrZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3RpbWVwaWNrZXIuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtGbkNvcmVNb2R1bGUuZm9yUm9vdCgpLCBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtGblRpbWVQaWNrZXJDb21wb25lbnQsIEZuTXVsdGlUaW1lUGlja2VyQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtGblRpbWVwaWNrZXJTZXJ2aWNlXSxcclxuICBleHBvcnRzOiBbRm5UaW1lUGlja2VyQ29tcG9uZW50LCBGbk11bHRpVGltZVBpY2tlckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZuVGltZVBpY2tlck1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRm5UaW1lUGlja2VyTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtGblRpbWVwaWNrZXJTZXJ2aWNlXVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIl19