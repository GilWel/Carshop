import { useEffect, useState } from "react";
import style from "./ProducktDescription.module.css"


interface ProductList {
    id: number;
    title: string;
    image: string;
    price: number;
}

 export default function ProducktDescription(): JSX.Element{

    const [products, setProducts] = useState<ProductList[]>([]);

    async function loadProduckt():Promise <void> {
        const  res = await fetch("https://fakestoreapi.com/products");
        const  arr = await res.json();
        setProducts(arr);
     }

        useEffect (() =>{
              loadProduckt();
    },[])
      
 

    return(
        <div>
       <ul className={style.productList}>
        {products.map((product)=>
        <li className = {style.productCard} key={product.id} >
        <div className={style.title}> title: {product.title} </div>
        <div className={style.price}> price: {product.price}</div>
        <img className={style.image}  src={product.image}  alt="img"  />
        </li>
        
     )}
     
      </ul>
      </div>
    )
 }