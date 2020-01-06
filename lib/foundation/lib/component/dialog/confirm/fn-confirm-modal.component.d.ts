import { MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../fn-dialog.model';
export declare class FnConfirmModalComponent {
    dialogRef: MatDialogRef<FnConfirmModalComponent>;
    dialogData: DialogData;
    constructor(dialogRef: MatDialogRef<FnConfirmModalComponent>, dialogData: DialogData);
    close(isOkey?: boolean): void;
}
