import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoClasiAppPage } from './info-clasi-app.page';

describe('InfoClasiAppPage', () => {
  let component: InfoClasiAppPage;
  let fixture: ComponentFixture<InfoClasiAppPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoClasiAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
