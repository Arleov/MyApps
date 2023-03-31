import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";
import axios from "axios";
import Card from "../../components/Card/Card";



const dataJapan = [
  {
    id: 0,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 5,
  },
];

const dataRussia = [
  {
    id: 0,
    image: "../images/Moscow.jpg",
    name: "Москва",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/Moscow.jpg",
    name: "Москва",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/Moscow.jpg",
    name: "Москва",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/Moscow.jpg",
    name: "Москва",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/Moscow.jpg",
    name: "Москва",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/Moscow.jpg",
    name: "Москва",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/Moscow.jpg",
    name: "Москва",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/Moscow.jpg",
    name: "Москва",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/Moscow.jpg",
    name: "Москва",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/Moscow.jpg",
    name: "Москва",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/Moscow.jpg",
    name: "Москва",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/Moscow.jpg",
    name: "Москва",
    stars: 5,
  },
];
const dataSpain = [
  {
    id: 0,
    image: "../images/madrid.jpg",
    name: "Мадрид",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/madrid.jpg",
    name: "Мадрид",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/madrid.jpg",
    name: "Мадрид",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/madrid.jpg",
    name: "Мадрид",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/madrid.jpg",
    name: "Мадрид",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/madrid.jpg",
    name: "Мадрид",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/madrid.jpg",
    name: "Мадрид",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/madrid.jpg",
    name: "Мадрид",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/madrid.jpg",
    name: "Мадрид",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/madrid.jpg",
    name: "Мадрид",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/madrid.jpg",
    name: "Мадрид",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/madrid.jpg",
    name: "Мадрид",
    stars: 5,
  },
];

const dataTurkey = [
  {
    id: 0,
    image: "../images/Turkish.jpg",
    name: "Тур по Турции",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/Turkish.jpg",
    name: "Тур по Турции",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/Turkish.jpg",
    name: "Тур по Турции",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/Turkish.jpg",
    name: "Тур по Турции",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/Turkish.jpg",
    name: "Тур по Турции",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/Turkish.jpg",
    name: "Тур по Турции",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/Turkish.jpg",
    name: "Тур по Турции",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/Turkish.jpg",
    name: "Тур по Турции",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/Turkish.jpg",
    name: "Тур по Турции",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/Turkish.jpg",
    name: "Тур по Турции",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/Turkish.jpg",
    name: "Тур по Турции",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/Turkish.jpg",
    name: "Тур по Турции",
    stars: 5,
  },
];

const dataFrance = [
  {
    id: 0,
    image: "../images/Paris.jpg",
    name: "Туры по Франции",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/Paris.jpg",
    name: "Туры по Франции",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/Paris.jpg",
    name: "Туры по Франции",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/Paris.jpg",
    name: "Туры по Франции",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/Paris.jpg",
    name: "Туры по Франции",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/Paris.jpg",
    name: "Туры по Франции",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/Paris.jpg",
    name: "Туры по Франции",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/Paris.jpg",
    name: "Туры по Франции",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/Paris.jpg",
    name: "Туры по Франции",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/Paris.jpg",
    name: "Туры по Франции",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/Paris.jpg",
    name: "Туры по Франции",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/Paris.jpg",
    name: "Туры по Франции",
    stars: 5,
  },
];

const dataItaly = [
  {
    id: 0,
    image: "../images/Danovac.jpg",
    name: "Тур по Италии",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/Danovac.jpg",
    name: "Тур по Италии",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/Danovac.jpg",
    name: "Тур по Италии",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/Danovac.jpg",
    name: "Тур по Италии",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/Danovac.jpg",
    name: "Тур по Италии",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/Danovac.jpg",
    name: "Тур по Италии",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/Danovac.jpg",
    name: "Тур по Италии",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/Danovac.jpg",
    name: "Тур по Италии",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/Danovac.jpg",
    name: "Тур по Италии",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/Danovac.jpg",
    name: "Тур по Италии",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/Danovac.jpg",
    name: "Тур по Италии",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/Danovac.jpg",
    name: "Тур по Италии",
    stars: 5,
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [tongler, setTongler] = useState("spain","japan");
  const [ourData, setOurData] = useState([]);

  useEffect(() => {
    const getDataFunction = async () => {
      const { data } = await axios.get(
        `https://6388d722d94a7e5040a86ba3.mockapi.io/${tongler}`
      );
      await setOurData(data);
    };
    getDataFunction();
  }, [tongler]);

  useEffect(() => {
    if (localStorage.password === "") {
      navigate("/registration");
    }
  }, []);

  return (
    <div>
      <Header />
      <ul className={styles.navigation}>
        <li
          className={
            tongler === "russia"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("russia")}
        >
          <p className={styles.navigationName}>Россия</p>
        </li>
        <li
          className={
            tongler === "japan"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("japan")}
        >
          <p className={styles.navigationName}>Япония</p>
        </li>
        <li
          className={
            tongler === "turkey"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("turkey")}
        >
          <p className={styles.navigationName}>Турция</p>
        </li>
        <li
          className={
            tongler === "france"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("france")}
        >
          <p className={styles.navigationName}>Франция</p>
        </li>
        <li
          className={
            tongler === "spain"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("spain")}
        >
          <p className={styles.navigationName}>Испания</p>
        </li>
        <li
          className={
            tongler === "italy"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("italy")}
        >
          <p className={styles.navigationName}>Италия</p>
        </li>
      </ul>
      <section className={styles.products}>
        {(tongler === "japan"
          ? dataJapan
          : tongler === "russia"
          ? dataRussia
          : tongler === "turkey"
          ? dataTurkey
          : tongler === "france"
          ? dataFrance
          : tongler === "spain"
          ? dataSpain
          : tongler === "italy"
          ? dataItaly
          : ourData
        ).map((el) => (
          <Card tongler={tongler} el={el}  ></Card>
        ))}
      </section>
      <ul className={styles.pageNavigation}>
        <li className={styles.pageItemNav}>
          <p className={styles.pageItemText}>1</p>
        </li>
        <li className={styles.pageItemNav}>
          <p className={styles.pageItemText}>2</p>
        </li>
        <li className={styles.pageItemNav}>
          <p className={styles.pageItemText}>3</p>
        </li>
        <li className={styles.pageItemPoints}>
          <p className={styles.pageItemText}>...</p>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Home;

{
  /*
            <Link
  to={
    tongler === "japan"
      ? "/japan"
      : tongler === "russia"
      ? "/russia"
      : tongler === "spain"
      ? "/spain"
      : "/"
  }
  className={styles.product}
  key={el.id}
>
  <div className={styles.imageWrapper}>
    <img
      className={styles.image}
      src={el.image}
      alt=""
      width="195"
      height="135"
    />
  </div>
  <div className={styles.cardInformation}>
    <p className={styles.cardTitle}>{el.name}</p>
    <div className={styles.cardCount}>
      <p className={styles.count}>{el.stars}</p>
      <div className={styles.cardImage}>
        <img
          src="../images/star-outlined.svg"
          width="20"
          height="14"
          alt=""
        />
      </div>
    </div>
  </div>
</Link>
  */
}
