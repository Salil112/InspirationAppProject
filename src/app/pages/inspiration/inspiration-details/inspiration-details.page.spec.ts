import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InspirationDetailsPage } from './inspiration-details.page';

describe('InspirationDetailsPage', () => {
  let component: InspirationDetailsPage;
  let fixture: ComponentFixture<InspirationDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InspirationDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
