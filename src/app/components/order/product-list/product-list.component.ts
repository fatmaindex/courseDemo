import { Component, EventEmitter, input, Input, OnChanges, Output } from '@angular/core';
import { IProduct } from '../../../Models/iproduct';
import { CartProduct } from '../../../ViewModels/cart-product';
import { StaticProductsService } from './../../../services/static-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent implements OnChanges {
  // prdList: IProduct[];
  prdListOfCatId: IProduct[] = [];
  prdListOfprice: IProduct[] = [];
  orderDate: Date;
  @Input() sentCatID: number = 0;
  @Input() sentMaxPrice: number = 0;
  @Input() countInpVal: number = 0;
  @Output() onCreateCartPro: EventEmitter<CartProduct>
  constructor(private StaticProductsService: StaticProductsService, private router: Router) {

    this.onCreateCartPro = new EventEmitter<CartProduct>
    // this.prdList = [{ id: 100, name: "lenovo thinkpad laptop", price: 1000, quantity: 4, imgURL: "https://fakeimg.pl/250x100/", categoryID: 1 }
    //   , { id: 200, name: "Apple MacBook laptop", price: 2000, quantity: 1, imgURL: "https://fakeimg.pl/250x100/", categoryID: 1 }
    //   , { id: 300, name: "lenovo tab 2", price: 3000, quantity: 0, imgURL: "https://fakeimg.pl/250x100/", categoryID: 2 }
    //   , { id: 400, name: "samsung tab", price: 4000, quantity: 10, imgURL: "https://fakeimg.pl/250x100/", categoryID: 2 }
    //   , { id: 500, name: "samsung note 10", price: 5000, quantity: 7, imgURL: "https://fakeimg.pl/250x100/", categoryID: 3 }
    //   , { id: 600, name: "samsung s2 altra", price: 6000, quantity: 2, imgURL: "https://fakeimg.pl/250x100/", categoryID: 3 }]

    this.orderDate = new Date;
    // this.prdListOfCatId = this.prdList;
  }

  ngOnInit(): void {
    this.prdListOfCatId = this.StaticProductsService.getAllProducts()

  }
  // function create new cart product and check from the needed quantity 
  createCartProduct(id: number, name: string, price: number, count: string, availableQuantity: any) {

    let itemsCount = document.getElementById("itemsCount") as HTMLInputElement
    if (count.trim() === "") {
      alert("enter a valid quantity")
    }
    else if (count < itemsCount.min) {
      alert("minimum avelable quantity is one")
    }
    else if (count > availableQuantity) {
      alert(`the avelable quantity is ${availableQuantity}`)
    }
    else {
      let obj = new CartProduct(id, name, price, +count, availableQuantity)
      this.onCreateCartPro.emit(obj)
    }
  }


  ngOnChanges(): void {

    this.prdListOfCatId = this.StaticProductsService.getProductsByCatId(this.sentCatID)
    this.maxPriceSearch()


  }
  // function to filter products by max price

  private maxPriceSearch() {

    this.prdListOfprice = this.prdListOfCatId.filter(pro => pro.price <= this.sentMaxPrice)
    this.prdListOfCatId = this.prdListOfprice;

  }
  // public getMaxPrice() {
  //   let max = 0
  //   this.prdList.forEach(pro => {
  //     if (pro.price > max) {
  //       max = pro.price
  //     }
  //   })

  //   return max
  // }


  //function to update the available quantity in the product list after placing the order

  updateQuantity(orderCount: CartProduct[]) {
    this.prdListOfprice = this.prdListOfprice.map(pro => {
      orderCount.forEach(cartPro => {
        if (pro.id === cartPro.id) {
          if (pro.quantity)
            pro.quantity = (pro.quantity - cartPro.count);
        }
      });
      return pro;
    });

  }

  openProDetails(ProID: number) {
    this.router.navigate(['/Products', ProID])
  }

}
