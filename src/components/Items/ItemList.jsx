import { useEffect, useState } from "react";
import productsJson from "./productos.json";
import Item from "./Item";
import { useParams } from "react-router-dom";


function getProducts(categoryName) {
          return new Promise ((resolve)=> {
                    setTimeout(() => {

                      if(categoryName != undefined) {
                        const productosFiltrados = productsJson.filter(
                          (item) => item.category === categoryName
                          );
                          resolve(productosFiltrados)
                      }else {
                        resolve(productsJson);    
                      }
                    }, 2000); 
          });
}

export default function ItemList(){
          const [products, setProducts] = useState([]);
          const [loading, setLoading] = useState(true);
          const {categoryName} = useParams()
          
          useEffect(()=> {
                    getProducts(categoryName).then((data) => {
                              setProducts(data);
                              setLoading(false)
                    });
          }, [categoryName]);

          if(loading) return (<div class="text-center">
          <div class="spinner-border mt-5" role="status"></div>
        </div>)

          return (
                            <div className="item-list" >
                              {products.map((product) => (
                                <div className="">
                                        <Item key={products.id} product={product} />
                                        </div>
                              ))}
                              
                              </div>
                              
          );
} 