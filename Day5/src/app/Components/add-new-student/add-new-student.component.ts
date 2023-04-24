import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';
@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css']
})
export class AddNewStudentComponent {
  constructor(private myService:StudentsService, private router: Router){  }

  Add(name:any,age:any, email:any, phone:any, website:any, address:any){
    let newStudent = {name, age, email, website,address,phone};
    this.myService.AddNewStudent(newStudent).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
