import { FnUiFieldMetaDataService } from './service/fn-ui-field-metadata.service';
export * from './service/fn-ui-field-metadata.service';
export declare class FnInputModule {
    static forRoot(): {
        ngModule: typeof FnInputModule;
        providers: (typeof FnUiFieldMetaDataService)[];
    };
}
