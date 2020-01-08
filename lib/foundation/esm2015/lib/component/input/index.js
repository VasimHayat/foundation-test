/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FnUiFieldMetaDataService } from './service/fn-ui-field-metadata.service';
import { FnBaseInputComponent } from './base/fn-base-input.component';
import { FnInputComponent } from './fn-input.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FnInputErrorComponent } from './error-box/fn-input-error.component';
import { FnCoreModule } from '../../core/index';
export { FnUiFieldMetaDataService } from './service/fn-ui-field-metadata.service';
export class FnInputModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FnInputModule,
            providers: [FnUiFieldMetaDataService]
        };
    }
}
FnInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FnBaseInputComponent, FnInputComponent, FnInputErrorComponent],
                imports: [FormsModule, CommonModule, FnCoreModule.forRoot()],
                exports: [FnBaseInputComponent, FnInputComponent, FnInputErrorComponent],
                providers: [FnUiFieldMetaDataService]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9pbnB1dC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRCx5Q0FBYyx3Q0FBd0MsQ0FBQztBQVN2RCxNQUFNLE9BQU8sYUFBYTs7OztJQUV0QixNQUFNLENBQUMsT0FBTztRQUNWLE9BQU87WUFDSCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDO0lBRU4sQ0FBQzs7O1lBZEosUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixDQUFDO2dCQUM3RSxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDNUQsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLENBQUM7Z0JBQ3hFLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm5VaUZpZWxkTWV0YURhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2ZuLXVpLWZpZWxkLW1ldGFkYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGbkJhc2VJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vYmFzZS9mbi1iYXNlLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZuSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2ZuLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGbklucHV0RXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yLWJveC9mbi1pbnB1dC1lcnJvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGbkNvcmVNb2R1bGUgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZS9mbi11aS1maWVsZC1tZXRhZGF0YS5zZXJ2aWNlJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbRm5CYXNlSW5wdXRDb21wb25lbnQsIEZuSW5wdXRDb21wb25lbnQsIEZuSW5wdXRFcnJvckNvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSwgRm5Db3JlTW9kdWxlLmZvclJvb3QoKV0sXHJcbiAgICBleHBvcnRzOiBbRm5CYXNlSW5wdXRDb21wb25lbnQsIEZuSW5wdXRDb21wb25lbnQsIEZuSW5wdXRFcnJvckNvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtGblVpRmllbGRNZXRhRGF0YVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbklucHV0TW9kdWxlIHtcclxuXHJcbiAgICBzdGF0aWMgZm9yUm9vdCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogRm5JbnB1dE1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbRm5VaUZpZWxkTWV0YURhdGFTZXJ2aWNlXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==