import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WORKHOURSComponent } from './workhours.component';

describe('WORKHOURSComponent', () => {
  let component: WORKHOURSComponent;
  let fixture: ComponentFixture<WORKHOURSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WORKHOURSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WORKHOURSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
