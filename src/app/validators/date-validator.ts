import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class DateValidator {
  static dayValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const day = control.get('day')?.value;
    const month = control.get('month')?.value;
    const year = control.get('year')?.value;
    const evenMonths: number[] = [4, 6, 8, 11]

    if ( evenMonths.includes(month) && day > 30) {
       control.get('day')?.setErrors({toMuch: true})
    }
    return null
  }
}
