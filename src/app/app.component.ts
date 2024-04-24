import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StructuralDirectives';


  //ngIf directive task1
  clickedOrNot = false;

  clickIt() {
    this.clickedOrNot = true;
  }

  //ngIf directive task2
  maleChecked = false;
  femaleChecked = false;

  maleClick() {
    this.maleChecked = true
  }

  femaleClick() {
    this.femaleChecked = true
  }

  //ngFor task1

books = ["Book 1", "Book 2", "Book 3"];

  //ngFor with ngIf task2 table

  details = [
    {name :"Ravindhiran", age : 29, gender : "Male"},
    {name : "Gobika", age: 20, gender: "Female"},
    {name : "Praveen", age: 25, gender: "Male"}
  
   ]

   isVisible: boolean = true;

   hideList(){
    this.isVisible = false;
}
  
}

  

