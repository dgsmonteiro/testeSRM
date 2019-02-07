import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelGestaoComponent } from './painel-gestao.component';

describe('PainelGestaoComponent', () => {
  let component: PainelGestaoComponent;
  let fixture: ComponentFixture<PainelGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelGestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
