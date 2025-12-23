import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tagamo35Component } from './tagamo3-5.component';

describe('Tagamo35Component', () => {
  let component: Tagamo35Component;
  let fixture: ComponentFixture<Tagamo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tagamo35Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tagamo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
