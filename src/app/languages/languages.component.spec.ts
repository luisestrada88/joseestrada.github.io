import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesComponent } from './languages.component';

describe('LanguagesComponent', () => {
  let component: LanguagesComponent;
  let fixture: ComponentFixture<LanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
