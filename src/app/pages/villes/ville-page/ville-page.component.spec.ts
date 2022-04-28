import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillePageComponent } from './ville-page.component';

describe('VillePageComponent', () => {
  let component: VillePageComponent;
  let fixture: ComponentFixture<VillePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
