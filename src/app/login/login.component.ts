import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiConnectionService } from '../api-connection.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private apiConnection: ApiConnectionService, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    
  }

  login() {
      if(this.apiConnection.checkLogin(this.userLogin.get('username').toString(), this.userLogin.get('password').toString())){
        this.isValid(this.userLogin.get('username').toString())
      }
    }

  isValid(validUsername: string) {
    this.storage.set('username', validUsername);
  }
}
