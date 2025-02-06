import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejarViagemComponent } from './planejar-viagem.component';

describe('PlanejarViagemComponent', () => {
  let component: PlanejarViagemComponent;
  let fixture: ComponentFixture<PlanejarViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanejarViagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanejarViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
