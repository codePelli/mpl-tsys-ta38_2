import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AppComponent, FormComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

@Input() users: Array<{ name: string; email: string; mensaje: string, respuesta: string }> = [];

}
