import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-border-button',
  standalone: true,
  imports: [],
  templateUrl: './border-button.component.html',
  styleUrl: './border-button.component.scss',
})
export class BorderButtonComponent {
  @Input() name = '';

  @Input() disabled = false;
}
