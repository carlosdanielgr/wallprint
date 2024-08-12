import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { BorderButtonComponent } from '../../shared/components/border-button/border-button.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgbDropdownModule, BorderButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {}
