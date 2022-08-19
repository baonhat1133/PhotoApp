import { typeDispatch } from "../components/interface";
import { ActionType } from "./interfaceActionType";
import { ADD_LIST, EDIT_LIST, REMOVE_LIST } from "./typeAction"

interface stateType{
    listPhoto:any;
}
const initState={
    listPhoto:[]
}
export const addPhotoReducer=(state=initState,action:ActionType) =>{
    switch(action.type){
        case ADD_LIST:{
            const newList=[...state.listPhoto];
            const list:stateType={
                listPhoto:[...newList,action.payload]
            }
            return list;
        }
        case REMOVE_LIST:{
            const newList=[...state.listPhoto];
            const newListRemove=newList.filter((photo,index)=>action.payload!==index)
            return {
                listPhoto: newListRemove
            };
        }
        case EDIT_LIST:{
            const newList=[...state.listPhoto];
            const newList1=newList.map((photo:typeDispatch,index)=>{
               if(photo.id===action.payload.id){
                   photo.title=action.payload.title
                   photo.select=action.payload.select
                   photo.ran=action.payload.ran
               }
            })
            console.log(newList,"newList Reducer");
            return {
                listPhoto:newList
            }
        }
        default:
            return state;
    }
}