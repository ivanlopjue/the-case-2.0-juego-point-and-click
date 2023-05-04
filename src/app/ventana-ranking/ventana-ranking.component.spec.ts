import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaRankingComponent } from './ventana-ranking.component';

describe('VentanaRankingComponent', () => {
  let component: VentanaRankingComponent;
  let fixture: ComponentFixture<VentanaRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
