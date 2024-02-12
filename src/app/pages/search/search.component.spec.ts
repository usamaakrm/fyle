import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchComponent } from './search.component';
@Component({
  selector: 'blank',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class BlankComponent {}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
     TestBed.configureTestingModule({
      // declarations: [ SearchComponent ]
      imports:[
        RouterTestingModule.withRoutes(
          [{path: 'profile/usamaakrm', component: BlankComponent}]
        )
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to profile details',() => {
    component.username = 'usamaakrm'
    component.navigate()
    fixture.detectChanges()
    // TODO: Write expect ststement here
  })
});