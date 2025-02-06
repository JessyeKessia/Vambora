import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasViagensComponent } from './minhas-viagens.component';

describe('MinhasViagensComponent', () => {
  let component: MinhasViagensComponent;
  let fixture: ComponentFixture<MinhasViagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhasViagensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhasViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
