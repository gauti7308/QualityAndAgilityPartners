import { Component, HostListener  } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 500) { 
      //$('#header').slideUp('slow');
    } else {
      //$('#header').slideDown('slow');
    }
  }
}
