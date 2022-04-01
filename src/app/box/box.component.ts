import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
  //providers: [DataService]
})
export class BoxComponent implements OnInit {
theme:string="theme2"
decide:number=35
bgcolor:string=""
@Input() title:string=""
@Input("items") values:string[]=[]
@Output('receive') send:EventEmitter<string>=new EventEmitter<string>();
  constructor(public ds:DataService) {
      
   }

  ngOnInit(): void {
  }

  changeTheme(x:string):void{
    this.theme=x;
  }

  sendMessage(x:string):void{
      this.send.emit(x);
  }
}
