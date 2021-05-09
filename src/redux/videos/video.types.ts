import { AnyAction } from "redux";

export const SELECT_VIDEO = 'SELECT_VIDEO'

interface SelectVideo extends AnyAction {
  type: typeof SELECT_VIDEO;
  payload: any;
}

export type VideoActionType = 
  | SelectVideo