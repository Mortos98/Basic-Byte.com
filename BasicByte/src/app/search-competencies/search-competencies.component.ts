import { Component, OnInit } from '@angular/core';
import { faAngular, faJsSquare, faCss3, faHtml5, faJava, faPython,faDocker,faVuejs, faReact, faGit,faJira, faLinux, faRaspberryPi, faSass, faWindows, faYarn, faNodeJs, faNpm} from '@fortawesome/free-brands-svg-icons';
import { faNetworkWired, faShieldAlt, faDatabase, faDesktop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-competencies',
  templateUrl: './search-competencies.component.html',
  styleUrls: ['./search-competencies.component.scss']
})
export class SearchCompetenciesComponent implements OnInit {
  faAngular=faAngular;
  faJsSquare = faJsSquare;
  faCss3 = faCss3;
  faHtml5 = faHtml5;
  faJava = faJava;
  faPython = faPython;
  faNodejs = faNodeJs;
  faNpm = faNpm;
  faLinux = faLinux;
  faDocker = faDocker; 
  faVuejs = faVuejs;
  faReact = faReact;
  faGit = faGit;
  faJira = faJira;
  faRaspberryPi = faRaspberryPi;
  faSass = faSass;
  faWindows = faWindows;
  faYarn = faYarn;
  faNetworkWired = faNetworkWired;
  faShieldAlt = faShieldAlt;
  faDatabase = faDatabase;
  faDesktop = faDesktop;

  constructor() { }

  ngOnInit(): void {
  }

}
