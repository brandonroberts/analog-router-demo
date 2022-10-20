import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { injectActivatedRoute } from '@analogjs/router';
import { map } from 'rxjs';

const injectParams = <T>(param: string) => {
  return injectActivatedRoute().paramMap.pipe(
    map((params) => params.get(param) as unknown as T)
  );
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `
    <h2>Product Details</h2>

    ID: {{ productId$ | async }}
  `,
})
export default class ProductDetailsPageComponent {
  readonly productId$ = injectParams<number>('productId');
}
