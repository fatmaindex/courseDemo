import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ICategory } from '../../../Models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';


@Component({
  selector: 'app-order-master',
  standalone: false,
  // imports: [ProductListComponent,FormsModule,NgFor],
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.scss'
})
export class OrderMasterComponent  {
  catList:ICategory[];
  selectedCatID:number=0;
  orderTotalPrice:number=0;

constructor( ){

  this.catList=[

    {id:0,name:"All"},
    {id:1,name:"labtops"}
    ,{id:2,name:"tablets"}
    ,{id:3,name:"mobiles"}
  ];
}

}
