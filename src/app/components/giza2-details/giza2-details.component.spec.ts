import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giza2DetailsComponent } from './giza2-details.component';

describe('Giza2DetailsComponent', () => {
  let component: Giza2DetailsComponent;
  let fixture: ComponentFixture<Giza2DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Giza2DetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Giza2DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
