import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VapComponent } from './vap.component';

describe('VapComponent', () => {
  let component: VapComponent;
  let fixture: ComponentFixture<VapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
