import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DEMO';
  students: {name:string,age:string}[] =[];

  getData(data:any){
  if(+data.age < 40 &&  data.name.length >= 3)
    this.students.push(data);
  }

}
