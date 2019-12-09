import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncargadoViewComponent } from './encargado-view.component';

describe('EncargadoViewComponent', () => {
  let component: EncargadoViewComponent;
  let fixture: ComponentFixture<EncargadoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncargadoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncargadoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
