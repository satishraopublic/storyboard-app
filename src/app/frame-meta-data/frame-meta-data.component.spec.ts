import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameMetaDataComponent } from './frame-meta-data.component';

describe('FrameMetaDataComponent', () => {
  let component: FrameMetaDataComponent;
  let fixture: ComponentFixture<FrameMetaDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameMetaDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
