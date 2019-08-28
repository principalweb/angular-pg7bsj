
export interface Figure {
  color: string;
  shape: string;  
}

export interface FigureState {
  color: string;
  shape: string;
  history?: Figure[];
}
