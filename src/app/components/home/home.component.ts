import { Component } from '@angular/core';
import { StoreData } from '../../ViewModels/store-data';

@Component({
  selector: 'app-home',
 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent {
  storeInfo: StoreData;
  isImageShown: boolean = true;

  constructor() {
    this.storeInfo = new StoreData("ITI store", "https://picsum.photos/400/300", ["Cairo", "Alex", "Qena"]);
  }

  toggleImage() {
    this.isImageShown = !this.isImageShown;
  }
}
