import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavprofComponent } from './navprof.component';

describe('NavprofComponent', () => {
  let component: NavprofComponent;
  let fixture: ComponentFixture<NavprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavprofComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
