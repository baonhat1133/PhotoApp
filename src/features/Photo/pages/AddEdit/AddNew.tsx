import { Link } from "react-router-dom";
import Banner from "../../../../components/Banner/Banner";
import theme2 from "../../../../assets/images/theme2.jpg"
import PhotoForm from "../../components/PhotoForm";
function AddNew() {
    return (
        <div>
            <Banner title="Add the following image for your collection" backgroundUrl={theme2}/>
            <div className="photoEditForm">
                <PhotoForm/>
            </div>
        </div>
    );
}

export default AddNew;