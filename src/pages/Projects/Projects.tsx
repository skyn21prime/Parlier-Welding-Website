import Project from "./Project";
import "./styles.css"

export default () => {
    let Projects = []

    for(let i = 0;i<20; i++){
        Projects.push(<Project />)
    }

    return (
        <div id="Projects">
            {Projects.map((el)=>{
                return el
            })}
        </div>
    )
}