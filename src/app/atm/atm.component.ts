import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {
  choice: number = 3;
  constructor() {
    this.choice= this.choice;
   }
  getChoice(){
    return this.choice;
  }

  ngOnInit(): void {
  }

}
