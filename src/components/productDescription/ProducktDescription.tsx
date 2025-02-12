import { useEffect, useState } from "react";
import style from "./ProducktDescription.module.css";
import ProductList from "./types/Product";
import { Link } from "react-router-dom";

export default function ProducktDescription(): JSX.Element {
  const [products, setProducts] = useState<ProductList[]>([]);

  async function loadProduckt(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/products");
    const arr = await res.json();
    setProducts(arr);
  }

  useEffect(() => {
    loadProduckt();
  }, []);

  return (
    <div>
      <ul className={style.productList}>
        {products.map((product) => (
          <li className={style.productCard} >
            <div className={style.title}> title: {product.title} </div>
            <div className={style.price}> price: {product.price} $</div>
            <img className={style.image} src={product.image} alt="img" />
            <Link className={style.link} to={`${product.id}`}>
              посмотреть товар
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
