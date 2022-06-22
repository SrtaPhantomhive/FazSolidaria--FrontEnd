import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuApresentacaoComponent } from './menu-apresentacao.component';

describe('MenuApresentacaoComponent', () => {
  let component: MenuApresentacaoComponent;
  let fixture: ComponentFixture<MenuApresentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuApresentacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuApresentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
