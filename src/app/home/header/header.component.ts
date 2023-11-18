import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  public chao_mung = 'Chào mừng bạn đến với BITI Academy';
  public huong_dan_tai_khoan = 'Hướng dẫn tài khoản';

  ngOnInit() {
    this.items = [
      {
        label: 'Trang chủ',
      },
      {
        label: 'Giới thiệu',
      },
      {
        label: 'Khóa đào tạo',
      },
      {
        label: 'Tin tức & sự kiện',
        items: [
          {
            label: 'Về Biti Academy',
          },
          {
            label: 'Chia sẻ kiến thức',
          },
          {
            label: 'Lịch tuyển sinh',
          },
          {
            label: 'Sự kiện - Hội thảo',
          },
        ],
      },
      {
        label: 'Liên hệ',
      },
    ];
  }
}
