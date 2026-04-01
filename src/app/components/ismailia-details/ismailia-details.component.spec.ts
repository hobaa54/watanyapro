import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsmailiaDetailsComponent } from './ismailia-details.component';

describe('IsmailiaDetailsComponent', () => {
  let component: IsmailiaDetailsComponent;
  let fixture: ComponentFixture<IsmailiaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsmailiaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IsmailiaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
