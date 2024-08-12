import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { TitleContentComponent } from './components/title-content/title-content.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { WeWorkComponent } from './components/we-work/we-work.component';
import { WhyChooseComponent } from './components/why-choose/why-choose.component';
import { BeforeAfterComponent } from './components/before-after/before-after.component';
import { MakeSpaceComponent } from './components/make-space/make-space.component';
import { VideoComponent } from './components/video/video.component';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    TitleContentComponent,
    OurWorkComponent,
    WeWorkComponent,
    WhyChooseComponent,
    BeforeAfterComponent,
    MakeSpaceComponent,
    VideoComponent,
    FormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
