import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface Frame {
  id?: any;
  name?: string;
  description?: string;
}


@Injectable({
  providedIn: 'root'
})
export class FrameService {
  private _frames = new BehaviorSubject<Frame[]>([]);
  private dataStore: {frames: Frame[]} = { frames: []};
  readonly frames = this._frames.asObservable();


  constructor() { }

  
  loadAll(){
    this._frames.next(Object.assign({}, this.dataStore).frames);
  }

  load(id: any){
    this._frames.next(Object.assign({}, this.dataStore).frames);
  }

  create(frame: Frame){
    this.dataStore.frames.push(frame);
    this._frames.next(Object.assign({}, this.dataStore).frames);
  }

  update(updatedFrame: Frame){
    this.dataStore.frames.forEach((frame, index)=>{
      if(frame.id === updatedFrame.id){
        this.dataStore.frames[index] = updatedFrame;
      }
    });
    this._frames.next(Object.assign({}, this.dataStore).frames);
  }

  remove(frameId: any ){
    this.dataStore.frames.forEach((f, i)=>{
      if(f.id === frameId){
        this.dataStore.frames.splice(i, 1);
      }
    });
    this._frames.next(Object.assign({}, this.dataStore).frames);
  }
  
  getFrames(storyboardId:string):any{

  }
}
