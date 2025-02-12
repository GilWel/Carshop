import styles from "./ProductPage.module.css";

import { useEffect, useState } from "react";
import ProductList from "../productDescription/types/Product";
import { Link, useParams } from "react-router-dom";

export default function ProductPage(): JSX.Element {
  const { productId } = useParams();

  const [product, setProduct] = useState<ProductList | undefined>(undefined);

  async function fetchProduct(): Promise<void> {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await res.json();
    setProduct(data);
  }
  useEffect(() => {
   
      fetchProduct();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <div>
      <h2>Product Page</h2>
      <ul className={styles.productList}>
        <li className={styles.productCard} key={product?.id}>
          <div className={styles.title}>Название: {product?.title}</div>
          <div className={styles.price}>Цена: {product?.price}$</div>
          <div className={styles.category}>Категория: {product?.category}</div>
          <img className={styles.image} src={product?.image} alt="изображение" />
          <Link to= "../ProducktDescription">К списку товаров</Link>
        </li>
      </ul>
    </div>
  );
}
