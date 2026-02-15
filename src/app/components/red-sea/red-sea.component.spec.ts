import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedSeaComponent } from './red-sea.component';

describe('RedSeaComponent', () => {
  let component: RedSeaComponent;
  let fixture: ComponentFixture<RedSeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedSeaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedSeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
