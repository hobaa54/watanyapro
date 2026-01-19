import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirHosbitalComponent } from './air-hosbital.component';

describe('AirHosbitalComponent', () => {
  let component: AirHosbitalComponent;
  let fixture: ComponentFixture<AirHosbitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirHosbitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirHosbitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
