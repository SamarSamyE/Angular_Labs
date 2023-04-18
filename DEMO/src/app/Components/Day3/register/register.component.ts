import { Component,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  studentName="";
  studentAge="";
  inputBorderStyle = "";
  // students: {name:string,age:string}[] =[];
  @Output() myEvent = new EventEmitter();
  add(){
    let newStudent={name:this.studentName, age:this.studentAge};
    if(+this.studentAge < 40 &&  this.studentName.length >= 3){
    this.inputBorderStyle = 'green';
    }
    else{
      this.inputBorderStyle = 'red';
    }
    this.myEvent.emit(newStudent);
    this.studentAge="";
    this.studentName="";
  }
}
