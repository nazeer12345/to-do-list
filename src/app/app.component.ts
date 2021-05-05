import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cwh-todo-list';
  myName="bruze lee"
  myEvent(evt: string){
    console.log(evt)
  }
  app='bruce'
  getName(){
    return this.title 
  }
  obj={
    name:"Nazeer",
    place:"warangal"
  }
  arr=[
    "kelly",
    "telly",
    "melly",
    "bruse",
    "lee",
  ]
  siteUrl=window.location.href
   getFullName(name: string){
     alert (name);
   }
}