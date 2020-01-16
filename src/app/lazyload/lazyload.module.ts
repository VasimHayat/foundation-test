import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadRoutingModule } from './lazyload-routing.module';
import { LazyLoadComponent } from './lazyload/lazyload.component';
import { FnI18nService, FnTranslateModule } from 'foundation';
export const MODULE_LANGUAGE_CODE = 'LAZYLOAD';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadRoutingModule,
    FnTranslateModule
  ],
  declarations: [LazyLoadComponent],
})
export class LazyLoadModule {
  constructor(private transLoader: FnI18nService) {
    const lang='en';  
    let path=`./assets/lazyload/${lang}.json`;
    this.transLoader.languageSelected.subscribe((language) => {
      console.log(lang);
      path=`./assets/lazyload/${language}.json`;
      this.transLoader.loadTranslations(language,path);
    });
    this.transLoader.loadTranslations(lang,path);
  }
}
