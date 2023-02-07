import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../services/validation.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-single-page',
  styleUrls: ['./auth-single-page.component.scss'],
  templateUrl: './auth-single-page.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthSinglePageComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  });

  constructor(private _validationService: ValidationService, private _router: Router) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {

    // const email =loginForm.value.email;
    // const password = loginForm.value.password;
    // this._validationService.login(email, password)
    //   .subscribe({
    //     error: () => this._router.navigate(['/error']),
    //     next: () => this._router.navigate(['/success'])
    //   })
  }
}

