import { FNExceptionJson } from './fn-exception-json';
export declare class FNErrorLogSvcs {
    sendExceptionToServer: boolean;
    logError(error: any): void;
    sendToConsole(error: any): void;
    sendToServer(fnExpJson: FNExceptionJson): void;
}
