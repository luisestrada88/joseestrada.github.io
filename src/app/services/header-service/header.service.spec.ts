import { TestBed } from '@angular/core/testing';
import { HeaderService } from './header.service';
import { environment } from '../../environments/environment';  // Asegúrate de que el path sea correcto
import { AngularFireModule } from '@angular/fire/compat';

describe('HeaderService', () => {
  let service: HeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(HeaderService);
  });

 xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});



