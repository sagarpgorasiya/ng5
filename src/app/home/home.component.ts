import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number=4;
  btnText:string='Add an Item';
  goalText:string="My Fist Life Goal";
  goals=[];

  constructor() {   
  }

  ngOnInit() {
    this.itemCount= this.goals.length;
  }
  additem(){    
     this.goals.push(this.goalText);
     this.goalText='';
     this.itemCount=this.goals.length;
}
}
