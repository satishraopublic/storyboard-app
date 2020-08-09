import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Cropper from 'cropperjs';
import { CropperComponent } from 'angular-cropperjs';
import { AngularCropperjsModule } from 'angular-cropperjs';

@Component({
  selector: 'app-frame-viewer',
  templateUrl: './frame-viewer.component.html',
  styleUrls: ['./frame-viewer.component.css']
})
export class FrameViewerComponent implements OnInit, AfterViewInit {
  imageUrl: string;
  cropper: Cropper;
  config:any = {
    aspectRatio: 19 / 9, viewMode:3
  };
  @ViewChild("imageViewer", {read: CropperComponent}) public imgVwr: CropperComponent;
  
  constructor() { 
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  showPreview(file) {
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
  onFilesDropped(e){
    let files = e;
    this.showPreview(files[0]);
  }

  ready():void{
    var newImgUrl = this.imgVwr.cropper.getCroppedCanvas().toDataURL("image/png");
    this.imgVwr.imageUrl = newImgUrl;
  }

}
