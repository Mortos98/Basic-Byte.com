import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCompetenciesComponent } from './search-competencies.component';

describe('SearchCompetenciesComponent', () => {
  let component: SearchCompetenciesComponent;
  let fixture: ComponentFixture<SearchCompetenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCompetenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCompetenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
