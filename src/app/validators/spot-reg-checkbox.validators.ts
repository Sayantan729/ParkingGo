import { FormArray, FormGroup, ValidatorFn } from '@angular/forms';

export class SpotRegCheckBoxValidators {


    static checkNumSelected(): ValidatorFn {
        return function validate(formGroup: FormGroup) {
            
            return !formGroup.controls["hasTwoWheelers"].value && !formGroup.controls["hasFourWheelers"].value ? { requireCheckboxToBeChecked: true } : null
        }

    }
}