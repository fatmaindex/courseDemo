import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
 private adsList :string[]=[]
  constructor() { 
this.adsList=[
  'big discount ',
  'sale up to 50%',
  '',
  'spechial white friday offers up to 70%'
]
  }

  getScadualAds(){
    let adsObservable =new Observable
  }
}
