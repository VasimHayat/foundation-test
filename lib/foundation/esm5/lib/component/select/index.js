/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FnSelectComponent } from './signle/fn-select.component';
import { FnMultiSelectComponent } from './multi/fn-multi-select.component';
import { FnCoreModule } from '../../core/index';
import { NgSelectModule } from '@ng-select/ng-select';
var FnSelectModule = /** @class */ (function () {
    function FnSelectModule() {
    }
    FnSelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, NgSelectModule, FnCoreModule],
                    declarations: [FnSelectComponent, FnMultiSelectComponent],
                    exports: [FnSelectComponent, FnMultiSelectComponent],
                    providers: [],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA
                    ],
                },] }
    ];
    return FnSelectModule;
}());
export { FnSelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9zZWxlY3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXREO0lBQUE7SUFZQSxDQUFDOztnQkFaQSxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDO29CQUNsRSxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBQztvQkFDekQsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsc0JBQXNCLENBQUM7b0JBQ3BELFNBQVMsRUFBRSxFQUFFO29CQUNiLE9BQU8sRUFBRTt3QkFDTCxzQkFBc0I7cUJBQ3pCO2lCQUNKOztJQUlELHFCQUFDO0NBQUEsQUFaRCxJQVlDO1NBSFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGblNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vc2lnbmxlL2ZuLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGbk11bHRpU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9tdWx0aS9mbi1tdWx0aS1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm5Db3JlTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29yZS9pbmRleCc7XHJcbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOZ1NlbGVjdE1vZHVsZSwgRm5Db3JlTW9kdWxlXSxcclxuICAgIGRlY2xhcmF0aW9uczogW0ZuU2VsZWN0Q29tcG9uZW50LCBGbk11bHRpU2VsZWN0Q29tcG9uZW50XSxcclxuICAgIGV4cG9ydHM6IFtGblNlbGVjdENvbXBvbmVudCwgRm5NdWx0aVNlbGVjdENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFcclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGblNlbGVjdE1vZHVsZSB7XHJcblxyXG5cclxufVxyXG4iXX0=