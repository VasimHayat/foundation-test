import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export declare class FnMenuStoreService {
    private http;
    constructor(http: HttpClient);
    private readonly MENU_ID_KEY;
    private readonly MENU_ARRAY_KEY;
    private readonly MENU_INFO_KEY;
    private readonly MENU_PARENT_ARRAY_KEY;
    getMenuMapOnId(rootMap: object, arrayObject: any[]): void;
    simpleMenuMapOnId(rootMap: object, arrayObject: any[], parentKey?: string): void;
    getMenuData(menuId: string): Observable<any>;
}
