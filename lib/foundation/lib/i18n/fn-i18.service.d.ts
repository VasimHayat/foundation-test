import { Subject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
export declare type SUPPORTED_LANGUAGES = 'en' | 'de' | 'fr';
export declare class FnI18nService {
    private http;
    private translateService;
    private i18nDataMap;
    private selectedLang;
    languageSelected: Subject<SUPPORTED_LANGUAGES>;
    constructor(http: HttpClient, translateService: TranslateService);
    setLanguage(lang: SUPPORTED_LANGUAGES): void;
    translate(key: string): string;
    get(key: string): Observable<string>;
    loadTranslations(lang: SUPPORTED_LANGUAGES, path?: string): void;
    loadTranslateMessage(lang: SUPPORTED_LANGUAGES, messageJson: object): void;
    errorMessage(fieldKey: string, validatorType: string): string;
}
