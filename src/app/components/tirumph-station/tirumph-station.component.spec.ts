import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirumphStationComponent } from './tirumph-station.component';

describe('TirumphStationComponent', () => {
  let component: TirumphStationComponent;
  let fixture: ComponentFixture<TirumphStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TirumphStationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TirumphStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
