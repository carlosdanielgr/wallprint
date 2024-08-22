import { Component } from '@angular/core';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { BorderButtonComponent } from '../../shared/components/border-button/border-button.component';

interface Images {
  before: string;
  after: string;
}

const URL_IMAGE = './assets/images/before-after/';

const ORIGINAL_IMAGES: Images[] = [
  {
    before: `${URL_IMAGE}sinwallprint.webp`,
    after: `${URL_IMAGE}conwallprint.webp`,
  },
  {
    before: `${URL_IMAGE}sinwallprint2.webp`,
    after: `${URL_IMAGE}conwallprint2.webp`,
  },
  {
    before: `${URL_IMAGE}sinwallprint3.webp`,
    after: `${URL_IMAGE}conwallprint3.webp`,
  },
];

@Component({
  selector: 'app-before-after',
  standalone: true,
  imports: [NgbCarouselModule, BorderButtonComponent],
  templateUrl: './before-after.component.html',
  styleUrl: './before-after.component.scss',
})
export class BeforeAfterComponent {
  images: Array<Images[]> = [];

  constructor() {
    if (window.innerWidth > 992) this.splitArray(3);
    else if (window.innerWidth > 600) this.splitArray(2);
    else this.splitArray(1);
  }

  splitArray(numParts: number) {
    const partLength = Math.ceil(ORIGINAL_IMAGES.length / numParts);
    for (let index = 0; index < partLength; index++) {
      const start = index * numParts;
      const end = start + numParts;
      if (numParts > 2) {
        ORIGINAL_IMAGES.sort();
        this.images.push(ORIGINAL_IMAGES.sort(() => -1).slice(start, end));
      } else this.images.push(ORIGINAL_IMAGES.slice(start, end));
    }
  }

  redirection() {
    location.href = '#form';
  }
}
