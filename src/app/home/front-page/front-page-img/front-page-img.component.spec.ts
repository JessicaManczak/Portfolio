import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageImgComponent } from './front-page-img.component';

describe('FrontPageImgComponent', () => {
  let component: FrontPageImgComponent;
  let fixture: ComponentFixture<FrontPageImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontPageImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontPageImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
