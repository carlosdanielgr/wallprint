import { Component } from '@angular/core';
import { BorderButtonComponent } from '../../shared/components/border-button/border-button.component';

@Component({
  selector: 'app-we-work',
  standalone: true,
  imports: [BorderButtonComponent],
  templateUrl: './we-work.component.html',
  styleUrl: './we-work.component.scss',
})
export class WeWorkComponent {
  redirection() {
    location.href = '#form';
  }
}
