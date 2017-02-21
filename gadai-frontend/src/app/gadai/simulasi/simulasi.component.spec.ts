import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulasiComponent } from './simulasi.component';

describe('SimulasiComponent', () => {
  let component: SimulasiComponent;
  let fixture: ComponentFixture<SimulasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
