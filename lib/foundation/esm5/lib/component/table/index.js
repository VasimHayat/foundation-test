/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FnTableComponent } from './fn-table.component';
import { FnTableSearchComponent } from './search/fn-table.search.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FnPaginationModule } from '../pagination/index';
import { FoundationModule } from '../../foundation.module';
export { FnTableMetaData } from './fn-table.meta.data';
export { FnTableConfig } from './fn-table.config';
var FnTableModule = /** @class */ (function () {
    function FnTableModule() {
    }
    FnTableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FnTableComponent, FnTableSearchComponent],
                    imports: [FormsModule, CommonModule, FnPaginationModule, FoundationModule],
                    exports: [FnTableComponent, FnTableSearchComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] }
    ];
    return FnTableModule;
}());
export { FnTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC90YWJsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTNELGdDQUFjLHNCQUFzQixDQUFDO0FBQ3JDLDhCQUFjLG1CQUFtQixDQUFDO0FBRWxDO0lBQUE7SUFRQSxDQUFDOztnQkFSQSxRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUM7b0JBQ3hELE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7b0JBQzFFLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDO29CQUNuRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDcEM7O0lBR0Qsb0JBQUM7Q0FBQSxBQVJELElBUUM7U0FGWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm5UYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZm4tdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm5UYWJsZVNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoL2ZuLXRhYmxlLnNlYXJjaC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm5QYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vcGFnaW5hdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZvdW5kYXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLm1vZHVsZSc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2ZuLXRhYmxlLm1ldGEuZGF0YSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZm4tdGFibGUuY29uZmlnJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtGblRhYmxlQ29tcG9uZW50LCBGblRhYmxlU2VhcmNoQ29tcG9uZW50XSxcclxuICAgIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlLCBGblBhZ2luYXRpb25Nb2R1bGUsIEZvdW5kYXRpb25Nb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW0ZuVGFibGVDb21wb25lbnQsIEZuVGFibGVTZWFyY2hDb21wb25lbnRdLFxyXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGblRhYmxlTW9kdWxlIHtcclxuXHJcbn1cclxuIl19