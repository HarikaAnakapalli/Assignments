import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{
  cars:any[];
  hide:boolean;
  //define products array
  constructor(){
    this.cars = [
    
      {
         name:"BMW",
         model:"3  series",
         year:2023
      },
      {
        name:"Ford",
        model:"Explorer",
        year:2023
        
      },
      {
        name:"Hyundai",
        model:"palisade",
        year:2023
      },
    ]
  
  this.hide = true;

  }
  // getCars():string[]{
  //   return this.cars;
  // }
  toggole(){
    this.hide =!this.hide;
  }

   public getCars():any[]{
     return this.cars;
   }
  
  
  

ngOnInit():void{

}

}
