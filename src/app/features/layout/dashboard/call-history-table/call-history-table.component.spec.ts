import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallHistoryTableComponent } from './call-history-table.component';

describe('CallHistoryTableComponent', () => {
  let component: CallHistoryTableComponent;
  let fixture: ComponentFixture<CallHistoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallHistoryTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
