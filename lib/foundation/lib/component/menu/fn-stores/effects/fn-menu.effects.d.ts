import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { LoadMenuDataSucess, LoadMenuDataError } from '../actions/fn-menu.action';
import { FnMenuStoreService } from '../service/fn-menu.store.service';
export declare class FnMenuEffects {
    private actions$;
    private fnMenuSvcs;
    constructor(actions$: Actions, fnMenuSvcs: FnMenuStoreService);
    loadMenuData$: Observable<LoadMenuDataSucess | LoadMenuDataError>;
}
