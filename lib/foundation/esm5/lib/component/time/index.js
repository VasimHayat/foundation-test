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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC90aW1lL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBQzlGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBRWxFO0lBQUE7SUFjQSxDQUFDOzs7O0lBUFEsMEJBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDakMsQ0FBQTtJQUVILENBQUM7O2dCQWJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQztvQkFDNUQsWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUsMEJBQTBCLENBQUM7b0JBQ2pFLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNoQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQztpQkFDN0Q7O0lBU0QseUJBQUM7Q0FBQSxBQWRELElBY0M7U0FSWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7Rm5Db3JlTW9kdWxlfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHtGblRpbWVQaWNrZXJDb21wb25lbnR9IGZyb20gJy4vdGltZS1waWNrZXIvZm4tdGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtGbk11bHRpVGltZVBpY2tlckNvbXBvbmVudH0gZnJvbSAnLi9tdWx0aS10aW1lLXBpY2tlci9mbi1tdWx0aS10aW1lLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0ZuVGltZXBpY2tlclNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvdGltZXBpY2tlci5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0ZuQ29yZU1vZHVsZS5mb3JSb290KCksIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0ZuVGltZVBpY2tlckNvbXBvbmVudCwgRm5NdWx0aVRpbWVQaWNrZXJDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW0ZuVGltZXBpY2tlclNlcnZpY2VdLFxyXG4gIGV4cG9ydHM6IFtGblRpbWVQaWNrZXJDb21wb25lbnQsIEZuTXVsdGlUaW1lUGlja2VyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5UaW1lUGlja2VyTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBGblRpbWVQaWNrZXJNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0ZuVGltZXBpY2tlclNlcnZpY2VdXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iXX0=