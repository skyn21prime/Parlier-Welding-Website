
import Image from "astro/components/Image.astro";
import { number } from "astro/zod";

interface props {
}



export default ({ }: props) => {

    let randomize = Math.floor(Math.random()*256)

    const ratios = [
        {w:200,h:200},
        {w:200,h:300},
        {w:300,h:200},
    ]

    let ran = Math.floor(Math.random()*ratios.length)

    let width = ratios[ran].w
    let height = ratios[ran].h
    console

    //<img src={`https://picsum.photos/${width}/${height}?random=${randomize}`}></img>
    return (
        <div className="Project" style={
            {
                display:"inline-block",
                width:`${width}px`,
                height:`auto`,
                borderRadius:"10px",
                margin:"1vw",
                padding:"10px",
                border:"1px solid white",
                transition:"250ms",
                background:`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.5)`
            }
         }>
             <img src={`https://picsum.photos/${width}/${height}?random=${randomize}`} alt="Random image from picsum.photos"></img>
             <h3>Project Name</h3>
             <p style={{fontSize:"10px"}}>
             In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. - Wikipedia
             </p>
         </div>
    );
};