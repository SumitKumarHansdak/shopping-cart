import { Injectable } from '@angular/core';
import { Products } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  productList: Products[] = [
    {
      id: 1,
      name: 'Giordano',
      description:
        'Wired Collection Analog Slim Watch for Man with Color Variant, Wrist...',
      imagePath:
        'https://www.bobswatches.com/rolex-blog/wp-content/uploads/2020/10/Rolex_GMT_116710_5D3_1716-2-Edit-1.jpg',
    },
    {
      id: 2,
      name: 'TIMESMITH',
      description:
        'White Dial Brown Leather Strap Genuine Premium Branded Day Date...',
      imagePath:
        'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwd2F0Y2h8ZW58MHx8MHx8&w=1000&q=80',
    },
    {
      id: 3,
      name: 'Maxima',
      description: 'Maxima Max Pro X5 Smartwatch-Premium Ultra Slim 1.7” HD...',
      imagePath: 'https://wallpaperaccess.com/full/3046105.jpg',
    },
  ];

  constructor() {}

  getProducts() {
    return this.productList.slice();
  }
}
