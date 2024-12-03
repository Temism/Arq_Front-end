import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EresProfesionalComponent } from './eres-profesional.component';

describe('EresProfesionalComponent', () => {
  let component: EresProfesionalComponent;
  let fixture: ComponentFixture<EresProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EresProfesionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EresProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
