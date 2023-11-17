import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  showModal: boolean = false;
  registerForm: FormGroup;
  submitted = false;
  isChecked=false;
  userType='Register as an user';
  constructor(private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute,private router: Router) {  }
  show() {
    this.showModal = true; // Show-Hide Modal Check

  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
    this.router.navigate(['/']);
    console.log("Window hidden");
    
  }
  ngOnInit() {
    this.show();
    this.registerForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }
  checkValue(event: any){
    console.log(event);
    this.isChecked=! this.isChecked;
    if(event=='A') this.userType="Register as an user"
    else this.userType="Register as an admin"
 }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("invalid creds");
      
      return;
    }
    if (this.submitted) {
      console.log("valid creds... closing...");
      
      this.showModal = false;
      this.router.navigate(['/']);
    }

  }
}
