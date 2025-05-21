import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallValueComponent } from './call-value.component';

describe('CallValueComponent', () => {
  let component: CallValueComponent;
  let fixture: ComponentFixture<CallValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
