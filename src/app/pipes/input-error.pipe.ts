import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputError',
  pure: true
})
export class InputErrorPipe implements PipeTransform {

  account_validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'noPasswordMatch', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'hasNumber', message: 'Must contain at least 1 number character' },
      { type: 'hasLower', message: 'Must contain at least 1 small character' },
      { type: 'hasUpper', message: 'Must contain at least 1 capital character' },
      { type: 'hasSpecialSymbol', message: 'Must contain at least 1 special character: !@#$%^*()' },
      { type: 'minlength', message: 'Password must be at least 6 characters long' },
    ],
  }

  transform(value: any): string {
    let message: string = '';
    this.account_validation_messages.password.forEach(item => {
      if(value !== null) {
        if (value[item.type] == true) {
          message = item.message
        }
        console.log(message)
      }
    })

    return message;
  }

}
