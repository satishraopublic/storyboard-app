import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkerComponent } from './frameworker.component';

describe('FrameworkerComponent', () => {
  let component: FrameworkerComponent;
  let fixture: ComponentFixture<FrameworkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
