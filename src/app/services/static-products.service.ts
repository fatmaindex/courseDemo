import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {

  private prdList: IProduct[];

  constructor() {

    this.prdList = [{ id: 100, name: "lenovo thinkpad laptop", price: 1000, quantity: 4, imgURL: "https://fakeimg.pl/250x100/", categoryID: 1 }
      , { id: 200, name: "Apple MacBook laptop", price: 2000, quantity: 1, imgURL: "https://fakeimg.pl/250x100/", categoryID: 1 }
      , { id: 300, name: "lenovo tab 2", price: 3000, quantity: 0, imgURL: "https://fakeimg.pl/250x100/", categoryID: 2 }
      , { id: 400, name: "samsung tab", price: 4000, quantity: 10, imgURL: "https://fakeimg.pl/250x100/", categoryID: 2 }
      , { id: 500, name: "samsung note 10", price: 5000, quantity: 7, imgURL: "https://fakeimg.pl/250x100/", categoryID: 3 }
      , { id: 600, name: "samsung s2 altra", price: 6000, quantity: 2, imgURL: "https://fakeimg.pl/250x100/", categoryID: 3 }]

  }
  //function to return all products
  getAllProducts(): IProduct[] {
    return this.prdList;
  }

  // function to return products based on category ID
  getProductsByCatId(cID: number): IProduct[] {
    if (cID == 0)
      return this.prdList
    else
      return this.prdList.filter(pro => pro.categoryID == cID)
  }

  //function to return a product based on its id
  getProductById(pID: number): IProduct | null {
    let foundProduct = this.prdList.find(pro => pro.id == pID)
    return foundProduct ? foundProduct : null
  }

  //function to return array of all product IDs
  getPrdIDs(): number[] {
    let PrdIDs = this.prdList.map(prd => prd.id)
    return PrdIDs;
  }
}
