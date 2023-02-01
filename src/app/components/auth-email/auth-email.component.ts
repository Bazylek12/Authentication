import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth-email',
  styleUrls: ['./auth-email.component.scss'],
  templateUrl: './auth-email.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthEmailComponent {
  readonly email: FormControl = new FormControl('', [Validators.required, Validators.email])
}
