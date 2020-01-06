import { Actions } from "@ngrx/effects";
import * as fnSessionAction from '../action/fn-seesion.action';
export declare class FnSessionEffect {
    private action$;
    constructor(action$: Actions);
    LoadSession$: import("rxjs").Observable<fnSessionAction.LoadSessionSuccess>;
}
