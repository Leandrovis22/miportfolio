export class Persona{
    id?: number;
    nombre: string;
    subtitulo: string;
    descripcion: string;
    decompressedImageData?: string;
    imageFile?: File;
  
    constructor(nombre: string, subtitulo: string, descripcion: string, imageFile?: File) {
      this.nombre = nombre;
      this.subtitulo = subtitulo;
      this.descripcion = descripcion;
      this.imageFile = imageFile;
    }
  }