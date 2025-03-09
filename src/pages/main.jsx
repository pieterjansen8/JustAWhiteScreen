import { useState } from "react";
export default function Page(){
    const [clicked, setClicked] = useState(false)
    function req(){ 
         document.body.requestFullscreen();
         setClicked(true)
    }
    function rerec(){
        document.exitFullscreen();
        setClicked(false)
    }

    return(
        <button onClick={clicked ? rerec : req }>{clicked? "exit" : "request"}</button>
    )
}