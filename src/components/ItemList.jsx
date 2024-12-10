
import { addItem } from "../utils/cartSlice";
import { swiggyImg } from "../utils/constants";
import { useDispatch } from "react-redux";



const ItemList = ({items}) => {
  const dispatch= useDispatch();
  const handleAddItem =(item)=>{
    dispatch(addItem(item));
  };

  return (
    <div>
        
    </div>
  )
}

export default ItemList;