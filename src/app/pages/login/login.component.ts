import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AbstractComponent } from 'src/app/utility.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent extends AbstractComponent implements OnInit {

  ngOnInit(): void {
    
  }
  
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    super();
    this.loginForm = formBuilder.group({
      usuario: '',
      senha: ''
    });
  }

  enviarDados() {
    console.log(this.loginForm.get('usuario').value);
  }
}