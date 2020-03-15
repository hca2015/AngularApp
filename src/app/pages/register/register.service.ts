import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from 'src/app/models/register/register.model';
import { API_URL } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  concluirRegistro(prRegisterModel: RegisterModel){
    console.log('enviando');
    return this.http.post(API_URL + 'Register', prRegisterModel);
  }
}
