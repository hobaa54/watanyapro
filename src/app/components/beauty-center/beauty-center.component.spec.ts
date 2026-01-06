import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyCenterComponent } from './beauty-center.component';

describe('BeautyCenterComponent', () => {
  let component: BeautyCenterComponent;
  let fixture: ComponentFixture<BeautyCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeautyCenterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeautyCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
