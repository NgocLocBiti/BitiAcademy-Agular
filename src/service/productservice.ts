import { Injectable } from '@angular/core';
import { Product } from 'src/domain/product';

@Injectable()
export class ProductService {

  getProductsData(): Promise<Product[]> {
    return Promise.resolve([
      {
        name: 'Khóa học IT',
        image: 'https://abclogistic.site/bitiacademy/wp-content/uploads/2023/10/reserve-fund-understudy-1.png',
      },
      {
        name: 'Khóa tiếng Anh doanh nghiệp',
        image: 'https://abclogistic.site/bitiacademy/wp-content/uploads/2023/10/reserve-fund-understudy-1-1.png',
      },
      {
        name: 'Khóa kỹ năng doanh nghiệp',
        image: 'https://abclogistic.site/bitiacademy/wp-content/uploads/2023/10/reserve-fund-understudy-1-2.png',
      },
      {
        name: 'Khóa marketing tăng doanh thu',
        image: 'https://abclogistic.site/bitiacademy/wp-content/uploads/2023/10/reserve-fund-understudy-1-3.png',
      },
      {
        name: 'Khóa tiếng Pháp giao tiếp',
        image: 'https://abclogistic.site/bitiacademy/wp-content/uploads/2023/10/reserve-fund-understudy-1-4.png',
      },
      {
        name: 'Khóa học khác',
        image: 'https://abclogistic.site/bitiacademy/wp-content/uploads/2023/10/reserve-fund-understudy-1-5.png',
      },
    ]);
  }

  getProduct(): Promise<Product[]> {
    return Promise.resolve([
      {
        name: 'Khóa học IT',
        image: 'https://abclogistic.site/bitiacademy/wp-content/uploads/2023/10/reserve-fund-understudy-1.png',
      },
      {
        name: 'Khóa tiếng Anh doanh nghiệp',
        image: 'https://abclogistic.site/bitiacademy/wp-content/uploads/2023/10/reserve-fund-understudy-1-1.png',
      },
      {
        name: 'Khóa kỹ năng doanh nghiệp',
        image: 'https://abclogistic.site/bitiacademy/wp-content/uploads/2023/10/reserve-fund-understudy-1-2.png',
      },
      {
        name: 'Khóa marketing tăng doanh thu',
        image: 'https://abclogistic.site/bitiacademy/wp-content/uploads/2023/10/reserve-fund-understudy-1-3.png',
      },
      {
        name: 'Khóa tiếng Pháp giao tiếp',
        image: 'https://abclogistic.site/bitiacademy/wp-content/uploads/2023/10/reserve-fund-understudy-1-4.png',
      },
      {
        name: 'Khóa học khác',
        image: 'https://abclogistic.site/bitiacademy/wp-content/uploads/2023/10/reserve-fund-understudy-1-5.png',
      },
    ]);
  }

  getProducts(): Promise<Product[]> {
    return Promise.resolve(this.getProductsData());
  }
}
