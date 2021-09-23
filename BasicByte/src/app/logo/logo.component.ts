import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  state:string = 'light';
  constructor() {
    this.state = this.getTheme();
  }

  ngOnInit(): void {
  }

  getTheme():string{
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      return "dark";
    } else {
      return "light";
    }
  }
}
