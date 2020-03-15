import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user/user.model';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.component';

@Injectable({
    providedIn: 'root',
})
export class LoginService {

    constructor(private http: HttpClient) {

    }

    enviarLogin(user: User) {
        return this.http.post(API_URL + 'Login', user);
    }
}