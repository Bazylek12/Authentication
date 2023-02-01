import { NgModule } from '@angular/core';
import { AuthEmailComponent } from './auth-email.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {AsyncPipe, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [
    MatFormFieldModule,
    AsyncPipe,
    ReactiveFormsModule,
    MatInputModule,
    NgIf
  ],
  declarations: [AuthEmailComponent],
  providers: [],
  exports: [AuthEmailComponent]
})
export class AuthEmailComponentModule {
}
