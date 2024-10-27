"use client";
import React, { useEffect } from "react";
import styles from "../styles/nike.module.scss";
import redblack from "../assets/shoe/redblack.png";
import bluegreen from "../assets/shoe/bluegreen.png";
import bluegrey from "../assets/shoe/bluegrey.png";
import orangeblue from "../assets/shoe/orangeblue.png";
import rainbow from "../assets/shoe/rainbow.png";
import orangewhite from "../assets/shoe/orangewhite.png";
import Image from "next/image";

export default function Nike() {
  useEffect(() => {
    const page = document.querySelector(`.${styles.page}`);
    if (page) {
      page.classList.add(styles.after); 
    }
  }, []);

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$19.99",
      image: orangeblue,
    },
    {
      id: 2,
      name: "Product 2",
      price: "$29.99",
      image: bluegreen,
    },
    {
      id: 3,
      name: "Product 3",
      price: "$39.99",
      image: bluegrey,
    },
    {
      id: 4,
      name: "Product 4",
      price: "$49.99",
      image: redblack,
    },
    {
      id: 5,
      name: "Product 5",
      price: "$39.99",
      image: orangewhite,
    },
    {
      id: 6,
      name: "Product 6",
      price: "$49.99",
      image: rainbow,
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.nike}>
        <h1>buy it now</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non in
          repellat rem, vitae officia nulla impedit eos tempore. Nam quia natus
          unde saepe a voluptate consequatur non fuga modi minima earum
          accusamus commodi necessitatibus obcaecati, ad exercitationem, ratione
          reprehenderit inventore!
        </p>
        <div className={styles.image} />
      </div>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className={styles.productImage}
            />

            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>{product.name}</h3>
              <p className={styles.productPrice}>{product.price}</p>
              <button className={styles.productButton}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
