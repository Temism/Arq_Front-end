import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServiciosEspComponent } from './lista-servicios-esp.component';

describe('ListaServiciosEspComponent', () => {
  let component: ListaServiciosEspComponent;
  let fixture: ComponentFixture<ListaServiciosEspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaServiciosEspComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaServiciosEspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
