import { ModuleWithProviders } from '@angular/core';
export * from '../core/model/fn-form.constant';
export * from '../core/model/fn-input.model';
export * from '../core/model/fn-input.value.accessor';
export * from '../core/model/fn-validator';
export declare class FnCoreModule {
    constructor(parentModule: FnCoreModule);
    static forRoot(): ModuleWithProviders;
}
