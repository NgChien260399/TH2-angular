import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainbtl1Component } from './mainbtl1.component';

describe('Mainbtl1Component', () => {
  let component: Mainbtl1Component;
  let fixture: ComponentFixture<Mainbtl1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mainbtl1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainbtl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
