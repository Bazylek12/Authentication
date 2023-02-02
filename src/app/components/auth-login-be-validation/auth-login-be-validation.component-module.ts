import { NgModule } from '@angular/core';
import { AuthLoginBeValidationComponent } from './auth-login-be-validation.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {JsonPipe, NgIf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        NgIf,
        MatInputModule,
        MatButtonModule,
        JsonPipe
    ],
  declarations: [AuthLoginBeValidationComponent],
  providers: [],
  exports: [AuthLoginBeValidationComponent]
})
export class AuthLoginBeValidationComponentModule {
}
