import {combineReducers} from "redux"
import { addPhotoReducer } from "./addPhotoReducer"
export const rootReducer=combineReducers({
    addPhotoReducer:addPhotoReducer,
})
export type RootState = ReturnType<typeof rootReducer>;
