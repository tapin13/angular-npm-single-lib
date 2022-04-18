import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmSingleLibComponent } from './npm-single-lib.component';

describe('NpmSingleLibComponent', () => {
  let component: NpmSingleLibComponent;
  let fixture: ComponentFixture<NpmSingleLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpmSingleLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmSingleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
