import { FnApplicationHelper } from '../services/fn-application.helper';
export declare class FnExceptionService {
    constructor();
    private fnAppHelper;
    setFnApplicationHelper(fnAplicationHelper: FnApplicationHelper): void;
    getFnApplicationHelper(): FnApplicationHelper;
    logException(exception: any, logToConsole?: boolean): void;
}
