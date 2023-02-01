import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthNameComponent} from './components/auth-name/auth-name.component';
import {AuthAgeComponent} from './components/auth-age/auth-age.component';
import {AuthNameComponentModule} from './components/auth-name/auth-name.component-module';
import {AuthAgeComponentModule} from './components/auth-age/auth-age.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'form-1-control-name',
    component: AuthNameComponent
  }, {path: 'form-1-control-age', component: AuthAgeComponent}]), AuthNameComponentModule, AuthAgeComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
