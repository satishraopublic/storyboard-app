import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputframeinfoComponent } from './inputframeinfo.component';

describe('InputframeinfoComponent', () => {
  let component: InputframeinfoComponent;
  let fixture: ComponentFixture<InputframeinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputframeinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputframeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
