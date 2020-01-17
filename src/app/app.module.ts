import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FoundationModule,
  fnSessionReducer,
  FnSessionEffect,
  FnButtonModule,
  FnIconModule,
  FnMenuReducer,
  FnMenuEffects,
  FnSwitchModule,
  FnInputModule,
  FnDialogModule,
  FnCoreModule,
  FnSelectModule,
  FnTimePickerModule,
  FnColorPickerModule, FnMenuModule, FnDatePickerModule, FnTableModule, FnTranslateModule
} from 'foundation';
import { HwApplication } from './hw.application';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HWErrorHandler } from './hw-error.andler';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppLandingComponent } from './landing/app.landing.component';
import { AppHomeComponent } from './home/app-home.component';

// tslint:disable-next-line: variable-name
export let LOGGING_ERROR_HANDLER_PROVIDERS = [
  {
    provide: ErrorHandler,
    useClass: HWErrorHandler
  }
];


@NgModule({
  declarations: [
    AppComponent, DashboardComponent, AppLandingComponent, AppHomeComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FoundationModule.forRoot(),
    FnButtonModule,
    FnIconModule,
    FnSwitchModule,
    FnInputModule,
    FnSelectModule,
    FnTimePickerModule.forRoot(),
    FnTranslateModule.forRoot(),
    FnCoreModule.forRoot(),
    FnInputModule.forRoot(),
    FnDatePickerModule,
    FnTableModule,
    FnDialogModule.forRoot(),
    FnMenuModule.forRoot(),
    StoreModule.forRoot({
      'FnMenuReducer': FnMenuReducer,
      'fnSession': fnSessionReducer
    }),
    EffectsModule.forRoot([FnSessionEffect, FnMenuEffects]),
    FnColorPickerModule
  ],
  providers: [HwApplication, DatePipe, LOGGING_ERROR_HANDLER_PROVIDERS],
  bootstrap: [AppComponent],
  entryComponents: [AppHomeComponent]
})
export class AppModule {
}
