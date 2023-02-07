import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../../validators/password-validator';
import { ValidationService } from '../../services/validation.service';
import { Router } from '@angular/router';
import {DateValidator} from "../../validators/date-validator";

@Component({
  selector: 'app-auth-login-be-validation',
  styleUrls: ['./auth-login-be-validation.component.scss'],
  templateUrl: './auth-login-be-validation.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLoginBeValidationComponent {

  account_validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'noPasswordMatch', message: 'Passwords do not match' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'hasNumber', message: 'Must contain at least 1 number character' },
      { type: 'hasLower', message: 'Must contain at least 1 small character' },
      { type: 'hasUpper', message: 'Must contain at least 1 capital character' },
      { type: 'hasSpecialSymbol', message: 'Must contain at least 1 special character: !@#$%^*()' },
      { type: 'minlength', message: 'Password must be at least 6 characters long' },
    ],
  }

  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl()
  });

  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', [
      Validators.required,
      PasswordValidator.numberValidator,
      PasswordValidator.upperValidator,
      PasswordValidator.lowerValidator,
      PasswordValidator.symbolValidator,
      Validators.minLength(6),
    ]),
      dateOfBirth: new FormGroup({
        day: new FormControl(null, [
          // Validators.min(1),
          // Validators.max(31),

        ]),
        month: new FormControl(),
        year: new FormControl(),
      }, DateValidator.dayValidator),
    repeatPassword: new FormControl('', [
      Validators.required,
    ]),
  }, [PasswordValidator.passwordValidator]
  );

  constructor(private _validationService: ValidationService, private _router: Router) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    this._validationService.login({
      email: loginForm.value.email,
      password: loginForm.value.password,
    })
      .subscribe({
        error: (err) => this.loginForm.setErrors({ beValidate: err.error.message }),
        next: () => this._router.navigate(['/success'])
      })
  }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
  }
}
