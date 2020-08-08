import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-frame-image-viewer',
  templateUrl: './frame-image-viewer.component.html',
  styleUrls: ['./frame-image-viewer.component.css']
})
export class FrameImageViewerComponent implements OnInit {
  imageURL: string;
  uploadForm: FormGroup;

  constructor(public fb: FormBuilder) { 
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    })
  }

  ngOnInit(): void {
  }

  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      avatar: file
    });
    this.uploadForm.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  // Submit Form
  submit() {
    alert(this.uploadForm.value)
  }
}
