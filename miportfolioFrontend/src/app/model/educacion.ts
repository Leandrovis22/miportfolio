export class Educacion {
    id?: number;
    nombreEdu: string;
    descripcionEdu: string;
    decompressedImageData?: string;
    imageFile?: File;
  
    constructor(nombreEdu: string, descripcionEdu: string, imageFile?: File) {
      this.nombreEdu = nombreEdu;
      this.descripcionEdu = descripcionEdu;
      this.imageFile = imageFile;
    }
  }
  