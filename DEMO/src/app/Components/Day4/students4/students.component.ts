// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-students4',
//   templateUrl: './students.component.html',
//   styleUrls: ['./students.component.css']
// })
// export class Students4Component {

//   students=[
//     {name:"samar",age:23,email:"samar@gmail.com"},
//     {name:"samy",age:39,email:"samy@gmail.com"},
//     {name:"fatma",age:23,email:"fatma@gmail.com"},
//     {name:"sara",age:27,email:"sara@gmail.com"},
//     {name:"ahmed",age:23,email:"ahmed@gmail.com"},
//     {name:"ali",age:32,email:"ali@gmail.com"},
//     {name:"nehad",age:24,email:"nehad@gmail.com"},
//     {name:"nada",age:36,email:"nada@gmail.com"}
//   ]
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-students', // Update the selector to 'app-students'
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent { // Update the component class name to match the selector

  students=[
    {name:"samar",age:23,email:"samar@gmail.com"},
    {name:"samy",age:39,email:"samy@gmail.com"},
    {name:"fatma",age:23,email:"fatma@gmail.com"},
    {name:"sara",age:27,email:"sara@gmail.com"},
    {name:"ahmed",age:23,email:"ahmed@gmail.com"},
    {name:"ali",age:32,email:"ali@gmail.com"},
    {name:"nehad",age:24,email:"nehad@gmail.com"},
    {name:"nada",age:36,email:"nada@gmail.com"}
  ]
}

