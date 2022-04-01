import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 public bgColor:string="lightgreen"
 public titles:string[]=["Fruits","Vegetables","Spices","Electronics"]
 
 constructor() { }

 setColor(bgColor:string){
   this.bgColor=bgColor;
 }

}
