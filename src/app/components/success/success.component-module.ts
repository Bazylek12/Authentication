import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SuccessComponent } from './success.component';

@NgModule({
  imports: [MatCardModule, MatButtonModule],
  declarations: [SuccessComponent],
  providers: [],
  exports: [SuccessComponent]
})
export class SuccessComponentModule {
}
