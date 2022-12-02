import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-may-tinh',
  templateUrl: './may-tinh.component.html',
  styleUrls: ['./may-tinh.component.css']
})
export class MayTinhComponent implements OnInit {
  public so1: number = 0;
  public so2: number = 0;
  public pt: string = "";
  public kq: string = "";

  public tinh(){
    switch (this.pt) {
      case "+":
        this.kq = "Tổng 2 số là: " + (this.so1 + this.so2);
        break;
      case "-":
        this.kq = "Hiệu 2 số là: " + (this.so1 - this.so2);
        break;
      case "*":
        this.kq = "Tích 2 số là: " + (this.so1 * this.so2);
        break;
      case "/":
        if (this.so2 == 0) this.kq = "Không thể thực hiện phép chia cho 0. ";
        else this.kq = "Thương của phép chia là: " + (this.so1 / this.so2);
        break;
      default:
        this.kq = "Chưa chọn phép tính. "
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
