import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsInformationBottomComponent } from './skills-information-bottom.component';

describe('SkillsInformationBottomComponent', () => {
  let component: SkillsInformationBottomComponent;
  let fixture: ComponentFixture<SkillsInformationBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsInformationBottomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsInformationBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
