import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AswanDetailsComponent } from './aswan-details.component';

describe('AswanDetailsComponent', () => {
  let component: AswanDetailsComponent;
  let fixture: ComponentFixture<AswanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AswanDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AswanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
