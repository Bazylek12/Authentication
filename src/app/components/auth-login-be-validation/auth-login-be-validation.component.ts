import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ValidationService } from '../../services/validation.service';
import { Router } from '@angular/router';
import { PasswordValidator } from "src/app/password-validator"


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
  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      PasswordValidator.numberValidator,
      PasswordValidator.upperValidator,
      PasswordValidator.lowerValidator,
      PasswordValidator.symbolValidator,
    ]),
    repeatPassword: new FormControl('', [
      Validators.required,
    ]),
    }, [PasswordValidator.passwordValidator]
  );

  constructor(private _validationService: ValidationService, private _router: Router) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    const email = loginForm.value.email;
    const password = loginForm.value.password;
    this._validationService.login(email, password)
      .subscribe({
        error: (err) => this.loginForm.setErrors({ beValidate: err.error.message }),
        next: () => this._router.navigate(['/success'])
      })
  }

}
