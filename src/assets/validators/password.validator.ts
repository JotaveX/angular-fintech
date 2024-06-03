import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null; // If the value is empty, don't return an error
    }

    // Check for at least one letter, one number, and one special character
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    const passwordValid = hasLetter && hasNumber && hasSpecial;

    return !passwordValid ? { passwordStrength: true } : null;
  };
}
