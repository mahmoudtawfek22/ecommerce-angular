import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://dummyjson.com/products');
  }
  getSingleProductOnline(id:string) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
