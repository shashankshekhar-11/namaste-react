import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from './Shimmer';
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


//console.log("imported resMenu");
const RestaurantMenu = () => {
    //const [resInfo, setresInfo] = useState(null);

    const { resId } = useParams();
    //console.log(resId);
    
    const resInfo = useRestaurantMenu(resId);
    //.log("resinfo:",resInfo);
    // useEffect(() => {
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async () => {
    //     const data =await fetch(MENU_API+resId);
    //     const json = await data.json();
    //     console.log("json",json);
   
    //     setresInfo(json.data);
    //     console.log(resInfo);
        
    // };

const [showIndex,setShowIndex] = useState(null);

     if(resInfo === null) return <Shimmer />;

    const {name,cuisines,costForTwoMessage} =resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards,"abc")
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log("resCategories:",categories);
      
  
    return  (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name} </h1>
        <p className="text-lg font-bold">{cuisines.join(",")} - {costForTwoMessage}</p>
        <p>
            {/*aCCORDIAN CATEGORIES */}
            {categories.map((category,index)  =>(
                    //controlled components
                    <RestaurantCategory 
                    key={category?.card?.card.title}
                    data={category?.card?.card} 
                    showItems ={index === showIndex }
                    setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                    />
                    
            ))}
        </p>

    </div>
  );
};
export default RestaurantMenu;
