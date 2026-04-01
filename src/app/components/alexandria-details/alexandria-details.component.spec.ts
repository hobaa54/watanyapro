import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexandriaDetailsComponent } from './alexandria-details.component';

describe('AlexandriaDetailsComponent', () => {
  let component: AlexandriaDetailsComponent;
  let fixture: ComponentFixture<AlexandriaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlexandriaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlexandriaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
