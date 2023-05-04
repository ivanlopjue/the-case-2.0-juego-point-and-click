import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImagenesComponent } from './home-imagenes.component';

describe('HomeImagenesComponent', () => {
  let component: HomeImagenesComponent;
  let fixture: ComponentFixture<HomeImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeImagenesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
