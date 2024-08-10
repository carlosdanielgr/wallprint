import { Component } from '@angular/core';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { BorderButtonComponent } from '../../shared/components/border-button/border-button.component';

const URL_IMAGE = './assets/images/before-after/';

const ORIGINAL_IMAGES: string[] = [
  `${URL_IMAGE}before1.png`,
  `${URL_IMAGE}after1.png`,
  `${URL_IMAGE}before2.png`,
  `${URL_IMAGE}after2.png`,
  `${URL_IMAGE}before3.png`,
  `${URL_IMAGE}after3.png`,
];

@Component({
  selector: 'app-before-after',
  standalone: true,
  imports: [NgbCarouselModule, BorderButtonComponent],
  templateUrl: './before-after.component.html',
  styleUrl: './before-after.component.scss',
})
export class BeforeAfterComponent {
  images: Array<string[]> = [];

  constructor() {
    if (window.innerWidth > 992) this.splitArray(3);
    else if (window.innerWidth > 450) this.splitArray(2);
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
}
