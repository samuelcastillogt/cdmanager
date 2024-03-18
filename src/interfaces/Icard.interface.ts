export interface ICard {
  data: Idata;
  id: string;
}
interface Idata{
    nombre: string;
    imagen: string;
    categoria: string;
    descripcion: string;
    direccion: string;
    lat: string;
    lng: string;
}
