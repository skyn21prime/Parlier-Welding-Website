


function main(){
    let i = 1
    setInterval(()=>{
        let string = ""
        i++
        if(i>3){
            i=1
        }
        for(let o = 0;o<i;o++){
            string+="."
        }
        document.getElementById("dots").innerText = string
    },500)
   window.onload = ()=>{
    document.getElementById("Main-Header").style.height = "20vh"
   }

    return 0;
}




export default main