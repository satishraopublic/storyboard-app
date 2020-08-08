import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-image-drop',
  templateUrl: './file-image-drop.component.html',
  styleUrls: ['./file-image-drop.component.css']
})
export class FileImageDropComponent implements OnInit {
  files: any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  onFilesDropped($event){
    this.prepareFilesList($event);
  }

  fileBrowserHandler(files){
    this.prepareFilesList(files);
  }

  deleteFile(index: number){
    this.files.splice(index,1);
  }

  prepareFilesList(files: Array<any>){
    for(const item of files){
      alert(item.name);
      this.files.push(item);
    }
  }

}
