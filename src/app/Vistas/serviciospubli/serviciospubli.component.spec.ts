import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciospubliComponent } from './serviciospubli.component';

describe('ServiciospubliComponent', () => {
  let component: ServiciospubliComponent;
  let fixture: ComponentFixture<ServiciospubliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciospubliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciospubliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
