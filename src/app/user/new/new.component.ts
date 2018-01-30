import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
@Input() data:string;
  constructor() { }

  ngOnInit() {
  }
 f1()
 {
   console.log(this.data);
   this.data="show";
   console.log(this.data);
 }
}
