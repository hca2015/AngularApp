import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {    
    public loginForm: FormGroup;

    constructor(
      private formBuilder: FormBuilder
      ){
      this.loginForm = formBuilder.group({
        usuario: '',
        senha: ''
      });
    }

    enviarDados(){
      console.log(this.loginForm.get('usuario').value);
    
    }
}