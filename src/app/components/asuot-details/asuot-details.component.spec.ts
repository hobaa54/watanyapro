import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsuotDetailsComponent } from './asuot-details.component';

describe('AsuotDetailsComponent', () => {
  let component: AsuotDetailsComponent;
  let fixture: ComponentFixture<AsuotDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsuotDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsuotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
