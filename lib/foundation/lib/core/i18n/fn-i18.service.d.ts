export declare class FnI18nService {
    private i18nDataMap;
    setI18Data(_i18nDataMap: Map<string, string>): void;
    translate(key: string): string;
    errorMessage(fieldKey: string, validatorType: string): string;
}
