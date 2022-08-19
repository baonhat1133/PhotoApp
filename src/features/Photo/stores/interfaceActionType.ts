interface actionTypeAddEdit{
    type:string;
    payload:any;
}
interface actionTypeRemove{
    type:string;
    payload:any;
}
export type ActionType=actionTypeAddEdit|actionTypeRemove;