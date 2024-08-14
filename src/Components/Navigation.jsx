import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Icon from "./icon";

const Navigation = () => {
    return             <footer style={{backgroundColor : "#FAFAFA"}}
    className="fixed bottom-0 max-w-sm w-full m-auto flex justify-around items-center">

            <Icon IconComponent = {FaHome}></Icon>
            <Icon IconComponent = {IoSearch}></Icon>
            <Icon IconComponent = {FaRegPlusSquare}></Icon>
            <Icon IconComponent = {FaRegHeart}></Icon>
            <Icon IconComponent = {CgProfile}></Icon>
            

        {/* <div className="text-3xl flex justify-center items-center"
        style={{width: "75px", height: "50px"}}>
            <FaHome />
            </div>
        <div className="text-3xl flex justify-center items-center"
        style={{width: "75px", height: "50px"}}><IoSearch /></div>
        <div className="text-3xl flex justify-center items-center"
        style={{width: "75px", height: "50px"}}><FaRegPlusSquare /></div>
        <div className="text-3xl flex justify-center items-center"
        style={{width: "75px", height: "50px"}}><FaRegHeart /></div>
        <div className="text-3xl flex justify-center items-center"
        style={{width: "75px", height: "50px"}}><CgProfile /></div> */}
    </footer>
}
export default Navigation