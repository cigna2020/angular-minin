import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {style} from '@angular/animations';
import {MyValidators} from './my.validators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  @ViewChild('submitBtn') btnRef: ElementRef;

  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, MyValidators.restrictedEmails, Validators.required], [MyValidators.uniqEmail]), // асинхронный валидатор передается третьим параметром
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      address: new FormGroup({
        country: new FormControl('ua', Validators.required),
        city: new FormControl('Киев', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit(): void {
    if (!this.form.invalid) {
      console.log(this.form);
      const formDate = {...this.form.value};
      console.log(formDate);
      this.form.reset();
    }
  }

  addSkill(): void {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }
}
