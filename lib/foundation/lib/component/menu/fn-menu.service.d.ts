import { Subject, BehaviorSubject } from 'rxjs';
export declare class FnMenuService {
    menuItemClick$: Subject<any>;
    menuOpen$: BehaviorSubject<boolean>;
    navMenuClick(menuId: string): void;
    onMenuItemClick(menuId: string): void;
    getMenuItemClick$(): Subject<any>;
}
