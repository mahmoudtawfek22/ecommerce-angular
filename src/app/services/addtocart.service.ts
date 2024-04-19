import { Injectable } from '@angular/core';
import { Product } from '../interface/product';
import { stringify } from 'querystring';
import { BehaviorSubject } from 'rxjs';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {


private cartprods=new BehaviorSubject<Product[]>([])
  constructor() { }
    getproducts(){
      return this.cartprods.asObservable();
    }

  setproducts(newValue:any) {
    this.cartprods.next(newValue);
  }

  
  

}
