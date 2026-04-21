import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortsaidDetailsComponent } from './portsaid-details.component';

describe('PortsaidDetailsComponent', () => {
  let component: PortsaidDetailsComponent;
  let fixture: ComponentFixture<PortsaidDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortsaidDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortsaidDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
