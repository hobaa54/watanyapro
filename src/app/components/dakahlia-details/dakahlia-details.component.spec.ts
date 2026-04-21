import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DakahliaDetailsComponent } from './dakahlia-details.component';

describe('DakahliaDetailsComponent', () => {
  let component: DakahliaDetailsComponent;
  let fixture: ComponentFixture<DakahliaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DakahliaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DakahliaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
