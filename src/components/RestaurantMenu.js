import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from './Shimmer';
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";


//console.log("imported resMenu");
const RestaurantMenu = () => {
    //const [resInfo, setresInfo] = useState(null);

    const { resId } = useParams();
    console.log(resId);
    
    const resInfo = useRestaurantMenu(resId)
    // useEffect(() => {
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async () => {
    //     const data =await fetch(MENU_API+resId);
    //     const json = await data.json();
    //     console.log("json",json);
    //     // console.log("Full API Response:", json);
    //     // console.log("Data:", json.data);
    //     setresInfo(json.data);
    //     console.log(resInfo);
        
    // };

     if(resInfo === null) return <Shimmer />;
        
     console.log("resinfo:",resInfo);


    const {name,cuisines,costForTwoMessage} =resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log("item cards",itemCards)
    
    
  
    return  (
    <div className="Menu">
        <h1>{name} </h1>
        <p>{cuisines.join(",")} - {costForTwoMessage}</p>
        <h2>Menu</h2>
        {<ul>
            {itemCards.map( item => <li key="item.card.info.id">{item.card.info.name} -  Rs{item.card.info.defaultPrice/100 || item.card.info.price } </li>)}
        </ul> }

    </div>
  );
};
export default RestaurantMenu;
