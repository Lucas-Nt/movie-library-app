import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-base',
  templateUrl: './dialog-base.component.html',
  styleUrls: ['./dialog-base.component.scss']
})
export class DialogBaseComponent implements OnInit {

  public dialogData: any; // TODO: fix type;

  constructor(private dialogRef: MatDialogRef<DialogBaseComponent>,
              @Inject(MAT_DIALOG_DATA)
              private data: any) { }

  public ngOnInit(): void {
    this.dialogData = this.data;
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

}
