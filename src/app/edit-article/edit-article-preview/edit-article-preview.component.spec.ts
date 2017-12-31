import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArticlePreviewComponent } from './edit-article-preview.component';

describe('EditArticlePreviewComponent', () => {
  let component: EditArticlePreviewComponent;
  let fixture: ComponentFixture<EditArticlePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArticlePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArticlePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
