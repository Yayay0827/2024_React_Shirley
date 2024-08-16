import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Photo from "./PhotoComponents/Photo";
import Icon from "./Icon";

const Navigation = () => {
    return             <footer style={{backgroundColor : "#FAFAFA"}}
    className="fixed bottom-0 max-w-sm w-full m-auto flex justify-around items-center">

            <Icon IconComponent = {FaHome}></Icon>
            <Icon IconComponent = {IoSearch}></Icon>
            <Icon IconComponent = {FaRegPlusSquare}></Icon>
            <Icon IconComponent = {FaRegHeart}></Icon>
            <Photo size = "small"></Photo>

    </footer>
}
export default Navigation