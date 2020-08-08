import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameImageViewerComponent } from './frame-image-viewer.component';

describe('FrameImageViewerComponent', () => {
  let component: FrameImageViewerComponent;
  let fixture: ComponentFixture<FrameImageViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameImageViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
