import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLoaderComponent } from './card-loader.component';

describe('CardLoaderComponent', () => {
  let component: CardLoaderComponent;
  let fixture: ComponentFixture<CardLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLoaderComponent]
    });
    fixture = TestBed.createComponent(CardLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
