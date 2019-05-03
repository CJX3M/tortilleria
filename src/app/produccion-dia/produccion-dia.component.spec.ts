import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionDiaComponent } from './produccion-dia.component';

describe('ProduccionDiaComponent', () => {
  let component: ProduccionDiaComponent;
  let fixture: ComponentFixture<ProduccionDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduccionDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduccionDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
