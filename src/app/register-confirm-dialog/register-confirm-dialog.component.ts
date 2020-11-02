import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-confirm-dialog',
  templateUrl: './register-confirm-dialog.component.html',
  styleUrls: ['./register-confirm-dialog.component.css']
})
export class RegisterConfirmDialogComponent implements OnInit {

  spot:any;

  constructor( public dialogRef: MatDialogRef<RegisterConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    this.spot=this.data;

  }

  closeDialog()
  {
    this.dialogRef.close();
  }

}
