import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { TitleContentComponent } from './components/title-content/title-content.component';
import { OurWorkComponent } from './components/our-work/our-work.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TitleContentComponent, OurWorkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
