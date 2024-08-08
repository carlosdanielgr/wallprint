import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { TitleContentComponent } from './components/title-content/title-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TitleContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
