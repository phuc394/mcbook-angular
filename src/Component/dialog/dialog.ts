import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  imports: [
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss'
})
export class Dialog {
  data = inject(MAT_DIALOG_DATA);
  constructor() {
    console.log(this.data);
  }
}
