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
export class FnSelectModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9zZWxlY3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBV3RELE1BQU0sT0FBTyxjQUFjOzs7WUFUMUIsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQztnQkFDbEUsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsc0JBQXNCLENBQUM7Z0JBQ3pELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLHNCQUFzQixDQUFDO2dCQUNwRCxTQUFTLEVBQUUsRUFBRTtnQkFDYixPQUFPLEVBQUU7b0JBQ0wsc0JBQXNCO2lCQUN6QjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZuU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zaWdubGUvZm4tc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZuTXVsdGlTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL211bHRpL2ZuLW11bHRpLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGbkNvcmVNb2R1bGUgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmctc2VsZWN0L25nLXNlbGVjdCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE5nU2VsZWN0TW9kdWxlLCBGbkNvcmVNb2R1bGVdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbRm5TZWxlY3RDb21wb25lbnQsIEZuTXVsdGlTZWxlY3RDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW0ZuU2VsZWN0Q29tcG9uZW50LCBGbk11bHRpU2VsZWN0Q29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxyXG4gICAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZuU2VsZWN0TW9kdWxlIHtcclxuXHJcblxyXG59XHJcbiJdfQ==