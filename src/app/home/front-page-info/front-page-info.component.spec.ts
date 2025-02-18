import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageInfoComponent } from './front-page-info.component';

describe('FrontPageInfoComponent', () => {
  let component: FrontPageInfoComponent;
  let fixture: ComponentFixture<FrontPageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontPageInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontPageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
