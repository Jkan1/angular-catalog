import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hideHeader = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleHeader(){
    this.hideHeader = this.hideHeader ? false : true;
  }

}
