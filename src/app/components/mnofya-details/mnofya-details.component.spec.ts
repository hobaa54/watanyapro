import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnofyaDetailsComponent } from './mnofya-details.component';

describe('MnofyaDetailsComponent', () => {
  let component: MnofyaDetailsComponent;
  let fixture: ComponentFixture<MnofyaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MnofyaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MnofyaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
