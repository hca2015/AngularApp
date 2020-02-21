import { Component, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AbstractComponent, ComparisonValidator, PasswordValidator } from 'src/app/utility.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends AbstractComponent implements AfterViewInit {
  formularioDadosConta: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    super();

    this.formularioDadosConta = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, PasswordValidator]],
      confirmarsenha: ['', [Validators.required, ComparisonValidator('senha'), PasswordValidator]]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', [Validators.required]]
    });

  }

  getEmailError() {
    if (this.formularioDadosConta.controls.email.errors)
      return this.formularioDadosConta.controls.email.errors.required ? 'Campo obrigatório' :
        this.formularioDadosConta.controls.email.errors.email ? 'Email inválido' : '';

    return '';
  }

  getSenhaError() {
    if (this.formularioDadosConta.controls.senha.errors)
      return this.formularioDadosConta.controls.senha.errors.required ? 'Campo obrigatório' :
        this.formularioDadosConta.controls.senha.errors.invalidpassword ? 'Padrão de senha inválido deve conter 1 caracter especial, uma letra minúscula, uma maiúscula um número e ao menos oito dígitos.'
          : '';

    return '';
  }

  getConfirmarSenhaError() {
    if (this.formularioDadosConta.controls.confirmarsenha.errors)
      return this.formularioDadosConta.controls.confirmarsenha.errors.required ? 'Campo obrigatório' :
        this.formularioDadosConta.controls.confirmarsenha.errors.invalidpassword ? 'Padrão de senha inválido deve conter 1 caracter especial, uma letra minúscula, uma maiúscula um número e ao menos oito dígitos.'
          : this.formularioDadosConta.controls.confirmarsenha.errors.comparisonerror ? 'Senhas não conferem' : '';

    return '';
  }
}
