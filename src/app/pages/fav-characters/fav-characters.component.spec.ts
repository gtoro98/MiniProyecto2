import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavCharactersComponent } from './fav-characters.component';

describe('FavCharactersComponent', () => {
  let component: FavCharactersComponent;
  let fixture: ComponentFixture<FavCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
