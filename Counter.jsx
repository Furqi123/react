import { useEffect } from "react";

function Counter({count}){
 
    useEffect(()=>{
   console.log("test counter")
return ()=>{
    console.log("counter mar jayega")
}

    },[])

    return(
        <div>
            <h2>{count}</h2>
        </div>
    )
}


export default Counter;