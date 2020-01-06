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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC90aW1lL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBUXBFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFDM0IsTUFBTSxDQUFDLE9BQU87UUFDVixPQUFPO1lBQ0gsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNuQyxDQUFBO0lBRUwsQ0FBQzs7O1lBYkosUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDO2dCQUM1RCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQztnQkFDakUsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDO2FBQy9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBGbkNvcmVNb2R1bGUgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgRm5UaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lLXBpY2tlci9mbi10aW1lLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGbk11bHRpVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbXVsdGktdGltZS1waWNrZXIvZm4tbXVsdGktdGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm5UaW1lcGlja2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdGltZXBpY2tlci5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbRm5Db3JlTW9kdWxlLmZvclJvb3QoKSwgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtGblRpbWVQaWNrZXJDb21wb25lbnQsIEZuTXVsdGlUaW1lUGlja2VyQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW0ZuVGltZXBpY2tlclNlcnZpY2VdLFxyXG4gICAgZXhwb3J0czogW0ZuVGltZVBpY2tlckNvbXBvbmVudCwgRm5NdWx0aVRpbWVQaWNrZXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGblRpbWVQaWNrZXJNb2R1bGUge1xyXG4gICAgc3RhdGljIGZvclJvb3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IEZuVGltZVBpY2tlck1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbRm5UaW1lcGlja2VyU2VydmljZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59Il19