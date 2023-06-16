import { Component, OnInit } from '@angular/core';
interface Student{
  fName: string;
  lName:string;
  score: number;
}
@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  courses : string[];
  students: Student[];
  constructor() { 
    this.courses = ["Angular", "React", "node"];
    this.students = [
      {
      fName: "John",
      lName: "Wick",
      score: 90
      },
      {
        fName:"Pawan",
        lName: "Ghising",
        score: 100
      }
    ]
  }

  ngOnInit(): void {
  }

}
