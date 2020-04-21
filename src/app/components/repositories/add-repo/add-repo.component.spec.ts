import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRepoComponent } from './add-repo.component';

describe('AddRepoComponent', () => {
  let component: AddRepoComponent;
  let fixture: ComponentFixture<AddRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
