import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AbstractComponent } from 'src/app/utility.component';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { LoginService } from './login.service';


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
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    super();
    this.loginForm = formBuilder.group({
      usuario: '',
      senha: ''
    });
  }

  enviarDados() {
    
    let user: User = new User();
    user.usuario = this.loginForm.get('usuario').value;
    user.senha = this.loginForm.get('senha').value;
    
    console.log(user);

    this.loginService.enviarLogin(user).subscribe(
      retorno => console.log(retorno)
    );

    //this.router.navigate(['/home']);
  }
}