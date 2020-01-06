import { TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { FnConfirmModalComponent } from './fn-confirm-modal.component';
import { DialogData } from '../fn-dialog.model';
import { ComponentType } from '@angular/cdk/portal';
export declare class FnModalService {
    private dialog;
    constructor(dialog: MatDialog);
    openConfirmModal(dialogData?: DialogData): MatDialogRef<FnConfirmModalComponent, any>;
    openCustomModal(componentOrTemplateRef: ComponentType<any> | TemplateRef<any>, config?: MatDialogConfig): MatDialogRef<any, any>;
    openModal(componentOrTemplateRef: ComponentType<any> | TemplateRef<any>, config?: MatDialogConfig): MatDialogRef<any, any>;
}
