import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Frame, FrameService } from '../shared/services/frame.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-frame-meta-data',
  templateUrl: './frame-meta-data.component.html',
  styleUrls: ['./frame-meta-data.component.css']
})
export class FrameMetaDataComponent implements OnInit {

  form: FormGroup;
  name:string;
  description:string;

  @Input() 
  get currentFrame(): Frame { return this._currentFrame; }
  set currentFrame(currentFrame: Frame){
    this._currentFrame = currentFrame;
  }
  _currentFrame: Frame;

  constructor(private fb: FormBuilder, private fs: FrameService) { 

    }

ngOnInit(): void {
  this.form = this.fb.group({
      name: this.currentFrame.name,
      description: this.currentFrame.description
  });
}

accept():void{
  if(this._currentFrame.id != null && this._currentFrame.id != undefined){
    this.fs.update(this._currentFrame);
  }
}

cancel():void{

}

}
