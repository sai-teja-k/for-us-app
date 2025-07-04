import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesComponent } from './quotes';

describe('Quotes', () => {
  let component: QuotesComponent;
  let fixture: ComponentFixture<QuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
