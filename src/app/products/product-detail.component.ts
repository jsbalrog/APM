import {Component, Input, OnInit} from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  @Input() product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) {

  }

  getProduct(id: number): void {
    this._productService.getProduct(id).subscribe(product => this.product = product);
  }

  ngOnInit(): void {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

};
