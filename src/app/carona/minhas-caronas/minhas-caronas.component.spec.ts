import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasCaronasComponent } from './minhas-caronas.component';

describe('MinhasCaronasComponent', () => {
  let component: MinhasCaronasComponent;
  let fixture: ComponentFixture<MinhasCaronasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinhasCaronasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhasCaronasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
