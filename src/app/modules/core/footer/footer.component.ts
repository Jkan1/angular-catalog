import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  showFooter = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFooter(){
    this.showFooter = this.showFooter ? false : true;
  }

}
