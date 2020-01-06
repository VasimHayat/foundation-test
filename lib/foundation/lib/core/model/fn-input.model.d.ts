export interface UIFieldTypeId {
    iid: string;
    isNumber: boolean;
}
export declare class FnInputModel {
    isRequired: boolean;
    minLength: number;
    labelPosition: string;
    typeID: UIFieldTypeId;
    id: string;
    isDisabled: boolean;
    key: string;
    maxLength: number;
    hideLabel: boolean;
    pattern?: string;
}
