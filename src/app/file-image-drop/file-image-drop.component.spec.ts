import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileImageDropComponent } from './file-image-drop.component';

describe('FileImageDropComponent', () => {
  let component: FileImageDropComponent;
  let fixture: ComponentFixture<FileImageDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileImageDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileImageDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
