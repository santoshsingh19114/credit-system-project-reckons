import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit{
 name="santosh"
 age="19"
 country="india"
 state="uttarpradesh"
 city="ghaziabad"


 constructor() {}

 ngOnInit(): void {
   
 }
}
