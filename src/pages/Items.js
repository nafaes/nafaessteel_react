import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Items from "../components/Items/Items";
import { categories } from "../constants/data";

const ItemsPage = (props) => {
    // const [AllCategories, ] = useState(categories)
    const [items, setItems] = useState()
    
    const {state}=props.location
    console.log(state.categoryId); 

    useEffect(() => {
        const categoryItems =  categories.find(({categoryId}) => categoryId === state.categoryId);
        setItems(categoryItems.items)

        return () => {
            
        }
    }, [])

   
   console.log(items);
    return (
        <div>
            <Items items={items}/>
        </div>
    )
}

export default ItemsPage;

