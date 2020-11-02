import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CommonValidators {
    static fieldRequired(control: AbstractControl): ValidationErrors | null {
        if (control.value !== null) {
            if ((control.value as string).trim() === '')
                return { 'required': true };
            return null;
        }
        return { 'required': true };
    }
}