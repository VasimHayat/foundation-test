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
var FnTimePickerModule = /** @class */ (function () {
    function FnTimePickerModule() {
    }
    /**
     * @return {?}
     */
    FnTimePickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FnTimePickerModule,
            providers: [FnTimepickerService]
        };
    };
    FnTimePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FnCoreModule.forRoot(), CommonModule, FormsModule],
                    declarations: [FnTimePickerComponent, FnMultiTimePickerComponent],
                    providers: [FnTimepickerService],
                    exports: [FnTimePickerComponent, FnMultiTimePickerComponent]
                },] }
    ];
    return FnTimePickerModule;
}());
export { FnTimePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC90aW1lL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXBFO0lBQUE7SUFjQSxDQUFDOzs7O0lBUFUsMEJBQU87OztJQUFkO1FBQ0ksT0FBTztZQUNILFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDbkMsQ0FBQTtJQUVMLENBQUM7O2dCQWJKLFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQztvQkFDNUQsWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUsMEJBQTBCLENBQUM7b0JBQ2pFLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNoQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQztpQkFDL0Q7O0lBU0QseUJBQUM7Q0FBQSxBQWRELElBY0M7U0FSWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IEZuQ29yZU1vZHVsZSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBGblRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3RpbWUtcGlja2VyL2ZuLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZuTXVsdGlUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9tdWx0aS10aW1lLXBpY2tlci9mbi1tdWx0aS10aW1lLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGblRpbWVwaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy90aW1lcGlja2VyLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtGbkNvcmVNb2R1bGUuZm9yUm9vdCgpLCBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcclxuICAgIGRlY2xhcmF0aW9uczogW0ZuVGltZVBpY2tlckNvbXBvbmVudCwgRm5NdWx0aVRpbWVQaWNrZXJDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbRm5UaW1lcGlja2VyU2VydmljZV0sXHJcbiAgICBleHBvcnRzOiBbRm5UaW1lUGlja2VyQ29tcG9uZW50LCBGbk11bHRpVGltZVBpY2tlckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZuVGltZVBpY2tlck1vZHVsZSB7XHJcbiAgICBzdGF0aWMgZm9yUm9vdCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogRm5UaW1lUGlja2VyTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtGblRpbWVwaWNrZXJTZXJ2aWNlXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iXX0=