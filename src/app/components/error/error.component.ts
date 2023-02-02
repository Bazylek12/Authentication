import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-error',
  styleUrls: ['./error.component.scss'],
  templateUrl: './error.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent {
  constructor(private _router: Router) {
  }

  goBack(): void {
    this._router.navigate(['/auth-single-page'])
  }
}
