import { typeDispatch } from "../components/interface"
import { ADD_LIST, EDIT_LIST, REMOVE_LIST } from "./typeAction"

export const addNewList=(payload:typeDispatch)=>({
    type:ADD_LIST,
    payload:payload
})
export const removeList=(payload:number)=>({
    type:REMOVE_LIST,
    payload:payload
})
export const editList=(payload:string)=>({
    type:EDIT_LIST,
    payload:payload
})