import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsInformationTopComponent } from './skills-information-top.component';

describe('SkillsInformationTopComponent', () => {
  let component: SkillsInformationTopComponent;
  let fixture: ComponentFixture<SkillsInformationTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsInformationTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsInformationTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
