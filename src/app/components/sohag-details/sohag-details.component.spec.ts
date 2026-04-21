import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SohagDetailsComponent } from './sohag-details.component';

describe('SohagDetailsComponent', () => {
  let component: SohagDetailsComponent;
  let fixture: ComponentFixture<SohagDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SohagDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SohagDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
