import ItemDetail from "./ItemDetail";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import productsJson from "./productos.json";


function useProducts(descriptionId) {

  return new Promise ((resolve)=> {
    setTimeout(() => {
      if(descriptionId != undefined) {
        const detalle = productsJson.filter(
          (item) => item.description === descriptionId
          );
          resolve(detalle)
      }else {
        resolve(productsJson);    
      }
      
    }, 2000);

  });
}
/* const [product, setProducts] = useState([]); */

export default function Productos(){

  const product = useProducts();
  const {descriptionId} = useParams()

  useEffect(()=> {
    useProducts(descriptionId)
            .then (response => response.json)
            .then(datos => {
              useProducts(datos)
            })
  }, [descriptionId]);

  return (

      <div>
      <ItemDetail  item={product} />
      </div>

)

  }

        
        




      