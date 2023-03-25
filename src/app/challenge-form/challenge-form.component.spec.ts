import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeFormComponent } from './challenge-form.component';

describe('ChallengeFormComponent', () => {
  let component: ChallengeFormComponent;
  let fixture: ComponentFixture<ChallengeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
