import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsresService } from '../usres.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform:FormGroup | any;
  UsresService: any;
  constructor(private fb: FormBuilder,private userserv:UsresService)
  { }

  ngOnInit(): void
   {
    this.loginform = this.fb.group({
      Email: ['', [Validators.required, Validators.email, Validators.minLength(7)]]
      , Password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(){
    alert("In Login")
    this.userserv.login('TestToken');
  }

  Logout()
  {
    this.userserv.logout();
  }
   
}
