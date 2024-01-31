import React from 'react'
import styles from "./HomePage.module.css"
import Footer from './Footer';
import SearchBar from '../components/SearchBar';

const Header = () => (
  <header>
    <h1>Welcome to Our Cookbook</h1>
    <p>Explore the flavors of Turkish and Spanish Cuisine</p>
  </header>
);

const Body = () => (
  <div>
    <section className={styles.cuisineSection}>
      <h2>Turkish Cuisine</h2>
      <p>
        Turkish cuisine is renowned for its rich flavors and diverse dishes.
        From kebabs to baklava, discover the unique taste of Turkey.
      </p>
      <div className={styles.imageContainer}>
        <img src="Recipe Images\turkish_dish2.jpg" alt="Kebabs" />
        <img src="Recipe Images\turkish_dish1.jpg" alt="Mantı" />
        <img src="Recipe Images\turkish_dish3.jpg" alt="Sarma" />
      </div>
    </section>

    <section className={styles.cuisineSection}>
      <h2>Spanish Cuisine</h2>
      <p>
        Spanish cuisine is a celebration of fresh ingredients and bold
        flavors. From paella to churros, savor the taste of Spain.
      </p>
      <div className={styles.imageContainer}>
      
        <img src="Recipe Images\spanish-paella.jpg" alt="Spanish Paella" />
        <img src="Recipe Images\spanish_tapas.jpg" alt="Spanish Tapas" />
        <img src="Recipe Images\spanish_churros.jpg" alt="Spanish Churros" />
      </div>
    </section>
  </div>
);


const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <Body />
      <Footer footerText={"Explore more recipes in our cookbook and bring the flavors of Turkey and Spain to your kitchen!"}/>
    </div>
  )
}

export default HomePage