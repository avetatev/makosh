import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product-card.model';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductComponent implements OnInit {

  @Input('product1') asd: Product;  

  inputProductName: string = " ";
  productCategory: string =" ";
  productMesure: string ="";
  productQuantity: number = 0;

  isOpen: boolean = false;

  constructor() {
   
   }

  ngOnInit() {
   
  }

  open(){
    this.isOpen = !this.isOpen;
  }

}
