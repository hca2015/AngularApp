import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user/user.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class LoginService{

    constructor(private http: HttpClient){

    }

    enviarLogin(user: User){
        console.log('vai fazer a request')
        return this.http.post('http://localhost:64984/api/Login', user);
    }
}