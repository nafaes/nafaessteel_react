import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Items from "../components/Items/Items";
import { categories } from "../constants/data";
import { ADDTOCART, ITEMS } from "../constants/routes";

const ItemsPage = (props) => {

    const [items, setItems] = useState()
    let history = useHistory();
    
    const {state:{categoryId}}=props.location
    
    useEffect(() => {
        const categoryItems =  categories.find(({categoryId:id}) => id === categoryId);
        setItems(categoryItems.items)

        return () => {
            
        }
    }, [])

    const navigateToItems = (itemId) => {
  
        history.push(ADDTOCART,{
            categoryId: categoryId,
            itemId: itemId
        });
   
  }

   
   console.log(items);
    return (
        <div>
            <Items items={items} navigateToItems={navigateToItems}/>
        </div>
    )
}

export default ItemsPage;

