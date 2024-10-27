"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles/home.module.scss";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const router = useRouter();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme("dark");
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const goToNike = () => {
    router.push("/nike");
  };

  return (
    <div className={styles.page}>
      <div className={styles.heading}>
        <h1>Welcome to GoodsCart</h1>
        <p>buy anything from anywhere super-easily</p>
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className={styles.nike} onClick={goToNike}>
        <div className={styles.dialog}>
          <h1>love nike ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            quidem?
          </p>
        </div>
        <div className={styles.image}></div>
      </div>
    </div>
  );
}
