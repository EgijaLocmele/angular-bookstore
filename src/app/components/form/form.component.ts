import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  AbstractControl,
  FormGroup,
  FormControl,
  ValidatorFn,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { DialogWindowComponent } from '../dialog-window/dialog-window.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent implements OnInit {
  constructor(private matDialog: MatDialog, private fb: FormBuilder) {}

  // userEmails = new FormGroup({
  //   primaryEmail: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  //   ]),
  //   confirmEmail: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  //   ]),
  // });

  // get primEmail() {
  //   return this.userEmails.get('primaryEmail');
  // }

  // get confirmEmail() {
  //   return this.userEmails.get('secondaryEmail');
  // }

  // get primEmail() {
  //   return this.userEmails.get('primaryEmail');
  // }

  // get secondEmail() {
  //   return this.userEmails.get('secondaryEmail');
  // }
  userEmails!: FormGroup;
  // userEmails = new FormGroup({
  //   primaryEmail: new FormControl('', [
  //     Validators.required,
  //     Validators.email,
  //     Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  //   ]),
  //   secondaryEmail: new FormControl('', [
  //     Validators.required,
  //     Validators.email,
  //     Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  //   ]),
  //   nameSurname: new FormControl('', [Validators.required]),
  // },
  // {
  //   validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
  // });

  ngOnInit(): void {
    this.userEmails = this.fb.group(
      {
        primaryEmail: new FormControl('', [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        secondaryEmail: new FormControl('', [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          // [this.notEqual('primaryEmail')],
        ]),
        nameSurname: new FormControl('', [
          Validators.required,
          // Validators.pattern('^[a-zA-Z]{2,40}(?: +[a-zA-Z]{2,40})+$'),
        ]),
      },
      {
        validator: this.EmailMatch('primaryEmail', 'secondaryEmail'),
      }
    );
  }

  EmailMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['EmailMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ EmailMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  get f() {
    return this.userEmails.controls;
  }

  // notEqual(field_name: string): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } => {
  //     const input = control.value;

  //     const isEqual = control.root.value[field_name] != input;

  //     return isEqual ? { lowerThan: { isEqual } } : null;
  //   };
  // }

  onSubmit() {
    // console.log('reactive form submitted');
    // console.log(this.userEmails);
    // this.userEmails.reset();

    // (f['secondaryEmail'].value != f['primaryEmail'].value
    //         ? false
    //         : true) || f['secondaryEmail'].pristine

    if (this.userEmails.valid) {
      console.log('Form Submitted!');
      // console.log(this.userEmails.value);
      this.userEmails.reset();
    }
  }
  // wordCount: any;
  // @ViewChild('text')
  // text!: ElementRef;
  // words: any;
  // wordCounter() {
  //   //alert(this.text.nativeElement.value)
  //   this.wordCount = this.text ? this.text.nativeElement.value.split(/\s+/) : 0;
  //   this.words = this.wordCount ? this.wordCount.length : 0;
  // }
}
