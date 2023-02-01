import { NgModule } from '@angular/core';
import { AuthAgeComponent } from './auth-age.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, NgIf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    NgIf,
    AsyncPipe,
    MatInputModule
  ],
  declarations: [AuthAgeComponent],
  providers: [],
  exports: [AuthAgeComponent]
})
export class AuthAgeComponentModule {
}
