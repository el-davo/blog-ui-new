import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticlePreviewComponent } from './add-article-preview.component';

describe('AddArticlePreviewComponent', () => {
  let component: AddArticlePreviewComponent;
  let fixture: ComponentFixture<AddArticlePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArticlePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticlePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
