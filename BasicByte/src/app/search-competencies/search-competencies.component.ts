import { Component, OnInit } from '@angular/core';
import { faAngular, faJsSquare, faCss3, faHtml5, faJava, faPython, faNode
 } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-search-competencies',
  templateUrl: './search-competencies.component.html',
  styleUrls: ['./search-competencies.component.scss']
})
export class SearchCompetenciesComponent implements OnInit {
  faAngular=faAngular;
  constructor() { }

  ngOnInit(): void {
  }

}
