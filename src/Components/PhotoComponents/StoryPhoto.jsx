// const StoryProfile = (props) => {

    
//     return <div className="flex-col items-center justify-center">

//     <img src= {props.pfp}  style={{width: "60px", height: "60px", borderRadius: "999px", backgroundColor: "lightgray" }}></img>
//     <div style={{width: "60px", height: "20px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "14px"}}>{props.profileName}</div>
//     </div>
// }

// export default StoryProfile

import Photo from "./Photo";

const StoryPhoto = () => {
    return (
        <div
        style={{
            width: "64px", 
            height: "64px", 
            border: "2px solid #D91A46"
        }}
        className="flex justify-center items-center p-1 rounded-full">
            <Photo/>
        </div>
    )
    
}
export default StoryPhoto