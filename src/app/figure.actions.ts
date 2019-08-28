import { Action } from '@ngrx/store';

export enum ActionTypes {
  ChangeColor = '[Figure] Change Color',
  ChangeShape = '[Figure] Change Shape',
  Undo = '[Figure] Undo',
}

export class ChangeColor implements Action {
  readonly type = ActionTypes.ChangeColor;

  constructor(public payload: {
    color: string;
  }) {}
}

export class ChangeShape implements Action {
  readonly type = ActionTypes.ChangeShape;

  constructor(public payload: {
    shape: string;
  }) {}
}

export class UndoChange implements Action {
  readonly type = ActionTypes.Undo;
}

export type FigureActions = ChangeColor | ChangeShape | UndoChange;