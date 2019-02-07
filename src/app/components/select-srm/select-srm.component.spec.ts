import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSrmComponent } from './select-srm.component';

describe('SelectSrmComponent', () => {
  let component: SelectSrmComponent;
  let fixture: ComponentFixture<SelectSrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
