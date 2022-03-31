import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 public bgColor:string="lightgreen"
 
 constructor() { }

 setColor(bgColor:string){
   this.bgColor=bgColor;
 }

}
