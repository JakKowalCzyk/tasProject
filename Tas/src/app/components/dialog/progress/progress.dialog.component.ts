import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.dialog.component.html',
  styleUrls: ['./progress.dialog.component.scss'],
})
export class ProgressDialogComponent {


  constructor(public dialogRef: MatDialogRef<ProgressDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }


}
