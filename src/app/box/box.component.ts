import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
theme:string="theme2"
decide:number=35
  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(x:string):void{
    this.theme=x;
  }
}
