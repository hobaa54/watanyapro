import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrouhDetailsComponent } from './matrouh-details.component';

describe('MatrouhDetailsComponent', () => {
  let component: MatrouhDetailsComponent;
  let fixture: ComponentFixture<MatrouhDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrouhDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatrouhDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
