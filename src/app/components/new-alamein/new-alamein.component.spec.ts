import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAlameinComponent } from './new-alamein.component';

describe('NewAlameinComponent', () => {
  let component: NewAlameinComponent;
  let fixture: ComponentFixture<NewAlameinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAlameinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewAlameinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
