import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MayTinhComponent } from './Tuan8/may-tinh/may-tinh.component';
import { FormsModule } from '@angular/forms';
import { XepLoaiComponent } from './Tuan8/xep-loai/xep-loai.component';
import { TienThuongComponent } from './Tuan8/tien-thuong/tien-thuong.component';

@NgModule({
  declarations: [
    AppComponent,
    MayTinhComponent,
    XepLoaiComponent,
    TienThuongComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
