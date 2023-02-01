import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthNameComponent} from './components/auth-name/auth-name.component';
import {AuthNameComponentModule} from './components/auth-name/auth-name.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'form-1-control-name',
    component: AuthNameComponent
  }]), AuthNameComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
