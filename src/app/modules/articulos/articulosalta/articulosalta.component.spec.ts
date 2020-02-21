import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosaltaComponent } from './articulosalta.component';

describe('ArticulosaltaComponent', () => {
  let component: ArticulosaltaComponent;
  let fixture: ComponentFixture<ArticulosaltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosaltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosaltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
