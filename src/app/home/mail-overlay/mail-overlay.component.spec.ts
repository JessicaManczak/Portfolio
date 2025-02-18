import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailOverlayComponent } from './mail-overlay.component';

describe('MailOverlayComponent', () => {
  let component: MailOverlayComponent;
  let fixture: ComponentFixture<MailOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
