import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth-comment',
  styleUrls: ['./auth-comment.component.scss'],
  templateUrl: './auth-comment.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthCommentComponent {
  readonly comment: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('(?:[A-Za-z]+\\s){3,}[A-Za-z]+')
  ])
}
