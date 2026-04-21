import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsuotNewDetailsComponent } from './asuot-new-details.component';

describe('AsuotNewDetailsComponent', () => {
  let component: AsuotNewDetailsComponent;
  let fixture: ComponentFixture<AsuotNewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsuotNewDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsuotNewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
