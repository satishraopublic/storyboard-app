import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameViewerComponent } from './frame-viewer.component';

describe('FrameViewerComponent', () => {
  let component: FrameViewerComponent;
  let fixture: ComponentFixture<FrameViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
