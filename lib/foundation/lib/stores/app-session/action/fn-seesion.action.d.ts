import { Action } from '@ngrx/store';
import { FnSession } from '../state/fn.session.model';
export declare enum FnSessionActionType {
    InitialzeCurrentSession = "[FnSession] initialize session",
    LoadSession = "[FnSession] Load Session",
    LoadSessionSuccess = "[FnSession] Load Success",
    LoadSessionError = "[FnSession] Load Error"
}
export declare class InitialzeCurrentSession implements Action {
    readonly type = FnSessionActionType.InitialzeCurrentSession;
}
export declare class LoadSessionSuccess implements Action {
    payLoad: FnSession;
    readonly type = FnSessionActionType.LoadSessionSuccess;
    constructor(payLoad: FnSession);
}
export declare class LoadSession implements Action {
    payLoad: FnSession;
    readonly type = FnSessionActionType.LoadSession;
    constructor(payLoad: FnSession);
}
export declare class LoadSessionError implements Action {
    error: string;
    readonly type = FnSessionActionType.LoadSessionError;
    constructor(error: string);
}
export declare type FnSessionActions = InitialzeCurrentSession | LoadSession | LoadSessionSuccess | LoadSessionError;
