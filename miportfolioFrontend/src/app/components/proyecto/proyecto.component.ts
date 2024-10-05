import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/sproyecto.service';
import { TokenService } from 'src/app/service/token.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; // Importaciones nuevas

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyecto: Proyecto[] = [];
  islogged = false;

  // Inyectamos el servicio DomSanitizer en el constructor
  constructor(
    private sProyecto: SProyectoService, 
    private tokenService: TokenService,
    private sanitizer: DomSanitizer // Nuevo
  ) {}

  ngOnInit(): void {
    this.cargarProyecto();
    this.islogged = this.tokenService.getToken() ? true : false;
  }

  // Modificamos formatDescription para usar bypassSecurityTrustHtml
  formatDescription(description: string): SafeHtml {
    const urlPattern = /\b((http|https):\/\/?)[\w.-]+(?:\.com|\.app)\b/gi;
    const formattedDescription = description.replace(urlPattern, (url) => {
      return `<a style="word-break: break-word !important; overflow-wrap: anywhere !important; white-space: normal !important; display: inline-block !important;" class="project-link" href="${url}" target="_blank">${url}</a>`;
    });

    // Usamos bypassSecurityTrustHtml para evitar que Angular sanee el HTML
    return this.sanitizer.bypassSecurityTrustHtml(formattedDescription);
  }

  cargarProyecto(): void {
    this.sProyecto.lista().subscribe(data => {
      this.proyecto = data;
    });
  }

  delete(id?: number): void {
    if (id != undefined) {
      this.sProyecto.delete(id).subscribe(
        data => this.cargarProyecto(),
        err => alert("Ocurrió un error")
      );
    }
  }
}
