export type Size = 'small' | 'medium' | 'large';
export type Position = 'top' | 'bottom';
export type Thickness = 'thick' | 'thin';
export type ResumeItem = {
  role: string;
  organization: string;
  location: string;
  description?: string;
  dates: string;
};
