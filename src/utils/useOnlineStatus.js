import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
    const[onlineStauts,setOnlineStatus] = useState(true);

    //check online status

    useEffect (() =>{
        window.addEventListener("offline",() =>{
            setOnlineStatus(false);
        });

        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });
    },[]);

    //boolean value
    return onlineStauts;
}

export default useOnlineStatus