// src/types/index.ts
export type Size = 'small' | 'medium' | 'large';
export type Position = 'top' | 'bottom';
export type Route = 'home' | 'projects' | 'resume' | 'about' | 'blog';
export type Thickness = 'thick' | 'thin';
export type ResumeItem = {
  role: string;
  organization: string;
  location: string;
  description?: string;
  dates: string;
};
