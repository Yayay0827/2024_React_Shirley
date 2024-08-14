const Icon = (props) => {
    const {IconComponent} = props

    return (
        <div className="flex justify-center items-center"
            style={{width: "75px", height:"50px"}}>
                <IconComponent className= "w-6 h-6"></IconComponent>
        </div>
    )
}
export default Icon