import { ModuleWithProviders } from '@angular/core';
export * from './stores/app-session/fn-session.storage';
export * from './stores/app-session/state/fn.session.model';
export * from './stores/app-session/state/fn-session.effects';
export * from './stores/app-session/state/fn-session.reducer';
export * from './stores/app-session/action/fn-seesion.action';
export declare class FoundationModule {
    static forRoot(): ModuleWithProviders;
}
