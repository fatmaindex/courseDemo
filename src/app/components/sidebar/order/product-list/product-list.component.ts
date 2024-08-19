import { Component, EventEmitter, HostListener, Input, input, numberAttribute, OnChanges, SimpleChanges } from '@angular/core';
import { IProduct } from '../../../Models/iproduct';
import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { ICategory } from '../../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from '../../../directives/light-box.directive';
import { USDtoEGPPipe } from '../../../pipes/usdto-egp.pipe';

@Component({
  selector: 'app-product-list',
  standalone: false,
  // imports: [NgFor, FormsModule, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgStyle, LightBoxDirective, CurrencyPipe, DatePipe, USDtoEGPPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnChanges {
  prdList: IProduct[];
  prdListOfCatId: IProduct[] = [];
  @Input() sentCatID: number = 0;
  totalPriceChanged:EventEmitter<number>;
  orderDate: Date;
  

  constructor() {

    this.totalPriceChanged=new EventEmitter<number>;

    this.prdList = [{ id: 100, name: "lenovo thinkpad laptop", price: 1000, quantity: 1, imgURL: "https://fakeimg.pl/250x100/", categoryID: 1 }
      , { id: 200, name: "Apple MacBook laptop", price: 2000, quantity: 0, imgURL: "https://fakeimg.pl/250x100/", categoryID: 1 }
      , { id: 300, name: "lenovo tab 2", price: 3044, quantity: 10, imgURL: "https://fakeimg.pl/250x100/", categoryID: 2 }
      , { id: 400, name: "samsung tab", price: 4000, quantity: 2, imgURL: "https://fakeimg.pl/250x100/", categoryID: 2 }
      , { id: 500, name: "samsung note 10", price: 5000, quantity: 0, imgURL: "https://fakeimg.pl/250x100/", categoryID: 3 }
      , { id: 600, name: "samsung s2 altra", price: 6000, quantity: 1, imgURL: "https://fakeimg.pl/250x100/", categoryID: 3 }]

    this.orderDate = new Date;
    this.prdListOfCatId = this.prdList;
  }
  buy(prdPrice: number, count: string) {
    // implicit casting//

    // let itemscount:number;
    // itemscount=count as number
    // this.totalPrice=parseInt(count)*prdPrice;
    // this.totalPrice=Number(count)*prdPrice
    // this.totalPrice = +count * prdPrice;

  }
  // changeCat()
  // {
  //   this.selectedCatID=1;
  // }
  // proTrackByFn(index:number,prd:IProduct){
  //   return prd.id;

  // }

  private filterProductsByCatID() {
    if (this.sentCatID == 0)
      this.prdListOfCatId=this.prdList
    else
    this.prdListOfCatId = this.prdList.filter(pro => pro.categoryID == this.sentCatID)
  }
  ngOnChanges(): void {
  
      this.filterProductsByCatID();
  }

}
