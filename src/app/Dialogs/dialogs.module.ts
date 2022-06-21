import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatDialogModule],
})
export class DialogsModule {}
