import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClasiAppPage } from './clasi-app.page';

describe('ClasiAppPage', () => {
  let component: ClasiAppPage;
  let fixture: ComponentFixture<ClasiAppPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClasiAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
