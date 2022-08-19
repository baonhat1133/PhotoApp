import { createStore } from "redux";
import { rootReducer } from "./features/Photo/stores/rootReducer";
export const store=createStore(rootReducer)