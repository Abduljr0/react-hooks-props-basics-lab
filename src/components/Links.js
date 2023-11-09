import react from "react";

 function  Links ({props}){
    return(
        <div id="links">
            <h3>Links</h3>
            <a href="link">{props.github}</a>
            <a href="link">{props.linkedin}</a>
            
        
        </div>
    )
 }
 export default Links;