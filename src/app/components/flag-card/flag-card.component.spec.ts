import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlagCardComponent } from './flag-card.component';
import { ThemeDataService } from '../../services/theme-data/theme-data.service';
import { QueryDataService } from '../../services/query-data/query-data.service';
import { FlagsApiService } from '../../services/flags-api/flags-api.service';
import { Country } from '../../interfaces/Country';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('FlagCardComponent', () => {
  let component: FlagCardComponent;
  let fixture: ComponentFixture<FlagCardComponent>;
  let mockThemeDataService: Partial<ThemeDataService>;
  let mockQueryDataService: Partial<QueryDataService>;
  let mockFlagsApiService: Partial<FlagsApiService>;
  const mockCountries: Country[] = [
    {
      "common_name": "Afghanistan",
      "official_name": "Islamic Republic of Afghanistan",
      "native_name": "جمهوری اسلامی افغانستان",
      "currencies": { "name": "Afghan afghani", "symbol": "؋" },
      "capital": ["Kabul"],
      "region": "Asia",
      "subregion": "Southern Asia",
      "languages": ["Dari", "Pashto", "Turkmen"],
      "borders": [
        "Iran",
        "Pakistan",
        "Turkmenistan",
        "Uzbekistan",
        "Tajikistan",
        "China"
      ],
      "population": 40218234,
      "flags": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
      "top_level_domain": [".af"]
    },
    {
      "common_name": "Albania",
      "official_name": "Republic of Albania",
      "native_name": "Republika e Shqipërisë",
      "currencies": { "name": "Albanian lek", "symbol": "L" },
      "capital": ["Tirana"],
      "region": "Europe",
      "subregion": "Southeast Europe",
      "languages": ["Albanian"],
      "borders": ["Montenegro", "Greece", "North Macedonia", "Kosovo"],
      "population": 2837743,
      "flags": "https://flagcdn.com/w320/al.png",
      "top_level_domain": [".al"]
    },
    {
      "common_name": "Algeria",
      "official_name": "People's Democratic Republic of Algeria",
      "native_name": "الجمهورية الديمقراطية الشعبية الجزائرية",
      "currencies": { "name": "Algerian dinar", "symbol": "د.ج" },
      "capital": ["Algiers"],
      "region": "Africa",
      "subregion": "Northern Africa",
      "languages": ["Arabic"],
      "borders": [
        "Tunisia",
        "Libya",
        "Niger",
        "Western Sahara",
        "Mauritania",
        "Mali",
        "Morocco"
      ],
      "population": 44700000,
      "flags": "https://flagcdn.com/w320/dz.png",
      "top_level_domain": [".dz", "الجزائر."]
    },
    {
      "common_name": "American Samoa",
      "official_name": "American Samoa",
      "native_name": "American Samoa",
      "currencies": { "name": "United States dollar", "symbol": "$" },
      "capital": ["Pago Pago"],
      "region": "Oceania",
      "subregion": "Polynesia",
      "languages": ["English", "Samoan"],
      "borders": [""],
      "population": 55197,
      "flags": "https://flagcdn.com/w320/as.png",
      "top_level_domain": [".as"]
    },
    {
      "common_name": "Andorra",
      "official_name": "Principality of Andorra",
      "native_name": "Principat d'Andorra",
      "currencies": { "name": "Euro", "symbol": "€" },
      "capital": ["Andorra la Vella"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "languages": ["Catalan"],
      "borders": ["France", "Spain"],
      "population": 77265,
      "flags": "https://flagcdn.com/w320/ad.png",
      "top_level_domain": [".ad"]
    }
  ];

  beforeEach(async () => {
    mockThemeDataService = {
      themeMode$: of('dark')
    };
    mockQueryDataService = {
      searchQuery$: of(''),
      filterQuery$: of('')
    };
    mockFlagsApiService = {
      getAllCountries: () => of(mockCountries)
    };

    await TestBed.configureTestingModule({
      declarations: [FlagCardComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: ThemeDataService, useValue: mockThemeDataService },
        { provide: QueryDataService, useValue: mockQueryDataService },
        { provide: FlagsApiService, useValue: mockFlagsApiService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FlagCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with dark theme mode', () => {
    expect(component.themeMode).toBe('dark');
  });
});
