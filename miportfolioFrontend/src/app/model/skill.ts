export class Skill {
    id?: number;
    titulo: string;
    percent: string;
    decompressedImageData?: string;
    imageFile?: File;
  
    constructor(titulo: string, percent: string, imageFile?: File) {
      this.titulo = titulo;
      this.percent = percent;
      this.imageFile = imageFile;
    }
  }
  