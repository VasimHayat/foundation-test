import { FnSession } from './state/fn.session.model';
export declare class FnSessionStorage {
    static setFnSession(fnSession: FnSession): void;
    static getFnSession(): any;
    static clearFnSession(fnSession: FnSession): void;
}
