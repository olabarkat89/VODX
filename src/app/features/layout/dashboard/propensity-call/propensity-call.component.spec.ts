import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropensityCallComponent } from './propensity-call.component';

describe('PropensityCallComponent', () => {
  let component: PropensityCallComponent;
  let fixture: ComponentFixture<PropensityCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropensityCallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropensityCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
