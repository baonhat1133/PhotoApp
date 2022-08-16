import a1 from "../../../assets/images/a1.jpg"
import { PHOTO_TYPE_OPTIONS } from "../../../constants/global";
function PhotoForm() {
    return (
        <div className="containerForm">
            <form className="formAddNew">
                <label><h3>Title</h3>
                    <input type="text" placeholder="Title for Photo..." id="inpTitle"/>
                </label>
                <label><h3>Type Photo:</h3>
                    <select name="" id="selectForm">
                        {
                            PHOTO_TYPE_OPTIONS.map(option=>(
                                <option value={option.value}>{option.label}</option>
                            ))
                        }
                    </select>
                </label> 
                <label>
                    <h3>Photo:</h3>
                    <div className="randomPhoto">
                        <button>Get Photo Random</button><br />
                        <img src={a1} alt="a1" />
                    </div>
                </label>
                <button>Add Photo</button>
            </form>
        </div>
    );
}

export default PhotoForm;