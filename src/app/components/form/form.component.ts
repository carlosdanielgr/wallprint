import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { FormService } from './form.service';
import { BorderButtonComponent } from '../../shared/components/border-button/border-button.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgbDropdownModule, BorderButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  loading = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly formService: FormService
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  private formInit() {
    this.form = this.formBuilder.group({
      full_name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
      project_type: ['', [Validators.required]],
      surface_type: ['', [Validators.required]],
      width: ['', [Validators.required]],
      description: ['', [Validators.required]],
      length: ['', [Validators.required]],
      floor: ['', [Validators.required]],
      exterInter: ['', [Validators.required]],
    });
  }

  onSelectItem(value: string, control: string) {
    this.form.get(control)?.setValue(value);
  }

  onPostForm() {
    if (this.form.invalid) return;
    const {
      email,
      full_name,
      phone,
      city,
      project_type,
      surface_type,
      width,
      description,
      length,
      floor,
      exterInter,
    } = this.form.value;
    const date = new Date();
    const body = {
      Fecha: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      'Nombres Completos': full_name,
      Celular: phone,
      'Correo electrónico (Trabajo)': email,
      Colonia: city,
      'Tipo de Proyecto': project_type,
      'Tipo de Superficie': surface_type,
      Ancho: width,
      Largo: length,
      Descripción: description,
      '¿Es planta baja o planta alta?': floor,
      '¿Es para exterior o interior?': exterInter,
    };
    this.loading = true;
    this.formService.postForm(body).subscribe({
      next: () => {
        this.loading = false;
        this.form.reset();
      },
      error: () => {
        this.loading = false;
        this.form.markAllAsTouched();
      },
    });
  }
}
