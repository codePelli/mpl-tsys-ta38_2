import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, RouterOutlet, ReactiveFormsModule, ListComponent],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() saveUser = new EventEmitter();

  userFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mensaje: ['', Validators.required],
      respuesta: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    console.log(this.userFormGroup);
  }

  save(): void {
    if (this.userFormGroup.valid) {
      this.saveUser.emit(this.userFormGroup.value);
      this.userFormGroup.reset();
    }
  }
}