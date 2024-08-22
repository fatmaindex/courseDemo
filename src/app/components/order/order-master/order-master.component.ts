import { Component, ElementRef, ViewChild, asNativeElements } from '@angular/core';
import { ICategory } from '../../../Models/icategory';
import { CartProduct } from '../../../ViewModels/cart-product';
import { ProductListComponent } from '../product-list/product-list.component';
import { StaticProductsService } from '../../../services/static-products.service';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.scss'
})
export class OrderMasterComponent {
  catList: ICategory[];
  selectedCatID: number = 0;
  receivedOrderTotalPrice: number = 0;
  CartList: CartProduct[] = [];
  orderTotalPrice: number = 0;
  totalPrice: number = 0
  updatedCount!: number
  // clintNameInpElem:ElementRef=new ElementRef();
  // clintNameInpElem:ElementRef={} as ElementRef;
  // clintNameInpElem:ElementRef|undefined=undefined;
  // clintNameInpElem:ElementRef|null=null;
  // clintNameInpElem?:ElementRef;
  // @ViewChild('clintNameInp') clintNameInpElem!:ElementRef;
  @ViewChild('productListComponent') productListComponentObj!: ProductListComponent;
  // maxPrice:number=this.productListComponentObj.getMaxPrice();
  maxPrice: number | string = 100000

  constructor() {
    this.catList = [
      { id: 0, name: "All" },
      { id: 1, name: "labtops" },
      { id: 2, name: "tablets" },
      { id: 3, name: "mobiles" }
    ];
  }

  //function to update the maxPrice when the input value is changing
  setMaxPrice(inpVal: string) {
    if (inpVal == "") {
      this.maxPrice = 1000000;
    }
    else {
      this.maxPrice = inpVal;
    }
  }

  // function to add product to the cart-list 
  //and update the order total price
  addCartProduct(obj: CartProduct) {
    this.CartList.push(obj)
    this.totalPrice = obj.price * obj.count;
    this.orderTotalPrice += this.totalPrice

  }
  //function to remove product from the cart list
  removeProdct(index: number, obj: CartProduct) {

    this.CartList.splice(index, 1);
    this.totalPrice = obj.price * obj.count;
    this.orderTotalPrice -= this.totalPrice

  }


  //function to confirm the order
  completeOrder() {
    this.productListComponentObj.updateQuantity(this.CartList)

    // clearing the cartlist after confirmig the order
    this.CartList = []

  }
  //function to update the order total price whenever the count changed
  updateOrderTotalPrice() {
    this.orderTotalPrice = 0

    this.CartList.forEach(
      pro => {
        this.orderTotalPrice += pro.price * pro.count
      }
    )
  }

}
