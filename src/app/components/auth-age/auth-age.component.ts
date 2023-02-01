import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth-age',
  styleUrls: ['./auth-age.component.scss'],
  templateUrl: './auth-age.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthAgeComponent {
  readonly age: FormControl = new FormControl('', [Validators.required, Validators.min(18)])
}
