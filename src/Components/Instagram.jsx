import Navigation from "./Navigation";
import { MdOutlineCameraAlt } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Instagram = ( ) =>{
    return <div className = "w-screen h-screen">
        <div className="w-full h-full max-w-sm m-auto"> 
<Navigation></Navigation>
<div className="w-full flex justify-between items-center">
    <div> <MdOutlineCameraAlt /></div>
    <div style = {{width: "105px", height: "30px"}}> 
        <img className = "w-full h-full object-cover" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-text-icon.png"
    alt=""/>
    </div>
    <div className="flex items-center"><PiTelevisionSimpleBold />
    <IoPaperPlaneOutline />
    </div>
</div>


        </div>
    </div>;

}
export default Instagram