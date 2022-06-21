import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/Dialogs/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class AlertserviceService {
  constructor(private matDialog: MatDialog) {}
  public error(message: string): MatDialogRef<ErrorDialogComponent> {
    return this.matDialog.open(ErrorDialogComponent, {
      data: {
        message,
      },
    });
  }
}
