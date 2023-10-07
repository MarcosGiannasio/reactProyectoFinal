import React from "react";
import Title from "../Title";
import ItemList from "../Items/ItemList";
import "./listContainer.css"




export const ItemListContainer = (props) => {

          return (
                    <div>
                    <hr/>
                    <Title greeting={props.texto}/>
                              <div>
                              <ItemList/>
                              </div>
                    </div>


          );
}


export default ItemListContainer

