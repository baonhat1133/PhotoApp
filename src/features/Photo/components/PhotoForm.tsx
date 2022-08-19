import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LIST_PHOTO, PHOTO_TYPE_OPTIONS } from "../../../constants/global";
import { typeDispatch } from "./interface";

export interface typeProps{
    onSubmitAdd:(info:Object)=>void
    onSubmitEdit:(info:Object)=>void
    photoEdit?:typeDispatch
}

function PhotoForm(props:typeProps) {
    const params=useParams();
    const {photoEdit,onSubmitAdd,onSubmitEdit}=props;
    const [title,setTitle]=useState(photoEdit?photoEdit.title:"");
    const [select,setSelect]=useState(photoEdit?photoEdit.select:"Mountain");
    const [err, setErr]=useState("")
    const [ran,setRan]=useState(photoEdit?photoEdit:LIST_PHOTO[0])
    const [infoAdd, setInfoAdd]=useState({})
    const {photoId}=params
    useEffect(()=>{
        if(title.length<5){
            setErr("Title is too short, length title > 4 ")
        }
        else  setErr("")
    },[title])
    useEffect(()=>{
        setInfoAdd({
            id:photoId||`${title}${ran.id}`
            ,title,select,ran:ran.ran
        })
    })

    const handleRandom=(e:React.MouseEvent)=>{
        e.preventDefault();
        const s:number=Math.floor(Math.random() * 14);
        setRan(LIST_PHOTO[s]);
    }
    const handleSubmitPhotoForm=(e:React.BaseSyntheticEvent<MouseEvent, EventTarget & HTMLButtonElement>)=>{
        e.preventDefault();
        e.target.innerText==="Add Photo"?onSubmitAdd(infoAdd):onSubmitEdit(infoAdd);
    }
    return (
        <div className="containerForm">
            <form className="formAddNew">
                <div className="form-group">
                    <label>Title:</label>
                    <input  type="text" 
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            name="inpTitle"
                            placeholder="Title for Photo..."
                            id="inpTitle"/>
                    <span className="err-title">{err}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="selectForm">Type Photo:</label>
                    <select name="selectForm" id="selectForm" onChange={(e)=>{
                        const select=Number(e.target.value);
                        return setSelect(e.target[select-1].innerText);
                    }}
                    >
                        {
                            PHOTO_TYPE_OPTIONS.map((option,index)=>(
                            photoEdit&&option.label===photoEdit.select?<option value={option.value} key={index} selected>{option.label}</option>
                            :<option value={option.value} key={index}>{option.label}</option>
                            
                            ))
                        }
                    </select>
                </div>
                    <div className="form-group">
                         <label>Photo:</label> 
                        <div className="randomPhoto">
                            <button onClick={e=>handleRandom(e)}>Get Photo Random</button><br />
                            <img src={ran.ran} alt="a1" />
                        </div>
                    </div>
                <button className="submitForm" onClick={(e)=>handleSubmitPhotoForm(e)}>{photoEdit?"Update Photo":"Add Photo"}</button>

            </form>
        </div>
    )
}

export default PhotoForm;