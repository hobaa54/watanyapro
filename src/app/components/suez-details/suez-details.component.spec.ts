import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuezDetailsComponent } from './suez-details.component';

describe('SuezDetailsComponent', () => {
  let component: SuezDetailsComponent;
  let fixture: ComponentFixture<SuezDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuezDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuezDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
