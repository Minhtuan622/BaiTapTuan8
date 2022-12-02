import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachKHComponent } from './danh-sach-kh.component';

describe('DanhSachKHComponent', () => {
  let component: DanhSachKHComponent;
  let fixture: ComponentFixture<DanhSachKHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DanhSachKHComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DanhSachKHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
