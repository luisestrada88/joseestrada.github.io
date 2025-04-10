import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header-service/header.service';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';
import { Header } from '../models/header/header.model';
import { WorkExperience } from '../models/work-experience/work-experience.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header!: Header;
  workExperience: WorkExperience[] = [];  // Definimos 'workExperience'

  constructor(
    private headerService: HeaderService,
    private workExperienceService: WorkExperienceService  // Agregamos el servicio para workExperience
  ) {}

  ngOnInit(): void {
    // Obtener los datos del header
    this.headerService.getHeader().snapshotChanges().subscribe((data: any[]) => {
      const headerData = data.map((e: any) => {
        const data = e.payload.doc.data() as Header;
        const id = e.payload.doc.id;
        return { id, ...data };
      });

      if (headerData.length > 0) {
        this.header = headerData[0];
        console.log(this.header);  // Verifica que los datos del header se estén recuperando
      }
    });

    // Obtener las experiencias laborales
    this.workExperienceService.getWorkExperience().snapshotChanges().subscribe((data: any[]) => {
      const workData = data.map((e: any) => {
        const data = e.payload.doc.data() as WorkExperience;
        const id = e.payload.doc.id;
        return { id, ...data };
      });

      if (workData.length > 0) {
        this.workExperience = workData;
        console.log(this.workExperience);  // Verifica que las experiencias laborales se estén recuperando
      }
    });
  }
}

