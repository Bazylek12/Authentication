import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationService} from "../../services/validation.service";
import {Router} from "@angular/router";
import {LoginModel} from "../../models/login.model";

@Component({
  selector: 'app-auth-login-be-validation',
  styleUrls: ['./auth-login-be-validation.component.scss'],
  templateUrl: './auth-login-be-validation.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLoginBeValidationComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl()
  });

  constructor(private _validationService: ValidationService, private _router: Router, private _cdr: ChangeDetectorRef) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {

    const body: LoginModel = {
      data: {
        email: loginForm.value.email,
        password: loginForm.value.password
      }
    }
    this._validationService.login(body)
      .subscribe({
        error: (err) => this.loginForm.setErrors({ beValidate: err.error.message }),
        next: () => this._router.navigate(['/success'])
      })
  }
}
