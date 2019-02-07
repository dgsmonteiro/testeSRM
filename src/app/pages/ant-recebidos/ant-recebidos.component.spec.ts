import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntRecebidosComponent } from './ant-recebidos.component';

describe('AntRecebidosComponent', () => {
  let component: AntRecebidosComponent;
  let fixture: ComponentFixture<AntRecebidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntRecebidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntRecebidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
