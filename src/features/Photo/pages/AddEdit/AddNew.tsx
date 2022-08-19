import Banner from "../../../../components/Banner/Banner";
import theme2 from "../../../../assets/images/theme2.jpg"
import PhotoForm from "../../components/PhotoForm";
import {useDispatch, useSelector} from "react-redux"
import { addNewList, editList } from "../../stores/action";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../stores/rootReducer";
import { typeDispatch } from "../../components/interface";
function AddNew() {
const dispatch=useDispatch(); 
const listPhotoMain:typeDispatch[]=useSelector((state:RootState) =>state.addPhotoReducer.listPhoto);
const params=useParams();
const photoEdit=listPhotoMain.find(photo=>photo.id===params.photoId);
const navigate=useNavigate();
   const handleSubmitAdd=(info:any)=>{
        dispatch(addNewList(info));
        return navigate("/")
   }
   const handleSubmitEdit=(info:any)=>{
        dispatch(editList(info));
        return navigate("/")
}

    return (
        <div>
            <Banner title="Add the following image for your collection" backgroundUrl={theme2}/>
            <div className="photoEditForm">
                <PhotoForm onSubmitAdd={handleSubmitAdd} onSubmitEdit={handleSubmitEdit} photoEdit={photoEdit}/>{/*  */}
            </div>
        </div>
    );
}

export default AddNew;