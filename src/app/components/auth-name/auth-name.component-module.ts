import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthNameComponent } from './auth-name.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {AsyncPipe, NgIf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, NgIf, MatInputModule, AsyncPipe],
  declarations: [AuthNameComponent],
  providers: [],
  exports: [AuthNameComponent]
})
export class AuthNameComponentModule {
}
