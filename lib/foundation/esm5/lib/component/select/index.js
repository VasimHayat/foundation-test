/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FnSelectComponent } from './single/fn-select.component';
import { FnMultiSelectComponent } from './multi/fn-multi-select.component';
import { FnCoreModule } from '../../core/index';
import { NgSelectModule } from '@ng-select/ng-select';
import { FnInputModule } from '../input/index';
var FnSelectModule = /** @class */ (function () {
    function FnSelectModule() {
    }
    FnSelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, NgSelectModule, FnCoreModule, FnInputModule],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9zZWxlY3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QztJQUFBO0lBWUEsQ0FBQzs7Z0JBWkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7b0JBQy9FLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLHNCQUFzQixDQUFDO29CQUN6RCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBQztvQkFDcEQsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxFQUFFO3dCQUNMLHNCQUFzQjtxQkFDekI7aUJBQ0o7O0lBSUQscUJBQUM7Q0FBQSxBQVpELElBWUM7U0FIWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZuU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zaW5nbGUvZm4tc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZuTXVsdGlTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL211bHRpL2ZuLW11bHRpLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGbkNvcmVNb2R1bGUgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmctc2VsZWN0L25nLXNlbGVjdCc7XHJcbmltcG9ydCB7Rm5JbnB1dE1vZHVsZX0gZnJvbSAnLi4vaW5wdXQvaW5kZXgnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTmdTZWxlY3RNb2R1bGUsIEZuQ29yZU1vZHVsZSwgRm5JbnB1dE1vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtGblNlbGVjdENvbXBvbmVudCwgRm5NdWx0aVNlbGVjdENvbXBvbmVudF0sXHJcbiAgICBleHBvcnRzOiBbRm5TZWxlY3RDb21wb25lbnQsIEZuTXVsdGlTZWxlY3RDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXHJcbiAgICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5TZWxlY3RNb2R1bGUge1xyXG5cclxuXHJcbn1cclxuIl19