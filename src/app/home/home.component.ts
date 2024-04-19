import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddtocartService } from '../services/addtocart.service';
import { Product } from '../interface/product';
import { CounterService } from '../services/counter.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  

  constructor(
    private productslist: HttpService,
    private router: Router,
    private counterService: AddtocartService,
    private counterprods: CounterService,
   
  ) { }
  

  cartprods: any = [{"id":3,"title":"Samsung Universe 9","description":"Samsung's new variant which goes beyond Galaxy to the Universe","price":1249,"discountPercentage":15.46,"rating":4.09,"stock":36,"brand":"Samsung","category":"smartphones","thumbnail":"https://cdn.dummyjson.com/product-images/3/thumbnail.jpg","images":["https://cdn.dummyjson.com/product-images/3/1.jpg"]}];
  counterarray: number[] = [];
  products: any;
  ngOnInit(){
    this.counterService
      .getproducts()
      .subscribe((res) => (this.cartprods = res));
    this.counterprods
      .getcounter()
      .subscribe((res) => (this.counterarray = res));
    this.productslist.getProducts().subscribe((res)=>this.products=res)
    
    // console.log(this.products);
  }

  addtoprods(prod: Product) {
    // let product = this.cartprods.indexOf(prod)

    if (this.cartprods.indexOf(prod) === -1) {
      this.counterarray.push(1);
      this.cartprods.push(prod);

      console.log(this.cartprods);
      this.counterprods.setcounter(this.counterarray);
      this.counterService.setproducts(this.cartprods);
    } else {
      console.log('exsist');
    }
  }

  // addtocart(prod:Product) {
  //   this.addtocartService.addtocart(prod)
  // };

  redirecttodetails(id: number) {
    this.router.navigate([`/details/${id}`]);
  }
}
