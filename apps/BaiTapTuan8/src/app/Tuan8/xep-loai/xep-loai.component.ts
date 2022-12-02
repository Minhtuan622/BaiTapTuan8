import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xep-loai',
  templateUrl: './xep-loai.component.html',
  styleUrls: ['./xep-loai.component.css'],
})
export class XepLoaiComponent implements OnInit {
  public hk1: number = 0;
  public hk2: number = 0;
  public cn: number = 0;
  public xl: string = "";

  public xeploai(){
    this.cn = (this.hk1 + (this.hk2 * 2)) / 3;
    if (this.cn < 4) this.xl = "Học lại";
    else if (this.cn < 6) this.xl = "Trung bình";
    else if (this.cn < 8) this.xl = "Khá";
    else this.xl = "Giỏi"
  }
  constructor() {}

  ngOnInit(): void {}
}
