import { Component, OnInit } from '@angular/core';
import { Routes,Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigation(path){
    this.router.navigate([path]);
  }

}
