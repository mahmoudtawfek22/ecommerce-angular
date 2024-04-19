import { Component } from '@angular/core';
import { Product } from '../interface/product';
import { json } from 'express';
import { AddtocartService } from '../services/addtocart.service';
import { CounterService } from '../services/counter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartprods: any = [];
  counterarray:any=[]
  price: number = 0;
  constructor(private cartproducts:AddtocartService,private counterprods:CounterService){}
  
  ngOnInit(): void { 
    this.cartproducts.getproducts().subscribe((res) => (this.cartprods = res));
    this.counterprods.getcounter().subscribe((res) => (this.counterarray = res));
    this.calculateTotalPrice();
    
  }
  prod={"id":3,"title":"Samsung Universe 9","description":"Samsung's new variant which goes beyond Galaxy to the Universe","price":1249,"discountPercentage":15.46,"rating":4.09,"stock":36,"brand":"Samsung","category":"smartphones","thumbnail":"https://cdn.dummyjson.com/product-images/3/thumbnail.jpg","images":["https://cdn.dummyjson.com/product-images/3/1.jpg"]}
 
  
  increase(index: number) {
    this.counterarray[index] += 1;
  //  this.price+=this.cartprods[index].price
  }
  decrease(index:number) {
    this.counterarray[index] -= 1;
    // this.price-=this.cartprods[index].price
    if (this.counterarray[index] == 0) {
      this.cartprods.splice(index,1)
    }
  }
  
<<<<<<< HEAD
  // addtoprods(prod:Product) {
  //   this.cartprods.push(prod)
  //   this.cartproducts.setproducts(this.cartprods)
  // }
=======
 
>>>>>>> 6e049bfb87a13db5b3bca05f408f1e739c749721
  calculateSinglePrice(i:number): number {
    let totalPrice = 0;
    
      totalPrice += this.cartprods[i].price * this.counterarray[i];

    return totalPrice;
  }


  calculateTotalPrice(): number {
    let totalPrice = 0;
    for (let i = 0; i < this.cartprods.length; i++) {
      totalPrice += this.cartprods[i].price * this.counterarray[i];
    }
    return totalPrice;
  }
}
