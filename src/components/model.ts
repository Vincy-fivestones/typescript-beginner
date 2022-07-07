import { useReducer } from "react";
import { tokenToString } from "typescript";

export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
