import { FnMenuItemState } from '../fn-stores/models/fn-menu.state';
import { FnMenuService } from '../fn-menu.service';
export declare class FnMenuItemComponent {
    private fnMenuService;
    renderMenuItem: FnMenuItemState;
    fnMenuItem: FnMenuItemState;
    constructor(fnMenuService: FnMenuService);
    menuClickHandler(menuItem: FnMenuItemState): void;
}
