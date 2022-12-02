import { Component, OnInit } from '@angular/core';

interface loai {
  id: string,
  name: string
}

@Component({
  selector: 'app-tien-thuong',
  templateUrl: './tien-thuong.component.html',
  styleUrls: ['./tien-thuong.component.css'],
})
export class TienThuongComponent implements OnInit {
  public luong: number = 0;
  public hesothuong: number = 0;
  public tienthuong: number = 0;
  public xeploai: string = "";
  public loai: loai[] = [
    {id: '0', name: 'Chọn Loại'},
    {id: 'A', name: 'Loại A'},
    {id: 'B', name: 'Loại B'},
    {id: 'C', name: 'Loại C'},
    {id: 'D', name: 'Loại D'}
  ];

  public chonLoai(event: any){
    this.xeploai = event.target.value;
    switch (this.xeploai) {
      case 'A':
        this.hesothuong = 2;
        break;
      case 'B':
        this.hesothuong = 1.8;
        break;
      case 'C':
        this.hesothuong = 1.2;
        break;
      case 'D':
        this.hesothuong = 0.8;
        break;
    }
    this.tienthuong = this.luong * this.hesothuong;
  }

  constructor() {}

  ngOnInit(): void {
  }
}
