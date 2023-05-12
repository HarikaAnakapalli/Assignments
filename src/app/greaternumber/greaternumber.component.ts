import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greaternumber',
  templateUrl: './greaternumber.component.html',
  styleUrls: ['./greaternumber.component.css']
})
export class GreaternumberComponent implements OnInit {
  
  value1:number;
  value2:number;

    constructor(){
    this.value1 = 5;
    this.value2 = 10;
   }
  
    ngOnInit():void{
    
    }


}
