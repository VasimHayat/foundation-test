import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FnMenuItemState, FnSessionState, getCurrentSession, FnSessionStorage, LoadMenuData, getMenuStatus, FnModalService } from 'foundation';


@Component({
    templateUrl: 'app.landing.component.html',
    styles: [
        `
         .content-wrapper {
             margin-left:48px;
             width: calc(100% - 50px);
          }
        `
    ]
})

export class AppLandingComponent {
    isMenuLoaded: boolean;
    constructor(private store: Store<FnSessionState>, private menuStore: Store<FnMenuItemState>,private dialogSvcs: FnModalService) {
        this.store.pipe(
            select(getCurrentSession)).subscribe(
                _fnSession => {
                    //console.log(_fnSession);
                    //console.log(FnSessionStorage.getFnSession());
                }
            );

        this.menuStore.dispatch(new LoadMenuData('Load'));
        this.menuStore.pipe(
            select(getMenuStatus)
        ).subscribe(
            menuStatus => {
                // console.log(menuStatus);
                this.isMenuLoaded = menuStatus;
            },
            error => {
                // console.error(error)
            }
        );
        // this.menuStore.pipe(
        //     debounceTime(10000),
        //     select(getMenuItemById, {id: 'Menu_Home'})).subscribe(
        //     menuData => {
        //         console.log(menuData);
        //     }
        // );

        // this.menuStore.pipe(select(getMenuItemMap)).subscribe(
        //     resp => {
        //         console.log('RES');
        //         console.log(resp);
        //     }
        // );

        // this.menuStore.pipe(
        //     select(LoadMenuData)).subscribe(
        //     _fnSession => {
        //         console.log(_fnSession);
        //         console.log(FnSessionStorage.getFnSession());
        //     }
        // );
    }
    openCngMdl() {
        //this.dialogSvcs.openModal(AppHomeComponent, { data: { id: 'name' }, hasBackdrop: true });
        this.dialogSvcs.openConfirmModal();
      }
}
