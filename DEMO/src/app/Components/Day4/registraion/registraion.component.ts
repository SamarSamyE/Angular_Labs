import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['../../../../../node_modules/bootstrap/dist/css/bootstrap.css','./registraion.component.css' ]
})
export class RegistraionComponent {
  validationForm = new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    age:new FormControl(null,[Validators.required,Validators.min(20),Validators.max(40)]),
    email:new FormControl(null,[Validators.required,Validators.email])
  })
  get NameValid(){
    return this.validationForm.controls["name"].valid;
  }
  get AgeValid(){
    return this.validationForm.controls["age"].valid;
  }
  get EmailValid(){
    return this.validationForm.controls["email"].valid;
  }
  add(){
    // console.log("Age Valid: ",this.validationForm.controls["age"].valid);
    // console.log("name Valid: ",this.validationForm.controls["name"].valid);
    // console.log("email Valid: ",this.validationForm.controls["email"].valid);
    // console.log(this.validationForm.valid);
    if(this.validationForm.valid){
      alert('your data added successfully');
    }
  }


}
