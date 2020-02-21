import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesaltaComponent } from './clientesalta.component';

describe('ClientesaltaComponent', () => {
  let component: ClientesaltaComponent;
  let fixture: ComponentFixture<ClientesaltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesaltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesaltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
