import Navigation from "./Navigation";
import Topbar from "./Topbar";
import Storyboard from "./Storyboard";

const Instagram = ( ) =>{
    return <div className = "w-screen h-screen">
        <div className="w-full h-full max-w-sm m-auto"> 
            <Topbar/>
            <Navigation/>
            <Storyboard friends = {12}/>


            

            </div>
        </div>

}
export default Instagram