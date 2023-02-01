import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth-name',
  styleUrls: ['./auth-name.component.scss'],
  templateUrl: './auth-name.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthNameComponent {
 // readonly form: FormGroup = new FormGroup({ name: new FormControl() });
  readonly name: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)])

}
