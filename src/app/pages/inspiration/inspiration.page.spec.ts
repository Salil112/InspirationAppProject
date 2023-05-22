import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InspirationPage } from './inspiration.page';

describe('InspirationPage', () => {
  let component: InspirationPage;
  let fixture: ComponentFixture<InspirationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InspirationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
