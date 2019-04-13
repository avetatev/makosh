import { Component } from '@angular/core';
import { Product } from './product-card/product-card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  product3: Product;


 constructor(){
   this.product3 = new Product();
   this.product3.category = 'Seed Beads';
   this.product3.name = "Preciosa";
   this.product3.mesure = "package";
   this.product3.quantity = 0;


 }

}
