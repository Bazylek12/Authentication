import { NgModule } from '@angular/core';
import { ErrorComponent } from './error.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  declarations: [ErrorComponent],
  providers: [],
  exports: [ErrorComponent]
})
export class ErrorComponentModule {
}
