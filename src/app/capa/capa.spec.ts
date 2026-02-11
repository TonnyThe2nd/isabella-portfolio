import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capa } from './capa';

describe('Capa', () => {
  let component: Capa;
  let fixture: ComponentFixture<Capa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Capa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
