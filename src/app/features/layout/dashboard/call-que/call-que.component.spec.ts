import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallQueComponent } from './call-que.component';

describe('CallQueComponent', () => {
  let component: CallQueComponent;
  let fixture: ComponentFixture<CallQueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallQueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
