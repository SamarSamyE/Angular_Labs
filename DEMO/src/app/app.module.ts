import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InputComponent } from './Components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlideComponent } from './Components/slide/slide.component';
import { RegisterComponent } from './Components/Day3/register/register.component';
// import { StudentsComponent } from './Components/Day3/students/students.component';
import { RouterModule ,Routes} from '@angular/router';
import { HeaderComponent } from './Components/Day4/header/header.component';
import { FooterComponent } from './Components/Day4/footer/footer.component';
import { StudentsComponent } from './Components/Day4/students4/students.component';
import { StudentDetailsComponent } from './Components/Day4/student-details/student-details.component';
import { ErrorComponent } from './Components/Day4/error/error.component';
import { RegistraionComponent } from './Components/Day4/registraion/registraion.component';

let routes:Routes=[
  {path:"",component:RegistraionComponent},
  {path:"registraion",component:RegistraionComponent},
  {path:"students",component:StudentsComponent},
  {path:"students/:id",component:StudentDetailsComponent},
  {path:"**",component:ErrorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SlideComponent,
    RegisterComponent,
    StudentsComponent,
    HeaderComponent,
    FooterComponent,
    StudentDetailsComponent,
    ErrorComponent,
    RegistraionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
