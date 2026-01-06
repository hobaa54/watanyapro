import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AUCSTComponent } from './auc-st.component';

describe('AUCSTComponent', () => {
  let component: AUCSTComponent;
  let fixture: ComponentFixture<AUCSTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AUCSTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AUCSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
