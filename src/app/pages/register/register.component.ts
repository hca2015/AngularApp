import { Component, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AbstractComponent, ComparisonValidator, PasswordValidator, CPFValidator } from 'src/app/utility.component';
import { RegisterService } from './register.service';
import { ICON_REGISTRY_PROVIDER_FACTORY } from '@angular/material/icon';
import { RegisterModel } from 'src/app/models/register/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends AbstractComponent implements AfterViewInit {
  formularioDadosConta: FormGroup;
  formularioDadosPessoais: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _registerService: RegisterService) {
    super();

    this.formularioDadosConta = this._formBuilder.group({
      email: ['', [/*Validators.required, Validators.email*/]],
      senha: ['', [/*Validators.required, PasswordValidator*/]],
      confirmarsenha: ['', [/*Validators.required, ComparisonValidator('senha'), PasswordValidator*/]]
    });

    this.formularioDadosPessoais = this._formBuilder.group({
      nome: ['', [/*Validators.required*/]],
      datanascimento: ['', [/*Validators.required*/]],
      cpf: ['', [/*Validators.required, CPFValidator*/]],
      celular: ['', [/*Validators.required*/]],
    });

  }

  registrar() {

    let _register: RegisterModel = new RegisterModel();
    _register.email = this.formularioDadosConta.get('email').value;
    _register.senha = this.formularioDadosConta.get('senha').value;
    _register.confirmarSenha = this.formularioDadosConta.get('confirmarsenha').value;

    _register.nome = this.formularioDadosPessoais.get('nome').value;
    _register.dataNascimento = this.formularioDadosPessoais.get('datanascimento').value;
    _register.cpf = this.formularioDadosPessoais.get('cpf').value;
    _register.celular = this.formularioDadosPessoais.get('celular').value;

    console.log(_register);

    this._registerService.concluirRegistro(_register).subscribe(
      retorno => console.log(retorno)
    );
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

  getNomeError() {
    if (this.formularioDadosPessoais.controls.nome.errors)
      return this.formularioDadosPessoais.controls.nome.errors.required ? 'Campo obrigatório' : '';

    return '';
  }

  getDataNascimentoError() {
    if (this.formularioDadosPessoais.controls.datanascimento.errors)
      return this.formularioDadosPessoais.controls.datanascimento.errors.required ? 'Campo obrigatório' : '';

    return '';
  }

  getCPFError() {
    if (this.formularioDadosPessoais.controls.cpf.errors)
      return this.formularioDadosPessoais.controls.cpf.errors.required ? 'Campo obrigatório' :
        this.formularioDadosPessoais.controls.cpf.errors.cpfinvalido ? 'CPF inválido.' : '';

    return '';
  }

  getCelularError() {
    if (this.formularioDadosPessoais.controls.celular.errors)
      return this.formularioDadosPessoais.controls.celular.errors.required ? 'Campo obrigatório' : '';

    return '';
  }
}
