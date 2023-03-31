import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";

const RussiaPage = () => {
  return (
    <div>
      <Header />
      <section className={styles.body}>
        <article className={styles.information}>
          <div className={styles.titleAndImage}>
            <img
              className={styles.image}
              src="../images/Moscow.jpg"
              alt="russia"
              width="250"
              height="250"
            />
            <div className={styles.titleAndPrice}>
              <h2 className={styles.title}>Москва</h2>
              <p className={styles.price}>Цена: 100 000 рублей</p>
              <h3 className={styles.descriptionTitle}>Описание</h3>
              <p className={styles.description}>
              Красная площадь и Кремль. Красная площадь является неизменным магнитом для туристов. Поговаривают, что поездка в Москву считается недействительной, если путешественник не побывал на Красной площади. Красная площадь, в первую очередь, центр всех политических, военных и культурных событий столицы и всей России. Отсюда в 1941 году уходили на фронт, а уже в 1945 году прошел первый Парад Победы. Современный ансамбль Красной площади — это неповторимый комплекс построек разных стилей и эпох.
              </p>
            </div>
          </div>
          <div className={styles.optionsWrapper}>
            <h3 className={styles.optionsTitle}>Примечание:</h3>
            <ul className={styles.options}>
              <li className={styles.option}>Попробуйте пельмени!</li>
              <li className={styles.option}>И красную икру!</li>
            </ul>
          </div>
        </article>
        <article className={styles.subbar}>
          <h3 className={styles.subbarTitle}>Рейтинг</h3>
          <div className={styles.imageWrapper}>
            <p className={styles.rating}>5</p>
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

export default RussiaPage;
