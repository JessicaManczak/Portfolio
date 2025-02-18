import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNavigateToContactComponent } from './button-navigate-to-contact.component';

describe('ButtonNavigateToContactComponent', () => {
  let component: ButtonNavigateToContactComponent;
  let fixture: ComponentFixture<ButtonNavigateToContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNavigateToContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonNavigateToContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
