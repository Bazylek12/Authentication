import { NgModule } from '@angular/core';
import { AuthCommentComponent } from './auth-comment.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
    AsyncPipe
  ],
  declarations: [AuthCommentComponent],
  providers: [],
  exports: [AuthCommentComponent]
})
export class AuthCommentComponentModule {
}
