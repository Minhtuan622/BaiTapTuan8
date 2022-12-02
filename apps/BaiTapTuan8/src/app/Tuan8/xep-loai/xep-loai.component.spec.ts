import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XepLoaiComponent } from './xep-loai.component';

describe('XepLoaiComponent', () => {
  let component: XepLoaiComponent;
  let fixture: ComponentFixture<XepLoaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XepLoaiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(XepLoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
