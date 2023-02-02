import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthNameComponent} from './components/auth-name/auth-name.component';
import {AuthAgeComponent} from './components/auth-age/auth-age.component';
import {AuthEmailComponent} from './components/auth-email/auth-email.component';
import {AuthCommentComponent} from './components/auth-comment/auth-comment.component';
import {AuthSinglePageComponent} from './components/auth-single-page/auth-single-page.component';
import {SuccessComponent} from './components/success/success.component';
import {ErrorComponent} from './components/error/error.component';
import {AuthLoginBeValidationComponent} from './components/auth-login-be-validation/auth-login-be-validation.component';
import {AuthNameComponentModule} from './components/auth-name/auth-name.component-module';
import {AuthAgeComponentModule} from './components/auth-age/auth-age.component-module';
import {AuthEmailComponentModule} from './components/auth-email/auth-email.component-module';
import {AuthCommentComponentModule} from './components/auth-comment/auth-comment.component-module';
import {AuthSinglePageComponentModule} from './components/auth-single-page/auth-single-page.component-module';
import {SuccessComponentModule} from './components/success/success.component-module';
import {ErrorComponentModule} from './components/error/error.component-module';
import {
  AuthLoginBeValidationComponentModule
} from './components/auth-login-be-validation/auth-login-be-validation.component-module';
import {ValidationServiceModule} from './services/validation.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'form-1-control-name',
    component: AuthNameComponent
  }, {path: 'form-1-control-age', component: AuthAgeComponent}, {
    path: 'form-1-control-email',
    component: AuthEmailComponent
  }, {path: 'form-1-control-comment', component: AuthCommentComponent}, {
    path: 'auth-single-page',
    component: AuthSinglePageComponent
  }, {path: 'success', component: SuccessComponent}, {path: 'error', component: ErrorComponent}, {
    path: 'login-auth-be',
    component: AuthLoginBeValidationComponent
  }]), AuthNameComponentModule, AuthAgeComponentModule, AuthEmailComponentModule, AuthCommentComponentModule, AuthSinglePageComponentModule, SuccessComponentModule, ErrorComponentModule, AuthLoginBeValidationComponentModule, ValidationServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
