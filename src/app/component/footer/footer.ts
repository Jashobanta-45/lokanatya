import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  isDesktop = window.innerWidth >= 768; // md breakpoint

  footerSectionOpen: { [key: string]: boolean } = {
    about: false,
    quickLinks: false,
    lokanatya: false,
    contact: false
  };

  toggleFooterSection(section: string) {
    if (this.isDesktop) return;
    this.footerSectionOpen[section] = !this.footerSectionOpen[section];
  }

  // Optional: update isDesktop on resize
  onResize(event: Event) {
    this.isDesktop = (event.target as Window).innerWidth >= 768;
  }
}
