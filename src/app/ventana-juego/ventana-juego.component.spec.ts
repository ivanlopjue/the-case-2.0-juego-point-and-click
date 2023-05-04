import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaJuegoComponent } from './ventana-juego.component';

describe('VentanaJuegoComponent', () => {
  let component: VentanaJuegoComponent;
  let fixture: ComponentFixture<VentanaJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaJuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
