import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 public bgColor:string="lightgreen"
 public titles:string[]=["Fruits","Vegetables","Spices","Electronics"]
 public items:string[][]=[
   ["Apple","Oranges","Mango"],
   ["Potato","Tomato","Onion"],
   ["Pepper","Cinnamon","Cloves"],
   ["Phone","Laptop","HardDrive"]
 ]
 
 constructor() { }

 setColor(bgColor:string){
   this.bgColor=bgColor;
 }

}
