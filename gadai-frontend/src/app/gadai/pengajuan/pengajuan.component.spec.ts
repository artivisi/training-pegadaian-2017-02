import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengajuanComponent } from './pengajuan.component';

describe('PengajuanComponent', () => {
  let component: PengajuanComponent;
  let fixture: ComponentFixture<PengajuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengajuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengajuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
