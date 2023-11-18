import { Component } from '@angular/core';
import { Product } from 'src/domain/product';
import { ProductService } from 'src/service/productservice';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss'],
})
export class Section1Component {
  public tieu_de = 'Chương trình đào tạo';
  public noi_dung =
    'Các chương trình đào tạo dài hạn đón đầu các xu thế mới nhất về công nghệ và đáp ứng nhu cầu thực tiễn của doanh nghiệp. ';

    products: Product[] = [];

    constructor(private productService: ProductService) {}

    ngOnInit() {
      this.productService.getProducts().then((data) => (this.products = data));
    }
}
