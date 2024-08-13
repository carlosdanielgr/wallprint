import { Component } from '@angular/core';
import { BorderButtonComponent } from '../../shared/components/border-button/border-button.component';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [BorderButtonComponent],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {
  redirection() {
    location.href = '#form';
  }
}
