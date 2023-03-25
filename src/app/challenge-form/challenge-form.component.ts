import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-challenge-form',
  templateUrl: './challenge-form.component.html',
  styleUrls: ['./challenge-form.component.scss'],
})
export class ChallengeFormComponent {
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  coucou() {
    this.searchForm.patchValue({
      fiche: 'courte',
    });
  }

  searchForm = this.fb.group({
    titleAndIdentifiantControl: this.fb.group(
      {
        title: [''],
        identifiant: [''],
      },
      {
        validators: this.isRequiredValidator('title', 'identifiant'),
      }
    ),
    releaseDate: ['', this.rangeDateValidator(1900, new Date().getFullYear())],
    type: ['serie'],
    fiche: [''],
  });

  isRequiredValidator(title: string, identifiant: string): ValidatorFn {
    // à exporter quelque part pour plus de clartée !!
    return (control: AbstractControl): ValidationErrors | null => {
      const titleValue = control.get(title)?.value; // get car on va aller chercher la valeur à l'INTERIEURde titleAndIdentifiantControl

      const idValue = control.get(identifiant)?.value;

      if (titleValue.length === 0 && idValue.length === 0) {
        return {
          isRequired: 'error',
        };
      } else {
        return null;
      }
    };
  }

  rangeDateValidator(min: number, max: number): ValidatorFn {
    // à exporter quelque part pour plus de clartée !!
    return (control: AbstractControl): ValidationErrors | null => {
      const yearValue = control.value; // car on est directement dans la valeur du fb

      if (yearValue < min || yearValue > max) {
        return {
          min: { minYear: min, maxYear: max },
        };
      } else {
        return null;
      }
    };
  }

  onSubmit() {
    console.log(this.searchForm.value);
  }
}
