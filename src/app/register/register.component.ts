import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      Name: new FormControl("", Validators.required),
      userEmail: new FormControl("", [Validators.required, Validators.email]),
      userName: new FormControl("", [Validators.required,Validators.pattern(/^\S*$/)]),
      userPass: new FormControl("",[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)])
    }
    )
  }
  handleSubmitForm() {
    console.log(this.registerForm);
    console.log(this.registerForm.value)
  }
}
