import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  openDrawer = false;
  constructor() { }

  ngOnInit() {
  }

  drawer() {
    this.openDrawer = true;
    console.log(this.openDrawer);
    document.getElementById('sideMenu').style.width = '250px';
  }

}
