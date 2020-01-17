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
export class FnSelectModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9zZWxlY3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQVc3QyxNQUFNLE9BQU8sY0FBYzs7O1lBVDFCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO2dCQUMvRSxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBQztnQkFDekQsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsc0JBQXNCLENBQUM7Z0JBQ3BELFNBQVMsRUFBRSxFQUFFO2dCQUNiLE9BQU8sRUFBRTtvQkFDTCxzQkFBc0I7aUJBQ3pCO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm5TZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NpbmdsZS9mbi1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm5NdWx0aVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vbXVsdGkvZm4tbXVsdGktc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZuQ29yZU1vZHVsZSB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBOZ1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZy1zZWxlY3Qvbmctc2VsZWN0JztcclxuaW1wb3J0IHtGbklucHV0TW9kdWxlfSBmcm9tICcuLi9pbnB1dC9pbmRleCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOZ1NlbGVjdE1vZHVsZSwgRm5Db3JlTW9kdWxlLCBGbklucHV0TW9kdWxlXSxcclxuICAgIGRlY2xhcmF0aW9uczogW0ZuU2VsZWN0Q29tcG9uZW50LCBGbk11bHRpU2VsZWN0Q29tcG9uZW50XSxcclxuICAgIGV4cG9ydHM6IFtGblNlbGVjdENvbXBvbmVudCwgRm5NdWx0aVNlbGVjdENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFcclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGblNlbGVjdE1vZHVsZSB7XHJcblxyXG5cclxufVxyXG4iXX0=