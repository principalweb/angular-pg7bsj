import { FigureActions, ActionTypes } from './figure.actions';
import { Figure, FigureState } from './figure.state';

const initialValue: Figure = {
  color: 'red',
  shape: 'rectangle'
}

const initialState: FigureState = {
  ... initialValue,
  history: []
}

export function reducer(state: FigureState = initialState, action: FigureActions): FigureState {

  switch (action.type) {
    case ActionTypes.ChangeColor: {
      const { shape, color, history } = state;

      return {
        ... state,
        color: action.payload.color,
        history: [
          ... history,
          { color, shape }
        ]
      };
    }
    case ActionTypes.ChangeShape: {
      const { shape, color, history } = state;

      return {
        ... state,
        shape: action.payload.shape,
        history: [
          ... history,
          { color, shape }
        ]
      };
    }
    case ActionTypes.Undo: {
      const { history } = state;

      if (history && history.length ) {
        const prev = history.pop();
        return {
          ... prev,
          history
        };
      } else {
        return state;
      }
    } 
    default: {
      return state;
    }
  }
}