import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devops-challenge';
  fecha!: Date;
  constructor(){
    setInterval( () => { 
      this.fecha = new Date()
    }, 1000)
  }
}
