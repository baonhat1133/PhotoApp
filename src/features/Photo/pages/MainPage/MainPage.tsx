import { Link } from "react-router-dom";
import Banner from "../../../../components/Banner/Banner";
import theme1 from "../../../../assets/images/theme1.jpg"
function MainPage() {
    return (
        <div>
            <Banner title="Please select the most beautiful image" backgroundUrl={theme1}/>
            <Link to="/photos/add" className="linkAddphoto">Add New Photo...</Link>
        </div>
    );
}

export default MainPage;