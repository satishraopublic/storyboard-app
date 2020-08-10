import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from '../shared/services/communicator.service';
import { FrameService, Frame } from '../shared/services/frame.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-frameworker',
  templateUrl: './frameworker.component.html',
  styleUrls: ['./frameworker.component.css']
})
export class FrameworkerComponent implements OnInit {
isSelected:boolean=false;
selectedId: any;
currentFrame$: Observable<Frame>;
actualFrame: Frame;
  constructor(private commService: CommunicatorService, private frameService: FrameService) { }

  ngOnInit(): void {
    this.commService.subscriber$.subscribe(data => {
      if(data != undefined && data != null){
        this.isSelected=true;
        this.selectedId = data;
        this.currentFrame$  = this.frameService.frames.pipe(
          map(frames => frames.find(item => item.id === this.selectedId))
        );
    
        this.frameService.load(this.selectedId);
        this.currentFrame$.subscribe(c=>{
          this.actualFrame = c;
        })
      }
      else{
        this.isSelected = false;
      }
    })
  }

}
