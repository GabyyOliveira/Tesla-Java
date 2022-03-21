import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = new User();

  form!: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      login: ["", Validators.required],
      senha: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  doLogin(){
    this.authService.doLogin(this.user);
  }

}
