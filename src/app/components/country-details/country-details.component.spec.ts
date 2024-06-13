import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsComponent } from './country-details.component';
import { AppModule } from '../../app.module';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ThemeDataService } from '../../services/theme-data/theme-data.service';
import { FlagsApiService } from '../../services/flags-api/flags-api.service';
import { Country } from '../../interfaces/Country';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;
  let themeDataService: ThemeDataService;
  let mockFlagsApiService: Partial<FlagsApiService>;
  let location: Location;
  let router: Router;
  const mockCountry: Country =     {
    common_name: "Algeria",
    official_name: "People's Democratic Republic of Algeria",
    native_name: "الجمهورية الديمقراطية الشعبية الجزائرية",
    currencies: { name: "Algerian dinar", symbol: "د.ج" },
    capital: ["Algiers"],
    region: "Africa",
    subregion: "Northern Africa",
    languages: ["Arabic"],
    borders: [
      "Tunisia",
      "Libya",
      "Niger",
      "Western Sahara",
      "Mauritania",
      "Mali",
      "Morocco",
    ],
    population: 44700000,
    flags: "https://flagcdn.com/w320/dz.png",
    top_level_domain: [".dz", "الجزائر."],
  };

  beforeEach(async () => {
    mockFlagsApiService = {
      getCountry: jasmine.createSpy().and.callFake((name: string) => {
        return of(mockCountry);
      })
    };

    await TestBed.configureTestingModule({
      declarations: [CountryDetailsComponent],
      imports: [AppModule],
      providers: [
        ThemeDataService,
        { provide: FlagsApiService, useValue: mockFlagsApiService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ name: 'Algeria' }) }
          }
        }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    themeDataService = TestBed.inject(ThemeDataService);
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should reflect changes in theme mode", () => {
    expect(component.themeMode).toBe("dark");

    themeDataService.toggleThemeMode("light");
    fixture.detectChanges();

    expect(component.themeMode).toBe("light");

    themeDataService.toggleThemeMode("dark");
    fixture.detectChanges();

    expect(component.themeMode).toBe("dark");
  });

  it('should fetch country details based on route parameter', () => {component.ngOnInit();
    fixture.detectChanges();

    expect(component.country).toEqual(mockCountry);
  });
});
