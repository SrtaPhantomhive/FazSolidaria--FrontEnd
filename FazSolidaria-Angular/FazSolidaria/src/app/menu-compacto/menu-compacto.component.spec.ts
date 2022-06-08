import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCompactoComponent } from './menu-compacto.component';

describe('MenuCompactoComponent', () => {
  let component: MenuCompactoComponent;
  let fixture: ComponentFixture<MenuCompactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCompactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCompactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
