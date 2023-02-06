import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthLoginBeValidationComponent } from './auth-login-be-validation.component';
import { NgIf } from '@angular/common';

@NgModule({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    NgIf,
    CommonModule
  ],
  declarations: [AuthLoginBeValidationComponent],
  providers: [],
  exports: [AuthLoginBeValidationComponent]
})
export class AuthLoginBeValidationComponentModule {
}
