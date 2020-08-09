import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Frame } from '../shared/services/frame.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-frame-meta-data',
  templateUrl: './frame-meta-data.component.html',
  styleUrls: ['./frame-meta-data.component.css']
})
export class FrameMetaDataComponent implements OnInit {

  form: FormGroup;
  name:string;
  description:string;

  @Input() currentFrame: Observable<Frame>;

  frame: Frame;

  constructor(private fb: FormBuilder) { 

    }

ngOnInit(): void {

  this.currentFrame.subscribe(c=>{
    this.frame = c;
  })
  this.form = this.fb.group({
      name: [this.name, [this.frame.name]],
      description: [this.description, [this.frame.id]]
  });
}
}
