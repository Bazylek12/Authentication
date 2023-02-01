import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthNameComponent} from './components/auth-name/auth-name.component';
import {AuthAgeComponent} from './components/auth-age/auth-age.component';
import {AuthEmailComponent} from './components/auth-email/auth-email.component';
import {AuthNameComponentModule} from './components/auth-name/auth-name.component-module';
import {AuthAgeComponentModule} from './components/auth-age/auth-age.component-module';
import {AuthEmailComponentModule} from './components/auth-email/auth-email.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'form-1-control-name',
    component: AuthNameComponent
  }, {path: 'form-1-control-age', component: AuthAgeComponent}, {
    path: 'form-1-control-email',
    component: AuthEmailComponent
  }]), AuthNameComponentModule, AuthAgeComponentModule, AuthEmailComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
