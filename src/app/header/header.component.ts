import { Component, OnInit } from '@angular/core';
import { AngularFontAwesomeComponent } from 'angular-font-awesome';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toggleNav() {
    const ele = document.getElementById('navMobile');
    ele.classList.toggle('d-none');
    document.querySelector('body').classList.toggle('stopScroll');
  }
}
