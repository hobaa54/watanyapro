import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabDetailsComponent } from './rehab-details.component';

describe('RehabDetailsComponent', () => {
  let component: RehabDetailsComponent;
  let fixture: ComponentFixture<RehabDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RehabDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RehabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
