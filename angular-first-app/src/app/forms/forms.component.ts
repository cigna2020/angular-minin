import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {style} from '@angular/animations';

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
      email: new FormControl('', [Validators.email, Validators.minLength(6), Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      address: new FormGroup({
        country: new FormControl('ua', Validators.required),
        city: new FormControl('Киев', Validators.required)
      })
    });
  }

  submit(): void {
    if (!this.form.invalid) {
      console.log(this.form);
      const formDate = {...this.form.value};
      console.log(formDate);
    }
  }
}
