import { PipeTransform, Renderer2 } from '@angular/core';
import { FnI18nService } from './fn-i18.service';
export declare class FnTranslatePipe implements PipeTransform {
    private i18n;
    private render;
    constructor(i18n: FnI18nService, render: Renderer2);
    transform(key: string): any;
}
