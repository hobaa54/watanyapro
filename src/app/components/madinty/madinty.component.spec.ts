import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadintyComponent } from './madinty.component';

describe('MadintyComponent', () => {
  let component: MadintyComponent;
  let fixture: ComponentFixture<MadintyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadintyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MadintyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
