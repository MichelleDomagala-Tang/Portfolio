import { Component } from '@angular/core';

@Component({
  selector: 'michelledt-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  goToLink(linkAddress: string) {
    window.open(linkAddress, "_blank");
  }

  scrollToView(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
