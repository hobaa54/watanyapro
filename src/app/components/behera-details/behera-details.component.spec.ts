import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheraDetailsComponent } from './behera-details.component';

describe('BeheraDetailsComponent', () => {
  let component: BeheraDetailsComponent;
  let fixture: ComponentFixture<BeheraDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeheraDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeheraDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
