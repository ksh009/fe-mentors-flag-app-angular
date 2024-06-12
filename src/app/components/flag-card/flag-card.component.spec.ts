import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagCardComponent } from './flag-card.component';
import { AppModule } from '../../app.module';

describe('FlagCardComponent', () => {
  let component: FlagCardComponent;
  let fixture: ComponentFixture<FlagCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlagCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
