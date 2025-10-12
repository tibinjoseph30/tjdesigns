export interface ProjectTypes {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  image?: string;
  keywords: string[] | string;
  bgColors?: string[] | string;
  url?: string;
}
