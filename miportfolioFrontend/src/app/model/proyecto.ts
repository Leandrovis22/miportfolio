export class Proyecto {
    id?: number;
    titulo: string;
    descripcion: string;
    decompressedImageData?: string;
    imageFile?: File;
  
    constructor(titulo: string, descripcion: string, imageFile?: File) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.imageFile = imageFile;
    }
  }
  