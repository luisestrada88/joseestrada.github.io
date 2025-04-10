import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Header } from '../../models/header/header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private dbPath = '/header';
  headerRef: AngularFirestoreCollection<Header>;

  constructor(private db: AngularFirestore) {
    this.headerRef = db.collection(this.dbPath);
  }

  getHeader(): AngularFirestoreCollection<Header> {
    return this.headerRef; // Devuelve la colección directamente
  }
}


