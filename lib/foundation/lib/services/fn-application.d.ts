import { FnApplicationHelper } from './fn-application.helper';
import { FnExceptionService } from '../exception/fn-exception.service';
import { FNExceptionJson } from '../exception/fn-exception-json';
export declare class FnApplication {
    private fnAppHelper;
    private fnExp;
    constructor(fnAppHelper: FnApplicationHelper, fnExp: FnExceptionService);
    sendExceptionToServer(exception: FNExceptionJson): void;
}
