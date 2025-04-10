import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { WorkExperience } from '../../models/work-experience/work-experience.model';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  accesoWorkExperience = "work experience running...";

  private dbPath = '/work-experience';
  workExperienceRef: AngularFirestoreCollection<WorkExperience>;

  constructor(private db: AngularFirestore) {
    // Inicializa la referencia a la colección de Firestore
    this.workExperienceRef = db.collection(this.dbPath);
  }

  // Método para obtener la colección de trabajo
  getWorkExperience(): AngularFirestoreCollection<WorkExperience> {
    return this.workExperienceRef;
  }
}





