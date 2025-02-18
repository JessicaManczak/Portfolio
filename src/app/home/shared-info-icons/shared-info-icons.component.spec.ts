import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedInfoIconsComponent } from './shared-info-icons.component';

describe('SharedInfoIconsComponent', () => {
  let component: SharedInfoIconsComponent;
  let fixture: ComponentFixture<SharedInfoIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedInfoIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedInfoIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
