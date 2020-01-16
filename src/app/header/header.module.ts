import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FnTranslateModule, FnI18nService } from 'foundation';
export const MODULE_LANGUAGE_CODE = 'HEADER';

@NgModule({
  declarations: [HeaderComponentComponent],
  imports: [
    CommonModule,
    FnTranslateModule.forRoot(),
  ],
  exports: [
    HeaderComponentComponent
  ]
})
export class HeaderModule {
  constructor(private translate: FnI18nService) {
    let path="./assets/header/en.json";
    this.translate.languageSelected.subscribe((language) => {
      path =  `./assets/header/${language}.json`;
      this.translate.loadTranslations(language,path);
    });
    this.translate.loadTranslations("en",path);
  }
}