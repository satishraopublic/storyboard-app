import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramecreatorComponent } from './framecreator.component';

describe('FramecreatorComponent', () => {
  let component: FramecreatorComponent;
  let fixture: ComponentFixture<FramecreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramecreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramecreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
