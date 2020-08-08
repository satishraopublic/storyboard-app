import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame-viewer',
  templateUrl: './frame-viewer.component.html',
  styleUrls: ['./frame-viewer.component.css']
})
export class FrameViewerComponent implements OnInit {
  imageURL: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  showPreview(file) {
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  onFilesDropped(e){
    let files = e;
    this.showPreview(files[0]);
  }

}
