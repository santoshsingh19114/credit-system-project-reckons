import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsContactComponent } from './terms-contact.component';

describe('TermsContactComponent', () => {
  let component: TermsContactComponent;
  let fixture: ComponentFixture<TermsContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsContactComponent]
    });
    fixture = TestBed.createComponent(TermsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
