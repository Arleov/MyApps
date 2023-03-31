import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";

const SpainPage = () => {
  return (
    <div>
      <Header />
      <section className={styles.body}>
        <article className={styles.information}>
          <div className={styles.titleAndImage}>
            <img
              className={styles.image}
              src="../images/madrid.jpg"
              alt="spain"
              width="250"
              height="250"
            />
            <div className={styles.titleAndPrice}>
              <h2 className={styles.title}>Мадрид </h2>
              <p className={styles.price}>Цена: 152 000 рублей</p>
              <h3 className={styles.descriptionTitle}>Описание</h3>
              <p className={styles.description}>
              Это столица Испании, но начинать знакомство со страной с нее точно не стоит. Город не настолько яркий, как Барселона или Валенсия, но в этом тоже есть особая прелесть. Обязательно посетите Королевский дворец, дворец и фонтан Сибелес, площадь Пласа-Майор, парк Ретиро, вокзал Аточа. Прогуляйтесь по Гран Виа и завершите свой день в одном из многочисленных ресторанов в центре города с бутылочкой испанского вина и знаменитыми тапас.
              </p>
            </div>
          </div>
          <div className={styles.optionsWrapper}>
            <h3 className={styles.optionsTitle}>Примечание:</h3>
            <ul className={styles.options}>
              <li className={styles.option}>
              Обычно авиабилеты поступают в продажу за 330 суток до вылета. Но лучше всего бронировать билеты за 8 недель до поездки – 2 месяца.
              </li>
            </ul>
          </div>
        </article>
        <article className={styles.subbar}>
          <h3 className={styles.subbarTitle}>Рейтинг</h3>
          <div className={styles.imageWrapper}>
            <p className={styles.rating}>4.31</p>
          </div>
          <div className={styles.addBag}>
            <p className={styles.addBagText}>Добавить в корзину</p>
            <div className={styles.addBagImage}>
              <img src="../images/bag.svg" alt="bag" width="76" height="48" />
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default SpainPage;
