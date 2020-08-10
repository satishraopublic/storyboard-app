import { Component, OnInit, Inject } from '@angular/core';
import {  MatDialog, MatDialogModule, MatDialogActions, MatDialogContent, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-inputframeinfo',
  templateUrl: './inputframeinfo.component.html',
  styleUrls: ['./inputframeinfo.component.css']
})
export class InputframeinfoComponent implements OnInit {

    form: FormGroup;
    id:string;
    name:string;
    description:string;
  
    constructor(private fb: FormBuilder,
      private dialogRef: MatDialogRef<InputframeinfoComponent>,
      @Inject(MAT_DIALOG_DATA) data) { 

      }

  ngOnInit(): void {
    this.form = this.fb.group({
        frameId: [this.id, []],
        frameName: [this.name, []],
        frameDescription: [this.description, []]
    });
  }

  accept(): void{
    this.dialogRef.close(this.form.value);
  }

  cancel(): void{
    this.dialogRef.close();
  }
}
