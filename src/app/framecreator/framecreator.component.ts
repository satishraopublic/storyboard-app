import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputframeinfoComponent } from '../inputframeinfo/inputframeinfo.component';

@Component({
  selector: 'app-framecreator',
  templateUrl: './framecreator.component.html',
  styleUrls: ['./framecreator.component.css']
})
export class FramecreatorComponent implements OnInit {

  frames: Array<any> = [];
  selected:string=null;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  AddFrame(){

    const dialogRef = this.dialog.open(InputframeinfoComponent);
    dialogRef.afterClosed().subscribe(result =>{
      if(result != undefined){
        this.frames.push({
          id: result.frameId,
          description:result.frameDescription
        });
      }
    })
  }

  select(id):void{
    this.selected=id;
  }

  isSelected(id):boolean{
    if(id == this.selected){
      return true;
    }
    return false;
  }

}
