import { FnInputModel } from '../../../core/model/fn-input.model';
export declare class FnUiFieldMetaDataService {
    uiFieldMap: object;
    getFieldForId(uiFieldKey: string): any;
    setFieldForId(uiFieldKey: string, uiFieldVal: FnInputModel): void;
    setFieldMap(uiFieldMap: object): void;
    getFieldMap(): object;
}
