export interface IImagePre {
  id: number;
  image: string;
  rotate: number;
  scale: number;
}


export enum ARROW{
  LEFT='left',
  RIGHT='right'
}

export enum ZOOM {
  IN='in',
  OUT= 'out'
}