import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menubtl1Component } from './menubtl1.component';

describe('Menubtl1Component', () => {
  let component: Menubtl1Component;
  let fixture: ComponentFixture<Menubtl1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menubtl1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menubtl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
