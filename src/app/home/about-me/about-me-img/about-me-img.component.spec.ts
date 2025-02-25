import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutMeImgComponent } from './about-me-img.component';

describe('AboutMeImgComponent', () => {
  let component: AboutMeImgComponent;
  let fixture: ComponentFixture<AboutMeImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
