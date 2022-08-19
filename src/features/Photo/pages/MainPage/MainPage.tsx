import { Link, useNavigate } from "react-router-dom";
import Banner from "../../../../components/Banner/Banner";
import theme1 from "../../../../assets/images/theme1.jpg"
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from "../../stores/rootReducer";
import { addNewList, editList, removeList } from "../../stores/action";
import { typeDispatch } from "../../components/interface";
import {a1} from "../../../../constants/global"
function MainPage() {
    const navigate=useNavigate();
    var photoList=useSelector((state:RootState) =>state.addPhotoReducer.listPhoto)
    console.log(photoList);
    const dispatch=useDispatch();
    const handleRemove=(index:number)=>{
        dispatch(removeList(index))
    }
    const handleEdit=(photo:typeDispatch)=>{
        console.log(photo,"main")
        return navigate(`add/${photo.id}`)
    }
    return (
        <div>
            <Banner title="Please select the most beautiful image" backgroundUrl={theme1}/>
            <Link to="/photos/add" className="linkAddphoto">Add New Photo...</Link>
           <div className="container-list-photo">
             <ul className="listPhotoApp">
                { 
                  photoList!==[]&&photoList.map((a:typeDispatch,index:number)=>(
                      a.ran&&<li className="photoItem" key={index}>
                        <div className="imgList">
                            <img className="photoElement"src={a.ran} width="260px" height="260px" alt={a.ran}/>
                        </div>
                        <div className="hoverEditDel">
                            <h3 style={{color:"red"}}>{a.title}</h3>
                            <h3>Type : {a.select}</h3>
                            <div className="btn">
                                <button className="btn-edit" onClick={()=>handleEdit(a)}>Edit</button>
                                <button className="btn-del" onClick={()=>handleRemove(index)}>Remove</button>
                            </div>
                        </div>
                    </li> 
                    ))
                }
            </ul>
           </div>
        </div>
    )
}

export default MainPage;