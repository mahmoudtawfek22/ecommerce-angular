import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
 
  private counter=new BehaviorSubject<number[]>([])

  constructor() { }
  getcounter(){
    return this.counter.asObservable();
  }

setcounter(newValue:any) {
  this.counter.next(newValue);
}
}
