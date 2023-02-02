import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  styleUrls: ['./success.component.scss'],
  templateUrl: './success.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuccessComponent {

  constructor(private _router: Router) {
  }

  goBack(): void {
    this._router.navigate(['/auth-single-page'])
  }
}
