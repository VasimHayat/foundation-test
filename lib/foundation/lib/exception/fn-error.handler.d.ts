import { ErrorHandler } from '@angular/core';
import { FNErrorLogSvcs } from './fn-error.log.svcs';
export declare class FNErrorHandler implements ErrorHandler {
    protected errorLogService: FNErrorLogSvcs;
    constructor(errorLogService: FNErrorLogSvcs);
    handleError(error: any): void;
}
