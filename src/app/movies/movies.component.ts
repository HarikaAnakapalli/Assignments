import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies:any[] = [
    {title:"Bhahubali",genre:"Action",director:"Rajmouli"},
    {title:"RRR",genre:"History",director:"Rajmouli"},
    {title:"Avatar2",genre:"Science fiction",director:"James Cameron"}
  ];

}
