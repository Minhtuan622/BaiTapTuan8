import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-kh',
  templateUrl: './danh-sach-kh.component.html',
  styleUrls: ['./danh-sach-kh.component.css'],
})
export class DanhSachKHComponent implements OnInit {
  public Customerlist: any[] = [
    {makh: 'Kh001', tenkh: 'Nguyễn Xuân Cường', phai: 0, dienthoai: '028987126'},
    {makh: 'Kh002', tenkh: 'Phạm Thị Nhung', phai: 1, dienthoai: '028835102'},
    {makh: 'Kh003', tenkh: 'Võ Văn Long', phai: 0, dienthoai: '028987412'},
    {makh: 'Kh004', tenkh: 'Thái Đại Nhân', phai: 0, dienthoai: '028741261'},
    {makh: 'Kh005', tenkh: 'Nguyễn Thị Thành', phai: 1, dienthoai: '028261010'},
    {makh: 'Kh006', tenkh: 'Nguyễn Anh Tuấn', phai: 0, dienthoai: '028875315'},
    {makh: 'Kh001', tenkh: 'Trần Thị Linh', phai: 0, dienthoai: '028874026'}
  ];

  constructor() {}

  ngOnInit(): void {}
}
