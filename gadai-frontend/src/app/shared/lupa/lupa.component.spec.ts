import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LupaComponent } from './lupa.component';

describe('LupaComponent', () => {
  let component: LupaComponent;
  let fixture: ComponentFixture<LupaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LupaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
