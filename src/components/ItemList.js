//import { CDN_URL } from '../utils/constants';

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items  }) => {
  //console.log("items",items);
  
  const dispatch =useDispatch();

  const handleAddItem= (item) =>{
    //console.log("Added item:", item);
    dispatch(addItem(item));
  
    
  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button 
              className="p-2 ml-6 mt-[70px] rounded-lg bg-black text-white shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s]"
              onClick ={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
