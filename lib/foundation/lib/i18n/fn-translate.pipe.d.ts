import { ChangeDetectorRef } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
export declare class FnTranslatePipe extends TranslatePipe {
    private translateService;
    private changeDetectRef;
    constructor(translateService: TranslateService, changeDetectRef: ChangeDetectorRef);
    transform(value: string, ...args: any[]): any;
}
