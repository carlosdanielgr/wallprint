import { Location } from '@angular/common';
import { Component } from '@angular/core';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private readonly location: Location) {}

  onInit() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.location.replaceState('');
  }
}
