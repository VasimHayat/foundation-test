import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FnInputModule, FnDatePickerModule, FnCoreModule, FnTranslateModule, FnI18nService } from 'foundation';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from './header/header.module';
import { LazyLoadModule } from './lazyload/lazyload.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./lazyload/lazyload.module').then(m => m.LazyLoadModule)
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    FnCoreModule.forRoot(),
    FnInputModule.forRoot(),
    FnDatePickerModule,
    FnTranslateModule.forRoot(),
    RouterModule.forRoot(routes),
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{
    constructor(private transService:FnI18nService){
       transService.loadTranslations("en");
       transService.languageSelected.subscribe((lang)=>{
          transService.loadTranslations(lang);
        });
    }
 }
