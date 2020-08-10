import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputframeinfoComponent } from '../inputframeinfo/inputframeinfo.component';
import { CommunicatorService } from '../shared/services/communicator.service';
import { FrameService, Frame } from '../shared/services/frame.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-framecreator',
  templateUrl: './framecreator.component.html',
  styleUrls: ['./framecreator.component.css']
})
export class FramecreatorComponent implements OnInit {

  frames$: Observable<Frame[]>;
  frames: Frame[];
  selected:string=null;
  constructor(public dialog: MatDialog,private commService: CommunicatorService,private frameService: FrameService) { }

  ngOnInit(): void {
    this.frames$ = this.frameService.frames;
    this.frameService.loadAll();
    this.frames$.subscribe(c=>{
      this.frames = c;
    });
  }

  AddFrame(){
    const dialogRef = this.dialog.open(InputframeinfoComponent);
    dialogRef.afterClosed().subscribe(result =>{
      if(result != undefined){
        this.frameService.create({
          id: result.frameId,
          name: result.frameName,
          description: result.frameDescription
        })
      }
    })
  }

  select(id):void{
    if(this.selected != id){
      this.selected=id;
    }
    else{
      this.selected=undefined;
    }
    this.commService.emitData(this.selected);
  }

  isSelected(id):boolean{
    if(id == this.selected){
      return true;
    }
    return false;
  }

}
