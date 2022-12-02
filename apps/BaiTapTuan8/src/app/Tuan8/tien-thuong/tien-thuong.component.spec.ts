import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TienThuongComponent } from './tien-thuong.component';

describe('TienThuongComponent', () => {
  let component: TienThuongComponent;
  let fixture: ComponentFixture<TienThuongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TienThuongComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TienThuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
