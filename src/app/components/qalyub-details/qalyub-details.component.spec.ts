import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QalyubDetailsComponent } from './qalyub-details.component';

describe('QalyubDetailsComponent', () => {
  let component: QalyubDetailsComponent;
  let fixture: ComponentFixture<QalyubDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QalyubDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QalyubDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
