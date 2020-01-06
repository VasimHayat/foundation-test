import { ModuleWithProviders } from '@angular/core';
export * from './component/table/fn-table.config';
export * from './component/table/fn-table.meta.data';
export * from './stores/app-session/fn-session.storage';
export * from './stores/app-session/state/fn.session.model';
export * from './stores/app-session/state/fn-session.effects';
export * from './stores/app-session/state/fn-session.reducer';
export * from './stores/app-session/action/fn-seesion.action';
export * from './component/menu/fn-stores/actions/fn-menu.action';
export * from './component/menu/fn-stores/effects/fn-menu.effects';
export * from './component/menu/fn-stores/models/fn-menu.state';
export * from './component/menu/fn-stores/reducer/fn-menu.reducer';
export * from './component/menu/sidebar/fn-menu.sidebar.component';
export * from './component/menu/menu-item/fn-menu.item.component';
export * from './component/menu/menu-landing/fn-menu.landing.component';
export declare class FoundationModule {
    static forRoot(): ModuleWithProviders;
}
