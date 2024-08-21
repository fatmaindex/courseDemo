import { Component, OnInit } from '@angular/core';
import { StaticProductsService } from './../../../services/static-products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../Models/iproduct';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  CurrentPrdID: number = 0
  prd: IProduct | null = null
  prdIDsArr: number[] = []
  constructor(private prdService: StaticProductsService, private activatedRoute: ActivatedRoute, private location: Location, private router: Router) {
  }

  ngOnInit(): void {
    this.prdIDsArr = this.prdService.getPrdIDs()

    // this.CurrentPrdID= Number(this.activatedRoute.snapshot.paramMap.get('pid'))
    // this.prd=this.prdService.getProductById(this.CurrentPrdID)

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.CurrentPrdID = Number(paramMap.get('pid'))
      this.prd = this.prdService.getProductById(this.CurrentPrdID)
    })

  }
  // function to navigate back to the previous page in the browser history

  goBack() {
    this.location.back()
  }
  // function to navigate to the previous product based on the current product ID

  prevPrd() {
    let currIndex = this.prdIDsArr.findIndex((elem) => elem == this.CurrentPrdID)
    console.log(currIndex)
    let prevPrdId: number;
    if (currIndex > 0) {
      prevPrdId = this.prdIDsArr[currIndex - 1]
      this.router.navigate(['/Products', prevPrdId])
    }
  }
  // function to navigate to the next product based on the current product ID
  nextPrd() {
    let currIndex = this.prdIDsArr.findIndex((elem) => elem == this.CurrentPrdID)
    let nextPrdId: number;
    if (currIndex < this.prdIDsArr.length) {
      nextPrdId = this.prdIDsArr[currIndex + 1]
      this.router.navigate(['/Products', nextPrdId])
    }
  }

}
